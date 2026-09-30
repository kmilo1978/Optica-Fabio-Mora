import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Award,
  Eye,
  Glasses,
  Monitor,
  Check,
  ChevronRight,
  MessageCircle,
  HelpCircle,
  AlertTriangle,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { Language } from './translations';
import Footer from './Footer';

interface TestVisualPageProps {
  onBack: () => void;
  lang?: Language;
  onNavigate?: (view: 'landing' | 'consulta' | 'calificar', hash?: string) => void;
}

type TestPhase = 'intro' | 'instructions' | 'test' | 'results';

// 5 Pasos del Test Clínico
const STEPS = [
  { id: 1, title: 'Agudeza visual', titleEn: 'Visual Acuity', desc: 'Prueba de dirección E de Snellen' },
  { id: 2, title: 'Astigmatismo', titleEn: 'Astigmatism', desc: 'Dial horario de líneas radiales' },
  { id: 3, title: 'Sensibilidad a la luz', titleEn: 'Light & Contrast', desc: 'Detección en bajo contraste' },
  { id: 4, title: 'Visión de cerca', titleEn: 'Near Vision', desc: 'Enfoque de lectura y presbicia' },
  { id: 5, title: 'Visión cromática', titleEn: 'Color Vision', desc: 'Discriminación de tonalidades' },
];

