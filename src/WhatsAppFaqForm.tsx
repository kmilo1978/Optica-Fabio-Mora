import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Send, 
  User, 
  Phone, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle,
  ShieldCheck,
  BellRing
} from 'lucide-react';
import { Language } from './translations';

interface WhatsAppFaqFormProps {
  lang: Language;
}

export default function WhatsAppFaqForm({ lang }: WhatsAppFaqFormProps) {
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

  const FAQ_TOPICS = isEn
    ? [
        { id: 'exam', label: '🩺 Eye Exam & Prescription' },
        { id: 'frames', label: '👓 Frames & Lens Replacement' },
        { id: 'guarantee', label: '🔍 30-Day Adaptation Guarantee' },
        { id: 'family', label: '👨‍👩‍👧 Family Coordinated Appointments' },
        { id: 'payment', label: '💳 Pricing, SINPE & Zero-Interest' },
        { id: 'location', label: '📍 Plaza Higuerones Location & Hours' },
        { id: 'other', label: '💬 Other Custom Inquiry' }
      ]
    : [
        { id: 'exam', label: '🩺 Examen de la vista y graduación' },
        { id: 'frames', label: '👓 Aros y cambio de cristales' },
        { id: 'guarantee', label: '🔍 Garantía de adaptación (30 días)' },
        { id: 'family', label: '👨‍👩‍👧 Citas seguidas para la familia' },
        { id: 'payment', label: '💳 Precios, SINPE Móvil y Tasa Cero' },
        { id: 'location', label: '📍 Ubicación en Plaza Higuerones y horarios' },
        { id: 'other', label: '💬 Otra consulta médica o general' }
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

    // Construcción del mensaje para WhatsApp
    const lines = [
      isEn 
        ? '*Hello Dr. Fabio Mora! I am contacting you from the Opticas Popular website.*'
        : '*¡Hola Dr. Fabio Mora! Le escribo desde la página web de Ópticas Popular.*',
      '',
      isEn ? '📋 *Inquiry Details:*' : '📋 *Datos de la Consulta:*',
      `• *${isEn ? 'Name' : 'Nombre'}:* ${fullName.trim()}`,
      `• *${isEn ? 'Phone / WhatsApp' : 'Teléfono / WhatsApp'}:* ${phoneNumber.trim()}`,
      `• *${isEn ? 'Selected FAQ Topic' : 'Tema de consulta'}:* ${selectedTopic}`,
    ];

    if (customMessage.trim()) {
      lines.push(`• *${isEn ? 'Additional notes or symptoms' : 'Detalle o molestia visual'}:* ${customMessage.trim()}`);
    }

    lines.push('');
    lines.push(isEn ? '✅ *Authorizations & Preferences:*' : '✅ *Autorizaciones y Preferencias:*');
    lines.push(`• ${isEn ? 'Contact permission' : 'Acepto ser contactado para mi cita'}: ${acceptContact ? (isEn ? 'Yes' : 'Sí') : 'No'}`);
    lines.push(`• ${isEn ? 'Receive promotions and visual tips' : 'Acepto recibir promociones y consejos'}: ${acceptPromo ? (isEn ? 'Yes' : 'Sí') : 'No'}`);
    if (acceptPrivacy) {
      lines.push(`• ${isEn ? 'Privacy policy accepted' : 'Tratamiento confidencial de datos'}: ${isEn ? 'Yes' : 'Sí'}`);
    }

    lines.push('');
    lines.push(isEn ? '_Looking forward to your reply. Thank you!_' : '_Quedo atento(a) a su respuesta. ¡Muchas gracias, pura vida!_');

    const fullMessage = lines.join('\n');
    const waUrl = `https://wa.me/50672760215?text=${encodeURIComponent(fullMessage)}`;

    setIsSubmitted(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mt-12 max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-[rgb(122,24,35)]/20 shadow-xl relative overflow-hidden">
        {/* Cabecera del formulario */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 h-7 px-3.5 rounded-full bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] text-[11px] sm:text-[12px] uppercase tracking-wider font-bold shadow-2xs mb-3 border border-[rgb(122,24,35)]/20">
            <Sparkles className="w-3.5 h-3.5 text-[rgb(122,24,35)]" />
            <span>{isEn ? 'Fast WhatsApp Inquiry' : 'Formulario de Consulta Rápida'}</span>
          </div>

          <h3 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#14161B] leading-tight">
            {isEn ? 'Have questions? Send them directly to WhatsApp' : '¿Tenés dudas? Envialas directamente a WhatsApp'}
          </h3>

          <p className="mt-2 text-[13.5px] sm:text-[14.5px] text-[#555963] leading-relaxed max-w-xl mx-auto">
            {isEn
              ? 'Fill in your details below and we will generate an organized message sent directly to Dr. Fabio Mora.'
              : 'Completá tus datos y te prepararemos un mensaje claro y ordenado para coordinar tu cita o consulta con el Dr. Fabio Mora en minutos.'}
          </p>
        </div>

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
                  {isEn ? 'Message prepared successfully!' : '¡Mensaje preparado con éxito!'}
                </p>
                <p className="text-emerald-700 mt-0.5">
                  {isEn
                    ? 'WhatsApp opened in a new tab. If it did not open automatically, click the button below again.'
                    : 'WhatsApp se abrió en una nueva ventana. Si tu navegador lo bloqueó, podés presionar el botón verde nuevamente.'}
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
              {isEn ? 'What is your inquiry about? (Select an option) *' : '¿Sobre qué tema es tu consulta? (Seleccioná una opción) *'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {FAQ_TOPICS.map((topic) => {
                const isSelected = selectedTopic === topic.label;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => setSelectedTopic(topic.label)}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-left text-[12.5px] sm:text-[13px] font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[rgb(122,24,35)]/5 border-[rgb(122,24,35)] text-[rgb(122,24,35)] font-bold shadow-2xs ring-1 ring-[rgb(122,24,35)]'
                        : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-[rgb(122,24,35)] bg-[rgb(122,24,35)] text-white' : 'border-gray-300 bg-white'
                    }`}>
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <span className="leading-snug">{topic.label}</span>
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
              rows={2}
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder={
                isEn
                  ? 'e.g. I experience eyestrain while working on computer screens...'
                  : 'ej: Siento fatiga visual al bretear en la compu o necesito cambiar la graduación de mis aros...'
              }
              className="w-full p-3 rounded-xl bg-white border border-gray-200 text-[13.5px] text-[#14161B] placeholder-gray-400 focus:outline-hidden focus:border-[rgb(122,24,35)] focus:ring-2 focus:ring-[rgb(122,24,35)]/15 transition-all shadow-2xs resize-none"
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
              className="w-full inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-[14px] sm:text-[15px] font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>
                {isEn
                  ? 'Send Inquiry to Dr. Fabio Mora via WhatsApp'
                  : 'Enviar Consulta al Dr. Fabio Mora por WhatsApp'}
              </span>
              <Send className="w-4 h-4 ml-1" />
            </button>
            <p className="mt-2 text-center text-[11px] text-gray-500">
              {isEn
                ? '⚡ Instant response during clinical hours (Mon-Sat 9:00 AM - 6:00 PM)'
                : '⚡ Te respondemos rapidito en horario de clínica (Lun a Sáb: 9:00 AM - 6:00 PM)'}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
