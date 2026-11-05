import React from 'react';
import { Language, ProductItem } from '../types';
import { translations } from '../data/translations';
import { RealImage } from '../components/RealImage';
import kidrillFacilityImage from '../assets/images/regenerated_image_1792997135184.png';
import pakuwonImage from '../assets/images/about_us_pakuwon.png';
import indonesianCoalImage from '../assets/images/indonesian_coal.png';
import agriProduceImage from '../assets/images/regenerated_image_1793343930929.png';
import {
  Flame,
  Wheat,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Ship,
  Layers,
  Building
} from 'lucide-react';

interface BusinessViewProps {
  language: Language;
  onNavigate: (view: string) => void;
  onOpenInquiry: (commodity?: string) => void;
}

export const BusinessView: React.FC<BusinessViewProps> = ({
  language,
  onNavigate,
  onOpenInquiry,
}) => {
  const t = translations[language].businessOverview;

  return (
    <div className="w-full pt-28 pb-20 bg-[#FAF9F6]">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] mb-3 font-semibold">
          {t.tag}
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-corp font-normal tracking-tight text-slate-950 max-w-4xl leading-[1.12]">
          {t.title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* SECTOR 1: Minerals & Metals */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 p-8 sm:p-12 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-num text-amber-800 uppercase tracking-widest font-bold">
                  <Flame className="w-4 h-4" />
                  <span>SECTOR 01 · MINERAL COMMODITIES &amp; MINING RESOURCES</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif-corp font-medium text-slate-950 mt-2">
                  {t.sector1.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-light mt-3">
                  {t.sector1.desc}
                </p>
                <div className="pt-2 text-xs font-mono-num text-slate-500 font-medium">
                  KIDRILL METAL MINING · PT PMA Kidrill Metal Mining (Surabaya, Indonesia)
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onOpenInquiry('Mineral Commodities & Mining Resources')}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800 rounded transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Inquire Mineral Commodities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between">
              <RealImage
                src={indonesianCoalImage}
                fallbackSrc={indonesianCoalImage}
                alt="KIDRILL METAL MINING - Indonesian Mineral Commodities & Mining Resources"
                aspectRatio="16/9"
                badge="KIDRILL METAL MINING · INDONESIA"
                caption="Indonesian Dedicated Mineral Terminals - Bulk Maritime Operations (PT PMA Kidrill Metal Mining)"
                className="rounded-xl shadow-xs mb-6"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.sector1.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white border border-slate-200/80 rounded-lg flex items-center justify-between text-xs"
                  >
                    <span className="text-slate-800 font-medium">{item}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* INDUSTRIAL PILLAR: KIDRILL - Mineral Processing & Smelter (Penang, Malaysia) */}
        <div className="bg-white border-2 border-slate-300 hover:border-[#C8102E]/60 rounded-2xl overflow-hidden shadow-sm transition-all relative">
          <div className="hidden sm:block absolute top-4 right-6 bg-[#C8102E] text-white text-[10px] font-mono-num uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-2xs z-10">
            Mineral Processing &amp; Smelter Facility
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 p-8 sm:p-12 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-num text-[#C8102E] uppercase tracking-widest font-bold">
                  <Layers className="w-4 h-4 text-[#C8102E]" />
                  <span>INDUSTRIAL PILLAR · PENANG, MALAYSIA</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif-corp font-medium text-slate-950 mt-2">
                  Mineral Processing &amp; Smelter
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-light mt-3">
                  KIDRILL is our mineral processing and smelting facility located in Penang, Malaysia. It is an important part of our group's industrial business.
                </p>
                <div className="pt-2 text-xs font-mono-num text-slate-500 font-medium">
                  KIDRILL · Penang Port &amp; Industrial Corridor, Malaysia
                </div>
              </div>
              <div className="pt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('penang-facility')}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#C8102E] text-white hover:bg-slate-900 rounded transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Explore KIDRILL (Penang Facility)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenInquiry('KIDRILL - Mineral Processing & Smelter')}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-white text-slate-800 border border-slate-300 hover:border-[#C8102E] rounded transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Industrial Inquiry</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between">
              <RealImage
                src={kidrillFacilityImage}
                fallbackSrc="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
                alt="KIDRILL Industrial Metallurgical Facility - Mineral Processing & Smelter"
                aspectRatio="16/9"
                badge="KIDRILL · PENANG, MALAYSIA"
                className="rounded-xl shadow-xs mb-6"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-white border border-slate-200/80 rounded-lg flex items-center justify-between text-xs">
                  <span className="text-slate-800 font-medium">Copper (Cathode &amp; Concentrates)</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C8102E]" />
                </div>
                <div className="p-3 bg-white border border-slate-200/80 rounded-lg flex items-center justify-between text-xs">
                  <span className="text-slate-800 font-medium">Industrial Metals &amp; Non-Ferrous Alloys</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C8102E]" />
                </div>
                <div className="p-3 bg-white border border-slate-200/80 rounded-lg flex items-center justify-between text-xs">
                  <span className="text-slate-800 font-medium">Mineral Processing &amp; Smelter (Penang)</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C8102E]" />
                </div>
                <div className="p-3 bg-white border border-slate-200/80 rounded-lg flex items-center justify-between text-xs">
                  <span className="text-slate-800 font-medium">Penang Port Maritime Logistics</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C8102E]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTOR 2: Food & Agriculture */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 p-8 sm:p-12 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-num text-emerald-800 uppercase tracking-widest font-bold">
                  <Wheat className="w-4 h-4" />
                  <span>SECTOR 02 · FOOD &amp; AGRICULTURE</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif-corp font-medium text-slate-950 mt-2">
                  {t.sector2.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-light mt-3">
                  {t.sector2.desc}
                </p>
                <div className="pt-2 text-xs font-mono-num text-slate-400">
                  Thunder Mark Vietnam Co., Ltd. (Ho Chi Minh City)
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onOpenInquiry('Food & Agriculture')}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800 rounded transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Inquire Agri Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between">
              <RealImage
                src={agriProduceImage}
                fallbackSrc="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80"
                alt="Food & Agriculture - Thunder Mark Vietnam Agricultural Products"
                aspectRatio="16/9"
                badge="THUNDER MARK VIETNAM"
                className="rounded-xl shadow-xs mb-6"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.sector2.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white border border-slate-200/80 rounded-lg flex items-center justify-between text-xs"
                  >
                    <span className="text-slate-800 font-medium">{item}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* SECTOR 3: International Trading Solutions */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 p-8 sm:p-12 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-num text-stone-900 uppercase tracking-widest font-bold">
                  <Compass className="w-4 h-4 text-[#C8102E]" />
                  <span>SECTOR 03 · CROSS-BORDER COMMERCE</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif-corp font-medium text-slate-950 mt-2">
                  {t.sector4.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-light mt-3">
                  {t.sector4.desc}
                </p>
                <div className="pt-2 text-xs font-mono-num text-slate-400">
                  Integrated Kidrill Group Governance
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onOpenInquiry('International Trading Solutions')}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white hover:bg-[#C8102E] rounded transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Inquire Trade Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between">
              <RealImage
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                fallbackSrc="https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80"
                alt="Kidrill Group Corporate Tower - Cross Border Trading Solutions"
                aspectRatio="16/9"
                badge="KIDRILL GOVERNANCE"
                className="rounded-xl shadow-xs mb-6"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.sector4.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white border border-slate-200/80 rounded-lg flex items-center justify-between text-xs"
                  >
                    <span className="text-slate-800 font-medium">{item}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C8102E]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
