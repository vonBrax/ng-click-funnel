import { environment } from '../../environments/environment';

export const messages = environment.locale === 'de' ?
    ['Emailadresse muss ein @ enthalten',
    'Bitte geben Sie eine gültige Emailadresse an',
    'Meinten Sie ']
    :
    ['Email address must contain one "@"',
    'Please enter a valid email address',
    'Did you mean '];

export const DOMAINS = {
    default: [
        'yahoo.com', 'msn.com', 'bellsouth.net', 'telus.net',
        'comcast.net', 'optusnet.com.au', 'earthlink.net', 'qq.com',
        'sky.com', 'icloud.com', 'mac.com', 'sympatico.ca',
        'googlemail.com', 'att.net', 'xtra.co.nz', 'web.de',
        'cox.net', 'gmail.com', 'ymail.com', 'aim.com',
        'rogers.com', 'verizon.net', 'rocketmail.com', 'google.com',
        'optonline.net', 'sbcglobal.net', 'aol.com', 'me.com',
        'btinternet.com', 'charter.net', 'shaw.ca', 't-online.de',
        'bluewin.ch', 'rediffmail.com', 'eircom.net', 'freenet.de',
        'aon.at', 'wp.pl', 'ntlworld.com', 'abv.bg',
        'talktalk.net', 'arcor.de', 'chello.at', 'inbox.lv',
        'blueyonder.co.uk', 'eim.ae', 'libero.it', 'sunrise.ch',
        'virginmedia.com', 'bigpond.com', 'tiskali.co.uk', 'a1.net',
        'o2.pl', 'btopenworld.com', 'seznam.cz', 'windowslive.com',
        'mac.com', 'interia.pl', 'online.no', 'azet.sk',
        'freemail.hu', 'emirates.com', 'op.pl', 'ziggo.nl',
        'home.nl', 'talk21.com', 'virgin.net', 'optusnet.com.au',
        'emirates.net.ae', 'btconnect.com', 'centrum.sk', 'kpnplanet.nl',
        'nhs.net', 'drei.at', 'jubii.dk', 'yandex.ru',
        'vp.pl', 'casema.nl', 'sbg.at', 'kpnmail.nl',
        'bluemail.ch', 'interia.eu', 'vol.at', 'hetnet.nl',
        'tesco.net', 'ofir.dk', 'planet.nl', 'youmail.dk',
        'zonnet.nl', 'fsnet.net', 'xs4all.nl', 'upcmail.nl',
        'hispeed.ch', 'sol.dk', 'doctors.org.uk', 'aim.com',
        'email.de', 'mailinator.com', 'umail.ucc.ie', 'comhem.se',
        'iprimus.com.au', 'tele2.at', 'stofanet.dk', 'ringparken.dk',
        'skolekom.dk', 'versanet.de', 'godmail.dk', 'citromail.hu',
        'list.ru', 'fosroc.com', 'ok.de', 'tele2.se',
        'novi.net', 'eycrew.ae', 'alice.de', 'o2online.de',
        'bbsyd.dk', 'protonmail.com', 'lyse.net', 'net.hr',
        'cpl.ie', 'haymarket.com', 'zoho.com', 'bk.ru',
        'has.dk', 'free.fr', 'naver.com', 'efgme.com',
        'iolfree.ie', 'netcologne.de', 'inbox.lt', 'ucdconnect.ie',
        'versatel.nl', 'tmo.at', 'tussa.com', 'rambler.ru',
        'hse.ie', 'bbc.co.uk', 'jm.com', 'qunomedical.com',
        'qm.com'
    ],
    defaultSecondLevel: [
        'gmail', 'yahoo', 'hotmail',
        'mail', 'live', 'outlook',
        'gmx', 'onet', 'tim',
        'telia'
    ],
    defaultTopLevel: [
        'com', 'com.au', 'com.br', 'com.tw',
        'com.ph', 'com.pt', 'ca', 'co.nz',
        'co.uk', 'de', 'fr', 'it',
        'ru', 'net', 'org', 'edu',
        'gov', 'jp', 'nl', 'kr',
        'se', 'eu', 'ie', 'co.il',
        'us', 'at', 'be', 'bg',
        'dk', 'hk', 'es', 'gr',
        'ch', 'no', 'cz', 'in',
        'net', 'net.au', 'info', 'biz',
        'mil', 'co.jp', 'sg', 'hu',
        'uk', 'pl', 'ro'
]};
