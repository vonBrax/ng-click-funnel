export const Strings = {
  "funnel_name": "DE.Hair:1.3",
  "funnel": [
    {
      "name": "treatment",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "Wie viele Grafts benötigen Sie?",
      "answers": [
        "2.000 Grafts",
        "3.000 Grafts",
        "4.000 Grafts",
        "7.000 Grafts (2x)"
      ],
      "icons": [
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/v1517412237/unbounce/bald-2000.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/v1517412260/unbounce/bald-3000.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/v1517412272/unbounce/bald-4000.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/v1517412282/unbounce/bald-7000.png"
      ]
    },
    {
      "name": "additional_info_prev_treatment",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "Hatten Sie bereits eine Haartransplantation?",
      "answers": [
        "Ja",
        "Nein"
      ]
    },
    {
      "name": "timeline",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "Wann möchten Sie die Behandlung machen?",
      "answers": [
        "So bald wie möglich",
        "In den nächsten 3 Monaten",
        "In den nächsten 6 Monaten",
        "In mehr als 6 Monaten",
        "Noch nicht entschieden"
      ]
    },
    {
      "name": "country_interest",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "Wo würden Sie die Behandlung machen lassen?",
      "answers": [
        "Türkei",
        "Polen",
        "Ungarn",
        "Deutschland",
        "Österreich",
        "Andere/Ich bin mir nicht sicher"
      ]
    },
    {
      "name": "urgency",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "Welche Informationen suchen Sie?",
      "answers": [
        "Ein persönliches Angebot",
        "Eine grobe Kostenübersicht",
        "Generelle Information über Ärzte und Preise",
        "Andere/Ich bin mir nicht sicher"
      ]
    },
    {
      "name": "additional_info_user_notes",
      "type": "textarea",
      "validators": [],
      "question": "Kommentare",
      "answers": [],
      "label": "Zusätzliche Informationen",
      "next_button": "WEITER"
    },
    {
      "name": "personal_information",
      "type": "personal_information",
      "validators": [],
      "label": "Zusätzliche Informationen",
      "next_button": "WEITER",
      "fields": [
        {
          "name": "first_name",
          "type": "text",
          "placeholder": "Vorname",
          "error_message": "Bitte geben Sie uns Ihren Vornamen",
          "validators": [
            "required"
          ]
        },
        {
          "name": "last_name",
          "type": "text",
          "placeholder": "Nachname",
          "error_message": "Bitte geben Sie uns Ihren Nachnamen",
          "validators": [
            "required"
          ]
        },
        {
          "name": "email",
          "type": "email",
          "placeholder": "E-Mail",
          "error_message": "Bitte geben Sie Ihre E-Mail Adresse ein",
          "validators": [
            "required"
          ]
        },
        {
          "name": "phone_country",
          "type": "text",
          "placeholder": "Land",
          "error_message": "Bitte geben Sie Ihr Land an",
          "validators": [
            "required"
          ]
        },
        {
          "name": "phone_number",
          "type": "phone",
          "placeholder": "Telefonnummer",
          "error_message": "Ihre Telefonnummer fehlt noch",
          "validators": [
            "required"
          ]
        }
      ],
      "tos": "Ich stimme Qunomedicals <a href=\"https://www.qunomedical.com/de/agbs\" target=\"_blank\" rel=\"noopener\">AGBs</a>, <a href=\"https://www.qunomedical.com/de/datenschutz\" target=\"_blank\" rel=\"noopener\">Datenschutzerklärung</a> und Nutzung personenbezogener Daten und Datenverwendung, inklusive meiner Gesundheitsdaten, zu.",
      "submit_btn": "Angebot einholen"
    }
  ],
  "hero_banner": {
    "headline": "Ihre Haartransplantation",
    "values": [
      {
        "title": "Bezahlbar",
        "description": "Komplett-Pakete - nur für Sie verhandelt"
      },
      {
        "title": "Hohe Qualität",
        "description": "Wählen Sie aus anerkannten Ärzten"
      },
      {
        "title": "Sicher",
        "description": "Wir begleiten Sie bei jedem Schritt"
      }
    ]
  },
  "how_it_works": [
    {
      "title": "Kostenlose Telefonberatung",
      "description": "Lernen Sie alles über Haatransplantationen, Ärzte und Ihre Optionen."
    },
    {
      "title": "Angebot erhalten",
      "description": "Wir senden Ihnen ein kostenloses, individuelles Angebot, damit Sie genau wissen, was im Preis enthalten ist."
    },
    {
      "title": "Buchen und zurücklehnen",
      "description": "Wenn Sie sich entscheiden zu buchen, wird Ihr persönlicher Gesundheitsberater sicherstellen, dass Sie bestens vorbereitet sind. Für unseren Service zahlen Sie niemals extra."
    }
  ],
  "review_stats": {
    "title": "BEWERTUNGEN",
    "description": "Sehen Sie Bewertungen von hunderten Qunomedical Kunden.",
    "stats": [
      {
        "question": "Würden Sie Qunomedical an Freunde und Familie weiterempfehlen?",
        "answer": "JA",
        "stat": "83.60%"
      },
      {
        "question": "War Ihre Behandlung genauso gut oder besser als sie zu Hause gewesen wäre?",
        "answer": "JA",
        "stat": "95%"
      },
      {
        "question": "Würden Sie die Qualität der Klinik mit 4 oder 5 von 5 Sternen bewerten?",
        "stars": 5,
        "answer": "JA",
        "stat": "94%"
      }
    ]
  },
  "package_deals": [
    {
      "doctor": {
        "name": "Dr. Emrah Cinik, MD",
        "photo": "https://res.cloudinary.com/junomedical/image/upload/c_thumb,g_face,w_130,h_130/v1480581742/staff/16A2875.jpg",
        "specialty": "Haartransplantationsspezialist",
        "location": "Istanbul, Türkei"
      },
      "review": {
        "quote": "Das Personal war sehr fürsorglich und ich habe mich sicher gefühlt.",
        "stars": 5
      },
      "package": {
        "treatment": "FUE Haartransplantation",
        "description": [
          "2 Hotelübernachtungen inklusive Frühstück",
          "Persönlicher Chauffeur",
          "Blutanalyse",
          "PRP Behandlung",
          "24/7 Qunomedical Kontakt"
        ],
        "price": "2.100€",
        "deal": "Maximale Grafts"
      },
      "cta": {
        "text": "&nbsp;",
        "button_text": "Anfragen"
      }
    },
    {
      "doctor": {
        "name": "Dr. Ziya Yavuz, MD",
        "photo": "https://res.cloudinary.com/junomedical/image/upload/c_thumb,g_face,w_130,h_130/v1480098817/staff/Yavuz_Liv.jpg",
        "specialty": "Haartransplantationsspezialist",
        "location": "Istanbul, Türkei"
      },
      "review": {
        "quote": "Ich war mehr als beeindruckt von dem Arzt.",
        "stars": 4
      },
      "package": {
        "treatment": "FUE Haartransplantation",
        "description": [
          "2 Hotelübernachtungen inklusive Frühstück",
          "Persönlicher Chauffeur",
          "Blutanalyse",
          "PRP Behandlung",
          "24/7 Qunomedical Kontakt"
        ],
        "price": "2.300€",
        "deal": "Maximale Grafts"
      },
      "cta": {
        "text": "&nbsp;",
        "button_text": "Anfragen"
      }
    },
    {
      "doctor": {
        "name": "Dr. Maciej Borejsza, MD",
        "photo": "https://res.cloudinary.com/junomedical/image/upload/c_thumb,g_face,w_130,h_130/v1475677934/staff/Dr_M._Borejsza.jpg",
        "specialty": "Haartransplantationsspezialist",
        "location": "Bielsko-Biala, Polen"
      },
      "review": {
        "quote": "Ich mochte vor allem die genaue Beratung vor der Behandlung.",
        "stars": 5
      },
      "package": {
        "treatment": "FUE Haartransplantation",
        "description": [
          "2 Hotelübernachtungen inklusive Frühstück",
          "Persönlicher Chauffeur",
          "Blutanalyse",
          "PRP Behandlung",
          "24/7 Qunomedical Kontakt"
        ],
        "price": "2.300€",
        "deal": "2000 Grafts"
      },
      "cta": {
        "text": "&nbsp;",
        "button_text": "Anfragen"
      }
    }
  ],
  "patient_stories": {
    "title": "ERFAHRUNGSBERICHTE",
    "description": "Sehen Sie sich Erfahrungsberichte von Kunden an und lernen Sie mehr über deren Erwartungen, Bedenken und Gesamteindruck.",
    "videos": [
      {
        "title": "EAMONS HAARTRANSPLANTATION",
        "url": "https://www.youtube-nocookie.com/embed/C-2S-q-mOSY?rel=0&amp\\;showinfo=0"
      },
      {
        "title": "DR. CINIK IN DER TÜRKEI",
        "url": "https://www.youtube-nocookie.com/embed/hn1vbS3tIY0?rel=0&amp;showinfo=0"
      },
      {
        "title": "DR. GARG IN INDIEN",
        "url": "https://www.youtube-nocookie.com/embed/Nimf4hHcidQ?rel=0&amp;showinfo=0"
      },
      {
        "title": "DR. BOREJSZA IN POLEN",
        "url": "https://www.youtube-nocookie.com/embed/eHMTtgsJNas?rel=0&amp;showinfo=0"
      }
    ]
  },
  "what_is_ht": {
    "description": [
      null,
      null
    ],
    "methods": [
      {},
      {}
    ]
  },
  "cta_inline": {
    "text": "Sie möchten mehr über Haartransplantationen erfahren? Unsere Gesundheitsberater helfen Ihnen gerne.",
    "button_text": "Kontakt"
  },
  "reviews": {
    "title": "Warum Qunomedical? Das sagen unsere Kunden",
    "reviews": [
      {
        "patient": "Erkan A.",
        "country": "Deutschland",
        "treatment": "FUE Haartransplantation",
        "stars": 5,
        "date": "November 2017",
        "teaser": "Alles gut!",
        "full": "Es war super waren sehr freundlich haben sich um mich gekümmert kann nur empfehlen."
      },
      {
        "patient": "Alexander B.",
        "country": "Deutschland",
        "treatment": "FUE Haartransplantation",
        "stars": 5,
        "date": "Oktober 2017",
        "teaser": "Das Krankenhaus was sehr sauber! Die Beratung vorher und nachher war und ist sehr gut! Ich bin sehr zufrieden!",
        "full": "Der Transfer vom Flughafen ins Hotel und ins Krankenhaus war erstklassig und sehr pünktlich! Das erste Gespräch bis hin zum Abschluss Gespräch war sehr professionell und sehr freundlich! Ich wurde sehr freundlich behandelt. Das Krankenhaus was sehr sauber! Die Beratung vorher und nachher war und ist sehr gut! Ich bin sehr zufrieden! Mit Qunomedical war ich rund um zufrieden und habe mich gut beraten und betreut gefühlt! Wir sind Immer noch in Kontakt und der Kontakt ist sehr freundlich und kompetent."
      },
      {
        "patient": "Harjit B.",
        "country": "Deutschland",
        "treatment": "FUE Haartransplantation",
        "stars": 5,
        "date": "März 2017",
        "teaser": "Beratung & Untersuchung war gut organisiert. Mitarbeiter & Einrichtungen waren besser als ich erwartet hatte.",
        "full": "Ich wurde abgeholt und zurück zum Flughafen gebracht. Beratung & Untersuchung war gut organisiert. Mitarbeiter & Einrichtungen waren besser als ich erwartet hatte. Außer einem Missverständnis der Implantation der Haare in meinem hinteren Kopf lief alles gut. Meine Erfahrung mit Qunomedical war sehr gut. Es gibts nichts zu verbessern, alles wurde richtig gemacht.."
      }
    ]
  },
  "cta_with_image": {
    "image_url": "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_440/pages/homepage-quote.png",
    "title": "Wissen Sie schon wohin es gehen soll? Oder wollen Sie mehr über Ihre Behandlung erfahren?",
    "text": "Ein kostenloses, professionelles Angebot ist der erste Schritt auf dem Weg zu Ihrem gesünderen Selbst. Auf Sie abgestimmt und völlig unverbindlich.",
    "button_text": "Jetzt Angebot einholen"
  },
  "accreditations": {
    "title": "Sehen Sie selbst.",
    "description": "Wir sind anerkannt durch Temos, eine unabhängige Zertifizierung für Qualität im Bereich Medizintourismus, und vom International Medical Travel Journal (IMTJ) als Beste Agentur für Medizinreisen 2017 ausgezeichnet.",
    "logo_urls": [
      "https://res.cloudinary.com/junomedical/image/upload/w_150/accreditation/temos-international",
      "https://res.cloudinary.com/junomedical/image/upload/w_150/accreditation/imtj"
    ],
    "press": {
      "title": "Bekannt aus",
      "logo_urls": [
        "https://res.cloudinary.com/junomedical/image/upload/w_240/press/fas-new",
        "https://res.cloudinary.com/junomedical/image/upload/w_240/press/forbes-new",
        "https://res.cloudinary.com/junomedical/image/upload/w_240/press/futurezone-new",
        "https://res.cloudinary.com/junomedical/image/upload/w_240/press/startupvalley-new"
      ]
    }
  },
  "cta_plain": {
    "text": "Wir begleiten Sie auf Ihrem Weg zu einem glücklicheren, gesünderen Selbst.",
    "button_text": "Jetzt Spezialisten finden"
  },
  "disclaimer": {
    "description": "Qunomedical ist ein Anbieter für Medizin- und Gesundheitstourismus, der es Patienten weltweit ermöglicht, qualitativ hochwertige Behandlungen im Ausland zu guten Preisen zu finden. Qunomedical unterstützt Patienten rund um die Suche und Planung ihrer Behandlung. Qunomedical arbeitet ausschließlich mit Kliniken zusammen, die unseren strengen Aufnahmekriterien entsprechen, sowie die höchsten Zertifizierungsstandards und langjährige Erfahrung im Umgang mit internationalen Patienten vorweisen."
  },
  "footer": {
    "terms": "<a href=\"https://www.qunomedical.com/de/agbs\" target=\"_blank\" rel=\"noopener\">AGBs</a>",
    "privacy": "<a href=\"https://www.qunomedical.com/de/datenschutz\" target=\"_blank\" rel=\"noopener\">Datenschutzerklärung</a>",
    "rights": "Alle Rechte vorbehalten"
  }
};