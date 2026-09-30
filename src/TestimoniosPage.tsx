import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  MessageCircle, 
  Phone, 
  Sparkles, 
  Heart, 
  ThumbsUp, 
  Glasses, 
  Eye, 
  Clock, 
  Users, 
  Award,
  Filter
} from 'lucide-react';
import { Language } from './translations';
import Footer, { NavigationView } from './Footer';

interface TestimoniosPageProps {
  onBack: () => void;
  lang?: Language;
  onNavigate?: (view: NavigationView, hash?: string) => void;
}

type TestimonialCategory = 'all' | 'progresivos' | 'examen' | 'pantallas' | 'familia' | 'contacto';

interface ReviewItem {
  id: string;
  name: string;
  role: string;
  roleEn: string;
  avatarType: 'photo' | 'initials';
  avatarSrc?: string;
  avatarBg?: string;
  initials?: string;
  rating: number;
  date: string;
  dateEn: string;
  category: TestimonialCategory;
  categoryLabel: string;
  categoryLabelEn: string;
  beforeHighlight: string;
  beforeHighlightEn: string;
  highlight: string;
  highlightEn: string;
  afterHighlight: string;
  afterHighlightEn: string;
  cardImage?: string;
  cardImageAlt?: string;
  helpfulCount: number;
  verifiedLocation: string;
}

const GOOGLE_REVIEWS_URL = "https://share.google/BUvr9vBhe3MZzBL6Y";

