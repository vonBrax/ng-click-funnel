export const Strings = {
  "funnel_name": "ES.Dental:1.1",
  "funnel": [
    {
      "name": "treatment",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "¿Necesitas un dentista?",
      "answers": [
        "Implantes",
        "Coronas",
        "Carilla",
        "Blanqueamiento dental",
        "Chequeo"
      ],
      "icons": [
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/dental-implant.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/dental-crown.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/dental-veneer.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/dental-whitening.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/dental-checkup.png"
      ]
    },
    {
      "name": "dynamic_step2",
      "type": "dynamic-step",
      "validators": [
        "required"
      ],
      "dynamics": [
        {
          "name": "additional_info_how_many_implants",
          "question": "¿Cuántos implantes?",
          "answers": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6 o más"
          ]
        },
        {
          "name": "additional_info_how_many_crowns",
          "question": "¿Cuántas coronas?",
          "answers": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6 o más"
          ]
        },
        {
          "name": "additional_info_how_many_veneers",
          "question": "¿Cuántas carillas?",
          "answers": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6 o más"
          ]
        },
        {
          "name": "additional_info_last_whitening",
          "question": "¿Cuándo fue tu último blanqueamiento dental?",
          "answers": [
            "Últimos 12 meses",
            "Últimos 1-2 años",
            "Mas de 2 años",
            "Nunca lo hice"
          ]
        },
        {
          "name": "additional_info_last_checkup",
          "question": "¿Cuándo fue tu último examen dental?",
          "answers": [
            "Últimos 12 meses",
            "Últimos 1-2 años",
            "Mas de 2 años",
            "Nunca lo hice"
          ]
        }
      ]
    },
    {
      "name": "additional_info_country_residency",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "¿Dónde vives?",
      "answers": [
        "Argentina",
        "Colombia",
        "España",
        "Estados Unidos",
        "México",
        "Venezuela"
      ],
      "icons": [
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/flag-ar.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/flag-co.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/flag-es.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/flag-us.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/flag-mx.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/flag-ve.png"
      ]
    },
    {
      "name": "country_interest",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "¿A donde quieres ir?",
      "answers": [
        "Hungría",
        "México",
        "Costa Rica",
        "Croacia",
        "Polonia",
        "España"
      ],
      "icons": [
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/flag-hu.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/flag-mx.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/flag-cr.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/flag-hr.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/flag-pl.png",
        "https://res.cloudinary.com/junomedical/image/upload/f_auto,c_scale,w_55/unbounce/flag-es.png"
      ],
      "append": [
        "€",
        "€",
        "€€",
        "€€",
        "€€",
        "€€€"
      ]
    },
    {
      "name": "additional_info_frequency_abroad",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "¿Con qué frecuencia viajas al exterior?",
      "answers": [
        "Nunca",
        "1 vez por año",
        "2 veces por año",
        "3 veces por año",
        "Más de 3 veces por año"
      ]
    },
    {
      "name": "timeline",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "¿Cuándo quieres este tratamiento?",
      "answers": [
        "Tan pronto como sea posible",
        "En 1 mes",
        "En 3 meses",
        "En 6 meses",
        "Más adelante"
      ]
    },
    {
      "name": "urgency",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "¿Qué estás buscando?",
      "answers": [
        "Obtener una cotización",
        "Reservar una cita",
        "Solo obtener información",
        "Encontrar la clínica adecuada"
      ]
    },
    {
      "name": "additional_info_occupation",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "¿Cuál es tu ocupación?",
      "answers": [
        "Empleado",
        "Desempleado",
        "Trabajador público",
        "Retirado",
        "Independiente",
        "Estudiante"
      ]
    },
    {
      "name": "additional_info_payment",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "¿Cómo quieres pagar?",
      "answers": [
        "Pago único",
        "Cuotas mensuales"
      ]
    },
    {
      "name": "additional_info_priority",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "¿Cuál es tu prioridad?",
      "answers": [
        "Barato",
        "Encontrar un especialista",
        "Cerca de donde vivo",
        "Mejores críticas",
        "Reserva rápida"
      ]
    },
    {
      "name": "additional_info_last_visit",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "¿Última visita al dentista?",
      "answers": [
        "Últimos 6 meses",
        "Últimos 6-12 meses",
        "Últimos 1-2 años",
        "Mas de 2 años"
      ]
    },
    {
      "name": "additional_info_treatment_plan",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "¿Ya tienes un plan de tratamiento?",
      "answers": [
        "Sí",
        "No",
        "No sé lo que es"
      ]
    },
    {
      "name": "additional_info_insurance",
      "type": "radio-click",
      "validators": [
        "required"
      ],
      "question": "¿Tienes un seguro dental?",
      "answers": [
        "No",
        "Parcialmente",
        "Sí",
        "No estoy seguro"
      ]
    },
    {
      "name": "additional_info_user_notes",
      "type": "textarea",
      "validators": [],
      "question": "¿Hay algo más que deberíamos saber?",
      "answers": [],
      "label": "Notas adicionales",
      "next_button": "SIGUIENTE"
    },
    {
      "name": "personal_information",
      "type": "personal_information",
      "validators": [],
      "label": "Notas adicionales",
      "next_button": "SIGUIENTE",
      "fields": [
        {
          "name": "first_name",
          "type": "text",
          "placeholder": "Nombre de pila",
          "error_message": "Por favor díganos tu nombre",
          "validators": [
            "required"
          ]
        },
        {
          "name": "last_name",
          "type": "text",
          "placeholder": "Apellido",
          "error_message": "Por favor díganos tu apellido",
          "validators": [
            "required"
          ]
        },
        {
          "name": "email",
          "type": "email",
          "placeholder": "Email",
          "error_message": "Por favor díganos tu correo electrónico",
          "validators": [
            "required"
          ]
        },
        {
          "name": "phone_country",
          "type": "text",
          "placeholder": "País",
          "error_message": "Por favor díganos tu país",
          "validators": [
            "required"
          ]
        },
        {
          "name": "phone_number",
          "type": "phone",
          "placeholder": "Teléfono",
          "error_message": "Por favor díganos tu número de teléfono",
          "validators": [
            "required"
          ]
        }
      ],
      "tos": "Acepto los <a href=\"https://www.qunomedical.com/en/terms-and-conditions\" target=\"_blank\" rel=\"noopener\">Términos y Condiciones</a>, la <a href=\"https://www.qunomedical.com/en/privacy\" target=\"_blank\" rel=\"noopener\">Política de Privacidad</a> y que Qunomedical puede recopilar, procesar, usar y divulgar mi información personal y de salud.",
      "submit_btn": "OBTENER MI COTIZACIÓN"
    }
  ],
  "hero_banner": {
    "headline": "Te ayudamos a encontrar el dentista necesario",
    "values": []
  },
  "patient_stories": {
  },
  "footer": {
    "terms": "<a href=\"https://www.qunomedical.com/en/terms-and-conditions\" target=\"_blank\" rel=\"noopener\">Términos y Condiciones</a>",
    "privacy": "<a href=\"https://www.qunomedical.com/en/privacy\" target=\"_blank\" rel=\"noopener\">Política de Privacidad</a>",
    "rights": "Todos los derechos reservados"
  }
};