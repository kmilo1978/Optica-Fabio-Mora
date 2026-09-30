import React from 'react';
import { 
  Star, 
  ArrowUpRight, 
  ShieldCheck, 
  ChevronRight, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Phone
} from 'lucide-react';
import { TRANSLATIONS, Language } from './translations';

export type NavigationView = 'landing' | 'home' | 'consulta' | 'calificar' | 'test-visual' | 'contacto' | 'tecnologia-cristales' | 'testimonios-page';

export interface FooterProps {
  lang: Language;
  onNavigate?: (view: NavigationView, hash?: string) => void;
}

export default function Footer({ lang, onNavigate }: FooterProps) {
  const t = TRANSLATIONS[lang];

  const handleLinkClick = (e: React.MouseEvent, view: NavigationView, hash: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view, hash);
    } else {
      window.location.hash = hash;
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="w-full bg-[#0c0e12] text-white pt-14 pb-24 md:pb-14 border-t border-white/10 relative overflow-hidden">
      {/* Línea decorativa superior con degradado rojo vino */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[rgb(122,24,35)] to-transparent opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {/* Columna 1: Identidad Clínica & Aval */}
          <div>
            <a 
              href="#inicio" 
              onClick={(e) => handleLinkClick(e, 'landing', '#inicio')} 
              className="inline-block mb-4 group cursor-pointer"
            >
              <div className="bg-white px-3.5 py-2 rounded-xl border border-white/20 shadow-md inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img 
                  src="/images/logo-opticas-popular.png" 
                  alt="Logo Oficial Ópticas Popular" 
                  className="h-9 w-auto object-contain" 
                />
              </div>
            </a>
            <div className="leading-tight mb-2">
              <span className="text-[14px] font-bold text-white block">{t.footer.doctorName}</span>
              <span className="text-[10.5px] font-bold text-rose-300 uppercase tracking-wider">{t.footer.doctorTitle}</span>
            </div>
            <p className="text-[13.5px] leading-relaxed text-gray-300">
              {t.footer.description}
            </p>

            {/* Insignia de Google Reviews */}
            <a
              href="https://share.google/BUvr9vBhe3MZzBL6Y"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white transition-all group"
            >
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[12px] font-semibold text-gray-200 group-hover:text-white transition-colors">
                {t.footer.googleRatingText}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Incorporación Profesional */}
            <div className="flex items-center gap-2 text-[11.5px] text-gray-400 mt-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.footer.professionalLicense}</span>
            </div>
          </div>
          
          {/* Columna 2: Navegación Rápida con la Nueva Función Destacada */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-4 rounded-full bg-[rgb(122,24,35)]"></div>
              <h4 className="text-[13px] font-bold text-white uppercase tracking-wider">{t.footer.navTitle}</h4>
            </div>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <a 
                  href="#inicio" 
                  onClick={(e) => handleLinkClick(e, 'landing', '#inicio')}
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                  <span>{t.footer.navHome}</span>
                </a>
              </li>
              <li>
                <a 
                  href="#servicios" 
                  onClick={(e) => handleLinkClick(e, 'landing', '#servicios')}
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                  <span>{t.footer.navServices}</span>
                </a>
              </li>
              <li>
                <a 
                  href="#edades" 
                  onClick={(e) => handleLinkClick(e, 'landing', '#edades')}
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                  <span>{t.footer.navAges}</span>
                </a>
              </li>
              <li>
                <a 
                  href="#doctor" 
                  onClick={(e) => handleLinkClick(e, 'landing', '#doctor')}
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                  <span>{t.footer.navDoctor}</span>
                </a>
              </li>
              <li>
                <a 
                  href="#por-que-elegirnos" 
                  onClick={(e) => handleLinkClick(e, 'landing', '#por-que-elegirnos')}
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                  <span>{t.footer.navWhyUs}</span>
                </a>
              </li>
              <li>
                <a 
                  href="#testimonios" 
                  onClick={(e) => handleLinkClick(e, 'landing', '#testimonios')}
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                  <span>{t.footer.navTestimonials}</span>
                </a>
              </li>
              <li>
                <a 
                  href="#testimonios-google" 
                  onClick={(e) => handleLinkClick(e, 'testimonios-page', '#testimonios-google')}
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                  <span>{lang === 'es' ? 'Muro Reseñas Google' : 'Google Reviews Wall'}</span>
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => handleLinkClick(e, 'landing', '#faq')}
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                  <span>{t.footer.navFaq}</span>
                </a>
              </li>

              {/* Formulario de Consulta WhatsApp */}
              <li>
                <a
                  href="#consulta"
                  onClick={(e) => handleLinkClick(e, 'consulta', '#consulta')}
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                  <span>{t.footer.navInquiry}</span>
                </a>
              </li>

              {/* Test Visual Online Interactivo */}
              <li>
                <a
                  href="#test-visual"
                  onClick={(e) => handleLinkClick(e, 'test-visual', '#test-visual')}
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                  <span>{lang === 'es' ? 'Test Visual Online' : 'Online Vision Test'}</span>
                </a>
              </li>

              {/* Calificar Experiencia */}
              <li>
                <a
                  href="#calificar"
                  onClick={(e) => handleLinkClick(e, 'calificar', '#calificar')}
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                  <span>{t.footer.navRate}</span>
                </a>
              </li>

              {/* Ubicación & Contacto Dedicado */}
              <li>
                <a
                  href="#contacto"
                  onClick={(e) => handleLinkClick(e, 'contacto', '#contacto')}
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
                  <span>{lang === 'es' ? 'Ubicación, Waze y Horarios' : 'Location, Waze & Hours'}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios Especializados */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-4 rounded-full bg-[rgb(122,24,35)]"></div>
              <h4 className="text-[13px] font-bold text-white uppercase tracking-wider">{t.footer.servicesTitle}</h4>
            </div>
            <ul className="space-y-2.5 text-[13.5px]">
              <li className="text-gray-300 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{t.footer.srvExam}</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{t.footer.srvRetina}</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{t.footer.srvPressure}</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{t.footer.srvLenses}</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{t.footer.srvContacts}</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{t.footer.srvPediatric}</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Ubicación, Horarios y Contacto Directo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-4 rounded-full bg-[rgb(122,24,35)]"></div>
              <h4 className="text-[13px] font-bold text-white uppercase tracking-wider">{t.footer.locationTitle}</h4>
            </div>
            
            <div className="space-y-4 text-[13px]">
              <div className="flex items-start gap-2.5 text-gray-300">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-1" />
                <div>
                  <strong className="text-white block text-[13.5px]">{t.footer.address}</strong>
                  <span className="text-gray-400 text-[12.5px] leading-snug block">{t.footer.addressSub}</span>
                  <div className="flex items-center gap-2.5 mt-2">
                    <a
                      href="https://maps.google.com/?q=Ópticas+Popular+Plaza+Higuerones+San+Rafael+Abajo+Desamparados"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11.5px] font-bold text-rose-300 hover:text-white transition-colors"
                    >
                      <span>Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-gray-600">·</span>
                    <a
                      href="https://waze.com/ul?q=Plaza%20Higuerones%20Desamparados"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11.5px] font-bold text-rose-300 hover:text-white transition-colors"
                    >
                      <span>Waze</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-gray-300">
                <Clock className="w-4 h-4 text-rose-400 shrink-0 mt-1" />
                <div>
                  <strong className="text-white block text-[13.5px]">{t.footer.hoursTitle}</strong>
                  <span className="text-gray-300">{t.footer.hoursDays}: <strong className="text-white">{t.footer.hoursTime}</strong></span>
                  <span className="text-[12px] text-gray-400 block mt-0.5">{t.footer.hoursSunday}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-2">
                <a
                  href="https://wa.me/50625150002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[rgb(122,24,35)] hover:bg-[rgb(142,28,41)] text-white font-bold text-[12.5px] transition-all shadow-sm hover:shadow active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 text-white !text-white" />
                  <span className="text-white !text-white">{t.footer.whatsappLabel}: 2515-0002</span>
                </a>
                <a
                  href="tel:+50625150002"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white text-[12px] font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-rose-300" />
                  <span>{t.footer.phoneLabel}: (+506) 2515-0002</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Subfooter inferior */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-gray-400">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {t.footer.clinicName} · {t.footer.doctorName}. {t.footer.allRights}</span>
          </div>
          <div className="flex items-center gap-5 text-[12px]">
            <a 
              href="#contacto" 
              onClick={(e) => handleLinkClick(e, 'contacto', '#contacto')}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.privacy}
            </a>
            <span className="text-gray-700">·</span>
            <a 
              href="#contacto" 
              onClick={(e) => handleLinkClick(e, 'contacto', '#contacto')}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.terms}
            </a>
            <span className="text-gray-700">·</span>
            <a href="https://web.localrank.com.co/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rose-300 transition-colors">
              {t.footer.developedBy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
