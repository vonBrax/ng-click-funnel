export const Strings = {
    funnel: [
        {
            name: 'first_time',
            type: 'radio-click',
            validators: ['required'],
            question: 'Have you previously had a hair transplant?',
            answers: [
                'Yes',
                'No'
            ]
        },
        {
            name: 'timeline',
            type: 'radio-click',
            validators: ['required'],
            question: 'Do you have a treatment date in mind?',
            answers: [
                'Within the next 3 months',
                'Within the next 6 months',
                'More than 6 months in the future',
                'Haven\'t decided'
            ]
        },
        {
            name: 'country_interest',
            type: 'radio-click',
            validators: ['required'],
            question: 'Where would you be open to travel to for your treatment?',
            answers: [
                'Turkey',
                'Poland',
                'Hungary',
                'I want to stay local',
                'Other / not sure'
            ]
        },
        {
            name: 'urgency',
            type: 'radio-click',
            validators: ['required'],
            question: 'What\'s the urgency there?',
            answers: [
                'Very',
                'Not so very',
                'Kind of',
                'Never thought about it',
                'Other / not sure'
            ]
        }
    ],
    footer: {
        terms: '<a href="https://www.qunomedical.com/en/terms-and-conditions" target="_blank">Terms and Conditions</a>',
        privacy: '<a href="https://www.qunomedical.com/en/privacy" target="_blank">Privacy Policy</a>',
        rights: 'All rights reserved'
    }
};
