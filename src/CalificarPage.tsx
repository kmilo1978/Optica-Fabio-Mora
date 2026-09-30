import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  MessageCircle, 
  CheckCircle2, 
  Eye, 
  ArrowRight,
  ExternalLink,
  HeartHandshake
} from 'lucide-react';

import { Language } from './translations';
import Footer from './Footer';

import { FooterProps, NavigationView } from './Footer';

interface CalificarPageProps {
  onBack: () => void;
  lang?: Language;
  onNavigate?: (view: NavigationView, hash?: string) => void;
}

// Emblema de Lentes Oftálmicos para calificación con colores corporativos oficiales
function GlassesRatingEmblem({ active, hovered }: { active: boolean; hovered: boolean }) {
  const isFilled = active || hovered;
  
  return (
    <div className="relative flex items-center justify-center transition-transform duration-200">
      <svg
        viewBox="0 0 64 38"
        className={`w-12 h-8 sm:w-14 sm:h-9 transition-all duration-300 ${
          isFilled
            ? 'text-[rgb(122,24,35)] drop-shadow-[0_4px_12px_rgba(122,24,35,0.25)] scale-105'
            : 'text-gray-300 hover:text-gray-400'
        }`}
        fill={isFilled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
      >
        {/* Lente Izquierdo */}
        <rect
          x="3"
          y="7"
          width="24"
          height="22"
          rx="7"
          fill={isFilled ? 'rgba(122, 24, 35, 0.1)' : 'none'}
          stroke="currentColor"
          strokeWidth="2.2"
        />
        {/* Lente Derecho */}
        <rect
          x="37"
          y="7"
          width="24"
          height="22"
          rx="7"
          fill={isFilled ? 'rgba(122, 24, 35, 0.1)' : 'none'}
          stroke="currentColor"
          strokeWidth="2.2"
        />
        {/* Puente Central */}
        <path
          d="M27 16 C30 13, 34 13, 37 16"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Patillas laterales */}
        <line x1="3" y1="12" x2="0" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="61" y1="12" x2="64" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Reflejos sutiles en los cristales cuando está activo */}
        {isFilled && (
          <>
            <path d="M7 11 L14 11" stroke="rgb(122, 24, 35)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
            <path d="M41 11 L48 11" stroke="rgb(122, 24, 35)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
          </>
        )}
      </svg>
    </div>
  );
}