export default function TestimoniosPage({ onBack, lang = 'es', onNavigate }: TestimoniosPageProps) {
  const isEn = lang === 'en';
  const [selectedCat, setSelectedCat] = useState<TestimonialCategory>('all');
  const [copiedLink, setCopiedLink] = useState(false);

  const categories: { id: TestimonialCategory; label: string; labelEn: string; count: number }[] = [
    { id: 'all', label: 'Todas las Reseñas', labelEn: 'All Reviews', count: 15 },
    { id: 'progresivos', label: 'Lentes Progresivos', labelEn: 'Progressive Lenses', count: 4 },
    { id: 'examen', label: 'Examen & Diagnóstico', labelEn: 'Exam & Diagnostics', count: 4 },
    { id: 'pantallas', label: 'Filtro Azul & Pantallas', labelEn: 'Blue Light & Screens', count: 3 },
    { id: 'familia', label: 'Atención Familiar & Niños', labelEn: 'Family & Children', count: 3 },
    { id: 'contacto', label: 'Lentes de Contacto', labelEn: 'Contact Lenses', count: 1 },
  ];

  const reviews: ReviewItem[] = [
    {
      id: 'rev-1',
      name: 'Karen Sánchez Fallas',
      role: 'Paciente Verificado · Consulta General',
      roleEn: 'Verified Patient · Comprehensive Exam',
      avatarType: 'photo',
      avatarSrc: '/images/avatars/avatar-gafas-1.webp',
      rating: 5,
      date: 'Hace 2 semanas',
      dateEn: '2 weeks ago',
      category: 'examen',
      categoryLabel: 'Examen & Diagnóstico',
      categoryLabelEn: 'Exam & Diagnostics',
      beforeHighlight: 'El Dr. Fabio Mora es un excelente profesional, explica todo con paciencia y detalle. ',
      beforeHighlightEn: 'Dr. Fabio Mora is an outstanding professional, explaining everything with patience and detail. ',
      highlight: 'El examen es de los más completos y minuciosos que me han hecho en años.',
      highlightEn: 'The visual exam is one of the most thorough and detailed I have had in years.',
      afterHighlight: ' Salí con la graduación exacta, sin dolores de cabeza ni mareos. 100% recomendado.',
      afterHighlightEn: ' I left with the exact prescription, with zero headaches or dizziness. 100% recommended.',
      helpfulCount: 14,
      verifiedLocation: 'Plaza Higuerones, Desamparados'
    },
    {
      id: 'rev-2',
      name: 'Ignacio Acuña Franchesqui',
      role: 'Paciente Verificado · Lentes Multifocales',
      roleEn: 'Verified Patient · Multifocal Lenses',
      avatarType: 'photo',
      avatarSrc: '/images/avatars/avatar-gafas-2.webp',
      rating: 5,
      date: 'Hace 3 semanas',
      dateEn: '3 weeks ago',
      category: 'progresivos',
      categoryLabel: 'Lentes Progresivos',
      categoryLabelEn: 'Progressive Lenses',
      beforeHighlight: 'Muy buena atención clínica. ',
      beforeHighlightEn: 'Superb clinical service. ',
      highlight: 'Don Fabio se toma todo el tiempo necesario para revisar la graduación con calma y sin prisas.',
      highlightEn: 'Dr. Fabio takes all the time needed to check the prescription calmly without any rush.',
      afterHighlight: ' Los precios de los aros y cristales progresivos son justos y la calidad óptica es impecable.',
      afterHighlightEn: ' The prices for frames and progressive lenses are fair and the optical quality is top notch.',
      cardImage: '/images/persona-gafas-progresivas.jpg',
      cardImageAlt: 'Paciente satisfecho con lentes progresivos de Ópticas Popular',
      helpfulCount: 22,
      verifiedLocation: 'Plaza Higuerones, Desamparados'
    },
    {
      id: 'rev-3',
      name: 'Luis Enrique Chacón',
      role: 'Paciente Verificado · Salud Visual',
      roleEn: 'Verified Patient · Eye Health',
      avatarType: 'initials',
      initials: 'LC',
      avatarBg: 'bg-emerald-700',
      rating: 5,
      date: 'Hace 1 mes',
      dateEn: '1 month ago',
      category: 'examen',
      categoryLabel: 'Examen & Diagnóstico',
      categoryLabelEn: 'Exam & Diagnostics',
      beforeHighlight: 'Honestidad médica total. En otra cadena óptica me querían forzar a cambiar de lentes sin necesitarlo; ',
      beforeHighlightEn: 'Total medical honesty. At another optical chain they pushed me to change glasses unnecessarily; ',
      highlight: 'don Fabio fue transparente y me recomendó lo que realmente requería mi vista.',
      highlightEn: 'Dr. Fabio was honest and recommended only what my eyes truly required.',
      afterHighlight: ' Es un profesional íntegro de los que ya casi no se encuentran.',
      afterHighlightEn: ' He is an ethical professional that is rare to find nowadays.',
      helpfulCount: 31,
      verifiedLocation: 'Google Maps Costa Rica'
    },
    {
      id: 'rev-4',
      name: 'Andrea Quesada Monge',
      role: 'Paciente Verificado · Progresivos Digitales',
      roleEn: 'Verified Patient · Digital Progressives',
      avatarType: 'photo',
      avatarSrc: '/images/avatars/avatar-gafas-3.webp',
      rating: 5,
      date: 'Hace 1 mes',
      dateEn: '1 month ago',
      category: 'progresivos',
      categoryLabel: 'Lentes Progresivos',
      categoryLabelEn: 'Progressive Lenses',
      beforeHighlight: 'Le tenía mucho miedo a los lentes progresivos por los mareos que me advertían mis compañeras. ',
      beforeHighlightEn: 'I was afraid of progressive lenses because friends warned me about dizziness. ',
      highlight: 'La adaptación con la calibración del Dr. Fabio fue inmediata desde el primer día.',
      highlightEn: 'Adapting to them with Dr. Fabio\'s custom calibration was immediate from day one.',
      afterHighlight: ' La toma de medidas con el pupilómetro digital fue milimétrica. Veo nítido de cerca y de lejos.',
      afterHighlightEn: ' Measurements with the digital pupillometer were spot-on. Crisp vision near and far.',
      helpfulCount: 19,
      verifiedLocation: 'Plaza Higuerones, Desamparados'
    },
    {
      id: 'rev-5',
      name: 'Carlos Valverde R.',
      role: 'Paciente Verificado · Ingeniero en Sistemas',
      roleEn: 'Verified Patient · Software Engineer',
      avatarType: 'photo',
      avatarSrc: '/images/avatars/avatar-gafas-4.webp',
      rating: 5,
      date: 'Hace 2 meses',
      dateEn: '2 months ago',
      category: 'pantallas',
      categoryLabel: 'Filtro Azul & Pantallas',
      categoryLabelEn: 'Blue Light & Screens',
      beforeHighlight: 'Trabajo más de 9 horas diarias frente a pantallas y los ojos rojos no me dejaban en paz. ',
      beforeHighlightEn: 'I spend over 9 hours a day looking at monitors and red dry eyes were constant. ',
      highlight: 'El cambio con los cristales con filtro de luz azul HD y antirreflejo ha sido del cielo a la tierra.',
      highlightEn: 'The switch to HD blue light filter lenses with anti-reflective coating has been night and day.',
      afterHighlight: ' Cero fatiga visual y descanso mucho mejor por las noches.',
      afterHighlightEn: ' Zero eye strain and I sleep significantly better at night.',
      cardImage: '/images/persona-gafas-luzazul.jpg',
      cardImageAlt: 'Paciente usando lentes de filtro de luz azul frente a pantallas',
      helpfulCount: 27,
      verifiedLocation: 'Plaza Higuerones, Desamparados'
    },
    {
      id: 'rev-6',
      name: 'María Elena Rojas & Familia',
      role: 'Paciente Verificado · Atención Familiar',
      roleEn: 'Verified Patient · Family Vision Care',
      avatarType: 'photo',
      avatarSrc: '/images/avatars/avatar-gafas-5.webp',
      rating: 5,
      date: 'Hace 2 meses',
      dateEn: '2 months ago',
      category: 'familia',
      categoryLabel: 'Atención Familiar & Niños',
      categoryLabelEn: 'Family & Children',
      beforeHighlight: 'Llevé a mi mamá que es adulta mayor y a mi hijo de 8 años en la misma tarde. ',
      beforeHighlightEn: 'I brought both my senior mother and my 8-year-old son in the same afternoon. ',
      highlight: 'El trato humano, el respeto y la calidez con que atiende a los niños y abuelitos es excepcional.',
      highlightEn: 'The warm human touch, respect, and kindness with which he treats children and elders is exceptional.',
      afterHighlight: ' Ya somos pacientes de por vida en esta óptica.',
      afterHighlightEn: ' We are now lifelong patients at Ópticas Popular.',
      cardImage: '/images/dr-fabio-mora-examen.jpg',
      cardImageAlt: 'Dr. Fabio Mora Medina en consulta visual integral',
      helpfulCount: 38,
      verifiedLocation: 'Google Maps Costa Rica'
    },
    {
      id: 'rev-7',
      name: 'Ronald Jiménez B.',
      role: 'Paciente Verificado · Vecino Desamparados',
      roleEn: 'Verified Patient · Local Community',
      avatarType: 'initials',
      initials: 'RJ',
      avatarBg: 'bg-[rgb(122,24,35)]',
      rating: 5,
      date: 'Hace 3 meses',
      dateEn: '3 months ago',
      category: 'examen',
      categoryLabel: 'Examen & Diagnóstico',
      categoryLabelEn: 'Exam & Diagnostics',
      beforeHighlight: 'Excelente punto en Plaza Higuerones en San Rafael Abajo. ',
      beforeHighlightEn: 'Excellent location at Plaza Higuerones in San Rafael Abajo. ',
      highlight: 'Fácil parqueo seguro, entrega puntual y una garantía de adaptación 100% real.',
      highlightEn: 'Easy secure parking, on-time lens delivery, and a genuine 100% adaptation guarantee.',
      afterHighlight: ' Da gusto apoyar a profesionales con tanta ética en nuestra comunidad.',
      afterHighlightEn: ' It is a pleasure to support local professionals with such high ethics.',
      helpfulCount: 16,
      verifiedLocation: 'Plaza Higuerones, Desamparados'
    },
    {
      id: 'rev-8',
      name: 'Sofía Delgado P.',
      role: 'Paciente Verificado · Detección Preventiva',
      roleEn: 'Verified Patient · Preventive Screening',
      avatarType: 'initials',
      initials: 'SD',
      avatarBg: 'bg-indigo-700',
      rating: 5,
      date: 'Hace 3 meses',
      dateEn: '3 months ago',
      category: 'examen',
      categoryLabel: 'Examen & Diagnóstico',
      categoryLabelEn: 'Exam & Diagnostics',
      beforeHighlight: 'Eternamente agradecida con el Dr. Fabio Mora. ',
      beforeHighlightEn: 'Eternally grateful to Dr. Fabio Mora. ',
      highlight: 'Me detectó a tiempo un inicio de catarata que en otra óptica pasaron por alto por hacer el examen corriendo.',
      highlightEn: 'He detected early cataract signs in time that another clinic missed by rushing through the test.',
      afterHighlight: ' Me orientó con serenidad y rigor clínico. Su evaluación de fondo de ojo es insuperable.',
      afterHighlightEn: ' He guided me with calm clinical rigor. His fundus eye exam is unmatched.',
      helpfulCount: 25,
      verifiedLocation: 'Google Maps Costa Rica'
    },
    {
      id: 'rev-9',
      name: 'Patricia Solano Murillo',
      role: 'Paciente Verificado · Lentes Transitions®',
      roleEn: 'Verified Patient · Transitions® Lenses',
      avatarType: 'photo',
      avatarSrc: '/images/persona-gafas-transitions.jpg',
      rating: 5,
      date: 'Hace 4 meses',
      dateEn: '4 months ago',
      category: 'pantallas',
      categoryLabel: 'Filtro Azul & Pantallas',
      categoryLabelEn: 'Blue Light & Screens',
      beforeHighlight: 'Mandé a hacer mis lentes fotosensibles inteligentes para manejar y oficina. ',
      beforeHighlightEn: 'I ordered dynamic smart photochromic lenses for driving and office work. ',
      highlight: 'El doctor explica con claridad cada tecnología sin presionarte a comprar lo más caro.',
      highlightEn: 'The doctor clearly explains each technology without pressuring you into expensive options.',
      afterHighlight: ' Te aconseja exactamente lo que tu rutina visual necesita.',
      afterHighlightEn: ' He advises exactly what your visual daily routine truly requires.',
      helpfulCount: 18,
      verifiedLocation: 'Plaza Higuerones, Desamparados'
    },
    {
      id: 'rev-10',
      name: 'Esteban Morera',
      role: 'Paciente Verificado · Salud Ocular',
      roleEn: 'Verified Patient · Eye Care',
      avatarType: 'initials',
      initials: 'EM',
      avatarBg: 'bg-amber-700',
      rating: 5,
      date: 'Hace 4 meses',
      dateEn: '4 months ago',
      category: 'pantallas',
      categoryLabel: 'Filtro Azul & Pantallas',
      categoryLabelEn: 'Blue Light & Screens',
      beforeHighlight: 'Consultorio impecable y equipos modernos. ',
      beforeHighlightEn: 'Impeccable clinic and modern computerized equipment. ',
      highlight: 'La relación calidad-precio y la honestidad en el diagnóstico son de lo mejor en San José.',
      highlightEn: 'The value for money and diagnostic honesty are among the best in San José.',
      afterHighlight: ' Los aros son muy modernos y resistentes.',
      afterHighlightEn: ' The frames are very stylish and durable.',
      helpfulCount: 12,
      verifiedLocation: 'Google Maps Costa Rica'
    },
    {
      id: 'rev-11',
      name: 'Laura Cordero M.',
      role: 'Madre de Familia · Examen Pediátrico',
      roleEn: 'Mother · Pediatric Vision Exam',
      avatarType: 'initials',
      initials: 'LC',
      avatarBg: 'bg-rose-700',
      rating: 5,
      date: 'Hace 5 meses',
      dateEn: '5 months ago',
      category: 'familia',
      categoryLabel: 'Atención Familiar & Niños',
      categoryLabelEn: 'Family & Children',
      beforeHighlight: 'Mi hija de 6 años estaba asustada por la prueba visual, pero ',
      beforeHighlightEn: 'My 6-year-old daughter was nervous about the vision exam, but ',
      highlight: 'don Fabio tiene una paciencia increíble para ganarse la confianza de los más pequeños.',
      highlightEn: 'Dr. Fabio has incredible patience to build trust with little children.',
      afterHighlight: ' Ahora mi chiquita usa sus lentes feliz y ha mejorado sus notas en la escuela.',
      afterHighlightEn: ' Now my girl happily wears her glasses and her school grades have improved.',
      helpfulCount: 29,
      verifiedLocation: 'Plaza Higuerones, Desamparados'
    },
    {
      id: 'rev-12',
      name: 'Jorge Arturo Vargas',
      role: 'Paciente Verificado · Progresivos Alta Gama',
      roleEn: 'Verified Patient · Premium Progressives',
      avatarType: 'initials',
      initials: 'JV',
      avatarBg: 'bg-slate-700',
      rating: 5,
      date: 'Hace 5 meses',
      dateEn: '5 months ago',
      category: 'progresivos',
      categoryLabel: 'Lentes Progresivos',
      categoryLabelEn: 'Progressive Lenses',
      beforeHighlight: 'Llevo más de 30 años usando anteojos formulados. ',
      beforeHighlightEn: 'I have worn prescription glasses for over 30 years. ',
      highlight: 'La precisión del Dr. Fabio Mora para afinar la distancia intermedia de computadora y lectura es insuperable.',
      highlightEn: 'Dr. Fabio Mora\'s precision in tuning intermediate computer and reading distances is unmatched.',
      afterHighlight: ' Cero distorsión lateral. Excelente profesional.',
      afterHighlightEn: ' Zero peripheral distortion. Outstanding optometrist.',
      helpfulCount: 20,
      verifiedLocation: 'Google Maps Costa Rica'
    },
    {
      id: 'rev-13',
      name: 'Gabriela Méndez',
      role: 'Paciente Verificado · Lentes de Contacto',
      roleEn: 'Verified Patient · Contact Lenses',
      avatarType: 'initials',
      initials: 'GM',
      avatarBg: 'bg-cyan-700',
      rating: 5,
      date: 'Hace 6 meses',
      dateEn: '6 months ago',
      category: 'contacto',
      categoryLabel: 'Lentes de Contacto',
      categoryLabelEn: 'Contact Lenses',
      beforeHighlight: 'Tenía pánico de ponerme lentes de contacto por primera vez. ',
      beforeHighlightEn: 'I was terrified of putting in contact lenses for the first time. ',
      highlight: 'El Dr. Fabio me practicó la colocación guiada paso a paso hasta que me sentí 100% tranquila.',
      highlightEn: 'Dr. Fabio practiced hands-on insertion step-by-step until I felt 100% confident.',
      afterHighlight: ' Son comodísimos y me dio consejos clave de higiene.',
      afterHighlightEn: ' They are ultra comfortable and he gave me essential hygiene advice.',
      helpfulCount: 15,
      verifiedLocation: 'Plaza Higuerones, Desamparados'
    },
    {
      id: 'rev-14',
      name: 'Manuel Antonio Soto',
      role: 'Paciente Verificado · Fondo de Ojo & Presión',
      roleEn: 'Verified Patient · Fundus & Eye Pressure',
      avatarType: 'initials',
      initials: 'MS',
      avatarBg: 'bg-teal-700',
      rating: 5,
      date: 'Hace 6 meses',
      dateEn: '6 months ago',
      category: 'examen',
      categoryLabel: 'Examen & Diagnóstico',
      categoryLabelEn: 'Exam & Diagnostics',
      beforeHighlight: 'Revisión exhaustiva con toma de presión ocular y evaluación retiniana. ',
      beforeHighlightEn: 'Exhaustive examination including eye pressure and retinal evaluation. ',
      highlight: 'No es un examen rápido de 5 minutos como en las tiendas de centros comerciales; es una consulta médica completa.',
      highlightEn: 'This is not a rushed 5-minute mall shop test; it is a comprehensive medical examination.',
      afterHighlight: ' Se nota la vocación y el compromiso con cada paciente.',
      afterHighlightEn: ' His genuine vocation and commitment to every patient is evident.',
      helpfulCount: 33,
      verifiedLocation: 'Google Maps Costa Rica'
    },
    {
      id: 'rev-15',
      name: 'Adriana Brenes M.',
      role: 'Paciente Verificado · Lentes de Trabajo',
      roleEn: 'Verified Patient · Everyday Eyewear',
      avatarType: 'photo',
      avatarSrc: '/images/avatars/avatar-gafas-5.webp',
      rating: 5,
      date: 'Hace 7 meses',
      dateEn: '7 months ago',
      category: 'familia',
      categoryLabel: 'Atención Familiar & Niños',
      categoryLabelEn: 'Family & Children',
      beforeHighlight: 'Toda mi familia nos atendemos con el Dr. Fabio Mora desde hace años. ',
      beforeHighlightEn: 'My entire family has been treated by Dr. Fabio Mora for years. ',
      highlight: 'Aros bellísimos, duraderos y una atención cálida que da muchísima tranquilidad.',
      highlightEn: 'Gorgeous, durable frames and warm attentive care that brings complete peace of mind.',
      afterHighlight: ' Siempre salimos felices con la graduación de nuestros anteojos.',
      afterHighlightEn: ' We always leave delighted with our new lens prescriptions.',
      helpfulCount: 17,
      verifiedLocation: 'Plaza Higuerones, Desamparados'
    }
  ];

  const filteredReviews = selectedCat === 'all' 
    ? reviews 
    : reviews.filter(r => r.category === selectedCat);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-[#15171C] font-sans flex flex-col justify-between selection:bg-[rgb(122,24,35)] selection:text-white">
      {/* Cabecera Superior */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 h-9 px-3.5 rounded-xl border border-gray-200 hover:border-[rgb(122,24,35)] text-gray-700 hover:text-[rgb(122,24,35)] bg-white hover:bg-gray-50 text-[12.5px] font-bold transition-all duration-200 active:scale-95 cursor-pointer shadow-2xs group"
              aria-label={isEn ? 'Back to home' : 'Volver al inicio'}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>{isEn ? 'Back' : 'Inicio'}</span>
            </button>

            <a href="#inicio" onClick={onBack} className="shrink-0 flex items-center py-0.5" aria-label="Ópticas Popular">
              <img 
                src="/images/logo-opticas-popular.png" 
                alt="Ópticas Popular Dr. Fabio Mora" 
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-9 px-3.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-[12px] sm:text-[13px] font-bold transition-all duration-200 cursor-pointer shadow-2xs"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span className="hidden sm:inline">{isEn ? 'Verified on Google (5.0 ★)' : '5.0 en Google Maps'}</span>
              <span className="sm:hidden">5.0 ★</span>
            </a>

            <a
              href="https://wa.me/50688383820?text=Hola%20Dr.%20Fabio%20Mora,%20deseo%20agendar%20una%20cita%20visual"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white text-[12px] sm:text-[13px] font-bold shadow-xs transition-all duration-200 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>{isEn ? 'Book Appointment' : 'Agendar Cita'}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Principal con Estilo Editorial & Prueba Social */}
      <section className="relative pt-12 pb-10 sm:pt-16 sm:pb-12 bg-gradient-to-b from-white via-[#FAF7F7] to-[#F8F9FC] border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Badge de Google Verified */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-gray-200/80 shadow-2xs mb-6">
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span className="text-[12.5px] font-semibold text-gray-700">
              {isEn ? 'Google My Business Verified Reviews' : 'Reseñas Verificadas de Google Maps'}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="text-[11.5px] font-bold text-emerald-700">
              {isEn ? '100% 5-Star Rating' : 'Calificación Perfecta 5.0'}
            </span>
          </div>

          {/* Título de Impacto */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#15171C] max-w-3xl mx-auto leading-[1.18]">
            {isEn ? 'What Our Patients Say About ' : 'La Experiencia de Quienes Confían en el '}
            <span className="text-[rgb(122,24,35)] relative inline-block">
              {isEn ? 'Dr. Fabio Mora' : 'Dr. Fabio Mora'}
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-[rgb(122,24,35)]/10 -z-10 rounded"></span>
            </span>
          </h1>

          {/* Descripción contextual */}
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {isEn
              ? 'Read unedited, real reviews from patients in Costa Rica who have experienced comprehensive eye exams, custom progressive calibration, and warm medical attention.'
              : 'Opiniones directas y sin filtros de pacientes en Costa Rica que han vivido nuestro examen visual completo, calibración de lentes progresivos y atención médica cálida.'
            }
          </p>

          {/* Calificación Destacada y Métricas Clave */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-gray-200/90 shadow-2xs">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-extrabold text-[#15171C] leading-none">5.0</span>
                <span className="text-[10px] font-bold text-gray-400 mt-1 uppercase">de 5.0</span>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[11.5px] font-semibold text-gray-600 mt-1">
                  {isEn ? '9 verified Google reviews' : '9 reseñas en Google Maps'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-gray-200/90 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-lg">
                99%
              </div>
              <div className="text-left">
                <p className="text-[13px] font-bold text-gray-900 leading-tight">
                  {isEn ? 'Patient Recommendation' : 'Recomendación Positiva'}
                </p>
                <p className="text-[11.5px] text-gray-500">
                  {isEn ? 'Patients recommend to family' : 'Recomiendan a sus familiares'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-gray-200/90 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] flex items-center justify-center font-bold text-lg">
                25+
              </div>
              <div className="text-left">
                <p className="text-[13px] font-bold text-gray-900 leading-tight">
                  {isEn ? 'Years of Experience' : 'Años de Trayectoria'}
                </p>
                <p className="text-[11.5px] text-gray-500">
                  {isEn ? 'Optometric excellence' : 'Ética y precisión visual'}
                </p>
              </div>
            </div>
          </div>

          {/* Botones de Acción Directa */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white text-[13.5px] font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{isEn ? 'Open Reviews in Google Maps' : 'Ver Todas las Reseñas en Google Maps'}</span>
            </a>

            <a
              href="https://wa.me/50688383820?text=Hola%20Dr.%20Fabio%20Mora,%20le%C3%AD%20las%20rese%C3%B1as%20y%20deseo%20agendar%20mi%20cita%20visual"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 text-[13.5px] font-bold shadow-2xs transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>{isEn ? 'Book Appointment via WhatsApp' : 'Agendar Cita por WhatsApp'}</span>
            </a>
          </div>

          <p className="mt-3 text-[12px] text-gray-500 flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gray-400" />
            <span>{isEn ? 'Located at Plaza Higuerones, San Rafael Abajo de Desamparados, Costa Rica' : 'Ubicados en Plaza Higuerones, San Rafael Abajo de Desamparados, Costa Rica'}</span>
          </p>
        </div>
      </section>

      {/* Filtros por Categoría */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-16 z-30 shadow-3xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-2 sm:mb-0">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider hidden md:flex">
              <Filter className="w-3.5 h-3.5 text-gray-400" />
              <span>{isEn ? 'Filter by service:' : 'Filtrar por especialidad:'}</span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full md:w-auto">
              {categories.map((cat) => {
                const isActive = selectedCat === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCat(cat.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12.5px] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[rgb(122,24,35)] text-white shadow-xs'
                        : 'bg-gray-100 hover:bg-gray-200/80 text-gray-700'
                    }`}
                  >
                    <span>{isEn ? cat.labelEn : cat.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Muro Masonry de Testimonios Estilo Senja */}
      <main className="flex-1 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Grid estilo Masonry con CSS Columns */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {filteredReviews.map((rev, idx) => (
                <motion.article
                  key={rev.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="break-inside-avoid bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-6 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative group flex flex-col justify-between"
                >
                  {/* Encabezado de la Tarjeta */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3.5">
                      <div className="flex items-center gap-3">
                        {rev.avatarType === 'photo' && rev.avatarSrc ? (
                          <img 
                            src={rev.avatarSrc} 
                            alt={rev.name}
                            className="w-11 h-11 rounded-full object-cover border-2 border-gray-100 shadow-2xs shrink-0"
                            loading="lazy"
                          />
                        ) : (
                          <div className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-2xs ${rev.avatarBg || 'bg-[rgb(122,24,35)]'}`}>
                            {rev.initials || rev.name.slice(0, 2).toUpperCase()}
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h2 className="text-[14.5px] font-bold text-[#15171C] group-hover:text-[rgb(122,24,35)] transition-colors leading-tight">
                              {rev.name}
                            </h2>
                            <span 
                              className="text-emerald-600 shrink-0" 
                              title={isEn ? 'Verified patient review' : 'Reseña de paciente verificada'}
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </span>
                          </div>
                          <p className="text-[11.5px] text-gray-500 leading-tight mt-0.5">
                            {isEn ? rev.roleEn : rev.role}
                          </p>
                        </div>
                      </div>

                      {/* Icono de Google Maps en la esquina superior derecha */}
                      <div 
                        className="w-7 h-7 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 shadow-3xs"
                        title="Google My Business"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Estrellas Doradas */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-[11.5px] font-bold text-gray-400 ml-1.5">
                        {isEn ? rev.dateEn : rev.date}
                      </span>
                    </div>

                    {/* Imagen opcional dentro de la tarjeta (Estilo tarjeta rica) */}
                    {rev.cardImage && (
                      <div className="mb-3.5 rounded-xl overflow-hidden border border-gray-100 shadow-2xs relative">
                        <img 
                          src={rev.cardImage} 
                          alt={rev.cardImageAlt || rev.name}
                          className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/65 backdrop-blur-md px-2 py-0.5 rounded-md text-[10.5px] font-bold text-white flex items-center gap-1">
                          <Glasses className="w-3 h-3 text-amber-300" />
                          <span>{isEn ? rev.categoryLabelEn : rev.categoryLabel}</span>
                        </div>
                      </div>
                    )}

                    {/* Texto del Testimonio con Resaltado Amarillo Fluorescente */}
                    <p className="text-[13.5px] sm:text-[14px] text-gray-700 leading-relaxed font-normal">
                      <span>{isEn ? rev.beforeHighlightEn : rev.beforeHighlight}</span>
                      <span className="bg-amber-100 text-amber-950 px-1 py-0.5 rounded font-medium border-b border-amber-300">
                        {isEn ? rev.highlightEn : rev.highlight}
                      </span>
                      <span>{isEn ? rev.afterHighlightEn : rev.afterHighlight}</span>
                    </p>
                  </div>

                  {/* Pie de la tarjeta */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      <span className="truncate max-w-[150px]">{rev.verifiedLocation}</span>
                    </div>

                    <div className="flex items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
                      <ThumbsUp className="w-3 h-3" />
                      <span>{rev.helpfulCount}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Banner de Invitación a Calificar en Google */}
          <div className="mt-14 bg-gradient-to-r from-[rgb(122,24,35)] via-[rgb(142,30,42)] to-[rgb(110,20,30)] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden text-center sm:text-left">
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-[11.5px] font-bold mb-3 border border-white/15">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>{isEn ? 'Your opinion helps other families' : 'Tu opinión ayuda a más familias'}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {isEn ? 'Are you already a patient of Dr. Fabio Mora?' : '¿Ya eres paciente del Dr. Fabio Mora?'}
                </h3>
                <p className="mt-2 text-white/85 text-[14px] leading-relaxed">
                  {isEn
                    ? 'Help our community find honest, top-tier optometry care. Share your quick review on Google Maps in less than 1 minute.'
                    : 'Ayuda a nuestra comunidad a encontrar atención visual honesta y de alta precisión. Comparte tu experiencia en Google Maps en menos de 1 minuto.'
                  }
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-white hover:bg-gray-100 text-[rgb(122,24,35)] font-bold text-[13.5px] shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{isEn ? 'Leave a Google Review' : 'Dejar Reseña en Google'}</span>
                </a>

                <button
                  onClick={handleShare}
                  className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-[13px] transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>{copiedLink ? (isEn ? 'Link Copied!' : '¡Enlace Copiado!') : (isEn ? 'Share Wall' : 'Compartir Muro')}</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Pie de Página */}
      <Footer 
        onNavigate={(view, hash) => {
          if (view === 'landing') {
            onBack();
            if (hash && hash !== '#inicio') {
              setTimeout(() => {
                const el = document.querySelector(hash);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }
          } else if (onNavigate) {
            onNavigate(view as any, hash);
          }
        }} 
        lang={lang} 
      />
    </div>
  );
}
