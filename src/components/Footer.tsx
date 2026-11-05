import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { KidrillLogo } from './KidrillLogo';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  language: Language;
  onNavigate: (view: string) => void;
  onOpenInquiry: (commodity?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigate,
  onOpenInquiry,
}) => {
  const t = translations[language];

  return (
    <footer className="bg-slate-50 text-slate-800 border-t border-slate-200">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none cursor-pointer"
            >
              <KidrillLogo
                variant="dark"
                showWordmark={true}
                showTagline={true}
                size="lg"
              />
            </button>

            <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            <div className="pt-2">
              <div className="text-xs uppercase tracking-widest text-slate-400 font-mono-num mb-2 font-semibold">
                Commercial Communication
              </div>
              <div className="space-y-1.5 text-xs text-slate-700 font-mono-num">
                <a
                  href="mailto:total@datmv.com"
                  className="flex items-center gap-2 hover:text-[#C8102E] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>total@datmv.com</span>
                </a>
                <a
                  href="tel:+6282264973015"
                  className="flex items-center gap-2 hover:text-[#C8102E] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>+62 822 64973015</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Business Sectors (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono-num uppercase tracking-[0.2em] text-slate-900 font-semibold">
              {t.footer.businessAreas}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#C8102E] transition-colors text-left cursor-pointer"
                >
                  Minerals &amp; Metals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#C8102E] transition-colors text-left cursor-pointer"
                >
                  Food &amp; Agriculture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#C8102E] transition-colors text-left cursor-pointer"
                >
                  Seafood Export
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('business')}
                  className="hover:text-[#C8102E] transition-colors text-left cursor-pointer"
                >
                  International Trading
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-[#C8102E] transition-colors text-left cursor-pointer"
                >
                  Supply Pipelines
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono-num uppercase tracking-[0.2em] text-slate-900 font-semibold">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#C8102E] transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('companies')}
                  className="hover:text-[#C8102E] transition-colors cursor-pointer"
                >
                  {t.nav.companies}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('penang-facility')}
                  className="hover:text-[#C8102E] transition-colors cursor-pointer font-medium text-slate-800"
                >
                  KIDRILL (Malaysia)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('markets')}
                  className="hover:text-[#C8102E] transition-colors cursor-pointer"
                >
                  {t.nav.markets}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sustainability')}
                  className="hover:text-[#C8102E] transition-colors cursor-pointer"
                >
                  {t.nav.sustainability}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('news')}
                  className="hover:text-[#C8102E] transition-colors cursor-pointer"
                >
                  {t.nav.news}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#C8102E] transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Registered Companies & Addresses (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono-num uppercase tracking-[0.2em] text-slate-900 font-semibold">
              {t.footer.locationsTitle}
            </h4>

            {/* Office 1: Indonesia */}
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl text-xs space-y-1 shadow-xs">
              <div className="font-semibold text-slate-900 flex items-center justify-between">
                <span>KIDRILL METAL MINING</span>
                <span className="text-[10px] text-[#C8102E] font-mono-num uppercase font-semibold">Indonesia</span>
              </div>
              <p className="text-slate-500 font-light leading-relaxed font-mono-num text-[11px]">
                PT PMA Kidrill Metal Mining · 23rd FLOOR. PAKUWON CENTRE, JL EMBONG MALANG KEDUNGDORO, TEGALSARI KOTA SURABAYA JAWA TIMUR
              </p>
            </div>

            {/* Office 2: Vietnam */}
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl text-xs space-y-1 shadow-xs">
              <div className="font-semibold text-slate-900 flex items-center justify-between">
                <span>Thunder Mark Vietnam Co., Ltd.</span>
                <span className="text-[10px] text-[#C8102E] font-mono-num uppercase font-semibold">Vietnam</span>
              </div>
              <p className="text-slate-500 font-light leading-relaxed font-mono-num text-[11px]">
                Golden King Tower, Nguyen Luong Bang St., Tan Hung Ward, HCM City, Vietnam
              </p>
            </div>

            {/* Business 3: Malaysia - KIDRILL */}
            <div
              onClick={() => onNavigate('penang-facility')}
              className="p-3.5 bg-white border border-slate-200 rounded-xl text-xs space-y-1 shadow-xs cursor-pointer hover:border-[#C8102E] transition-all group"
            >
              <div className="font-semibold text-slate-900 flex items-center justify-between">
                <span className="group-hover:text-[#C8102E] transition-colors font-bold tracking-wide">KIDRILL</span>
                <span className="text-[10px] text-[#C8102E] font-mono-num uppercase font-semibold">Penang, Malaysia</span>
              </div>
              <p className="text-slate-500 font-light leading-relaxed font-mono-num text-[11px]">
                Penang Port &amp; Industrial Corridor, Penang, Malaysia · Mineral Processing &amp; Smelter
              </p>
            </div>
          </div>
        </div>

        {/* B2B Disclaimer and Governance Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-500">
          <p className="max-w-2xl font-light">
            {t.footer.confidentiality}
          </p>
          <div className="flex items-center gap-2 text-slate-700 shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
            <span>Incoterms 2020 / Institutional Trade Governance</span>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-white py-4 border-t border-slate-200 text-center text-xs text-slate-500 font-mono-num">
        {t.footer.copyright} · Kidrill Group
      </div>
    </footer>
  );
};
