import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { KidrillLogo } from './KidrillLogo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  language?: Language;
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  language = 'en',
  onOpenInquiry,
}) => {
  const t = translations[language];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'companies', label: t.nav.companies },
    { id: 'business', label: t.nav.business },
    { id: 'products', label: t.nav.products },
    { id: 'projects', label: t.nav.projects },
    { id: 'markets', label: t.nav.markets },
    { id: 'sustainability', label: t.nav.sustainability },
    { id: 'news', label: t.nav.news },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* Luminous White Header with Black Text & Elegant Bordeaux Insignia */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3.5 shadow-xs transition-all text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 sm:gap-8">
            {/* Zone 1: Brand Wordmark & Geometric 'K' Insignia */}
            <button
              onClick={() => {
                onNavigate('home');
                setIsMobileMenuOpen(false);
              }}
              className="group flex items-center gap-3 text-left shrink-0 cursor-pointer focus:outline-none"
              aria-label="Kidrill Group Home"
            >
              <KidrillLogo
                variant="dark"
                showWordmark={true}
                showTagline={false}
                size="md"
              />
            </button>

            {/* Zone 2: Clean single-line text navigation links */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-7 text-xs 2xl:text-sm font-medium tracking-wide">
              {navItems.map((item) => {
                const isActive = currentView === item.id || (item.id === 'companies' && currentView === 'penang-facility');
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`whitespace-nowrap shrink-0 transition-colors py-1 relative cursor-pointer ${
                      isActive
                        ? 'text-slate-950 font-semibold'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#C8102E]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Executive Primary Action */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              {/* Primary Action Button */}
              <button
                onClick={onOpenInquiry}
                className="group hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-xs bg-slate-950 text-white hover:bg-[#C8102E] border border-transparent"
              >
                <span>{t.nav.inquireNow}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-white transition-colors" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 rounded transition-colors text-slate-900 hover:bg-slate-100"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Clean White & Black) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 xl:hidden bg-white text-slate-900 pt-24 px-6 pb-10 flex flex-col justify-between overflow-y-auto border-b border-slate-200 shadow-xl">
          <nav className="space-y-4">
            <button
              onClick={() => {
                onNavigate('home');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-lg font-serif-corp tracking-wide text-slate-950 font-semibold border-b border-slate-100"
            >
              {t.nav.home}
            </button>
            {navItems.map((item) => {
              const isItemActive = currentView === item.id || (item.id === 'companies' && currentView === 'penang-facility');
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 text-lg font-serif-corp tracking-wide border-b border-slate-100 ${
                    isItemActive ? 'text-[#C8102E] font-semibold' : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-slate-200 space-y-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase bg-slate-950 text-white hover:bg-[#C8102E] rounded shadow-xs"
            >
              {t.nav.inquireNow}
            </button>

            <div className="text-center text-xs text-slate-500 font-mono-num space-y-1">
              <div>Phone: +62 822 64973015</div>
              <div>Email: total@datmv.com</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
