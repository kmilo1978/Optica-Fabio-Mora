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
  ChevronUp,
  HelpCircle
} from 'lucide-react';

const NAV_LINKS = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Doctor', href: '#doctor' },
  { name: 'Contacto', href: '#contacto' },
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
    description: 'Examen completo para conocer con precisión tu estado visual y orientar la mejor solución.',
    icon: Eye,
  },
  {
    title: 'Fotografía de retina',
    description: 'Valoración de la salud ocular mediante imágenes que ayudan a detectar alteraciones a tiempo.',
    icon: Camera,
  },
  {
    title: 'Toma de presión ocular',
    description: 'Medición orientada a detectar factores de riesgo relacionados con glaucoma y control ocular.',
    icon: Activity,
  },
  {
    title: 'Valoración de cataratas',
    description: 'Diagnóstico y orientación para entender el estado de tu visión y el manejo recomendado.',
    icon: Stethoscope,
  },
  {
    title: 'Evaluación de ojo seco',
    description: 'Revisión de molestias o resequedad para proponerte una solución más cómoda y efectiva.',
    icon: Droplets,
  },
  {
    title: 'Lentes de contacto',
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-[rgb(122,24,35)] selection:text-white">
      <main className="max-w-[1380px] mx-auto p-3 md:p-5 xl:p-6">
        <div className="bg-[#F3F4F7] rounded-[2px] overflow-hidden shadow-sm">
          
          {/* Navigation */}
          <header className={`sticky top-0 z-50 px-4 md:px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : ''}`}>
            <div className="flex items-center justify-between gap-4">
              <a href="#inicio" className="flex items-center gap-2 shrink-0 group">
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[rgb(122,24,35)] text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Eye size={24} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[16px] md:text-[18px] font-bold tracking-tight text-[#13151A]">Ópticas Popular</span>
                  <span className="text-[10px] md:text-[11px] font-medium text-[rgb(122,24,35)] uppercase tracking-wider mt-0.5">Dr. Fabio Mora Medina</span>
                </div>
              </a>

              {/* Desktop Nav */}
              <nav className="hidden xl:flex items-center gap-6 text-[10px] lg:text-[11px] uppercase tracking-[0.12em] text-[#1C1D21]">
                {NAV_LINKS.map((link) => (
                  <a key={link.name} href={link.href} className="hover:text-[rgb(122,24,35)] transition-colors">
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <a
                  href="tel:+50672760215"
                  className="hidden xl:inline-flex items-center justify-center h-8 px-4 rounded-[6px] bg-white border border-[#E3E5EC] text-[#15171C] text-[10px] font-medium cta-secondary"
                >
                  <Phone className="w-3 h-3 mr-2" />
                  Llamar
                </a>

                <a
                  href="https://wa.me/50672760215"
                  className="hidden xl:inline-flex items-center justify-center h-8 px-4 rounded-[6px] bg-[rgb(122,24,35)] text-white text-[10px] font-medium whitespace-nowrap cta-primary"
                >
                  <MessageCircle className="w-3 h-3 mr-2" />
                  Agendar
                </a>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                  className="xl:hidden w-11 h-11 rounded-[10px] bg-white border border-[#E3E5EC] flex items-center justify-center text-[#15171C]"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="xl:hidden absolute left-4 right-4 md:left-6 md:right-6 top-[76px] bg-white rounded-[14px] border border-[#E3E5EC] shadow-xl overflow-hidden"
                >
                  <div className="p-4 md:p-5">
                    <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {NAV_LINKS.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="h-11 px-4 rounded-[10px] bg-[#F3F4F7] text-[#15171C] text-[11px] uppercase tracking-[0.08em] inline-flex items-center hover:bg-[rgb(122,24,35)] hover:text-white transition-colors"
                        >
                          {link.name}
                        </a>
                      ))}
                    </nav>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href="tel:+50672760215"
                        className="inline-flex items-center justify-center h-11 rounded-[10px] bg-[#F3F4F7] text-[#15171C] text-[11px] font-medium"
                      >
                        Llamar ahora
                      </a>

                      <a
                        href="https://wa.me/50672760215"
                        className="inline-flex items-center justify-center h-11 rounded-[10px] bg-[rgb(122,24,35)] text-white text-[11px] font-medium"
                      >
                        Agendar por WhatsApp
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </header>

          {/* Hero Section */}
          <section id="inicio" className="px-4 md:px-6 pt-3">
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
                  <div className="px-5 sm:px-8 md:px-10 py-12 md:py-14 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <div className="inline-flex items-center h-7 px-3 rounded-full bg-white text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-[#6A6E79] w-fit shadow-sm">
                      Exámenes visuales integrales
                    </div>

                    <h1 className="mt-5 md:mt-6 max-w-[18ch] sm:max-w-[22ch] text-[34px] sm:text-[42px] md:text-[56px] lg:text-[68px] leading-[0.96] md:leading-[0.93] tracking-tight font-bold text-[#13151A]">
                      Agendá tu <span className="text-[rgb(122,24,35)]">examen visual</span> antes de que el problema avance
                    </h1>

                    <p className="mt-4 md:mt-5 max-w-[42ch] sm:max-w-[60ch] text-[13px] sm:text-[14px] md:text-[13px] lg:text-[14px] leading-[1.68] text-[#5E616B]">
                      Si notás visión borrosa, molestias, cansancio ocular o tus lentes ya no responden como antes, este es el momento de revisarte con atención profesional y resultados claros.
                    </p>

                  <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3 w-full sm:w-auto max-w-[440px] justify-center md:justify-start">
                    <a
                      href="https://wa.me/50672760215"
                      className="inline-flex items-center justify-center h-11 sm:h-10 px-6 rounded-[8px] bg-[rgb(122,24,35)] text-white text-[11px] md:text-[10px] font-medium cta-primary w-full sm:w-auto"
                    >
                      Agendar por WhatsApp
                    </a>

                    <a
                      href="tel:+50672760215"
                      className="inline-flex items-center justify-center h-11 sm:h-10 px-5 rounded-[8px] bg-white text-[#15171C] text-[11px] md:text-[10px] font-medium border border-[#E3E5EC] cta-secondary w-full sm:w-auto"
                    >
                      Llamar ahora
                    </a>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 w-full max-w-[580px]">
                    {[
                      { label: 'Frecuencia', value: '1 vez al año recomendado' },
                      { label: 'Atención', value: 'Para niños, adultos y mayores' },
                      { label: 'Reserva', value: 'WhatsApp o llamada directa' },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/90 backdrop-blur-[2px] rounded-[10px] px-3 py-3 pro-card shadow-sm border border-white/50">
                        <p className="text-[9px] uppercase tracking-[0.10em] text-[#7A7F8A]">{item.label}</p>
                        <p className="mt-1 text-[11px] sm:text-[12px] leading-[1.45] text-[#15171C] font-medium">{item.value}</p>
                      </div>
                    ))}
                  </div>
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
                    <p className="text-[9px] uppercase tracking-[0.12em] text-white/80">Acción recomendada</p>
                    <p className="mt-2 text-[12px] md:text-[13px] leading-[1.5] font-medium">
                      Agendá tu revisión hoy y resolvé tus dudas con orientación profesional.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Social Proof */}
          <section className="px-4 md:px-6 pt-3">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
              {[
                { title: '+11', desc: 'años de trayectoria' },
                { title: 'Integral', desc: 'evaluación completa y clara' },
                { title: 'Familia', desc: 'atención para todas las edades' },
                { title: 'Directo', desc: 'contacto por llamada o WhatsApp' },
              ].map((item, i) => (
                <motion.article 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[12px] px-4 py-4 text-center pro-card shadow-sm"
                >
                  <div className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] leading-none tracking-tight font-bold text-[#14161B]">{item.title}</div>
                  <p className="mt-2 text-[10px] sm:text-[11px] leading-[1.45] text-[#666A74]">{item.desc}</p>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Urgency Section */}
          <section className="px-4 md:px-6 pt-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[14px] overflow-hidden shadow-sm"
            >
              <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                <div className="p-5 md:p-6 border-b lg:border-b-0 lg:border-r border-[#E7EAF1]">
                  <span className="inline-flex items-center h-5 px-2 rounded-full bg-[#F2F3F7] text-[7px] uppercase tracking-[0.14em] text-[#7C808B]">
                    Urgencia
                  </span>
                  <h2 className="mt-4 max-w-[20ch] text-[24px] sm:text-[28px] md:text-[30px] leading-[1.08] tracking-tight font-bold text-[#15171C]">
                    Esperar demasiado puede hacer que el problema afecte más <span className="text-[rgb(122,24,35)]">tu rutina</span>
                  </h2>
                  <p className="mt-3 max-w-[38ch] text-[12px] sm:text-[13px] md:text-[12px] leading-[1.68] text-[#6D727D]">
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
                      <h3 className="text-[12px] sm:text-[13px] font-bold">{item.title}</h3>
                      <p className={`mt-2 text-[11px] md:text-[10px] lg:text-[11px] leading-[1.6] ${item.dark ? 'text-white/85' : 'text-[#6D727D]'}`}>
                        {item.desc}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Process & Brands */}
          <section className="px-4 md:px-6 pt-6">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-3">
              <motion.div 
                id="proceso" 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[14px] p-5 md:p-6 shadow-sm"
              >
                <span className="inline-flex items-center justify-center h-5 px-3 rounded-full bg-[#F2F3F7] text-[7px] uppercase tracking-[0.14em] text-[#7C808B]">
                  Proceso simple
                </span>

                <h2 className="mt-4 max-w-[18ch] text-[24px] sm:text-[28px] md:text-[30px] leading-[1.08] tracking-tight font-bold text-[#15171C]">
                  Una estructura pensada para tu comodidad
                </h2>

                <div className="mt-5 grid gap-3">
                  {[
                    { step: 'Paso 1', title: 'Contactás por WhatsApp o llamada', desc: 'Elegís la vía más rápida para coordinar tu revisión.' },
                    { step: 'Paso 2', title: 'Recibís evaluación visual integral', desc: 'Se revisa tu visión y se explican los hallazgos con claridad.' },
                    { step: 'Paso 3', title: 'Salís con una recomendación clara', desc: 'Entendés qué necesitás y cuál es el siguiente paso recomendado.', dark: true },
                  ].map((item, i) => (
                    <article 
                      key={i} 
                      className={`rounded-[12px] p-4 pro-card shadow-sm ${item.dark ? 'bg-[rgb(122,24,35)] text-white' : 'bg-[#F3F4F7] text-[#15171C]'}`}
                    >
                      <p className={`text-[9px] uppercase tracking-[0.10em] ${item.dark ? 'text-white/80' : 'text-[#7A7F8A]'}`}>{item.step}</p>
                      <h3 className="mt-2 text-[14px] md:text-[15px] leading-[1.2] font-bold">{item.title}</h3>
                      <p className={`mt-2 text-[11px] md:text-[10px] lg:text-[11px] leading-[1.6] ${item.dark ? 'text-white/85' : 'text-[#6D727D]'}`}>{item.desc}</p>
                    </article>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[14px] px-5 md:px-6 py-6 md:py-7 overflow-hidden shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center justify-center h-5 px-3 rounded-full bg-[#F2F3F7] text-[7px] uppercase tracking-[0.14em] text-[#7C808B]">
                      Marcas reconocidas
                    </span>
                    <h2 className="mt-4 max-w-[28ch] text-[24px] sm:text-[28px] md:text-[30px] leading-[1.08] tracking-tight font-bold text-[#15171C]">
                      Opciones populares en <span className="text-[rgb(122,24,35)]">lentes y soluciones visuales</span> según tu necesidad
                    </h2>
                  </div>

                  <a
                    href="https://wa.me/50672760215"
                    className="inline-flex items-center justify-center h-10 px-5 rounded-[8px] bg-[rgb(122,24,35)] text-white text-[10px] sm:text-[11px] md:text-[10px] font-medium whitespace-nowrap cta-primary"
                  >
                    Consultar disponibilidad
                  </a>
                </div>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {BRANDS.map((brand, i) => (
                    <div key={i} className="bg-[#F3F4F7] rounded-[12px] h-[86px] px-4 flex items-center justify-center text-center pro-card shadow-sm">
                      <span className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-none tracking-tight font-bold text-[#15171C]">{brand}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[12px] bg-[#F3F4F7] px-4 py-4 pro-card shadow-sm border border-gray-100">
                  <p className="max-w-[68ch] text-[11px] sm:text-[12px] md:text-[11px] leading-[1.65] text-[#6D727D]">
                    La recomendación final depende de tu examen visual, tu graduación y el tipo de uso diario que necesités.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Services Section */}
          <section id="servicios" className="px-4 md:px-6 pt-10">
            <div className="flex justify-center">
              <span className="inline-flex items-center justify-center h-5 px-3 rounded-full bg-white text-[7px] uppercase tracking-[0.14em] text-[#767A84] shadow-sm">
                Nuestros servicios
              </span>
            </div>

            <h2 className="mt-5 max-w-[20ch] sm:max-w-[24ch] md:max-w-[18ch] lg:max-w-[22ch] mx-auto text-center text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] leading-tight tracking-tight font-bold text-[#14161B]">
              Evaluaciones completas y <span className="text-[rgb(122,24,35)]">soluciones visuales</span> adaptadas a cada paciente
            </h2>

            <div className="mt-6 relative grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              {SERVICES.map((service, i) => (
                <motion.article 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[14px] p-5 min-h-[148px] pro-card shadow-sm flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F3F4F7] flex items-center justify-center text-[rgb(122,24,35)]">
                      <service.icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-[17px] sm:text-[18px] md:text-[18px] leading-[1.2] tracking-tight font-bold text-[#15171C]">{service.title}</h3>
                  </div>
                  <p className="text-[12px] sm:text-[13px] md:text-[11px] lg:text-[12px] leading-[1.65] text-[#6A6D77] flex-grow">
                    {service.description}
                  </p>
                  <a href="https://wa.me/50672760215" className="inline-flex items-center gap-2 mt-4 text-[11px] md:text-[10px] font-bold text-[#15171C] hover:text-[rgb(122,24,35)] transition-colors">
                    Reservar cita <ArrowUpRight className="w-3 h-3" />
                  </a>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <section id="galeria" className="px-4 md:px-6 pt-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[14px] px-5 md:px-6 py-6 md:py-7 overflow-hidden shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <span className="inline-flex items-center justify-center h-5 px-3 rounded-full bg-[#F2F3F7] text-[7px] uppercase tracking-[0.14em] text-[#7C808B]">
                    Galería
                  </span>
                  <h2 className="mt-4 max-w-[24ch] text-[24px] sm:text-[28px] md:text-[30px] leading-[1.08] tracking-tight font-bold text-[#15171C]">
                    Un espacio pensado para una revisión visual <span className="text-[rgb(122,24,35)]">cómoda, clara y profesional</span>
                  </h2>
                </div>

                <a
                  href="https://wa.me/50672760215"
                  className="inline-flex items-center justify-center h-10 px-5 rounded-[8px] bg-[rgb(122,24,35)] text-white text-[10px] sm:text-[11px] md:text-[10px] font-medium whitespace-nowrap cta-primary"
                >
                  Agendar valoración
                </a>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-[1.08fr_0.92fr] gap-3">
                <article className="group relative rounded-[14px] overflow-hidden min-h-[320px] md:min-h-[360px] pro-card shadow-md">
                  <img
                    src="https://content.pancake.vn/web-media-262/0a/72/2c/cd/859ae20a5707f68e7b103f3d02920717fdcd8ed948237733db5ab183-w:700-h:467-l:39011-t:image/jpeg.jpeg"
                    alt="Evaluación visual profesional"
                    className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute left-0 right-0 bottom-0 p-5 md:p-6">
                    <div className="inline-flex items-center h-5 px-2 rounded-full bg-white/90 text-[7px] uppercase tracking-[0.14em] text-[#6A6E79] font-bold">
                      Atención visual
                    </div>
                    <h3 className="mt-3 max-w-[24ch] text-[20px] sm:text-[22px] md:text-[24px] leading-[1.1] tracking-tight font-bold text-white">
                      Evaluación visual integral con acompañamiento profesional
                    </h3>
                  </div>
                </article>

                <div className="grid grid-cols-1 gap-3">
                  <article className="group relative rounded-[14px] overflow-hidden min-h-[173px] pro-card shadow-md">
                    <img
                      src="https://content.pancake.vn/web-media-262/3d/24/a3/d4/3a74f769e1ca5261250f65e2e9911c8164ad0022ef125ae3dd451852-w:1200-h:675-l:106469-t:image/jpeg.jpeg"
                      alt="Tecnología para diagnóstico visual"
                      className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute left-0 right-0 bottom-0 p-4">
                      <h3 className="max-w-[20ch] text-[16px] sm:text-[17px] md:text-[18px] leading-[1.15] tracking-tight font-bold text-white">
                        Tecnología para una valoración precisa
                      </h3>
                    </div>
                  </article>

                  <div className="grid grid-cols-2 gap-3">
                    <article className="group relative rounded-[14px] overflow-hidden min-h-[173px] pro-card shadow-md">
                      <img
                        src="https://content.pancake.vn/web-media-262/2f/b0/37/cd/56114753eecc12cb63eefa879704d4bf40e014559f4c14139c87d036-w:297-h:400-l:19848-t:image/jpeg.jpeg"
                        alt="Atención profesional personalizada"
                        className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute left-0 right-0 bottom-0 p-4">
                        <h3 className="max-w-[12ch] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.15] tracking-tight font-bold text-white">
                          Atención cercana
                        </h3>
                      </div>
                    </article>

                    <article className="group relative rounded-[14px] overflow-hidden min-h-[173px] pro-card shadow-md">
                      <img
                        src="https://content.pancake.vn/web-media-262/4f/26/e9/07/5c5601a47c49055462953a64179c907190bdb5f17135f2be2b99eb10-w:297-h:400-l:16706-t:image/jpeg.jpeg"
                        alt="Recomendación de soluciones visuales"
                        className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute left-0 right-0 bottom-0 p-4">
                        <h3 className="max-w-[12ch] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.15] tracking-tight font-bold text-white">
                          Soluciones a tu medida
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-[12px] bg-[#F3F4F7] px-4 py-4 pro-card shadow-sm border border-gray-100">
                <p className="max-w-[68ch] text-[11px] sm:text-[12px] md:text-[11px] leading-[1.65] text-[#6D727D]">
                  Cada consulta busca que salgas con una respuesta clara sobre tu visión y el siguiente paso recomendado.
                </p>
              </div>
            </motion.div>
          </section>

          {/* Testimonials */}
          <section id="testimonios" className="px-4 md:px-6 pt-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[14px] px-5 md:px-6 py-6 md:py-7 overflow-hidden shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <span className="inline-flex items-center justify-center h-5 px-3 rounded-full bg-[#F2F3F7] text-[7px] uppercase tracking-[0.14em] text-[#7C808B]">
                    Testimonios
                  </span>
                  <h2 className="mt-4 max-w-[26ch] text-[24px] sm:text-[28px] md:text-[30px] leading-[1.08] tracking-tight font-bold text-[#15171C]">
                    La <span className="text-[rgb(122,24,35)]">confianza se gana</span> con atención clara, cercana y resultados bien explicados
                  </h2>
                </div>

                <a
                  href="https://wa.me/50672760215"
                  className="inline-flex items-center justify-center h-10 px-5 rounded-[8px] bg-[rgb(122,24,35)] text-white text-[10px] sm:text-[11px] md:text-[10px] font-medium whitespace-nowrap cta-primary"
                >
                  Agendar valoración
                </a>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                {TESTIMONIALS.map((t, i) => (
                  <article key={i} className="bg-[#F3F4F7] rounded-[14px] p-5 pro-card shadow-sm border border-gray-100">
                    <div className="text-[20px] leading-none text-[rgb(122,24,35)] font-bold">“</div>
                    <p className="mt-3 text-[12px] sm:text-[13px] md:text-[12px] leading-[1.72] text-[#5E616B]">
                      {t.content}
                    </p>
                    <div className="mt-5 pt-4 border-t border-[#E3E5EC]">
                      <h3 className="text-[12px] sm:text-[13px] font-bold text-[#15171C]">{t.name}</h3>
                      <p className="mt-1 text-[10px] sm:text-[11px] text-[#7A7F8A]">{t.role}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-3">
                <article className="bg-[#F3F4F7] rounded-[14px] p-5 pro-card shadow-sm border border-gray-100">
                  <span className="inline-flex items-center justify-center h-5 px-2 rounded-full bg-white text-[7px] uppercase tracking-[0.14em] text-[#7C808B] shadow-sm">
                    Experiencia del paciente
                  </span>
                  <h3 className="mt-4 max-w-[24ch] text-[20px] sm:text-[22px] md:text-[24px] leading-[1.1] tracking-tight font-bold text-[#15171C]">
                    Una consulta diseñada para entender, decidir y actuar con claridad
                  </h3>
                  <p className="mt-3 max-w-[40ch] text-[11px] sm:text-[12px] md:text-[11px] leading-[1.7] text-[#6D727D]">
                    La meta no es solo revisar tu visión, sino ayudarte a entender qué necesitás y qué solución se adapta mejor a vos.
                  </p>
                </article>

                <article className="bg-[rgb(122,24,35)] rounded-[14px] p-6 md:p-8 text-white pro-card shadow-lg flex flex-col justify-between">
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
                      className="inline-flex items-center justify-center w-full sm:w-auto h-12 sm:h-10 px-8 rounded-[10px] bg-white text-[rgb(122,24,35)] text-[12px] sm:text-[11px] md:text-[10px] font-bold shadow-md hover:bg-gray-100 transition-all active:scale-95"
                    >
                      Quiero agendar mi cita
                    </a>
                  </div>
                </article>
              </div>
            </motion.div>
          </section>

          {/* Doctor Section */}
          <section id="doctor" className="px-4 md:px-6 pt-10">
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
                <div className="w-full md:w-[38%] lg:w-[32%] min-h-[340px] md:min-h-[480px] relative overflow-hidden">
                  <img 
                    src="https://content.pancake.vn/web-media-262/f8/7a/8c/db/28a595fabedd02a19921777a0ab62c9a2d54e3e34ae3176dbb60cc55-w:1760-h:2370-l:7142028-t:image/png.png" 
                    alt="Dr. Fabio Mora Medina"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F3F4F7] via-transparent to-transparent md:hidden"></div>
                </div>

                <div className="flex-1 px-5 md:px-10 py-10 md:py-12 flex flex-col justify-center text-center md:text-left">
                  <div className="flex justify-center md:justify-start">
                    <span className="inline-flex items-center h-5 px-2 rounded-full bg-white text-[7px] uppercase tracking-[0.14em] text-[#7C808B] shadow-sm">
                      Confianza profesional
                    </span>
                  </div>

                  <h2 className="mt-6 md:mt-4 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[1.1] tracking-tight font-bold text-[#15171C]">
                    Dr. Fabio Mora Medina
                  </h2>

                  <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-3 max-w-[760px] md:mx-0">
                    {[
                      { title: 'Formación', desc: 'Licenciado en Optometría y Máster en Atención Optométrica en Patología Ocular.' },
                      { title: 'Experiencia', desc: 'Más de 11 años dedicados al cuidado visual de familias y experiencia clínica comprobada.' },
                      { title: 'Respaldo', desc: 'Miembro de Canadian Vision Care y trayectoria académica y humanitaria internacional.' },
                    ].map((item, i) => (
                      <article key={i} className="bg-white rounded-[12px] px-4 py-5 text-left pro-card shadow-sm border border-gray-100">
                        <h3 className="text-[12px] sm:text-[13px] font-bold text-[#15171C]">{item.title}</h3>
                        <p className="mt-2 text-[10px] md:text-[9px] lg:text-[10px] leading-[1.5] text-[#6D727D]">
                          {item.desc}
                        </p>
                      </article>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-center md:justify-start">
                    <a href="https://wa.me/50672760215" className="inline-flex items-center justify-center h-11 px-6 rounded-[8px] bg-[rgb(122,24,35)] text-white text-[11px] font-medium cta-primary shadow-lg shadow-[rgb(122,24,35)]/20">
                      Agendá tu examen hoy
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Final CTA */}
          <section className="px-4 md:px-6 pt-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[14px] px-5 md:px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pro-card shadow-sm"
            >
              <div>
                <h3 className="text-[20px] sm:text-[22px] md:text-[22px] tracking-tight leading-[1.1] font-bold text-[#15171C]">
                  No esperés a notar un problema mayor
                </h3>
                <p className="mt-2 max-w-[38ch] text-[12px] sm:text-[13px] md:text-[11px] lg:text-[12px] leading-[1.65] text-[#6A6D77]">
                  Si sentís molestias, cambios en tu visión o tus lentes ya no responden como antes, este es un buen momento para revisarte.
                </p>
              </div>
              <a href="https://wa.me/50672760215" className="inline-flex items-center justify-center h-10 px-5 rounded-[8px] bg-[rgb(122,24,35)] text-white text-[10px] sm:text-[11px] md:text-[10px] font-medium whitespace-nowrap cta-primary">
                Agendá por WhatsApp
              </a>
            </motion.div>
          </section>

          {/* Contact Section */}
          {/* FAQ Section */}
          <section id="faq" className="px-4 md:px-6 pt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[14px] p-5 md:p-8 shadow-sm border border-gray-100"
            >
              <div className="flex justify-start">
                <span className="inline-flex items-center h-5 px-2 rounded-full bg-[#F2F3F7] text-[7px] uppercase tracking-[0.14em] text-[#7C808B] shadow-sm">
                  <HelpCircle className="w-3 h-3 mr-1.5 text-[rgb(122,24,35)]" /> Preguntas frecuentes
                </span>
              </div>
              <h2 className="mt-4 text-[24px] sm:text-[28px] md:text-[30px] leading-[1.08] tracking-tight font-bold text-[#15171C]">
                Resolvé tus <span className="text-[rgb(122,24,35)]">dudas</span>
              </h2>
              <p className="mt-3 max-w-[42ch] text-[12px] sm:text-[13px] md:text-[12px] leading-[1.68] text-[#6D727D]">
                Aquí encontrarás respuestas a las consultas más comunes sobre nuestros servicios y el cuidado de tu salud visual.
              </p>

              <div className="mt-8 space-y-3">
                {FAQS.map((faq, index) => (
                  <div 
                    key={index}
                    className="border border-[#E3E5EC] rounded-[12px] overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-[#F9FAFB] transition-colors"
                    >
                      <span className="text-[13px] sm:text-[14px] font-bold text-[#15171C] pr-4">
                        {faq.question}
                      </span>
                      {openFaqIndex === index ? (
                        <ChevronUp className="w-4 h-4 text-[rgb(122,24,35)] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#7C808B] flex-shrink-0" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openFaqIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-5 pb-4 text-[12px] sm:text-[13px] leading-[1.6] text-[#6D727D] border-t border-[#F3F4F7] pt-3">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          <section id="contacto" className="px-4 md:px-6 pt-10 pb-20 md:pb-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[14px] p-5 shadow-sm"
            >
              <div className="flex justify-start">
                <span className="inline-flex items-center h-5 px-2 rounded-full bg-[#F2F3F7] text-[7px] uppercase tracking-[0.14em] text-[#7C808B] shadow-sm">
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
                        <h4 className="text-[10px] font-bold text-[#7C808B] uppercase tracking-[0.1em]">Teléfonos</h4>
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
                        <h4 className="text-[10px] font-bold text-[#7C808B] uppercase tracking-[0.1em]">Correo</h4>
                        <p className="mt-0.5 text-[12px] text-[#15171C] font-bold break-all">fmora@opticaspopular.com</p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm border border-[#E3E5EC] flex-shrink-0">
                        <ArrowUpRight className="w-4 h-4 text-[rgb(122,24,35)]" />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold text-[#7C808B] uppercase tracking-[0.1em]">Ubicación</h4>
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
                        <h4 className="text-[10px] font-bold text-[#7C808B] uppercase tracking-[0.1em]">Horario</h4>
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
                <a href="#" aria-label="Visitar nuestra página de Facebook" className="bg-[#F3F4F7] rounded-[12px] px-4 py-3 text-[11px] md:text-[10px] font-bold text-[#15171C] text-center pro-card shadow-sm flex items-center justify-center gap-2">
                  <Facebook className="w-3 h-3" /> Facebook
                </a>
                <a href="#" aria-label="Visitar nuestro perfil de Instagram" className="bg-[#F3F4F7] rounded-[12px] px-4 py-3 text-[11px] md:text-[10px] font-bold text-[#15171C] text-center pro-card shadow-sm flex items-center justify-center gap-2">
                  <Instagram className="w-3 h-3" /> Instagram
                </a>
                <a href="#" aria-label="Visitar nuestro perfil de TikTok" className="bg-[#F3F4F7] rounded-[12px] px-4 py-3 text-[11px] md:text-[10px] font-bold text-[#15171C] text-center pro-card shadow-sm flex items-center justify-center gap-2">
                  TikTok
                </a>
              </div>
            </motion.div>
          </section>

          {/* Footer */}
          <footer className="px-4 md:px-6 py-12 bg-white mt-10 rounded-[14px] shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="text-[12px] font-bold text-[#15171C] uppercase tracking-wider">Ópticas Popular Dr. Fabio Mora Medina</h4>
                <p className="mt-4 text-[12px] leading-relaxed text-[#6D727D]">
                  Especialistas en salud visual integral en San Rafael Abajo de Desamparados. Ofrecemos exámenes de la vista avanzados, adaptación de lentes y soluciones personalizadas para toda la familia.
                </p>
              </div>
              <div>
                <h4 className="text-[12px] font-bold text-[#15171C] uppercase tracking-wider">Servicios Principales</h4>
                <ul className="mt-4 space-y-2 text-[12px] text-[#6D727D]">
                  <li>Examen de la vista integral</li>
                  <li>Fotografía de retina</li>
                  <li>Toma de presión ocular</li>
                  <li>Adaptación de lentes de contacto</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[12px] font-bold text-[#15171C] uppercase tracking-wider">Ubicación y Horario</h4>
                <p className="mt-4 text-[12px] text-[#6D727D]">
                  Plaza Higuerones, San Rafael Abajo de Desamparados, Local 23.<br />
                  Lunes a Sábado: Atención bajo cita previa.
                </p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-100 text-center text-[10px] text-gray-500 uppercase tracking-widest">
              © {new Date().getFullYear()} Ópticas Popular Dr. Fabio Mora Medina. Todos los derechos reservados.
            </div>
          </footer>

          {/* Sticky Mobile CTA */}
          <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-gradient-to-t from-[#D7DAE5] via-[#D7DAE5]/90 to-transparent">
            <div className="grid grid-cols-2 gap-3 max-w-[560px] mx-auto">
              <a
                href="tel:+50672760215"
                className="inline-flex items-center justify-center h-11 rounded-[10px] bg-white border border-[#E3E5EC] text-[#15171C] text-[11px] font-bold shadow-sm active:scale-95 transition-transform"
              >
                Llamar
              </a>
              <a
                href="https://wa.me/50672760215"
                className="inline-flex items-center justify-center h-11 rounded-[10px] bg-[rgb(122,24,35)] text-white text-[11px] font-bold shadow-xl active:scale-95 transition-transform"
              >
                Agendar ahora
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
