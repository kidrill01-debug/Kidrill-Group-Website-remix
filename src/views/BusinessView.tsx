import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { RealImage } from '../components/RealImage';
import kidrillFacilityImage from '../assets/images/regenerated_image_1792997135184.png';
import pakuwonImage from '../assets/images/about_us_pakuwon.png';
import commodityTradeImage from '../assets/images/commodity_trade.png';
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
  Building,
  Boxes,
  FileCheck2,
  AlertCircle
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
  const sReq = translations[language].sourcingRequirements;

  return (
    <div className="w-full pt-28 pb-20 bg-[#FAF9F6]">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] mb-3 font-semibold">
          {t.tag}
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-corp font-normal tracking-tight text-slate-950 leading-[1.12]">
          {t.title.includes('Processing & Logistics') ? (
            <>
              <span className="block">{t.title.replace('Processing & Logistics', '').trim()}</span>
              <span className="block">Processing &amp; Logistics</span>
            </>
          ) : (
            t.title
          )}
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
                  <span>SECTOR 01 · MINERAL COMMODITIES &amp; ENERGY RESOURCES</span>
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
                  onClick={() => onOpenInquiry('Mineral Commodities & Energy Resources')}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800 rounded transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Inquire Mineral Commodities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between">
              <RealImage
                src={commodityTradeImage}
                fallbackSrc={commodityTradeImage}
                alt="KIDRILL METAL MINING - Indonesian Mineral Commodities & Energy Resources"
                aspectRatio="16/9"
                caption="Indonesian Dedicated Mineral Terminals · Bulk Maritime Sourcing Operations (PT PMA Kidrill Metal Mining)"
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
                  KIDRILL is our specialized mineral processing and smelting facility located in Penang, Malaysia, dedicated to metallurgical conversion, copper cathode production, concentrates and industrial non-ferrous alloys.
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
                caption="KIDRILL Metallurgical Facility · Penang Port & Industrial Corridor, Malaysia"
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
                  <span>SECTOR 02 · FOOD &amp; AGRICULTURAL SOURCING</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif-corp font-medium text-slate-950 mt-2">
                  {t.sector2.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-light mt-3">
                  {t.sector2.desc}
                </p>
                <div className="pt-2 text-xs font-mono-num text-slate-500 font-medium">
                  Thunder Mark Vietnam Co., Ltd. (Ho Chi Minh City, Vietnam)
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onOpenInquiry('Food & Agriculture')}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white hover:bg-[#C8102E] rounded transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Inquire Food &amp; Agriculture</span>
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
                caption="Mekong Delta Agricultural Produce · High-Grade Export Commodities"
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

        {/* SECTOR 3: Maritime Logistics & Trade Services */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 p-8 sm:p-12 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-num text-stone-900 uppercase tracking-widest font-bold">
                  <Compass className="w-4 h-4 text-[#C8102E]" />
                  <span>SECTOR 03 · MARITIME LOGISTICS &amp; TRADE SERVICES</span>
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
                caption="Institutional B2B Trade Execution & Maritime Logistics Coordination"
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

        {/* ========================================================================= */}
        {/* NEW DEDICATED SECTION: OUR SOURCING REQUIREMENTS                          */}
        {/* ========================================================================= */}
        <div id="sourcing-requirements" className="bg-white border-2 border-slate-300 rounded-3xl p-8 sm:p-14 shadow-sm scroll-mt-24">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] bg-[#C8102E]/5 border border-[#C8102E]/20 px-3 py-1.5 rounded font-semibold mb-3">
              <Boxes className="w-3.5 h-3.5" />
              <span>{sReq.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-corp font-normal tracking-tight text-slate-950 leading-tight">
              {sReq.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              {sReq.subtitle}
            </p>
          </div>

          {/* Single Confirmed Sourcing Requirement Card: Copper Ore */}
          <div className="max-w-4xl mb-10">
            {sReq.categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-[#FAF9F6] border-2 border-slate-300 rounded-2xl p-6 sm:p-10 flex flex-col justify-between hover:border-[#C8102E]/60 hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-200 text-xs font-mono-num gap-2">
                    <span className="font-bold uppercase tracking-wider text-[#C8102E] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
                      <span>Confirmed Sourcing Requirement</span>
                    </span>
                    <span className="text-slate-500 font-semibold uppercase">
                      Active Supplier Due Diligence
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif-corp font-medium text-slate-950">
                      {cat.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-700 font-light leading-relaxed">
                      {cat.focus}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200/80 text-xs">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                      <span className="font-semibold text-slate-900 block font-mono-num uppercase text-[11px] text-[#C8102E]">
                        Supplier Qualification Criteria:
                      </span>
                      <p className="text-slate-600 font-light leading-relaxed">
                        {cat.criteria}
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                      <span className="font-semibold text-slate-900 block font-mono-num uppercase text-[11px] text-slate-700">
                        Intended Channel &amp; Application:
                      </span>
                      <p className="text-slate-600 font-light leading-relaxed">
                        {cat.channel}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-xs font-mono-num text-slate-500">
                    Bilateral Supply &amp; Strategic Processing Offtake
                  </span>
                  <button
                    onClick={() => onOpenInquiry('Supplier Sourcing Proposal - Copper Ore')}
                    className="px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-slate-950 text-white hover:bg-[#C8102E] rounded transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs font-sans-corp"
                  >
                    <span>Submit Copper Ore Supply Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sourcing Commercial Notice */}
          <div className="p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-3.5 max-w-3xl">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs font-mono-num font-semibold uppercase text-slate-800 tracking-wider">
                  Commercial Sourcing Notice
                </span>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  {sReq.notice}
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenInquiry('Supplier Sourcing Proposal - Copper Ore')}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#C8102E] text-white hover:bg-slate-950 rounded transition-colors shrink-0 inline-flex items-center gap-2 cursor-pointer shadow-xs font-sans-corp"
            >
              <span>{sReq.cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
