import { useState, useEffect, useRef } from 'react';
import { 
  motion, 
  AnimatePresence, 
  animate, 
  useMotionValue, 
  useTransform, 
  useInView, 
  useScroll, 
  useSpring 
} from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Eye, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowUpRight, 
  Camera, 
  Activity, 
  Stethoscope, 
  Droplets, 
  Contact,
  Instagram,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  HelpCircle,
  ShieldCheck,
  Award,
  Zap,
  MapPin,
  Star,
  Sparkles,
  RotateCcw,
  AlertCircle,
  Navigation,
  CreditCard,
  Smartphone,
  Receipt,
  Baby,
  Smile,
  Glasses,
  HeartHandshake,
  BookOpen,
  Monitor,
  Globe,
  ArrowRight,
  Plus,
  Minus,
  Sun
} from 'lucide-react';
import CalificarPage from './CalificarPage';
import ConsultaPage from './ConsultaPage';
import TestVisualPage from './TestVisualPage';
import ContactoPage from './ContactoPage';
import TecnologiaCristalesPage from './TecnologiaCristalesPage';
import TestimoniosPage from './TestimoniosPage';
import Footer from './Footer';
import { TRANSLATIONS, Language } from './translations';

function AnimatedNumber({ value, duration = 2 }: { value: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { 
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [count, value, duration, isInView]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplayValue(v));
  }, [rounded]);

  return <span ref={ref}>{displayValue}</span>;
}

interface SubItem {
  name: string;
  href: string;
  desc: string;
  icon?: any;
}

interface SubGroup {
  title: string;
  items: SubItem[];
}

interface NavCategory {
  id: string;
  name: string;
  href?: string;
  groups?: SubGroup[];
}

function getNavigationMenu(lang: Language): NavCategory[] {
  const t = TRANSLATIONS[lang].nav;
  return [
    {
      id: 'inicio',
      name: t.home,
      href: '#inicio',
    },
    {
      id: 'servicios',
      name: t.services,
      href: '#servicios',
      groups: [
        {
          title: t.diagnostics,
          items: [
            { name: lang === 'es' ? 'Examen Visual Completo' : 'Comprehensive Visual Exam', href: '#servicios', desc: lang === 'es' ? 'Graduación certera y fondo de ojo' : 'Accurate refraction & fundus exam', icon: Eye },
            { name: lang === 'es' ? 'Para Toda la Familia' : 'For the Whole Family', href: '#edades', desc: lang === 'es' ? 'Chiquitos, adultos y adultos mayores' : 'Kids, adults, and seniors', icon: Users },
            { name: lang === 'es' ? 'Fotografía de Retina' : 'Retinal Photography', href: '#servicios', desc: lang === 'es' ? 'Diagnóstico digital de retina' : 'Digital retinal imaging', icon: Camera },
            { name: lang === 'es' ? 'Toma de Presión Ocular' : 'Eye Pressure Test', href: '#servicios', desc: lang === 'es' ? 'Control preventivo de glaucoma' : 'Glaucoma screening', icon: Activity },
          ],
        },
        {
          title: t.specialties,
          items: [
            { name: lang === 'es' ? 'Valoración de Cataratas' : 'Cataract Assessment', href: '#servicios', desc: lang === 'es' ? 'Evaluación y orientación médica' : 'Evaluation & medical guidance', icon: Stethoscope },
            { name: lang === 'es' ? 'Evaluación de Ojo Seco' : 'Dry Eye Evaluation', href: '#servicios', desc: lang === 'es' ? 'Alivio de resequedad y ardor' : 'Relief for irritation and dryness', icon: Droplets },
            { name: lang === 'es' ? 'Lentes de Contacto' : 'Contact Lenses', href: '#lentes-contacto', desc: lang === 'es' ? 'Adaptación clínica y prueba guiada' : 'Clinical fitting & hands-on trial', icon: Contact },
            { name: lang === 'es' ? 'Tecnología en Cristales' : 'Lens Technology', href: '#tecnologia-cristales', desc: lang === 'es' ? 'Simulador de Progresivos, Transitions y Filtro Azul' : 'Simulator: Progressives, Transitions & Blue Light', icon: Glasses },
          ],
        },
        {
          title: t.methodology,
          items: [
            { name: lang === 'es' ? 'Paso a Paso de tu Cita' : 'Exam Step-by-Step', href: '#proceso', desc: lang === 'es' ? 'Cómo te atendemos en tu consulta' : 'What to expect at your appointment', icon: CheckCircle2 },
          ],
        },
        {
          title: lang === 'es' ? 'Autoevaluación' : 'Self-Screening',
          items: [
            { 
              name: lang === 'es' ? 'Test Visual Online' : 'Online Vision Test', 
              href: '#test-visual', 
              desc: lang === 'es' ? 'Revisá agudeza, astigmatismo y daltonismo en 3 min' : 'Check acuity, astigmatism & color in 3 min', 
              icon: Sparkles 
            },
          ],
        },
      ],
    },
    {
      id: 'nosotros',
      name: t.about,
      href: '#doctor',
      groups: [
        {
          title: lang === 'es' ? 'El Consultorio' : 'Our Practice',
          items: [
            { name: t.drName, href: '#doctor', desc: t.drDesc, icon: Award },
            { name: t.whyUs, href: '#beneficios', desc: t.whyUsDesc, icon: ShieldCheck },
          ],
        },
        {
          title: lang === 'es' ? 'Experiencia y Espacio' : 'Experience & Clinic',
          items: [
            { name: t.facilities, href: '#galeria', desc: t.facilitiesDesc, icon: Camera },
            { name: t.rate, href: '#calificar', desc: t.rateDesc, icon: Award },
          ],
        },
      ],
    },
    {
      id: 'faq',
      name: t.faq,
      href: '#faq',
      groups: [
        {
          title: lang === 'es' ? 'Preguntas y Consultas' : 'Questions & Support',
          items: [
            { 
              name: lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions', 
              href: '#faq', 
              desc: lang === 'es' ? 'Respuestas sobre exámenes, pagos y garantía' : 'Answers on exams, payments & guarantee', 
              icon: HelpCircle 
            },
            { 
              name: lang === 'es' ? 'Reseñas de Pacientes en Google' : 'Patient Reviews on Google', 
              href: '#testimonios-google', 
              desc: lang === 'es' ? 'Muro interactivo con opiniones 100% verificadas' : 'Interactive masonry wall with verified reviews', 
              icon: Star 
            },
            { 
              name: lang === 'es' ? 'Formulario de Consulta' : 'WhatsApp Inquiry Page', 
              href: '#consulta', 
              desc: lang === 'es' ? 'Página dedicada para enviar tu mensaje al doctor' : 'Dedicated page to message Dr. Fabio Mora', 
              icon: MessageCircle 
            },
            { 
              name: lang === 'es' ? 'Test Visual Online' : 'Online Vision Test', 
              href: '#test-visual', 
              desc: lang === 'es' ? 'Autoevaluación interactiva de 3 minutos' : '3-minute interactive screening', 
              icon: Sparkles 
            },
          ],
        },
      ],
    },
    {
      id: 'contacto',
      name: t.contact,
      href: '#contacto',
    },
  ];
}

function getWhyChooseUs(lang: Language) {
  if (lang === 'en') {
    return [
      {
        title: 'Cutting-Edge Technology',
        description: 'Advanced computerized equipment for accurate, detailed, and comfortable diagnoses.',
        icon: Zap,
      },
      {
        title: 'Personalized Clinical Care',
        description: 'Each patient receives the dedicated time, focus, and explanation their eye health deserves.',
        icon: ShieldCheck,
      },
      {
        title: 'Clinical Experience',
        description: <>Over <span className="text-[rgb(122,24,35)] font-bold"><AnimatedNumber value={18} /></span> years of clinical expertise and continuous medical education.</>,
        icon: Award,
      },
      {
        title: 'Preventive Approach',
        description: 'We detect visual and retinal changes early, before they affect your quality of life.',
        icon: Eye,
      },
    ];
  }
  return [
    {
      title: 'Tecnología de punta',
      description: 'Equipos digitales de última generación para diagnósticos certeros y sin enredos.',
      icon: Zap,
    },
    {
      title: 'Atención personalizada',
      description: 'Te atendemos con calma y paciencia, dedicándote el tiempo que tus ojos merecen.',
      icon: ShieldCheck,
    },
    {
      title: 'Experiencia clínica',
      description: <>Más de <span className="text-[rgb(122,24,35)] font-bold"><AnimatedNumber value={18} /></span> años de trayectoria profesional y actualización médica constante.</>,
      icon: Award,
    },
    {
      title: 'Enfoque preventivo',
      description: 'Detectamos a tiempo cualquier cambio antes de que afecte tu calidad de vida.',
      icon: Eye,
    },
  ];
}

function getFaqs(lang: Language) {
  if (lang === 'en') {
    return [
      {
        question: 'How often should I have an eye exam?',
        answer: 'A comprehensive eye exam is recommended at least once a year, especially if you wear corrective lenses, spend long hours on screens, or have a family history of eye conditions.'
      },
      {
        question: 'What is included in the comprehensive visual evaluation?',
        answer: 'It includes visual acuity testing, digital refraction to determine your precise prescription, fundus examination, intraocular pressure measurement, and external ocular health assessment.'
      },
      {
        question: 'Do you treat children and seniors?',
        answer: 'Yes, we provide personalized care for all age groups. We adapt our clinical tests to the needs of children, adults, and seniors with patience and warmth.'
      },
      {
        question: 'Do I need an appointment beforehand?',
        answer: 'Yes, we work by appointment to ensure the dedicated time and clinical quality your visual health deserves. You can easily schedule via WhatsApp or phone call.'
      },
      {
        question: 'How long does the consultation take?',
        answer: 'A comprehensive evaluation typically takes 30 to 45 minutes, depending on the specific tests your clinical case requires.'
      },
      {
        question: 'What if I do not adapt to my new lenses or prescription?',
        answer: 'We provide a 30-Day Visual Adaptation Guarantee. If during the first month you experience any discomfort or focusing issue with your new lenses (especially progressives), Dr. Fabio Mora performs a full re-evaluation and lens adjustment at no extra charge.'
      },
      {
        question: 'What payment methods do you accept and can I bring my own frames?',
        answer: 'We accept cash, local bank transfers (SINPE Movil), credit and debit cards. We also provide electronic invoices for medical insurance reimbursement. And yes, if you already have a favorite frame in good condition, we can fit only your new prescription lenses.'
      }
    ];
  }
  return [
    {
      question: '¿Cada cuánto me tengo que hacer el examen de la vista?',
      answer: 'Lo ideal es hacerse un examen completo al menos una vez al año, sobre todo si usás anteojos, pasás muchas horas frente a la compu o el celular, o si en la familia hay antecedentes de problemas en los ojos.'
    },
    {
      question: '¿Qué incluye la valoración visual integral?',
      answer: 'Incluye agudeza visual, refracción computarizada para darte la graduación exacta, revisión de fondo de ojo, toma de presión ocular y chequeo preventivo de la salud de tus ojos.'
    },
    {
      question: '¿Atienden a chiquitos y a adultos mayores?',
      answer: '¡Claro que sí! Atendemos a toda la familia: chiquitos en edad escolar, jóvenes, adultos y abuelitos. A cada uno lo tratamos con el tiempo, la paciencia y el cariño que necesita.'
    },
    {
      question: '¿Tengo que sacar cita previa para ir?',
      answer: 'Sí, trabajamos con cita previa para garantizarte una atención sin carreras y con el tiempo exclusivo que merecés. Podés agendar facilito y de inmediato por WhatsApp o por teléfono.'
    },
    {
      question: '¿Cuánto dura la consulta?',
      answer: 'La valoración completa suele durar entre 30 y 45 minutos, tomándonos el tiempo necesario para explicarte todo con calma y sin prisas.'
    },
    {
      question: '¿Qué pasa si no me adapto a mis nuevos lentes o a la graduación?',
      answer: 'Tenés nuestra Garantía de Adaptación de 30 días. Si durante el primer mes sentís alguna molestia o te cuesta enfocar (especialmente con lentes progresivos), el Dr. Fabio Mora te hace una reevaluación completa y el ajuste de tus lentes sin cobrarte ni un solo colón extra.'
    },
    {
      question: '¿Qué formas de pago reciben y puedo llevar mis propios aros?',
      answer: 'Aceptamos SINPE Móvil, efectivo, tarjetas de débito y crédito, y facilidades con Tasa Cero. Además, emitimos factura electrónica para reintegros con seguros o asociaciones. Y por supuesto: si tenés unos aros favoritos en buen estado, con gusto les adaptamos únicamente los cristales nuevos.'
    }
  ];
}

function getServices(lang: Language) {
  if (lang === 'en') {
    return [
      {
        title: 'Comprehensive Visual Evaluation',
        category: 'Diagnostics & Exams',
        categoryId: 'diag',
        description: 'Complete examination to accurately evaluate your eye health and prescribe the optimal visual solution.',
        icon: Eye,
      },
      {
        title: 'Retinal Photography',
        category: 'Eye Specialties',
        categoryId: 'spec',
        description: 'High-resolution digital imaging of the retina to detect and monitor eye conditions early.',
        icon: Camera,
      },
      {
        title: 'Intraocular Pressure Test',
        category: 'Diagnostics & Exams',
        categoryId: 'diag',
        description: 'Targeted measurement to detect risk factors related to glaucoma and maintain ocular health.',
        icon: Activity,
      },
      {
        title: 'Cataract Assessment',
        category: 'Eye Specialties',
        categoryId: 'spec',
        description: 'Diagnosis and medical orientation to understand your lens clarity and recommended management.',
        icon: Stethoscope,
      },
      {
        title: 'Dry Eye Evaluation',
        category: 'Eye Specialties',
        categoryId: 'spec',
        description: 'Assessment of ocular discomfort, redness, and dryness to recommend comfortable and effective therapy.',
        icon: Droplets,
      },
      {
        title: 'Contact Lenses Fitting',
        category: 'Eyeglasses & Contacts',
        categoryId: 'lens',
        description: 'Personalized adaptation for spherical, astigmatism, and multifocal lenses tailored to your lifestyle.',
        icon: Contact,
      },
    ];
  }
  return [
    {
      title: 'Examen de la vista completo',
      category: 'Diagnóstico y Exámenes',
      categoryId: 'diag',
      description: 'Valoración computarizada para conocer con exactitud el estado de tus ojos y orientar la mejor solución.',
      icon: Eye,
    },
    {
      title: 'Fotografía digital de retina',
      category: 'Especialidades Oculares',
      categoryId: 'spec',
      description: 'Revisión preventiva de la retina con imágenes de alta resolución para detectar a tiempo cualquier alteración.',
      icon: Camera,
    },
    {
      title: 'Toma de presión ocular',
      category: 'Diagnóstico y Exámenes',
      categoryId: 'diag',
      description: 'Medición rápida y sin dolor orientada a prevenir factores de riesgo de glaucoma.',
      icon: Activity,
    },
    {
      title: 'Valoración de cataratas',
      category: 'Especialidades Oculares',
      categoryId: 'spec',
      description: 'Diagnóstico y orientación médica clara para entender el estado de tu visión y el tratamiento recomendado.',
      icon: Stethoscope,
    },
    {
      title: 'Evaluación de ojo seco y fatiga',
      category: 'Especialidades Oculares',
      categoryId: 'spec',
      description: 'Revisión de ardor, molestias o resequedad para proponerte una solución cómoda y efectiva.',
      icon: Droplets,
    },
    {
      title: 'Adaptación de lentes de contacto',
      category: 'Aros, Lentes y Contactología',
      categoryId: 'lens',
      description: 'Adaptación personalizada para opciones esféricas, astigmatismo y multifocal a tu medida.',
      icon: Contact,
    },
  ];
}

function getTestimonials(lang: Language) {
  if (lang === 'en') {
    return [
      {
        name: 'Maria G.',
        role: 'Patient',
        avatar: '/images/avatars/avatar-gafas-1.webp',
        content: 'Everything was explained with great clarity and I felt confident throughout the exam. The care was very professional and warm.',
      },
      {
        name: 'Carlos R.',
        role: 'Patient',
        avatar: '/images/avatars/avatar-gafas-2.webp',
        content: 'I had been experiencing eye fatigue for a while and left with clear guidance. The process was organized, fast, and very thorough.',
      },
      {
        name: 'Andrea M.',
        role: 'Patient',
        avatar: '/images/avatars/avatar-gafas-3.webp',
        content: 'Excellent treatment and high trust. They helped me understand the best solution for my vision and my glasses.',
      },
    ];
  }
  return [
    {
      name: 'María G.',
      role: 'Paciente',
      avatar: '/images/avatars/avatar-gafas-1.webp',
      content: 'Me explicaron todo con muchísima claridad y sentí una gran confianza en la consulta. La atención del doctor es impecable y súper humana.',
    },
    {
      name: 'Carlos R.',
      role: 'Paciente',
      avatar: '/images/avatars/avatar-gafas-2.webp',
      content: 'Tenía días de sentir fatiga en la vista por la compu y salí con una solución perfecta. El proceso fue rápido, ordenado y pura vida.',
    },
    {
      name: 'Andrea M.',
      role: 'Paciente',
      avatar: '/images/avatars/avatar-gafas-3.webp',
      content: 'Excelente trato y honestidad. Me ayudaron a elegir los aros y cristales ideales para mi trabajo sin venderme nada innecesario.',
    },
  ];
}

function getAgeGroups(lang: Language) {
  const e = TRANSLATIONS[lang].edades;
  return [
    {
      id: 'ninos',
      ageRange: e.ninosAge,
      title: e.ninosTitle,
      roleTag: e.ninosTag,
      icon: Baby,
      description: e.ninosDesc,
      highlights: [
        { title: e.ninosH1Title, desc: e.ninosH1Desc },
        { title: e.ninosH2Title, desc: e.ninosH2Desc },
        { title: e.ninosH3Title, desc: e.ninosH3Desc },
      ],
      waMessage: lang === 'es' ? '¡Hola Dr. Fabio! Deseo agendar una cita de salud visual para mi hijo(a).' : 'Hello Dr. Fabio, I would like to book a pediatric eye exam for my child.',
      buttonText: e.ninosBtn,
    },
    {
      id: 'adultos',
      ageRange: e.adultosAge,
      title: e.adultosTitle,
      roleTag: e.adultosTag,
      icon: Monitor,
      description: e.adultosDesc,
      highlights: [
        { title: e.adultosH1Title, desc: e.adultosH1Desc },
        { title: e.adultosH2Title, desc: e.adultosH2Desc },
        { title: e.adultosH3Title, desc: e.adultosH3Desc },
      ],
      waMessage: lang === 'es' ? '¡Hola Dr. Fabio! Paso muchas horas frente a pantallas/compu y deseo agendar mi examen de la vista.' : 'Hello Dr. Fabio, I spend long hours on screens and would like to schedule an eye exam.',
      buttonText: e.adultosBtn,
    },
    {
      id: 'mayores',
      ageRange: e.mayoresAge,
      title: e.mayoresTitle,
      roleTag: e.mayoresTag,
      icon: HeartHandshake,
      description: e.mayoresDesc,
      highlights: [
        { title: e.mayoresH1Title, desc: e.mayoresH1Desc },
        { title: e.mayoresH2Title, desc: e.mayoresH2Desc },
        { title: e.mayoresH3Title, desc: e.mayoresH3Desc },
      ],
      waMessage: lang === 'es' ? '¡Hola Dr. Fabio! Deseo agendar una consulta de salud visual para adulto mayor.' : 'Hello Dr. Fabio, I would like to book a comprehensive senior eye care consultation.',
      buttonText: e.mayoresBtn,
    },
  ];
}

