export const Strings = {
  "funnel_name": "EN.Hair:1.6",
  "funnel": [
    {
      "name": "additional_info_grafts",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "How many grafts do you need?",
      "answers": [
        "1000",
        "2000",
        "3000",
        "4000",
        "More than 4000",
        "I'm not sure"
      ]
    },
    {
      "name": "additional_info_age",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "How old are you?",
      "answers": [
        "18-25",
        "26-35",
        "36-45",
        "46-55",
        "56 and over"
      ]
    },
    {
      "name": "additional_info_condition_duration",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "For how long have you been experiencing hair loss?",
      "answers": [
        "Less than 1 year",
        "1-2 years",
        "2-5 years",
        "Longer than 5 years"
      ]
    },
    {
      "name": "additional_info_familial_history",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "Does hair loss run in your family?",
      "answers": [
        "Yes",
        "No"
      ]
    },
    {
      "name": "additional_info_medications_in_use",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "Are you using Minoxidil or Finasteride?",
      "answers": [
        "Minoxidil",
        "Finasteride",
        "Minoxidil and Finasteride",
        "None"
      ]
    },
    {
      "name": "additional_info_smoker",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "Do you smoke?",
      "answers": [
        "<10 cigarettes per day",
        "10-20 cigarettes per day",
        ">20 cigarettes per day",
        "No"
      ]
    },
    {
      "name": "additional_info_drinker",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "Do you drink?",
      "answers": [
        "Daily",
        "2-3 times per week",
        "Once a week",
        "Once a month",
        "Less than once a month",
        "Never"
      ]
    },
    {
      "name": "additional_info_treatment_education",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "How much do you know about hair transplants?",
      "answers": [
        "A lot, I want to get it done now",
        "I know people who have done it before",
        "I'm still researching",
        "Not much, I need more info"
      ]
    },
    {
      "name": "additional_info_priority",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "What's most important to you?",
      "answers": [
        "Leading specialist",
        "Cheapest price",
        "Extensive consultation",
        "Fastest appointment"
      ]
    },
    {
      "name": "additional_info_country_residency",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "Where do you live?",
      "answers": [
        "United Kingdom",
        "Ireland",
        "USA",
        "Spain",
        "Germany",
        "Other"
      ],
      "icons": [
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/flag-uk.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/flag-ie.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/flag-us.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/flag-es.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/flag-de.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/globe.png"
      ]
    },
    {
      "name": "additional_info_travel_willingness",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "Would you be open to travelling abroad for your hair transplant?",
      "answers": [
        "Yes",
        "No"
      ]
    },
    {
      "name": "dynamic_step12",
      "type": "dynamic-step",
      "validators": [
        "required"
      ],
      "dynamics": [
        {
          "name": "additional_info_country_interest",
          "question": "Do you already have a country in mind?",
          "answers": [
            "Turkey",
            "Poland",
            "Hungary",
            "Portugal",
            "Greece",
            "Other",
            "I'm open to all options"
          ]
        },
        {
          "name": "additional_info_distance_limits",
          "question": "How far are you willing to drive?",
          "answers": [
            "less than 10km",
            "10-50km",
            "50-100km",
            "100-200km",
            "more than 200km"
          ]
        }
      ]
    },
    {
      "name": "additional_info_other_treatments_interest",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "Are you interested in any other treatments?",
      "answers": [
        "Plastic surgery",
        "Dentistry",
        "Orthopedics",
        "Other",
        "No"
      ]
    },
    {
      "name": "additional_info_user_notes",
      "type": "textarea",
      "validators": [],
      "question": "Comments",
      "answers": [],
      "label": "Additional Notes",
      "next_button": "NEXT"
    },
    {
      "name": "personal_information",
      "type": "personal_information",
      "validators": [],
      "label": "Additional Notes",
      "next_button": "NEXT",
      "fields": [
        {
          "name": "first_name",
          "type": "text",
          "placeholder": "First name",
          "error_message": "Please tell us your first name",
          "validators": [
            "required"
          ]
        },
        {
          "name": "last_name",
          "type": "text",
          "placeholder": "Last name",
          "error_message": "Please tells us your last name",
          "validators": [
            "required"
          ]
        },
        {
          "name": "email",
          "type": "email",
          "placeholder": "Email",
          "error_message": "Please tell us your email address",
          "validators": [
            "required"
          ]
        },
        {
          "name": "phone_country",
          "type": "text",
          "placeholder": "Country",
          "error_message": "Please specify your country",
          "validators": [
            "required"
          ]
        },
        {
          "name": "phone_number",
          "type": "phone",
          "placeholder": "Phone number",
          "error_message": "Please tell us your phone number",
          "validators": [
            "required"
          ]
        }
      ],
      "tos": "I agree to the <a href=\"https://www.qunomedical.com/en/terms-and-conditions\" target=\"_blank\" rel=\"noopener\">Terms and Conditions</a> and that Qunomedical may collect, process, use, and disclose my personal information, including my health data, in order to provide a personal and customized service and as further detailed in my <a href=\"https://www.qunomedical.com/en/privacy#consent-declaration\" target=\"_blank\" rel=\"noopener\">Consent Declaration</a>.",
      "submit_btn": "Get your free quote"
    }
  ],
  "hero_banner": {
    "headline": "Your hair transplant",
    "values": [
      {
        "title": "Affordable",
        "description": "Complete packages negotiated for you"
      },
      {
        "title": "High Quality",
        "description": "The best doctors pre-selected for you"
      },
      {
        "title": "Safe",
        "description": "We'll guide you every step of the way"
      }
    ]
  },
  "how_it_works": [
    {
      "title": "FREE PHONE CONSULTATION",
      "description": "Learn everything there is to know about hair transplants, our doctors and your options"
    },
    {
      "title": "RECEIVE FREE QUOTE",
      "description": "We'll send you a free, personal quote so you'll know exactly what's included"
    },
    {
      "title": "BOOK, SIT BACK AND RELAX",
      "description": "If you decide to book, your personal health manager will make sure you're well prepared. We will never charge extra for our services"
    }
  ],
  "review_stats": {
    "title": "REVIEW STATS",
    "description": "Get the details on feedback the thousands of Qunomedical patients have provided, from their experiences with us and our partner clinics, to the treatment they received.",
    "stats": [
      {
        "question": "WOULD YOU RECOMMEND QUNOMEDICAL TO YOUR FAMILY AND FRIENDS?",
        "answer": "YES",
        "stat": "83.60%"
      },
      {
        "question": "WOULD YOU CONSIDER YOUR TREATMENT QUALITY/SERVICE THE SAME OR BETTER THAN YOU WOULD RECEIVE AT HOME?",
        "answer": "YES",
        "stat": "95%"
      },
      {
        "question": "WOULD YOU RATE THE QUALITY OF THE FACILITIES A 4 OR 5 OUT OF 5 STARS?",
        "stars": 5,
        "answer": "YES",
        "stat": "94%"
      }
    ]
  },
  "package_deals": [
    {
      "doctor": {
        "name": "Dr. Emrah Cinik, MD",
        "photo": "https://res.cloudinary.com/junomedical/image/upload/c_thumb,g_face,w_130,h_130/v1480581742/staff/16A2875.jpg",
        "specialty": "Hair Transplant Specialist",
        "location": "Istanbul, Turkey"
      },
      "review": {
        "quote": "The staff were considerate and caring and I felt safe.",
        "stars": 5
      },
      "package": {
        "treatment": "FUE Hair Transplant",
        "description": [
          "2 nights hotel stay including breakfast",
          "Personal driver during your stay",
          "Blood analysis",
          "PRP treatment",
          "24/7 Qunomedical assistance hotline"
        ],
        "price": "€2,100",
        "deal": "maximum grafts"
      },
      "cta": {
        "text": "For more info or to book",
        "button_text": "Get in touch"
      }
    },
    {
      "doctor": {
        "name": "Dr. Ziya Yavuz, MD",
        "photo": "https://res.cloudinary.com/junomedical/image/upload/c_thumb,g_face,w_130,h_130/v1480098817/staff/Yavuz_Liv.jpg",
        "specialty": "Hair Transplant Specialist",
        "location": "Istanbul, Turkey"
      },
      "review": {
        "quote": "I was beyond impressed with my experience at this doctor's office.",
        "stars": 4
      },
      "package": {
        "treatment": "FUE Hair Transplant",
        "description": [
          "2 nights hotel stay including breakfast",
          "Personal driver during your stay",
          "Blood analysis",
          "PRP treatment",
          "24/7 Qunomedical assistance hotline"
        ],
        "price": "€2,300",
        "deal": "maximum grafts"
      },
      "cta": {
        "text": "For more info or to book",
        "button_text": "Get in touch"
      }
    },
    {
      "doctor": {
        "name": "Dr. Maciej Borejsza, MD",
        "photo": "https://res.cloudinary.com/junomedical/image/upload/c_thumb,g_face,w_130,h_130/v1475677934/staff/Dr_M._Borejsza.jpg",
        "specialty": "Hair Transplant Specialist",
        "location": "Bielsko-Biala, Poland"
      },
      "review": {
        "quote": "I especially liked the extensive consultation before the treatment.",
        "stars": 5
      },
      "package": {
        "treatment": "FUE Hair Transplant",
        "description": [
          "2 nights hotel stay including breakfast",
          "Personal driver during your stay",
          "Blood analysis",
          "PRP treatment",
          "24/7 Qunomedical assistance hotline"
        ],
        "price": "€2,300",
        "deal": "2000 grafts"
      },
      "cta": {
        "text": "For more info or to book",
        "button_text": "Get in touch"
      }
    }
  ],
  "patient_stories": {
    "title": "PATIENT STORIES",
    "description": "Hear first-hand accounts of patients visiting our partner clinics, and get a sense of their need, hesitations, and overall experience partnering with Qunomedical to satisfy their health needs!",
    "videos": [
      {
        "title": "EAMON'S HAIR TRANSPLANT",
        "url": "https://www.youtube-nocookie.com/embed/C-2S-q-mOSY?rel=0&amp\\;showinfo=0"
      },
      {
        "title": "DR. CINIK IN TURKEY",
        "url": "https://www.youtube-nocookie.com/embed/hn1vbS3tIY0?rel=0&amp;showinfo=0"
      },
      {
        "title": "DR. GARG IN INDIA",
        "url": "https://www.youtube-nocookie.com/embed/Nimf4hHcidQ?rel=0&amp;showinfo=0"
      },
      {
        "title": "DR. BOREJSZA IN POLAND",
        "url": "https://www.youtube-nocookie.com/embed/eHMTtgsJNas?rel=0&amp;showinfo=0"
      }
    ]
  },
  "what_is_ht": {
    "title": "What is a hair transplant?",
    "description": [
      "A <strong>Hair Transplant</strong> is a minimally-invasive, outpatient surgical procedure that can permanently restore the hair of men and women who are experiencing partial baldness by transplanting new follicles, or \"grafts\" (refering to a piece of living tissue that is surgically moved from one body site to another) into balding or thinning areas.",
      "A hair transplant can be recommended for anyone experiencing partial baldness due to male-pattern baldness (androgenetic alopecia), a receding hairline, traction alopecia, or head trauma. Hair Transplants are typically not recommended for patients under 25."
    ],
    "methods": [
      {
        "name": "Follicular Unit Transplantation",
        "abbr": "FUT",
        "description": "Removing a strip of skin from the donor area (usually the back of the patient's head, creating a permanent scar where the scalp is repositioned) under local anesthesia, dividing it into smaller grafts, and then implanting them into the place on the recipients sites.",
        "extras": "<strong>Recovery: ~2weeks</strong>"
      },
      {
        "name": "Follicular Unit Extraction",
        "abbr": "FUE",
        "description": "Manually harvesting individual hair follicles from a donor area under local anesthesia (sometimes requiring the head to be shaved), and then grafting them into the appropriate places to achieve a natural, uniform look.",
        "extras": "<strong>Recovery: ~5 days</strong>"
      }
    ]
  },
  "cta_inline": {
    "text": "Want to learn more about hair transplants? Our health managers are happy to help.",
    "button_text": "Get in touch"
  },
  "reviews": {
    "title": "Why Qunomedical? Here's what our patients say",
    "reviews": [
      {
        "patient": "Van",
        "country": "United States",
        "treatment": "FUE Hair Transplant",
        "stars": 5,
        "date": "July 2017",
        "teaser": "The whole process turned out great! Coree and the Qunomedical team operated effectively on communication to my outbound appointment.",
        "full": "The whole process turned out great! Coree and the Qunomedical team operated effectively on communication to my outbound appointment. The English was a little challenging but the staff worked well. The facility was very busy but remained in good standings. The hotels were great. Qunomedical team worked well on getting me the best deal and comfortability for my treatment."
      },
      {
        "patient": "Bradley",
        "country": "United Kingdom",
        "treatment": "FUE Hair Transplant",
        "stars": 5,
        "date": "June 2017",
        "teaser": "Everything went exactly how I was told it would go, the staff were brilliant and now I'm just excited to see the results in several months.",
        "full": "Everything went exactly how I was told it would go, the staff were brilliant and now I'm just excited to see the results in several months. Will be needing another operation so can't wait for that then hopefully I will be back to my confident self. Thanks Qunomedical for all you have done. Can't really complain about anything, I was satisfied from start to finish. Kind regards Bradley"
      },
      {
        "patient": "Shahin T.",
        "country": "United Kingdom",
        "treatment": "FUE Hair Transplant",
        "stars": 5,
        "date": "May 2017",
        "teaser": "If I had any doubts Qunomedical was there every step of the way. I have no regrets at all and all my family are happy with the results.",
        "full": "As soon as we landed, the transfer team had our information ready and knew exactly where to take us. We relaxed at the hotel. The next morning, medical staff at the hotel picked us on time for a consultation. Everything went according to plan and exactly how it should have. All staff have been very accommodating, very helpful and on time. My Experience with Qunomedical was very good. Good communication. Very helpful with information. If I had any doubts Qunomedical was there every step of the way. I have no regrets at all and all my family are happy with results."
      }
    ]
  },
  "cta_with_image": {
    "image_url": "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_440/pages/homepage-quote.png",
    "title": "Know exactly where you want to go? Or still understanding your treatment?",
    "text": "A free professional quote is your first step in your healthcare journey. Based on your personal case, without any obligation to book.",
    "button_text": "Request A Quote"
  },
  "accreditations": {
    "title": "Don't take our word for it.",
    "description": "The quality of our services doesn't go unnoticed. We are certified by Temos, an independent certification body for excellence in medical tourism, and the International Medical Travel Journal (IMTJ) awarded us as the Best Medical Travel Agency in 2017.",
    "logo_urls": [
      "https://res.cloudinary.com/junomedical/image/upload/w_150/accreditation/temos-international",
      "https://res.cloudinary.com/junomedical/image/upload/w_150/accreditation/imtj"
    ],
    "press": {
      "title": "As seen in",
      "logo_urls": [
        "https://res.cloudinary.com/junomedical/image/upload/w_240/press/fas-new",
        "https://res.cloudinary.com/junomedical/image/upload/w_240/press/forbes-new",
        "https://res.cloudinary.com/junomedical/image/upload/w_240/press/futurezone-new",
        "https://res.cloudinary.com/junomedical/image/upload/w_240/press/startupvalley-new"
      ]
    }
  },
  "cta_plain": {
    "text": "Let us be your guide on your journey to a happier, more confident you.",
    "button_text": "FIND A DOCTOR NOW"
  },
  "disclaimer": {
    "description": "Qunomedical is here to bring the world of healthcare closer to you. We believe that everyone should have access to high-quality, affordable healthcare regardless of where they live. As far as we're concerned, your needs will always come first, that's why we'll help you find the best accredited doctors and hospitals around the world.  We're committed to providing ou with access to the high-quality medical treatment you deserve and we'll be there with you throughout every step of your journey; during the booking process, your hospital visit, and your recuperation period."
  },
  "footer": {
    "terms": "<a href=\"https://www.qunomedical.com/en/terms-and-conditions\" target=\"_blank\" rel=\"noopener\">Terms and Conditions</a>",
    "privacy": "<a href=\"https://www.qunomedical.com/en/privacy\" target=\"_blank\" rel=\"noopener\">Privacy Policy</a>",
    "rights": "All rights reserved"
  }
};