export default function CalificarPage({ onBack, lang = 'es', onNavigate }: CalificarPageProps) {
  const [rating, setRating] = useState<number | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState('');
  const [enviado, setEnviado] = useState(false);

  const isEn = lang === 'en';

  const RATING_LABELS: Record<number, string> = isEn ? {
    1: '1 OF 5 · VERY DISSATISFIED · WE WANT TO HEAR FROM YOU',
    2: '2 OF 5 · FAIR · WE WANT TO IMPROVE',
    3: '3 OF 5 · ACCEPTABLE · ROOM FOR IMPROVEMENT',
    4: '4 OF 5 · GREAT VISIT! · THANK YOU',
    5: '5 OF 5 · EXCELLENT EXPERIENCE! · WE LOVE SERVING YOU!',
  } : {
    1: '1 DE 5 · MUY INSATISFECHO · QUEREMOS ESCUCHARTE',
    2: '2 DE 5 · REGULAR · QUEREMOS MEJORAR',
    3: '3 DE 5 · ACEPTABLE · HAY ASPECTOS POR MEJORAR',
    4: '4 DE 5 · ¡MUY BUENA ATENCIÓN! · GRACIAS',
    5: '5 DE 5 · ¡EXCELENTE EXPERIENCIA! · ¡NOS ENCANTA SERVIRTE!',
  };

  const handleSendFeedbackWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const textoMensaje = isEn
      ? `Hello Dr. Fabio Mora, I rated my visit at Opticas Popular with *${rating} of 5*.%0A%0A*Name:* ${nombre ? encodeURIComponent(nombre) : 'Anonymous'}%0A*What can we improve?*%0A${encodeURIComponent(comentario || 'I would like to share feedback.')}`
      : `Hola Dr. Fabio Mora, califiqué mi visita en Ópticas Popular con *${rating} de 5*.%0A%0A*Nombre:* ${nombre ? encodeURIComponent(nombre) : 'Anónimo'}%0A*¿Qué podemos mejorar?*%0A${encodeURIComponent(comentario || 'Deseo dejar constancia para su retroalimentación.')}`;
    window.open(`https://wa.me/50672760215?text=${textoMensaje}`, '_blank');
    setEnviado(true);
  };

  const currentActive = hoveredRating ?? rating;

  return (
    <div className="min-h-screen bg-[#FCFCFD] text-[#15171C] flex flex-col justify-between selection:bg-[rgb(122,24,35)] selection:text-white">
      {/* Barra Superior con botón para volver */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3.5 px-4 sm:px-6 lg:px-8 shadow-2xs">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          {/* Logo a la izquierda */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#inicio" onClick={onBack} className="flex items-center gap-2 group py-0.5" aria-label="Volver al inicio">
              <img 
                src="/images/logo-opticas-popular.png" 
                alt="Logo Oficial Ópticas Popular" 
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105" 
              />
            </a>

            <div className="h-5 w-px bg-gray-200 hidden sm:block" />

            <div className="hidden sm:flex items-center gap-2 text-[12px] text-gray-500">
              <span className="font-semibold text-gray-700">{isEn ? 'Patient Experience' : 'Experiencia del Paciente'}</span>
            </div>
          </div>

          {/* Botón Volver a la derecha */}
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 h-9 px-3.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#15171C] font-semibold text-[13px] border border-gray-200 transition-all active:scale-95 cursor-pointer"
            title={isEn ? 'Return to main site' : 'Volver al sitio principal'}
          >
            <ArrowLeft className="w-4 h-4 text-[rgb(122,24,35)]" />
            <span>{isEn ? 'Back to Home' : 'Volver al Inicio'}</span>
          </button>
        </div>
      </header>

      {/* Contenedor Principal de Calificación */}
      <main className="flex-1 max-w-2xl w-full mx-auto px-4 sm:px-6 py-10 md:py-16 text-center flex flex-col justify-center">
        {/* Eyebrow de Experiencia con color corporativo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <div className="w-6 h-[2px] bg-[rgb(122,24,35)]"></div>
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-bold text-[rgb(122,24,35)]">
            {isEn ? 'YOUR EXPERIENCE' : 'TU EXPERIENCIA'}
          </span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[28px] sm:text-[34px] md:text-[38px] font-serif font-bold text-[#14161B] tracking-tight leading-tight"
        >
          {isEn ? (
            <>Your feedback is essential <br className="hidden sm:inline" /> and helps us improve.</>
          ) : (
            <>Tu opinión es esencial <br className="hidden sm:inline" /> y nos ayuda a mejorar.</>
          )}
        </motion.h1>

        {/* Subtítulo descriptivo */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 text-[14px] sm:text-[15.5px] leading-relaxed text-[#555963] max-w-xl mx-auto"
        >
          {isEn
            ? 'At Opticas Popular every visit aims to be close, professional, and of maximum visual clarity. How was your experience today with Dr. Fabio Mora? Rate us with our lenses:'
            : 'En Ópticas Popular cada consulta busca ser una experiencia cercana, profesional y de máxima claridad visual. ¿Cómo fue tu experiencia hoy con el Dr. Fabio Mora? Califica con nuestros lentes:'}
        </motion.p>

        {/* Emblemas de Lentes 1 a 5 con colores corporativos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mt-10 flex items-center justify-center gap-3 sm:gap-6"
        >
          {[1, 2, 3, 4, 5].map((val) => {
            const isFilled = currentActive !== null && val <= currentActive;
            return (
              <button
                key={val}
                type="button"
                onClick={() => setRating(val)}
                onMouseEnter={() => setHoveredRating(val)}
                onMouseLeave={() => setHoveredRating(null)}
                className="group flex flex-col items-center gap-2 p-2 rounded-2xl hover:bg-[#FDF6F7] transition-all duration-200 cursor-pointer focus:outline-none"
                aria-label={`Calificar con ${val} lentes de 5`}
              >
                <GlassesRatingEmblem active={rating !== null && val <= rating} hovered={hoveredRating !== null && val <= (hoveredRating ?? 0)} />
                <span
                  className={`text-[12px] sm:text-[13px] font-bold transition-colors ${
                    isFilled ? 'text-[rgb(122,24,35)] font-extrabold scale-110' : 'text-gray-400 group-hover:text-gray-600'
                  }`}
                >
                  {val}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Subtítulo de instrucción o Estado de Calificación */}
        <div className="mt-4 min-h-[24px]">
          {rating ? (
            <motion.p
              key={rating}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-bold text-[rgb(122,24,35)]"
            >
              {RATING_LABELS[rating]}
            </motion.p>
          ) : (
            <p className="text-[10.5px] sm:text-[11.5px] uppercase tracking-[0.18em] font-semibold text-gray-400">
              {isEn ? 'CLICK ON A LENS EMBLEM TO RATE' : 'HAZ CLIC EN UN EMBLEMA DE LENTES PARA CALIFICAR'}
            </p>
          )}
        </div>

        {/* Ventanas Condicionales: 1 a 3 (Feedback privado por WhatsApp) y 4 a 5 (Google My Business) */}
        <AnimatePresence mode="wait">
          {/* CASO 1: Calificación de 1 a 3 (Sugerencia y mejora directa a WhatsApp) */}
          {rating !== null && rating <= 3 && (
            <motion.div
              key="low-rating"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="mt-8 text-left bg-white rounded-2xl border border-gray-200/90 shadow-md p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Línea superior corporativa */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[rgb(122,24,35)]"></div>

              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-full bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] flex items-center justify-center shrink-0 border border-[rgb(122,24,35)]/20 shadow-2xs">
                  <MessageCircle className="w-5 h-5 text-[rgb(122,24,35)]" />
                </div>
                <div>
                  <h3 className="text-[17px] sm:text-[18px] font-serif font-bold text-[#14161B] leading-tight">
                    {isEn ? 'We want to listen and learn from you' : 'Queremos escucharte y aprender de ti'}
                  </h3>
                  <p className="text-[12px] text-gray-500 mt-0.5">
                    {isEn ? 'Your message will go directly to Dr. Fabio Mora to address your case personally.' : 'Tu mensaje llegará directamente al Dr. Fabio Mora para atender tu caso personalmente.'}
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-100 my-4"></div>

              <p className="text-[13px] sm:text-[13.5px] text-[#555963] leading-relaxed mb-5">
                {isEn
                  ? 'We deeply regret that your visit was not completely perfect. Your honest feedback helps us correct details and improve every day:'
                  : 'Lamentamos profundamente que tu visita no haya sido del todo perfecta. Tu opinión sincera nos ayuda a corregir detalles y seguir mejorando cada día:'}
              </p>

              <form onSubmit={handleSendFeedbackWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-gray-500 mb-1.5">
                    {isEn ? 'YOUR NAME (OPTIONAL)' : 'TU NOMBRE (OPCIONAL)'}
                  </label>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder={isEn ? 'e.g. Mary Smith' : 'Ej. María Gómez'}
                    className="w-full h-11 px-3.5 rounded-xl border border-gray-200 focus:border-[rgb(122,24,35)] focus:ring-2 focus:ring-[rgb(122,24,35)]/15 text-[14px] text-[#15171C] outline-none transition-all placeholder:text-gray-400 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-gray-500 mb-1.5">
                    {isEn ? 'WHAT CAN WE IMPROVE? *' : '¿QUÉ PODEMOS MEJORAR? *'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                    placeholder={isEn ? 'Tell us what happened with total confidence (care, wait time, eyeglasses, prescription)...' : 'Cuéntanos qué sucedió con total confianza (atención médica, tiempo de espera, entrega de lentes, receta)...'}
                    className="w-full p-3.5 rounded-xl border border-gray-200 focus:border-[rgb(122,24,35)] focus:ring-2 focus:ring-[rgb(122,24,35)]/15 text-[14px] text-[#15171C] outline-none transition-all placeholder:text-gray-400 bg-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={{ color: '#ffffff' }}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,28,41)] text-white !text-white transition-all font-bold text-[12px] sm:text-[13px] uppercase tracking-wider shadow-md hover:shadow-lg active:scale-98 cursor-pointer mt-2 group btn-shimmer"
                >
                  <MessageCircle className="w-4 h-4 text-white !text-white shrink-0" />
                  <span className="text-white !text-white font-bold" style={{ color: '#ffffff' }}>
                    {isEn ? 'SEND FEEDBACK TO OUR PRIVATE WHATSAPP' : 'ENVIAR SUGERENCIA A NUESTRO WHATSAPP PRIVADO'}
                  </span>
                  <ArrowRight className="w-4 h-4 text-white !text-white shrink-0 transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              {enviado && (
                <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-[12.5px] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{isEn ? 'WhatsApp opened for your suggestion. Thank you very much for your time!' : 'Se abrió WhatsApp para que envíes tu sugerencia. ¡Agradecemos mucho tu tiempo!'}</span>
                </div>
              )}
            </motion.div>
          )}

          {/* CASO 2: Calificación de 4 a 5 (Google My Business) */}
          {rating !== null && rating >= 4 && (
            <motion.div
              key="high-rating"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="mt-8 text-left bg-white rounded-2xl border border-gray-200/90 shadow-md p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Línea superior corporativa */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[rgb(122,24,35)]"></div>

              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-full bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] flex items-center justify-center shrink-0 border border-[rgb(122,24,35)]/20 shadow-2xs">
                  <HeartHandshake className="w-5 h-5 text-[rgb(122,24,35)]" />
                </div>
                <div>
                  <h3 className="text-[18px] sm:text-[19px] font-serif font-bold text-[#14161B] leading-tight">
                    {isEn ? 'Thank you so much for your trust!' : '¡Muchísimas gracias por tu confianza!'}
                  </h3>
                  <p className="text-[12px] text-gray-500 mt-0.5">
                    {isEn ? 'Your satisfaction with Dr. Fabio Mora encourages us to keep delivering excellence.' : 'Tu satisfacción con la atención del Dr. Fabio Mora nos motiva a seguir brindando excelencia.'}
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-100 my-4"></div>

              <p className="text-[13.5px] sm:text-[14px] text-[#555963] leading-relaxed mb-6">
                {isEn
                  ? 'Google reviews help more families and neighbors discover honest, professional, and medical-grade eye care. Would you support us by sharing your public review on Google?'
                  : 'Las reseñas en Google ayudan a que más familias y vecinos de Desamparados y San José descubran un servicio optométrico transparente, profesional y de calidad médica. ¿Nos apoyarías compartiendo tu reseña pública en Google?'}
              </p>

              <div className="space-y-3">
                {/* Botón Principal Corporativo: Google My Business */}
                <a
                  href="https://maps.google.com/?q=Ópticas+Popular+Plaza+Higuerones+San+Rafael+Abajo+Desamparados"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#ffffff' }}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,28,41)] text-white !text-white font-bold text-[13px] sm:text-[14px] shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer btn-shimmer group"
                >
                  <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                  <span className="text-white !text-white font-bold" style={{ color: '#ffffff' }}>
                    {isEn ? 'RATE ON GOOGLE (5 STARS)' : 'CALIFICAR EN GOOGLE (5 ESTRELLAS)'}
                  </span>
                  <ExternalLink className="w-4 h-4 text-white !text-white opacity-90 group-hover:translate-x-0.5 shrink-0" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Corporativo Oficial de Alto Contraste */}
      <Footer 
        lang={lang} 
        onNavigate={(view, hash) => {
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
          } else if (view === 'consulta') {
            window.location.hash = '#consulta';
          } else if (view === 'calificar') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }} 
      />
    </div>
  );
}