export interface BrandItem {
  name: string;
  logo: string;
  category: string;
}

function getBrands(lang: Language): BrandItem[] {
  const isEn = lang === 'en';
  return [
    {
      name: 'Ray-Ban',
      logo: '/images/brands/ray-ban.svg',
      category: isEn ? 'Iconic Frames & Sunwear' : 'Aros & Sol Icónicos'
    },
    {
      name: 'Oakley',
      logo: '/images/brands/oakley.svg',
      category: isEn ? 'Sport & High Performance' : 'Deportivo & Alto Rendimiento'
    },
    {
      name: 'Persol',
      logo: '/images/brands/persol.svg',
      category: isEn ? 'Italian Luxury Eyewear' : 'Lujo & Artesanía Italiana'
    },
    {
      name: 'Transitions',
      logo: '/images/brands/transitions.svg',
      category: isEn ? 'Light-Intelligent Lenses' : 'Lentes Fotosensibles'
    },
    {
      name: 'Carl Zeiss',
      logo: '/images/brands/zeiss.svg',
      category: isEn ? 'German Optical Precision' : 'Precisión Óptica Alemana'
    },
    {
      name: 'Silhouette',
      logo: '/images/brands/silhouette.svg',
      category: isEn ? 'Titanium Rimless' : 'Aros al Aire de Titanio'
    },
    {
      name: 'Vogue Eyewear',
      logo: '/images/brands/vogue.svg',
      category: isEn ? 'Fashion & Trends' : 'Moda & Tendencias'
    },
    {
      name: 'Polaroid',
      logo: '/images/brands/polaroid.svg',
      category: isEn ? 'Polarized Sunwear' : 'Lentes Polarizados'
    },
    {
      name: 'Emporio Armani',
      logo: '/images/brands/armani.svg',
      category: isEn ? 'Exclusive Design' : 'Diseño Exclusivo'
    }
  ];
}

