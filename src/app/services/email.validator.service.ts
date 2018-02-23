import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { DOMAINS } from '../models/mailcheck';

@Injectable()
export class EmailValidatorService {

    domainThreshold = 2;
    secondLevelThreshold = 2;
    topLevelThreshold = 2;
    domains: string[] = DOMAINS.default;
    secondLevelDomains: string[] = DOMAINS.defaultSecondLevel;
    topLevelDomains: string[] = DOMAINS.defaultTopLevel;

    lastEmailChecked: string;

    // INVALID_1 = 'Email address must contain one "@"';
    // INVALID_2 = 'Please enter a valid email address';
    // INVALID_3 = 'Did you mean ';

    /*
    * GERMAN EMAIL ERROR MESSAGES (Uncomment to switch)
    */
    INVALID_1 = 'Emailadresse muss ein @ enthalten';
    INVALID_2 = 'Bitte geben Sie eine gültige Emailadresse an';
    INVALID_3 = 'Meinten Sie ';

    /* public validate(ctrl: AbstractControl): any {
        if (!ctrl) {
            return null;
        } else {
            return this.run(ctrl.value);
        }
    } */

    public validate() {
        return (ctrl: AbstractControl): {[key: string]: any} => {
            if (!ctrl.value) {
                return null;
            } else {
                return this.run(ctrl.value);
            }
        };
    }

    private run(email: string) {
        // var defaultCallback = function(result){ return result; };
        // var suggestedCallback = opts.suggested || defaultCallback;
        // var emptyCallback = opts.empty || defaultCallback;
        if (email.indexOf('@') === -1) {
            return {address: '', domain: '', full: email, message: this.INVALID_1 };
        } else if ( email.indexOf('@') < 1 || email.indexOf('@') === email.length - 1) {
            return {address: email.replace('@', ''), domain: '', full: email, message: this.INVALID_2 };
        } else if (this.lastEmailChecked && this.lastEmailChecked === email) {
            return null;
        } else {
            this.lastEmailChecked = email;
            const result = this.suggest(this.encodeEmail(email.toLowerCase()));
            return (result && result.message) ? { message: result.message } : null; //  ? suggestedCallback(result) : emptyCallback();
        }
    }

    private suggest(email: string) {
        const emailParts = this.splitEmail(email);
        let missingParts = false;

        if (!emailParts.secondLevelDomain) {
            emailParts.secondLevelDomain = emailParts.topLevelDomain;
            emailParts.topLevelDomain = 'com';
            emailParts.domain = emailParts.secondLevelDomain + '.' + emailParts.topLevelDomain;
            missingParts = true;
        }
        if (/\.$/.test(emailParts.domain)) {
            emailParts.topLevelDomain = 'com';
            emailParts.domain += emailParts.topLevelDomain;
            missingParts = true;
        }

        if (this.secondLevelDomains && this.topLevelDomains) {
            // If the email is a valid 2nd-level + top-level, do not suggest anything.
            if (this.secondLevelDomains.indexOf(emailParts.secondLevelDomain) !== -1 &&
            this.topLevelDomains.indexOf(emailParts.topLevelDomain) !== -1) {
                return missingParts ? {
                    address: emailParts.address,
                    domain: emailParts.domain,
                    full: emailParts.address + '@' + emailParts.domain,
                    message: '' } :
                    null;
            }
        }

        let closestDomain = this.findClosestDomain(emailParts.domain, this.domains, this.domainThreshold);

        if (closestDomain) {
            if (closestDomain === emailParts.domain) {
                // The email address exactly matches one of the supplied domains;
                // do not return a suggestion
                return null;
            } else {
                // The email address closely matches one of the supplied domains;
                // return a suggestion
                return {
                    address: emailParts.address,
                    domain: closestDomain,
                    full: emailParts.address + '@' + closestDomain,
                    message: this.INVALID_3 + emailParts.address + '@' + closestDomain + '?'
                };
            }
        }

        // The email address does not closely match one of the supplied domains
        const closestSecondLevelDomain =
            this.findClosestDomain(emailParts.secondLevelDomain, this.secondLevelDomains, this.secondLevelThreshold );
        const closestTopLevelDomain =
            this.findClosestDomain(emailParts.topLevelDomain, this.topLevelDomains, this.topLevelThreshold);

        if (emailParts.domain) {
            closestDomain = emailParts.domain;
            let rtrn = false;

            if (closestSecondLevelDomain && closestSecondLevelDomain !== emailParts.secondLevelDomain) {
                // The email address may have a mispelled second-level domain;
                // return a suggestion
                closestDomain = closestDomain.replace(emailParts.secondLevelDomain, closestSecondLevelDomain);
                rtrn = true;
            }

            if (closestTopLevelDomain &&
                closestTopLevelDomain !== emailParts.topLevelDomain &&
                emailParts.secondLevelDomain !== '') {
                    // The email address may have a mispelled top-level domain;
                    // return a suggestion
                    closestDomain = closestDomain.replace(new RegExp(emailParts.topLevelDomain + '$'), closestTopLevelDomain);
                    rtrn = true;
                }

                if (rtrn) {
                    return {
                        address: emailParts.address,
                        domain: closestDomain,
                        full: emailParts.address + '@' + closestDomain,
                        message: ''
                    };
                }
        }

        // The email address exactly matches one of the supplied domains, does not closely
        // match any domain and does not appear to simply have a mispelled top-level domain,
        // or is an invalid email address; do not return a suggestion.
        return null;
    }

