import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { GlobalPresenceMap } from '../components/GlobalPresenceMap';
import {
  Ship,
  Anchor,
  Globe2,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  MapPin
} from 'lucide-react';

interface MarketsViewProps {
  language: Language;
  onOpenInquiry: (commodity?: string) => void;
}

export const MarketsView: React.FC<MarketsViewProps> = ({
  language,
  onOpenInquiry,
}) => {
  const t = translations[language].markets;

  const keyMarkets = [
    {
      id: 'korea',
      nameEn: 'South Korea',
      ports: 'Busan, Incheon, Gwangyang, Pohang',
      focusEn: 'Thermal Coal for Power Generation, Mineral Commodities & Mining Resources (KIDRILL METAL MINING), Copper Cathodes & Industrial Metals (KIDRILL), Vietnamese Export Rice, Processed Foods.',
      type: 'Industrial & Consumer Bilateral'
    },
    {
      id: 'china',
      nameEn: 'China',
      ports: 'Shanghai, Ningbo, Guangzhou, Tianjin',
      focusEn: 'Bulk Mineral Commodities & Mining Resources (KIDRILL METAL MINING), Smelted Copper & Non-Ferrous Alloys (KIDRILL), Energy Commodities, Agricultural Grain.',
      type: 'Heavy Industrial Volume'
    },
    {
      id: 'southeast-asia',
      nameEn: 'Southeast Asia (ASEAN)',
      ports: 'Penang Port, Tanjung Perak (Surabaya), Cat Lai (HCMC), Port Klang',
      focusEn: 'Mineral Processing & Smelter Hub in Penang (KIDRILL), Mining Resources in Surabaya (KIDRILL METAL MINING), Agri-Food Trade from Vietnam.',
      type: 'Regional Origin & Trade Hubs'
    },
    {
      id: 'europe',
      nameEn: 'Europe (EU)',
      ports: 'Rotterdam, Antwerp, Hamburg',
      focusEn: 'Clean Refined Base Metals & Copper Cathodes (KIDRILL), Certified Vietnamese Export Rice, Processed Food Specialties.',
      type: 'Quality & Traceability Standard'
    },
    {
      id: 'usa',
      nameEn: 'United States',
      ports: 'Los Angeles, Long Beach, New York, Houston',
      focusEn: 'Commercial Food Service Ingredients, Processed Food Specialties, Bulk Agricultural Supply Contracts.',
      type: 'Strategic Consumer Distribution'
    }
  ];

  return (
    <div className="w-full pt-28 pb-20 bg-[#FAF9F6]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-slate-500 mb-3">
          {t.tag}
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-corp font-normal tracking-tight text-slate-900 leading-[1.12]">
          {t.title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Embedded Global Presence Map */}
      <div className="mb-20">
        <GlobalPresenceMap language={language} onOpenInquiry={onOpenInquiry} />
      </div>

      {/* Detailed Market Profiles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif-corp font-medium text-slate-900">
            {t.corridorHeadline}
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl font-light leading-relaxed">
            {t.corridorCopy}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyMarkets.map((market) => (
            <div
              key={market.id}
              className="bg-white border border-stone-200/90 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-100 text-xs font-mono-num">
                  <span className="text-[#C8102E] font-semibold uppercase">
                    {market.type}
                  </span>
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                </div>

                <h3 className="text-xl font-serif-corp font-medium text-slate-900">
                  {market.nameEn}
                </h3>

                <div className="mt-2 text-xs text-slate-500 font-mono-num">
                  Gateways: {market.ports}
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  {market.focusEn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono-num">
                  CIF / FOB Standard
                </span>
                <button
                  onClick={() =>
                    onOpenInquiry(market.nameEn)
                  }
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase text-slate-900 hover:text-[#C8102E] transition-colors cursor-pointer"
                >
                  <span>Inquire Corridor</span>
                  <ArrowRight className="w-3 h-3 text-[#C8102E]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Executive Corridor Sourcing Panel (Luminous Light Theme) */}
        <div className="mt-16 p-8 sm:p-12 bg-slate-50 rounded-2xl border border-slate-200 text-slate-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="text-xs font-mono-num uppercase tracking-widest text-[#C8102E] font-semibold block mb-1">
              CUSTOM TRADE ROUTE STRUCTURING
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-corp font-medium text-slate-950">
              Inquire Bespoke Maritime Corridors &amp; Charter Schedules
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-xl font-light leading-relaxed">
              Structure dedicated breakbulk, Supramax, or reefer container shipments to your target discharge ports.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry('Global Maritime Trade Corridor')}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-slate-950 text-white hover:bg-[#C8102E] rounded transition-colors shadow-xs shrink-0 cursor-pointer"
          >
            Request Freight &amp; Port Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
