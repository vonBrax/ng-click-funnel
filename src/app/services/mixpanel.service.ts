import { Injectable } from '@angular/core';

declare var mixpanel;
declare var ub;

@Injectable()
export class MixpanelService {

  funnel: string;
  userIP: string;
  pageName: string;
  variant: string;
  mixpanelNotLoaded = false;
  isPAVaccess = false;
  errorMessage: string[] = [];

  constructor() { }

  // Initialize tracking for mixpanel, exclude office IP
  init(funnel: string, name: string): void {
      if (typeof mixpanel === 'undefined') {
        this.errorMessage.push('Mixpanel not loaded on init');
        this.mixpanelNotLoaded = true;
        return;
      }
      this.pageName = ub.page.name;
      this.variant = ub.page.variantId.toUpperCase();
      this.funnel = funnel;

      const userId = this.checkUserID();
      mixpanel.identify(userId);
      this.isPAVaccess = this.checkUserIP(userId);

      // Write userId to localStorage and identify a "registered" user
      if (userId && userId !== 'Unknown') {
          if (!localStorage.mpid && userId === ub.page.visitorId) {
              localStorage.setItem('mpid', userId);
          }
      }
      this.step({
        step: 1,
        prevStepValue: '',
        name: name
      });
  }

  checkUserID(): string {
      let userId;
      try {
          userId = localStorage.getItem('mpid') ||
              ub.page.visitorId ? ub.page.visitorId : document.cookie.match(/ubvs=[^;]*/)[0].replace('ubvs=', '');
      } catch (err) {
          userId = undefined;
          this.errorMessage.push('Error fetching id from localstorage or cookie: ' + err);
      }
      if (!userId) {
          // If no userID was found on localStorage and unbounce cookie, try mixpanel cookie
          try {
              const temp = JSON.parse(decodeURIComponent(document.cookie.match(/mixpanel=[^;]*/)[0]).replace('mixpanel=', ''));
              userId = temp.distinct_id || 'Unknown';
              this.isPAVaccess = this.checkUserIP(userId);
          } catch (err) {
              this.errorMessage.push('Error fetching id from mixpanel cookie: ' + err);
          }
      }
      return userId;
  }

  checkUserIP(userId: string): boolean {
      if (!userId || userId === 'Unknown') {
          this.userIP = 'Not available';
          return false;
      }

      // Using unbounce id as a temporary method to get the client ip address
      this.userIP = userId.substring(0, userId.length - 16);
      const ipFilter = /^176\.94\.108\.131$|^92\.214\.199\.6$|^95\.91\.212\.162$|^92\.208\.200\.197$|^88\.74\.4\.182$|^95\.90\.241\.117$|^91\.102\.12\.(1(9[6-9])|2(0[0-6]))$|^80\.153\.93\.170$|^80\.153\.253\.66$|^5\.145\.(1(7[6-9]|8[0-3]))\.([1-9]|[1-9][0-9]|1([0-9][0-9])|2([0-4][0-9]|5[0-5]))$|^52\.208\.((50\.87)|(146.213)|(162.199)|(195.27))$|^52.51.2.85$/;
      return ipFilter.test(this.userIP);
  }

  step( {step, prevStepValue, name} ) {

    if (this.mixpanelNotLoaded) {
        this.errorMessage.push('Mixpanel is not loaded for steps');
        return;
      }

      // Set Event properties for each step of the funnel
      const evtProp = ({
          'Funnel': this.funnel,
          'Funnel Variant': `${this.funnel} - Variant ${this.variant}`,
          'Page': this.pageName,
          'Page Variant': `${this.pageName} - Variant ${this.variant}` || 'Unknown',
          'Step': 'Step ' + step,
          'Previous Step': prevStepValue,
          'Action': 'Page View',
          'Action Step': 'Page View' + ' - ' + step,
          'Action Funnel': 'Page View' + ' - ' + this.funnel,
          'Action Category': 'Page View' + ' - ' + name,
          'User IP': this.userIP,
          'PAV IP': this.userIP === 'Not available' ? 'Unkwnown' : (this.isPAVaccess ? 'Yes' : 'No'),
          'Error Message': (this.errorMessage.length > 0 ? 'No errors detected' : this.errorMessage.join(' AND '))
      });
      mixpanel.track('Step ' + step, evtProp);
  }

  submit({first_name, last_name, email, phone_number, additional_info, tos_signoff}) {
    const now = new Date().toISOString();
    mixpanel.people.set({
        '$first_name': first_name,
        '$email': email,
        'Email Created': now,
        'TOS Agreed': tos_signoff,
        '$phone': phone_number
    });
    try {
        const cl = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone_number: phone_number
        };
        localStorage.setItem('jmData', JSON.stringify(cl));
    } catch (err) {
        this.errorMessage.push(err.toString());
    }
    mixpanel.track('Lead Generated', {
        'Funnel': this.funnel,
        'Funnel Variant': `${this.funnel} - Variant ${this.variant}`,
        'Page': this.pageName,
        'Page Variant': `${this.pageName} - Variant ${this.variant}` || 'Unknown',
        'Action': 'Submit',
        'User IP': this.userIP,
        'PAV IP': this.userIP === 'Not available' ? 'Unknown' : (this.isPAVaccess ? 'Yes' : 'No'),
        'Date': now,
        'Error Message': (this.errorMessage.length > 0 ? 'No errors detected' : this.errorMessage.join(' AND '))
    });
  }

  track(eventName: string, properties: any): void {
      if (this.mixpanelNotLoaded) {
        this.errorMessage.push('Mixpanel is not loaded for steps');
        return;
      }
      const baseProperties = {
        'Funnel': this.funnel,
        'Funnel Variant': `${this.funnel} - Variant ${this.variant}`,
        'Page': this.pageName,
        'Page Variant': `${this.pageName} - Variant ${this.variant}` || 'Unknown',
        'User IP': this.userIP,
        'PAV IP': this.userIP === 'Not available' ? 'Unknown' : (this.isPAVaccess ? 'Yes' : 'No'),
        'Error Message': (this.errorMessage.length > 0 ? 'No errors detected' : this.errorMessage.join(' AND '))
      };
      Object.assign(baseProperties, properties);
      mixpanel.track(eventName, baseProperties);
  }
}
