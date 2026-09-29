import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Facebook,
  Instagram,
  ChevronDown,
  ChevronRight,
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
  Globe
} from 'lucide-react';
import { animate, useMotionValue, useTransform, useInView, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';
import CalificarPage from './CalificarPage';
import WhatsAppFaqForm from './WhatsAppFaqForm';
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
            { name: lang === 'es' ? 'Evaluación Visual Integral' : 'Comprehensive Visual Exam', href: '#servicios', desc: lang === 'es' ? 'Graduación precisa y fondo de ojo' : 'Accurate refraction & fundus exam', icon: Eye },
            { name: lang === 'es' ? 'Para Toda la Familia' : 'For the Whole Family', href: '#edades', desc: lang === 'es' ? 'Niños, adultos y personas mayores' : 'Kids, adults, and seniors', icon: Users },
            { name: lang === 'es' ? 'Fotografía de Retina' : 'Retinal Photography', href: '#servicios', desc: lang === 'es' ? 'Diagnóstico digital de retina' : 'Digital retinal imaging', icon: Camera },
            { name: lang === 'es' ? 'Toma de Presión Ocular' : 'Eye Pressure Test', href: '#servicios', desc: lang === 'es' ? 'Control preventivo de glaucoma' : 'Glaucoma screening', icon: Activity },
          ],
        },
        {
          title: t.specialties,
          items: [
            { name: lang === 'es' ? 'Valoración de Cataratas' : 'Cataract Assessment', href: '#servicios', desc: lang === 'es' ? 'Evaluación y orientación médica' : 'Evaluation & medical guidance', icon: Stethoscope },
            { name: lang === 'es' ? 'Evaluación de Ojo Seco' : 'Dry Eye Evaluation', href: '#servicios', desc: lang === 'es' ? 'Alivio de resequedad e irritación' : 'Relief for irritation and dryness', icon: Droplets },
            { name: lang === 'es' ? 'Lentes de Contacto' : 'Contact Lenses', href: '#servicios', desc: lang === 'es' ? 'Adaptación personalizada y cómoda' : 'Custom, comfortable lens fitting', icon: Contact },
          ],
        },
        {
          title: t.methodology,
          items: [
            { name: lang === 'es' ? 'Proceso de Consulta' : 'Exam Step-by-Step', href: '#proceso', desc: lang === 'es' ? 'Paso a paso de tu cita médica' : 'What to expect at your appointment', icon: CheckCircle2 },
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
          title: lang === 'es' ? 'La Clínica' : 'Our Practice',
          items: [
            { name: t.drName, href: '#doctor', desc: t.drDesc, icon: Award },
            { name: t.whyUs, href: '#beneficios', desc: t.whyUsDesc, icon: ShieldCheck },
          ],
        },
        {
          title: lang === 'es' ? 'Experiencia y Espacio' : 'Experience & Clinic',
          items: [
            { name: t.facilities, href: '#galeria', desc: t.facilitiesDesc, icon: Camera },
            { name: t.testimonials, href: '#testimonios', desc: t.testimonialsDesc, icon: Users },
            { name: t.rate, href: '#calificar', desc: t.rateDesc },
          ],
        },
      ],
    },
    {
      id: 'faq',
      name: t.faq,
      href: '#faq',
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
      description: 'Equipos avanzados para diagnósticos precisos y detallados.',
      icon: Zap,
    },
    {
      title: 'Atención personalizada',
      description: 'Cada paciente recibe el tiempo y la dedicación que su salud visual merece.',
      icon: ShieldCheck,
    },
    {
      title: 'Experiencia clínica',
      description: <>Más de <span className="text-[rgb(122,24,35)] font-bold"><AnimatedNumber value={18} /></span> años de trayectoria profesional y formación académica constante.</>,
      icon: Award,
    },
    {
      title: 'Enfoque preventivo',
      description: 'Detectamos problemas antes de que afecten tu calidad de vida.',
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
      question: '¿Cada cuánto debo hacerme un examen de la vista?',
      answer: 'Se recomienda realizar un examen visual completo al menos una vez al año, especialmente si usas lentes, trabajas mucho frente a pantallas o tienes antecedentes familiares de problemas oculares.'
    },
    {
      question: '¿Qué incluye la evaluación visual integral?',
      answer: 'Incluye la medición de tu agudeza visual, refracción para determinar tu graduación, examen de fondo de ojo, toma de presión ocular y evaluación de la salud externa del ojo.'
    },
    {
      question: '¿Atienden a niños y adultos mayores?',
      answer: 'Sí, brindamos atención personalizada para todas las edades. Adaptamos nuestras pruebas según las necesidades de niños, jóvenes, adultos y personas de la tercera edad.'
    },
    {
      question: '¿Necesito cita previa para atenderme?',
      answer: 'Sí, trabajamos bajo un sistema de citas para garantizarte el tiempo y la atención de calidad que tu salud visual merece. Podés agendar fácilmente por WhatsApp o llamada.'
    },
    {
      question: '¿Cuánto tiempo dura la consulta?',
      answer: 'Una evaluación integral suele durar entre 30 y 45 minutos, dependiendo de las pruebas adicionales que tu caso específico pueda requerir.'
    },
    {
      question: '¿Qué pasa si no me adapto a mis nuevos lentes o graduación?',
      answer: 'Contamos con una Garantía de Adaptación Visual de 30 días. Si durante el primer mes sientes cualquier incomodidad o dificultad de enfoque con tus nuevos lentes (especialmente en multifocales o progresivos), el Dr. Fabio Mora te realiza una reevaluación completa y el reajuste de tus lentes sin costo adicional.'
    },
    {
      question: '¿Cuáles métodos de pago aceptan y puedo usar mis propios aros?',
      answer: 'Aceptamos pagos en efectivo, SINPE Móvil, tarjetas de crédito y débito, y facilidades con Tasa Cero. Además, emitimos factura electrónica para reintegros con seguros o asociaciones. Y sí, si tienes una montura favorita en buen estado, podemos adaptarle únicamente tus nuevos cristales.'
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
      title: 'Evaluación visual integral',
      category: 'Diagnóstico y Exámenes',
      categoryId: 'diag',
      description: 'Examen completo para conocer con precisión tu estado visual y orientar la mejor solución.',
      icon: Eye,
    },
    {
      title: 'Fotografía de retina',
      category: 'Especialidades Oculares',
      categoryId: 'spec',
      description: 'Valoración de la salud ocular mediante imágenes que ayudan a detectar alteraciones a tiempo.',
      icon: Camera,
    },
    {
      title: 'Toma de presión ocular',
      category: 'Diagnóstico y Exámenes',
      categoryId: 'diag',
      description: 'Medición orientada a detectar factores de riesgo relacionados con glaucoma y control ocular.',
      icon: Activity,
    },
    {
      title: 'Valoración de cataratas',
      category: 'Especialidades Oculares',
      categoryId: 'spec',
      description: 'Diagnóstico y orientación para entender el estado de tu visión y el manejo recomendado.',
      icon: Stethoscope,
    },
    {
      title: 'Evaluación de ojo seco',
      category: 'Especialidades Oculares',
      categoryId: 'spec',
      description: 'Revisión de molestias o resequedad para proponerte una solución más cómoda y efectiva.',
      icon: Droplets,
    },
    {
      title: 'Lentes de contacto',
      category: 'Lentes y Contactología',
      categoryId: 'lens',
      description: 'Adaptación personalizada para opciones esféricas, astigmatismo y multifocal según tu caso.',
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
        content: 'Everything was explained with great clarity and I felt confident throughout the exam. The care was very professional and warm.',
      },
      {
        name: 'Carlos R.',
        role: 'Patient',
        content: 'I had been experiencing eye fatigue for a while and left with clear guidance. The process was organized, fast, and very thorough.',
      },
      {
        name: 'Andrea M.',
        role: 'Patient',
        content: 'Excellent treatment and high trust. They helped me understand the best solution for my vision and my glasses.',
      },
    ];
  }
  return [
    {
      name: 'María G.',
      role: 'Paciente',
      content: 'Me explicaron todo con mucha claridad y sentí seguridad durante toda la evaluación. La atención fue muy profesional y cercana.',
    },
    {
      name: 'Carlos R.',
      role: 'Paciente',
      content: 'Tenía molestias visuales desde hacía tiempo y salí con una orientación clara. El proceso fue ordenado, rápido y muy completo.',
    },
    {
      name: 'Andrea M.',
      role: 'Paciente',
      content: 'Excelente trato y mucha confianza. Me ayudaron a entender cuál era la mejor solución para mi visión y mis lentes.',
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
      waMessage: lang === 'es' ? 'Hola Dr. Fabio, deseo agendar una valoración visual para mi hijo(a).' : 'Hello Dr. Fabio, I would like to book a pediatric eye exam for my child.',
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
      waMessage: lang === 'es' ? 'Hola Dr. Fabio, paso muchas horas en pantallas/trabajo y deseo agendar mi examen visual.' : 'Hello Dr. Fabio, I spend long hours on screens and would like to schedule an eye exam.',
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
      waMessage: lang === 'es' ? 'Hola Dr. Fabio, deseo agendar una consulta de salud visual para adulto mayor.' : 'Hello Dr. Fabio, I would like to book a comprehensive senior eye care consultation.',
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

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      return (localStorage.getItem('optica_lang') as Language) || 'es';
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

  const [currentView, setCurrentView] = useState<'home' | 'calificar'>('home');

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#calificar') {
        setCurrentView('calificar');
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
        />
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
                              cat.id === 'servicios' ? 'w-[640px] -left-28' : 'w-[480px] -left-16'
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
                                            if (item.href === '#calificar') {
                                              e.preventDefault();
                                              setCurrentView('calificar');
                                              window.location.hash = '#calificar';
                                            }
                                            setDesktopDropdown(null);
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



                <a
                  href="tel:+50672760215"
                  className="hidden sm:inline-flex items-center justify-center h-9 px-4 rounded-[8px] bg-white border border-[#E3E5EC] text-[#15171C] text-[11px] font-bold hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 mr-2 text-[rgb(122,24,35)]" />
                  Llamar
                </a>

                <a
                  href="https://wa.me/50672760215"
                  className="hidden sm:inline-flex items-center justify-center h-9 px-4 rounded-[8px] bg-[rgb(122,24,35)] text-white text-[11px] font-bold whitespace-nowrap hover:bg-[rgb(142,30,42)] shadow-md transition-all btn-shimmer"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-2" />
                  Agendar
                </a>

                {/* Botón Menú Hamburguesa para Móviles */}
                <button
                  onClick={() => setIsMenuOpen(true)}
                  aria-label="Abrir menú de navegación"
                  className="lg:hidden inline-flex items-center gap-2 h-10 px-3.5 rounded-xl bg-white border border-[#E3E5EC] text-[#15171C] font-semibold text-[12px] shadow-sm hover:border-[rgb(122,24,35)] active:scale-95 transition-all"
                >
                  <Menu className="w-5 h-5 text-[rgb(122,24,35)]" />
                  <span className="text-[11px] font-bold tracking-wider uppercase">Menú</span>
                </button>
              </div>
            </div>

            {/* Menú Lateral Deslizante tipo Hamburguesa (Mobile Drawer) */}
            <AnimatePresence>
              {isMenuOpen && (
                <div className="fixed inset-0 z-[9999] flex justify-end">
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
                    className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] h-full bg-white shadow-2xl flex flex-col justify-between overflow-hidden"
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
                        Navegación por categorías
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
                                onClick={() => setIsMenuOpen(false)}
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
                                    {totalItems} opciones
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
                                                if (item.href === '#calificar') {
                                                  e.preventDefault();
                                                  setCurrentView('calificar');
                                                  window.location.hash = '#calificar';
                                                }
                                                setIsMenuOpen(false);
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
                          <span>Plaza Higuerones, Local 23</span>
                        </div>
                        <p className="text-[10px] text-gray-500 pl-5.5">San Rafael Abajo de Desamparados</p>
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
                          className="inline-flex items-center justify-center gap-1.5 h-12 rounded-xl bg-white border border-[#E3E5EC] text-[#15171C] text-[12px] font-bold shadow-xs active:scale-95 transition-transform"
                        >
                          <Phone className="w-4 h-4 text-[rgb(122,24,35)]" />
                          Llamar
                        </a>
                        <a
                          href="https://wa.me/50672760215"
                          className="inline-flex items-center justify-center gap-1.5 h-12 rounded-xl bg-[rgb(122,24,35)] text-white text-[12px] font-bold shadow-md active:scale-95 transition-transform"
                        >
                          <MessageCircle className="w-4 h-4" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </header>

          <main id="main-content" role="main">
          {/* Hero Section */}
          <section id="inicio" className="w-full bg-gradient-to-b from-slate-50/80 via-white to-white py-4 md:py-7">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[14px] min-h-[500px] md:min-h-[600px] bg-gray-200"
            >
              {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <motion.img 
                    initial={{ filter: 'blur(8px)', scale: 1.06 }}
                    animate={{ filter: 'blur(0px)', scale: 1 }}
                    transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
                    src="https://content.pancake.vn/web-media-262/5c/03/26/a7/7e1e233b9f04b56292c21db5debf9fc7fe2a4f04ec99bf461b126061-w:1200-h:618-l:28899-t:image/jpeg.jpeg" 
                    alt="Examen visual profesional con tecnología avanzada" 
                    className="w-full h-full object-cover object-right md:object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/90 to-transparent md:bg-gradient-to-r md:from-white/95 md:via-white/75 md:to-transparent"></div>
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
                      href="https://wa.me/50672760215"
                      className="inline-flex items-center justify-center h-12 px-7 rounded-xl bg-[rgb(122,24,35)] text-white text-[14px] font-bold cta-primary btn-shimmer w-full sm:w-auto transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {lang === 'es' ? 'Agendar por WhatsApp' : 'Book via WhatsApp'}
                    </a>

                    <a
                      href="tel:+50672760215"
                      className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-white text-[#15171C] text-[14px] font-bold border border-[#E3E5EC] cta-secondary w-full sm:w-auto transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {lang === 'es' ? 'Llamar ahora' : 'Call now'}
                    </a>
                  </motion.div>


                </div>

                <div className="relative min-h-[150px] md:min-h-full hidden md:block" />
              </div>
            </motion.div>
            </div>
          </section>

          {/* Social Proof */}
          <section className="w-full py-6 md:py-8 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { title: <><span className="text-[rgb(122,24,35)]">+</span><AnimatedNumber value={18} /></>, desc: 'años de trayectoria' },
                { title: 'Integral', desc: 'evaluación completa y clara' },
                { title: 'Familia', desc: 'atención para todas las edades' },
                { title: 'Directo', desc: 'contacto por llamada o WhatsApp' },
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
          <section className="w-full py-8 md:py-12 bg-slate-50/60">
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
                    Urgencia
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
                    { title: 'Visión borrosa', desc: 'Si forzás la vista para enfocar, es buen momento para revisar.', icon: Eye },
                    { title: 'Cansancio ocular', desc: 'Molestias con pantallas o lectura prolongada no deberían normalizarse.', icon: Clock },
                    { title: 'Actuá hoy', desc: 'Agendá tu examen y resolvé tus dudas con atención profesional.', icon: CheckCircle2, dark: true },
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
          <section id="beneficios" className="w-full py-8 md:py-12 bg-white border-t border-gray-100">
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
          <section className="w-full py-10 md:py-14 bg-slate-50/70 border-y border-gray-200/80">
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
                          desc: lang === 'es' ? 'Elegís la vía más rápida para coordinar tu cita según tu horario.' : 'Choose the fastest way to arrange your consultation at your convenience.' 
                        },
                        { 
                          step: lang === 'es' ? 'Paso 2' : 'Step 2', 
                          title: lang === 'es' ? 'Recibís evaluación visual integral' : 'Receive comprehensive visual evaluation', 
                          desc: lang === 'es' ? 'Se evalúa tu visión, retina y presión ocular, explicando los hallazgos con claridad.' : 'Your vision, retina, and eye pressure are evaluated, explaining all findings clearly.' 
                        },
                        { 
                          step: lang === 'es' ? 'Paso 3' : 'Step 3', 
                          title: lang === 'es' ? 'Salís con una recomendación clara' : 'Leave with transparent clinical recommendations', 
                          desc: lang === 'es' ? 'Entendés con exactitud qué necesitás y cuál es la mejor solución para tus ojos.' : 'Understand precisely what you need with honest advice and visual solutions.', 
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
          <section id="servicios" className="w-full py-8 md:py-12 bg-white">
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

                  <a href="https://wa.me/50672760215" className="inline-flex items-center gap-2 mt-4 text-[13px] sm:text-[14px] font-bold text-[#15171C] group-hover/link:text-[rgb(122,24,35)] hover:text-[rgb(122,24,35)] transition-colors group/link">
                    <span>Reservar cita</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </a>
                </motion.article>
              ))}
            </div>
            </div>
          </section>

          {/* Cuidado Visual Multigeneracional - Niños, Adultos y Personas Mayores */}
          <section id="edades" className="w-full py-10 md:py-16 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/70 border-y border-gray-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Encabezado */}
              <div className="text-center max-w-3xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 h-7 px-3.5 rounded-full bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] text-[11px] sm:text-[12px] uppercase tracking-wider font-bold shadow-2xs border border-[rgb(122,24,35)]/20"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[rgb(122,24,35)] animate-pulse" />
                  <span>Atención Integral para Toda la Familia</span>
                </motion.div>

                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] leading-tight tracking-tight font-bold text-[#14161B]"
                >
                  Cuidado visual especializado para <span className="text-[rgb(122,24,35)]">cada etapa de tu vida</span>
                </motion.h2>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mt-3.5 text-[15px] sm:text-[16px] text-[#555963] leading-relaxed"
                >
                  Las necesidades de los ojos cambian con los años. El Dr. Fabio Mora adapta cada examen con tecnología de vanguardia, paciencia y un enfoque clínico cercano: desde el desarrollo escolar en la infancia, hasta el confort digital en adultos y la salud ocular preventiva en personas mayores.
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
                          className="w-full inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-white text-[rgb(122,24,35)] hover:bg-[rgb(122,24,35)]/5 border-2 border-[rgb(122,24,35)] text-[13.5px] sm:text-[14px] font-bold shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
                        >
                          <MessageCircle className="w-4 h-4 text-[rgb(122,24,35)]" />
                          <span>{group.buttonText}</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[rgb(122,24,35)]" />
                        </a>
                      </div>
                    </motion.article>
                  );
                })}
              </div>


            </div>
          </section>

          {/* Gallery */}
          <section id="galeria" className="w-full py-8 md:py-12 bg-slate-50/60 border-y border-gray-100">
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

                <a href="https://wa.me/50672760215" className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,28,41)] text-white text-[13px] sm:text-[14px] font-semibold whitespace-nowrap shadow-sm hover:shadow-md transition-all active:scale-95 shrink-0 self-start md:self-center btn-shimmer">{lang === 'es' ? 'Agendar valoración' : 'Book appointment'}</a>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-[1.08fr_0.92fr] gap-3">
                <motion.article 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl overflow-hidden min-h-[320px] md:min-h-[360px] pro-card shadow-md cursor-pointer"
                >
                  <img
                    src="https://content.pancake.vn/web-media-262/0a/72/2c/cd/859ae20a5707f68e7b103f3d02920717fdcd8ed948237733db5ab183-w:700-h:467-l:39011-t:image/jpeg.jpeg"
                    alt="Evaluación visual profesional"
                    className="absolute inset-0 w-full h-full object-cover blur-[2px] md:blur-[2.5px] scale-[1.02] group-hover:blur-none group-hover:scale-[1.06] transition-[filter,transform] duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
                  <div className="absolute left-0 right-0 bottom-0 p-5 md:p-6 transform transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="inline-flex items-center h-7 px-3.5 rounded-full bg-white/90 text-[11px] sm:text-[12px] uppercase tracking-wider font-bold text-[#6A6E79]">
                      Atención visual
                    </div>
                    <h3 className="mt-3 max-w-[24ch] text-[20px] sm:text-[22px] md:text-[24px] leading-[1.1] tracking-tight font-bold text-white">
                      Evaluación visual integral con acompañamiento profesional
                    </h3>
                  </div>
                </motion.article>

                <div className="grid grid-cols-1 gap-3">
                  <motion.article 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="group relative rounded-2xl overflow-hidden min-h-[173px] pro-card shadow-md cursor-pointer"
                  >
                    <img
                      src="https://content.pancake.vn/web-media-262/3d/24/a3/d4/3a74f769e1ca5261250f65e2e9911c8164ad0022ef125ae3dd451852-w:1200-h:675-l:106469-t:image/jpeg.jpeg"
                      alt="Tecnología para diagnóstico visual"
                      className="absolute inset-0 w-full h-full object-cover blur-[2px] md:blur-[2.5px] scale-[1.02] group-hover:blur-none group-hover:scale-[1.06] transition-[filter,transform] duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
                    <div className="absolute left-0 right-0 bottom-0 p-4 transform transition-transform duration-500 group-hover:-translate-y-1">
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
                      className="group relative rounded-2xl overflow-hidden min-h-[173px] pro-card shadow-md cursor-pointer"
                    >
                      <img
                        src="https://content.pancake.vn/web-media-262/2f/b0/37/cd/56114753eecc12cb63eefa879704d4bf40e014559f4c14139c87d036-w:297-h:400-l:19848-t:image/jpeg.jpeg"
                        alt="Atención profesional personalizada"
                        className="absolute inset-0 w-full h-full object-cover blur-[2px] md:blur-[2.5px] scale-[1.02] group-hover:blur-none group-hover:scale-[1.06] transition-[filter,transform] duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
                      <div className="absolute left-0 right-0 bottom-0 p-4 transform transition-transform duration-500 group-hover:-translate-y-1">
                        <h3 className="max-w-[12ch] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.15] tracking-tight font-bold text-white">
                          Atención cercana
                        </h3>
                      </div>
                    </motion.article>

                    <motion.article 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="group relative rounded-2xl overflow-hidden min-h-[173px] pro-card shadow-md cursor-pointer"
                    >
                      <img
                        src="https://content.pancake.vn/web-media-262/4f/26/e9/07/5c5601a47c49055462953a64179c907190bdb5f17135f2be2b99eb10-w:297-h:400-l:16706-t:image/jpeg.jpeg"
                        alt="Recomendación de soluciones visuales"
                        className="absolute inset-0 w-full h-full object-cover blur-[2px] md:blur-[2.5px] scale-[1.02] group-hover:blur-none group-hover:scale-[1.06] transition-[filter,transform] duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
                      <div className="absolute left-0 right-0 bottom-0 p-4 transform transition-transform duration-500 group-hover:-translate-y-1">
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
          <section id="testimonios" className="w-full py-8 md:py-12 bg-white">
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
                  <a href="https://wa.me/50672760215" className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,28,41)] text-white text-[13px] sm:text-[14px] font-semibold whitespace-nowrap shadow-sm hover:shadow-md transition-all active:scale-95 btn-shimmer">Agendar valoración</a>
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
                      <div>
                        <h3 className="text-[15px] sm:text-[16px] font-bold text-[#15171C]">{t.name}</h3>
                        <p className="text-[11px] sm:text-[12px] text-[#7A7F8A]">{t.role}</p>
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
                    <span className="text-[rgb(122,24,35)] font-bold">Atención 100% personalizada</span>
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
                        <Award className="w-3.5 h-3.5 text-amber-300" /> Compromiso con tu visión
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
                      className="inline-flex items-center justify-center h-11 px-7 rounded-xl bg-white text-[rgb(122,24,35)] text-[13px] sm:text-[14px] font-bold shadow-md hover:bg-gray-100 transition-all active:scale-95 btn-shimmer shrink-0"
                    >
                      Quiero agendar mi cita
                    </a>
                  </div>
                </motion.article>
              </div>
            </motion.div>
            </div>
          </section>

          {/* Doctor Section */}
          <section id="doctor" className="w-full py-8 md:py-12 bg-slate-50/60 border-y border-gray-100">
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
                    src="https://content.pancake.vn/web-media-262/f8/7a/8c/db/28a595fabedd02a19921777a0ab62c9a2d54e3e34ae3176dbb60cc55-w:1760-h:2370-l:7142028-t:image/png.png" 
                    alt="Dr. Fabio Mora Medina"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-[filter,transform] duration-[1200ms] ease-in-out blur-0 md:blur-0 md:group-hover/doctor:blur-[12px] md:scale-100 md:group-hover/doctor:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-6 p-5 flex justify-center transition-all duration-500 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover/doctor:opacity-100 md:group-hover/doctor:translate-y-0 pointer-events-none">
                    <div className="bg-white px-5 py-4 rounded-[12px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 w-full max-w-[240px] relative z-20">
                      <p className="text-[15px] font-black text-[rgb(122,24,35)] text-center leading-tight uppercase tracking-wider">
                        ¿Me ves borroso?
                      </p>
                      <p className="mt-2 text-[11px] font-bold text-[#1F2937] text-center leading-tight">
                        Es momento de agendar tu revisión visual profesional
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F3F4F7] via-transparent to-transparent md:hidden"></div>
                </div>

                <div className="flex-1 px-5 md:px-10 py-10 md:py-12 flex flex-col justify-center text-center md:text-left">
                  <div className="flex justify-center md:justify-start">
                    <span className="inline-flex items-center h-7 px-3.5 rounded-full bg-white text-[11px] sm:text-[12px] uppercase tracking-wider font-bold text-[#7C808B] shadow-sm">
                      Confianza profesional
                    </span>
                  </div>

                  <h2 className="mt-6 md:mt-4 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[1.1] tracking-tight font-bold text-[#15171C]">
                    Dr. Fabio Mora Medina
                  </h2>

                  <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-3 max-w-[760px] md:mx-0">
                    {[
                      { title: 'Formación', desc: 'Licenciado en Optometría y Máster en Atención Optométrica en Patología Ocular.' },
                      { title: 'Experiencia', desc: <>Más de <span className="text-[rgb(122,24,35)] font-bold"><AnimatedNumber value={18} /></span> años dedicados al cuidado visual de familias y experiencia clínica comprobada.</> },
                      { title: 'Respaldo', desc: 'Miembro de Canadian Vision Care y trayectoria académica y humanitaria internacional.' },
                    ].map((item, i) => (
                      <motion.article 
                        key={i} 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        className="bg-white rounded-[12px] px-4 py-5 text-left pro-card shadow-sm border border-gray-100 transition-all hover:shadow-md"
                      >
                        <h3 className="text-[15px] sm:text-[16px] font-bold text-[#15171C]">{item.title}</h3>
                        <p className="mt-2 text-[13px] sm:text-[13.5px] leading-[1.55] text-[#555963]">
                          {item.desc}
                        </p>
                      </motion.article>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-center md:justify-start">
                    <a href="https://wa.me/50672760215" className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,28,41)] text-white text-[13px] sm:text-[14px] font-semibold cta-primary btn-shimmer shadow-sm hover:shadow-md transition-all active:scale-95 shrink-0">
                      Agendá tu examen hoy
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
                href="https://wa.me/50672760215" 
                className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,28,41)] text-white text-[13px] sm:text-[14px] font-semibold whitespace-nowrap shadow-sm hover:shadow-md transition-all active:scale-95 shrink-0 self-start lg:self-center"
              >
                Agendá por WhatsApp
              </a>
            </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          {/* FAQ Section */}
          <section id="faq" className="w-full py-8 md:py-12 bg-slate-50/70 border-y border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
                <span className="inline-flex items-center gap-1.5 h-6 px-3.5 rounded-full bg-white text-[9px] uppercase tracking-[0.14em] font-semibold text-[#767A84] shadow-xs border border-gray-200/60 mb-4">
                  <HelpCircle className="w-3.5 h-3.5 text-[rgb(122,24,35)]" /> Preguntas frecuentes
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

              {/* Formulario de Consulta Rápida por WhatsApp */}
              <WhatsAppFaqForm lang={lang} />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contacto" className="w-full py-8 md:py-12 bg-white pb-16 md:pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[14px] p-5 shadow-sm"
            >
              <div className="flex justify-start">
                <span className="inline-flex items-center h-7 px-3.5 rounded-full bg-[#F2F3F7] text-[11px] sm:text-[12px] uppercase tracking-wider font-bold text-[#7C808B] shadow-sm">
                  Contacto
                </span>
              </div>

              <h2 className="mt-4 text-[24px] sm:text-[28px] md:text-[30px] leading-[1.08] tracking-tight font-bold text-[#15171C]">
                No te quedés sin <span className="text-[rgb(122,24,35)]">tu cita</span>
              </h2>

              <div className="mt-6 grid lg:grid-cols-[1fr_340px] gap-5">
                {/* Left: Expanded Map */}
                <div className="flex flex-col h-full">
                  <div className="flex-1 min-h-[340px] rounded-[16px] overflow-hidden border border-[#E3E5EC] shadow-sm relative group">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15722.057649214696!2d-84.081993!3d9.8910441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e3edbed430b5%3A0x4e83f4dbd6b649b2!2s%C3%93pticas%20Popular%20Plaza%20Higuerones%3A%20Aros%20I%20Lentes%20I%20Servicios%20Oft%C3%A1lmicos%20I%20Ex%C3%A1menes%20de%20Vista!5e0!3m2!1ses!2sco!4v1707761517794!5m2!1ses!2sco" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de Ópticas Popular"
                      className="grayscale-[0.2] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0 w-full h-full min-h-[300px]"
                    ></iframe>
                    <div className="absolute top-4 left-4 pointer-events-none">
                      <span className="inline-flex items-center h-6 px-3 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-[#15171C] shadow-md border border-white">
                        <MapPin className="w-3 h-3 mr-1.5 text-[rgb(122,24,35)]" /> Plaza Higuerones
                      </span>
                    </div>
                  </div>

                  {/* Botones directos de Waze y Google Maps (Costa Rica) */}
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <a
                      href="https://waze.com/ul?ll=9.8910441,-84.081993&navigate=yes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-[#33CCFF] hover:bg-[#28b8e6] text-[#0b3340] font-bold text-[13px] shadow-sm hover:shadow-md transition-all active:scale-95"
                    >
                      <Navigation className="w-4 h-4 text-[#0b3340]" />
                      <span>Abrir ruta en Waze</span>
                    </a>
                    <a
                      href="https://maps.google.com/?q=Ópticas+Popular+Plaza+Higuerones+San+Rafael+Abajo+Desamparados"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-[#15171C] font-bold text-[13px] shadow-sm hover:shadow-md transition-all active:scale-95"
                    >
                      <MapPin className="w-4 h-4 text-[rgb(122,24,35)]" />
                      <span>Abrir en Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Right: Contact Info "Franja" */}
                <div className="bg-[#F8F9FB] rounded-[16px] p-6 flex flex-col border border-[#E3E5EC] shadow-sm">
                  <div className="mb-6">
                    <h3 className="text-[15px] font-bold text-[#15171C] tracking-tight">Reservá tu valoración</h3>
                    <p className="mt-1.5 text-[11px] leading-[1.6] text-[#6D727D]">
                      Coordiná tu cita hoy mismo y recibí atención profesional personalizada.
                    </p>
                  </div>

                  <div className="flex-1 space-y-6">
                    {/* Phone */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm border border-[#E3E5EC] flex-shrink-0">
                        <Phone className="w-4 h-4 text-[rgb(122,24,35)]" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold text-[#7C808B] uppercase tracking-[0.1em]">Teléfonos</h4>
                        <p className="mt-0.5 text-[13px] text-[#15171C] font-bold tracking-tight">+506 2515 0002</p>
                        <p className="text-[13px] text-[#15171C] font-bold tracking-tight">+506 7276 0215</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm border border-[#E3E5EC] flex-shrink-0">
                        <MessageCircle className="w-4 h-4 text-[rgb(122,24,35)]" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold text-[#7C808B] uppercase tracking-[0.1em]">Correo</h4>
                        <p className="mt-0.5 text-[12px] text-[#15171C] font-bold break-all">fmora@opticaspopular.com</p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm border border-[#E3E5EC] flex-shrink-0">
                        <ArrowUpRight className="w-4 h-4 text-[rgb(122,24,35)]" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold text-[#7C808B] uppercase tracking-[0.1em]">Ubicación</h4>
                        <p className="mt-0.5 text-[12px] text-[#15171C] font-bold leading-[1.5]">
                          Plaza Higuerones, Local 23.<br />
                          San Rafael Abajo, Desamparados.
                        </p>
                      </div>
                    </div>

                    {/* Schedule */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm border border-[#E3E5EC] flex-shrink-0">
                        <Clock className="w-4 h-4 text-[rgb(122,24,35)]" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold text-[#7C808B] uppercase tracking-[0.1em]">Horario</h4>
                        <p className="mt-0.5 text-[12px] text-[#15171C] font-bold">Lunes a Sábado</p>
                        <p className="text-[11px] text-[#6D727D]">Bajo cita previa</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3">
                    <a 
                      href="tel:+50672760215" 
                      className="inline-flex items-center justify-center h-12 px-6 rounded-[12px] bg-white text-[#15171C] text-[11px] font-bold border border-[#E3E5EC] shadow-sm transition-all hover:bg-gray-50 active:scale-[0.98]"
                    >
                      Llamar ahora
                    </a>
                    <a 
                      href="https://wa.me/50672760215" 
                      className="inline-flex items-center justify-center h-12 px-6 rounded-[12px] bg-[rgb(122,24,35)] text-white text-[11px] font-bold shadow-lg shadow-[rgb(122,24,35)]/20 transition-all hover:opacity-90 active:scale-[0.98]"
                    >
                      Agendar por WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid sm:grid-cols-3 gap-3">
                <a 
                  href="https://www.facebook.com/opticaspopularcr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar nuestra página de Facebook" 
                  className="bg-[#F3F4F7] rounded-[12px] px-4 py-3 text-[11px] md:text-[11px] font-bold text-[#15171C] text-center pro-card shadow-sm flex items-center justify-center gap-2 transition-all hover:bg-[#1877F2] hover:text-white hover:shadow-lg hover:shadow-[#1877F2]/20"
                >
                  <Facebook className="w-3.5 h-3.5" /> Facebook
                </a>
                <a 
                  href="https://www.instagram.com/opticaspopularcr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar nuestro perfil de Instagram" 
                  className="bg-[#F3F4F7] rounded-[12px] px-4 py-3 text-[11px] md:text-[11px] font-bold text-[#15171C] text-center pro-card shadow-sm flex items-center justify-center gap-2 transition-all hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:shadow-lg hover:shadow-[#ee2a7b]/20"
                >
                  <Instagram className="w-3.5 h-3.5" /> Instagram
                </a>
                <a 
                  href="#" 
                  aria-label="Visitar nuestro perfil de TikTok" 
                  className="bg-[#F3F4F7] rounded-[12px] px-4 py-3 text-[11px] md:text-[11px] font-bold text-[#15171C] text-center pro-card shadow-sm flex items-center justify-center gap-2 transition-all hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/20"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.1.7.1 1.41.53 1.96.44.53 1.11.85 1.79.9.69.05 1.4-.16 1.97-.55.62-.43 1-1.14 1.05-1.89.01-3.22-.01-6.43.01-9.64z"/></svg>
                  TikTok
                </a>
              </div>

              {/* Barra de Facilidades y Métodos de Pago aceptados en Costa Rica */}
              <div className="mt-5 rounded-2xl bg-[#F8F9FA] border border-gray-200/80 p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 border-b border-gray-200/70">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[rgb(122,24,35)]" />
                    <span className="text-[13.5px] font-bold text-[#15171C]">Facilidades y Métodos de Pago</span>
                  </div>
                  <span className="text-[11.5px] text-gray-500 font-medium">Comodidad y transparencia en tu consulta</span>
                </div>

                <div className="mt-3.5 grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                  <div className="bg-white rounded-xl p-3 border border-gray-200/60 shadow-2xs flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[12.5px] font-bold text-[#15171C]">SINPE Móvil</div>
                      <div className="text-[10.5px] text-gray-500">Transferencia al 7276-0215</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 border border-gray-200/60 shadow-2xs flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[12.5px] font-bold text-[#15171C]">Tarjetas</div>
                      <div className="text-[10.5px] text-gray-500">Débito y Crédito en datáfono</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 border border-gray-200/60 shadow-2xs flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[12.5px] font-bold text-[#15171C]">Tasa Cero</div>
                      <div className="text-[10.5px] text-gray-500">Planes en cuotas autorizadas</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 border border-gray-200/60 shadow-2xs flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                      <Receipt className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[12.5px] font-bold text-[#15171C]">Factura Electrónica</div>
                      <div className="text-[10.5px] text-gray-500">Para seguros médicos o INS</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            </div>
          </section>
          </main>

          {/* Footer Corporativo de Alto Contraste y Bilingüe */}
          <footer className="w-full bg-[#0c0e12] text-white pt-14 pb-10 border-t border-white/10 relative overflow-hidden">
            {/* Línea decorativa superior con degradado rojo vino */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[rgb(122,24,35)] to-transparent opacity-80"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
                {/* Columna 1: Identidad Clínica & Aval */}
                <div>
                  <a href="#inicio" className="inline-block mb-4 group">
                    <div className="bg-white px-3.5 py-2 rounded-xl border border-white/20 shadow-md inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <img 
                        src="/images/logo-opticas-popular.png" 
                        alt="Logo Oficial Ópticas Popular" 
                        className="h-9 w-auto object-contain" 
                      />
                    </div>
                  </a>
                  <div className="leading-tight mb-2">
                    <span className="text-[14px] font-bold text-white block">{t.footer.doctorName}</span>
                    <span className="text-[10.5px] font-bold text-rose-300 uppercase tracking-wider">{t.footer.doctorTitle}</span>
                  </div>
                  <p className="text-[13.5px] leading-relaxed text-gray-300">
                    {t.footer.description}
                  </p>

                  {/* Insignia de Google Reviews */}
                  <a
                    href="https://maps.google.com/?q=Ópticas+Popular+Plaza+Higuerones+San+Rafael+Abajo+Desamparados"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white transition-all group"
                  >
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[12px] font-semibold text-gray-200 group-hover:text-white transition-colors">
                      {t.footer.googleRatingText}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* Incorporación Profesional */}
                  <div className="flex items-center gap-2 text-[11.5px] text-gray-400 mt-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{t.footer.professionalLicense}</span>
                  </div>
                </div>
                
                {/* Columna 2: Navegación Rápida */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-4 rounded-full bg-[rgb(122,24,35)]"></div>
                    <h4 className="text-[13px] font-bold text-white uppercase tracking-wider">{t.footer.navTitle}</h4>
                  </div>
                  <ul className="space-y-2.5 text-[13.5px]">
                    <li>
                      <a href="#inicio" className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                        <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                        <span>{t.footer.navHome}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#servicios" className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                        <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                        <span>{t.footer.navServices}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#edades" className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                        <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                        <span>{t.footer.navAges}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#doctor" className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                        <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                        <span>{t.footer.navDoctor}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#por-que-elegirnos" className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                        <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                        <span>{t.footer.navWhyUs}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#testimonios" className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                        <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                        <span>{t.footer.navTestimonials}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#faq" className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                        <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                        <span>{t.footer.navFaq}</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#calificar"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentView('calificar');
                          window.location.hash = '#calificar';
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-semibold"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                        <span>{t.footer.navRate}</span>
                        <span className="px-1.5 py-0.5 rounded text-[9.5px] font-bold bg-[rgb(122,24,35)] text-white uppercase tracking-wider ml-1">
                          {t.footer.navRateBadge}
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Columna 3: Servicios Especializados */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-4 rounded-full bg-[rgb(122,24,35)]"></div>
                    <h4 className="text-[13px] font-bold text-white uppercase tracking-wider">{t.footer.servicesTitle}</h4>
                  </div>
                  <ul className="space-y-2.5 text-[13.5px]">
                    <li className="text-gray-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{t.footer.srvExam}</span>
                    </li>
                    <li className="text-gray-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{t.footer.srvRetina}</span>
                    </li>
                    <li className="text-gray-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{t.footer.srvPressure}</span>
                    </li>
                    <li className="text-gray-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{t.footer.srvLenses}</span>
                    </li>
                    <li className="text-gray-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{t.footer.srvContacts}</span>
                    </li>
                    <li className="text-gray-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{t.footer.srvPediatric}</span>
                    </li>
                  </ul>
                </div>

                {/* Columna 4: Ubicación, Horarios y Contacto Directo */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-4 rounded-full bg-[rgb(122,24,35)]"></div>
                    <h4 className="text-[13px] font-bold text-white uppercase tracking-wider">{t.footer.locationTitle}</h4>
                  </div>
                  
                  <div className="space-y-4 text-[13px]">
                    <div className="flex items-start gap-2.5 text-gray-300">
                      <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block text-[13.5px]">{t.footer.address}</strong>
                        <span className="text-gray-400 text-[12.5px] leading-snug block">{t.footer.addressSub}</span>
                        <div className="flex items-center gap-2.5 mt-2">
                          <a
                            href="https://maps.google.com/?q=Ópticas+Popular+Plaza+Higuerones+San+Rafael+Abajo+Desamparados"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11.5px] font-bold text-rose-300 hover:text-white transition-colors"
                          >
                            <span>Google Maps</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                          <span className="text-gray-600">·</span>
                          <a
                            href="https://waze.com/ul?q=Plaza%20Higuerones%20Desamparados"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11.5px] font-bold text-rose-300 hover:text-white transition-colors"
                          >
                            <span>Waze</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-gray-300">
                      <Clock className="w-4 h-4 text-rose-400 shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block text-[13.5px]">{t.footer.hoursTitle}</strong>
                        <span className="text-gray-300">{t.footer.hoursDays}: <strong className="text-white">{t.footer.hoursTime}</strong></span>
                        <span className="text-[12px] text-gray-400 block mt-0.5">{t.footer.hoursSunday}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10 space-y-2">
                      <a
                        href="https://wa.me/50672760215"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,28,41)] text-white font-bold text-[12.5px] transition-all shadow-sm hover:shadow active:scale-98"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>{t.footer.whatsappLabel}: 7276-0215</span>
                      </a>
                      <a
                        href="tel:+50672760215"
                        className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white text-[12px] font-medium transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-rose-300" />
                        <span>{t.footer.phoneLabel}: (+506) 7276-0215</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subfooter inferior */}
              <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-gray-400">
                <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                  <span>© {new Date().getFullYear()} {t.footer.clinicName} · {t.footer.doctorName}. {t.footer.allRights}</span>
                </div>
                <div className="flex items-center gap-5 text-[12px]">
                  <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">{t.footer.privacy}</a>
                  <span className="text-gray-700">·</span>
                  <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">{t.footer.terms}</a>
                  <span className="text-gray-700">·</span>
                  <a href="https://web.localrank.com.co/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rose-300 transition-colors">
                    {t.footer.developedBy}
                  </a>
                </div>
              </div>
            </div>
          </footer>

          {/* Barra de Navegación Rápida Inferior para Móviles */}
          <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-2.5 bg-white/95 backdrop-blur-lg border-t border-gray-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
            <div className="grid grid-cols-3 gap-2 max-w-[460px] mx-auto">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="inline-flex flex-col items-center justify-center h-12 rounded-xl bg-[#F3F4F7] text-[#15171C] text-[11px] font-bold active:scale-95 transition-transform"
              >
                <Menu className="w-4 h-4 text-[rgb(122,24,35)] mb-0.5" />
                <span>Menú</span>
              </button>
              <a
                href="tel:+50672760215"
                className="inline-flex flex-col items-center justify-center h-12 rounded-xl bg-white border border-[#E3E5EC] text-[#15171C] text-[11px] font-bold active:scale-95 transition-transform shadow-xs"
              >
                <Phone className="w-4 h-4 text-[rgb(122,24,35)] mb-0.5" />
                <span>{lang === 'es' ? 'Llamar' : 'Call'}</span>
              </a>
              <a
                href="https://wa.me/50672760215"
                className="inline-flex flex-col items-center justify-center h-12 rounded-xl bg-[rgb(122,24,35)] text-white text-[11px] font-bold active:scale-95 transition-transform shadow-md"
              >
                <MessageCircle className="w-4 h-4 mb-0.5" />
                <span>{lang === 'es' ? 'Cita' : 'Book'}</span>
              </a>
            </div>
          </div>

        
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
                        <Sparkles className="w-3 h-3 text-amber-300" /> Test de Confort Visual
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
                            title: 'Visión borrosa o dificultad para enfocar',
                            desc: 'Me cuesta enfocar de lejos, al manejar o hacia el final del día.',
                            badge: 'Enfoque'
                          },
                          {
                            id: 'pantallas',
                            title: 'Fatiga o pesadez por pantallas',
                            desc: 'Paso muchas horas en computadora o celular y siento ojos cansados o secos.',
                            badge: 'Digital'
                          },
                          {
                            id: 'lentes',
                            title: 'Mis lentes ya tienen más de 1 año',
                            desc: 'Siento que mi graduación cambió o mis aros están rayados y deteriorados.',
                            badge: 'Actualización'
                          },
                          {
                            id: 'preventivo',
                            title: 'Solo deseo mi chequeo preventivo anual',
                            desc: 'Quiero verificar la salud de mis ojos con atención profesional del Dr. Fabio Mora.',
                            badge: 'Prevención'
                          }
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => handleSelectSymptom(opt.id)}
                            className="w-full text-left p-3.5 rounded-2xl border border-gray-200/80 hover:border-[rgb(122,24,35)] hover:bg-[rgb(122,24,35)]/5 transition-all duration-200 flex items-start gap-3 group cursor-pointer active:scale-[0.99]"
                          >
                            <div className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-[rgb(122,24,35)] group-hover:text-white text-[rgb(122,24,35)] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                              <Eye className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-[13.5px] sm:text-[14px] font-bold text-[#15171C] group-hover:text-[rgb(122,24,35)] transition-colors">
                                  {opt.title}
                                </span>
                                <span className="text-[9px] uppercase tracking-wider font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md shrink-0">
                                  {opt.badge}
                                </span>
                              </div>
                              <p className="text-[11.5px] sm:text-[12px] text-[#6D727D] mt-0.5 leading-snug">
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
                        <MessageCircle className="w-4 h-4" />
                        <span>Agendar examen con el Dr. Fabio Mora</span>
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
    </div>
  );
}

