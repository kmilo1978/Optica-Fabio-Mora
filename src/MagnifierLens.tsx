import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, ZoomOut, X } from 'lucide-react';
import { Language } from './translations';

interface MagnifierLensProps {
  active: boolean;
  onToggle: (state: boolean) => void;
  lang: Language;
}

export default function MagnifierLens({ active, onToggle, lang }: MagnifierLensProps) {
  const isEn = lang === 'en';

  // Activar clase en html para aumentar escala y legibilidad de textos
  useEffect(() => {
    if (active) {
      document.documentElement.classList.add('reading-zoom-mode');
    } else {
      document.documentElement.classList.remove('reading-zoom-mode');
    }
    return () => {
      document.documentElement.classList.remove('reading-zoom-mode');
    };
  }, [active]);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && active) {
        onToggle(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [active, onToggle]);

  return (
    <>
      {/* Estilos inyectados para el modo lectura aumentada */}
      <style>{`
        html.reading-zoom-mode {
          font-size: 110%;
        }
        html.reading-zoom-mode p,
        html.reading-zoom-mode li,
        html.reading-zoom-mode .pro-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        html.reading-zoom-mode p:hover,
        html.reading-zoom-mode li:hover {
          transform: scale(1.025);
          transform-origin: left center;
          color: #111317;
        }
      `}</style>

      {/* Notificación flotante discreta en esquina inferior */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-5 right-5 z-[999] bg-[#14161B]/95 backdrop-blur-md text-white py-2 px-3.5 rounded-full shadow-xl border border-white/15 flex items-center gap-2.5 text-[12px]"
          >
            <div className="w-6 h-6 rounded-full bg-[rgb(122,24,35)] flex items-center justify-center text-white shrink-0">
              <ZoomIn className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium text-gray-200">
              {isEn ? 'Magnifier Mode: +15% text zoom on hover' : 'Modo Lupa: +15% texto aumentado al pasar'}
            </span>
            <button
              type="button"
              onClick={() => onToggle(false)}
              className="ml-1 text-[11px] font-bold text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full transition-colors cursor-pointer"
              title="Cerrar (Esc)"
            >
              {isEn ? 'Exit (Esc)' : 'Salir (Esc)'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
