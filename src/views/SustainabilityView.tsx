import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import {
  ShieldCheck,
  Leaf,
  Globe2,
  Handshake,
  FileCheck2,
  Users2,
  Scale,
  ArrowRight
} from 'lucide-react';

interface SustainabilityViewProps {
  language: Language;
  onOpenInquiry: () => void;
}

export const SustainabilityView: React.FC<SustainabilityViewProps> = ({
  language,
  onOpenInquiry,
}) => {
  const t = translations[language].sustainability;

  const icons = [
    <ShieldCheck className="w-5 h-5 text-[#C8102E]" />,
    <Leaf className="w-5 h-5 text-emerald-600" />,
    <FileCheck2 className="w-5 h-5 text-[#C8102E]" />,
    <Handshake className="w-5 h-5 text-amber-600" />,
    <Users2 className="w-5 h-5 text-stone-700" />,
    <Scale className="w-5 h-5 text-slate-700" />
  ];

  return (
    <div className="w-full pt-28 pb-20 bg-[#FAF9F6]">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] mb-3 font-semibold">
          {t.tag}
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-corp font-normal tracking-tight text-slate-900 max-w-4xl leading-[1.12]">
          {t.title}
        </h1>

        <div className="mt-8 p-6 sm:p-10 bg-white border border-stone-200/90 rounded-2xl max-w-4xl shadow-sm">
          <blockquote className="text-xl sm:text-2xl font-serif-corp text-slate-900 italic font-medium leading-relaxed">
            "{t.quote}"
          </blockquote>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            {t.desc}
          </p>
        </div>
      </div>

      {/* Six Pillars Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200/90 rounded-xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-100">
                  <span className="text-xs font-mono-num text-slate-400">
                    PILLAR 0{idx + 1}
                  </span>
                  <div className="p-2 bg-stone-50 rounded-lg border border-stone-200/60">
                    {icons[idx]}
                  </div>
                </div>

                <h3 className="text-xl font-serif-corp font-medium text-slate-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] font-mono-num text-slate-400">
                Institutional Due Diligence Standard
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Governance & Contact Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <h4 className="text-xl font-serif-corp font-medium text-slate-950">
              Supply Chain Compliance & Governance Inquiries
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Direct your compliance and traceability questions to our corporate governance desk.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-slate-950 text-white hover:bg-[#C8102E] rounded transition-colors shrink-0 cursor-pointer shadow-xs"
          >
            Inquire Governance Desk
          </button>
        </div>
      </div>
    </div>
  );
};
