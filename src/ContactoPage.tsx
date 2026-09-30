import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft,
  ArrowRight,
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Navigation,
  ShieldCheck,
  CreditCard,
  Receipt,
  Award,
  Sparkles,
  Facebook,
  Instagram,
  CheckCircle2,
  ExternalLink,
  Car
} from 'lucide-react';
import { Language } from './translations';
import Footer from './Footer';

interface ContactoPageProps {
  onBack: () => void;
  lang?: Language;
  onNavigate?: (view: 'landing' | 'consulta' | 'calificar' | 'test-visual' | 'contacto', hash?: string) => void;
}

export default function ContactoPage({ onBack, lang = 'es', onNavigate }: ContactoPageProps) {
  const isEn = lang === 'en';

  const handleFooterNavigate = (view: 'landing' | 'consulta' | 'calificar' | 'test-visual' | 'contacto', hash?: string) => {
    if (onNavigate) {
      onNavigate(view, hash);
    } else if (view === 'landing') {
      onBack();
      if (hash && hash !== '#inicio') {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (view === 'contacto') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = hash || '';
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-[#15171C] font-sans flex flex-col justify-between selection:bg-[rgb(122,24,35)] selection:text-white">
      {/* Cabecera Superior de la Página de Contacto */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 h-10 px-3.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#15171C] font-semibold text-[13px] border border-gray-200 transition-all active:scale-95 cursor-pointer"
              title={isEn ? 'Return to Home' : 'Volver al Inicio'}
            >
              <ArrowLeft className="w-4 h-4 text-[rgb(122,24,35)]" />
              <span>{isEn ? 'Back to Home' : 'Volver al Inicio'}</span>
            </button>

            <div className="h-6 w-px bg-gray-200 hidden sm:block" />

            <div className="hidden sm:flex items-center gap-2 text-[12px] text-gray-500">
              <MapPin className="w-3.5 h-3.5 text-[rgb(122,24,35)]" />
              <span className="font-semibold text-gray-700">Plaza Higuerones, Local 23</span>
              <span>·</span>
              <span>San Rafael Abajo de Desamparados</span>
            </div>
          </div>

          <a href="#inicio" onClick={onBack} className="shrink-0">
            <img 
              src="/images/logo-opticas-popular.png" 
              alt="Ópticas Popular" 
              className="h-9 sm:h-10 w-auto object-contain" 
            />
          </a>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="flex-1 py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado Editorial */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-1.5 h-7 px-3.5 rounded-full bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] text-[11px] sm:text-[12px] uppercase tracking-wider font-bold shadow-2xs mb-3.5 border border-[rgb(122,24,35)]/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-[rgb(122,24,35)]" />
              <span>{isEn ? 'Official Optical Practice & Clinic' : 'Consultorio Óptico Oficial'}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-[#14161B] leading-tight tracking-tight"
            >
              {isEn ? (
                <>Visit our clinic or get in <span className="text-[rgb(122,24,35)]">direct contact</span></>
              ) : (
                <>Coordiná tu cita o visitanos en <span className="text-[rgb(122,24,35)]">Plaza Higuerones</span></>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-3 text-[14.5px] sm:text-[16px] text-[#555963] leading-relaxed max-w-2xl mx-auto"
            >
              {isEn
                ? 'We are located on the main level of Plaza Higuerones in Desamparados. Free parking, direct Waze navigation, and personalized eye care with Dr. Fabio Mora.'
                : 'Estamos ubicados en Plaza Higuerones, Desamparados. Contamos con parqueo disponible, acceso directo por Waze y atención personalizada con el Dr. Fabio Mora.'}
            </motion.p>

            {/* Micro-insignias de tranquilidad */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11.5px] sm:text-[12px] font-semibold text-gray-600"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-2xs">
                <Car className="w-3.5 h-3.5 text-[rgb(122,24,35)]" />
                <span>{isEn ? 'Free Mall Parking' : 'Parqueo bajo techo y exterior'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-2xs">
                <CreditCard className="w-3.5 h-3.5 text-[rgb(122,24,35)]" />
                <span>SINPE Móvil & Tasa Cero</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isEn ? '30-Day Adaptation Guarantee' : '30 días de garantía'}</span>
              </span>
            </motion.div>
          </div>

          {/* Cuadrícula Principal de Contacto y Mapa */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
            {/* Columna Izquierda: Mapa Ampliado y Navegación GPS */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-gray-200/90 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] flex items-center justify-center">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-bold text-[#14161B]">
                        {isEn ? 'Clinic Location' : 'Ubicación de la Clínica'}
                      </h3>
                      <p className="text-[11.5px] text-gray-500">Plaza Higuerones, Local 23</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{isEn ? 'Easy Access' : 'Fácil acceso'}</span>
                  </span>
                </div>

                {/* Mapa Interactivo */}
                <div className="w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border border-gray-200 relative shadow-inner">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15722.057649214696!2d-84.081993!3d9.8910441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e3edbed430b5%3A0x4e83f4dbd6b649b2!2s%C3%93pticas%20Popular%20Plaza%20Higuerones%3A%20Aros%20I%20Lentes%20I%20Servicios%20Oft%C3%A1lmicos%20I%20Ex%C3%A1menes%20de%20Vista!5e0!3m2!1ses!2sco!4v1707761517794!5m2!1ses!2sco" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Ópticas Popular Plaza Higuerones"
                    className="w-full h-full"
                  />
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <span className="inline-flex items-center h-6 px-3 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-[#15171C] shadow-md border border-gray-100">
                      <MapPin className="w-3 h-3 mr-1 text-[rgb(122,24,35)]" /> Plaza Higuerones
                    </span>
                  </div>
                </div>

                {/* Botones de Navegación GPS (Costa Rica) */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://waze.com/ul?ll=9.8910441,-84.081993&navigate=yes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-12 px-4 rounded-xl bg-[#33CCFF] hover:bg-[#28b8e6] text-[#0b3340] font-bold text-[13px] shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <Navigation className="w-4 h-4 text-[#0b3340]" />
                    <span>{isEn ? 'Open in Waze' : 'Abrir ruta en Waze'}</span>
                  </a>

                  <a
                    href="https://maps.google.com/?q=Ópticas+Popular+Plaza+Higuerones+San+Rafael+Abajo+Desamparados"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-12 px-4 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-[#15171C] font-bold text-[13px] shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <MapPin className="w-4 h-4 text-[rgb(122,24,35)]" />
                    <span>{isEn ? 'Open in Google Maps' : 'Abrir en Google Maps'}</span>
                  </a>
                </div>
              </div>

              {/* Indicaciones Claras de Llegada */}
              <div className="mt-6 p-4 rounded-2xl bg-gray-50 border border-gray-200/70 text-[12.5px] text-[#555963] space-y-1">
                <p className="font-bold text-[#14161B] text-[13px]">
                  {isEn ? 'How to find us:' : 'Referencias de llegada:'}
                </p>
                <p>
                  {isEn
                    ? 'Located inside Plaza Higuerones, Unit 23. Direct access through the main entrance, opposite the transit bus stops with ample covered and open parking.'
                    : 'Dentro del Centro Comercial Plaza Higuerones, Local 23. Entrada principal frente a las paradas de autobuses, con parqueo amplio y seguro.'}
                </p>
              </div>
            </div>

            {/* Columna Derecha: Canales Directos de Atención y Horarios */}
            <div className="space-y-6 flex flex-col justify-between">
              {/* Tarjeta de Contacto Directo */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-lg space-y-5">
                <div className="border-b border-gray-100 pb-4">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[rgb(122,24,35)]">
                    {isEn ? 'Direct Attention' : 'Atención Directa'}
                  </span>
                  <h3 className="text-[20px] font-bold text-[#14161B] mt-0.5">
                    {isEn ? 'Reach Dr. Fabio Mora' : 'Contactá al Dr. Fabio Mora'}
                  </h3>
                  <p className="text-[12.5px] text-[#555963] mt-1">
                    {isEn ? 'Fastest response during clinic hours.' : 'Respuesta rápida en horario de consultorio.'}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* WhatsApp */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/60">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <MessageCircle className="w-5 h-5 fill-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                        {isEn ? 'Official WhatsApp' : 'WhatsApp Oficial'}
                      </div>
                      <div className="text-[14px] font-bold text-[#14161B] mt-0.5">+506 7276 0215</div>
                      <a
                        href="https://wa.me/50672760215"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[12px] font-bold text-emerald-700 hover:text-emerald-900 mt-1"
                      >
                        <span>{isEn ? 'Chat on WhatsApp' : 'Escribir por WhatsApp'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Teléfono Fijo y Móvil */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50 border border-gray-200/70">
                    <div className="w-10 h-10 rounded-xl bg-white text-[rgb(122,24,35)] flex items-center justify-center shrink-0 border border-gray-200 shadow-2xs">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                        {isEn ? 'Phone Calls' : 'Llamadas Telefónicas'}
                      </div>
                      <div className="text-[13.5px] font-bold text-[#14161B] mt-0.5">+506 7276 0215 · +506 2515 0002</div>
                      <p className="text-[11.5px] text-gray-500 mt-0.5">
                        {isEn ? 'Available during opening hours' : 'Coordinación directa de citas'}
                      </p>
                    </div>
                  </div>

                  {/* Horario */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50 border border-gray-200/70">
                    <div className="w-10 h-10 rounded-xl bg-white text-[rgb(122,24,35)] flex items-center justify-center shrink-0 border border-gray-200 shadow-2xs">
                      <Clock className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                        {isEn ? 'Opening Hours' : 'Horario de Consulta'}
                      </div>
                      <div className="text-[13.5px] font-bold text-[#14161B] mt-0.5">
                        {isEn ? 'Monday to Saturday: 9:00 AM - 6:00 PM' : 'Lunes a Sábado: 9:00 AM - 6:00 PM'}
                      </div>
                      <p className="text-[11.5px] text-gray-500 mt-0.5">
                        {isEn ? 'Closed on Sundays · By Appointment' : 'Domingos cerrado · Con cita previa'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Botón Principal de WhatsApp */}
                <div className="pt-2">
                  <a
                    href="https://wa.me/50672760215?text=Hola%20Dr.%20Fabio%20Mora,%20deseo%20coordinar%20una%20cita%20de%20valoraci%C3%B3n%20en%20Plaza%20Higuerones."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 h-13 px-6 rounded-2xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white text-[14px] font-bold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer btn-shimmer"
                  >
                    <MessageCircle className="w-4.5 h-4.5" />
                    <span>{isEn ? 'Book Appointment via WhatsApp' : 'Agendar Cita por WhatsApp'}</span>
                  </a>
                </div>
              </div>

              {/* Redes Sociales Oficiales */}
              <div className="bg-white rounded-3xl p-5 border border-gray-200/90 shadow-sm flex items-center justify-between">
                <div>
                  <h4 className="text-[13px] font-bold text-[#14161B]">
                    {isEn ? 'Follow us on Social Media' : 'Seguinos en redes sociales'}
                  </h4>
                  <p className="text-[11.5px] text-gray-500">Ópticas Popular Costa Rica</p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://www.facebook.com/opticaspopularcr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-[#1877F2] hover:text-white text-gray-700 flex items-center justify-center transition-all border border-gray-200/80 shadow-2xs"
                    title="Facebook Ópticas Popular"
                  >
                    <Facebook className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href="https://www.instagram.com/opticaspopularcr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-[#E4405F] hover:text-white text-gray-700 flex items-center justify-center transition-all border border-gray-200/80 shadow-2xs"
                    title="Instagram Ópticas Popular"
                  >
                    <Instagram className="w-4.5 h-4.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta de Métodos de Pago y Facilidades Médicas */}
          <div className="mt-8 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-md">
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-[rgb(122,24,35)]">
                {isEn ? 'Payment Methods & Guarantees' : 'Formas de Pago & Facilidades'}
              </span>
              <h3 className="text-[20px] font-bold text-[#14161B] mt-0.5">
                {isEn ? 'Transparent, Flexible Payment Options' : 'Opciones de pago cómodas y transparentes'}
              </h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-2xl bg-gray-50/80 border border-gray-200/70 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                  <CreditCard className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#14161B]">SINPE Móvil</div>
                  <div className="text-[11px] text-gray-500">{isEn ? 'Instant local transfer' : 'Inmediato y seguro'}</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50/80 border border-gray-200/70 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                  <CreditCard className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#14161B]">{isEn ? 'Cards' : 'Tarjetas'}</div>
                  <div className="text-[11px] text-gray-500">{isEn ? 'Debit & Credit' : 'Débito y Crédito'}</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50/80 border border-gray-200/70 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-100">
                  <Award className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#14161B]">Tasa Cero</div>
                  <div className="text-[11px] text-gray-500">{isEn ? 'Installment plans' : 'Cuotas autorizadas'}</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50/80 border border-gray-200/70 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 border border-purple-100">
                  <Receipt className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#14161B]">{isEn ? 'Electronic Invoice' : 'Factura Electrónica'}</div>
                  <div className="text-[11px] text-gray-500">{isEn ? 'For insurance / INS' : 'Para seguro o INS'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enlaces Rápidos a Otras Herramientas */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <a
              href="#consulta"
              onClick={(e) => {
                e.preventDefault();
                handleFooterNavigate('consulta', '#consulta');
              }}
              className="p-5 rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[rgb(122,24,35)]">
                  {isEn ? 'Detailed Inquiry' : 'Consulta Clasificada'}
                </span>
                <h4 className="text-[15px] font-bold text-[#14161B] group-hover:text-[rgb(122,24,35)] transition-colors">
                  {isEn ? 'Open WhatsApp Inquiry Form' : 'Abrir Formulario de Consulta'}
                </h4>
                <p className="text-[12px] text-gray-500 mt-0.5">
                  {isEn ? 'Send organized questions to Dr. Mora' : 'Formateá tus consultas con un solo clic'}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[rgb(122,24,35)] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
            </a>

            <a
              href="#test-visual"
              onClick={(e) => {
                e.preventDefault();
                handleFooterNavigate('test-visual', '#test-visual');
              }}
              className="p-5 rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[rgb(122,24,35)]">
                  {isEn ? 'Screening' : 'Autoevaluación'}
                </span>
                <h4 className="text-[15px] font-bold text-[#14161B] group-hover:text-[rgb(122,24,35)] transition-colors">
                  {isEn ? 'Take 3-Min Vision Test' : 'Hacer Test Visual Online (3 min)'}
                </h4>
                <p className="text-[12px] text-gray-500 mt-0.5">
                  {isEn ? 'Check acuity, astigmatism & colors' : 'Revisá agudeza, astigmatismo y daltonismo'}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[rgb(122,24,35)] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
            </a>
          </div>
        </div>
      </main>

      {/* Footer Corporativo Oficial de Alto Contraste */}
      <Footer lang={lang} onNavigate={handleFooterNavigate} />
    </div>
  );
}