export default function TestVisualPage({ onBack, lang = 'es', onNavigate }: TestVisualPageProps) {
  const isEn = lang === 'en';

  const [phase, setPhase] = useState<TestPhase>('intro');
  const [acceptedDisclaimer, setAcceptedDisclaimer] = useState(false);
  const [disclaimerError, setDisclaimerError] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  // Estados de cada sub-test
  // Paso 1: Agudeza visual (Tumbling E)
  // 4 pruebas: 2 para ojo derecho, 2 para ojo izquierdo con direcciones aleatorias/fijas
  const [acuityIndex, setAcuityIndex] = useState(0);
  const [acuityScore, setAcuityScore] = useState(0);
  const [acuityEye, setAcuityEye] = useState<'right' | 'switch' | 'left'>('right');

  const ACUITY_TRIALS = [
    { target: 'right', size: 48, label: 'Grande' },
    { target: 'up', size: 32, label: 'Mediano' },
    { target: 'left', size: 22, label: 'Fino' },
    { target: 'down', size: 16, label: 'Muy fino' },
  ];

  // Paso 2: Astigmatismo
  const [astigmatismAnswer, setAstigmatismAnswer] = useState<'normal' | 'distorted' | null>(null);

  // Paso 3: Sensibilidad a la luz y contraste
  const [contrastAnswer, setContrastAnswer] = useState<number | null>(null);

  // Paso 4: Visión de cerca
  const [nearAnswer, setNearAnswer] = useState<'perfect' | 'difficulty' | null>(null);

  // Paso 5: Visión cromática (Ishihara)
  const [colorAnswer, setColorAnswer] = useState<string | null>(null);

  // Manejo de inicio
  const handleStartFromIntro = () => {
    if (!acceptedDisclaimer) {
      setDisclaimerError(true);
      return;
    }
    setDisclaimerError(false);
    setPhase('instructions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartTest = () => {
    setPhase('test');
    setActiveStep(1);
    setAcuityIndex(0);
    setAcuityScore(0);
    setAcuityEye('right');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Manejo del paso 1 (Agudeza Visual)
  const handleAcuityChoice = (dir: 'up' | 'down' | 'left' | 'right') => {
    const currentTrial = ACUITY_TRIALS[acuityIndex];
    let newScore = acuityScore;
    if (dir === currentTrial.target) {
      newScore += 1;
      setAcuityScore(newScore);
    }

    if (acuityIndex === 1 && acuityEye === 'right') {
      // Pausa para cambiar de ojo
      setAcuityEye('switch');
    } else if (acuityIndex < ACUITY_TRIALS.length - 1) {
      setAcuityIndex(acuityIndex + 1);
    } else {
      // Fin del paso 1, pasar al paso 2
      setActiveStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContinueAfterEyeSwitch = () => {
    setAcuityEye('left');
    setAcuityIndex(2);
  };

  // Pasar al siguiente paso
  const handleNextStep = () => {
    if (activeStep < 5) {
      setActiveStep(activeStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setPhase('results');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Reiniciar test
  const handleRestart = () => {
    setPhase('intro');
    setActiveStep(1);
    setAcuityIndex(0);
    setAcuityScore(0);
    setAcuityEye('right');
    setAstigmatismAnswer(null);
    setContrastAnswer(null);
    setNearAnswer(null);
    setColorAnswer(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Construir mensaje de WhatsApp con resultados
  const buildWhatsAppMessage = () => {
    const acuityText = acuityScore >= 3 ? 'Agudeza visual buena' : 'Posible baja agudeza visual';
    const astigText = astigmatismAnswer === 'normal' ? 'Sin distorsión radial evidente' : 'Líneas con tono desigual (posible astigmatismo)';
    const contrastText = contrastAnswer && contrastAnswer >= 3 ? 'Buen contraste' : 'Dificultad en bajo contraste';
    const nearText = nearAnswer === 'perfect' ? 'Buena lectura cercana' : 'Dificultad en lectura de cerca';
    const colorText = colorAnswer === '12' ? 'Percepción cromática adecuada' : 'Variación en prueba de color';

    const text = isEn
      ? `Hello Dr. Fabio Mora, I just completed the Online Vision Test at Ópticas Popular with these results:
- Visual Acuity: ${acuityText} (${acuityScore}/4)
- Astigmatism: ${astigText}
- Contrast: ${contrastText}
- Near Vision: ${nearText}
- Color Vision: ${colorText}

I would like to schedule a comprehensive evaluation at Plaza Higuerones.`
      : `Hola Dr. Fabio Mora, acabo de realizar el Test Visual Online en la página de Ópticas Popular con estos resultados:
- Agudeza visual: ${acuityText} (${acuityScore}/4)
- Astigmatismo: ${astigText}
- Sensibilidad al contraste: ${contrastText}
- Visión de cerca: ${nearText}
- Visión cromática: ${colorText}

Me gustaría coordinar una cita para valoración completa en Plaza Higuerones.`;

    return `https://wa.me/50672760215?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-[#15171C] font-sans flex flex-col justify-between selection:bg-[rgb(122,24,35)] selection:text-white">
      {/* Barra Superior de Navegación */}
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
              <Sparkles className="w-3.5 h-3.5 text-[rgb(122,24,35)]" />
              <span className="font-semibold text-gray-700">
                {isEn ? 'Clinical Vision Screening Tool' : 'Test de Autoevaluación Visual'}
              </span>
              <span>·</span>
              <span>Dr. Fabio Mora</span>
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
        <div className="max-w-5xl mx-auto">

          {/* ========================================================= */}
          {/* FASE 1: PORTADA E INTRODUCCIÓN DEL TEST                   */}
          {/* ========================================================= */}
          {phase === 'intro' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden grid lg:grid-cols-[0.9fr_1.1fr]"
            >
              {/* Lado Izquierdo: Tarjeta Visual Médica de Alto Impacto */}
              <div className="bg-[#0e1726] p-8 sm:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden text-white">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(122,24,35)]/20 to-transparent pointer-events-none" />
                
                {/* Cuadro Snellen Estilizado */}
                <div className="relative border-2 border-white/20 p-8 sm:p-10 rounded-2xl bg-white/5 backdrop-blur-xs shadow-2xl max-w-[280px] w-full">
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[rgb(122,24,35)]" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[rgb(122,24,35)]" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[rgb(122,24,35)]" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[rgb(122,24,35)]" />

                  <div className="text-[28px] sm:text-[32px] tracking-[0.25em] font-black text-white font-mono leading-none mb-3">
                    D N C Z O
                  </div>
                  <div className="text-[20px] sm:text-[23px] tracking-[0.3em] font-bold text-gray-200 font-mono leading-none mb-3">
                    S K D V H
                  </div>
                  <div className="text-[14px] sm:text-[16px] tracking-[0.35em] font-semibold text-rose-300 font-mono leading-none">
                    Z C R N S
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-[12px] text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{isEn ? 'Standardized Clinical Optometry Screening' : 'Protocolo Optométrico Orientativo'}</span>
                </div>
              </div>

              {/* Lado Derecho: Contenido Informativo y Consentimiento */}
              <div className="p-7 sm:p-10 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] text-[11px] font-bold uppercase tracking-wider">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{isEn ? "3' Quick Test" : "3' Minutos"}</span>
                    </span>
                    <span className="text-[12px] text-gray-500">· 5 {isEn ? 'quick tests' : 'pruebas interactivas'}</span>
                  </div>

                  <h1 className="text-[28px] sm:text-[34px] font-bold text-[#14161B] tracking-tight leading-tight">
                    {isEn ? 'Check your vision online' : 'Revisá tu visión online'}
                  </h1>

                  <p className="mt-3 text-[14.5px] sm:text-[15.5px] text-[#555963] leading-relaxed">
                    {isEn
                      ? 'Perform these 5 basic visual checks to understand if your eyes need an in-person clinical evaluation with an eye care specialist.'
                      : 'Realizá estas 5 pruebas visuales básicas para saber si tus ojos necesitan una revisión en consultorio con el Dr. Fabio Mora.'}
                  </p>

                  {/* Aviso Legal & Médico */}
                  <div className="mt-6 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-[12.5px] sm:text-[13px] text-amber-950 leading-relaxed space-y-2">
                    <p className="font-semibold flex items-center gap-1.5 text-amber-900">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{isEn ? 'Important Medical Notice' : 'Aviso Clínico Importante'}</span>
                    </p>
                    <p className="text-amber-900/90">
                      {isEn
                        ? 'These interactive tests are purely orientative and do not replace a comprehensive clinical eye examination. No personal health data is stored.'
                        : 'Estas pruebas son exclusivamente orientativas y no sustituyen un examen oftalmológico ni optométrico completo con equipo computarizado. No se almacena ningún dato de salud.'}
                    </p>
                  </div>

                  {/* Checkbox de Aceptación */}
                  <label className="mt-6 flex items-start gap-3 cursor-pointer group select-none">
                    <input
                      type="checkbox"
                      checked={acceptedDisclaimer}
                      onChange={(e) => {
                        setAcceptedDisclaimer(e.target.checked);
                        if (e.target.checked) setDisclaimerError(false);
                      }}
                      className="mt-0.5 w-4.5 h-4.5 rounded text-[rgb(122,24,35)] focus:ring-[rgb(122,24,35)] border-gray-300 cursor-pointer"
                    />
                    <span className="text-[13px] text-[#555963] group-hover:text-[#15171C] transition-colors">
                      {isEn
                        ? 'I have read and accept the medical disclaimer and understand this is an orientative test.'
                        : 'He leído y acepto el aviso legal. Entiendo que es una autoevaluación orientativa.'}
                    </span>
                  </label>

                  {disclaimerError && (
                    <p className="mt-2 text-[12px] text-red-600 font-semibold">
                      {isEn ? 'Please check the box above to continue.' : 'Por favor marcá la casilla para continuar.'}
                    </p>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleStartFromIntro}
                    className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-2xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white text-[14px] font-bold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer btn-shimmer"
                  >
                    <span>{isEn ? 'Start Screening' : 'Iniciar'}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>

                  <span className="text-[12px] text-gray-500 font-medium hidden sm:inline">
                    {isEn ? 'Free & Instant' : 'Gratuito e interactivo'}
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* FASE 2: INSTRUCCIONES PREVIAS                             */}
          {/* ========================================================= */}
          {phase === 'instructions' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto bg-white rounded-3xl border border-gray-200/90 shadow-xl p-6 sm:p-10 text-center"
            >
              <div className="inline-flex items-center gap-1.5 h-7 px-3.5 rounded-full bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] text-[11px] font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isEn ? 'Preparation' : 'Preparación'}</span>
              </div>

              <h2 className="text-[26px] sm:text-[32px] font-bold text-[#14161B]">
                {isEn ? 'Check your vision — Instructions' : 'Revisá tu visión — Instrucciones'}
              </h2>

              <p className="mt-2 text-[14.5px] text-[#555963] max-w-lg mx-auto">
                {isEn
                  ? 'Follow these three simple recommendations before starting the test for accurate results.'
                  : 'Seguí estas tres recomendaciones para que las pruebas reflejen con precisión tu confort visual.'}
              </p>

              {/* 3 Tarjetas de Instrucciones */}
              <div className="mt-8 space-y-3.5 text-left">
                {[
                  {
                    icon: Monitor,
                    title: isEn ? 'Stand 1 meter (approx. arm’s length) from your screen' : 'Colocate a un metro de la pantalla',
                    desc: isEn ? 'If using a smartphone, hold it at comfortable arm distance.' : 'Si estás en celular, sostenelo a la distancia habitual de lectura.',
                  },
                  {
                    icon: Glasses,
                    title: isEn ? 'Do not take off your prescription glasses' : 'No te quités tus lentes o anteojos de uso habitual',
                    desc: isEn ? 'If you wear glasses or contact lenses for screen/reading, keep them on.' : 'Queremos evaluar cómo responde tu visión con tu corrección actual.',
                  },
                  {
                    icon: Eye,
                    title: isEn ? 'Cover one eye when instructed' : 'Tapaté el ojo izquierdo o el derecho según la indicación',
                    desc: isEn ? 'Cover gently with the palm of your hand without pressing on the eyelid.' : 'Cubrí suavemente con la palma de tu mano sin presionar el párpado.',
                  },
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-gray-50/80 border border-gray-200/80 flex items-start gap-4 transition-all hover:bg-white hover:shadow-xs"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white text-[rgb(122,24,35)] flex items-center justify-center shrink-0 border border-gray-100 shadow-2xs">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[14.5px] sm:text-[15.5px] font-bold text-[#14161B]">{item.title}</h3>
                      <p className="mt-0.5 text-[12.5px] sm:text-[13px] text-[#555963] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setPhase('intro')}
                  className="h-12 px-6 rounded-2xl border border-gray-200 text-[#15171C] font-semibold text-[13.5px] hover:bg-gray-50 transition-all cursor-pointer"
                >
                  {isEn ? 'Back' : 'Atrás'}
                </button>
                <button
                  type="button"
                  onClick={handleStartTest}
                  className="h-12 px-8 rounded-2xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white font-bold text-[14px] shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer btn-shimmer"
                >
                  {isEn ? 'Start Test' : 'Iniciar'}
                </button>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* FASE 3: EJECUCIÓN DE LOS 5 TESTS INTERACTIVOS             */}
          {/* ========================================================= */}
          {phase === 'test' && (
            <div className="grid lg:grid-cols-[280px_1fr] gap-6 items-start">
              {/* Barra lateral de pasos (Steps) */}
              <div className="bg-white rounded-3xl p-5 border border-gray-200/90 shadow-sm hidden lg:block space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 px-3">
                  {isEn ? 'Clinical Steps' : 'Pasos de la prueba'}
                </span>

                <div className="space-y-1.5 pt-2">
                  {STEPS.map((s) => {
                    const isActive = activeStep === s.id;
                    const isCompleted = activeStep > s.id;

                    return (
                      <div
                        key={s.id}
                        className={`p-3 rounded-2xl transition-all flex items-start gap-3 border ${
                          isActive
                            ? 'bg-[rgb(122,24,35)]/10 border-[rgb(122,24,35)]/30 text-[rgb(122,24,35)] font-bold'
                            : isCompleted
                            ? 'bg-emerald-50/60 border-emerald-200/60 text-emerald-800'
                            : 'bg-transparent border-transparent text-gray-400'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5 ${
                          isActive
                            ? 'bg-[rgb(122,24,35)] text-white'
                            : isCompleted
                            ? 'bg-emerald-600 text-white'
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          {isCompleted ? <Check className="w-3.5 h-3.5" /> : s.id}
                        </div>
                        <div>
                          <div className="text-[13px] leading-tight">
                            {isEn ? s.titleEn : s.title}
                          </div>
                          <div className={`text-[11px] font-normal mt-0.5 leading-snug ${
                            isActive ? 'text-[rgb(122,24,35)]/80' : isCompleted ? 'text-emerald-700' : 'text-gray-400'
                          }`}>
                            {s.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contenedor Interactivo Central */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/90 shadow-xl min-h-[460px] flex flex-col justify-between">
                
                {/* --------------------------------------------------- */}
                {/* PASO 1: AGUDEZA VISUAL (TUMBLING E)                 */}
                {/* --------------------------------------------------- */}
                {activeStep === 1 && (
                  <div>
                    {acuityEye === 'switch' ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-12 text-center flex flex-col items-center"
                      >
                        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-200">
                          <Eye className="w-8 h-8" />
                        </div>
                        <h3 className="text-[24px] font-bold text-[#14161B]">
                          {isEn ? 'Great job!' : '¡Excelente!'}
                        </h3>
                        <p className="mt-2 text-[15px] text-[#555963] max-w-sm">
                          {isEn
                            ? 'Now cover your other eye to evaluate the visual acuity on both sides.'
                            : 'Ahora tápate el otro ojo para evaluar la agudeza en ambos lados.'}
                        </p>
                        <button
                          type="button"
                          onClick={handleContinueAfterEyeSwitch}
                          className="mt-6 h-12 px-8 rounded-2xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white font-bold text-[14px] shadow-md transition-all cursor-pointer"
                        >
                          {isEn ? 'Continue' : 'Continuar'}
                        </button>
                      </motion.div>
                    ) : (
                      <div>
                        <div className="text-center mb-6">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[rgb(122,24,35)]">
                            {isEn ? 'Step 1 of 5' : 'Paso 1 de 5'} · {acuityEye === 'right' ? (isEn ? 'Right Eye' : 'Ojo Derecho') : (isEn ? 'Left Eye' : 'Ojo Izquierdo')}
                          </span>
                          <h2 className="text-[24px] sm:text-[28px] font-bold text-[#14161B] mt-1">
                            {isEn ? 'Visual Acuity' : 'Agudeza visual'}
                          </h2>
                          <p className="text-[13.5px] text-[#555963] mt-1">
                            {isEn ? 'Indicate the direction of the letter "E"' : 'Indica hacia dónde apuntan las patitas de la letra "E"'}
                          </p>
                        </div>

                        {/* Tumbling E Target Box */}
                        <div className="my-8 max-w-[320px] mx-auto flex flex-col items-center justify-center p-6 bg-slate-50/70 rounded-3xl border border-gray-200/80">
                          {/* Botón Arriba */}
                          <button
                            type="button"
                            onClick={() => handleAcuityChoice('up')}
                            className="w-14 h-14 rounded-2xl bg-white hover:bg-[rgb(122,24,35)] text-[#15171C] hover:text-white border border-gray-200 shadow-xs flex items-center justify-center transition-all active:scale-90 cursor-pointer mb-4"
                            aria-label="Arriba"
                          >
                            <ArrowUp className="w-6 h-6" />
                          </button>

                          {/* Fila Central con Izquierda, E Central, Derecha */}
                          <div className="flex items-center justify-between w-full px-2">
                            <button
                              type="button"
                              onClick={() => handleAcuityChoice('left')}
                              className="w-14 h-14 rounded-2xl bg-white hover:bg-[rgb(122,24,35)] text-[#15171C] hover:text-white border border-gray-200 shadow-xs flex items-center justify-center transition-all active:scale-90 cursor-pointer"
                              aria-label="Izquierda"
                            >
                              <ArrowLeft className="w-6 h-6" />
                            </button>

                            {/* Letra E Orientada */}
                            <div className="w-20 h-20 flex items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-2xs">
                              <span
                                style={{
                                  fontSize: `${ACUITY_TRIALS[acuityIndex].size}px`,
                                  transform:
                                    ACUITY_TRIALS[acuityIndex].target === 'up'
                                      ? 'rotate(-90deg)'
                                      : ACUITY_TRIALS[acuityIndex].target === 'down'
                                      ? 'rotate(90deg)'
                                      : ACUITY_TRIALS[acuityIndex].target === 'left'
                                      ? 'scaleX(-1)'
                                      : 'none',
                                }}
                                className="font-mono font-black text-[#14161B] select-none leading-none inline-block transition-transform duration-200"
                              >
                                E
                              </span>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleAcuityChoice('right')}
                              className="w-14 h-14 rounded-2xl bg-white hover:bg-[rgb(122,24,35)] text-[#15171C] hover:text-white border border-gray-200 shadow-xs flex items-center justify-center transition-all active:scale-90 cursor-pointer"
                              aria-label="Derecha"
                            >
                              <ArrowRight className="w-6 h-6" />
                            </button>
                          </div>

                          {/* Botón Abajo */}
                          <button
                            type="button"
                            onClick={() => handleAcuityChoice('down')}
                            className="w-14 h-14 rounded-2xl bg-white hover:bg-[rgb(122,24,35)] text-[#15171C] hover:text-white border border-gray-200 shadow-xs flex items-center justify-center transition-all active:scale-90 cursor-pointer mt-4"
                            aria-label="Abajo"
                          >
                            <ArrowDown className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* --------------------------------------------------- */}
                {/* PASO 2: ASTIGMATISMO (DIAL HORARIO)                 */}
                {/* --------------------------------------------------- */}
                {activeStep === 2 && (
                  <div>
                    <div className="text-center mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[rgb(122,24,35)]">
                        {isEn ? 'Step 2 of 5' : 'Paso 2 de 5'}
                      </span>
                      <h2 className="text-[24px] sm:text-[28px] font-bold text-[#14161B] mt-1">
                        {isEn ? 'Astigmatism Dial' : 'Prueba de Astigmatismo'}
                      </h2>
                      <p className="text-[13.5px] text-[#555963] mt-1 max-w-md mx-auto">
                        {isEn
                          ? 'Look at the center of the radial wheel. Do all lines look equally dark and sharp, or do some lines appear bolder or blurry?'
                          : 'Mirá el centro del reloj de líneas. ¿Vés todas las líneas con el mismo tono y nitidez, o hay algunas más negras, gruesas o dobles?'}
                      </p>
                    </div>

                    {/* Gráfico SVG del Dial Astigmático */}
                    <div className="my-6 flex justify-center">
                      <div className="p-4 bg-white rounded-full border border-gray-200 shadow-inner">
                        <svg viewBox="0 0 240 240" className="w-48 h-48 sm:w-56 sm:h-56">
                          <circle cx="120" cy="120" r="110" fill="none" stroke="#E5E7EB" strokeWidth="1" />
                          <circle cx="120" cy="120" r="6" fill="rgb(122, 24, 35)" />
                          {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165].map((angle, idx) => (
                            <line
                              key={idx}
                              x1="120"
                              y1="15"
                              x2="120"
                              y2="225"
                              stroke="#1E293B"
                              strokeWidth="2.5"
                              transform={`rotate(${angle} 120 120)`}
                            />
                          ))}
                        </svg>
                      </div>
                    </div>

                    {/* Opciones Interactivas */}
                    <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto">
                      <button
                        type="button"
                        onClick={() => setAstigmatismAnswer('normal')}
                        className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                          astigmatismAnswer === 'normal'
                            ? 'bg-[rgb(122,24,35)]/10 border-[rgb(122,24,35)] ring-2 ring-[rgb(122,24,35)]/20 text-[#14161B]'
                            : 'bg-gray-50 hover:bg-white border-gray-200 text-[#555963]'
                        }`}
                      >
                        <div className="text-[14.5px] font-bold text-[#14161B]">
                          {isEn ? 'All lines look identical' : 'Veo todas las líneas iguales'}
                        </div>
                        <p className="text-[12px] text-gray-500 mt-0.5">
                          {isEn ? 'Sharp and uniform in darkness' : 'Mismo grosor, nitidez y color'}
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAstigmatismAnswer('distorted')}
                        className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                          astigmatismAnswer === 'distorted'
                            ? 'bg-[rgb(122,24,35)]/10 border-[rgb(122,24,35)] ring-2 ring-[rgb(122,24,35)]/20 text-[#14161B]'
                            : 'bg-gray-50 hover:bg-white border-gray-200 text-[#555963]'
                        }`}
                      >
                        <div className="text-[14.5px] font-bold text-[#14161B]">
                          {isEn ? 'Some lines look darker/blurred' : 'Veo algunas líneas más oscuras o dobles'}
                        </div>
                        <p className="text-[12px] text-gray-500 mt-0.5">
                          {isEn ? 'Unequal focus across directions' : 'Tono desigual o deformado'}
                        </p>
                      </button>
                    </div>
                  </div>
                )}

                {/* --------------------------------------------------- */}
                {/* PASO 3: SENSIBILIDAD AL CONTRASTE                   */}
                {/* --------------------------------------------------- */}
                {activeStep === 3 && (
                  <div>
                    <div className="text-center mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[rgb(122,24,35)]">
                        {isEn ? 'Step 3 of 5' : 'Paso 3 de 5'}
                      </span>
                      <h2 className="text-[24px] sm:text-[28px] font-bold text-[#14161B] mt-1">
                        {isEn ? 'Light & Contrast Sensitivity' : 'Sensibilidad a la luz y contraste'}
                      </h2>
                      <p className="text-[13.5px] text-[#555963] mt-1 max-w-md mx-auto">
                        {isEn
                          ? 'Select the faintest circle where you can still clearly identify the letter "O".'
                          : 'Indicá hasta qué círculo lográs distinguir con claridad la letra "O".'}
                      </p>
                    </div>

                    {/* Discos de Contraste Decreciente */}
                    <div className="my-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-md mx-auto">
                      {[
                        { level: 1, label: '100%', opacity: 'opacity-100', text: 'Alto' },
                        { level: 2, label: '50%', opacity: 'opacity-50', text: 'Medio' },
                        { level: 3, label: '20%', opacity: 'opacity-20', text: 'Bajo' },
                        { level: 4, label: '8%', opacity: 'opacity-[0.08]', text: 'Mínimo' },
                      ].map((item) => (
                        <button
                          key={item.level}
                          type="button"
                          onClick={() => setContrastAnswer(item.level)}
                          className={`p-4 rounded-2xl border text-center flex flex-col items-center justify-center transition-all cursor-pointer ${
                            contrastAnswer === item.level
                              ? 'bg-[rgb(122,24,35)]/10 border-[rgb(122,24,35)] ring-2 ring-[rgb(122,24,35)]/20'
                              : 'bg-white hover:bg-gray-50 border-gray-200'
                          }`}
                        >
                          <div className={`w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center font-bold text-[22px] text-[#14161B] ${item.opacity} mb-2 bg-slate-50`}>
                            O
                          </div>
                          <span className="text-[12px] font-bold text-[#14161B]">{item.label}</span>
                          <span className="text-[10px] text-gray-500">{item.text}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* --------------------------------------------------- */}
                {/* PASO 4: VISIÓN DE CERCA (PRESBICIA / LECTURA)       */}
                {/* --------------------------------------------------- */}
                {activeStep === 4 && (
                  <div>
                    <div className="text-center mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[rgb(122,24,35)]">
                        {isEn ? 'Step 4 of 5' : 'Paso 4 de 5'}
                      </span>
                      <h2 className="text-[24px] sm:text-[28px] font-bold text-[#14161B] mt-1">
                        {isEn ? 'Near Vision Reading Test' : 'Prueba de visión de cerca (Lectura)'}
                      </h2>
                      <p className="text-[13.5px] text-[#555963] mt-1 max-w-md mx-auto">
                        {isEn
                          ? 'Hold your device at normal reading distance (about 35-40 cm). Can you comfortably read the small text below?'
                          : 'A una distancia cómoda de lectura (unos 35 cm), ¿lográs leer el texto más pequeño sin forzar la vista ni alejar el dispositivo?'}
                      </p>
                    </div>

                    {/* Tarjeta de Lectura Progresiva */}
                    <div className="my-6 max-w-md mx-auto p-5 rounded-2xl bg-slate-50 border border-gray-200 space-y-3 text-left">
                      <div className="p-3 bg-white rounded-xl border border-gray-100 text-[16px] font-semibold text-[#14161B]">
                        1. La salud visual cuida tu calidad de vida diaria.
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-gray-100 text-[13px] text-[#14161B]">
                        2. Leer con claridad sin cansancio ocular en pantallas y libros.
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-gray-100 text-[10.5px] text-[#555963] leading-snug">
                        3. Examen completo con el Dr. Fabio Mora Medina en Plaza Higuerones, Desamparados.
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 max-w-md mx-auto">
                      <button
                        type="button"
                        onClick={() => setNearAnswer('perfect')}
                        className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                          nearAnswer === 'perfect'
                            ? 'bg-[rgb(122,24,35)]/10 border-[rgb(122,24,35)] ring-2 ring-[rgb(122,24,35)]/20 text-[#14161B]'
                            : 'bg-gray-50 hover:bg-white border-gray-200 text-[#555963]'
                        }`}
                      >
                        <div className="text-[14px] font-bold text-[#14161B]">
                          {isEn ? 'I can read line 3 clearly' : 'Leo la línea 3 sin problema'}
                        </div>
                        <p className="text-[11.5px] text-gray-500 mt-0.5">
                          {isEn ? 'No eye strain or squinting' : 'Confortable y sin alejar'}
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setNearAnswer('difficulty')}
                        className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                          nearAnswer === 'difficulty'
                            ? 'bg-[rgb(122,24,35)]/10 border-[rgb(122,24,35)] ring-2 ring-[rgb(122,24,35)]/20 text-[#14161B]'
                            : 'bg-gray-50 hover:bg-white border-gray-200 text-[#555963]'
                        }`}
                      >
                        <div className="text-[14px] font-bold text-[#14161B]">
                          {isEn ? 'I struggle to read line 3' : 'Se me hace borrosa o tengo que alejar'}
                        </div>
                        <p className="text-[11.5px] text-gray-500 mt-0.5">
                          {isEn ? 'Signs of presbyopia / fatigue' : 'Fatiga visual o vista cansada'}
                        </p>
                      </button>
                    </div>
                  </div>
                )}

                {/* --------------------------------------------------- */}
                {/* PASO 5: VISIÓN CROMÁTICA (ISHIHARA)                 */}
                {/* --------------------------------------------------- */}
                {activeStep === 5 && (
                  <div>
                    <div className="text-center mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[rgb(122,24,35)]">
                        {isEn ? 'Step 5 of 5' : 'Paso 5 de 5'}
                      </span>
                      <h2 className="text-[24px] sm:text-[28px] font-bold text-[#14161B] mt-1">
                        {isEn ? 'Color Vision Screening' : 'Visión Cromática (Colores)'}
                      </h2>
                      <p className="text-[13.5px] text-[#555963] mt-1 max-w-md mx-auto">
                        {isEn
                          ? 'What number do you perceive inside this dotted circle?'
                          : '¿Qué número lográs distinguir dentro del círculo de puntos?'}
                      </p>
                    </div>

                    {/* Lámina Ishihara SVG Optométrica */}
                    <div className="my-6 flex justify-center">
                      <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#f4ebd0] p-4 flex items-center justify-center border-4 border-white shadow-md relative overflow-hidden select-none">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          {/* Fondo de puntos de diversos tonos verdes/ocres */}
                          {[
                            [25, 40, '#a3b18a'], [55, 30, '#588157'], [90, 25, '#3a5a40'], [135, 35, '#a3b18a'], [165, 45, '#588157'],
                            [20, 80, '#588157'], [35, 120, '#a3b18a'], [25, 160, '#3a5a40'], [60, 175, '#588157'], [100, 180, '#a3b18a'],
                            [145, 170, '#588157'], [175, 140, '#a3b18a'], [180, 95, '#3a5a40'], [170, 65, '#588157'], [50, 75, '#a3b18a'],
                            [145, 75, '#588157'], [140, 125, '#a3b18a'], [55, 135, '#588157'], [100, 145, '#3a5a40'], [100, 55, '#a3b18a'],
                            // Puntos naranja/rojizos que forman el número 12
                            [80, 70, '#e76f51'], [80, 85, '#f4a261'], [80, 100, '#e76f51'], [80, 115, '#e76f51'], [80, 130, '#f4a261'], [70, 80, '#e76f51'],
                            [115, 70, '#e76f51'], [125, 70, '#f4a261'], [135, 80, '#e76f51'], [130, 95, '#f4a261'], [120, 105, '#e76f51'], [115, 115, '#f4a261'], [115, 130, '#e76f51'], [125, 130, '#e76f51'], [135, 130, '#f4a261'],
                          ].map(([cx, cy, col], i) => (
                            <circle key={i} cx={cx} cy={cy} r={6 + (i % 4)} fill={col as string} />
                          ))}
                        </svg>
                      </div>
                    </div>

                    {/* Selector de Opciones */}
                    <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
                      {['12', '74', 'Nada'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setColorAnswer(opt)}
                          className={`py-3.5 px-4 rounded-2xl font-bold text-[14px] border transition-all cursor-pointer ${
                            colorAnswer === opt
                              ? 'bg-[rgb(122,24,35)] text-white border-[rgb(122,24,35)] shadow-md'
                              : 'bg-white hover:bg-gray-50 border-gray-200 text-[#14161B]'
                          }`}
                        >
                          {opt === 'Nada' ? (isEn ? 'None' : 'No veo número') : opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Barra Inferior de Navegación del Test */}
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[12px] text-gray-400">
                    {isEn ? `Step ${activeStep} of 5` : `Paso ${activeStep} de 5`}
                  </span>

                  {activeStep > 1 && (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-2 h-11 px-7 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white text-[13px] font-bold shadow-md transition-all cursor-pointer"
                    >
                      <span>{activeStep === 5 ? (isEn ? 'See Results' : 'Ver Resultados') : (isEn ? 'Next Test' : 'Siguiente')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* FASE 4: RESULTADOS GLOBALES & ATENCIÓN POR WHATSAPP        */}
          {/* ========================================================= */}
          {phase === 'results' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-200/90 shadow-2xl p-6 sm:p-10 md:p-12 text-center"
            >
              {/* Insignia de Estado */}
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 border border-emerald-200 shadow-xs">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] text-[11px] font-bold uppercase tracking-wider mb-2">
                {isEn ? 'Evaluation Complete' : 'Evaluación Completada'}
              </span>

              <h2 className="text-[28px] sm:text-[34px] font-bold text-[#14161B]">
                {isEn ? 'Your Vision Screening Results' : 'Tus Resultados Orientativos'}
              </h2>

              <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#555963] max-w-xl mx-auto leading-relaxed">
                {isEn
                  ? 'Here is an orientative breakdown of your visual performance. Share these findings directly with Dr. Fabio Mora to receive professional guidance.'
                  : 'Aquí tenés un resumen orientativo de tus respuestas. Podés compartírselo directamente al Dr. Fabio Mora para que te asesore con claridad.'}
              </p>

              {/* Resumen Clínico en Cuadrícula */}
              <div className="mt-8 grid sm:grid-cols-2 gap-3 text-left">
                {/* Agudeza */}
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-bold text-gray-500 uppercase tracking-wider">{isEn ? 'Acuity' : 'Agudeza'}</span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      acuityScore >= 3 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {acuityScore >= 3 ? (isEn ? 'Good' : 'Adecuada') : (isEn ? 'Review advised' : 'A revisar')}
                    </span>
                  </div>
                  <div className="mt-2 text-[14px] font-bold text-[#14161B]">
                    {acuityScore}/4 {isEn ? 'correct directions' : 'aciertos'}
                  </div>
                  <p className="text-[11.5px] text-gray-500 mt-0.5">
                    {acuityScore >= 3 
                      ? (isEn ? 'Clear directional focus.' : 'Identificación clara de orientación.')
                      : (isEn ? 'Possible need for prescription adjustment.' : 'Podrías requerir actualización de graduación.')}
                  </p>
                </div>

                {/* Astigmatismo */}
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-bold text-gray-500 uppercase tracking-wider">{isEn ? 'Astigmatism' : 'Astigmatismo'}</span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      astigmatismAnswer === 'normal' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {astigmatismAnswer === 'normal' ? (isEn ? 'Symmetric' : 'Simétrico') : (isEn ? 'Possible distortion' : 'Asimetría')}
                    </span>
                  </div>
                  <div className="mt-2 text-[14px] font-bold text-[#14161B]">
                    {astigmatismAnswer === 'normal' ? (isEn ? 'Uniform radial focus' : 'Líneas uniformes') : (isEn ? 'Uneven lines detected' : 'Líneas desiguales')}
                  </div>
                  <p className="text-[11.5px] text-gray-500 mt-0.5">
                    {astigmatismAnswer === 'normal' 
                      ? (isEn ? 'No significant meridian distortion.' : 'No se detecta distorsión de meridiano evidente.')
                      : (isEn ? 'A clinical refraction is recommended.' : 'Recomendamos verificar cilindro en consultorio.')}
                  </p>
                </div>

                {/* Contraste */}
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-bold text-gray-500 uppercase tracking-wider">{isEn ? 'Contrast' : 'Contraste'}</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {isEn ? 'Level recorded' : 'Nivel registrado'}
                    </span>
                  </div>
                  <div className="mt-2 text-[14px] font-bold text-[#14161B]">
                    {contrastAnswer ? `Nivel ${contrastAnswer}/4` : (isEn ? 'Completed' : 'Completado')}
                  </div>
                  <p className="text-[11.5px] text-gray-500 mt-0.5">
                    {isEn ? 'Evaluates comfort in twilight and night driving.' : 'Importante para el manejo nocturno y confort ante pantallas.'}
                  </p>
                </div>

                {/* Lectura de Cerca */}
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-bold text-gray-500 uppercase tracking-wider">{isEn ? 'Near Vision' : 'Visión de cerca'}</span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      nearAnswer === 'perfect' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {nearAnswer === 'perfect' ? (isEn ? 'Comfortable' : 'Confortable') : (isEn ? 'Eye strain' : 'Fatiga')}
                    </span>
                  </div>
                  <div className="mt-2 text-[14px] font-bold text-[#14161B]">
                    {nearAnswer === 'perfect' ? (isEn ? 'Clear small print' : 'Lectura nítida') : (isEn ? 'Need to move back' : 'Necesidad de alejar')}
                  </div>
                  <p className="text-[11.5px] text-gray-500 mt-0.5">
                    {nearAnswer === 'perfect'
                      ? (isEn ? 'Presbyopia compensation looks stable.' : 'Acomodación visual adecuada.')
                      : (isEn ? 'Lenses with anti-fatigue or progressive design can help.' : 'Lentes antirreflejo o progresivos pueden aliviarte.')}
                  </p>
                </div>
              </div>

              {/* Tarjeta de Recomendación y Envío a WhatsApp */}
              <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[rgb(122,24,35)]/5 border border-[rgb(122,24,35)]/20 text-center">
                <h3 className="text-[20px] font-bold text-[#14161B]">
                  {isEn ? 'Send your results to Dr. Fabio Mora' : 'Enviá tus resultados al Dr. Fabio Mora'}
                </h3>
                <p className="mt-2 text-[13.5px] text-[#555963] max-w-lg mx-auto leading-relaxed">
                  {isEn
                    ? 'Get personalized clinical feedback and coordinate your comprehensive appointment at Plaza Higuerones without delays.'
                    : 'Recibí retroalimentación profesional y coordiná tu examen en Plaza Higuerones con una atención personalizada y sin carreras.'}
                </p>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={buildWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-13 px-8 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-[15px] font-bold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>{isEn ? 'Send Results via WhatsApp' : 'Enviar Resultados a WhatsApp'}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleRestart}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-13 px-6 rounded-2xl bg-white border border-gray-200 text-[#15171C] text-[13.5px] font-bold hover:bg-gray-50 transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4 text-gray-500" />
                    <span>{isEn ? 'Retake Test' : 'Repetir Test'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </div>
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
            window.location.hash = '#calificar';
          }
        }} 
      />
    </div>
  );
}
