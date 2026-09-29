export type Language = 'es' | 'en';

export interface TranslationDictionary {
  nav: {
    home: string;
    services: string;
    about: string;
    rate: string;
    faq: string;
    contact: string;
    call: string;
    book: string;
    menu: string;
    magnifier: string;
    magnifierOn: string;
    magnifierOff: string;
    drName: string;
    drDesc: string;
    whyUs: string;
    whyUsDesc: string;
    facilities: string;
    facilitiesDesc: string;
    testimonials: string;
    testimonialsDesc: string;
    rateDesc: string;
    diagnostics: string;
    specialties: string;
    methodology: string;
  };
  hero: {
    locationBadge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaWhatsApp: string;
    ctaServices: string;
    statExperience: string;
    statExperienceSub: string;
    statPatients: string;
    statPatientsSub: string;
    statWarranty: string;
    statWarrantySub: string;
    featureWarranty: string;
    featureDiagnosis: string;
    featureRetina: string;
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
    tabAll: string;
    tabDiag: string;
    tabSpec: string;
    tabLenses: string;
    bookService: string;
    includedTag: string;
  };
  edades: {
    tag: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ageRangeLabel: string;
    ninosTag: string;
    ninosTitle: string;
    ninosAge: string;
    ninosDesc: string;
    ninosBtn: string;
    ninosH1Title: string;
    ninosH1Desc: string;
    ninosH2Title: string;
    ninosH2Desc: string;
    ninosH3Title: string;
    ninosH3Desc: string;
    adultosTag: string;
    adultosTitle: string;
    adultosAge: string;
    adultosDesc: string;
    adultosBtn: string;
    adultosH1Title: string;
    adultosH1Desc: string;
    adultosH2Title: string;
    adultosH2Desc: string;
    adultosH3Title: string;
    adultosH3Desc: string;
    mayoresTag: string;
    mayoresTitle: string;
    mayoresAge: string;
    mayoresDesc: string;
    mayoresBtn: string;
    mayoresH1Title: string;
    mayoresH1Desc: string;
    mayoresH2Title: string;
    mayoresH2Desc: string;
    mayoresH3Title: string;
    mayoresH3Desc: string;
  };
  doctor: {
    tag: string;
    title: string;
    experienceYears: string;
    badge: string;
    p1: string;
    p2: string;
    highlight1Title: string;
    highlight1Desc: string;
    highlight2Title: string;
    highlight2Desc: string;
    highlight3Title: string;
    highlight3Desc: string;
    ctaBtn: string;
  };
  whyChooseUs: {
    tag: string;
    title: string;
    titleAccent: string;
    subtitle: string;
  };
  gallery: {
    tag: string;
    title: string;
    subtitle: string;
  };
  testimonials: {
    tag: string;
    title: string;
    titleAccent: string;
    rateBtn: string;
    bookBtn: string;
  };
  faq: {
    tag: string;
    title: string;
    subtitle: string;
    moreQuestions: string;
    askWhatsApp: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    addressVal: string;
    addressSub: string;
    phoneLabel: string;
    hoursLabel: string;
    hoursVal: string;
    whatsappLabel: string;
    btnWaze: string;
    btnMaps: string;
    btnSchedule: string;
  };
  magnifier: {
    btnLabel: string;
    badgeActive: string;
    badgeInactive: string;
    toastActive: string;
    toastInactive: string;
    zoomTitle: string;
    exitEsc: string;
    increaseZoom: string;
    decreaseZoom: string;
    hoverHint: string;
  };
  footer: {
    clinicName: string;
    doctorName: string;
    doctorTitle: string;
    description: string;
    navTitle: string;
    navHome: string;
    navServices: string;
    navAges: string;
    navDoctor: string;
    navWhyUs: string;
    navTestimonials: string;
    navFaq: string;
    navContact: string;
    navRate: string;
    navRateBadge: string;
    servicesTitle: string;
    srvExam: string;
    srvRetina: string;
    srvPressure: string;
    srvLenses: string;
    srvContacts: string;
    srvPediatric: string;
    locationTitle: string;
    address: string;
    addressSub: string;
    hoursTitle: string;
    hoursDays: string;
    hoursTime: string;
    hoursSunday: string;
    phoneLabel: string;
    whatsappLabel: string;
    emergencyBadge: string;
    googleRatingText: string;
    googleReviewCta: string;
    allRights: string;
    professionalLicense: string;
    privacy: string;
    terms: string;
    developedBy: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Conócenos',
      rate: 'Calificar Experiencia',
      faq: 'Preguntas',
      contact: 'Contacto',
      call: 'Llamar',
      book: 'Agendar',
      menu: 'Menú',
      magnifier: 'Lupa',
      magnifierOn: 'Lupa: Activa',
      magnifierOff: 'Lupa: Inactiva',
      drName: 'Dr. Fabio Mora Medina',
      drDesc: 'Trayectoria y formación profesional',
      whyUs: '¿Por qué elegirnos?',
      whyUsDesc: 'Tecnología y atención personalizada',
      facilities: 'Instalaciones y Equipos',
      facilitiesDesc: 'Conoce nuestro consultorio',
      testimonials: 'Testimonios de Pacientes',
      testimonialsDesc: 'Experiencias de quienes nos visitan',
      rateDesc: 'Tu opinión nos ayuda a mejorar',
      diagnostics: 'Exámenes y Diagnóstico',
      specialties: 'Especialidades Oculares',
      methodology: 'Metodología',
    },
    hero: {
      locationBadge: 'Salud Visual en Plaza Higuerones, Desamparados',
      title: 'Diagnóstico visual con precisión médica, tecnología avanzada y ',
      titleAccent: 'trato humano',
      subtitle: 'En Ópticas Popular el Dr. Fabio Mora Medina realiza evaluaciones optométricas minuciosas para niños, adultos y personas mayores con equipos de vanguardia en un ambiente cercano y confiable.',
      ctaWhatsApp: 'Agendar cita por WhatsApp',
      ctaServices: 'Ver servicios y consultas',
      statExperience: 'Más de 18 años',
      statExperienceSub: 'de experiencia clínica',
      statPatients: 'Miles de pacientes',
      statPatientsSub: 'atendidos con éxito',
      statWarranty: 'Garantía 30 días',
      statWarrantySub: 'de adaptación visual',
      featureWarranty: 'Garantía de Adaptación Visual (30 días)',
      featureDiagnosis: 'Examen completo y fondo de ojo digital',
      featureRetina: 'Diagnóstico preventivo de retina y glaucoma',
    },
    services: {
      tag: 'Nuestros Servicios',
      title: 'Diagnósticos y soluciones visuales con rigor clínico',
      subtitle: 'Cada paciente recibe una valoración completa y personalizada con tecnología de última generación en Desamparados.',
      tabAll: 'Todos los servicios',
      tabDiag: 'Diagnóstico y Exámenes',
      tabSpec: 'Especialidades Oculares',
      tabLenses: 'Lentes y Contactología',
      bookService: 'Consultar por WhatsApp',
      includedTag: 'Incluido en tu valoración',
    },
    edades: {
      tag: 'Atención Integral por Edades',
      title: 'Cuidado especializado para ',
      titleAccent: 'toda la familia',
      subtitle: 'Desde el desarrollo visual en niños hasta el control preventivo en adultos mayores, adaptamos cada examen a tus necesidades reales.',
      ageRangeLabel: 'Rango de edad',
      ninosTag: 'Etapa Escolar y Desarrollo',
      ninosTitle: 'Salud Visual Infantil',
      ninosAge: '3 a 17 años',
      ninosDesc: 'Evaluación cercana y sin estrés para detectar a tiempo problemas de aprendizaje visual, estrabismo o miopía en desarrollo.',
      ninosBtn: 'Consultar valoración infantil',
      ninosH1Title: 'Detección de Ambliopía',
      ninosH1Desc: 'Prevención oportuna del ojo vago antes de los 8 años.',
      ninosH2Title: 'Fatiga Escolar y Lectura',
      ninosH2Desc: 'Corrección de dificultades para enfocar en la pizarra y pantallas.',
      ninosH3Title: 'Examen Amigable',
      ninosH3Desc: 'Metodología lúdica, paciente y sin estrés para los pequeños.',
      adultosTag: 'Productividad y Confort',
      adultosTitle: 'Adultos & Profesionales',
      adultosAge: '18 a 59 años',
      adultosDesc: 'Diagnóstico ergonómico para largas horas frente al computador, fatiga visual, dolores de cabeza y corrección de presbicia.',
      adultosBtn: 'Consultar cita para adultos',
      adultosH1Title: 'Síndrome Visual Informático',
      adultosH1Desc: 'Filtros avanzados de luz azul y protección de pantalla.',
      adultosH2Title: 'Lentes Progresivos de Alta Gama',
      adultosH2Desc: 'Visión nítida a toda distancia (cerca, intermedia y lejos).',
      adultosH3Title: 'Control de Presión Ocular',
      adultosH3Desc: 'Detección temprana y preventiva de glaucoma asintomático.',
      mayoresTag: 'Prevención y Calidad de Vida',
      mayoresTitle: 'Adultos Mayores & Cuido',
      mayoresAge: '60 años en adelante',
      mayoresDesc: 'Evaluación exhaustiva de retina, mácula y cristalino con la dedicación, tiempo y calidez que nuestros mayores merecen.',
      mayoresBtn: 'Consultar valoración para mayores',
      mayoresH1Title: 'Detección de Cataratas',
      mayoresH1Desc: 'Evaluación de pérdida de nitidez y orientación médica clara.',
      mayoresH2Title: 'Salud de la Mácula y Retina',
      mayoresH2Desc: 'Seguimiento fotográfico digital de retina y diabetes.',
      mayoresH3Title: 'Atención Cálida y sin Prisas',
      mayoresH3Desc: 'Tiempo suficiente y explicación detallada con respeto y paciencia.',
    },
    doctor: {
      tag: 'El Especialista',
      title: 'Dr. Fabio Mora Medina',
      experienceYears: 'Más de 18 años',
      badge: 'Optometrista Clínico Colegiado',
      p1: 'Con más de 18 años de trayectoria profesional, el Dr. Fabio Mora se caracteriza por brindar una consulta transparente, paciente y pedagógica. Su objetivo principal no es solo recetar lentes, sino garantizar que cada paciente comprenda la salud real de sus ojos.',
      p2: 'Especialista en refracción clínica computarizada, adaptación de lentes progresivos de alta tecnología y evaluación preventiva de enfermedades oculares crónicas como glaucoma, catarata y retinopatía.',
      highlight1Title: 'Consulta Pedagógica',
      highlight1Desc: 'Explicación paso a paso de tu diagnóstico sin tecnicismos.',
      highlight2Title: 'Tecnología Digital',
      highlight2Desc: 'Equipos avanzados de refracción y fotografía de fondo de ojo.',
      highlight3Title: 'Garantía Total',
      highlight3Desc: 'Seguimiento posconsulta y 30 días de garantía de adaptación.',
      ctaBtn: 'Agendar cita con el Dr. Mora',
    },
    whyChooseUs: {
      tag: 'Por Qué Elegirnos',
      title: 'Razones por las que confían en ',
      titleAccent: 'Ópticas Popular',
      subtitle: 'Tecnología médica avanzada combinada con atención honesta y precios justos en Desamparados.',
    },
    gallery: {
      tag: 'Espacio y Tecnología',
      title: 'Instalaciones diseñadas para tu comodidad visual',
      subtitle: 'Un consultorio moderno, limpio y acogedor en Plaza Higuerones, San Rafael Abajo de Desamparados.',
    },
    testimonials: {
      tag: 'Testimonios',
      title: 'La confianza se gana con ',
      titleAccent: 'atención clara y honesta',
      rateBtn: 'Calificar experiencia',
      bookBtn: 'Agendar valoración',
    },
    faq: {
      tag: 'Preguntas Frecuentes',
      title: 'Resolvemos tus dudas sobre tu cita',
      subtitle: 'Todo lo que necesitas saber antes de tu visita a Ópticas Popular con el Dr. Fabio Mora.',
      moreQuestions: '¿Tienes otra consulta específica?',
      askWhatsApp: 'Preguntar por WhatsApp',
    },
    contact: {
      tag: 'Ubicación y Contacto',
      title: 'Visítanos en Plaza Higuerones',
      subtitle: 'Fácil acceso, parqueo amplio y seguro en San Rafael Abajo de Desamparados.',
      addressLabel: 'Dirección del Consultorio',
      addressVal: 'Plaza Higuerones, Local 23',
      addressSub: 'San Rafael Abajo de Desamparados, San José, Costa Rica',
      phoneLabel: 'Teléfono Directo',
      hoursLabel: 'Horario de Atención',
      hoursVal: 'Lunes a Sábado: 9:00 AM - 6:00 PM',
      whatsappLabel: 'WhatsApp Oficial',
      btnWaze: 'Abrir en Waze',
      btnMaps: 'Abrir en Google Maps',
      btnSchedule: 'Agendar por WhatsApp',
    },
    magnifier: {
      btnLabel: 'Lupa',
      badgeActive: 'Lupa Activa',
      badgeInactive: 'Lupa Inactiva',
      toastActive: 'Lupa de lectura activada. Pasa el cursor sobre cualquier texto para ampliarlo.',
      toastInactive: 'Lupa desactivada.',
      zoomTitle: 'Lupa Oftálmica · Aumento',
      exitEsc: 'Presiona ESC para cerrar',
      increaseZoom: 'Aumentar zoom',
      decreaseZoom: 'Reducir zoom',
      hoverHint: 'Pasa sobre cualquier texto para ampliar su lectura',
    },
    footer: {
      clinicName: 'Ópticas Popular',
      doctorName: 'Dr. Fabio Mora Medina',
      doctorTitle: 'Optometrista Clínico · C.O.C.R.',
      description: 'Cuidado visual integral con más de 18 años de trayectoria en San Rafael Abajo de Desamparados. Diagnóstico computarizado avanzado, tecnología retiniana de vanguardia y atención personalizada para toda la familia.',
      navTitle: 'Navegación Rápida',
      navHome: 'Inicio',
      navServices: 'Servicios Clínicos',
      navAges: 'Atención por Edades',
      navDoctor: 'Dr. Fabio Mora',
      navWhyUs: '¿Por qué elegirnos?',
      navTestimonials: 'Testimonios',
      navFaq: 'Preguntas Frecuentes',
      navContact: 'Ubicación & Citas',
      navRate: 'Calificar Experiencia',
      navRateBadge: 'Nuevo',
      servicesTitle: 'Servicios Especializados',
      srvExam: 'Examen de la Vista Computarizado',
      srvRetina: 'Fotografía Digital de Retina',
      srvPressure: 'Tonometría (Presión Ocular)',
      srvLenses: 'Lentes Progresivos & Antirreflejo',
      srvContacts: 'Adaptación de Lentes de Contacto',
      srvPediatric: 'Evaluación Visual Infantil',
      locationTitle: 'Ubicación & Contacto',
      address: 'Plaza Higuerones, Local 23',
      addressSub: 'San Rafael Abajo de Desamparados, San José, Costa Rica',
      hoursTitle: 'Horario de Atención',
      hoursDays: 'Lunes a Sábado',
      hoursTime: '9:00 AM - 6:00 PM',
      hoursSunday: 'Domingos cerrado',
      phoneLabel: 'Teléfono directo',
      whatsappLabel: 'WhatsApp oficial',
      emergencyBadge: 'Atención personalizada y urgencias visuales',
      googleRatingText: '4.9 ★★★★★ en Google Reviews',
      googleReviewCta: 'Ver ubicación en Maps',
      allRights: 'Todos los derechos reservados.',
      professionalLicense: 'Colegio de Optometristas de Costa Rica',
      privacy: 'Política de Privacidad',
      terms: 'Términos del Servicio',
      developedBy: 'Desarrollado por localrank.com.co',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      rate: 'Rate Experience',
      faq: 'FAQ',
      contact: 'Contact',
      call: 'Call',
      book: 'Book',
      menu: 'Menu',
      magnifier: 'Lens',
      magnifierOn: 'Lens: Active',
      magnifierOff: 'Lens: Inactive',
      drName: 'Dr. Fabio Mora Medina',
      drDesc: 'Experience and clinical credentials',
      whyUs: 'Why Choose Us?',
      whyUsDesc: 'Technology & personalized patient care',
      facilities: 'Facilities & Equipment',
      facilitiesDesc: 'Discover our clinic in Plaza Higuerones',
      testimonials: 'Patient Testimonials',
      testimonialsDesc: 'Reviews from our valued patients',
      rateDesc: 'Your feedback helps us improve',
      diagnostics: 'Diagnostics & Exams',
      specialties: 'Eye Specialties',
      methodology: 'Our Methodology',
    },
    hero: {
      locationBadge: 'Specialized Eye Care in Plaza Higuerones, Desamparados',
      title: 'Visual diagnosis with medical precision, advanced technology, and ',
      titleAccent: 'compassionate care',
      subtitle: 'At Opticas Popular, Dr. Fabio Mora Medina delivers thorough optometric exams for children, adults, and seniors with cutting-edge equipment in a friendly and trustworthy environment.',
      ctaWhatsApp: 'Book appointment via WhatsApp',
      ctaServices: 'Explore services & exams',
      statExperience: 'Over 18 years',
      statExperienceSub: 'of clinical expertise',
      statPatients: 'Thousands',
      statPatientsSub: 'of satisfied patients',
      statWarranty: '30-Day Guarantee',
      statWarrantySub: 'visual adaptation guarantee',
      featureWarranty: 'Visual Adaptation Warranty (30 days)',
      featureDiagnosis: 'Comprehensive exam & digital funduscopy',
      featureRetina: 'Preventive retinal photography & glaucoma check',
    },
    services: {
      tag: 'Our Services',
      title: 'Comprehensive Eye Care with Clinical Excellence',
      subtitle: 'Every patient receives an in-depth, personalized evaluation using advanced digital technology in Desamparados, Costa Rica.',
      tabAll: 'All Services',
      tabDiag: 'Diagnostics & Exams',
      tabSpec: 'Eye Specialties',
      tabLenses: 'Eyeglasses & Contacts',
      bookService: 'Inquire via WhatsApp',
      includedTag: 'Included in your exam',
    },
    edades: {
      tag: 'Comprehensive Care for All Ages',
      title: 'Specialized visual evaluation for ',
      titleAccent: 'the entire family',
      subtitle: 'From early childhood visual development to preventive macular health in seniors, we customize every exam to your real visual needs.',
      ageRangeLabel: 'Age bracket',
      ninosTag: 'Early Childhood & Learning',
      ninosTitle: 'Pediatric Vision Care',
      ninosAge: '3 to 17 years',
      ninosDesc: 'Gentle, stress-free evaluation to detect visual learning problems, strabismus, and early myopia in time.',
      ninosBtn: 'Inquire pediatric exam',
      ninosH1Title: 'Amblyopia Detection',
      ninosH1Desc: 'Timely prevention of lazy eye before age 8.',
      ninosH2Title: 'Digital & School Fatigue',
      ninosH2Desc: 'Correction of focus issues for whiteboards and digital screens.',
      ninosH3Title: 'Child-Friendly Exam',
      ninosH3Desc: 'Playful, patient, and stress-free methodology for kids.',
      adultosTag: 'Productivity & Comfort',
      adultosTitle: 'Adults & Professionals',
      adultosAge: '18 to 59 years',
      adultosDesc: 'Ergonomic diagnosis for long screen hours, digital eye strain, chronic headaches, and progressive presbyopia correction.',
      adultosBtn: 'Inquire adult appointment',
      adultosH1Title: 'Computer Vision Syndrome',
      adultosH1Desc: 'Blue-light filtering lenses and screen protection.',
      adultosH2Title: 'High-End Progressive Lenses',
      adultosH2Desc: 'Crystal clear focus across near, intermediate, and far distances.',
      adultosH3Title: 'Intraocular Pressure Check',
      adultosH3Desc: 'Early and preventive screening for asymptomatic glaucoma.',
      mayoresTag: 'Prevention & Quality of Life',
      mayoresTitle: 'Seniors & Specialized Care',
      mayoresAge: '60 years and above',
      mayoresDesc: 'In-depth assessment of retina, macula, and crystalline lens with the dedication, time, and warmth our elders deserve.',
      mayoresBtn: 'Inquire senior consultation',
      mayoresH1Title: 'Cataract Screening',
      mayoresH1Desc: 'Assessment of visual clouding with clear medical guidance.',
      mayoresH2Title: 'Macular & Retinal Health',
      mayoresH2Desc: 'Digital fundus photography and diabetes vision monitoring.',
      mayoresH3Title: 'Patience & Gentle Care',
      mayoresH3Desc: 'Dedicated exam time and clear explanations with respect.',
    },
    doctor: {
      tag: 'The Specialist',
      title: 'Dr. Fabio Mora Medina',
      experienceYears: 'Over 18 years',
      badge: 'Certified Clinical Optometrist',
      p1: 'With over 18 years of clinical experience, Dr. Fabio Mora is renowned for his transparent, calm, and educational consultations. His primary goal is not just prescribing glasses, but ensuring you truly understand the health of your eyes.',
      p2: 'Specialist in computerized refraction, custom progressive lens fitting, contact lenses, and preventive screening for chronic eye diseases such as glaucoma, cataracts, and diabetic retinopathy.',
      highlight1Title: 'Educational Exam',
      highlight1Desc: 'Step-by-step explanation of your diagnosis without medical jargon.',
      highlight2Title: 'Digital Technology',
      highlight2Desc: 'Modern refraction tools and digital retinal imaging.',
      highlight3Title: 'Total Guarantee',
      highlight3Desc: 'Post-consultation follow-up and 30-day adaptation guarantee.',
      ctaBtn: 'Book with Dr. Fabio Mora',
    },
    whyChooseUs: {
      tag: 'Why Choose Us',
      title: 'Why families trust ',
      titleAccent: 'Opticas Popular',
      subtitle: 'Modern clinical technology paired with honest care and fair pricing in Desamparados.',
    },
    gallery: {
      tag: 'Space & Equipment',
      title: 'Facilities designed for your visual comfort',
      subtitle: 'A clean, modern, and welcoming clinic at Plaza Higuerones, San Rafael Abajo de Desamparados.',
    },
    testimonials: {
      tag: 'Testimonials',
      title: 'Trust is built through ',
      titleAccent: 'clear and honest care',
      rateBtn: 'Rate experience',
      bookBtn: 'Book appointment',
    },
    faq: {
      tag: 'Frequently Asked Questions',
      title: 'Answers to your common questions',
      subtitle: 'Everything you need to know before visiting Opticas Popular with Dr. Fabio Mora.',
      moreQuestions: 'Have a specific question?',
      askWhatsApp: 'Ask via WhatsApp',
    },
    contact: {
      tag: 'Location & Contact',
      title: 'Visit Us at Plaza Higuerones',
      subtitle: 'Easy access, spacious and secure parking in San Rafael Abajo de Desamparados.',
      addressLabel: 'Clinic Address',
      addressVal: 'Plaza Higuerones, Unit 23',
      addressSub: 'San Rafael Abajo de Desamparados, San Jose, Costa Rica',
      phoneLabel: 'Direct Phone',
      hoursLabel: 'Opening Hours',
      hoursVal: 'Monday to Saturday: 9:00 AM - 6:00 PM',
      whatsappLabel: 'Official WhatsApp',
      btnWaze: 'Open in Waze',
      btnMaps: 'Open in Google Maps',
      btnSchedule: 'Book via WhatsApp',
    },
    magnifier: {
      btnLabel: 'Lens',
      badgeActive: 'Reading Lens Active',
      badgeInactive: 'Reading Lens Off',
      toastActive: 'Reading lens active. Hover over any text to enlarge it.',
      toastInactive: 'Reading lens turned off.',
      zoomTitle: 'Optical Lens · Zoom',
      exitEsc: 'Press ESC to exit',
      increaseZoom: 'Increase zoom',
      decreaseZoom: 'Decrease zoom',
      hoverHint: 'Hover over any text to view in large print',
    },
    footer: {
      clinicName: 'Opticas Popular',
      doctorName: 'Dr. Fabio Mora Medina',
      doctorTitle: 'Clinical Optometrist · C.O.C.R.',
      description: 'Comprehensive eye care with over 18 years of clinical excellence in San Rafael Abajo de Desamparados. Advanced computerized diagnosis, digital retinal imaging, and human-centered care for the entire family.',
      navTitle: 'Quick Navigation',
      navHome: 'Home',
      navServices: 'Clinical Services',
      navAges: 'Care by Age',
      navDoctor: 'Dr. Fabio Mora',
      navWhyUs: 'Why Choose Us',
      navTestimonials: 'Patient Reviews',
      navFaq: 'Frequently Asked Questions',
      navContact: 'Location & Booking',
      navRate: 'Rate Experience',
      navRateBadge: 'New',
      servicesTitle: 'Specialized Services',
      srvExam: 'Computerized Eye Exam',
      srvRetina: 'Digital Retinal Photography',
      srvPressure: 'Intraocular Pressure (Glaucoma)',
      srvLenses: 'Custom Progressive Lenses',
      srvContacts: 'Contact Lens Fitting',
      srvPediatric: 'Pediatric Vision Screening',
      locationTitle: 'Location & Contact',
      address: 'Plaza Higuerones, Unit 23',
      addressSub: 'San Rafael Abajo de Desamparados, San Jose, Costa Rica',
      hoursTitle: 'Opening Hours',
      hoursDays: 'Monday to Saturday',
      hoursTime: '9:00 AM - 6:00 PM',
      hoursSunday: 'Closed on Sundays',
      phoneLabel: 'Direct line',
      whatsappLabel: 'Official WhatsApp',
      emergencyBadge: 'Personalized care & urgent visual concerns',
      googleRatingText: '4.9 ★★★★★ on Google Reviews',
      googleReviewCta: 'View on Google Maps',
      allRights: 'All rights reserved.',
      professionalLicense: 'College of Optometrists of Costa Rica',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      developedBy: 'Developed by localrank.com.co',
    },
  },
};
