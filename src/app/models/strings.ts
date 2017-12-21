export const Strings = {
    hero_banner: {
        headline: 'Your Hair Transplant',
        values: [
            { title: 'Affordable', description: 'Complete packages negotiated for you'},
            { title: 'High Quality', description: 'The best doctors pre-selected for you'},
            { title: 'Safe', description: 'We\'ll guide you every step of the way' }
        ]
    },
    how_it_works: [
        {
            title: 'FREE PHONE CONSULTATION',
            description: 'Learn everything there is to know about weight loss, our doctors and your options'
        },
        {
            title: 'RECEIVE FREE QUOTE',
            description: 'We\'ll send you a free, personal quote so you\'ll know exactly what\'s included'
        },
        {
            title: 'BOOK, SIT BACK AND RELAX',
            description: 'If you decide to book, your personal health manager will make' +
            ' sure you\'re well prepared. We will never charge extra for our services'
        }
    ],
    review_stats: {
        title: 'REVIEW STATS',
        description: 'Get the details on feeedback the thousands of Qunomedical patients have provided,' +
                    ' from their experiences with us and our partner clinics, to the treatment they received.',
        stats: [
            {
                question: 'WOULD YOU RECOMMEND QUNOMEDICAL TO YOUR FAMILY AND FRIENDS?',
                answer: 'YES',
                stat: '83.6%'
            },
             {
                question: 'WOULD YOU CONSIDER YOUR TREATMENT QUALITY/SERVICE THE SAME OR BETTER THAN YOU WOULD RECEIVE AT HOME?',
                answer: 'YES',
                stat: '95%'
            },
             {
                question: 'WOULD YOU RATE THE QUALITY OF THE FACILITIES A 4 OR 5 OUT OF 5 STARS?',
                stars: 5,
                answer: 'YES',
                stat: ' 94%'
            }
        ]

    },
    package_deals: [
        {
            doctor: {
                photo: 'https://res.cloudinary.com/junomedical/image/upload/staff/16A2875.jpg',
                name: 'Dr. Emrah Cinik, MD',
                specialty: 'Hair Transplant Specialist',
                location: 'Istanbul, Turkey'
            },
            review: {
                stars: 5,
                quote: 'The staff were considerate and caring and I felt safe.'
            },
            package: {
                treatment: 'FUE Hair Transplant',
                description: [
                    '2 nights hotel stay including breakfast',
                    'Personal driver during your stay',
                    'Blood analysis',
                    'PRP treatment',
                    '24/7 Qunomedical assistance hotline'
                ],
                price: '€ 2,100',
                deal: 'maximum grafts',
            },
            cta: {
                text: 'For more info or to book',
                button_text: 'Get in touch'
            }
        },
        {
            doctor: {
                photo: 'https://res.cloudinary.com/junomedical/image/upload/staff/Yavuz_Liv.jpg',
                name: 'Dr. Ziya Yavuz, MD',
                specialty: 'Hair Transplant Specialist',
                location: 'Istanbul, Turkey'
            },
            review: {
                stars: 5,
                quote: 'I was beyond impressed with my experience at this doctor\'s office.'
            },
            package: {
                treatment: 'FUE Hair Transplant',
                description: [
                    '2 nights hotel stay including breakfast',
                    'Personal driver during your stay',
                    'Blood analysis',
                    'PRP treatment',
                    '24/7 Qunomedical assistance hotline'
                ],
                price: '€ 2,300',
                deal: 'maximum grafts',
            },
            cta: {
                text: 'For more info or to book',
                button_text: 'Get in touch'
            }
        },
        {
            doctor: {
                photo: 'https://res.cloudinary.com/junomedical/image/upload/staff/Dr_M._Borejsza.jpg',
                name: 'Dr. Maciej Borejsza, MD',
                specialty: 'Hair Transplant Specialist',
                location: 'Bielsko-Biala, Poland'
            },
            review: {
                stars: 5,
                quote: 'I especially liked the extensive consultation before the treatment.'
            },
            package: {
                treatment: 'FUE Hair Transplant',
                description: [
                    '2 nights hotel stay including breakfast',
                    'Personal driver during your stay',
                    'Blood analysis',
                    'PRP treatment',
                    '24/7 Qunomedical assistance hotline'
                ],
                price: '€ 2100',
                deal: '2000 grafts',
            },
            cta: {
                text: 'For more info or to book',
                button_text: 'Get in touch'
            }
        }
    ],
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
            name: 'math_question',
            type: 'radio-click',
            validators: ['required'],
            question: '1 + 1 = ?',
            answers: [
                '1',
                '2',
                '3'
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
                'Other / not sure',
                'Surprise me'
            ]
        },
         {
            name: 'urgency2',
            type: 'radio-click',
            validators: ['required'],
            question: 'What\'s the urgency there?',
            answers: [
                'Very',
                'Not so very',
                'Kind of',
                'Never thought about it',
                'Other / not sure',
                'Surprise me',
                'Surprise me2'
            ]
        },
        {
            name: 'personal_information',
            type: 'personal_information',
            question: 'Please enter contact details to receive your personal quote',
            fields: [
                {
                    name: 'first_name',
                    type: 'text',
                    placeholder: 'First name',
                    error_message: 'Please tell us your first name',
                    validators: ['required']
                },
                {
                    name: 'last_name',
                    type: 'text',
                    placeholder: 'Last name',
                    error_message: 'Please tells us your last name',
                    validators: ['required']
                },
                {
                    name: 'phone_number',
                    type: 'phone',
                    placeholder: 'Phone number',
                    error_message: 'Please tell us your phone number',
                    validators: ['required']
                },
                {
                    name: 'email',
                    type: 'email',
                    placeholder: 'Email address',
                    error_message: 'Please tell us your email address',
                    validators: ['required']
                }
            ],
            tos: 'I agree to the <a href="https://www.qunomedical.com/en/terms-and-conditions" target="_blank">' +
                 'Terms and Conditions</a> and that Qunomedical may collect, process, use, and disclose my personal information,' +
                 ' including my health data, in order to provide a personal and customized service and as further detailed in my ' +
                 '<a href="https://www.qunomedical.com/en/privacy#consent-declaration" target="_blank">Consent Declaration</a>.'
        }
    ],
    footer: {
        terms: '<a href="https://www.qunomedical.com/en/terms-and-conditions" target="_blank">Terms and Conditions</a>',
        privacy: '<a href="https://www.qunomedical.com/en/privacy" target="_blank">Privacy Policy</a>',
        rights: 'All rights reserved'
    }
};
