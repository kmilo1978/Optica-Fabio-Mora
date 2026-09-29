import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ZoomIn, 
  ZoomOut, 
  X, 
  Eye, 
  Sparkles,
  Maximize2
} from 'lucide-react';
import { TRANSLATIONS, Language } from './translations';

interface MagnifierLensProps {
  active: boolean;
  onToggle: (state: boolean) => void;
  lang: Language;
}

export default function MagnifierLens({ active, onToggle, lang }: MagnifierLensProps) {
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const [zoomLevel, setZoomLevel] = useState<number>(2.0);
  const [magnifiedText, setMagnifiedText] = useState<string>('');
  const [isHoveringText, setIsHoveringText] = useState<boolean>(false);
  const [mobileModalText, setMobileModalText] = useState<string | null>(null);
  
  const lastTargetRef = useRef<HTMLElement | null>(null);
  const t = TRANSLATIONS[lang].magnifier;

  // Manejar teclado (ESC para salir)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && active) {
        onToggle(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [active, onToggle]);

  // Rastrear posición del mouse e inspeccionar texto bajo el cursor
  useEffect(() => {
    if (!active) {
      if (lastTargetRef.current) {
        lastTargetRef.current.classList.remove('magnifier-reading-target');
        lastTargetRef.current = null;
      }
      setIsHoveringText(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });

      // No interactuar si está encima de la barra de control de la lupa
      const target = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      if (!target || target.closest('#magnifier-hud') || target.closest('#magnifier-toggle-btn')) {
        setIsHoveringText(false);
        return;
      }

      // Buscar si el elemento o sus padres contienen texto legible
      const textElement = target.closest('p, h1, h2, h3, h4, h5, h6, li, blockquote, button, a, span, label') as HTMLElement | null;

      if (textElement) {
        const text = textElement.innerText?.trim();
        if (text && text.length > 0 && text.length < 350) {
          setMagnifiedText(text);
          setIsHoveringText(true);

          if (lastTargetRef.current && lastTargetRef.current !== textElement) {
            lastTargetRef.current.classList.remove('magnifier-reading-target');
          }
          textElement.classList.add('magnifier-reading-target');
          lastTargetRef.current = textElement;
          return;
        }
      }

      if (lastTargetRef.current) {
        lastTargetRef.current.classList.remove('magnifier-reading-target');
        lastTargetRef.current = null;
      }
      setIsHoveringText(false);
    };

    // Para dispositivos móviles (tocar cualquier párrafo para ampliarlo)
    const handleTouchStart = (e: TouchEvent) => {
      if (window.innerWidth >= 768) return;
      const touch = e.touches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLElement | null;
      if (!target || target.closest('#magnifier-hud')) return;

      const textElement = target.closest('p, h1, h2, h3, li, blockquote') as HTMLElement | null;
      if (textElement) {
        const text = textElement.innerText?.trim();
        if (text && text.length > 5) {
          setMobileModalText(text);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      if (lastTargetRef.current) {
        lastTargetRef.current.classList.remove('magnifier-reading-target');
        lastTargetRef.current = null;
      }
    };
  }, [active]);

  if (!active) return null;

  return (
    <>
      {/* Estilos dinámicos inyectados para el resaltado oftálmico */}
      <style>{`
        .magnifier-reading-target {
          background-color: rgba(122, 24, 35, 0.08) !important;
          outline: 2px dashed rgb(122, 24, 35) !important;
          outline-offset: 3px !important;
          border-radius: 6px !important;
          transition: background-color 0.15s ease, outline 0.15s ease !important;
        }
        body.magnifier-mode-on {
          cursor: crosshair !important;
        }
      `}</style>

      {/* Lente Flotante Circular (Desktop) */}
      <div
        className="hidden md:block fixed pointer-events-none z-[99999] transition-opacity duration-200"
        style={{
          left: `${coords.x}px`,
          top: `${coords.y}px`,
          transform: 'translate(-50%, -125%)',
          opacity: coords.x > 0 && isHoveringText ? 1 : 0.25,
        }}
      >
        <div className="relative w-48 h-48 rounded-full border-4 border-[rgb(122,24,35)] bg-white/98 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-3 text-center backdrop-blur-md">
          {/* Reflejo de cristal oftálmico */}
          <div 
            className="absolute inset-0 pointer-events-none rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 45%, rgba(122,24,35,0.06) 100%)',
            }}
          />

          {/* Cruz central oftálmica tenue */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[rgb(122,24,35)] -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[rgb(122,24,35)] -translate-y-1/2"></div>
          </div>

          {/* Contenido ampliado */}
          <div className="relative z-10 overflow-hidden max-h-32 flex items-center justify-center">
            {isHoveringText && magnifiedText ? (
              <p 
                className="font-bold text-[#0F172A] leading-tight select-none"
                style={{
                  fontSize: `${zoomLevel * 10.5}px`,
                  textShadow: '0 1px 2px rgba(0,0,0,0.05)',
                }}
              >
                {magnifiedText}
              </p>
            ) : (
              <div className="space-y-1 text-gray-400">
                <Eye className="w-5 h-5 mx-auto text-[rgb(122,24,35)] opacity-60 animate-pulse" />
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-2">
                  {t.hoverHint}
                </p>
              </div>
            )}
          </div>

          {/* Badge inferior del Lente */}
          <div className="absolute bottom-2 inset-x-0 mx-auto w-fit z-20 px-2 py-0.5 rounded-full bg-[rgb(122,24,35)] text-white text-[9px] font-bold tracking-widest uppercase shadow-xs">
            ÓPTICAS POPULAR · {zoomLevel.toFixed(1)}x
          </div>
        </div>
      </div>

      {/* Dock de Control de Accesibilidad Flotante (Inferior Izquierda) */}
      <motion.aside
        id="magnifier-hud"
        role="region"
        aria-label="Panel de control de lupa oftálmica"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="fixed bottom-5 left-4 sm:left-6 z-[99990] bg-white/95 backdrop-blur-md rounded-2xl border-2 border-[rgb(122,24,35)] shadow-2xl p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3 text-[#15171C]"
      >
        <div className="flex items-center gap-2 pl-1 pr-1.5 sm:pr-2 border-r border-gray-200">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[rgb(122,24,35)] text-white flex items-center justify-center shadow-xs animate-pulse">
            <ZoomIn className="w-4 h-4" />
          </div>
          <div className="hidden sm:block text-left">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-[rgb(122,24,35)]">
              {t.zoomTitle} {zoomLevel.toFixed(1)}x
            </div>
            <div className="text-[9.5px] text-gray-500 font-medium">
              {t.exitEsc}
            </div>
          </div>
        </div>

        {/* Controles de Nivel de Aumento */}
        <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setZoomLevel((prev) => Math.max(1.4, Number((prev - 0.3).toFixed(1))))}
            aria-label={t.decreaseZoom}
            className="w-7 h-7 rounded-lg bg-white hover:bg-gray-200 flex items-center justify-center text-gray-700 font-bold active:scale-95 shadow-2xs transition-all cursor-pointer"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <span className="text-[11px] font-extrabold text-[rgb(122,24,35)] px-1.5 min-w-[36px] text-center">
            {zoomLevel.toFixed(1)}x
          </span>
          <button
            type="button"
            onClick={() => setZoomLevel((prev) => Math.min(2.8, Number((prev + 0.3).toFixed(1))))}
            aria-label={t.increaseZoom}
            className="w-7 h-7 rounded-lg bg-white hover:bg-gray-200 flex items-center justify-center text-gray-700 font-bold active:scale-95 shadow-2xs transition-all cursor-pointer"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Botón de Cierre / Desactivar Lupa */}
        <button
          type="button"
          onClick={() => onToggle(false)}
          className="h-8 px-2.5 sm:px-3 rounded-xl bg-[rgb(122,24,35)] text-white hover:bg-[rgb(142,28,41)] font-bold text-[11px] flex items-center gap-1 shadow-xs active:scale-95 transition-all cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{lang === 'es' ? 'Cerrar Lupa' : 'Close Lens'}</span>
        </button>
      </motion.aside>

      {/* Modal de Lectura Móvil (para pantallas táctiles) */}
      <AnimatePresence>
        {mobileModalText && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="md:hidden fixed inset-x-3 bottom-24 z-[99995] bg-white rounded-2xl border-2 border-[rgb(122,24,35)] shadow-2xl p-5"
          >
            <div className="flex items-center justify-between pb-2 border-b border-gray-100 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[rgb(122,24,35)] flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5" />
                {lang === 'es' ? 'Lectura Aumentada (Ópticas Popular)' : 'Magnified Reading (Opticas Popular)'}
              </span>
              <button
                onClick={() => setMobileModalText(null)}
                className="w-7 h-7 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[18px] font-bold text-[#0F172A] leading-relaxed">
              {mobileModalText}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
