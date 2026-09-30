import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft,
  MessageCircle, 
  Send, 
  User, 
  Phone, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle,
  ShieldCheck,
  BellRing,
  Stethoscope,
  Glasses,
  Users,
  CreditCard,
  MapPin,
  Clock,
  Award
} from 'lucide-react';
import { Language } from './translations';

interface ConsultaPageProps {
  onBack: () => void;
  lang?: Language;
}

export default function ConsultaPage({ onBack, lang = 'es' }: ConsultaPageProps) {
  const isEn = lang === 'en';

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>(
    isEn ? 'Eye Exam & Prescription' : 'Examen de la vista y graduación'
  );
  const [customMessage, setCustomMessage] = useState('');
  const [acceptContact, setAcceptContact] = useState(true);
  const [acceptPromo, setAcceptPromo] = useState(true);
  const [acceptPrivacy, setAcceptPrivacy] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const FAQ_TOPICS = [
    { 
      id: 'exam', 
      label: isEn ? 'Eye Exam & Prescription' : 'Examen de la vista y graduación',
      desc: isEn ? 'Digital refraction, visual acuity & fundus exam' : 'Graduación computarizada, agudeza y fondo de ojo',
      icon: Stethoscope 
    },
    { 
      id: 'frames', 
      label: isEn ? 'Frames & Lens Replacement' : 'Aros y cambio de cristales',
      desc: isEn ? 'New frames or fitting lenses to your current frame' : 'Aros nuevos o adaptación de cristales en tus aros',
      icon: Glasses 
    },
    { 
      id: 'guarantee', 
      label: isEn ? '30-Day Adaptation Guarantee' : 'Garantía de adaptación (30 días)',
      desc: isEn ? 'Full re-evaluation and adjustment at no extra cost' : 'Reajuste y seguimiento sin costo adicional',
      icon: ShieldCheck 
    },
    { 
      id: 'family', 
      label: isEn ? 'Family Coordinated Appointments' : 'Citas seguidas para la familia',
      desc: isEn ? 'Appointments for kids, adults, and seniors' : 'Horarios continuos para chiquitos y adultos',
      icon: Users 
    },
    { 
      id: 'payment', 
      label: isEn ? 'Pricing, SINPE & Zero-Interest' : 'Precios, SINPE Móvil y Tasa Cero',
      desc: isEn ? 'Quotes, insurance invoice & payment options' : 'Cotización, factura electrónica y facilidades de pago',
      icon: CreditCard 
    },
    { 
      id: 'location', 
      label: isEn ? 'Plaza Higuerones Location & Hours' : 'Ubicación en Plaza Higuerones y horarios',
      desc: isEn ? 'Free parking, easy access & opening times' : 'Parqueo amplio, fácil acceso y horarios de atención',
      icon: MapPin 
    },
    { 
      id: 'other', 
      label: isEn ? 'Other Custom Inquiry' : 'Otra consulta médica o general',
      desc: isEn ? 'Direct question for Dr. Fabio Mora' : 'Pregunta específica para el Dr. Fabio Mora',
      icon: HelpCircle 
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setErrorMsg(isEn ? 'Please enter your full name.' : 'Por favor, ingresá tu nombre completo.');
      return;
    }

    if (!phoneNumber.trim()) {
      setErrorMsg(isEn ? 'Please enter your phone or WhatsApp number.' : 'Por favor, ingresá tu número de teléfono o WhatsApp.');
      return;
    }

    if (!acceptContact) {
      setErrorMsg(
        isEn
          ? 'You must accept being contacted to process your inquiry.'
          : 'Debés aceptar que te contactemos para coordinar tu consulta.'
      );
      return;
    }

    setErrorMsg('');

    // Construcción formal y médica del mensaje para WhatsApp (sin emoticones)
    const lines = [
      isEn 
        ? '*Hello Dr. Fabio Mora, I am contacting you from the Opticas Popular website.*'
        : '*Hola Dr. Fabio Mora, le escribo desde el sitio web de Ópticas Popular.*',
      '',
      isEn ? '*INQUIRY DETAILS:*' : '*DATOS DE LA CONSULTA:*',
      `• *${isEn ? 'Name' : 'Nombre'}:* ${fullName.trim()}`,
      `• *${isEn ? 'Phone / WhatsApp' : 'Teléfono / WhatsApp'}:* ${phoneNumber.trim()}`,
      `• *${isEn ? 'Selected Topic' : 'Tema de consulta'}:* ${selectedTopic}`,
    ];

    if (customMessage.trim()) {
      lines.push(`• *${isEn ? 'Additional notes or symptoms' : 'Detalle o molestia visual'}:* ${customMessage.trim()}`);
    }

    lines.push('');
    lines.push(isEn ? '*AUTHORIZATIONS & PREFERENCES:*' : '*AUTORIZACIONES Y PREFERENCIAS:*');
    lines.push(`• ${isEn ? 'Contact permission' : 'Acepto ser contactado para mi cita'}: ${acceptContact ? (isEn ? 'Yes' : 'Sí') : 'No'}`);
    lines.push(`• ${isEn ? 'Receive promotions and visual tips' : 'Acepto recibir promociones y consejos'}: ${acceptPromo ? (isEn ? 'Yes' : 'Sí') : 'No'}`);
    if (acceptPrivacy) {
      lines.push(`• ${isEn ? 'Privacy policy accepted' : 'Tratamiento confidencial de datos'}: ${isEn ? 'Yes' : 'Sí'}`);
    }

    lines.push('');
    lines.push(isEn ? 'Looking forward to your reply. Thank you.' : 'Quedo atento(a) a su respuesta. Muchas gracias.');

    const fullMessage = lines.join('\n');
    const waUrl = `https://wa.me/50672760215?text=${encodeURIComponent(fullMessage)}`;

    setIsSubmitted(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#15171C] font-sans selection:bg-[rgb(122,24,35)] selection:text-white flex flex-col justify-between">
      {/* Barra Superior con Navegación y Retorno */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-2xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 h-10 px-3.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#15171C] font-semibold text-[13px] border border-gray-200 transition-all active:scale-95 cursor-pointer"
              title={isEn ? 'Back to main website' : 'Volver a la página principal'}
            >
              <ArrowLeft className="w-4 h-4 text-[rgb(122,24,35)]" />
              <span>{isEn ? 'Back to Home' : 'Volver al Inicio'}</span>
            </button>

            <div className="h-6 w-px bg-gray-200 hidden sm:block" />

            <div className="hidden sm:flex items-center gap-2 text-[12px] text-gray-500">
              <span>{isEn ? 'Official Optical Clinic' : 'Consultorio Óptico Oficial'}</span>
              <span>·</span>
              <span className="font-semibold text-gray-700">Plaza Higuerones</span>
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

      {/* Contenido Principal de la Página Separada */}
      <main className="flex-1 py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Encabezado Editorial */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 h-7 px-3.5 rounded-full bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] text-[11px] sm:text-[12px] uppercase tracking-wider font-bold shadow-2xs mb-3.5 border border-[rgb(122,24,35)]/20">
              <Sparkles className="w-3.5 h-3.5 text-[rgb(122,24,35)]" />
              <span>{isEn ? 'Direct WhatsApp Consultation' : 'Formulario Oficial de Consulta'}</span>
            </div>

            <h1 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-[#14161B] leading-tight tracking-tight">
              {isEn ? 'Direct Inquiry with Dr. Fabio Mora' : 'Coordiná tu consulta con el Dr. Fabio Mora'}
            </h1>

            <p className="mt-3 text-[14px] sm:text-[15.5px] text-[#555963] leading-relaxed max-w-xl mx-auto">
              {isEn
                ? 'Select your inquiry topic and fill out your details. We will prepare an organized message sent directly to Dr. Fabio Mora.'
                : 'Seleccioná el tema de tu consulta y completá tus datos. Te prepararemos un mensaje claro y ordenado listo para enviar a WhatsApp.'}
            </p>

            {/* Badges de Confianza Médica */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11.5px] sm:text-[12px] font-semibold text-gray-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-[rgb(122,24,35)]" />
                <span>{isEn ? '18+ Years Experience' : 'Más de 18 años de experiencia'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isEn ? '30-Day Guarantee' : 'Garantía de 30 días'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[rgb(122,24,35)]" />
                <span>Plaza Higuerones, Desamparados</span>
              </span>
            </div>
          </div>

          {/* Tarjeta Contenedora del Formulario */}
          <div className="bg-white rounded-3xl p-6 sm:p-9 md:p-10 border border-gray-200/90 shadow-xl relative overflow-hidden">
            {/* Mensaje de Confirmación tras enviar */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-[13px] leading-relaxed">
                    <p className="font-bold">
                      {isEn ? 'Inquiry prepared successfully!' : '¡Mensaje preparado con éxito!'}
                    </p>
                    <p className="text-emerald-700 mt-0.5">
                      {isEn
                        ? 'WhatsApp opened in a new tab. If it did not open automatically, tap the button below again.'
                        : 'WhatsApp se abrió en una nueva ventana. Si tu navegador bloqueó la pestaña, podés presionar el botón verde nuevamente.'}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Mensaje de error si falta algún campo */}
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-[13px] font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Nombre y Teléfono en dos columnas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-[#14161B] mb-1.5">
                    {isEn ? 'Full Name *' : 'Nombre Completo *'}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={isEn ? 'e.g. Maria Rodriguez' : 'ej: María Rodríguez'}
                      className="w-full h-11 pl-10 pr-3.5 rounded-xl bg-white border border-gray-200 text-[13.5px] text-[#14161B] placeholder-gray-400 focus:outline-hidden focus:border-[rgb(122,24,35)] focus:ring-2 focus:ring-[rgb(122,24,35)]/15 transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-[#14161B] mb-1.5">
                    {isEn ? 'Phone / WhatsApp *' : 'Teléfono o WhatsApp *'}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder={isEn ? 'e.g. 8888-8888' : 'ej: 8888-8888'}
                      className="w-full h-11 pl-10 pr-3.5 rounded-xl bg-white border border-gray-200 text-[13.5px] text-[#14161B] placeholder-gray-400 focus:outline-hidden focus:border-[rgb(122,24,35)] focus:ring-2 focus:ring-[rgb(122,24,35)]/15 transition-all shadow-2xs"
                    />
                  </div>
                </div>
              </div>

              {/* Selector de Pregunta Más Frecuente / Tema */}
              <div>
                <label className="block text-[12px] font-bold uppercase tracking-wider text-[#14161B] mb-2">
                  {isEn ? 'Select your consultation topic *' : 'Seleccioná el tema de tu consulta *'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {FAQ_TOPICS.map((topic) => {
                    const isSelected = selectedTopic === topic.label;
                    const TopicIcon = topic.icon;
                    return (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => setSelectedTopic(topic.label)}
                        className={`flex items-start gap-3 p-3 rounded-xl border text-left text-[12.5px] sm:text-[13px] font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[rgb(122,24,35)]/5 border-[rgb(122,24,35)] text-[rgb(122,24,35)] font-bold shadow-2xs ring-1 ring-[rgb(122,24,35)]'
                            : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50/70'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isSelected ? 'bg-[rgb(122,24,35)] text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          <TopicIcon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="leading-snug block font-bold">{topic.label}</span>
                          <span className="text-[11px] font-normal text-gray-500 block leading-tight mt-0.5">
                            {topic.desc}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Detalle o Síntoma Opcional */}
              <div>
                <label className="block text-[12px] font-bold uppercase tracking-wider text-[#14161B] mb-1.5">
                  {isEn ? 'Specific notes or symptoms (Optional)' : 'Comentarios adicionales o síntomas visuales (Opcional)'}
                </label>
                <textarea
                  rows={3}
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder={
                    isEn
                      ? 'e.g. I experience eyestrain while working on computer screens...'
                      : 'ej: Siento fatiga visual al bretear en la compu o necesito cambiar la graduación de mis aros...'
                  }
                  className="w-full p-3.5 rounded-xl bg-white border border-gray-200 text-[13.5px] text-[#14161B] placeholder-gray-400 focus:outline-hidden focus:border-[rgb(122,24,35)] focus:ring-2 focus:ring-[rgb(122,24,35)]/15 transition-all shadow-2xs resize-none"
                />
              </div>

              {/* CHECKLISTS (Consentimiento, Publicidad y Privacidad) */}
              <div className="pt-3 border-t border-gray-100 space-y-3">
                {/* Checklist 1: Contacto (Requerido) */}
                <label className="flex items-start gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={acceptContact}
                    onChange={(e) => setAcceptContact(e.target.checked)}
                    className="mt-1 w-4 h-4 text-[rgb(122,24,35)] rounded border-gray-300 focus:ring-[rgb(122,24,35)] cursor-pointer accent-[rgb(122,24,35)]"
                  />
                  <span className="text-[12.5px] text-[#4B505B] group-hover:text-[#14161B] leading-snug">
                    <strong className="text-[#14161B]">
                      {isEn ? 'Contact Authorization (Required):' : 'Consentimiento de Contacto (Requerido):'}
                    </strong>{' '}
                    {isEn
                      ? 'I agree to be contacted via WhatsApp or phone call by Ópticas Popular to answer my inquiry and coordinate my appointment.'
                      : 'Acepto que me contacten por WhatsApp o llamada para responder mi consulta y coordinar mi cita con Ópticas Popular.'}
                  </span>
                </label>

                {/* Checklist 2: Publicidad y Promociones (Opcional) */}
                <label className="flex items-start gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={acceptPromo}
                    onChange={(e) => setAcceptPromo(e.target.checked)}
                    className="mt-1 w-4 h-4 text-[rgb(122,24,35)] rounded border-gray-300 focus:ring-[rgb(122,24,35)] cursor-pointer accent-[rgb(122,24,35)]"
                  />
                  <span className="text-[12.5px] text-[#4B505B] group-hover:text-[#14161B] leading-snug flex-1">
                    <strong className="text-[#14161B] inline-flex items-center gap-1">
                      <BellRing className="w-3.5 h-3.5 text-amber-600 inline" />
                      {isEn ? 'Promotions & Eye Health Advice:' : 'Promociones y Consejos Visuales:'}
                    </strong>{' '}
                    {isEn
                      ? 'I wish to receive exclusive optical offers, frame arrivals, and visual health recommendations directly on WhatsApp.'
                      : 'Quiero recibir promos tuanis de aros y consejos de salud visual en mi WhatsApp.'}
                  </span>
                </label>

                {/* Checklist 3: Privacidad confidencial */}
                <label className="flex items-start gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={acceptPrivacy}
                    onChange={(e) => setAcceptPrivacy(e.target.checked)}
                    className="mt-1 w-4 h-4 text-[rgb(122,24,35)] rounded border-gray-300 focus:ring-[rgb(122,24,35)] cursor-pointer accent-[rgb(122,24,35)]"
                  />
                  <span className="text-[12.5px] text-[#4B505B] group-hover:text-[#14161B] leading-snug">
                    <strong className="text-[#14161B] inline-flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
                      {isEn ? 'Confidential Data Protection:' : 'Privacidad y Confidencialidad Médica:'}
                    </strong>{' '}
                    {isEn
                      ? 'Your personal data is treated strictly confidentially and never shared with third parties.'
                      : 'Tus datos se manejan con estricta confidencialidad médica y respeto profesional.'}
                  </span>
                </label>
              </div>

              {/* Botón de Envío Directo a WhatsApp */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 h-13 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-[15px] font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>
                    {isEn
                      ? 'Send Inquiry to Dr. Fabio Mora via WhatsApp'
                      : 'Enviar Consulta al Dr. Fabio Mora por WhatsApp'}
                  </span>
                  <Send className="w-4 h-4 ml-1" />
                </button>

                <p className="mt-2.5 text-center text-[11.5px] text-gray-500 flex items-center justify-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[rgb(122,24,35)]" />
                  <span>
                    {isEn
                      ? 'Fast response during clinical hours (Mon-Sat 9:00 AM - 6:00 PM)'
                      : 'Respuesta rápida en horario de clínica (Lun a Sáb: 9:00 AM - 6:00 PM)'}
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Pie de Página Minimalista */}
      <footer className="bg-white border-t border-gray-100 py-6 text-center text-[12px] text-gray-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Ópticas Popular · Dr. Fabio Mora Medina</p>
          <div className="flex items-center gap-4">
            <button type="button" onClick={onBack} className="hover:text-[rgb(122,24,35)] font-semibold transition-colors cursor-pointer">
              {isEn ? 'Return to Home' : 'Volver al Inicio'}
            </button>
            <span>·</span>
            <span>Plaza Higuerones, Desamparados</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
