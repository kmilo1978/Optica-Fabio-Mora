import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft,
  ArrowRight,
  Phone, 
  MessageCircle, 
  Glasses, 
  Sun, 
  Monitor, 
  ShieldCheck, 
  CheckCircle2, 
  Eye, 
  Award, 
  Sparkles, 
  Clock, 
  MapPin,
  Layers,
  Zap,
  HelpCircle
} from 'lucide-react';
import { Language } from './translations';
import Footer from './Footer';

import { NavigationView } from './Footer';

interface TecnologiaCristalesPageProps {
  onBack: () => void;
  lang?: Language;
  onNavigate?: (view: NavigationView, hash?: string) => void;
}

export default function TecnologiaCristalesPage({ onBack, lang = 'es', onNavigate }: TecnologiaCristalesPageProps) {
  const isEn = lang === 'en';

  const [activeTab, setActiveTab] = useState<'progresivas' | 'transitions' | 'luz-azul'>('progresivas');
  const [progZone, setProgZone] = useState<'lejos' | 'intermedio' | 'cerca'>('intermedio');
  const [transMode, setTransMode] = useState<'interior' | 'exterior'>('interior');
  const [blueFilterOn, setBlueFilterOn] = useState<boolean>(true);

  const tabs = [
    {
      id: 'progresivas' as const,
      name: isEn ? 'Digital Progressive Lenses' : 'Lentes Progresivas Digitales',
      shortName: isEn ? 'Digital Progressives' : 'Progresivas FreeForm',
      tagline: isEn ? 'Presbyopia & Continuous Focus' : 'Presbicia y Enfoque Continuo',
      icon: Glasses,
      category: isEn ? 'Near · Mid · Far' : 'Cerca · Intermedio · Lejos',
    },
    {
      id: 'transitions' as const,
      name: isEn ? 'Transitions® Smart Lenses' : 'Lentes Fotosensibles Transitions®',
      shortName: isEn ? 'Smart Transitions®' : 'Transitions® Inteligentes',
      tagline: isEn ? 'Dynamic Solar Adaptation' : 'Adaptación Solar Dinámica',
      icon: Sun,
      category: isEn ? 'Smart Photochromic' : 'Fotocromático Inteligente',
    },
    {
      id: 'luz-azul' as const,
      name: isEn ? 'Blue Light & AR Shield' : 'Protección de Luz Azul & Antirreflejo',
      shortName: isEn ? 'Blue Light Filter' : 'Luz Azul & Antirreflejo',
      tagline: isEn ? 'Digital Comfort & Night Rest' : 'Confort Digital y Descanso',
      icon: Monitor,
      category: isEn ? 'Anti-Digital Fatigue' : 'Filtro Anti-Fatiga Digital',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-[#15171C] font-sans flex flex-col justify-between selection:bg-[rgb(122,24,35)] selection:text-white">
      {/* Cabecera Superior de la Página */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo y volver */}
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

          {/* Breadcrumb sutil central en pantallas medianas */}
          <div className="hidden md:flex items-center gap-2 text-[12.5px] font-medium text-gray-500">
            <span className="hover:text-gray-800 cursor-pointer" onClick={onBack}>{isEn ? 'Home' : 'Inicio'}</span>
            <span>/</span>
            <span className="text-gray-400">{isEn ? 'Services' : 'Servicios'}</span>
            <span>/</span>
            <span className="text-[rgb(122,24,35)] font-bold">{isEn ? 'Lens Technology' : 'Tecnología en Cristales'}</span>
          </div>

          {/* Canales de contacto directos */}
          <div className="flex items-center gap-2.5">
            <a
              href="tel:+50672760215"
              className="hidden sm:inline-flex items-center gap-1.5 h-9 px-3.5 rounded-xl border border-gray-200 text-[#15171C] hover:text-[rgb(122,24,35)] hover:border-[rgb(122,24,35)] text-[12px] font-bold transition-all duration-200 active:scale-95 cursor-pointer shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-[rgb(122,24,35)]" />
              <span>2515-0002</span>
            </a>

            <a
              href="https://wa.me/50672760215"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 h-9 px-4 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white !text-white text-[12px] font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer btn-shimmer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white" />
              <span className="text-white">{isEn ? 'WhatsApp' : 'Escribir'}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 w-full">
        {/* Encabezado Principal Editorial */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 h-7 px-3.5 rounded-full bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] text-[11px] sm:text-[12px] uppercase tracking-wider font-bold shadow-2xs mb-3 border border-[rgb(122,24,35)]/20"
          >
            <Glasses className="w-3.5 h-3.5 text-[rgb(122,24,35)]" />
            <span>{isEn ? 'Ophthalmic Innovation & Treatments' : 'Innovación en Cristales & Tratamientos'}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-[#14161B] tracking-tight leading-tight"
          >
            {isEn ? (
              <>Visual technology engineered for <span className="text-[rgb(122,24,35)]">your daily comfort</span></>
            ) : (
              <>Tecnología visual pensada para <span className="text-[rgb(122,24,35)]">tu comodidad diaria</span></>
            )}
          </motion.h1>

          <div className="w-16 h-1 bg-[rgb(122,24,35)] mx-auto mt-3.5 rounded-full" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[15px] sm:text-[16px] text-[#555963] leading-relaxed"
          >
            {isEn 
              ? 'High-precision ophthalmic lenses calibrated by Dr. Fabio Mora to provide razor-sharp clarity, screen comfort, and seamless adaptation to changing light.'
              : 'Cristales oftálmicos de alta precisión calibrados por el Dr. Fabio Mora para brindarte una visión nítida, descanso ante pantallas y protección ante los cambios de luz.'}
          </motion.p>
        </div>

        {/* 1. Selector Superior Interactivo (Segmented Tabs) */}
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
                      <span>{isEn ? 'FreeForm Digital Technology' : 'Tecnología FreeForm Digital'}</span>
                    </div>

                    <h2 className="text-[24px] sm:text-[28px] font-bold text-[#14161B] leading-tight">
                      {isEn 
                        ? 'Custom Digital Progressive Lenses' 
                        : 'Lentes Progresivas Digitales Personalizadas'}
                    </h2>

                    <p className="mt-3 text-[14px] sm:text-[15px] text-[#555963] leading-relaxed">
                      {isEn
                        ? 'Designed for presbyopia. Replaces traditional bifocals by unifying all focal distances into a single seamless lens, free of visible lines and image jumps.'
                        : 'Diseñadas para personas con presbicia o vista cansada a partir de los 40 años. Reemplazan a los antiguos bifocales unificando todas las distancias en un solo cristal continuo, sin líneas divisorias visibles y sin saltos bruscos de imagen.'}
                    </p>

                    {/* Micro-tarjetas interactivas de zonas focales */}
                    <div className="mt-6 space-y-2.5">
                      <p className="text-[12px] font-bold uppercase tracking-wider text-[#7C808B]">
                        {isEn ? 'Explore the 3 Visual Zones on the Lens:' : 'Explorá las 3 Zonas de Visión en el Lente:'}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {[
                          { 
                            id: 'lejos' as const, 
                            title: isEn ? '1. Distance Vision' : '1. Visión Lejana',
                            desc: isEn ? 'Driving, TV, and outdoor walks' : 'Conducción, cine, paisajes y paseos',
                          },
                          { 
                            id: 'intermedio' as const, 
                            title: isEn ? '2. Intermediate Zone' : '2. Zona Intermedia',
                            desc: isEn ? 'Computer, cooking, and dashboard' : 'Computadora, cocina y tablero del auto',
                          },
                          { 
                            id: 'cerca' as const, 
                            title: isEn ? '3. Near Reading' : '3. Visión Cercana',
                            desc: isEn ? 'Smartphone, books, and fine print' : 'Lectura en celular, libros y documentos',
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
                          {isEn ? '30-Day Adaptation Guarantee' : 'Garantía de Adaptación de 30 Días'}
                        </p>
                        <p className="text-[11.5px] text-[#555963]">
                          {isEn 
                            ? 'Precision-measured by Dr. Fabio Mora ensuring natural visual adaptation without dizziness.'
                            : 'Calibradas con precisión milimétrica por el Dr. Fabio Mora para asegurar una adaptación natural y sin mareos.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Botón CTA con texto blanco y btn-shimmer */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    <a
                      href={`https://wa.me/50672760215?text=${encodeURIComponent(
                        isEn
                          ? 'Hello Dr. Fabio Mora, I would like advice and pricing for digital progressive lenses.'
                          : '¡Hola Dr. Fabio Mora! Quisiera consultar por la cotización y prueba de lentes progresivas digitales.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white !text-white text-[13px] sm:text-[14px] font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer btn-shimmer"
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span className="text-white">{isEn ? 'Inquire progressives on WhatsApp' : 'Consultar progresivos por WhatsApp'}</span>
                      <ArrowRight className="w-4 h-4 ml-1 text-white" />
                    </a>
                  </div>
                </div>

                {/* Columna Derecha: Simulador Visual Interactivo del Lente */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl bg-gradient-to-b from-[#14161B] to-[#1E2229] p-6 text-white border border-gray-800 shadow-xl overflow-hidden">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-[rgb(180,40,55)]" />
                        {isEn ? 'Optical Corridor Simulator' : 'Simulador de Corredor Óptico'}
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
                          {isEn ? 'Distance Field' : 'Zona de Lejos'}
                        </span>
                        <span className="text-[9.5px] text-white/70">
                          {isEn ? 'Driving / Distance' : 'Manejo / Panorámica'}
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
                          {isEn ? 'Intermediate Corridor' : 'Corredor Intermedio'}
                        </span>
                        <span className="text-[9.5px] text-white/70">
                          {isEn ? 'Computer / Desk' : 'Computadora / Pantallas'}
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
                          {isEn ? 'Reading Field' : 'Zona de Lectura'}
                        </span>
                        <span className="text-[9.5px] text-white/70">
                          {isEn ? 'Smartphone / Books' : 'Celular / Letra pequeña'}
                        </span>
                      </button>
                    </div>

                    <div className="mt-5 p-3 rounded-xl bg-white/10 border border-white/10 text-center">
                      <p className="text-[12px] font-bold text-white">
                        {progZone === 'lejos' && (isEn ? 'Crisp infinity focus without head strain' : 'Enfoque nítido al infinito sin mover la cabeza')}
                        {progZone === 'intermedio' && (isEn ? 'Smooth transition with ergonomic office posture' : 'Transición suave y descanso ergonómico en la oficina')}
                        {progZone === 'cerca' && (isEn ? 'Wide visual field for natural reading comfort' : 'Amplitud de campo para leer con total naturalidad')}
                      </p>
                      <p className="text-[10px] text-gray-300 mt-1">
                        {isEn ? 'Point-by-point digital surfacing removes swim distortion' : 'Tallado computarizado punto a punto que elimina distorsiones laterales'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CONTENIDO 2: TRANSITIONS */}
            {activeTab === 'transitions' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 h-6 px-3 rounded-full bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] text-[11px] font-bold uppercase tracking-wider mb-3">
                      <Sun className="w-3.5 h-3.5" />
                      <span>{isEn ? 'Smart Photochromic Defense' : 'Protección Fotocromática Inteligente'}</span>
                    </div>

                    <h2 className="text-[24px] sm:text-[28px] font-bold text-[#14161B] leading-tight">
                      {isEn ? 'Transitions® Smart Light Lenses' : 'Lentes Fotosensibles Transitions®'}
                    </h2>

                    <p className="mt-3 text-[14px] sm:text-[15px] text-[#555963] leading-relaxed">
                      {isEn
                        ? 'The all-in-one answer to switching between prescription glasses and sunglasses. Crystal-clear indoors, dynamically darkening outdoors in seconds for complete UV and glare protection.'
                        : 'La solución definitiva para quienes no quieren cambiar constantemente entre anteojos de sol y lentes graduados. En interiores se mantienen perfectamente transparentes y, al salir al sol, se oscurecen dinámicamente en segundos para protegerte del resplandor y la radiación UV.'}
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80">
                        <div className="flex items-center gap-2 text-[rgb(122,24,35)] mb-1">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-[12.5px] font-bold text-[#14161B]">{isEn ? '100% UVA / UVB Defense' : '100% Filtro UVA / UVB'}</span>
                        </div>
                        <p className="text-[11.5px] text-[#555963]">
                          {isEn ? 'Full protection against harmful solar radiation.' : 'Bloqueo total contra radiación solar dañina para la retina.'}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80">
                        <div className="flex items-center gap-2 text-[rgb(122,24,35)] mb-1">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-[12.5px] font-bold text-[#14161B]">{isEn ? 'Swift Indoor Fading' : 'Aclarado Rápido'}</span>
                        </div>
                        <p className="text-[11.5px] text-[#555963]">
                          {isEn ? 'Returns to crystal clear swiftly upon stepping indoors.' : 'Vuelven a su estado claro casi al instante al entrar bajo techo.'}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 rounded-2xl bg-[#F8F9FB] border border-gray-200/80">
                      <p className="text-[12px] font-bold uppercase tracking-wider text-[#7C808B] mb-2.5">
                        {isEn ? 'Test light behavior in the simulator:' : 'Probá el comportamiento de luz en el simulador:'}
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
                          {isEn ? 'Indoors (100% Clear)' : 'En Interiores (100% Claro)'}
                        </button>
                        <button
                          onClick={() => setTransMode('exterior')}
                          className={`flex-1 py-2.5 px-3 rounded-xl text-[12.5px] font-bold transition-all cursor-pointer ${
                            transMode === 'exterior'
                              ? 'bg-[rgb(122,24,35)] text-white shadow-xs'
                              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                          }`}
                        >
                          {isEn ? 'Outdoors (Darkened)' : 'Bajo el Sol (Oscurecido)'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Botón CTA con texto blanco y btn-shimmer */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    <a
                      href={`https://wa.me/50672760215?text=${encodeURIComponent(
                        isEn
                          ? 'Hello Dr. Fabio Mora, I would like details about Transitions lenses.'
                          : '¡Hola Dr. Fabio Mora! Quisiera consultar por cristales Transitions fotosensibles en Ópticas Popular.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white !text-white text-[13px] sm:text-[14px] font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer btn-shimmer"
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span className="text-white">{isEn ? 'Inquire Transitions on WhatsApp' : 'Consultar Transitions por WhatsApp'}</span>
                      <ArrowRight className="w-4 h-4 ml-1 text-white" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl bg-gradient-to-b from-[#14161B] to-[#1E2229] p-6 text-white border border-gray-800 shadow-xl overflow-hidden text-center">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                        <Sun className="w-3.5 h-3.5 text-[rgb(180,40,55)]" />
                        {isEn ? 'Solar Adaptation Simulator' : 'Simulador de Adaptación Solar'}
                      </span>
                      <span className="text-[10px] font-bold bg-white/10 px-2 py-0.5 rounded-full text-white/80">
                        {transMode === 'interior' ? (isEn ? 'UV Filter 0% (Clear)' : 'Filtro UV 0% (Claro)') : (isEn ? 'UV Filter 100% (Active)' : 'Filtro UV 100% (Activo)')}
                      </span>
                    </div>

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
                          {transMode === 'interior' ? (isEn ? '100% Clear Lens' : 'Cristal 100% Claro') : (isEn ? 'Graphite Dark Tint' : 'Tinte Grafito Protector')}
                        </span>
                        <span className={`text-[10px] mt-0.5 transition-colors ${transMode === 'exterior' ? 'text-gray-300' : 'text-gray-500'}`}>
                          {transMode === 'interior' ? (isEn ? 'Indoor / Night' : 'Interior / Noche') : (isEn ? 'Outdoor under direct sun' : 'Exterior bajo luz solar')}
                        </span>
                      </motion.div>
                    </div>

                    <p className="text-[12px] font-semibold text-gray-200 mt-2">
                      {transMode === 'interior' 
                        ? (isEn ? 'Clear vision in offices, home, and night driving.' : 'Visión nítida y cristalina en oficinas, hogar y conducción de noche.')
                        : (isEn ? 'Zero glare with maximum eye relaxation outdoors.' : 'Máximo confort visual que elimina el encandilamiento en la calle.')}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* CONTENIDO 3: LUZ AZUL */}
            {activeTab === 'luz-azul' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 h-6 px-3 rounded-full bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] text-[11px] font-bold uppercase tracking-wider mb-3">
                      <Monitor className="w-3.5 h-3.5" />
                      <span>{isEn ? 'Digital Eye Health' : 'Salud Visual en la Era Digital'}</span>
                    </div>

                    <h2 className="text-[24px] sm:text-[28px] font-bold text-[#14161B] leading-tight">
                      {isEn ? 'Blue Light Filter & AR Shield' : 'Filtro de Luz Azul & Antirreflejo Multicapa'}
                    </h2>

                    <p className="mt-3 text-[14px] sm:text-[15px] text-[#555963] leading-relaxed">
                      {isEn
                        ? 'Screens emit high-energy blue-violet light causing digital eye strain, dryness, and insomnia. Our selective BlueBlock treatment filters harmful rays while keeping true color balance.'
                        : 'Monitores, tabletas y celulares emiten luz azul de alta energía que penetra hasta la retina, produciendo ojo seco, visión borrosa al final del día y alteraciones en el sueño. Nuestro tratamiento selectivo BlueBlock filtra esta longitud de onda sin distorsionar los colores.'}
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80">
                        <div className="flex items-center gap-2 text-[rgb(122,24,35)] mb-1">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-[12.5px] font-bold text-[#14161B]">{isEn ? 'Immediate Eye Comfort' : 'Descanso Ocular Inmediato'}</span>
                        </div>
                        <p className="text-[11.5px] text-[#555963]">
                          {isEn ? 'Less dryness, redness, and end-of-day muscle tension.' : 'Menor pesadez, lagrimeo y fatiga muscular tras horas de trabajo.'}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80">
                        <div className="flex items-center gap-2 text-[rgb(122,24,35)] mb-1">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-[12.5px] font-bold text-[#14161B]">{isEn ? 'Hydrophobic Anti-Glare' : 'Antirreflejo Hidrófobo'}</span>
                        </div>
                        <p className="text-[11.5px] text-[#555963]">
                          {isEn ? 'Eliminates glare from artificial lighting, easy to clean.' : 'Elimina destellos de luces artificiales y es fácil de limpiar.'}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 rounded-2xl bg-[#F8F9FB] border border-gray-200/80">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[12.5px] font-bold text-[#14161B]">
                            {isEn ? 'Simulate screen filter:' : 'Simular filtro en pantalla:'}
                          </p>
                          <p className="text-[11.5px] text-[#555963]">
                            {blueFilterOn ? (isEn ? 'Protective filter active (Comfort)' : 'Filtro protector activado (Descanso)') : (isEn ? 'No filter (Harsh screen glare)' : 'Sin filtro (Resplandor directo)')}
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
                          <span>{blueFilterOn ? (isEn ? 'Filter ON' : 'Filtro ON') : (isEn ? 'Filter OFF' : 'Filtro OFF')}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Botón CTA con texto blanco y btn-shimmer */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    <a
                      href={`https://wa.me/50672760215?text=${encodeURIComponent(
                        isEn
                          ? 'Hello Dr. Fabio Mora, I would like advice on blue light and anti-reflective lenses.'
                          : '¡Hola Dr. Fabio Mora! Quisiera consultar por cristales con filtro de luz azul y antirreflejo.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,30,42)] text-white !text-white text-[13px] sm:text-[14px] font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer btn-shimmer"
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span className="text-white">{isEn ? 'Inquire blue filter on WhatsApp' : 'Consultar filtro azul por WhatsApp'}</span>
                      <ArrowRight className="w-4 h-4 ml-1 text-white" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl bg-gradient-to-b from-[#14161B] to-[#1E2229] p-6 text-white border border-gray-800 shadow-xl overflow-hidden text-center">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                        <Monitor className="w-3.5 h-3.5 text-[rgb(180,40,55)]" />
                        {isEn ? 'Screen Comfort Simulator' : 'Simulador de Confort de Pantalla'}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${blueFilterOn ? 'bg-white/20 text-white' : 'bg-red-500/20 text-red-200'}`}>
                        {blueFilterOn ? (isEn ? 'Protected' : 'Protegido') : (isEn ? 'Eye Strain' : 'Fatiga Digital')}
                      </span>
                    </div>

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
                          ? (isEn ? 'Warm, relaxed contrast: 0 eye burning' : 'Contraste cálido y relajado: 0 ardor ocular')
                          : (isEn ? 'Harsh cold glare causing eye fatigue' : 'Resplandor frío y agresivo que causa fatiga')}
                      </p>
                    </div>

                    <p className="text-[11px] text-gray-400 mt-3">
                      {isEn ? 'Recommended for remote work, studying, and screen usage > 3 hrs/day.' : 'Recomendado para teletrabajo, estudio y uso de celular por más de 3 horas al día.'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Sección de Comparativa Clínica y Preguntas Clave */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] flex items-center justify-center mb-4">
                <Glasses className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-bold text-[#14161B] mb-2">
                {isEn ? 'How to adapt to progressives?' : '¿Cómo adaptarse a las progresivas?'}
              </h3>
              <p className="text-[13px] text-[#555963] leading-relaxed">
                {isEn 
                  ? 'With Dr. Fabio Mora’s FreeForm digital custom fitting, adaptation takes only 2-5 days. Move your eyes along the vertical corridor rather than lifting your chin.'
                  : 'Gracias al tallado digital personalizado por el Dr. Fabio Mora, el 95% de los pacientes se adaptan en 2 a 5 días. Solo guiás la mirada hacia abajo para leer sin mover bruscamente la cabeza.'}
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2 text-[12px] font-bold text-[rgb(122,24,35)]">
              <ShieldCheck className="w-4 h-4" />
              <span>{isEn ? '30-Day In-Clinic Guarantee' : 'Garantía 30 Días en Ópticas Popular'}</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] flex items-center justify-center mb-4">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-bold text-[#14161B] mb-2">
                {isEn ? 'Do Transitions work in cars?' : '¿Se oscurecen Transitions en el auto?'}
              </h3>
              <p className="text-[13px] text-[#555963] leading-relaxed">
                {isEn
                  ? 'The windshield blocks UV rays, so standard Transitions stay clear. For drivers, we also prescribe Transitions XTRActive, which react to visible light inside vehicles.'
                  : 'El parabrisas del auto bloquea los rayos UV, por lo que las Transitions clásicas se mantienen claras. Si manejás mucho, disponemos de Transitions XTRActive que también se activan dentro del vehículo.'}
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2 text-[12px] font-bold text-[rgb(122,24,35)]">
              <CheckCircle2 className="w-4 h-4" />
              <span>{isEn ? 'Option for Active Drivers' : 'Opciones Especiales para Choferes'}</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)] flex items-center justify-center mb-4">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-bold text-[#14161B] mb-2">
                {isEn ? 'Can BlueBlock have no prescription?' : '¿Puedo usar filtro azul sin graduación?'}
              </h3>
              <p className="text-[13px] text-[#555963] leading-relaxed">
                {isEn
                  ? 'Yes! If you have 20/20 vision but spend long hours on monitors or tablets, you can get neutral lenses with BlueBlock AR coating to protect your eyes.'
                  : '¡Totalmente! Si tenés visión perfecta pero pasás 6 a 10 horas frente a la computadora o el celular, podés usar cristales neutros con filtro de luz azul para evitar ardor y cansancio.'}
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2 text-[12px] font-bold text-[rgb(122,24,35)]">
              <CheckCircle2 className="w-4 h-4" />
              <span>{isEn ? 'Ideal for Programmers & Students' : 'Recomendado para Teletrabajo y Estudio'}</span>
            </div>
          </div>
        </div>

        {/* Banner Final de Cita Médica con Botón Blanco Text Shimmer */}
        <div className="mt-14 md:mt-20 rounded-3xl bg-[rgb(122,24,35)] text-white p-7 sm:p-10 md:p-12 shadow-xl border border-white/10 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-[11px] sm:text-[12px] uppercase tracking-wider font-extrabold mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>{isEn ? 'Precision Vision Guarantee' : 'Calibración Ocular Personalizada'}</span>
            </span>

            <h2 className="text-[24px] sm:text-[30px] md:text-[34px] font-bold leading-tight tracking-tight text-white mb-3">
              {isEn 
                ? 'Get your eyes evaluated and choose the right lenses with Dr. Fabio Mora'
                : 'Valorá tu visión y elegí los cristales adecuados con el Dr. Fabio Mora'}
            </h2>

            <p className="text-[14px] sm:text-[15px] text-white/90 leading-relaxed mb-6 font-normal">
              {isEn
                ? 'Visit us at Plaza Higuerones, San Rafael Abajo de Desamparados. Personalized examination, pupillary measurement, and 30-day adaptation guarantee.'
                : 'Visitanos en Plaza Higuerones, San Rafael Abajo de Desamparados. Examen visual computarizado, medición milimétrica de alturas focales y garantía total de confort.'}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/50672760215?text=${encodeURIComponent(
                  isEn
                    ? 'Hello Dr. Fabio Mora, I would like to schedule an exam to quote new precision lenses.'
                    : '¡Hola Dr. Fabio Mora! Quisiera agendar mi examen de la vista para cotizar mis nuevos cristales con tecnología.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-xl bg-[rgb(142,30,42)] hover:bg-[rgb(162,35,48)] text-white !text-white text-[14px] font-bold shadow-xl border border-white/30 transition-all duration-200 active:scale-95 cursor-pointer btn-shimmer group"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span className="text-white">{isEn ? 'Book Appointment via WhatsApp' : 'Agendar mi cita por WhatsApp'}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onBack}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white !text-white text-[13.5px] font-bold border border-white/20 transition-all duration-200 active:scale-95 cursor-pointer btn-shimmer"
              >
                <ArrowLeft className="w-4 h-4 text-white !text-white" />
                <span className="text-white !text-white">{isEn ? 'Return to Home' : 'Volver a la página principal'}</span>
              </button>
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
