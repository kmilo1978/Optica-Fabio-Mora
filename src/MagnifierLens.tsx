import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, ZoomOut, X, Eye, Sparkles } from 'lucide-react';
import { Language } from './translations';

interface MagnifierLensProps {
  active: boolean;
  onToggle: (state: boolean) => void;
  lang: Language;
}

export default function MagnifierLens({ active, onToggle, lang }: MagnifierLensProps) {
  const isEn = lang === 'en';

  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -999, y: -999 });
  const [hoveredText, setHoveredText] = useState<string>('');
  const [hoveredCategory, setHoveredCategory] = useState<string>('');
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(2.0);
  const [mobileText, setMobileText] = useState<string | null>(null);

  const lastTargetRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);

  // Escuchar tecla Escape para salir
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && active) {
        onToggle(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [active, onToggle]);

  // Manejador de movimiento del mouse y detección de texto
  useEffect(() => {
    if (!active) {
      if (lastTargetRef.current) {
        lastTargetRef.current.classList.remove('magnifier-target-highlight');
        lastTargetRef.current = null;
      }
      return;
    }

    document.body.classList.add('magnifier-mode-active');

    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });

        // Identificar elemento bajo el puntero
        const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
        if (!el) {
          setIsHovering(false);
          return;
        }

        // Ignorar controles de la propia lupa
        if (el.closest('#magnifier-ui') || el.closest('#magnifier-toggle-btn')) {
          return;
        }

        // Buscar el contenedor de texto más cercano
        const textContainer = el.closest('h1, h2, h3, h4, h5, h6, p, li, a, button, label, span, blockquote, dt, dd') as HTMLElement | null;
        const target = textContainer || el;

        const rawText = target.innerText?.trim() || target.textContent?.trim() || '';

        // Si el texto es válido y no son caracteres sueltos o iconos
        if (rawText.length > 2 && !target.closest('#magnifier-ui')) {
          if (lastTargetRef.current !== target) {
            if (lastTargetRef.current) {
              lastTargetRef.current.classList.remove('magnifier-target-highlight');
            }
            target.classList.add('magnifier-target-highlight');
            lastTargetRef.current = target;
          }

          // Clasificar tipo de elemento para contexto clínico
          let cat = isEn ? 'Text' : 'Texto';
          const tag = target.tagName.toLowerCase();
          if (tag.startsWith('h')) cat = isEn ? 'Heading' : 'Título';
          else if (tag === 'p') cat = isEn ? 'Paragraph' : 'Párrafo';
          else if (tag === 'a' || tag === 'button') cat = isEn ? 'Button / Link' : 'Enlace / Botón';
          else if (tag === 'li') cat = isEn ? 'List item' : 'Elemento';

          setHoveredCategory(cat);
          setHoveredText(rawText);
          setIsHovering(true);
        } else {
          if (lastTargetRef.current) {
            lastTargetRef.current.classList.remove('magnifier-target-highlight');
            lastTargetRef.current = null;
          }
          setIsHovering(false);
        }
      });
    };

    // Soporte para pantallas táctiles (móvil/tablet)
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      const el = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLElement | null;
      if (!el || el.closest('#magnifier-ui') || el.closest('#magnifier-toggle-btn')) return;

      const textContainer = el.closest('h1, h2, h3, h4, h5, h6, p, li, a, button, label, span') as HTMLElement | null;
      const target = textContainer || el;
      const text = target.innerText?.trim() || '';
      if (text.length > 5) {
        setMobileText(text);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    return () => {
      document.body.classList.remove('magnifier-mode-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (lastTargetRef.current) {
        lastTargetRef.current.classList.remove('magnifier-target-highlight');
        lastTargetRef.current = null;
      }
    };
  }, [active, isEn]);

  if (!active) return null;

  // Cálculo de posición segura en pantalla para el lente flotante
  const lensWidth = 320;
  const isNearTop = mousePos.y < 200;
  const isNearRight = mousePos.x > window.innerWidth - (lensWidth / 2 + 20);
  const isNearLeft = mousePos.x < lensWidth / 2 + 20;

  let leftPos = mousePos.x;
  if (isNearLeft) leftPos = lensWidth / 2 + 15;
  if (isNearRight) leftPos = window.innerWidth - (lensWidth / 2 + 15);

  return (
    <div id="magnifier-ui">
      {/* Estilos inyectados para el resaltado del texto activo */}
      <style>{`
        .magnifier-target-highlight {
          background-color: rgba(122, 24, 35, 0.08) !important;
          outline: 2px dashed rgb(122, 24, 35) !important;
          outline-offset: 3px !important;
          border-radius: 6px !important;
          transition: background-color 0.15s ease, outline 0.15s ease !important;
        }
        body.magnifier-mode-active {
          cursor: crosshair !important;
        }
      `}</style>

      {/* LENTE FLOTANTE MAGNIFICADOR (Desktop) */}
      {mousePos.x > 0 && (
        <div
          className="hidden md:block fixed pointer-events-none z-[999999] transition-transform duration-75 ease-out select-none"
          style={{
            left: `${leftPos}px`,
            top: `${mousePos.y}px`,
            transform: isNearTop 
              ? 'translate(-50%, 25px)' 
              : 'translate(-50%, -115%)',
          }}
        >
          <div className="relative w-[320px] rounded-2xl bg-white/95 backdrop-blur-md border-[2.5px] border-[rgb(122,24,35)] shadow-2xl shadow-black/25 overflow-hidden p-3.5 flex flex-col justify-between">
            {/* Reflejo óptico simulado de cristal */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 40%, rgba(122,24,35,0.05) 100%)',
              }}
            />

            {/* Cabecera del Lente */}
            <div className="relative z-10 flex items-center justify-between pb-2 border-b border-gray-100 mb-2">
              <div className="flex items-center gap-1.5 text-[rgb(122,24,35)]">
                <ZoomIn className="w-3.5 h-3.5 stroke-[2.5]" />
                <span className="text-[10px] font-black uppercase tracking-wider">
                  {isEn ? 'Optical Lens' : 'Lupa Oftálmica'}
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-[rgb(122,24,35)]/10 text-[rgb(122,24,35)]">
                  {zoomLevel.toFixed(1)}x
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-wider font-semibold text-gray-400">
                {isHovering ? hoveredCategory : (isEn ? 'Hover text' : 'Pasa el cursor')}
              </span>
            </div>

            {/* Texto Ampliado */}
            <div className="relative z-10 min-h-[64px] max-h-[140px] overflow-hidden flex items-center justify-center">
              {isHovering && hoveredText ? (
                <p 
                  className="font-bold text-[#111827] leading-snug line-clamp-4 w-full text-left"
                  style={{
                    fontSize: `${zoomLevel * 9}px`,
                    textShadow: '0 1px 1px rgba(0,0,0,0.05)',
                  }}
                >
                  {hoveredText}
                </p>
              ) : (
                <div className="flex items-center gap-2 text-gray-400 py-2">
                  <Eye className="w-4 h-4 text-[rgb(122,24,35)]/70 animate-pulse shrink-0" />
                  <span className="text-[11px] font-medium text-gray-500">
                    {isEn ? 'Move cursor over any text to magnify' : 'Pasa el cursor sobre cualquier texto para ampliarlo'}
                  </span>
                </div>
              )}
            </div>

            {/* Pie del Lente */}
            <div className="relative z-10 mt-2 pt-1.5 border-t border-gray-100 flex items-center justify-between text-[9px] text-gray-400 font-medium">
              <span>Ópticas Popular</span>
              <span>{isEn ? 'Esc to exit' : 'Presiona Esc para salir'}</span>
            </div>
          </div>
        </div>
      )}

      {/* PANEL FLOTANTE DE CONTROL Y ACCESIBILIDAD (Inferior Derecha) */}
      <motion.aside
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-5 right-5 z-[999990] bg-white/95 backdrop-blur-md text-[#15171C] py-2 px-3 sm:px-3.5 rounded-2xl shadow-xl border-2 border-[rgb(122,24,35)] flex items-center gap-2 sm:gap-2.5 text-[12px]"
      >
        <div className="w-6 h-6 rounded-full bg-[rgb(122,24,35)] flex items-center justify-center text-white shrink-0 shadow-xs">
          <ZoomIn className="w-3.5 h-3.5" />
        </div>

        <div className="text-left leading-tight hidden sm:block">
          <div className="text-[11px] font-extrabold text-[rgb(122,24,35)] uppercase tracking-wider">
            {isEn ? 'Lens Active' : 'Lupa Activa'}
          </div>
          <div className="text-[9.5px] text-gray-500 font-medium">
            {isEn ? 'Hover text to enlarge' : 'Pasa el cursor por el texto'}
          </div>
        </div>

        {/* Controles de Nivel de Zoom */}
        <div className="flex items-center gap-0.5 bg-gray-100 p-0.5 rounded-xl ml-1">
          <button
            type="button"
            onClick={() => setZoomLevel((prev) => Math.max(1.5, Number((prev - 0.25).toFixed(2))))}
            title={isEn ? 'Decrease zoom' : 'Disminuir aumento'}
            className="w-6 h-6 rounded-lg bg-white hover:bg-gray-200 flex items-center justify-center text-gray-700 font-bold active:scale-95 shadow-2xs transition-all cursor-pointer"
          >
            <ZoomOut className="w-3 h-3" />
          </button>
          <span className="text-[10.5px] font-extrabold text-[rgb(122,24,35)] px-1 min-w-[32px] text-center select-none">
            {zoomLevel.toFixed(1)}x
          </span>
          <button
            type="button"
            onClick={() => setZoomLevel((prev) => Math.min(2.8, Number((prev + 0.25).toFixed(2))))}
            title={isEn ? 'Increase zoom' : 'Aumentar aumento'}
            className="w-6 h-6 rounded-lg bg-white hover:bg-gray-200 flex items-center justify-center text-gray-700 font-bold active:scale-95 shadow-2xs transition-all cursor-pointer"
          >
            <ZoomIn className="w-3 h-3" />
          </button>
        </div>

        {/* Botón Salir */}
        <button
          type="button"
          onClick={() => onToggle(false)}
          className="ml-1 text-[11px] font-bold text-white bg-[rgb(122,24,35)] hover:bg-[rgb(142,28,41)] px-2.5 py-1 rounded-xl transition-all shadow-xs cursor-pointer active:scale-95 flex items-center gap-1"
          title="Cerrar lupa (Esc)"
        >
          <X className="w-3.5 h-3.5" />
          <span>{isEn ? 'Exit' : 'Salir'}</span>
        </button>
      </motion.aside>

      {/* Modal táctil para móviles */}
      <AnimatePresence>
        {mobileText && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="md:hidden fixed inset-x-4 bottom-24 z-[999995] bg-white rounded-2xl border-2 border-[rgb(122,24,35)] shadow-2xl p-4"
          >
            <div className="flex items-center justify-between pb-2 border-b border-gray-100 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[rgb(122,24,35)] flex items-center gap-1">
                <ZoomIn className="w-3.5 h-3.5" />
                {isEn ? 'Magnified Text' : 'Texto Aumentado'}
              </span>
              <button
                onClick={() => setMobileText(null)}
                className="w-6 h-6 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-[16px] font-bold text-[#111827] leading-relaxed">
              {mobileText}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