    private findClosestDomain (domain: string, domains: string[], threshold: number): any {
        let dist, minDist = Infinity, closestDomain = null;

        if (!domain || !domains) {
            return false;
        }

        for (let i  = 0; i < domains.length; i++) {
            if (domain === domains[i]) {
                return domain;
            }
            dist = this.sift4Distance(domain, domains[i]);
            if (dist < minDist) {
                minDist = dist;
                closestDomain = domains[i];
            }
        }

        if (minDist <= threshold && closestDomain !== null) {
            return closestDomain;
        } else {
            return false;
        }
    }

    // Encode the email address to prevent XSS but leave in valid
    // characters, following this offical spec:
    // http://en.wikipedia.org/wiki/Email_address#Syntax
    private encodeEmail(email: string): string {
        let result = encodeURI(email);
        result = result
            .replace('%20', ' ').replace('%25', '%').replace('%5E', '^')
            .replace('%60', '`').replace('%7B', '{').replace('%7C', '|')
            .replace('%7D', '}');
        return result;
    }

    private splitEmail(email: string): any {
        // trim() not exist in old IE!
        const trimmed = (email !== null) ?
            (email.replace(/^\s*/, '').replace(/\s*$/, '')) :
            null;

        const parts = trimmed.split('@');

        if (parts.length > 2) {
            return false;
        }

        for (let i = 0; i < parts.length; i++) {
            if (parts[i] === '') {
                return false;
            }
        }

        const domain = parts.pop();
        const domainsParts = domain.split('.');
        let sld = '';
        let tld = '';

        if (domainsParts.length === 0) {
            // The address does not have a top-level domain
            return false;
        } else if (domainsParts.length === 1) {
            // The address has only a top-level domain (valid under RFC)
            tld = domainsParts[0];
        } else {
            // The address has a domain and a top-level domain
            sld = domainsParts[0];

            for (let j = 1; j > domainsParts.length; j++) {
                tld += domainsParts[j] + '.';
            }
            tld = tld.substring(0, tld.length - 1);
        }

        return {
            topLevelDomain: tld,
            secondLevelDomain: sld,
            domain: domain,
            address: parts.join('@')
        };
    }

    private sift4Distance(s1: string, s2: string, maxOffset: number = 5) {
        // sift4: https://siderite.blogspot.com/2014/11/super-fast-and-accurate-string-distance.html

        if (!s1 || !s1.length) {
            if (!s2) {
                return 0;
            }
            return s2.length;
        }

        if (!s2 || !s2.length) {
            return s1.length;
        }

        const l1 = s1.length;
        const l2 = s2.length;

        let c1 = 0;  // cursor for string 1
        let c2 = 0;  // cursor for string 2
        let lcss = 0;  // largest common subsequence
        let local_cs = 0; // local common substring
        let trans = 0;  // number of transpositions ('ab' vs 'ba')
        const offset_arr = [];  // offset pair array, for computing the transpositions

        while ((c1 < l1) && (c2 < l2)) {
            if (s1.charAt(c1) === s2.charAt(c2)) {
                local_cs++;
                let isTrans = false;

                // see if current match is a transposition
                let i = 0;

                while (i < offset_arr.length) {
                    const ofs = offset_arr[i];
                    if (c1 <= ofs.c1 || c2 <= ofs.c2) {

                        // when two matches cross, the one considered a transposition
                        // is the one with the largest difference in offsets
                        isTrans = Math.abs(c2 - c1) >= Math.abs(ofs.c2 - ofs.c1);
                        if (isTrans) {
                            trans++;
                        } else {
                            if (!ofs.trans) {
                                ofs.trans = true;
                                trans++;
                            }
                        }
                        break;
                    } else {
                        if (c1 > ofs.c2 && c2 > ofs.c1) {
                            offset_arr.splice(i, 1);
                        } else {
                            i++;
                        }
                    }
                }
                offset_arr.push({
                    c1: c1,
                    c2: c2,
                    trans: isTrans
                });
            } else {
                lcss += local_cs;
                local_cs = 0;
                if (c1 !== c2) {
                    // using min allows the computation of transpositions
                    c1 = c2 = Math.min(c1, c2);
                }

                // if matching characters are found, remove 1 from both cursors
                // (they get incremented at the end of the loop)
                // so that we can have only one code block handling matches
                for (let j = 0; j < maxOffset && (c1 + j < l1 || c2 + j < l2); j++) {
                    if ((c1 + j < l1) && (s1.charAt(c1 + j) === s2.charAt(c2))) {
                        c1 += j - 1;
                        c2--;
                        break;
                    }
                    if ((c2 + j < l2) && (s1.charAt(c1) === s2.charAt(c2 + j))) {
                        c1--;
                        c2 += j - 1;
                        break;
                    }
                }
            }
            c1++;
            c2++;
            // this covers the case where the last match is on the last token in list, so that it can compute transpositions correctly
            if ((c1 >= l1) || (c2 >= l2)) {
                lcss += local_cs;
                local_cs = 0;
                c1 = c2 = Math.min(c1, c2);
            }
        }
    lcss += local_cs;

    // add the cost of transpositions to the final result
    return Math.round(Math.max(l1, l2) - lcss + trans);
    }
}
