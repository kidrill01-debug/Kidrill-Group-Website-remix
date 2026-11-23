import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { RealImage } from '../components/RealImage';
import corporatePresenceImage from '../assets/images/about_us_pakuwon.png';
import {
  ShieldCheck,
  Compass,
  Building,
  Target,
  Award,
  Globe2,
  ArrowRight,
  Handshake,
  TrendingUp,
  Scale
} from 'lucide-react';

interface AboutViewProps {
  language: Language;
  onNavigate: (view: string) => void;
  onOpenInquiry: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  language,
  onNavigate,
  onOpenInquiry,
}) => {
  const t = translations[language].about;

  return (
    <div className="w-full pt-28 pb-20 bg-[#FAF9F6]">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] mb-3 font-semibold">
          {t.tag}
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-corp font-normal tracking-tight text-slate-900 max-w-4xl leading-[1.12]">
          {t.headline}
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
          Kidrill Group is an independent international commercial group operating across Indonesia, Malaysia and Vietnam, committed to sound corporate governance, institutional discipline and durable international partnerships.
        </p>
      </div>

      {/* Story & Institutional Model Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white border border-stone-200/90 rounded-2xl p-8 sm:p-14 shadow-sm items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono-num uppercase tracking-widest text-[#C8102E] font-semibold">
              CORPORATE IDENTITY &amp; POSITIONING
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-corp font-medium text-slate-900 leading-snug">
              {t.storyTitle}
            </h2>

            <RealImage
              src={corporatePresenceImage}
              fallbackSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Kidrill Group Headquarters - Pakuwon Centre, Surabaya"
              aspectRatio="16/9"
              caption="Pakuwon Centre, Surabaya · Corporate headquarters and regional operational base"
              className="rounded-xl shadow-xs"
            />

            <div className="pt-4 border-t border-stone-200">
              <div className="space-y-3 text-xs font-mono-num text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C8102E] shrink-0" />
                  <span>Cross-Border Sourcing &amp; Offtake</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-[#C8102E] shrink-0" />
                  <span>Triple Operating Hubs: Surabaya, Penang &amp; HCMC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#C8102E] shrink-0" />
                  <span>Strict Third-Party Assay &amp; Compliance</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-700 text-sm sm:text-base font-light leading-relaxed lg:pl-6 lg:border-l lg:border-slate-100">
            <p className="text-slate-900 font-normal leading-relaxed text-base sm:text-lg">
              {t.storyP1}
            </p>
            <p>{t.storyP2}</p>
            <p>{t.storyP3}</p>
          </div>
        </div>
      </div>

      {/* Vision & Mission Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white text-slate-900 rounded-xl p-8 sm:p-12 border border-slate-200 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                <span className="text-xs font-mono-num uppercase tracking-widest text-[#C8102E] font-semibold">
                  LONG-TERM HORIZON
                </span>
                <Target className="w-6 h-6 text-[#C8102E]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-corp font-medium text-slate-950">
                {t.visionTitle}
              </h3>
              <p className="mt-4 text-base text-slate-600 font-light leading-relaxed">
                "{t.visionText}"
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500 font-mono-num">
              Orientation: Global Scale &amp; Reliability
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white text-slate-900 rounded-xl p-8 sm:p-12 border border-slate-200 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                <span className="text-xs font-mono-num uppercase tracking-widest text-[#C8102E] font-semibold">
                  CORE COMMITMENT
                </span>
                <Compass className="w-6 h-6 text-[#C8102E]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-corp font-medium text-slate-950">
                {t.missionTitle}
              </h3>
              <p className="mt-4 text-base text-slate-600 font-light leading-relaxed">
                "{t.missionText}"
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500 font-mono-num">
              Orientation: Transparent Bilateral Trade
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-12">
          <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-slate-500 mb-2">
            GOVERNANCE &amp; ETHOS
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-corp font-normal tracking-tight text-slate-900">
            {t.valuesTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.values.map((val, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200/90 rounded-xl p-6 sm:p-8 hover:shadow-md transition-shadow"
            >
              <div className="text-xs font-mono-num text-slate-400 mb-3">
                0{idx + 1}
              </div>
              <h4 className="text-xl font-serif-corp font-medium text-slate-900 mb-2">
                {val.name}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Bar (Luminous Light Theme) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm text-slate-900">
          <div>
            <span className="text-[10px] font-mono-num uppercase tracking-widest text-[#C8102E] font-semibold block mb-1">
              OPERATIONAL REACH
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-corp font-medium text-slate-950">
              Explore Our Operating Companies
            </h3>
            <p className="text-sm text-slate-600 mt-2 max-w-xl font-light leading-relaxed">
              Review registered offices, operational jurisdictions, and core trading portfolios across Indonesia, Malaysia, and Vietnam.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('companies')}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-slate-950 text-white hover:bg-[#C8102E] rounded transition-colors shadow-xs cursor-pointer"
            >
              View Companies
            </button>
            <button
              onClick={onOpenInquiry}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-white text-slate-800 border border-slate-300 hover:border-[#C8102E] hover:bg-slate-100 rounded transition-colors cursor-pointer"
            >
              Send Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