function VisualAccessibilityWidget({ lang }: { lang: Language }) {
  const [zoomLevel, setZoomLevel] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('opticas_popular_zoom');
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (parsed >= 90 && parsed <= 130) return parsed;
      }
    } catch (e) {}
    return 100;
  });

  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    try {
      if (zoomLevel === 100) {
        (document.body.style as any).zoom = '';
        document.documentElement.style.fontSize = '';
      } else {
        (document.body.style as any).zoom = `${zoomLevel}%`;
        document.documentElement.style.fontSize = `${(zoomLevel / 100) * 16}px`;
      }
      localStorage.setItem('opticas_popular_zoom', zoomLevel.toString());
    } catch (e) {}
  }, [zoomLevel]);

  const handleIncrease = () => {
    setZoomLevel((prev) => Math.min(prev + 10, 130));
  };

  const handleDecrease = () => {
    setZoomLevel((prev) => Math.max(prev - 10, 90));
  };

  const handleReset = () => {
    setZoomLevel(100);
  };

  return (
    <aside 
      className="fixed z-[9990] top-1/2 -translate-y-1/2 right-3.5 md:right-6 md:w-14 flex flex-col items-center select-none pointer-events-none"
      style={{
        position: 'fixed',
        top: '50%',
        transform: 'translateY(-50%)',
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      role="region"
      aria-label={lang === 'es' ? 'Control de tamaño visual' : 'Visual size controls'}
    >
      <div className="pointer-events-auto bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-1 flex flex-col items-center gap-1 transition-all duration-300 hover:shadow-2xl hover:border-[rgb(122,24,35)]/40">
        {/* Indicador de salud visual / reset */}
        <button 
          onClick={handleReset}
          aria-label={lang === 'es' ? 'Restablecer zoom al 100%' : 'Reset zoom to 100%'}
          title={lang === 'es' ? 'Salud visual: Click para restablecer al 100%' : 'Eye comfort: Click to reset to 100%'}
          className="w-8 h-6 flex items-center justify-center text-[rgb(122,24,35)]/70 hover:text-[rgb(122,24,35)] transition-colors cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
        </button>

        {/* Botón Aumentar (+) */}
        <button
          onClick={handleIncrease}
          disabled={zoomLevel >= 130}
          aria-label={lang === 'es' ? 'Aumentar tamaño de letra y pantalla' : 'Increase text and screen size'}
          title={lang === 'es' ? 'Aumentar tamaño (+) hasta 130%' : 'Zoom in (+) up to 130%'}
          className="w-8 h-8 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white !text-white flex items-center justify-center font-bold transition-all duration-200 active:scale-90 disabled:opacity-30 disabled:pointer-events-none cursor-pointer shadow-xs btn-shimmer"
        >
          <Plus className="w-4 h-4 text-white !text-white" />
        </button>

        {/* Indicador de porcentaje actual */}
        <button
          onClick={handleReset}
          aria-label={lang === 'es' ? `Tamaño actual ${zoomLevel}%. Click para restablecer.` : `Current size ${zoomLevel}%. Click to reset.`}
          title={lang === 'es' ? `Tamaño actual: ${zoomLevel}% (Click para restablecer 100%)` : `Current size: ${zoomLevel}% (Click to reset 100%)`}
          className="w-8 py-1 rounded-md text-[10px] font-extrabold text-gray-600 hover:text-[rgb(122,24,35)] hover:bg-gray-100 transition-colors flex items-center justify-center cursor-pointer"
        >
          {zoomLevel}%
        </button>

        {/* Botón Disminuir (-) */}
        <button
          onClick={handleDecrease}
          disabled={zoomLevel <= 90}
          aria-label={lang === 'es' ? 'Disminuir tamaño de letra y pantalla' : 'Decrease text and screen size'}
          title={lang === 'es' ? 'Disminuir tamaño (-) hasta 90%' : 'Zoom out (-) down to 90%'}
          className="w-8 h-8 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white !text-white flex items-center justify-center font-bold transition-all duration-200 active:scale-90 disabled:opacity-30 disabled:pointer-events-none cursor-pointer shadow-xs btn-shimmer"
        >
          <Minus className="w-4 h-4 text-white !text-white" />
        </button>
      </div>

      {/* Tooltip informativo flotante en desktop */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            className="hidden md:flex absolute right-16 top-1/2 -translate-y-1/2 bg-[#15171C]/95 text-white text-[11px] font-medium py-1.5 px-3 rounded-xl whitespace-nowrap shadow-xl pointer-events-none items-center gap-1.5 border border-white/10"
          >
            <Eye className="w-3.5 h-3.5 text-[rgb(180,40,55)]" />
            <span>{lang === 'es' ? 'Ajustar tamaño de lectura (+ / -)' : 'Adjust reading size (+ / -)'}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}

function LensTechnologyShowcase({ lang }: { lang: Language }) {
  const [activeTab, setActiveTab] = useState<'progresivas' | 'transitions' | 'luz-azul'>('progresivas');
  
  // Estados interactivos para cada demostrador visual
  const [progZone, setProgZone] = useState<'lejos' | 'intermedio' | 'cerca'>('intermedio');
  const [transMode, setTransMode] = useState<'interior' | 'exterior'>('interior');
  const [blueFilterOn, setBlueFilterOn] = useState<boolean>(true);

  const tabs = [
    {
      id: 'progresivas' as const,
      name: lang === 'es' ? 'Lentes Progresivas Digitales' : 'Digital Progressive Lenses',
      shortName: lang === 'es' ? 'Progresivas FreeForm' : 'Digital Progressives',
      tagline: lang === 'es' ? 'Presbicia y Enfoque Continuo' : 'Presbyopia & Continuous Focus',
      icon: Glasses,
      category: lang === 'es' ? 'Cerca · Intermedio · Lejos' : 'Near · Mid · Far',
    },
    {
      id: 'transitions' as const,
      name: lang === 'es' ? 'Lentes Fotosensibles Transitions®' : 'Transitions® Smart Lenses',
      shortName: lang === 'es' ? 'Transitions® Inteligentes' : 'Smart Transitions®',
      tagline: lang === 'es' ? 'Adaptación Solar Dinámica' : 'Dynamic Solar Adaptation',
      icon: Sun,
      category: lang === 'es' ? 'Fotocromático Inteligente' : 'Smart Photochromic',
    },
    {
      id: 'luz-azul' as const,
      name: lang === 'es' ? 'Protección de Luz Azul & Antirreflejo' : 'Blue Light & AR Shield',
      shortName: lang === 'es' ? 'Luz Azul & Antirreflejo' : 'Blue Light Filter',
      tagline: lang === 'es' ? 'Confort Digital y Descanso' : 'Digital Comfort & Night Rest',
      icon: Monitor,
      category: lang === 'es' ? 'Filtro Anti-Fatiga Digital' : 'Anti-Digital Fatigue',
    },
  ];

  return (
    <div className="w-full">
      {/* 1. Selector Superior Interactivo (Pestañas de Navegación Dinámica) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-8">
        {tabs.map((tab) => {
          const isSelected = activeTab === tab.id;
          const TabIcon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                isSelected
                  ? 'bg-white border-[rgb(122,24,35)] shadow-md ring-2 ring-[rgb(122,24,35)]/15 -translate-y-0.5'
                  : 'bg-white/70 hover:bg-white border-gray-200/90 hover:border-gray-300 shadow-2xs hover:shadow-xs'
              }`}
            >
              {/* Barra indicadora superior si está activo */}
              {isSelected && (
                <div className="absolute top-0 inset-x-0 h-1 bg-[rgb(122,24,35)]" />
              )}
              
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  isSelected 
                    ? 'bg-[rgb(122,24,35)] text-white shadow-xs' 
                    : 'bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] group-hover:scale-105'
                }`}>
                  <TabIcon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                  isSelected
                    ? 'bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)]'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {tab.category}
                </span>
              </div>

              <h3 className={`text-[15.5px] sm:text-[16.5px] font-bold tracking-tight transition-colors ${
                isSelected ? 'text-[rgb(122,24,35)]' : 'text-[#14161B] group-hover:text-[rgb(122,24,35)]'
              }`}>
                {tab.shortName}
              </h3>
              <p className="text-[12px] text-[#555963] mt-0.5">
                {tab.tagline}
              </p>
            </button>
          );
        })}
      </div>

      {/* 2. Gran Canvas Dinámico de Presentación (2 Columnas con Animación Fluida) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200/90 shadow-sm"
        >
          {/* CONTENIDO 1: PROGRESIVAS */}
          {activeTab === 'progresivas' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Columna Izquierda: Información Clínica y Beneficios */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 h-6 px-3 rounded-full bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] text-[11px] font-bold uppercase tracking-wider mb-3">
                    <Glasses className="w-3.5 h-3.5" />
                    <span>{lang === 'es' ? 'Tecnología FreeForm Digital' : 'FreeForm Digital Technology'}</span>
                  </div>

                  <h3 className="text-[24px] sm:text-[28px] font-bold text-[#14161B] leading-tight">
                    {lang === 'es' 
                      ? 'Lentes Progresivas Digitales Personalizadas' 
                      : 'Custom Digital Progressive Lenses'}
                  </h3>

                  <p className="mt-3 text-[14px] sm:text-[15px] text-[#555963] leading-relaxed">
                    {lang === 'es'
                      ? 'Diseñadas para personas con presbicia o vista cansada a partir de los 40 años. Reemplazan a los antiguos bifocales unificando todas las distancias en un solo cristal continuo, sin líneas divisorias visibles y sin saltos bruscos de imagen.'
                      : 'Designed for presbyopia. Replaces traditional bifocals by unifying all focal distances into a single seamless lens, free of visible lines and image jumps.'}
                  </p>

                  {/* Micro-tarjetas interactivas de zonas focales */}
                  <div className="mt-6 space-y-2.5">
                    <p className="text-[12px] font-bold uppercase tracking-wider text-[#7C808B]">
                      {lang === 'es' ? 'Explorá las 3 Zonas de Visión en el Lente:' : 'Explore the 3 Visual Zones on the Lens:'}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { 
                          id: 'lejos' as const, 
                          title: lang === 'es' ? '1. Visión Lejana' : '1. Distance Vision',
                          desc: lang === 'es' ? 'Conducción, cine, paisajes y paseos' : 'Driving, TV, and outdoor walks',
                        },
                        { 
                          id: 'intermedio' as const, 
                          title: lang === 'es' ? '2. Zona Intermedia' : '2. Intermediate Zone',
                          desc: lang === 'es' ? 'Computadora, cocina y tablero del auto' : 'Computer, cooking, and dashboard',
                        },
                        { 
                          id: 'cerca' as const, 
                          title: lang === 'es' ? '3. Visión Cercana' : '3. Near Reading',
                          desc: lang === 'es' ? 'Lectura en celular, libros y documentos' : 'Smartphone, books, and fine print',
                        },
                      ].map((zone) => {
                        const isSelected = progZone === zone.id;
                        return (
                          <button
                            key={zone.id}
                            onClick={() => setProgZone(zone.id)}
                            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[rgb(122,24,35)]/5 border-[rgb(122,24,35)] ring-1 ring-[rgb(122,24,35)]'
                                : 'bg-gray-50/70 border-gray-200/80 hover:bg-gray-50 hover:border-gray-300'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className={`text-[12.5px] font-bold ${isSelected ? 'text-[rgb(122,24,35)]' : 'text-[#14161B]'}`}>
                                {zone.title}
                              </span>
                              <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[rgb(122,24,35)]' : 'bg-gray-300'}`} />
                            </div>
                            <p className="text-[11px] text-[#555963] leading-snug">
                              {zone.desc}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Garantía Clínica de Adaptación */}
                  <div className="mt-6 p-3.5 rounded-2xl bg-[#F8F9FB] border border-gray-200/80 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[12.5px] font-bold text-[#14161B]">
                        {lang === 'es' ? 'Garantía de Adaptación de 30 Días' : '30-Day Adaptation Guarantee'}
                      </p>
                      <p className="text-[11.5px] text-[#555963]">
                        {lang === 'es' 
                          ? 'Calibradas con precisión milimétrica por el Dr. Fabio Mora para asegurar una adaptación natural y sin mareos.'
                          : 'Precision-measured by Dr. Fabio Mora ensuring natural visual adaptation without dizziness.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Botón CTA */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/50672760215?text=${encodeURIComponent(
                      lang === 'es'
                        ? '¡Hola Dr. Fabio Mora! Quisiera consultar por la cotización y prueba de lentes progresivas digitales.'
                        : 'Hello Dr. Fabio Mora, I would like advice and pricing for digital progressive lenses.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white text-[13px] sm:text-[14px] font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{lang === 'es' ? 'Consultar progresivos por WhatsApp' : 'Inquire progressives on WhatsApp'}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              {/* Columna Derecha: Simulador Visual Interactivo del Lente */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-gradient-to-b from-[#14161B] to-[#1E2229] p-6 text-white border border-gray-800 shadow-xl overflow-hidden">
                  {/* Etiqueta superior del simulador */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[rgb(180,40,55)]" />
                      {lang === 'es' ? 'Simulador de Corredor Óptico' : 'Optical Corridor Simulator'}
                    </span>
                    <span className="text-[10px] font-bold bg-white/10 px-2 py-0.5 rounded-full text-white/80">
                      FreeForm 3D
                    </span>
                  </div>

                  {/* Silueta interactiva del cristal con 3 zonas */}
                  <div className="relative w-full max-w-[260px] mx-auto aspect-[4/5] rounded-[38px] border-2 border-white/20 bg-white/5 backdrop-blur-xs flex flex-col overflow-hidden p-2 shadow-inner">
                    {/* Zona 1: Lejos */}
                    <button
                      onClick={() => setProgZone('lejos')}
                      className={`flex-1 rounded-2xl p-3 flex flex-col items-center justify-center transition-all cursor-pointer ${
                        progZone === 'lejos'
                          ? 'bg-[rgb(122,24,35)]/50 border border-[rgb(180,40,55)] shadow-md'
                          : 'hover:bg-white/5 opacity-60 hover:opacity-90'
                      }`}
                    >
                      <span className="text-[11px] font-bold tracking-wide uppercase">
                        {lang === 'es' ? 'Zona de Lejos' : 'Distance Field'}
                      </span>
                      <span className="text-[9.5px] text-white/70">
                        {lang === 'es' ? 'Manejo / Panorámica' : 'Driving / Distance'}
                      </span>
                    </button>

                    {/* Zona 2: Intermedio */}
                    <button
                      onClick={() => setProgZone('intermedio')}
                      className={`h-24 my-1.5 rounded-2xl p-2 flex flex-col items-center justify-center transition-all cursor-pointer ${
                        progZone === 'intermedio'
                          ? 'bg-[rgb(122,24,35)]/60 border border-[rgb(180,40,55)] shadow-md'
                          : 'hover:bg-white/5 opacity-60 hover:opacity-90'
                      }`}
                    >
                      <span className="text-[11px] font-bold tracking-wide uppercase">
                        {lang === 'es' ? 'Corredor Intermedio' : 'Intermediate Corridor'}
                      </span>
                      <span className="text-[9.5px] text-white/70">
                        {lang === 'es' ? 'Computadora / Pantallas' : 'Computer / Desk'}
                      </span>
                    </button>

                    {/* Zona 3: Cerca */}
                    <button
                      onClick={() => setProgZone('cerca')}
                      className={`flex-1 rounded-2xl p-3 flex flex-col items-center justify-center transition-all cursor-pointer ${
                        progZone === 'cerca'
                          ? 'bg-[rgb(122,24,35)]/50 border border-[rgb(180,40,55)] shadow-md'
                          : 'hover:bg-white/5 opacity-60 hover:opacity-90'
                      }`}
                    >
                      <span className="text-[11px] font-bold tracking-wide uppercase">
                        {lang === 'es' ? 'Zona de Lectura' : 'Reading Field'}
                      </span>
                      <span className="text-[9.5px] text-white/70">
                        {lang === 'es' ? 'Celular / Letra pequeña' : 'Smartphone / Books'}
                      </span>
                    </button>
                  </div>

                  {/* Detalle activo de la zona seleccionada */}
                  <div className="mt-5 p-3 rounded-xl bg-white/10 border border-white/10 text-center">
                    <p className="text-[12px] font-bold text-white">
                      {progZone === 'lejos' && (lang === 'es' ? 'Enfoque nítido al infinito sin mover la cabeza' : 'Crisp infinity focus without head strain')}
                      {progZone === 'intermedio' && (lang === 'es' ? 'Transición suave y descanso ergonómico en la oficina' : 'Smooth transition with ergonomic office posture')}
                      {progZone === 'cerca' && (lang === 'es' ? 'Amplitud de campo para leer con total naturalidad' : 'Wide visual field for natural reading comfort')}
                    </p>
                    <p className="text-[10px] text-gray-300 mt-1">
                      {lang === 'es' ? 'Tallado computarizado punto a punto que elimina distorsiones laterales' : 'Point-by-point digital surfacing removes swim distortion'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CONTENIDO 2: TRANSITIONS */}
          {activeTab === 'transitions' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Columna Izquierda */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 h-6 px-3 rounded-full bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] text-[11px] font-bold uppercase tracking-wider mb-3">
                    <Sun className="w-3.5 h-3.5" />
                    <span>{lang === 'es' ? 'Protección Fotocromática Inteligente' : 'Smart Photochromic Defense'}</span>
                  </div>

                  <h3 className="text-[24px] sm:text-[28px] font-bold text-[#14161B] leading-tight">
                    {lang === 'es' ? 'Lentes Fotosensibles Transitions®' : 'Transitions® Smart Light Lenses'}
                  </h3>

                  <p className="mt-3 text-[14px] sm:text-[15px] text-[#555963] leading-relaxed">
                    {lang === 'es'
                      ? 'La solución definitiva para quienes no quieren cambiar constantemente entre anteojos de sol y lentes graduados. En interiores se mantienen perfectamente transparentes y, al salir al sol, se oscurecen dinámicamente en segundos para protegerte del resplandor y la radiación UV.'
                      : 'The all-in-one answer to switching between prescription glasses and sunglasses. Crystal-clear indoors, dynamically darkening outdoors in seconds for complete UV and glare protection.'}
                  </p>

                  {/* Beneficios clave estructurados */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80">
                      <div className="flex items-center gap-2 text-[rgb(122,24,35)] mb-1">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-[12.5px] font-bold text-[#14161B]">100% Filtro UVA / UVB</span>
                      </div>
                      <p className="text-[11.5px] text-[#555963]">
                        {lang === 'es' ? 'Bloqueo total contra radiación solar dañina para la retina.' : 'Full protection against harmful solar radiation.'}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80">
                      <div className="flex items-center gap-2 text-[rgb(122,24,35)] mb-1">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-[12.5px] font-bold text-[#14161B]">Aclarado Rápido</span>
                      </div>
                      <p className="text-[11.5px] text-[#555963]">
                        {lang === 'es' ? 'Vuelven a su estado claro casi al instante al entrar bajo techo.' : 'Returns to crystal clear swiftly upon stepping indoors.'}
                      </p>
                    </div>
                  </div>

                  {/* Selector interactivo de ambiente */}
                  <div className="mt-6 p-4 rounded-2xl bg-[#F8F9FB] border border-gray-200/80">
                    <p className="text-[12px] font-bold uppercase tracking-wider text-[#7C808B] mb-2.5">
                      {lang === 'es' ? 'Probá el comportamiento de luz en el simulador:' : 'Test light behavior in the simulator:'}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setTransMode('interior')}
                        className={`flex-1 py-2.5 px-3 rounded-xl text-[12.5px] font-bold transition-all cursor-pointer ${
                          transMode === 'interior'
                            ? 'bg-[rgb(122,24,35)] text-white shadow-xs'
                            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {lang === 'es' ? 'En Interiores (100% Claro)' : 'Indoors (100% Clear)'}
                      </button>
                      <button
                        onClick={() => setTransMode('exterior')}
                        className={`flex-1 py-2.5 px-3 rounded-xl text-[12.5px] font-bold transition-all cursor-pointer ${
                          transMode === 'exterior'
                            ? 'bg-[rgb(122,24,35)] text-white shadow-xs'
                            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {lang === 'es' ? 'Bajo el Sol (Oscurecido)' : 'Outdoors (Darkened)'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Botón CTA */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/50672760215?text=${encodeURIComponent(
                      lang === 'es'
                        ? '¡Hola Dr. Fabio Mora! Quisiera consultar por cristales Transitions fotosensibles en Ópticas Popular.'
                        : 'Hello Dr. Fabio Mora, I would like details about Transitions lenses.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white text-[13px] sm:text-[14px] font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{lang === 'es' ? 'Consultar Transitions por WhatsApp' : 'Inquire Transitions on WhatsApp'}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              {/* Columna Derecha: Simulador Visual Interactivo Transitions */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-gradient-to-b from-[#14161B] to-[#1E2229] p-6 text-white border border-gray-800 shadow-xl overflow-hidden text-center">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5 text-[rgb(180,40,55)]" />
                      {lang === 'es' ? 'Simulador de Adaptación Solar' : 'Solar Adaptation Simulator'}
                    </span>
                    <span className="text-[10px] font-bold bg-white/10 px-2 py-0.5 rounded-full text-white/80">
                      {transMode === 'interior' ? 'Filtro UV 0% (Claro)' : 'Filtro UV 100% (Activo)'}
                    </span>
                  </div>

                  {/* Silueta del cristal con transición animada */}
                  <div className="relative w-full max-w-[240px] mx-auto aspect-square rounded-full border-4 border-white/20 p-2 flex items-center justify-center overflow-hidden my-4 shadow-2xl">
                    <motion.div
                      animate={{
                        backgroundColor: transMode === 'interior' ? 'rgba(255, 255, 255, 0.94)' : 'rgba(30, 30, 32, 0.92)',
                        boxShadow: transMode === 'exterior' ? 'inset 0 0 40px rgba(0,0,0,0.85)' : 'inset 0 0 15px rgba(255,255,255,0.4)',
                      }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full rounded-full flex flex-col items-center justify-center p-4 border border-white/30"
                    >
                      <motion.div
                        animate={{ scale: transMode === 'exterior' ? 1.1 : 1 }}
                        transition={{ duration: 0.4 }}
                        className="mb-1"
                      >
                        <Sun className={`w-10 h-10 transition-colors ${transMode === 'exterior' ? 'text-[rgb(210,60,75)]' : 'text-gray-400'}`} />
                      </motion.div>
                      <span className={`text-[13px] font-bold transition-colors ${transMode === 'exterior' ? 'text-white' : 'text-gray-800'}`}>
                        {transMode === 'interior' ? (lang === 'es' ? 'Cristal 100% Claro' : '100% Clear Lens') : (lang === 'es' ? 'Tinte Grafito Protector' : 'Graphite Dark Tint')}
                      </span>
                      <span className={`text-[10px] mt-0.5 transition-colors ${transMode === 'exterior' ? 'text-gray-300' : 'text-gray-500'}`}>
                        {transMode === 'interior' ? (lang === 'es' ? 'Interior / Noche' : 'Indoor / Night') : (lang === 'es' ? 'Exterior bajo luz solar' : 'Outdoor under direct sun')}
                      </span>
                    </motion.div>
                  </div>

                  <p className="text-[12px] font-semibold text-gray-200 mt-2">
                    {transMode === 'interior' 
                      ? (lang === 'es' ? 'Visión nítida y cristalina en oficinas, hogar y conducción de noche.' : 'Clear vision in offices, home, and night driving.')
                      : (lang === 'es' ? 'Máximo confort visual que elimina el encandilamiento en la calle.' : 'Zero glare with maximum eye relaxation outdoors.')}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* CONTENIDO 3: LUZ AZUL */}
          {activeTab === 'luz-azul' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Columna Izquierda */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 h-6 px-3 rounded-full bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] text-[11px] font-bold uppercase tracking-wider mb-3">
                    <Monitor className="w-3.5 h-3.5" />
                    <span>{lang === 'es' ? 'Salud Visual en la Era Digital' : 'Digital Eye Health'}</span>
                  </div>

                  <h3 className="text-[24px] sm:text-[28px] font-bold text-[#14161B] leading-tight">
                    {lang === 'es' ? 'Filtro de Luz Azul & Antirreflejo Multicapa' : 'Blue Light Filter & AR Shield'}
                  </h3>

                  <p className="mt-3 text-[14px] sm:text-[15px] text-[#555963] leading-relaxed">
                    {lang === 'es'
                      ? 'Monitores, tabletas y celulares emiten luz azul de alta energía que penetra hasta la retina, produciendo ojo seco, visión borrosa al final del día y alteraciones en el sueño. Nuestro tratamiento selectivo BlueBlock filtra esta longitud de onda sin distorsionar los colores.'
                      : 'Screens emit high-energy blue-violet light causing digital eye strain, dryness, and insomnia. Our selective BlueBlock treatment filters harmful rays while keeping true color balance.'}
                  </p>

                  {/* Beneficios clave estructurados */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80">
                      <div className="flex items-center gap-2 text-[rgb(122,24,35)] mb-1">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-[12.5px] font-bold text-[#14161B]">Descanso Ocular Inmediato</span>
                      </div>
                      <p className="text-[11.5px] text-[#555963]">
                        {lang === 'es' ? 'Menor pesadez, lagrimeo y fatiga muscular tras horas de trabajo.' : 'Less dryness, redness, and end-of-day muscle tension.'}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80">
                      <div className="flex items-center gap-2 text-[rgb(122,24,35)] mb-1">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-[12.5px] font-bold text-[#14161B]">Antirreflejo Hidrófobo</span>
                      </div>
                      <p className="text-[11.5px] text-[#555963]">
                        {lang === 'es' ? 'Elimina destellos de luces artificiales y es fácil de limpiar.' : 'Eliminates glare from artificial lighting, easy to clean.'}
                      </p>
                    </div>
                  </div>

                  {/* Switch interactivo de prueba */}
                  <div className="mt-6 p-4 rounded-2xl bg-[#F8F9FB] border border-gray-200/80">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[12.5px] font-bold text-[#14161B]">
                          {lang === 'es' ? 'Simular filtro en pantalla:' : 'Simulate screen filter:'}
                        </p>
                        <p className="text-[11.5px] text-[#555963]">
                          {blueFilterOn ? (lang === 'es' ? 'Filtro protector activado (Descanso)' : 'Protective filter active (Comfort)') : (lang === 'es' ? 'Sin filtro (Resplandor directo)' : 'No filter (Harsh screen glare)')}
                        </p>
                      </div>
                      <button
                        onClick={() => setBlueFilterOn(!blueFilterOn)}
                        className={`h-9 px-4 rounded-xl text-[12px] font-bold transition-all cursor-pointer flex items-center gap-2 ${
                          blueFilterOn
                            ? 'bg-[rgb(122,24,35)] text-white shadow-xs'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{blueFilterOn ? (lang === 'es' ? 'Filtro ON' : 'Filter ON') : (lang === 'es' ? 'Filtro OFF' : 'Filter OFF')}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Botón CTA */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/50672760215?text=${encodeURIComponent(
                      lang === 'es'
                        ? '¡Hola Dr. Fabio Mora! Quisiera consultar por cristales con filtro de luz azul y antirreflejo.'
                        : 'Hello Dr. Fabio Mora, I would like advice on blue light and anti-reflective lenses.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white text-[13px] sm:text-[14px] font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{lang === 'es' ? 'Consultar filtro azul por WhatsApp' : 'Inquire blue filter on WhatsApp'}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              {/* Columna Derecha: Simulador Visual Interactivo Luz Azul */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-gradient-to-b from-[#14161B] to-[#1E2229] p-6 text-white border border-gray-800 shadow-xl overflow-hidden text-center">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                      <Monitor className="w-3.5 h-3.5 text-[rgb(180,40,55)]" />
                      {lang === 'es' ? 'Simulador de Confort de Pantalla' : 'Screen Comfort Simulator'}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${blueFilterOn ? 'bg-white/20 text-white' : 'bg-red-500/20 text-red-200'}`}>
                      {blueFilterOn ? (lang === 'es' ? 'Protegido' : 'Protected') : (lang === 'es' ? 'Fatiga Digital' : 'Eye Strain')}
                    </span>
                  </div>

                  {/* Pantalla simulada */}
                  <div className={`relative rounded-xl p-5 border transition-all duration-500 ${
                    blueFilterOn 
                      ? 'bg-white/10 border-white/20 shadow-lg' 
                      : 'bg-white/5 border-gray-600 shadow-inner'
                  }`}>
                    <div className="w-full h-28 rounded-lg bg-[#0F1115] p-3 flex flex-col justify-between text-left border border-white/10">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-gray-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-gray-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-gray-500" />
                        </div>
                        <span className="text-[10px] text-gray-400">workspace.doc</span>
                      </div>
                      <div>
                        <div className={`h-2 rounded w-3/4 mb-1.5 transition-colors ${blueFilterOn ? 'bg-gray-300' : 'bg-gray-500'}`} />
                        <div className={`h-2 rounded w-1/2 transition-colors ${blueFilterOn ? 'bg-gray-400' : 'bg-gray-600'}`} />
                      </div>
                    </div>

                    <p className={`text-[12px] font-bold mt-4 transition-colors ${blueFilterOn ? 'text-white' : 'text-gray-400'}`}>
                      {blueFilterOn 
                        ? (lang === 'es' ? 'Contraste cálido y relajado: 0 ardor ocular' : 'Warm, relaxed contrast: 0 eye burning')
                        : (lang === 'es' ? 'Resplandor frío y agresivo que causa fatiga' : 'Harsh cold glare causing eye fatigue')}
                    </p>
                  </div>

                  <p className="text-[11px] text-gray-400 mt-3">
                    {lang === 'es' ? 'Recomendado para teletrabajo, estudio y uso de celular por más de 3 horas al día.' : 'Recommended for remote work, studying, and screen usage > 3 hrs/day.'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ContactLensCarouselBanner({ lang }: { lang: Language }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      badge: lang === 'es' ? 'Libertad Visual & Confort 24h' : 'Visual Freedom & 24h Comfort',
      title: lang === 'es' 
        ? <>Descubrí los lentes de contacto perfectos para vos</>
        : <>Discover the contact lenses made for your lifestyle</>,
      description: lang === 'es'
        ? 'Fabricados en hidrogel de silicona de última generación con ultra oxigenación corneal. Disfrutá de una visión cristalina, ojos frescos y confort total desde la mañana hasta la noche.'
        : 'Engineered with premium breathable silicone hydrogel. Enjoy razor-sharp clarity, moisturized eyes, and all-day comfort without bulky eyeglass frames.',
      image: '/images/optica-lentes-contacto-1.jpg',
      imageAlt: lang === 'es' ? 'Dr. Fabio Mora Medina guiando a paciente en prueba de lentes de contacto' : 'Dr. Fabio Mora Medina guiding patient with contact lens trial in optical clinic',
      pills: lang === 'es' 
        ? ['100% Respirables', 'Desechables o Mensuales', 'Sensación Ojo Desnudo']
        : ['100% Breathable', 'Daily or Monthly', 'Natural Bare-Eye Feel'],
      ctaText: lang === 'es' ? '¡Programá tu prueba hoy!' : 'Schedule your trial today!',
      whatsappMsg: lang === 'es'
        ? '¡Hola Dr. Fabio Mora! Quisiera consultar por la prueba y adaptación de lentes de contacto en Ópticas Popular.'
        : 'Hello Dr. Fabio Mora, I would like to schedule a contact lens fitting trial.',
    },
    {
      id: 2,
      badge: lang === 'es' ? 'Astigmatismo & Presbicia' : 'Astigmatism & Presbyopia',
      title: lang === 'es'
        ? <>Lentes Tóricos y Multifocales de Alta Estabilidad</>
        : <>High-Precision Toric & Multifocal Lenses</>,
      description: lang === 'es'
        ? '¿Pensabas que con astigmatismo o vista cansada no podías usar lentes de contacto? Los nuevos diseños se estabilizan con cada parpadeo para darte enfoque perfecto de lejos, intermedio y cerca.'
        : 'Thought astigmatism or reading blur prevented you from wearing contacts? Modern stabilization technology locks focus sharp at all distances with zero rotational drift.',
      image: '/images/optica-lentes-contacto-2.jpg',
      imageAlt: lang === 'es' ? 'Dr. Fabio Mora Medina realizando examen visual con lámpara de hendidura' : 'Dr. Fabio Mora Medina performing slit lamp eye examination in clinic',
      pills: lang === 'es'
        ? ['Estabilidad al Parpadear', 'Enfoque Multifocal Continuo', 'Calibración Digital']
        : ['Blink-Stabilized', 'Seamless Multifocal', 'Digital Precision'],
      ctaText: lang === 'es' ? 'Consultar lentes especializados' : 'Inquire specialized lenses',
      whatsappMsg: lang === 'es'
        ? '¡Hola Dr. Fabio Mora! Tengo astigmatismo / presbicia y deseo consultar por lentes de contacto especializados.'
        : 'Hello Dr. Fabio Mora, I have astigmatism/presbyopia and would like toric contact lens advice.',
    },
    {
      id: 3,
      badge: lang === 'es' ? 'Atención Clínica Personalizada' : 'Guided Clinical Fitting',
      title: lang === 'es'
        ? <>Prueba y Adaptación Guiada en Consultorio</>
        : <>In-Clinic Trial & Guided Fitting</>,
      description: lang === 'es'
        ? 'El Dr. Fabio Mora evalúa la curvatura corneal y calidad lagrimal de tus ojos. Te acompañamos paso a paso para que aprendas a colocarlos y retirarlos con total seguridad y sin temor.'
        : 'Dr. Fabio Mora evaluates your corneal topography and tear film health, patiently guiding you through hygienic insertion and removal for zero-stress wear.',
      image: '/images/optica-lentes-contacto-3.jpg',
      imageAlt: lang === 'es' ? 'Dr. Fabio Mora Medina brindando asesoría personalizada de contactología' : 'Dr. Fabio Mora Medina providing personalized contact lens consultation',
      pills: lang === 'es'
        ? ['Topografía Corneal', 'Acompañamiento Paciente', 'Garantía de Adaptación']
        : ['Corneal Mapping', 'Gentle Step-by-Step Trial', 'Adaptation Guarantee'],
      ctaText: lang === 'es' ? 'Agendar valoración con el Dr. Fabio Mora' : 'Book contactology consultation',
      whatsappMsg: lang === 'es'
        ? '¡Hola Dr. Fabio Mora! Me gustaría agendar una cita de adaptación y prueba guiada de lentes de contacto en Plaza Higuerones.'
        : 'Hello Dr. Fabio Mora, I would like to book an in-person contact lens trial and consultation.',
    },
  ];

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const current = slides[currentSlide];

  return (
    <div 
      className="relative rounded-3xl bg-gradient-to-br from-[rgb(122,24,35)] via-[rgb(105,18,28)] to-[rgb(75,12,20)] text-white overflow-hidden shadow-2xl border border-white/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Elementos decorativos sutiles de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      {/* Contenido en Carousel con AnimatePresence */}
      <div className="relative z-10 p-5 sm:p-7 md:p-8 lg:p-9">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
          >
            {/* Lado Izquierdo: Textos, Acciones y Controles Integrados */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Barra Superior con Badge, Contador y Flechas de Navegación */}
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-[11px] sm:text-[11.5px] uppercase tracking-wider font-extrabold border border-white/20">
                    <Contact className="w-3.5 h-3.5 text-white" />
                    <span>{current.badge}</span>
                  </span>
                  <span className="text-[11px] font-bold text-white/70">
                    0{currentSlide + 1} / 0{slides.length}
                  </span>
                </div>

                {/* Flechas compactas integradas en el encabezado */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevSlide}
                    aria-label={lang === 'es' ? 'Diapositiva anterior' : 'Previous slide'}
                    className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all active:scale-90 border border-white/20 cursor-pointer shadow-xs"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label={lang === 'es' ? 'Siguiente diapositiva' : 'Next slide'}
                    className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all active:scale-90 border border-white/20 cursor-pointer shadow-xs"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold leading-[1.2] tracking-tight text-white mb-2">
                {current.title}
              </h2>

              <p className="text-[13px] sm:text-[14px] text-white/90 leading-relaxed max-w-xl mb-3.5 font-normal">
                {current.description}
              </p>

              {/* Píldoras de beneficios clave */}
              <div className="flex flex-wrap gap-2 mb-3.5">
                {current.pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-black/25 backdrop-blur-xs border border-white/15 text-white/95 text-[11.5px] font-semibold"
                  >
                    <CheckCircle2 className="w-3 h-3 text-white/90" />
                    <span>{pill}</span>
                  </span>
                ))}
              </div>

              {/* Paginador de barras sutil */}
              <div className="flex items-center gap-1.5 pt-1">
                {slides.map((slide, idx) => {
                  const isActive = currentSlide === idx;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Ver diapositiva ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? 'w-7 bg-white shadow-xs' 
                          : 'w-2 bg-white/35 hover:bg-white/60'
                      }`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Lado Derecho: Imagen Panorámica con Marco Moderno */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black/20 aspect-[16/10] max-h-[250px] sm:max-h-[270px] md:max-h-[290px] w-full">
                <img
                  src={current.image}
                  alt={current.imageAlt}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-2.5 left-2.5 bg-black/65 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20 text-[10px] font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-white" />
                  <span>Ópticas Popular · Dr. Fabio Mora</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('optica_lang') as Language;
      if (saved === 'en' || saved === 'es') return saved;
      if (typeof navigator !== 'undefined' && navigator.language && navigator.language.startsWith('en')) {
        return 'en';
      }
      return 'es';
    } catch (e) {
      return 'es';
    }
  });

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('optica_lang', newLang);
    } catch (e) {}
  };

  const t = TRANSLATIONS[lang];
  const navigationMenu = getNavigationMenu(lang);
  const whyChooseUs = getWhyChooseUs(lang);
  const faqs = getFaqs(lang);
  const services = getServices(lang);
  const testimonials = getTestimonials(lang);
  const ageGroups = getAgeGroups(lang);
  const brands = getBrands(lang);

  const serviceCategories = lang === 'es' ? [
    { id: 'all', label: 'Todos los servicios' },
    { id: 'diag', label: 'Diagnóstico y Exámenes' },
    { id: 'spec', label: 'Especialidades Oculares' },
    { id: 'lens', label: 'Lentes y Contactología' },
  ] : [
    { id: 'all', label: 'All Services' },
    { id: 'diag', label: 'Diagnostics & Exams' },
    { id: 'spec', label: 'Eye Specialties' },
    { id: 'lens', label: 'Eyeglasses & Contacts' },
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>('servicios');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<'all' | 'ninos' | 'adultos' | 'mayores'>('all');
  const [showDiagnosticModal, setShowDiagnosticModal] = useState(false);
  const [diagnosticStep, setDiagnosticStep] = useState<'question' | 'scanning' | 'result'>('question');
  const [selectedSymptom, setSelectedSymptom] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiagnosticModal(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseDiagnostic = () => {
    setShowDiagnosticModal(false);
  };

  const handleSelectSymptom = (symptomId: string) => {
    setSelectedSymptom(symptomId);
    setDiagnosticStep('scanning');
    setTimeout(() => {
      setDiagnosticStep('result');
    }, 1300);
  };

  const handleResetDiagnostic = () => {
    setDiagnosticStep('question');
    setSelectedSymptom(null);
  };

  const [currentView, setCurrentView] = useState<'home' | 'calificar' | 'consulta' | 'test-visual' | 'contacto' | 'tecnologia-cristales' | 'testimonios-page'>('home');

  const handleNavigate = (href?: string) => {
    if (!href) return;
    setIsMenuOpen(false);
    setDesktopDropdown(null);
    try {
      document.body.style.overflow = '';
    } catch (e) {}

    if (href === '#testimonios-google' || href === '#resenas-google' || href === '#opiniones') {
      setCurrentView('testimonios-page');
      window.location.hash = '#testimonios-google';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (href === '#contacto') {
      setCurrentView('contacto');
      window.location.hash = '#contacto';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (href === '#tecnologia-cristales' || href === '#cristales') {
      setCurrentView('tecnologia-cristales');
      window.location.hash = '#tecnologia-cristales';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (href === '#consulta' || href === '#formulario-whatsapp') {
      setCurrentView('consulta');
      window.location.hash = '#consulta';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (href === '#test-visual') {
      setCurrentView('test-visual');
      window.location.hash = '#test-visual';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (href === '#calificar') {
      setCurrentView('calificar');
      window.location.hash = '#calificar';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentView !== 'home') {
      setCurrentView('home');
    }

    if (href === '#inicio' || href === '#' || href === '') {
      window.location.hash = '#inicio';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace(/^#/, '');
    window.location.hash = href;

    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        const headerOffset = 85;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 120);
  };

  // Carrusel dinámico del Hero con imágenes clínicas (adultos, niños y adultos mayores)
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);

  const heroSlides = [
    {
      id: 0,
      src: '/images/hero-examen-mujer-mayor.jpg',
      alt: lang === 'es' ? 'Examen visual integral en adultos mayores con tecnología óptica' : 'Comprehensive eye exam in seniors with modern optometry equipment',
      label: lang === 'es' ? 'Adultos mayores · Cuidado preventivo' : 'Seniors · Preventive health'
    },
    {
      id: 1,
      src: '/images/hero-examen-nino.jpg',
      alt: lang === 'es' ? 'Salud visual y examen pediátrico infantil de confianza' : 'Pediatric eye exam and vision health',
      label: lang === 'es' ? 'Niños · Salud visual infantil' : 'Children · Pediatric care'
    },
    {
      id: 2,
      src: '/images/hero-examen-hombre-adulto.jpg',
      alt: lang === 'es' ? 'Examen visual profesional en adultos para confort y graduación' : 'Adult comprehensive eye examination',
      label: lang === 'es' ? 'Adultos · Evaluación y confort' : 'Adults · Visual comfort'
    }
  ];

  useEffect(() => {
    if (isHeroPaused) return;
    const interval = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % 3);
    }, 6500);
    return () => clearInterval(interval);
  }, [isHeroPaused]);

  useEffect(() => {
    const handleHash = () => {
      const h = window.location.hash;
      if (h === '#calificar') {
        setCurrentView('calificar');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (h === '#consulta' || h === '#formulario-whatsapp') {
        setCurrentView('consulta');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (h === '#test-visual' || h === '#test-vision' || h === '#revisar-vision') {
        setCurrentView('test-visual');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (h === '#contacto' || h === '#ubicacion' || h === '#horarios') {
        setCurrentView('contacto');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (h === '#tecnologia-cristales' || h === '#cristales' || h === '#tecnologia-visual') {
        setCurrentView('tecnologia-cristales');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (h === '#testimonios-google' || h === '#resenas-google' || h === '#opiniones') {
        setCurrentView('testimonios-page');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear el scroll de fondo cuando el menú móvil hamburguesa esté abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  if (currentView === 'calificar') {
    return (
      <>
        <CalificarPage 
          onBack={() => {
            window.location.hash = '';
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
          lang={lang}
          onNavigate={(view, hash) => {
            if (view === 'landing' || view === 'home') {
              setCurrentView('home');
              window.location.hash = hash || '';
              if (hash && hash !== '#inicio') {
                setTimeout(() => {
                  const el = document.querySelector(hash);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            } else if (view === 'consulta') {
              setCurrentView('consulta');
              window.location.hash = '#consulta';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'calificar') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'test-visual') {
              setCurrentView('test-visual');
              window.location.hash = '#test-visual';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'contacto') {
              setCurrentView('contacto');
              window.location.hash = '#contacto';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'testimonios-page') {
              setCurrentView('testimonios-page');
              window.location.hash = '#testimonios-google';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        />
        <VisualAccessibilityWidget lang={lang} />
      </>
    );
  }

  if (currentView === 'consulta') {
    return (
      <>
        <ConsultaPage 
          onBack={() => {
            window.location.hash = '';
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
          lang={lang}
          onNavigate={(view, hash) => {
            if (view === 'landing' || view === 'home') {
              setCurrentView('home');
              window.location.hash = hash || '';
              if (hash && hash !== '#inicio') {
                setTimeout(() => {
                  const el = document.querySelector(hash);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            } else if (view === 'consulta') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'calificar') {
              setCurrentView('calificar');
              window.location.hash = '#calificar';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'test-visual') {
              setCurrentView('test-visual');
              window.location.hash = '#test-visual';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'contacto') {
              setCurrentView('contacto');
              window.location.hash = '#contacto';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'testimonios-page') {
              setCurrentView('testimonios-page');
              window.location.hash = '#testimonios-google';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        />
        <VisualAccessibilityWidget lang={lang} />
      </>
    );
  }

  if (currentView === 'test-visual') {
    return (
      <>
        <TestVisualPage 
          onBack={() => {
            window.location.hash = '';
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
          lang={lang}
          onNavigate={(view, hash) => {
            if (view === 'landing' || view === 'home') {
              setCurrentView('home');
              window.location.hash = hash || '';
              if (hash && hash !== '#inicio') {
                setTimeout(() => {
                  const el = document.querySelector(hash);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            } else if (view === 'consulta') {
              setCurrentView('consulta');
              window.location.hash = '#consulta';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'calificar') {
              setCurrentView('calificar');
              window.location.hash = '#calificar';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'test-visual') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'contacto') {
              setCurrentView('contacto');
              window.location.hash = '#contacto';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'testimonios-page') {
              setCurrentView('testimonios-page');
              window.location.hash = '#testimonios-google';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        />
        <VisualAccessibilityWidget lang={lang} />
      </>
    );
  }

  if (currentView === 'contacto') {
    return (
      <>
        <ContactoPage 
          onBack={() => {
            window.location.hash = '';
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
          lang={lang}
          onNavigate={(view, hash) => {
            if (view === 'landing' || view === 'home') {
              setCurrentView('home');
              window.location.hash = hash || '';
              if (hash && hash !== '#inicio') {
                setTimeout(() => {
                  const el = document.querySelector(hash);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            } else if (view === 'consulta') {
              setCurrentView('consulta');
              window.location.hash = '#consulta';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'calificar') {
              setCurrentView('calificar');
              window.location.hash = '#calificar';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'test-visual') {
              setCurrentView('test-visual');
              window.location.hash = '#test-visual';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'contacto') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if ((view as string) === 'tecnologia-cristales') {
              setCurrentView('tecnologia-cristales');
              window.location.hash = '#tecnologia-cristales';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'testimonios-page') {
              setCurrentView('testimonios-page');
              window.location.hash = '#testimonios-google';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        />
        <VisualAccessibilityWidget lang={lang} />
      </>
    );
  }

  if (currentView === 'tecnologia-cristales') {
    return (
      <>
        <TecnologiaCristalesPage 
          onBack={() => {
            window.location.hash = '';
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
          lang={lang}
          onNavigate={(view, hash) => {
            if (view === 'landing' || view === 'home') {
              setCurrentView('home');
              window.location.hash = hash || '';
              if (hash && hash !== '#inicio') {
                setTimeout(() => {
                  const el = document.querySelector(hash);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            } else if (view === 'consulta') {
              setCurrentView('consulta');
              window.location.hash = '#consulta';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'calificar') {
              setCurrentView('calificar');
              window.location.hash = '#calificar';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'test-visual') {
              setCurrentView('test-visual');
              window.location.hash = '#test-visual';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'contacto') {
              setCurrentView('contacto');
              window.location.hash = '#contacto';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'tecnologia-cristales') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'testimonios-page') {
              setCurrentView('testimonios-page');
              window.location.hash = '#testimonios-google';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        />
        <VisualAccessibilityWidget lang={lang} />
      </>
    );
  }

  if (currentView === 'testimonios-page') {
    return (
      <>
        <TestimoniosPage 
          onBack={() => {
            window.location.hash = '';
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
          lang={lang}
          onNavigate={(view, hash) => {
            if (view === 'landing' || view === 'home') {
              setCurrentView('home');
              window.location.hash = hash || '';
              if (hash && hash !== '#inicio') {
                setTimeout(() => {
                  const el = document.querySelector(hash);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            } else if (view === 'consulta') {
              setCurrentView('consulta');
              window.location.hash = '#consulta';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'calificar') {
              setCurrentView('calificar');
              window.location.hash = '#calificar';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'test-visual') {
              setCurrentView('test-visual');
              window.location.hash = '#test-visual';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'contacto') {
              setCurrentView('contacto');
              window.location.hash = '#contacto';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'tecnologia-cristales') {
              setCurrentView('tecnologia-cristales');
              window.location.hash = '#tecnologia-cristales';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (view === 'testimonios-page') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        />
        <VisualAccessibilityWidget lang={lang} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#15171C] font-sans selection:bg-[rgb(122,24,35)] selection:text-white overflow-x-hidden">
      {/* Barra sutil de progreso de lectura superior */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[rgb(122,24,35)] via-[rgb(180,40,55)] to-[rgb(122,24,35)] origin-left z-[9999] pointer-events-none"
      />
          
          {/* Navigation */}
          <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100' : 'bg-white/80 backdrop-blur-sm border-b border-gray-100/60'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
              <a href="#inicio" className="flex items-center shrink-0 group py-0.5" aria-label="Ópticas Popular - Inicio">
                <img 
                  src="/images/logo-opticas-popular.png" 
                  alt="Logo Oficial Ópticas Popular" 
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                />
              </a>

              {/* Desktop Nav categorizado */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                {navigationMenu.map((cat) => {
                  const hasSub = Boolean(cat.groups && cat.groups.length > 0);
                  const isOpen = desktopDropdown === cat.id;

                  if (!hasSub) {
                    return (
                      <a
                        key={cat.id}
                        href={cat.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigate(cat.href);
                        }}
                        className="px-3.5 py-2 rounded-xl text-[13px] md:text-[14px] font-semibold text-[#1C1D21] hover:text-[rgb(122,24,35)] hover:bg-black/5 transition-all"
                      >
                        {cat.name}
                      </a>
                    );
                  }

                  return (
                    <div
                      key={cat.id}
                      className="relative group"
                      onMouseEnter={() => setDesktopDropdown(cat.id)}
                      onMouseLeave={() => setDesktopDropdown(null)}
                    >
                      <button
                        onClick={() => setDesktopDropdown(isOpen ? null : cat.id)}
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[13px] md:text-[14px] font-semibold transition-all ${
                          isOpen 
                            ? 'text-[rgb(122,24,35)] bg-[rgb(122,24,35)]/10' 
                            : 'text-[#1C1D21] hover:text-[rgb(122,24,35)] hover:bg-black/5'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[rgb(122,24,35)]' : 'text-gray-400'}`} />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.18 }}
                            className={`absolute top-full mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 p-5 z-50 ${
                              cat.id === 'servicios' ? 'w-[640px] -left-28' : cat.id === 'faq' ? 'w-[360px] -left-20' : 'w-[480px] -left-16'
                            }`}
                          >
                            <div className={`grid gap-6 ${cat.groups!.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                              {cat.groups!.map((group, gIdx) => (
                                <div key={gIdx} className="space-y-2">
                                  <div className="pb-1.5 border-b border-gray-100">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-[rgb(122,24,35)]">
                                      {group.title}
                                    </span>
                                  </div>
                                  <div className="space-y-1">
                                    {group.items.map((item, iIdx) => {
                                      const ItemIcon = item.icon;
                                      return (
                                        <a
                                          key={iIdx}
                                          href={item.href}
                                            onClick={(e) => {
                                              e.preventDefault();
                                              handleNavigate(item.href);
                                            }}
                                          className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F3F4F7] transition-all cursor-pointer"
                                        >
                                          {ItemIcon ? (
                                            <div className="w-8 h-8 rounded-lg bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[rgb(122,24,35)] group-hover/item:text-white transition-colors">
                                              <ItemIcon className="w-4 h-4" />
                                            </div>
                                          ) : null}
                                          <div className="flex-1 min-w-0">
                                            <p className="text-[12px] font-semibold text-[#15171C] group-hover/item:text-[rgb(122,24,35)] transition-colors">
                                              {item.name}
                                            </p>
                                            <p className="text-[11px] text-gray-500 line-clamp-1">
                                              {item.desc}
                                            </p>
                                          </div>
                                        </a>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>

              <div className="flex items-center gap-2 sm:gap-2.5">
                {/* Switch Bilingüe Tipo Píldora (Estilo Minimalista en Colores Corporativos) */}
                <div 
                  className="relative inline-flex items-center h-7.5 w-[76px] p-0.5 rounded-full bg-[#F4F4F6] border border-gray-200/90 shadow-2xs select-none"
                  role="group" 
                  aria-label="Selector de idioma"
                >
                  {/* Deslizador animado con color corporativo */}
                  <motion.div
                    className="absolute top-0.5 bottom-0.5 w-[35px] rounded-full bg-[rgb(122,24,35)] shadow-xs pointer-events-none"
                    animate={{
                      left: lang === 'es' ? '2px' : '37px'
                    }}
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />

                  <button
                    type="button"
                    onClick={() => changeLanguage('es')}
                    style={{ color: lang === 'es' ? '#ffffff' : '#4b5563' }}
                    className={`relative z-10 flex-1 h-full text-[11px] font-bold rounded-full transition-colors flex items-center justify-center cursor-pointer ${
                      lang === 'es' ? '!text-white text-white' : 'text-gray-600 hover:text-black'
                    }`}
                    title="Español"
                  >
                    ES
                  </button>
                  <button
                    type="button"
                    onClick={() => changeLanguage('en')}
                    style={{ color: lang === 'en' ? '#ffffff' : '#4b5563' }}
                    className={`relative z-10 flex-1 h-full text-[11px] font-bold rounded-full transition-colors flex items-center justify-center cursor-pointer ${
                      lang === 'en' ? '!text-white text-white' : 'text-gray-600 hover:text-black'
                    }`}
                    title="English"
                  >
                    EN
                  </button>
                </div>



                {/* Botón de Llamar visible en móvil y mucho más grande y destacado en escritorio */}
                <a
                  href="tel:+50672760215"
                  className="inline-flex items-center justify-center h-10 sm:h-11 px-3.5 sm:px-5 rounded-xl bg-white border-2 border-[rgb(122,24,35)] hover:bg-[rgb(122,24,35)] text-[rgb(122,24,35)] hover:text-white text-[13px] sm:text-[14px] font-black shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer group shrink-0"
                  title={lang === 'es' ? 'Llamar a la Óptica: 2515-0002 / 7276-0215' : 'Call our clinic: 2515-0002 / 7276-0215'}
                >
                  <Phone className="w-4 h-4 mr-1.5 sm:mr-2 text-[rgb(122,24,35)] group-hover:text-white transition-colors" />
                  <span className="tracking-wide">{lang === 'es' ? 'Llamar' : 'Call'}</span>
                </a>

                {/* Botón Menú Hamburguesa para Móviles - Destacado y Visual */}
                <button
                  onClick={() => setIsMenuOpen(true)}
                  aria-label={lang === 'es' ? 'Abrir menú de navegación' : 'Open navigation menu'}
                  className="lg:hidden inline-flex items-center gap-2 h-10 px-3 rounded-xl bg-white border-2 border-[rgb(122,24,35)]/20 text-[#15171C] font-bold text-[12px] shadow-2xs hover:border-[rgb(122,24,35)] hover:bg-[#FDF6F7] active:scale-95 transition-all cursor-pointer shrink-0"
                >
                  <div className="w-6 h-6 rounded-lg bg-[rgb(122,24,35)] text-white flex items-center justify-center shadow-xs">
                    <Menu className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11.5px] font-bold tracking-wider uppercase text-[rgb(122,24,35)]">{lang === 'es' ? 'Menú' : 'Menu'}</span>
                </button>
              </div>
            </div>
          </header>

          {/* Menú Lateral Deslizante tipo Hamburguesa (Mobile Drawer) */}
          <AnimatePresence>
            {isMenuOpen && (
              <div className="fixed inset-0 z-[99999] flex justify-end">
                {/* Fondo oscuro translúcido con cierre al tocar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="fixed inset-0 bg-black/60 backdrop-blur-xs"
                  aria-hidden="true"
                />

                {/* Panel Drawer lateral deslizable */}
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                  className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] h-[100dvh] max-h-[100dvh] bg-white shadow-2xl flex flex-col justify-between overflow-hidden"
                >
                    {/* Encabezado del Menú Hamburguesa */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-[#F8F9FB]">
                      <div className="flex items-center gap-3">
                        <img 
                          src="/images/logo-opticas-popular.png" 
                          alt="Logo Oficial Ópticas Popular" 
                          className="h-10 w-auto object-contain" 
                        />
                      </div>
                      <button
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Cerrar menú"
                        className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-50 transition-colors shadow-xs active:scale-95"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    {/* Subtítulo Clínico y Ubicación de Alta Confianza */}
                    <div className="px-5 py-2.5 bg-gradient-to-r from-[rgb(122,24,35)]/10 via-[rgb(122,24,35)]/5 to-transparent border-b border-gray-100 flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-[12px] font-bold text-[rgb(122,24,35)] leading-tight">
                          Dr. Fabio Mora Medina
                        </p>
                        <p className="text-[10px] text-gray-500">
                          {lang === 'es' ? 'Plaza Higuerones · 18 años de trayectoria' : 'Plaza Higuerones · 18 years of trust'}
                        </p>
                      </div>
                      <span className="text-[9.5px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[rgb(122,24,35)] text-white shadow-2xs">
                        {lang === 'es' ? 'Local 23' : 'Suite 23'}
                      </span>
                    </div>

                    {/* Contenido con Scroll de Categorías y Subcategorías */}
                    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                      {/* Controles Compactos de Idioma y Lupa en Drawer */}
                      <div className="p-3 bg-gray-50/90 rounded-xl border border-gray-100 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-[11.5px] font-bold text-gray-700">{lang === 'es' ? 'Idioma' : 'Language'}:</span>
                          {/* Switch Píldora Mobile */}
                          <div 
                            className="relative inline-flex items-center h-7 w-[72px] p-0.5 rounded-full bg-[#EAEBEF] border border-gray-200/80 shadow-2xs select-none"
                            role="group" 
                            aria-label="Selector de idioma"
                          >
                            <motion.div
                              className="absolute top-0.5 bottom-0.5 w-[34px] rounded-full bg-[rgb(122,24,35)] shadow-xs pointer-events-none"
                              animate={{
                                left: lang === 'es' ? '2px' : '34px'
                              }}
                              transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                            />
                            <button
                              type="button"
                              onClick={() => changeLanguage('es')}
                              style={{ color: lang === 'es' ? '#ffffff' : '#4b5563' }}
                              className={`relative z-10 flex-1 h-full text-[10.5px] font-bold rounded-full transition-colors flex items-center justify-center cursor-pointer ${
                                lang === 'es' ? '!text-white text-white' : 'text-gray-600'
                              }`}
                            >
                              ES
                            </button>
                            <button
                              type="button"
                              onClick={() => changeLanguage('en')}
                              style={{ color: lang === 'en' ? '#ffffff' : '#4b5563' }}
                              className={`relative z-10 flex-1 h-full text-[10.5px] font-bold rounded-full transition-colors flex items-center justify-center cursor-pointer ${
                                lang === 'en' ? '!text-white text-white' : 'text-gray-600'
                              }`}
                            >
                              EN
                            </button>
                          </div>
                        </div>
                      </div>

                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#767A84] px-1">
                        {lang === 'es' ? 'Navegación por categorías' : 'Browse by Category'}ón por categorías
                      </p>

                      <div className="space-y-2">
                        {navigationMenu.map((cat) => {
                          const hasSub = Boolean(cat.groups && cat.groups.length > 0);
                          const isExpanded = mobileExpandedCat === cat.id;

                          if (!hasSub) {
                            return (
                              <a
                                key={cat.id}
                                href={cat.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleNavigate(cat.href);
                                }}
                                className="flex items-center justify-between h-12 px-4 rounded-xl bg-[#F8F9FB] hover:bg-[rgb(122,24,35)] hover:text-white text-[#15171C] text-[13px] font-semibold active:scale-[0.99] transition-all"
                              >
                                <span>{cat.name}</span>
                                <ChevronRight className="w-4 h-4 opacity-40" />
                              </a>
                            );
                          }

                          const totalItems = cat.groups?.reduce((acc, g) => acc + g.items.length, 0) || 0;

                          return (
                            <div key={cat.id} className="rounded-xl bg-[#F8F9FB] border border-gray-100 overflow-hidden">
                              <button
                                onClick={() => setMobileExpandedCat(isExpanded ? null : cat.id)}
                                style={{
                                  color: isExpanded ? '#ffffff' : '#15171C',
                                  backgroundColor: isExpanded ? 'rgb(122, 24, 35)' : undefined,
                                }}
                                className={`w-full flex items-center justify-between h-12 px-4 text-[13px] font-semibold transition-colors ${
                                  isExpanded ? '!text-white text-white bg-[rgb(122,24,35)] hover:!text-white' : 'text-[#15171C] hover:bg-gray-100'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <span style={{ color: isExpanded ? '#ffffff' : 'inherit' }} className={isExpanded ? '!text-white text-white font-bold' : ''}>
                                    {cat.name}
                                  </span>
                                  <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                                    isExpanded ? 'bg-white/20 text-white !text-white' : 'bg-gray-200 text-gray-700'
                                  }`}>
                                    {totalItems} {lang === 'es' ? 'opciones' : 'options'}
                                  </span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-white !text-white' : 'text-gray-400'}`} />
                              </button>

                              {isExpanded && (
                                <div className="p-3 space-y-3 bg-white divide-y divide-gray-100">
                                  {cat.groups!.map((group, gIdx) => (
                                    <div key={gIdx} className={gIdx > 0 ? 'pt-3' : ''}>
                                      <p className="text-[11px] font-bold uppercase tracking-wider text-[rgb(122,24,35)] mb-2 px-1">
                                        {group.title}
                                      </p>
                                      <div className="space-y-1">
                                        {group.items.map((item, iIdx) => {
                                          const ItemIcon = item.icon;
                                          return (
                                            <a
                                              key={iIdx}
                                              href={item.href}
                                              onClick={(e) => {
                                                e.preventDefault();
                                                handleNavigate(item.href);
                                              }}
                                              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F3F4F7] active:bg-gray-200 transition-all cursor-pointer"
                                            >
                                              {ItemIcon ? (
                                                <div className="w-8 h-8 rounded-lg bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] flex items-center justify-center shrink-0">
                                                  <ItemIcon className="w-4 h-4" />
                                                </div>
                                              ) : null}
                                              <div className="flex-1 min-w-0">
                                                <p className="text-[12px] font-semibold text-[#15171C] leading-snug">{item.name}</p>
                                                <p className="text-[10px] text-gray-500 truncate">{item.desc}</p>
                                              </div>
                                            </a>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Información de Ubicación y Horarios dentro del Menú */}
                      <div className="mt-4 p-3.5 rounded-xl bg-gray-50 border border-gray-100 text-left space-y-1.5">
                        <div className="flex items-center gap-2 text-[11px] font-bold text-[#15171C]">
                          <MapPin className="w-3.5 h-3.5 text-[rgb(122,24,35)] shrink-0" />
                          <span>{lang === 'es' ? 'Plaza Higuerones, Local 23' : 'Plaza Higuerones, Suite 23'}</span>
                        </div>
                        <p className="text-[10px] text-gray-500 pl-5.5">{lang === 'es' ? 'San Rafael Abajo de Desamparados' : 'San Rafael Abajo, Desamparados'}</p>
                        <div className="flex items-center gap-2 text-[10px] text-gray-600 pl-5.5 pt-1">
                          <Clock className="w-3 h-3 text-[rgb(122,24,35)]" />
                          <span>Lun a Sáb: 9:00 AM - 6:00 PM</span>
                        </div>
                      </div>
                    </div>

                    {/* Pie del Menú con Accesos Rápidos */}
                    <div className="p-4 border-t border-gray-100 bg-[#F8F9FB] space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href="tel:+50672760215"
                          className="inline-flex items-center justify-center gap-2 h-14 rounded-xl bg-white hover:bg-gray-50 border-2 border-[rgb(122,24,35)] text-[rgb(122,24,35)] text-[14px] font-black shadow-xs active:scale-95 transition-all duration-200 cursor-pointer"
                          title="2515-0002 / 7276-0215"
                        >
                          <Phone className="w-4.5 h-4.5 text-[rgb(122,24,35)]" />
                          <span>{lang === 'es' ? 'Llamar al 2515-0002' : 'Call 2515-0002'}</span>
                        </a>
                        <a
                          href={`https://wa.me/50672760215?text=${encodeURIComponent(
                            lang === 'es' 
                              ? '¡Hola Dr. Fabio Mora! Quisiera agendar una cita de valoración visual en Ópticas Popular.' 
                              : 'Hello Dr. Fabio Mora, I would like to schedule an eye examination at Opticas Popular.'
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 h-12 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white text-[12px] font-bold shadow-md active:scale-95 transition-all duration-200 cursor-pointer btn-shimmer"
                        >
                          <MessageCircle className="w-4 h-4 text-white !text-white" />
                          <span className="text-white !text-white">WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

          <main id="main-content" role="main">
          {/* Hero Section */}
          <section id="inicio" className="w-full bg-gradient-to-b from-slate-50/80 via-white to-white py-6 md:py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setIsHeroPaused(true)}
              onMouseLeave={() => setIsHeroPaused(false)}
              className="relative overflow-hidden rounded-[14px] min-h-[500px] md:min-h-[600px] bg-slate-100 group"
            >
              {/* Carrusel de Imágenes de Exámenes Clínicos con Entrada Lenta y Difuminado */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                {heroSlides.map((slide, idx) => {
                  const isActive = activeHeroSlide === idx;
                  return (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-[2200ms] ease-in-out ${
                        isActive ? 'opacity-100 z-1' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <img 
                        src={slide.src} 
                        alt={slide.alt}
                        className={`w-full h-full object-cover object-right transition-transform duration-[8000ms] ease-out ${
                          isActive ? 'scale-103' : 'scale-100'
                        }`}
                        loading={idx === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                  );
                })}

                {/* Difuminado y gradiente de protección para máxima legibilidad idéntico al original */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/90 to-transparent md:bg-gradient-to-r md:from-white/95 md:via-white/75 md:to-transparent z-2 pointer-events-none" />

                {/* Micro indicador flotante de diapositiva en esquina inferior derecha */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2 bg-black/45 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                  <span className="text-[11px] font-semibold text-white/90 hidden sm:inline">
                    {heroSlides[activeHeroSlide].label}
                  </span>
                  <span className="text-[11px] font-bold text-white/40 hidden sm:inline">·</span>
                  <div className="flex items-center gap-1.5">
                    {heroSlides.map((slide, idx) => {
                      const isActive = activeHeroSlide === idx;
                      return (
                        <button
                          key={slide.id}
                          onClick={() => setActiveHeroSlide(idx)}
                          aria-label={`Ver foto de ${slide.label}`}
                          className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                            isActive ? 'w-6 bg-white shadow-xs' : 'w-2 bg-white/40 hover:bg-white/70'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

                <div className="grid md:grid-cols-[1.1fr_0.9fr] h-full relative z-10">
                  <div className="px-5 sm:px-8 md:px-10 py-8 md:py-10 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="inline-flex items-center h-7 px-3.5 rounded-full bg-white text-[11px] sm:text-[12px] uppercase tracking-wider font-bold text-[#6A6E79] w-fit shadow-xs border border-gray-100"
                    >
                      {lang === 'es' ? 'Exámenes visuales integrales' : 'Comprehensive Visual Care'}
                    </motion.div>

                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="mt-4 md:mt-5 max-w-xl lg:max-w-2xl text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] leading-[1.14] tracking-tight font-bold text-[#13151A]"
                    >
                      {lang === 'es' ? <>Ópticas Popular: Agendá tu <span className="text-[rgb(122,24,35)]">examen visual</span> con el Dr. Fabio Mora</> : <>Opticas Popular: Book your <span className="text-[rgb(122,24,35)]">eye exam</span> with Dr. Fabio Mora</>}
                    </motion.h1>

                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="mt-3.5 md:mt-4 max-w-xl text-[15px] sm:text-[16px] md:text-[16.5px] leading-relaxed text-[#555963]"
                    >
                      {lang === 'es' ? 'Si notás visión borrosa, molestias, cansancio ocular o tus lentes ya no responden como antes, este es el momento de revisarte con atención profesional y resultados claros.' : 'If you experience blurry vision, eye fatigue, headaches, or your lenses are outdated, now is the ideal time for a thorough exam with clear guidance.'}
                    </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3 w-full sm:w-auto max-w-[440px] justify-center md:justify-start"
                  >
                    <a
                      href={`https://wa.me/50672760215?text=${encodeURIComponent(
                        lang === 'es'
                          ? '¡Hola Dr. Fabio Mora! Deseo agendar mi examen visual en Plaza Higuerones.'
                          : 'Hello Dr. Fabio Mora, I would like to book my eye exam at Plaza Higuerones.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white !text-white text-[14px] font-bold cta-primary btn-shimmer w-full sm:w-auto"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{lang === 'es' ? 'Agendar por WhatsApp' : 'Book via WhatsApp'}</span>
                    </a>
                  </motion.div>

                  {/* Widget de Testimonios y Avatares con Gafas en el Hero */}
                  <motion.a
                    href="https://share.google/BUvr9vBhe3MZzBL6Y"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="mt-4 flex items-center gap-3 bg-white/95 hover:bg-gray-50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gray-200/80 hover:border-[rgb(122,24,35)]/40 shadow-xs hover:shadow-md transition-all duration-300 w-fit cursor-pointer group"
                    title={lang === 'es' ? 'Ver ficha oficial y opiniones en Google' : 'View official Google profile and reviews'}
                  >
                    <div className="flex items-center -space-x-2 overflow-hidden py-0.5">
                      {[
                        { src: '/images/avatars/avatar-gafas-1.webp', alt: 'Paciente mujer con aros Ópticas Popular' },
                        { src: '/images/avatars/avatar-gafas-2.webp', alt: 'Paciente hombre con anteojos modernos' },
                        { src: '/images/avatars/avatar-gafas-3.webp', alt: 'Paciente mujer con gafas de marco transparente' },
                        { src: '/images/avatars/avatar-gafas-4.webp', alt: 'Paciente joven con gafas metálicas' },
                        { src: '/images/avatars/avatar-gafas-5.webp', alt: 'Paciente con cristales progresivos' },
                      ].map((av, aIdx) => (
                        <img
                          key={aIdx}
                          src={av.src}
                          alt={av.alt}
                          width={32}
                          height={32}
                          loading="eager"
                          className="inline-block w-7 h-7 sm:w-8 sm:h-8 rounded-full ring-2 ring-white object-cover shadow-2xs shrink-0"
                        />
                      ))}
                    </div>

                    <div className="flex flex-col justify-center text-left">
                      <div className="flex items-center gap-1 leading-none">
                        <div className="flex items-center gap-0.5 text-amber-500">
                          {[...Array(5)].map((_, sIdx) => (
                            <Star key={sIdx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-[12px] font-black text-[#15171C] ml-1">5.0 / 5.0</span>
                      </div>
                      <span className="text-[10.5px] sm:text-[11px] text-gray-600 group-hover:text-[rgb(122,24,35)] font-semibold tracking-tight mt-0.5 leading-none transition-colors">
                        {lang === 'es' ? '9 reseñas reales en Google Maps' : '9 verified reviews on Google Maps'}
                      </span>
                    </div>
                  </motion.a>

                  {/* Micro-insignias de tranquilidad junto a los botones */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-5 pt-3.5 border-t border-gray-200/70 flex flex-wrap items-center justify-center md:justify-start gap-x-3.5 gap-y-2 text-[11.5px] sm:text-[12px] font-semibold text-gray-600"
                  >
                    <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-gray-100 shadow-2xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{lang === 'es' ? 'Garantía 30 días de adaptación' : '30-Day Adaptation Guarantee'}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-gray-100 shadow-2xs">
                      <CreditCard className="w-3.5 h-3.5 text-[rgb(122,24,35)] shrink-0" />
                      <span>{lang === 'es' ? 'SINPE Móvil y Tasa Cero' : 'SINPE Movil & Zero-Interest'}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-gray-100 shadow-2xs">
                      <MapPin className="w-3.5 h-3.5 text-[rgb(122,24,35)] shrink-0" />
                      <span>{lang === 'es' ? 'Parqueo disponible' : 'Free Parking Available'}</span>
                    </span>
                  </motion.div>

                </div>

                <div className="relative min-h-[150px] md:min-h-full hidden md:block" />
              </div>
            </motion.div>
            </div>
          </section>

          {/* Social Proof */}
          <section className="w-full py-8 md:py-12 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { 
                  title: <><span className="text-[rgb(122,24,35)]">+</span><AnimatedNumber value={18} /></>, 
                  desc: lang === 'es' ? 'años de trayectoria' : 'years of clinical experience' 
                },
                { 
                  title: lang === 'es' ? 'Integral' : 'Thorough', 
                  desc: lang === 'es' ? 'evaluación completa y clara' : 'clear and complete evaluation' 
                },
                { 
                  title: lang === 'es' ? 'Familia' : 'Family', 
                  desc: lang === 'es' ? 'atención para todas las edades' : 'dedicated care for all ages' 
                },
                { 
                  title: lang === 'es' ? 'Directo' : 'Direct', 
                  desc: lang === 'es' ? 'contacto por llamada o WhatsApp' : 'reach us via phone or WhatsApp' 
                },
              ].map((item, i) => (
                <motion.article 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50/60 hover:bg-white rounded-2xl p-5 md:p-6 text-center pro-card shadow-xs border border-gray-100/80 transition-all hover:shadow-md"
                >
                  <div className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] leading-none tracking-tight font-bold text-[#14161B]">{item.title}</div>
                  <p className="mt-2 text-[13px] sm:text-[14px] leading-[1.5] text-[#555963] font-medium">{item.desc}</p>
                </motion.article>
              ))}
            </div>
            </div>
          </section>

          {/* Urgency Section */}
          <section className="w-full py-12 md:py-16 bg-slate-50/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                <div className="p-5 md:p-6 border-b lg:border-b-0 lg:border-r border-[#E7EAF1]">
                  <span className="inline-flex items-center h-7 px-3.5 rounded-full bg-[#F2F3F7] text-[11px] sm:text-[12px] uppercase tracking-wider font-bold text-[#7C808B]">
                    {lang === 'es' ? 'Urgencia' : 'Timely Care'}
                  </span>
                  <h2 className="mt-4 max-w-xl text-[28px] sm:text-[32px] md:text-[36px] leading-tight tracking-tight font-bold text-[#15171C]">
                    {lang === 'es' ? <>Esperar demasiado puede hacer que el problema afecte más <span className="text-[rgb(122,24,35)]">tu rutina</span></> : <>Waiting too long can allow vision issues to disrupt <span className="text-[rgb(122,24,35)]">your daily routine</span></>}
                  </h2>
                  <p className="mt-3 max-w-xl text-[15px] sm:text-[16px] leading-relaxed text-[#555963]">
                    {lang === 'es' ? 'Cuando la visión cambia, aparecen molestias al leer, manejar, usar pantallas o trabajar. Revisarte a tiempo ayuda a detectar qué está pasando y decidir la mejor solución.' : 'When your vision changes, reading, driving, and computer work become challenging. Timely evaluations identify the root cause and provide clear solutions.'}
                  </p>
                </div>

                <div className="p-5 md:p-6 grid sm:grid-cols-3 gap-3">
                  {[
                    { 
                      title: lang === 'es' ? 'Visión borrosa' : 'Blurred Vision', 
                      desc: lang === 'es' ? 'Si forzás la vista para enfocar, es buen momento para revisar.' : 'Straining your eyes to focus is a sign it is time for a check-up.', 
                      icon: Eye 
                    },
                    { 
                      title: lang === 'es' ? 'Cansancio ocular' : 'Eye Strain', 
                      desc: lang === 'es' ? 'Molestias con pantallas o lectura prolongada no deberían normalizarse.' : 'Discomfort from screens or extended reading should not be normalized.', 
                      icon: Clock 
                    },
                    { 
                      title: lang === 'es' ? 'Actuá hoy' : 'Act Today', 
                      desc: lang === 'es' ? 'Agendá tu examen y resolvé tus dudas con atención profesional.' : 'Schedule your examination and resolve concerns with professional clinical care.', 
                      icon: CheckCircle2, 
                      dark: true 
                    },
                  ].map((item, i) => (
                    <article 
                      key={i} 
                      className={`rounded-[12px] p-4 pro-card shadow-sm ${item.dark ? 'bg-[rgb(122,24,35)] text-white' : 'bg-[#F3F4F7] text-[#15171C]'}`}
                    >
                      <item.icon className={`w-5 h-5 mb-3 ${item.dark ? 'text-white' : 'text-[rgb(122,24,35)]'}`} />
                      <h3 className="text-[15px] sm:text-[16px] font-bold">{item.title}</h3>
                      <p className={`mt-2 text-[13px] sm:text-[14px] leading-[1.65] ${item.dark ? 'text-white/85' : 'text-[#6D727D]'}`}>
                        {item.desc}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </motion.div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section id="beneficios" className="w-full py-14 md:py-20 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <span className="inline-flex items-center justify-center h-7 px-3.5 rounded-full bg-white text-[11px] sm:text-[12px] uppercase tracking-wider font-bold text-[#767A84] shadow-sm">
                Nuestros diferenciales
              </span>
            </div>

            <h2 className="mt-5 max-w-2xl mx-auto text-center text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] leading-tight tracking-tight font-bold text-[#14161B]">
              {lang === 'es' ? <>¿Por qué confiar en <span className="text-[rgb(122,24,35)]">nuestra atención</span> visual?</> : <>Why families trust <span className="text-[rgb(122,24,35)]">our clinical care</span></>}
            </h2>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {whyChooseUs.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 pro-card-interactive shadow-xs border border-gray-100 flex flex-col items-center text-center group cursor-default"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#F6F7FA] text-[rgb(122,24,35)] flex items-center justify-center mb-4 shadow-2xs group-hover:scale-110 group-hover:bg-[rgb(122,24,35)] group-hover:text-white transition-all duration-300">
                    <item.icon className="w-7 h-7 transition-transform duration-300" />
                  </div>
                  <h3 className="text-[18px] sm:text-[19px] font-bold text-[#15171C] mb-2 group-hover:text-[rgb(122,24,35)] transition-colors">{item.title}</h3>
                  <p className="text-[14px] sm:text-[15px] leading-[1.65] text-[#555963]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
            </div>
          </section>

          {/* Process & Brands */}
          <section className="w-full py-14 md:py-20 bg-slate-50/70 border-y border-gray-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-5 items-stretch">
                {/* Columna Proceso Simple */}
                <motion.div 
                  id="proceso" 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center justify-center h-7 px-3.5 rounded-full bg-[#F2F3F7] text-[11px] sm:text-[12px] uppercase tracking-wider font-bold text-[#7C808B]">
                      {lang === 'es' ? 'Proceso simple' : 'Simple Process'}
                    </span>

                    <h2 className="mt-4 max-w-xl text-[26px] sm:text-[30px] md:text-[34px] leading-tight tracking-tight font-bold text-[#15171C]">
                      {lang === 'es' ? 'Una estructura pensada para tu comodidad' : 'A clinical flow designed for your comfort'}
                    </h2>

                    <div className="mt-5 grid gap-3">
                      {[
                        { 
                          step: lang === 'es' ? 'Paso 1' : 'Step 1', 
                          title: lang === 'es' ? 'Contactás por WhatsApp o llamada' : 'Reach out via WhatsApp or phone', 
                          desc: lang === 'es' ? 'Elegís el momento que mejor te quede y coordinamos tu cita facilito y sin carreras.' : 'Choose the fastest way to arrange your consultation at your convenience.' 
                        },
                        { 
                          step: lang === 'es' ? 'Paso 2' : 'Step 2', 
                          title: lang === 'es' ? 'Recibís tu valoración completa' : 'Receive comprehensive visual evaluation', 
                          desc: lang === 'es' ? 'Evaluamos tu graduación, fondo de ojo y presión ocular, explicándote todo clarito y con calma.' : 'Your vision, retina, and eye pressure are evaluated, explaining all findings clearly.' 
                        },
                        { 
                          step: lang === 'es' ? 'Paso 3' : 'Step 3', 
                          title: lang === 'es' ? 'Salís con todo claro y resuelto' : 'Leave with transparent clinical recommendations', 
                          desc: lang === 'es' ? 'Entendés con exactitud cómo están tus ojos y cuál es la mejor opción en aros o lentes para vos.' : 'Understand precisely what you need with honest advice and visual solutions.', 
                          dark: true 
                        },
                      ].map((item, i) => (
                        <motion.article 
                          key={i} 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.15 + 0.3 }}
                          viewport={{ once: true }}
                          className={`rounded-xl p-4 pro-card shadow-xs transition-all hover:shadow-md hover:-translate-y-0.5 ${item.dark ? 'bg-[rgb(122,24,35)] text-white' : 'bg-[#F3F4F7] text-[#15171C]'}`}
                        >
                          <p className={`text-[11px] sm:text-[12px] uppercase tracking-wider font-bold ${item.dark ? 'text-white/80' : 'text-[#7A7F8A]'}`}>{item.step}</p>
                          <h3 className="mt-1.5 text-[16px] sm:text-[17px] leading-[1.25] font-bold">{item.title}</h3>
                          <p className={`mt-1.5 text-[13px] sm:text-[13.5px] leading-[1.6] ${item.dark ? 'text-white/85' : 'text-[#6D727D]'}`}>{item.desc}</p>
                        </motion.article>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Columna Marcas Reconocidas con Logos Reales */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center justify-center h-7 px-3.5 rounded-full bg-[#F2F3F7] text-[11px] sm:text-[12px] uppercase tracking-wider font-bold text-[#7C808B]">
                      {lang === 'es' ? 'Marcas reconocidas' : 'Recognized Brands'}
                    </span>
                    <h2 className="mt-3 text-[26px] sm:text-[30px] md:text-[34px] leading-[1.2] tracking-tight font-bold text-[#15171C]">
                      {lang === 'es' ? (
                        <>Opciones líderes en <span className="text-[rgb(122,24,35)]">aros y soluciones visuales</span></>
                      ) : (
                        <>Leading options in <span className="text-[rgb(122,24,35)]">frames & visual solutions</span></>
                      )}
                    </h2>

                    {/* Grid de Marcas con Logos Vectoriales Reales */}
                    <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {brands.map((brand, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, scale: 0.92 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 + 0.2 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -3, transition: { duration: 0.2 } }}
                          className="bg-[#FAFAFC] hover:bg-white rounded-xl p-3 sm:p-3.5 flex flex-col items-center justify-between text-center pro-card shadow-2xs border border-gray-200/70 hover:border-[rgb(122,24,35)]/30 hover:shadow-md transition-all group min-h-[98px]"
                        >
                          <div className="h-10 w-full flex items-center justify-center px-1">
                            <img 
                              src={brand.logo} 
                              alt={`Logo oficial de ${brand.name}`} 
                              className="max-h-8 max-w-[110px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                          <div className="w-full pt-1.5 border-t border-gray-200/60 mt-1">
                            <span className="text-[12px] font-bold text-[#15171C] group-hover:text-[rgb(122,24,35)] transition-colors block leading-tight">
                              {brand.name}
                            </span>
                            <span className="text-[9.5px] text-gray-500 font-medium block truncate mt-0.5">
                              {brand.category}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>


                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="servicios" className="w-full py-14 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <span className="inline-flex items-center justify-center h-7 px-3.5 rounded-full bg-white text-[11px] sm:text-[12px] uppercase tracking-wider font-bold text-[#767A84] shadow-sm">
                Nuestros servicios
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl mx-auto text-center text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] leading-tight tracking-tight font-bold text-[#14161B]">
              Evaluaciones completas y <span className="text-[rgb(122,24,35)]">soluciones visuales</span> adaptadas a cada paciente
            </h2>

            {/* Selector de Categorías de Servicios con texto blanco asegurado */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {serviceCategories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      color: isSelected ? '#ffffff' : '#374151',
                      backgroundColor: isSelected ? 'rgb(122, 24, 35)' : '#ffffff',
                    }}
                    className={`px-5 py-2.5 rounded-full text-[14px] font-bold transition-all cursor-pointer ${
                      isSelected
                        ? '!text-white text-white bg-[rgb(122,24,35)] shadow-md shadow-[rgb(122,24,35)]/25 scale-105 border border-[rgb(122,24,35)] hover:!text-white hover:text-white hover:bg-[rgb(142,30,42)]'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-[rgb(122,24,35)] hover:text-[rgb(122,24,35)]'
                    }`}
                  >
                    <span
                      style={{ color: isSelected ? '#ffffff' : 'inherit' }}
                      className={isSelected ? '!text-white text-white font-bold' : ''}
                    >
                      {cat.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 relative grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              {services.filter((s) => selectedCategory === 'all' || s.categoryId === selectedCategory).map((service, i) => (
                <motion.article 
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05, ease: "easeOut" }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group bg-white rounded-2xl p-5 min-h-[160px] pro-card-interactive shadow-xs flex flex-col border border-gray-100 hover:border-[rgb(122,24,35)]/20 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] group-hover:bg-[rgb(122,24,35)] group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-2xs">
                        <service.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <h3 className="text-[19px] sm:text-[20px] md:text-[21px] leading-[1.25] tracking-tight font-bold text-[#15171C] group-hover:text-[rgb(122,24,35)] transition-colors">{service.title}</h3>
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[rgb(122,24,35)] bg-[rgb(122,24,35)]/10 px-2.5 py-0.5 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#555963] flex-grow">
                    {service.description}
                  </p>

                  <a 
                    href={`https://wa.me/50672760215?text=${encodeURIComponent(
                      lang === 'es'
                        ? `Hola Dr. Fabio Mora, deseo consultar por el servicio de ${service.title} y coordinar mi cita en Ópticas Popular.`
                        : `Hello Dr. Fabio Mora, I would like to inquire about ${service.title} and book an appointment at Opticas Popular.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-[13px] sm:text-[14px] font-bold text-[#15171C] group-hover/link:text-[rgb(122,24,35)] hover:text-[rgb(122,24,35)] transition-all duration-200 active:scale-95 group/link cursor-pointer"
                  >
                    <span>{lang === 'es' ? 'Reservar cita' : 'Book appointment'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </a>
                </motion.article>
              ))}
            </div>
            </div>
          </section>

          {/* Sección de Innovación en Cristales Oftálmicos (Progresivas, Transitions y Filtro Luz Azul) */}
          <section id="tecnologia-visual" className="w-full py-14 md:py-20 bg-slate-50/70 border-y border-gray-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Encabezado Principal */}
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                <span className="inline-flex items-center gap-1.5 h-7 px-3.5 rounded-full bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] text-[11px] sm:text-[12px] uppercase tracking-wider font-bold shadow-2xs mb-3 border border-[rgb(122,24,35)]/20">
                  <Glasses className="w-3.5 h-3.5 text-[rgb(122,24,35)]" />
                  <span>{lang === 'es' ? 'Innovación en Cristales & Tratamientos' : 'Lens Technology & Treatments'}</span>
                </span>
                <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-[#14161B] tracking-tight leading-tight">
                  {lang === 'es' ? (
                    <>Tecnología visual pensada para <span className="text-[rgb(122,24,35)]">tu comodidad diaria</span></>
                  ) : (
                    <>Visual technology engineered for <span className="text-[rgb(122,24,35)]">your daily comfort</span></>
                  )}
                </h2>
                <div className="w-16 h-1 bg-[rgb(122,24,35)] mx-auto mt-3 rounded-full" />
                <p className="mt-3.5 text-[14.5px] sm:text-[15.5px] text-[#555963] leading-relaxed">
                  {lang === 'es' 
                    ? 'Cristales oftálmicos de alta precisión calibrados por el Dr. Fabio Mora para brindarte una visión nítida, descanso ante pantallas y protección ante los cambios de luz.'
                    : 'High-precision ophthalmic lenses calibrated by Dr. Fabio Mora to provide razor-sharp clarity, screen comfort, and seamless adaptation to changing light.'}
                </p>
              </div>

              {/* Presentación Dinámica e Interactiva de Innovación en Cristales */}
                            {/* Tarjeta Banner de Presentación y Acceso a la Nueva Página Dedicada */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-xl relative overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="p-5 rounded-xl bg-[#F8F9FB] border border-gray-100 hover:border-[rgb(122,24,35)]/30 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] flex items-center justify-center mb-3">
                      <Glasses className="w-5 h-5" />
                    </div>
                    <h3 className="text-[16px] font-bold text-[#14161B] mb-1">
                      {lang === 'es' ? 'Progresivas Digitales' : 'Digital Progressives'}
                    </h3>
                    <p className="text-[12.5px] text-gray-600 leading-relaxed">
                      {lang === 'es' 
                        ? 'Simulador de campo visual para visión nítida a toda distancia (lejos, intermedio y cerca) sin saltos.' 
                        : 'Visual corridor simulation for sharp multi-distance focus (near, intermediate, far).'}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#F8F9FB] border border-gray-100 hover:border-[rgb(122,24,35)]/30 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] flex items-center justify-center mb-3">
                      <Sun className="w-5 h-5" />
                    </div>
                    <h3 className="text-[16px] font-bold text-[#14161B] mb-1">
                      {lang === 'es' ? 'Transitions® Inteligentes' : 'Smart Transitions®'}
                    </h3>
                    <p className="text-[12.5px] text-gray-600 leading-relaxed">
                      {lang === 'es' 
                        ? 'Prueba interactiva de oscurecimiento solar automático con 100% de protección UV al instante.' 
                        : 'Interactive light adaptation demo: clear indoors and dark outdoors with 100% UV protection.'}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#F8F9FB] border border-gray-100 hover:border-[rgb(122,24,35)]/30 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] flex items-center justify-center mb-3">
                      <Monitor className="w-5 h-5" />
                    </div>
                    <h3 className="text-[16px] font-bold text-[#14161B] mb-1">
                      {lang === 'es' ? 'Filtro Luz Azul & Antirreflejo' : 'Blue Light & AR Shield'}
                    </h3>
                    <p className="text-[12.5px] text-gray-600 leading-relaxed">
                      {lang === 'es' 
                        ? 'Demostración de contraste y descanso ante monitores, celulares y luces nocturnas.' 
                        : 'Contrast enhancement demo and visual relaxation under screens, smartphones, and headlights.'}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100">
                  <div className="text-left">
                    <p className="text-[14px] font-bold text-[#14161B]">
                      {lang === 'es' ? '¿Deseas probar los simuladores ópticos interactivos?' : 'Want to try our interactive optical simulators?'}
                    </p>
                    <p className="text-[12px] text-gray-500">
                      {lang === 'es' ? 'Explora cada cristal en detalle con calibraciones visuales en tiempo real.' : 'Explore each lens design in detail with real-time visual calibrations.'}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setCurrentView('tecnologia-cristales');
                      window.location.hash = '#tecnologia-cristales';
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white !text-white text-[13.5px] sm:text-[14px] font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer btn-shimmer whitespace-nowrap"
                  >
                    <Glasses className="w-4 h-4 text-white !text-white" />
                    <span className="text-white !text-white">
                      {lang === 'es' ? 'Abrir Simuladores de Cristales' : 'Open Lens Simulators'}
                    </span>
                    <ArrowRight className="w-4 h-4 text-white !text-white" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Cuidado Visual Multigeneracional - Niños, Adultos y Personas Mayores */}
          <section id="edades" className="w-full py-14 md:py-20 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/70 border-y border-gray-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Encabezado */}
              <div className="text-center max-w-3xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 h-7 px-3.5 rounded-full bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] text-[11px] sm:text-[12px] uppercase tracking-wider font-bold shadow-2xs border border-[rgb(122,24,35)]/20"
                >
                  <HeartHandshake className="w-3.5 h-3.5 text-[rgb(122,24,35)]" />
                  <span>{lang === 'es' ? 'Atención Integral para Toda la Familia' : 'Comprehensive Eye Care for the Whole Family'}</span>
                </motion.div>

                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] leading-tight tracking-tight font-bold text-[#14161B]"
                >
                  {lang === 'es' ? <>Cuidado visual especializado para <span className="text-[rgb(122,24,35)]">cada etapa de tu vida</span></> : <>Specialized eye care for <span className="text-[rgb(122,24,35)]">every stage of life</span></>}
                </motion.h2>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mt-3.5 text-[15px] sm:text-[16px] text-[#555963] leading-relaxed"
                >
                  {lang === 'es' ? 'Las necesidades de los ojos cambian con los años. El Dr. Fabio Mora adapta cada examen con tecnología de vanguardia, paciencia y un enfoque clínico cercano: desde el desarrollo escolar en la infancia, hasta el confort digital en adultos y la salud ocular preventiva en personas mayores.' : 'Eye care needs evolve over a lifetime. Dr. Fabio Mora adapts every examination with modern clinical technology, patience, and attentive care: from school-age vision development in children, to digital ergonomics for adults and preventive ocular health for seniors.'}
                </motion.p>
              </div>

              {/* Selector interactivo de etapas de la vida */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="mt-7 flex flex-wrap items-center justify-center gap-2"
              >
                {[
                  { id: 'all', label: 'Ver Todas las Edades', icon: Users },
                  { id: 'ninos', label: 'Niños y Jóvenes (4-17)', icon: Baby },
                  { id: 'adultos', label: 'Jóvenes y Adultos (18-59)', icon: Monitor },
                  { id: 'mayores', label: 'Adultos Mayores (60+)', icon: HeartHandshake },
                ].map((tab) => {
                  const isSelected = selectedAgeGroup === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedAgeGroup(tab.id as any)}
                      className={`inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full text-[13px] sm:text-[13.5px] font-bold transition-all cursor-pointer bg-white ${
                        isSelected
                          ? 'text-[rgb(122,24,35)] border-2 border-[rgb(122,24,35)] shadow-md scale-105 ring-2 ring-[rgb(122,24,35)]/15'
                          : 'text-[#374151] border border-gray-200 hover:border-[rgb(122,24,35)] hover:text-[rgb(122,24,35)] hover:shadow-xs'
                      }`}
                    >
                      <tab.icon className="w-3.5 h-3.5 text-[rgb(122,24,35)]" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </motion.div>

              {/* Grid de Tarjetas Animadas de Edades con Colores Corporativos y Letra Blanca en Hover */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
                {ageGroups.filter((g) => selectedAgeGroup === 'all' || g.id === selectedAgeGroup).map((group, idx) => {
                  const GroupIcon = group.icon;
                  return (
                    <motion.article
                      key={group.id}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: idx * 0.1 }}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="group bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/90 hover:border-[rgb(122,24,35)] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                    >
                      {/* Línea superior corporativa */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[rgb(122,24,35)]"></div>

                      <div>
                        {/* Header de la Tarjeta */}
                        <div className="flex items-center justify-between gap-3 mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] flex items-center justify-center shadow-xs border border-[rgb(122,24,35)]/15">
                            <GroupIcon className="w-6 h-6" />
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                              Rango de edad
                            </span>
                            <span className="text-[13px] font-bold text-[#15171C] bg-gray-100 px-2.5 py-0.5 rounded-full mt-0.5">
                              {group.ageRange}
                            </span>
                          </div>
                        </div>

                        {/* Título y Badge */}
                        <div className="mb-3">
                          <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border border-[rgb(122,24,35)]/20 bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] mb-2">
                            {group.roleTag}
                          </span>
                          <h3 className="text-[21px] sm:text-[22px] font-bold text-[#15171C] leading-tight">
                            {group.title}
                          </h3>
                        </div>

                        <p className="text-[13.5px] leading-relaxed text-[#555963] mb-5">
                          {group.description}
                        </p>

                        {/* Puntos destacados con alta legibilidad */}
                        <div className="space-y-3 pt-4 border-t border-gray-100">
                          {group.highlights.map((item, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2.5">
                              <div className="w-5 h-5 rounded-full bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] flex items-center justify-center shrink-0 mt-0.5">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                              </div>
                              <div className="text-[13px] leading-snug">
                                <span className="font-bold text-[#15171C]">{item.title}: </span>
                                <span className="text-[#555963]">{item.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Botón de Acción Directo en Blanco con Letra Vino Tinto de Alta Legibilidad */}
                      <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col gap-2">
                        <a
                          href={`https://wa.me/50672760215?text=${encodeURIComponent(group.waMessage)}`}
                          className="w-full inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white !text-white text-[13.5px] sm:text-[14px] font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer btn-shimmer"
                        >
                          <MessageCircle className="w-4 h-4 text-white !text-white" />
                          <span className="text-white !text-white">{group.buttonText}</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white !text-white" />
                        </a>
                      </div>
                    </motion.article>
                  );
                })}
              </div>


            </div>
          </section>



          {/* Gallery */}
          <section id="galeria" className="w-full py-14 md:py-20 bg-slate-50/60 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[14px] px-5 md:px-6 py-6 md:py-7 overflow-hidden shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="max-w-2xl lg:max-w-3xl">
                  <span className="inline-flex items-center justify-center h-7 px-3.5 rounded-full bg-[#F2F3F7] text-[11px] sm:text-[12px] uppercase tracking-wider font-bold text-[#7C808B]">
                    Galería
                  </span>
                  <h2 className="mt-3 text-[26px] sm:text-[32px] md:text-[36px] leading-[1.2] tracking-tight font-bold text-[#15171C]">
                    Un espacio pensado para una revisión visual <span className="text-[rgb(122,24,35)]">cómoda, clara y profesional</span>
                  </h2>
                </div>

                <a 
                  href={`https://wa.me/50672760215?text=${encodeURIComponent(
                    lang === 'es'
                      ? '¡Hola Dr. Fabio Mora! Vi las instalaciones de la clínica y deseo agendar una valoración en Plaza Higuerones.'
                      : 'Hello Dr. Fabio Mora, I saw your clinic facilities and would like to book an appointment at Plaza Higuerones.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white text-[13px] sm:text-[14px] font-bold whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer shrink-0 self-start md:self-center btn-shimmer"
                >
                  <MessageCircle className="w-4 h-4 text-white !text-white" />
                  <span className="text-white !text-white">{lang === 'es' ? 'Agendar valoración' : 'Book appointment'}</span>
                </a>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-[1.08fr_0.92fr] gap-3">
                <motion.article 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl overflow-hidden min-h-[320px] md:min-h-[360px] pro-card shadow-md md:cursor-pointer select-none focus:outline-hidden"
                >
                  <img
                    src="/images/dr-fabio-mora-examen.jpg"
                    alt="Dr. Fabio Mora Medina realizando evaluación visual profesional con biomicroscopio"
                    width={1376}
                    height={768}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover blur-none scale-100 md:blur-[2.5px] md:scale-[1.02] md:group-hover:blur-none md:group-hover:scale-[1.06] transition-[filter,transform] duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 md:group-hover:opacity-90"></div>
                  <div className="absolute left-0 right-0 bottom-0 p-5 md:p-6 transform transition-transform duration-500 md:group-hover:-translate-y-1">
                    <div className="inline-flex items-center h-7 px-3.5 rounded-full bg-white/90 text-[11px] sm:text-[12px] uppercase tracking-wider font-bold text-[#6A6E79]">
                      Atención visual
                    </div>
                    <h3 className="mt-3 max-w-[24ch] text-[20px] sm:text-[22px] md:text-[24px] leading-[1.1] tracking-tight font-bold text-white">
                      Evaluación visual integral con el Dr. Fabio Mora
                    </h3>
                  </div>
                </motion.article>

                <div className="grid grid-cols-1 gap-3">
                  <motion.article 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="group relative rounded-2xl overflow-hidden min-h-[173px] pro-card shadow-md md:cursor-pointer select-none focus:outline-hidden"
                  >
                    <img
                      src="/images/tecnologia-diagnostico.jpg"
                      alt="Tecnología para diagnóstico visual de alta precisión"
                      width={1200}
                      height={675}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover blur-none scale-100 md:blur-[2.5px] md:scale-[1.02] md:group-hover:blur-none md:group-hover:scale-[1.06] transition-[filter,transform] duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 md:group-hover:opacity-90"></div>
                    <div className="absolute left-0 right-0 bottom-0 p-4 transform transition-transform duration-500 md:group-hover:-translate-y-1">
                      <h3 className="max-w-[20ch] text-[16px] sm:text-[17px] md:text-[18px] leading-[1.15] tracking-tight font-bold text-white">
                        Tecnología para una valoración precisa
                      </h3>
                    </div>
                  </motion.article>

                  <div className="grid grid-cols-2 gap-3">
                    <motion.article 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="group relative rounded-2xl overflow-hidden min-h-[173px] pro-card shadow-md md:cursor-pointer select-none focus:outline-hidden"
                    >
                      <img
                        src="/images/dr-fabio-mora-ninos.jpg"
                        alt="Dr. Fabio Mora Medina en consulta de optometría pediátrica"
                        width={297}
                        height={400}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover blur-none scale-100 md:blur-[2.5px] md:scale-[1.02] md:group-hover:blur-none md:group-hover:scale-[1.06] transition-[filter,transform] duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 md:group-hover:opacity-90"></div>
                      <div className="absolute left-0 right-0 bottom-0 p-4 transform transition-transform duration-500 md:group-hover:-translate-y-1">
                        <h3 className="max-w-[12ch] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.15] tracking-tight font-bold text-white">
                          Atención infantil y familiar
                        </h3>
                      </div>
                    </motion.article>

                    <motion.article 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="group relative rounded-2xl overflow-hidden min-h-[173px] pro-card shadow-md md:cursor-pointer select-none focus:outline-hidden"
                    >
                      <img
                        src="/images/dr-fabio-mora-adultos.jpg"
                        alt="Dr. Fabio Mora Medina explicando diagnóstico de patología visual a adultos mayores"
                        width={297}
                        height={400}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover blur-none scale-100 md:blur-[2.5px] md:scale-[1.02] md:group-hover:blur-none md:group-hover:scale-[1.06] transition-[filter,transform] duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 md:group-hover:opacity-90"></div>
                      <div className="absolute left-0 right-0 bottom-0 p-4 transform transition-transform duration-500 md:group-hover:-translate-y-1">
                        <h3 className="max-w-[12ch] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.15] tracking-tight font-bold text-white">
                          Soluciones a tu medida
                        </h3>
                      </div>
                    </motion.article>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-slate-50 border border-gray-200/80 px-4 sm:px-6 py-3.5 flex items-center justify-center text-center">
                <p className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#474B54] leading-normal tracking-tight text-center whitespace-normal sm:whitespace-nowrap break-normal">
                  Cada consulta busca que salgas con una respuesta clara sobre tu visión y el siguiente paso recomendado.
                </p>
              </div>
            </motion.div>
            </div>
          </section>

          {/* Testimonials */}
          <section id="testimonios" className="w-full py-14 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[14px] px-5 md:px-6 py-6 md:py-7 overflow-hidden shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="max-w-2xl lg:max-w-3xl">
                  <span className="inline-flex items-center justify-center h-7 px-3.5 rounded-full bg-[#F2F3F7] text-[11px] sm:text-[12px] uppercase tracking-wider font-bold text-[#7C808B]">
                    Testimonios
                  </span>
                  <h2 className="mt-3 text-[26px] sm:text-[30px] md:text-[34px] leading-[1.2] tracking-tight font-bold text-[#15171C]">
                    {lang === 'es' ? <>La <span className="text-[rgb(122,24,35)]">confianza se gana</span> con atención clara, cercana y resultados bien explicados</> : <>Trust is earned through <span className="text-[rgb(122,24,35)]">clear, honest care</span> and well-explained results</>}
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-start md:self-center">
                  <button
                    onClick={() => {
                      setCurrentView('testimonios-page');
                      window.location.hash = '#testimonios-google';
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center gap-1.5 h-11 px-4.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-[13px] font-bold shadow-2xs transition-all active:scale-95 cursor-pointer"
                  >
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span>{lang === 'es' ? 'Muro Reseñas Google (5.0 ★)' : 'Google Reviews Wall (5.0 ★)'}</span>
                  </button>
                  <a 
                    href="#calificar" 
                    onClick={() => {
                      setCurrentView('calificar');
                      window.location.hash = '#calificar';
                    }}
                    className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-white border border-gray-200 hover:border-[rgb(122,24,35)] text-[#15171C] hover:text-[rgb(122,24,35)] text-[13px] font-bold shadow-2xs transition-all active:scale-95 cursor-pointer"
                  >
                    <span>{lang === 'es' ? 'Calificar experiencia' : 'Rate experience'}</span>
                  </a>
                  <a 
                    href={`https://wa.me/50672760215?text=${encodeURIComponent(
                      lang === 'es'
                        ? '¡Hola Dr. Fabio Mora! Leí las opiniones de sus pacientes y me gustaría agendar una valoración con usted.'
                        : 'Hello Dr. Fabio Mora, I read the patient testimonials and would like to schedule an eye evaluation.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white text-[13px] sm:text-[14px] font-bold whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer btn-shimmer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{lang === 'es' ? 'Agendar valoración' : 'Book appointment'}</span>
                  </a>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                {testimonials.map((t, i) => (
                  <motion.article 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-[#F8F9FA] rounded-2xl p-5 md:p-6 pro-card-interactive shadow-xs border border-gray-100/90 hover:border-[rgb(122,24,35)]/20 hover:bg-white transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1 text-amber-500 mb-3">
                        {[...Array(5)].map((_, sIdx) => (
                          <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#555963] italic">
                        "{t.content}"
                      </p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-gray-200/70 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img 
                          src={t.avatar} 
                          alt={`Foto de ${t.name}`}
                          width={38}
                          height={38}
                          loading="lazy"
                          className="w-9 h-9 rounded-full object-cover ring-2 ring-gray-100 shadow-2xs shrink-0"
                        />
                        <div>
                          <h3 className="text-[14.5px] sm:text-[15px] font-bold text-[#15171C] leading-snug">{t.name}</h3>
                          <p className="text-[11px] text-[#7A7F8A]">{t.role}</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verificado
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-4">
                <motion.article 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#F8F9FB] rounded-2xl p-6 md:p-7 pro-card shadow-xs border border-gray-100 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center justify-center h-7 px-3.5 rounded-full bg-white text-[11px] sm:text-[12px] uppercase tracking-wider font-bold text-[#7C808B] shadow-2xs border border-gray-200/70 w-fit">
                      Experiencia del paciente
                    </span>
                    <h3 className="mt-4 text-[22px] sm:text-[24px] md:text-[26px] leading-[1.2] tracking-tight font-bold text-[#15171C]">
                      Una consulta diseñada para entender, decidir y actuar con claridad
                    </h3>
                    <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-[#555963]">
                      La meta no es solo medir tu graduación, sino brindarte una orientación médica transparente sobre la salud de tus ojos y las mejores opciones para tu estilo de vida.
                    </p>

                    <div className="mt-5 space-y-2.5 pt-4 border-t border-gray-200/70">
                      {[
                        'Evaluación visual completa para niños, jóvenes y adultos mayores',
                        'Detección temprana de fatiga por pantallas y resequedad ocular',
                        'Asesoría honesta en lentes antirreflejo, fotocromáticos y progresivos',
                        'Entrega de resultados explicados sin tecnicismos complejos'
                      ].map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-[rgb(122,24,35)] shrink-0" />
                          <span className="text-[13px] sm:text-[14px] text-[#424651] font-medium leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200/80 flex items-center justify-between text-[#7C808B] text-[12px]">
                    <span className="font-medium">Duración estimada: 30 a 40 minutos</span>
                <span className="text-[rgb(122,24,35)] font-bold">{lang === 'es' ? 'Atención 100% personalizada' : '100% Personalized Care'}</span>
                  </div>
                </motion.article>

                <motion.article 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[rgb(122,24,35)] via-[rgb(112,20,30)] to-[rgb(90,14,23)] rounded-2xl p-6 md:p-8 text-white pro-card shadow-xl flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-xs">
                        <Award className="w-3.5 h-3.5 text-white/90" /> Compromiso con tu visión
                      </span>
                    </div>

                    <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-white leading-snug tracking-tight mb-3">
                      Atención cercana, evaluación detallada y resultados en los que podés confiar
                    </h4>

                    <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-white/85 mb-5">
                      En Ópticas Popular combinamos experiencia clínica comprobada y tecnología de diagnóstico para que salgas con una solución visual cómoda, duradera y ajustada a tu presupuesto.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4 border-t border-white/15">
                      {[
                        { 
                          icon: Users,
                          label: 'Atención', 
                          title: 'Humana y cercana',
                          desc: 'Escuchamos tus molestias visuales y resolvemos cada duda sin prisas.' 
                        },
                        { 
                          icon: ShieldCheck,
                          label: 'Evaluación', 
                          title: 'Clara y precisa',
                          desc: 'Exámenes con equipos de última generación para una receta confiable.' 
                        },
                        { 
                          icon: Award,
                          label: 'Confianza', 
                          title: '18 años de respaldo',
                          desc: 'Soluciones reales sin sugerencias innecesarias ni costos ocultos.' 
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex flex-col bg-white/10 backdrop-blur-xs rounded-xl p-3.5 border border-white/10 hover:bg-white/15 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-white/20 text-white flex items-center justify-center mb-2">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div className="text-[16px] sm:text-[17px] font-bold text-white leading-tight">{item.label}</div>
                          <div className="text-[11.5px] font-semibold text-white/90 mt-0.5">{item.title}</div>
                          <p className="mt-1.5 text-[12px] leading-[1.45] text-white/80">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 mt-6 pt-5 border-t border-white/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-2 text-white/90 text-[13px] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                      <span>Citas organizadas y asesoría transparente</span>
                    </div>

                    <a
                      href="https://wa.me/50672760215"
                      className="inline-flex items-center justify-center h-11 px-7 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white !text-white text-[13px] sm:text-[14px] font-bold shadow-md hover:shadow-lg transition-all active:scale-95 btn-shimmer shrink-0 border border-white/25"
                    >
                      <span className="text-white !text-white">{lang === 'es' ? 'Quiero agendar mi cita' : 'Book my appointment'}</span>
                    </a>
                  </div>
                </motion.article>
              </div>
            </motion.div>
            </div>
          </section>

          {/* Doctor Section */}
          <section id="doctor" className="w-full py-14 md:py-20 bg-slate-50/60 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[14px] bg-[#F3F4F7] shadow-sm"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-75 pointer-events-none">
                <svg viewBox="0 0 800 500" className="w-[94%] h-[94%]">
                  <g fill="none" stroke="#FFFFFF" strokeWidth="1">
                    {[300, 260, 220, 180, 140].map((rx, i) => (
                      <ellipse key={i} cx="400" cy="250" rx={rx} ry={128 - i * 20}></ellipse>
                    ))}
                  </g>
                </svg>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-stretch">
                <div className="w-full md:w-[38%] lg:w-[32%] min-h-[340px] md:min-h-[480px] relative overflow-hidden group/doctor cursor-help">
                  <img 
                    src="/images/dr-fabio-mora.webp" 
                    alt="Dr. Fabio Mora Medina - Optometrista en Ópticas Popular Desamparados"
                    width={800}
                    height={1077}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-[filter,transform] duration-[1200ms] ease-in-out blur-0 md:blur-0 md:group-hover/doctor:blur-[12px] md:scale-100 md:group-hover/doctor:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-6 p-5 flex justify-center transition-all duration-500 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover/doctor:opacity-100 md:group-hover/doctor:translate-y-0 pointer-events-none">
                    <div className="bg-white px-5 py-4 rounded-[12px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 w-full max-w-[240px] relative z-20">
                      <p className="text-[15px] font-black text-[rgb(122,24,35)] text-center leading-tight uppercase tracking-wider">
                        {lang === 'es' ? '¿Me ves borroso?' : 'Blurry vision?'}
                      </p>
                      <p className="mt-2 text-[11px] font-bold text-[#1F2937] text-center leading-tight">
                        {lang === 'es' ? 'Es momento de agendar tu revisión visual profesional' : 'Time to book your comprehensive vision exam'}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F3F4F7] via-transparent to-transparent md:hidden"></div>
                </div>

                <div className="flex-1 px-5 md:px-10 py-10 md:py-12 flex flex-col justify-center text-center md:text-left">
                  <div className="flex justify-center md:justify-start">
                    <span className="inline-flex items-center h-7 px-3.5 rounded-full bg-white text-[11px] sm:text-[12px] uppercase tracking-wider font-bold text-[rgb(122,24,35)] shadow-sm border border-[rgb(122,24,35)]/15">
                      {lang === 'es' ? 'Optometrista Clínico · Patología Ocular' : 'Clinical Optometrist · Ocular Pathology'}
                    </span>
                  </div>

                  <h2 className="mt-4 text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.1] tracking-tight font-bold text-[#15171C]">
                    Dr. Fabio Mora Medina
                  </h2>

                  <p className="mt-2 text-[13px] sm:text-[14px] font-semibold text-[rgb(122,24,35)]">
                    {lang === 'es' 
                      ? 'Licenciado en Optometría con Honores (U. Latina) · Máster en Atención Optométrica en Patología Ocular (Universitat de València, España)'
                      : 'B.S. in Optometry with Honors (U. Latina) · M.S. in Ocular Pathology Optometric Care (Universitat de València, Spain)'}
                  </p>

                  {/* Resumen Conciso y Cálido */}
                  <p className="mt-3.5 text-[14px] sm:text-[15px] text-[#474B54] leading-relaxed max-w-2xl">
                    {lang === 'es' 
                      ? 'Más de 18 años dedicados al cuidado visual de las familias en Desamparados, combinando rigor clínico, tecnología avanzada y un trato cercano.'
                      : 'Over 18 years dedicated to family eye care in Desamparados, blending clinical precision, modern technology, and personal attention.'}
                  </p>

                  {/* 4 Credenciales Clave Sintetizadas */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { 
                        icon: Award,
                        title: lang === 'es' ? 'Graduado con Honores' : 'Graduated with Honors', 
                        desc: lang === 'es' ? 'Universidad Latina de Costa Rica' : 'Universidad Latina de Costa Rica' 
                      },
                      { 
                        icon: ShieldCheck,
                        title: lang === 'es' ? 'Máster en Patología Ocular' : 'Master in Ocular Pathology', 
                        desc: lang === 'es' ? 'Universitat de València (España)' : 'Universitat de València (Spain)' 
                      },
                      { 
                        icon: Stethoscope,
                        title: lang === 'es' ? '+5 Años en Oftalmología' : '+5 Yrs Ophthalmology Scope', 
                        desc: lang === 'es' ? 'Criterio médico-quirúrgico avanzado' : 'Advanced surgical-medical criteria' 
                      },
                      { 
                        icon: HeartHandshake,
                        title: lang === 'es' ? 'Canadian Vision Care' : 'Canadian Vision Care', 
                        desc: lang === 'es' ? 'Misiones humanitarias de salud visual' : 'Humanitarian eye health missions' 
                      },
                    ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-2xs border border-gray-100 hover:border-[rgb(122,24,35)]/20 transition-all hover:shadow-xs"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] flex items-center justify-center shrink-0">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-[13px] font-bold text-[#15171C] leading-snug">{item.title}</h4>
                          <p className="text-[11px] text-[#6B7280] truncate">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Botones de Acción */}
                  <div className="mt-7 flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <a 
                      href={`https://wa.me/50672760215?text=${encodeURIComponent(
                        lang === 'es' 
                          ? '¡Hola Dr. Fabio Mora! Le escribo desde su página web para coordinar una consulta con usted en Plaza Higuerones.' 
                          : 'Hello Dr. Fabio Mora, I am writing to schedule an appointment with you at Plaza Higuerones.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white text-[13.5px] sm:text-[14px] font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer btn-shimmer"
                    >
                      <MessageCircle className="w-4 h-4 text-white !text-white" />
                      <span className="text-white !text-white">{lang === 'es' ? 'Agendá cita con el Dr. Mora' : 'Book with Dr. Mora'}</span>
                    </a>

                    <a 
                      href="tel:+50672760215"
                      className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-[#15171C] text-[13.5px] sm:text-[14px] font-bold shadow-2xs hover:shadow-xs transition-all duration-200 active:scale-95 cursor-pointer"
                      title={lang === 'es' ? 'Llamar: 2515-0002 / 7276-0215' : 'Call: 2515-0002 / 7276-0215'}
                    >
                      <Phone className="w-4 h-4 text-[rgb(122,24,35)]" />
                      <span>{lang === 'es' ? 'Llamar: 2515-0002' : 'Call: 2515-0002'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="w-full py-5 md:py-7 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200/80 px-6 md:px-8 py-5 md:py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 shadow-xs"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] tracking-tight leading-snug font-bold text-[#15171C]">
                  No esperés a notar un problema mayor
                </h3>
                <p className="mt-1.5 text-[14px] sm:text-[15px] md:text-[15.5px] text-[#555963] font-normal leading-relaxed whitespace-normal lg:whitespace-nowrap break-normal">
                  Si sentís molestias, cambios en tu visión o tus lentes ya no responden como antes, este es un buen momento para revisarte.
                </p>
              </div>
              <a 
                href={`https://wa.me/50672760215?text=${encodeURIComponent(
                  lang === 'es'
                    ? '¡Hola Dr. Fabio Mora! Deseo coordinar una consulta de valoración visual en Ópticas Popular.'
                    : 'Hello Dr. Fabio Mora, I would like to arrange an eye examination at Opticas Popular.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white text-[13px] sm:text-[14px] font-bold whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer shrink-0 self-start lg:self-center btn-shimmer"
              >
                <MessageCircle className="w-4 h-4 text-white !text-white" />
                <span className="text-white !text-white">{lang === 'es' ? 'Agendá por WhatsApp' : 'Book via WhatsApp'}</span>
              </a>
            </motion.div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="w-full py-14 md:py-20 bg-slate-50/70 border-y border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
                <span className="inline-flex items-center gap-1.5 h-6 px-3.5 rounded-full bg-white text-[9px] uppercase tracking-[0.14em] font-semibold text-[#767A84] shadow-xs border border-gray-200/60 mb-4">
                  <HelpCircle className="w-3.5 h-3.5 text-[rgb(122,24,35)]" /> {lang === 'es' ? 'Preguntas frecuentes' : 'Frequently Asked Questions'}
                </span>
                <h2 className="text-[28px] sm:text-[34px] md:text-[40px] leading-tight tracking-tight font-bold text-[#14161B]">
                  Resolvé tus <span className="text-[rgb(122,24,35)]">dudas</span>
                </h2>
                <p className="mt-3 text-[14px] sm:text-[16px] leading-relaxed text-[#6D727D]">
                  Aquí encontrarás respuestas claras a las consultas más comunes sobre nuestros servicios y el cuidado de tu visión.
                </p>
              </div>

              <div className="space-y-3.5 md:space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className={`rounded-2xl transition-all duration-200 border ${
                        isOpen 
                          ? 'bg-white border-[rgb(122,24,35)]/30 shadow-md ring-2 ring-[rgb(122,24,35)]/5' 
                          : 'bg-white border-gray-200/70 hover:border-gray-300 shadow-xs hover:shadow-sm'
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                      >
                        <span className={`text-[15px] sm:text-[17px] md:text-[18px] font-semibold transition-colors ${
                          isOpen ? 'text-[rgb(122,24,35)]' : 'text-[#14161B]'
                        }`}>
                          {faq.question}
                        </span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen ? 'bg-[rgb(122,24,35)] text-white' : 'bg-gray-100 text-gray-500'
                        }`}>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7] text-[#555A65] border-t border-gray-100">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

              {/* Enlace sutil al final de Preguntas Frecuentes */}
              <div className="mt-8 text-center">
                <p className="text-[14px] text-[#555963]">
                  {lang === 'es' ? '¿Tenés alguna duda puntual sobre tu caso o querés cotizar?' : 'Have a specific question about your case or need a quote?'}{' '}
                  <button
                    onClick={() => {
                      setCurrentView('consulta');
                      window.location.hash = '#consulta';
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1 font-semibold text-[rgb(122,24,35)] hover:underline ml-1 cursor-pointer transition-colors"
                  >
                    <span>{lang === 'es' ? 'Escribinos en el formulario de consulta' : 'Send an inquiry through our form'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </p>
              </div>
            </div>
          </section>

          {/* Banner Tipo Carrusel Dinámico en Sección de Contacto */}
          <section id="contacto" className="w-full py-10 md:py-16 bg-[#FAFAFC] border-t border-gray-100 pb-20 md:pb-24">
            <div id="lentes-contacto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ContactLensCarouselBanner lang={lang} />
            </div>
          </section>
          </main>

          {/* Footer Corporativo de Alto Contraste y Bilingüe */}
          <Footer
            lang={lang}
            onNavigate={(view, hash) => {
              if (view === 'consulta') {
                setCurrentView('consulta');
                window.location.hash = '#consulta';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else if (view === 'calificar') {
                setCurrentView('calificar');
                window.location.hash = '#calificar';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else if (view === 'test-visual') {
                setCurrentView('test-visual');
                window.location.hash = '#test-visual';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else if (view === 'contacto') {
                setCurrentView('contacto');
                window.location.hash = '#contacto';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                window.location.hash = hash || '';
                if (hash) {
                  const el = document.querySelector(hash);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          />

          {/* Barra de Acción Rápida Inferior para Móviles (Mobile Sticky Bar) */}
          <nav aria-label="Acciones rápidas móviles" className="md:hidden fixed bottom-0 inset-x-0 z-40 px-3 py-2.5 bg-white/95 backdrop-blur-md border-t border-gray-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.1)]">
            <div className="grid grid-cols-12 gap-2 max-w-[460px] mx-auto items-center">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="col-span-3 inline-flex flex-col items-center justify-center h-12 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white !text-white text-[11px] font-bold active:scale-95 transition-all shadow-md btn-shimmer cursor-pointer"
                aria-label="Abrir Menú de Navegación"
              >
                <Menu className="w-4 h-4 text-white !text-white mb-0.5" />
                <span className="font-extrabold text-white !text-white">Menú</span>
              </button>
              
              <a
                href="https://waze.com/ul?ll=9.8910441,-84.081993&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-4 inline-flex items-center justify-center gap-1.5 h-12 rounded-xl bg-white border border-[#D9DDE6] text-[#15171C] text-[12px] font-bold active:scale-95 transition-all shadow-2xs hover:border-[rgb(122,24,35)]"
                aria-label="Abrir ubicación en Waze"
              >
                <Navigation className="w-4 h-4 text-[rgb(122,24,35)] shrink-0" />
                <span>Waze</span>
              </a>

              <a
                href={`https://wa.me/50672760215?text=${encodeURIComponent(
                  lang === 'es'
                    ? '¡Hola Dr. Fabio Mora! Deseo agendar una cita en Ópticas Popular Plaza Higuerones.'
                    : 'Hello Dr. Fabio Mora, I would like to book an appointment at Opticas Popular Plaza Higuerones.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-5 inline-flex items-center justify-center gap-1.5 h-12 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white text-[12px] font-bold active:scale-95 transition-all duration-200 shadow-md btn-shimmer cursor-pointer"
                aria-label="Agendar cita por WhatsApp"
              >
                <MessageCircle className="w-4 h-4 shrink-0 text-white !text-white" />
                <span className="text-white !text-white">WhatsApp</span>
              </a>
            </div>
          </nav>

        
        {/* Modal Interactivo de Diagnóstico / Test Visual Rápido (a los 5 seg) */}
        <AnimatePresence>
          {showDiagnosticModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs">
              {/* Fondo para cerrar al tocar fuera */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseDiagnostic}
                className="absolute inset-0"
              />

              {/* Contenedor del Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ type: 'spring', damping: 26, stiffness: 280 }}
                className="relative z-10 w-full max-w-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
              >
                {/* Encabezado animado con rayo de luz */}
                <div className="relative bg-gradient-to-r from-[#171920] via-[rgb(122,24,35)] to-[#171920] px-5 sm:px-6 py-5 text-white overflow-hidden">
                  <motion.div
                    animate={{ x: ['-100%', '250%'] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                    className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none"
                  />

                  <div className="relative z-10 flex items-start justify-between gap-3">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white">
                        <Eye className="w-3 h-3 text-white/90" /> {lang === 'es' ? 'Test de Confort Visual' : 'Visual Comfort Screening'}
                      </span>
                      <h3 className="mt-2 text-[20px] sm:text-[22px] font-bold leading-tight">
                        ¿Cómo sentís tu visión hoy?
                      </h3>
                      <p className="mt-1 text-[12px] sm:text-[13px] text-white/80 leading-snug">
                        Autoevaluación óptica rápida en 15 segundos
                      </p>
                    </div>

                    <button
                      onClick={handleCloseDiagnostic}
                      aria-label="Cerrar test"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors shrink-0 active:scale-95"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Contenido Dinámico */}
                <div className="p-5 sm:p-6">
                  {diagnosticStep === 'question' && (
                    <motion.div
                      key="question"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <p className="text-[13px] sm:text-[14px] font-semibold text-[#15171C] mb-3">
                        Seleccioná tu molestia o situación más frecuente:
                      </p>

                      <div className="space-y-2.5">
                        {[
                          {
                            id: 'borroso',
                            title: lang === 'es' ? 'Visión borrosa o dificultad para enfocar' : 'Blurry vision or difficulty focusing',
                            desc: lang === 'es' ? 'Me cuesta enfocar de lejos, al manejar o hacia el final del día.' : 'Trouble focusing at distance, while driving, or at the end of the day.',
                            badge: lang === 'es' ? 'Enfoque' : 'Focus'
                          },
                          {
                            id: 'pantallas',
                            title: lang === 'es' ? 'Fatiga o pesadez por pantallas' : 'Screen fatigue or eye strain',
                            desc: lang === 'es' ? 'Paso muchas horas en computadora o celular y siento ojos cansados o secos.' : 'Long hours on computer or phone leaving eyes tired or dry.',
                            badge: lang === 'es' ? 'Digital' : 'Digital'
                          },
                          {
                            id: 'lentes',
                            title: lang === 'es' ? 'Mis lentes ya tienen más de 1 año' : 'My glasses are over 1 year old',
                            desc: lang === 'es' ? 'Siento que mi graduación cambió o mis aros están rayados y deteriorados.' : 'Prescription feels outdated or frames and lenses are scratched.',
                            badge: lang === 'es' ? 'Actualización' : 'Renewal'
                          },
                          {
                            id: 'preventivo',
                            title: lang === 'es' ? 'Solo deseo mi chequeo preventivo anual' : 'Just want my annual preventive exam',
                            desc: lang === 'es' ? 'Quiero verificar la salud de mis ojos con atención profesional del Dr. Fabio Mora.' : 'Check my general ocular health with professional care from Dr. Fabio Mora.',
                            badge: lang === 'es' ? 'Prevención' : 'Prevention'
                          }
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => handleSelectSymptom(opt.id)}
                            className="w-full text-left p-3.5 rounded-2xl border border-gray-200/90 hover:border-[rgb(122,24,35)] hover:bg-[#FDF6F7] transition-all duration-200 flex items-start gap-3 group cursor-pointer active:scale-[0.99] bg-white shadow-2xs"
                          >
                            <div className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-[rgb(122,24,35)] group-hover:text-white text-[rgb(122,24,35)] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                              <Eye className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-[13.5px] sm:text-[14px] font-bold text-[#15171C] group-hover:text-[rgb(122,24,35)] transition-colors">
                                  {opt.title}
                                </span>
                                <span className="text-[9px] uppercase tracking-wider font-semibold text-[#4B5262] bg-gray-100 group-hover:bg-white px-2 py-0.5 rounded-md shrink-0 border border-gray-200/50">
                                  {opt.badge}
                                </span>
                              </div>
                              <p className="text-[11.5px] sm:text-[12px] text-[#4F5460] mt-0.5 leading-snug">
                                {opt.desc}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>

                      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                        <span>Sin costo • Diagnóstico instantáneo</span>
                        <button
                          onClick={handleCloseDiagnostic}
                          className="text-gray-500 hover:text-gray-800 underline font-medium"
                        >
                          Continuar navegando
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {diagnosticStep === 'scanning' && (
                    <motion.div
                      key="scanning"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-10 flex flex-col items-center justify-center text-center"
                    >
                      <div className="relative w-24 h-24 mb-5 flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
                          className="absolute inset-0 rounded-full border-2 border-dashed border-[rgb(122,24,35)]/70"
                        />
                        <motion.div
                          animate={{ scale: [0.85, 1.1, 0.85], opacity: [0.4, 0.9, 0.4] }}
                          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                          className="absolute inset-2 rounded-full bg-[rgb(122,24,35)]/10"
                        />
                        <Eye className="w-10 h-10 text-[rgb(122,24,35)] relative z-10" />
                        <motion.div
                          animate={{ y: [-30, 30, -30] }}
                          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                          className="absolute inset-x-0 h-0.5 bg-[rgb(122,24,35)] shadow-[0_0_8px_rgb(122,24,35)] z-20"
                        />
                      </div>

                      <h4 className="text-[17px] font-bold text-[#15171C]">
                        Analizando indicadores visuales...
                      </h4>
                      <p className="text-[13px] text-[#6D727D] mt-1">
                        Calculando orientación médica personalizada
                      </p>
                    </motion.div>
                  )}

                  {diagnosticStep === 'result' && (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="rounded-2xl bg-slate-50 border border-gray-200/80 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-[rgb(122,24,35)]" />
                          <span className="text-[11px] uppercase tracking-wider font-bold text-[rgb(122,24,35)]">
                            Resultado de tu autoevaluación
                          </span>
                        </div>

                        {selectedSymptom === 'borroso' && (
                          <>
                            <h5 className="text-[15px] font-bold text-[#15171C]">
                              Posible cambio de graduación o fatiga acomodativa
                            </h5>
                            <p className="text-[12.5px] text-[#555963] mt-1 leading-relaxed">
                              La dificultad para enfocar suele indicar que la graduación actual necesita ajuste o que existe astigmatismo/presbicia no corregidos.
                            </p>
                          </>
                        )}

                        {selectedSymptom === 'pantallas' && (
                          <>
                            <h5 className="text-[15px] font-bold text-[#15171C]">
                              Síndrome de fatiga visual digital
                            </h5>
                            <p className="text-[12.5px] text-[#555963] mt-1 leading-relaxed">
                              El uso prolongado de pantallas causa resequedad y esfuerzo excesivo de los músculos ciliares. Lentes con filtro de luz azul suelen brindar alivio inmediato.
                            </p>
                          </>
                        )}

                        {selectedSymptom === 'lentes' && (
                          <>
                            <h5 className="text-[15px] font-bold text-[#15171C]">
                              Pérdida de claridad óptica por desgaste
                            </h5>
                            <p className="text-[12.5px] text-[#555963] mt-1 leading-relaxed">
                              Los lentes con más de un año acumulan micro-rayaduras que dispersan la luz, generando reflejos y cansancio visual. Es momento de renovar tus cristales.
                            </p>
                          </>
                        )}

                        {selectedSymptom === 'preventivo' && (
                          <>
                            <h5 className="text-[15px] font-bold text-[#15171C]">
                              Excelente hábito preventivo anual
                            </h5>
                            <p className="text-[12.5px] text-[#555963] mt-1 leading-relaxed">
                              El 80% de las alteraciones visuales se previenen o resuelven a tiempo con una revisión al año. Una consulta rápida te da total tranquilidad.
                            </p>
                          </>
                        )}

                        <div className="mt-3 pt-3 border-t border-gray-200/60 flex items-center justify-between text-[11.5px] text-[#7C808B]">
                          <span>Recomendación: <strong>Examen visual completo</strong></span>
                          <span className="text-[rgb(122,24,35)] font-bold">Dr. Fabio Mora</span>
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/50672760215?text=${encodeURIComponent(
                          `Hola Dr. Fabio Mora, realicé el test de confort visual en su web (${
                            selectedSymptom === 'borroso' ? 'dificultad para enfocar' :
                            selectedSymptom === 'pantallas' ? 'fatiga por pantallas' :
                            selectedSymptom === 'lentes' ? 'lentes desactualizados' : 'chequeo preventivo anual'
                          }) y me gustaría agendar mi examen visual.`
                        )}`}
                        className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,28,41)] text-white text-[14px] font-bold shadow-md hover:shadow-lg transition-all active:scale-95 btn-shimmer"
                      >
                        <MessageCircle className="w-4 h-4 text-white !text-white" />
                        <span className="text-white !text-white">Agendar examen con el Dr. Fabio Mora</span>
                      </a>

                      <div className="flex items-center justify-between pt-1">
                        <button
                          onClick={handleResetDiagnostic}
                          className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-gray-500 hover:text-[rgb(122,24,35)] transition-colors cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Repetir test</span>
                        </button>

                        <button
                          onClick={handleCloseDiagnostic}
                          className="text-[12px] text-gray-400 hover:text-gray-700 underline cursor-pointer"
                        >
                          Continuar navegando
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        
        {/* Botón Flotante Volver Arriba */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 15 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Volver arriba"
              className="fixed bottom-20 md:bottom-6 left-4 md:left-6 z-40 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-[#15171C] hover:text-[rgb(122,24,35)] border border-gray-200 shadow-lg backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer group"
            >
              <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>



      {/* Floating WhatsApp Button (solo visible en pantallas de escritorio / oculto en móviles) */}
        <motion.a
          href="https://wa.me/50672760215"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hidden md:flex fixed bottom-6 right-6 z-[45] w-14 h-14 bg-[#25D366] text-white rounded-full items-center justify-center shadow-2xl hover:bg-[#20ba5a] transition-all group"
          aria-label="Contactar por WhatsApp"
        >
          <span className="hidden md:inline-flex items-center gap-1.5 absolute right-16 bg-[#15171C]/95 backdrop-blur-md text-white text-[12px] font-semibold py-1.5 px-3.5 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 -translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-xl border border-white/10">
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" /> ¿Tenés dudas? Escribinos
          </span>
          <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
          <span className="absolute -top-2 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#25D366] border-2 border-white"></span>
          </span>
        </motion.a>

        {/* Control Flotante de Tamaño y Accesibilidad Visual (+ / -) */}
        <VisualAccessibilityWidget lang={lang} />
    </div>
  );
}

