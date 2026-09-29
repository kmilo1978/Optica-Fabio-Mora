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
  Star
} from 'lucide-react';
import { animate, useMotionValue, useTransform, useInView, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';

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
  icon: any;
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

const SERVICE_CATEGORIES = ['Todos', 'Diagnóstico y Exámenes', 'Especialidades Oculares', 'Lentes y Contactología'] as const;

const NAVIGATION_MENU: NavCategory[] = [
  {
    id: 'inicio',
    name: 'Inicio',
    href: '#inicio',
  },
  {
    id: 'servicios',
    name: 'Servicios',
    href: '#servicios',
    groups: [
      {
        title: 'Exámenes y Diagnóstico',
        items: [
          { name: 'Evaluación Visual Integral', href: '#servicios', desc: 'Graduación precisa y fondo de ojo', icon: Eye },
          { name: 'Fotografía de Retina', href: '#servicios', desc: 'Diagnóstico digital de retina', icon: Camera },
          { name: 'Toma de Presión Ocular', href: '#servicios', desc: 'Control preventivo de glaucoma', icon: Activity },
        ],
      },
      {
        title: 'Especialidades Oculares',
        items: [
          { name: 'Valoración de Cataratas', href: '#servicios', desc: 'Evaluación y orientación médica', icon: Stethoscope },
          { name: 'Evaluación de Ojo Seco', href: '#servicios', desc: 'Alivio de resequedad e irritación', icon: Droplets },
          { name: 'Lentes de Contacto', href: '#servicios', desc: 'Adaptación personalizada y cómoda', icon: Contact },
        ],
      },
      {
        title: 'Metodología',
        items: [
          { name: 'Proceso de Consulta', href: '#proceso', desc: 'Paso a paso de tu cita médica', icon: CheckCircle2 },
        ],
      },
    ],
  },
  {
    id: 'nosotros',
    name: 'Conócenos',
    href: '#doctor',
    groups: [
      {
        title: 'La Clínica',
        items: [
          { name: 'Dr. Fabio Mora Medina', href: '#doctor', desc: 'Trayectoria y formación profesional', icon: Award },
          { name: '¿Por qué elegirnos?', href: '#beneficios', desc: 'Tecnología y atención personalizada', icon: ShieldCheck },
        ],
      },
      {
        title: 'Experiencia y Espacio',
        items: [
          { name: 'Instalaciones y Equipos', href: '#galeria', desc: 'Conoce nuestro consultorio', icon: Camera },
          { name: 'Testimonios de Pacientes', href: '#testimonios', desc: 'Experiencias de quienes nos visitan', icon: Users },
        ],
      },
    ],
  },
  {
    id: 'faq',
    name: 'Preguntas',
    href: '#faq',
  },
  {
    id: 'contacto',
    name: 'Contacto',
    href: '#contacto',
  },
];

const WHY_CHOOSE_US = [
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

const FAQS = [
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
  }
];

const SERVICES = [
  {
    title: 'Evaluación visual integral',
    category: 'Diagnóstico y Exámenes',
    description: 'Examen completo para conocer con precisión tu estado visual y orientar la mejor solución.',
    icon: Eye,
  },
  {
    title: 'Fotografía de retina',
    category: 'Especialidades Oculares',
    description: 'Valoración de la salud ocular mediante imágenes que ayudan a detectar alteraciones a tiempo.',
    icon: Camera,
  },
  {
    title: 'Toma de presión ocular',
    category: 'Diagnóstico y Exámenes',
    description: 'Medición orientada a detectar factores de riesgo relacionados con glaucoma y control ocular.',
    icon: Activity,
  },
  {
    title: 'Valoración de cataratas',
    category: 'Especialidades Oculares',
    description: 'Diagnóstico y orientación para entender el estado de tu visión y el manejo recomendado.',
    icon: Stethoscope,
  },
  {
    title: 'Evaluación de ojo seco',
    category: 'Especialidades Oculares',
    description: 'Revisión de molestias o resequedad para proponerte una solución más cómoda y efectiva.',
    icon: Droplets,
  },
  {
    title: 'Lentes de contacto',
    category: 'Lentes y Contactología',
    description: 'Adaptación personalizada para opciones esféricas, astigmatismo y multifocal según tu caso.',
    icon: Contact,
  },
];

const TESTIMONIALS = [
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

const BRANDS = ['Ray-Ban', 'Oakley', 'Persol', 'Vogue', 'Arnette', 'Transitions'];

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>('servicios');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              <a href="#inicio" className="flex items-center gap-2 shrink-0 group">
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[rgb(122,24,35)] text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Eye size={24} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[18px] md:text-[21px] font-bold tracking-tight text-[#13151A]">Ópticas Popular</span>
                  <span className="text-[11px] md:text-[12px] font-bold text-[rgb(122,24,35)] uppercase tracking-wider mt-0.5">Dr. Fabio Mora Medina</span>
                </div>
              </a>

              {/* Desktop Nav categorizado */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                {NAVIGATION_MENU.map((cat) => {
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
                                          onClick={() => setDesktopDropdown(null)}
                                          className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F3F4F7] transition-all"
                                        >
                                          <div className="w-8 h-8 rounded-lg bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[rgb(122,24,35)] group-hover/item:text-white transition-colors">
                                            <ItemIcon className="w-4 h-4" />
                                          </div>
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

              <div className="flex items-center gap-2">
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
                        <div className="w-10 h-10 rounded-xl bg-[rgb(122,24,35)] text-white flex items-center justify-center shadow-md">
                          <Eye size={22} strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col leading-none">
                          <span className="text-[15px] font-bold tracking-tight text-[#13151A]">Ópticas Popular</span>
                          <span className="text-[9px] font-medium text-[rgb(122,24,35)] uppercase tracking-wider mt-1">Dr. Fabio Mora Medina</span>
                        </div>
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
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#767A84] px-1">
                        Navegación por categorías
                      </p>

                      <div className="space-y-2">
                        {NAVIGATION_MENU.map((cat) => {
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
                                              onClick={() => setIsMenuOpen(false)}
                                              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F3F4F7] active:bg-gray-200 transition-all"
                                            >
                                              <div className="w-8 h-8 rounded-lg bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] flex items-center justify-center shrink-0">
                                                <ItemIcon className="w-4 h-4" />
                                              </div>
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
                <div className="absolute inset-0 z-0">
                  <img 
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
                      Exámenes visuales integrales
                    </motion.div>

                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="mt-4 md:mt-5 max-w-xl lg:max-w-2xl text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] leading-[1.14] tracking-tight font-bold text-[#13151A]"
                    >
                      Ópticas Popular: Agendá tu <span className="text-[rgb(122,24,35)]">examen visual</span> con el Dr. Fabio Mora
                    </motion.h1>

                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="mt-3.5 md:mt-4 max-w-xl text-[15px] sm:text-[16px] md:text-[16.5px] leading-relaxed text-[#555963]"
                    >
                      Si notás visión borrosa, molestias, cansancio ocular o tus lentes ya no responden como antes, este es el momento de revisarte con atención profesional y resultados claros.
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
                      Agendar por WhatsApp
                    </a>

                    <a
                      href="tel:+50672760215"
                      className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-white text-[#15171C] text-[14px] font-bold border border-[#E3E5EC] cta-secondary w-full sm:w-auto transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Llamar ahora
                    </a>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 w-full max-w-[580px]"
                  >
                    {[
                      { label: 'Frecuencia', value: '1 vez al año recomendado' },
                      { label: 'Atención', value: 'Para niños, adultos y mayores' },
                      { label: 'Reserva', value: 'WhatsApp o llamada directa' },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/90 backdrop-blur-[2px] rounded-[10px] px-3 py-3 pro-card shadow-sm border border-white/50 transition-all hover:shadow-md hover:-translate-y-0.5">
                        <p className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">{item.label}</p>
                        <p className="mt-1 text-[13px] sm:text-[14px] leading-[1.45] text-[#14161B] font-bold">{item.value}</p>
                      </div>
                    ))}
                  </motion.div>
                </div>

                <div className="relative min-h-[150px] md:min-h-full hidden md:block">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute right-[10%] top-[20%] w-[180px] md:w-[220px] lg:w-[260px] bg-white/85 border border-white/70 rounded-[16px] p-4 md:p-5 shadow-lg pro-card backdrop-blur-sm"
                  >
                    <p className="text-[9px] uppercase tracking-[0.12em] text-[#7C808B]">Señales de alerta</p>
                    <ul className="mt-3 space-y-2 text-[11px] md:text-[12px] leading-[1.45] text-[#15171C]">
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-3 h-3 mt-0.5 text-[rgb(122,24,35)]" /> Visión borrosa o cansancio visual</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-3 h-3 mt-0.5 text-[rgb(122,24,35)]" /> Molestias con pantallas o lectura</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-3 h-3 mt-0.5 text-[rgb(122,24,35)]" /> Lentes rayados o desactualizados</li>
                    </ul>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="absolute left-[5%] bottom-[20%] w-[170px] md:w-[210px] bg-[rgb(122,24,35)]/90 text-white rounded-[16px] p-4 shadow-xl pro-card backdrop-blur-sm"
                  >
                    <p className="text-[11px] uppercase tracking-wider font-bold text-white/90">Acción recomendada</p>
                    <p className="mt-2 text-[14px] md:text-[15px] leading-[1.6] font-semibold">
                      Agendá tu revisión hoy y resolvé tus dudas con orientación profesional.
                    </p>
                  </motion.div>
                </div>
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
                    Esperar demasiado puede hacer que el problema afecte más <span className="text-[rgb(122,24,35)]">tu rutina</span>
                  </h2>
                  <p className="mt-3 max-w-xl text-[15px] sm:text-[16px] leading-relaxed text-[#555963]">
                    Cuando la visión cambia, aparecen molestias al leer, manejar, usar pantallas o trabajar. Revisarte a tiempo ayuda a detectar qué está pasando y decidir la mejor solución.
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
              ¿Por qué confiar en <span className="text-[rgb(122,24,35)]">nuestra atención</span> visual?
            </h2>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {WHY_CHOOSE_US.map((item, i) => (
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
          <section className="w-full py-8 md:py-12 bg-slate-50/60 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-3">
              <motion.div 
                id="proceso" 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100"
              >
                <span className="inline-flex items-center justify-center h-7 px-3.5 rounded-full bg-[#F2F3F7] text-[11px] sm:text-[12px] uppercase tracking-wider font-bold text-[#7C808B]">
                  Proceso simple
                </span>

                <h2 className="mt-4 max-w-xl text-[28px] sm:text-[32px] md:text-[36px] leading-tight tracking-tight font-bold text-[#15171C]">
                  Una estructura pensada para tu comodidad
                </h2>

                <div className="mt-5 grid gap-3">
                  {[
                    { step: 'Paso 1', title: 'Contactás por WhatsApp o llamada', desc: 'Elegís la vía más rápida para coordinar tu revisión.' },
                    { step: 'Paso 2', title: 'Recibís evaluación visual integral', desc: 'Se revisa tu visión y se explican los hallazgos con claridad.' },
                    { step: 'Paso 3', title: 'Salís con una recomendación clara', desc: 'Entendés qué necesitás y cuál es el siguiente paso recomendado.', dark: true },
                  ].map((item, i) => (
                    <motion.article 
                      key={i} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                      className={`rounded-[12px] p-4 pro-card shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 ${item.dark ? 'bg-[rgb(122,24,35)] text-white' : 'bg-[#F3F4F7] text-[#15171C]'}`}
                    >
                      <p className={`text-[11px] sm:text-[12px] uppercase tracking-wider font-bold ${item.dark ? 'text-white/80' : 'text-[#7A7F8A]'}`}>{item.step}</p>
                      <h3 className="mt-2 text-[17px] sm:text-[18px] leading-[1.25] font-bold">{item.title}</h3>
                      <p className={`mt-2 text-[13px] sm:text-[14px] leading-[1.65] ${item.dark ? 'text-white/85' : 'text-[#6D727D]'}`}>{item.desc}</p>
                    </motion.article>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white rounded-2xl md:rounded-3xl px-6 md:px-8 py-8 md:py-10 overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="max-w-2xl lg:max-w-3xl">
                    <span className="inline-flex items-center justify-center h-7 px-3.5 rounded-full bg-[#F2F3F7] text-[11px] sm:text-[12px] uppercase tracking-wider font-bold text-[#7C808B]">
                      Marcas reconocidas
                    </span>
                    <h2 className="mt-3 text-[26px] sm:text-[32px] md:text-[36px] leading-[1.2] tracking-tight font-bold text-[#15171C]">
                      Opciones populares en <span className="text-[rgb(122,24,35)]">lentes y soluciones visuales</span> según tu necesidad
                    </h2>
                  </div>

                  <a
                    href="https://wa.me/50672760215"
                    className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,28,41)] text-white text-[13px] sm:text-[14px] font-semibold whitespace-nowrap shadow-sm hover:shadow-md transition-all active:scale-95 shrink-0 self-start md:self-center btn-shimmer"
                  >
                    Consultar disponibilidad
                  </a>
                </div>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {BRANDS.map((brand, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                      className="bg-[#F3F4F7] rounded-[12px] h-[86px] px-4 flex items-center justify-center text-center pro-card shadow-sm border border-transparent hover:border-gray-200 transition-colors"
                    >
                      <span className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-none tracking-tight font-bold text-[#15171C]">{brand}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 rounded-[12px] bg-[#F3F4F7] px-4 py-4 pro-card shadow-sm border border-gray-100">
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] font-medium leading-normal text-[#555963] text-center whitespace-normal md:whitespace-nowrap">
                    La recomendación final depende de tu examen visual, tu graduación y el tipo de uso diario que necesités.
                  </p>
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
              {SERVICE_CATEGORIES.map((catName) => {
                const isSelected = selectedCategory === catName;
                return (
                  <button
                    key={catName}
                    onClick={() => setSelectedCategory(catName)}
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
                      {catName}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 relative grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              {SERVICES.filter((s) => selectedCategory === 'Todos' || s.category === selectedCategory).map((service, i) => (
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

                <a href="https://wa.me/50672760215" className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,28,41)] text-white text-[13px] sm:text-[14px] font-semibold whitespace-nowrap shadow-sm hover:shadow-md transition-all active:scale-95 shrink-0 self-start md:self-center btn-shimmer">Agendar valoración</a>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-[1.08fr_0.92fr] gap-3">
                <motion.article 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group relative rounded-[14px] overflow-hidden min-h-[320px] md:min-h-[360px] pro-card shadow-md"
                >
                  <img
                    src="https://content.pancake.vn/web-media-262/0a/72/2c/cd/859ae20a5707f68e7b103f3d02920717fdcd8ed948237733db5ab183-w:700-h:467-l:39011-t:image/jpeg.jpeg"
                    alt="Evaluación visual profesional"
                    className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
                  <div className="absolute left-0 right-0 bottom-0 p-5 md:p-6 transform transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="inline-flex items-center h-7 px-3.5 rounded-full bg-white/90 text-[11px] sm:text-[12px] uppercase tracking-wider font-bold text-[#6A6E79] font-bold">
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
                    className="group relative rounded-[14px] overflow-hidden min-h-[173px] pro-card shadow-md"
                  >
                    <img
                      src="https://content.pancake.vn/web-media-262/3d/24/a3/d4/3a74f769e1ca5261250f65e2e9911c8164ad0022ef125ae3dd451852-w:1200-h:675-l:106469-t:image/jpeg.jpeg"
                      alt="Tecnología para diagnóstico visual"
                      className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-[1.05]"
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
                      className="group relative rounded-[14px] overflow-hidden min-h-[173px] pro-card shadow-md"
                    >
                      <img
                        src="https://content.pancake.vn/web-media-262/2f/b0/37/cd/56114753eecc12cb63eefa879704d4bf40e014559f4c14139c87d036-w:297-h:400-l:19848-t:image/jpeg.jpeg"
                        alt="Atención profesional personalizada"
                        className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-[1.05]"
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
                      className="group relative rounded-[14px] overflow-hidden min-h-[173px] pro-card shadow-md"
                    >
                      <img
                        src="https://content.pancake.vn/web-media-262/4f/26/e9/07/5c5601a47c49055462953a64179c907190bdb5f17135f2be2b99eb10-w:297-h:400-l:16706-t:image/jpeg.jpeg"
                        alt="Recomendación de soluciones visuales"
                        className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-[1.05]"
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
                    La <span className="text-[rgb(122,24,35)]">confianza se gana</span> con atención clara, cercana y resultados bien explicados
                  </h2>
                </div>

                <a href="https://wa.me/50672760215" className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,28,41)] text-white text-[13px] sm:text-[14px] font-semibold whitespace-nowrap shadow-sm hover:shadow-md transition-all active:scale-95 shrink-0 self-start md:self-center btn-shimmer">Agendar valoración</a>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                {TESTIMONIALS.map((t, i) => (
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

              <div className="mt-5 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-3">
                <motion.article 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#F3F4F7] rounded-[14px] p-5 pro-card shadow-sm border border-gray-100"
                >
                  <span className="inline-flex items-center justify-center h-7 px-3.5 rounded-full bg-white text-[11px] sm:text-[12px] uppercase tracking-wider font-bold text-[#7C808B] shadow-sm">
                    Experiencia del paciente
                  </span>
                  <h3 className="mt-4 max-w-[24ch] text-[20px] sm:text-[22px] md:text-[24px] leading-[1.1] tracking-tight font-bold text-[#15171C]">
                    Una consulta diseñada para entender, decidir y actuar con claridad
                  </h3>
                  <p className="mt-3 max-w-[40ch] text-[11px] sm:text-[12px] md:text-[11px] leading-[1.7] text-[#6D727D]">
                    La meta no es solo revisar tu visión, sino ayudarte a entender qué necesitás y qué solución se adapta mejor a vos.
                  </p>
                </motion.article>

                <motion.article 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-[rgb(122,24,35)] rounded-[14px] p-6 md:p-8 text-white pro-card shadow-lg flex flex-col justify-between"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
                    {[
                      { label: 'Atención', desc: 'Cercana y profesional' },
                      { label: 'Evaluación', desc: 'Clara y precisa' },
                      { label: 'Confianza', desc: 'Basada en resultados' },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col">
                        <div className="text-[24px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-tight tracking-tight font-bold">{item.label}</div>
                        <p className="mt-2 text-[11px] sm:text-[10px] md:text-[11px] leading-[1.5] text-white/80 max-w-[15ch]">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 sm:mt-6">
                    <a
                      href="https://wa.me/50672760215"
                      className="inline-flex items-center justify-center w-full sm:w-auto h-12 sm:h-10 px-8 rounded-[10px] bg-white text-[rgb(122,24,35)] text-[12px] sm:text-[11px] md:text-[11px] font-bold shadow-md hover:bg-gray-100 transition-all active:scale-95"
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
                {FAQS.map((faq, index) => {
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

              {/* Botón de ayuda extra */}
              <div className="mt-10 text-center">
                <p className="text-[13px] sm:text-[14px] text-gray-600 mb-3">
                  ¿Tenés otra consulta que no encontrás aquí?
                </p>
                <a
                  href="https://wa.me/50672760215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-[#15171C] text-[12px] sm:text-[13px] font-semibold shadow-xs hover:border-[rgb(122,24,35)] hover:text-[rgb(122,24,35)] hover:shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[rgb(122,24,35)]" />
                  Preguntanos por WhatsApp
                </a>
              </div>
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
                <div className="h-[350px] lg:h-auto min-h-[400px] rounded-[16px] overflow-hidden border border-[#E3E5EC] shadow-sm relative group">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15722.057649214696!2d-84.081993!3d9.8910441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e3edbed430b5%3A0x4e83f4dbd6b649b2!2s%C3%93pticas%20Popular%20Plaza%20Higuerones%3A%20Aros%20I%20Lentes%20I%20Servicios%20Oft%C3%A1lmicos%20I%20Ex%C3%A1menes%20de%20Vista!5e0!3m2!1ses!2sco!4v1707761517794!5m2!1ses!2sco" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Ópticas Popular"
                    className="grayscale-[0.2] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0"
                  ></iframe>
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <span className="inline-flex items-center h-6 px-3 rounded-full bg-white/90 backdrop-blur-sm text-[9px] font-bold uppercase tracking-wider text-[#15171C] shadow-md border border-white">
                      <ArrowUpRight className="w-3 h-3 mr-1.5 text-[rgb(122,24,35)]" /> Ver en grande
                    </span>
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
            </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="w-full bg-[#111317] text-white pt-10 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
              <div className="md:col-span-1">
                <a href="#inicio" className="flex items-center gap-2 shrink-0 group mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[rgb(122,24,35)] text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <Eye size={20} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-[14px] font-bold tracking-tight text-white">Ópticas Popular</span>
                    <span className="text-[9px] font-medium text-[rgb(122,24,35)] uppercase tracking-wider mt-0.5">Dr. Fabio Mora Medina</span>
                  </div>
                </a>
                <p className="text-[14px] leading-relaxed text-gray-400">
                  Especialistas en salud visual integral en San Rafael Abajo de Desamparados. Ofrecemos exámenes de la vista avanzados y soluciones personalizadas.
                </p>
              </div>
              
              <div>
                <h4 className="text-[12px] font-bold text-white uppercase tracking-wider">Navegación</h4>
                <ul className="mt-4 space-y-2 text-[14px] sm:text-[15px] text-[#555963]">
                  <li><a href="#inicio" className="hover:text-[rgb(122,24,35)] transition-colors">Inicio</a></li>
                  <li><a href="#servicios" className="hover:text-[rgb(122,24,35)] transition-colors">Servicios</a></li>
                  <li><a href="#doctor" className="hover:text-[rgb(122,24,35)] transition-colors">Doctor</a></li>
                  <li><a href="#faq" className="hover:text-[rgb(122,24,35)] transition-colors">Preguntas</a></li>
                  <li><a href="#contacto" className="hover:text-[rgb(122,24,35)] transition-colors">Contacto</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[12px] font-bold text-white uppercase tracking-wider">Servicios</h4>
                <ul className="mt-4 space-y-2 text-[14px] sm:text-[15px] text-[#555963]">
                  <li><a href="#servicios" className="hover:text-[rgb(122,24,35)] transition-colors">Examen de la vista</a></li>
                  <li><a href="#servicios" className="hover:text-[rgb(122,24,35)] transition-colors">Fotografía de retina</a></li>
                  <li><a href="#servicios" className="hover:text-[rgb(122,24,35)] transition-colors">Presión ocular</a></li>
                  <li><a href="#servicios" className="hover:text-[rgb(122,24,35)] transition-colors">Lentes de contacto</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[12px] font-bold text-white uppercase tracking-wider">Ubicación</h4>
                <p className="mt-4 text-[14px] sm:text-[15px] text-[#555963] leading-relaxed">
                  Plaza Higuerones, San Rafael Abajo de Desamparados, Local 23.<br />
                  <span className="block mt-2 font-bold text-white">Lunes a Sábado</span>
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-gray-400 tracking-wider">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <span>© {new Date().getFullYear()} Ópticas Popular Dr. Fabio Mora Medina. Todos los derechos reservados.</span>
                <div className="flex items-center gap-6">
                  <a href="#" className="hover:text-[rgb(122,24,35)] transition-colors">Política de Privacidad</a>
                  <a href="#" className="hover:text-[rgb(122,24,35)] transition-colors">Términos del Servicio</a>
                </div>
              </div>
              <a href="https://web.localrank.com.co/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[rgb(122,24,35)] transition-colors group">
                Hechas <span className="text-[rgb(122,24,35)] group-hover:scale-125 transition-transform">❤</span> localrank.com.co
              </a>
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
                <span>Llamar</span>
              </a>
              <a
                href="https://wa.me/50672760215"
                className="inline-flex flex-col items-center justify-center h-12 rounded-xl bg-[rgb(122,24,35)] text-white text-[11px] font-bold active:scale-95 transition-transform shadow-md"
              >
                <MessageCircle className="w-4 h-4 mb-0.5" />
                <span>Cita</span>
              </a>
            </div>
          </div>

        {/* Floating WhatsApp Button */}
        <motion.a
          href="https://wa.me/50672760215"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex fixed bottom-20 md:bottom-6 right-4 md:right-6 z-[45] w-14 h-14 bg-[#25D366] text-white rounded-full items-center justify-center shadow-2xl hover:bg-[#20ba5a] transition-all group"
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

