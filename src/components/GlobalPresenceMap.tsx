import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Globe, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

interface GlobalPresenceMapProps {
  language: Language;
  onOpenInquiry?: (commodity?: string) => void;
}

interface HubInfo {
  id: string;
  nameEn: string;
  category: 'origin' | 'market';
  x: number;
  y: number;
  country: string;
  commoditiesEn: string[];
  roleEn: string;
  transitTime: string;
  status: string;
}

export const GlobalPresenceMap: React.FC<GlobalPresenceMapProps> = ({
  language,
  onOpenInquiry,
}) => {
  const t = translations[language];
  const [activeHubId, setActiveHubId] = useState<string>('indonesia');

  const hubs: HubInfo[] = [
    {
      id: 'indonesia',
      nameEn: 'Surabaya, Indonesia',
      category: 'origin',
      x: 77.5,
      y: 65,
      country: 'Indonesia',
      commoditiesEn: ['Mineral Commodities & Energy Resources', 'Commercial Sourcing Coordination'],
      roleEn: 'Operational Base: KIDRILL METAL MINING · PT PMA Kidrill Metal Mining (23rd Fl, Pakuwon Centre, Surabaya). Commercial origination and supplier coordination hub for Indonesian mineral commodities and energy resources.',
      transitTime: 'Origin Hub (Direct Port Berthing)',
      status: 'Primary Business Center'
    },
    {
      id: 'malaysia',
      nameEn: 'Penang, Malaysia (KIDRILL)',
      category: 'origin',
      x: 73.5,
      y: 56.5,
      country: 'Malaysia',
      commoditiesEn: ['Copper (Cathode & Concentrates)', 'Industrial Metals & Non-Ferrous Alloys', 'Mineral Processing & Smelter'],
      roleEn: 'Operating Base: KIDRILL (Penang Port & Industrial Corridor, Malaysia). Mineral processing and smelting facility producing copper cathodes, copper concentrates, industrial metals and non-ferrous alloys.',
      transitTime: 'Processing & Smelting Hub (Penang Port Corridor)',
      status: 'Mineral Processing & Smelter'
    },
    {
      id: 'vietnam',
      nameEn: 'Ho Chi Minh City, Vietnam',
      category: 'origin',
      x: 75.5,
      y: 53.5,
      country: 'Vietnam',
      commoditiesEn: ['Vietnamese Export Rice', 'Agricultural Products & Origin Commodities', 'Processed Food Products & Specialties'],
      roleEn: 'Operational Base: Thunder Mark Vietnam Co., Ltd. (Golding King Tower, HCMC). Export bridge for Vietnamese export rice, origin agricultural commodities and processed food products.',
      transitTime: 'Origin Hub (Deepwater Ports)',
      status: 'Primary Export Center'
    },
    {
      id: 'korea',
      nameEn: 'South Korea (Busan / Incheon)',
      category: 'market',
      x: 82.5,
      y: 37,
      country: 'South Korea',
      commoditiesEn: ['Thermal Coal for Utilities', 'Mineral Commodities & Industrial Metals', 'Vietnamese Export Rice', 'Agricultural Commodities'],
      roleEn: 'Major bilateral destination for thermal coal, mineral commodities and high-volume Vietnamese agricultural foodstuffs and processed food products.',
      transitTime: '5 – 8 Days (Sea Freight)',
      status: 'Key Bilateral Market'
    },
    {
      id: 'china',
      nameEn: 'China (East & South Ports)',
      category: 'market',
      x: 79,
      y: 42,
      country: 'China',
      commoditiesEn: ['Raw Minerals & Ores', 'Mineral Commodities', 'Agricultural Bulk Rice', 'Processed Seafood'],
      roleEn: 'High-volume off-taker for industrial minerals, energy commodities and Southeast Asian food staples via strategic sea lanes.',
      transitTime: '4 – 7 Days (Sea Freight)',
      status: 'High-Volume Corridor'
    },
    {
      id: 'europe',
      nameEn: 'Europe (Rotterdam / Antwerp)',
      category: 'market',
      x: 49.5,
      y: 30,
      country: 'European Union',
      commoditiesEn: ['Specialty Coffee (Robusta)', 'High-Grade Certified Seafood', 'Mined Mineral Commodities'],
      roleEn: 'Demanding destination for traceability-compliant agricultural products, certified sustainable marine proteins and strategic metals.',
      transitTime: '22 – 28 Days (Maritime Route)',
      status: 'Institutional Market'
    },
    {
      id: 'usa',
      nameEn: 'United States (Pacific / Atlantic)',
      category: 'market',
      x: 21,
      y: 36,
      country: 'United States',
      commoditiesEn: ['Processed Food & Rice', 'Premium Frozen Prawns & Seafood', 'Commercial Coffee Supply'],
      roleEn: 'Extensive food service distribution chains and industrial food manufacturers sourcing verified Vietnamese products through reliable B2B trade structures.',
      transitTime: '18 – 24 Days (Trans-Pacific)',
      status: 'Strategic Growth Corridor'
    },
    {
      id: 'southeast_asia',
      nameEn: 'Southeast Asia Regional Network',
      category: 'market',
      x: 73,
      y: 60,
      country: 'ASEAN Regional',
      commoditiesEn: ['Intra-ASEAN Commodity Arbitrage', 'Cross-Border Mineral Trading', 'Food Logistics'],
      roleEn: 'Cross-border trading network bridging origin sourcing and agricultural fields across ASEAN commercial hubs.',
      transitTime: '2 – 4 Days (Feeder Vessels)',
      status: 'Regional Backbone'
    }
  ];

  const activeHub = hubs.find((h) => h.id === activeHubId) || hubs[0];

  return (
    <div className="bg-slate-50 text-slate-900 py-16 sm:py-24 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono-num tracking-[0.25em] uppercase text-[#C8102E] bg-[#C8102E]/5 border border-[#C8102E]/20 px-3 py-1.5 rounded font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
            <span>{t.presence.title}</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="text-slate-600">SOUTHEAST ASIA &amp; GLOBAL HUBS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-corp font-normal tracking-tight text-slate-950 max-w-3xl leading-[1.15]">
            {t.presence.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl font-light leading-relaxed">
            {t.presence.subtitle}
          </p>
        </div>

        {/* Global Map Display with Crisp Luminous Light Theme and Corporate Crimson Red Corridors */}
        <div className="relative w-full rounded-2xl bg-white border border-slate-200 p-4 sm:p-8 overflow-hidden shadow-sm">
          {/* Subtle Latitude & Longitude Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#c8102e_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* World Map SVG Canvas */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] min-h-[320px] w-full">
            <svg
              viewBox="0 0 1000 480"
              className="w-full h-full select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="corridorGlowRed" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C8102E" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#C92A42" stopOpacity="1" />
                  <stop offset="100%" stopColor="#8A1425" stopOpacity="0.85" />
                </linearGradient>

                <linearGradient id="lightMapBg" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F8FAFC" />
                  <stop offset="100%" stopColor="#F1F5F9" />
                </linearGradient>
              </defs>

              {/* Map Canvas Background */}
              <rect width="1000" height="480" fill="url(#lightMapBg)" rx="10" stroke="#E2E8F0" strokeWidth="1" />

              {/* Continents (Refined Slate Tone against Crisp Maritime Canvas) */}
              {/* North America */}
              <path
                d="M120,90 Q180,70 260,80 Q290,130 270,190 Q220,230 170,180 Q130,140 120,90 Z"
                fill="#E2E8F0"
                stroke="#CBD5E1"
                strokeWidth="1"
              />
              {/* South America */}
              <path
                d="M260,250 Q310,270 300,350 Q260,430 240,410 Q220,330 260,250 Z"
                fill="#E2E8F0"
                stroke="#CBD5E1"
                strokeWidth="1"
              />
              {/* Europe */}
              <path
                d="M470,90 Q540,80 560,130 Q510,170 460,160 Q440,120 470,90 Z"
                fill="#E2E8F0"
                stroke="#CBD5E1"
                strokeWidth="1"
              />
              {/* Africa */}
              <path
                d="M470,180 Q550,190 560,280 Q520,380 470,360 Q440,260 470,180 Z"
                fill="#E2E8F0"
                stroke="#CBD5E1"
                strokeWidth="1"
              />
              {/* Asia & East Asia */}
              <path
                d="M570,70 Q750,60 880,100 Q860,200 780,220 Q700,230 630,190 Q570,140 570,70 Z"
                fill="#E2E8F0"
                stroke="#CBD5E1"
                strokeWidth="1"
              />
              {/* Southeast Asia (Indonesia & Vietnam highlighted with vibrant corporate crimson border) */}
              <path
                d="M710,230 Q770,240 790,290 Q740,330 700,310 Q690,270 710,230 Z"
                fill="#FEE2E2"
                stroke="#C8102E"
                strokeWidth="2"
              />
              {/* Australia */}
              <path
                d="M790,320 Q870,310 890,370 Q840,430 790,400 Q770,350 790,320 Z"
                fill="#E2E8F0"
                stroke="#CBD5E1"
                strokeWidth="1"
              />

              {/* Grid Lines */}
              <line x1="0" y1="270" x2="1000" y2="270" stroke="#E2E8F0" strokeDasharray="4 6" strokeWidth="1" />
              <line x1="750" y1="0" x2="750" y2="480" stroke="#E2E8F0" strokeDasharray="4 6" strokeWidth="1" />

              {/* Dynamic Trade Corridors connecting Indonesia, Malaysia & Vietnam to the world */}
              {/* SBY (Indonesia) to Penang (Malaysia) Ore Transit */}
              <path
                d="M775,312 Q750,290 735,271"
                stroke="#C8102E"
                strokeWidth={activeHubId === 'malaysia' ? '3.5' : '2.5'}
                strokeDasharray="4 3"
              />
              {/* Penang (Malaysia) to HCMC (Vietnam) */}
              <path
                d="M735,271 Q745,260 755,256"
                stroke="#C8102E"
                strokeWidth="2"
                strokeDasharray="4 3"
              />
              {/* SBY to Vietnam */}
              <path
                d="M775,312 Q760,280 755,256"
                stroke="#C8102E"
                strokeWidth="2"
                strokeDasharray="4 3"
              />
              {/* SBY/HCMC to South Korea */}
              <path
                d="M755,256 Q790,210 825,177"
                stroke="url(#corridorGlowRed)"
                strokeWidth={activeHubId === 'korea' ? '3.5' : '2'}
                strokeOpacity={activeHubId === 'korea' ? '1' : '0.7'}
              />
              {/* SBY/HCMC to China */}
              <path
                d="M755,256 Q765,225 790,201"
                stroke="url(#corridorGlowRed)"
                strokeWidth={activeHubId === 'china' ? '3.5' : '2'}
                strokeOpacity={activeHubId === 'china' ? '1' : '0.7'}
              />
              {/* HCMC to Europe */}
              <path
                d="M755,256 Q620,180 495,144"
                stroke="url(#corridorGlowRed)"
                strokeWidth={activeHubId === 'europe' ? '3.5' : '2'}
                strokeOpacity={activeHubId === 'europe' ? '1' : '0.7'}
              />
              {/* Trans-Pacific to United States */}
              <path
                d="M775,312 Q890,240 980,220"
                stroke="url(#corridorGlowRed)"
                strokeWidth={activeHubId === 'usa' ? '3.5' : '2'}
                strokeOpacity={activeHubId === 'usa' ? '1' : '0.7'}
              />
              <path
                d="M20,200 Q110,180 210,172"
                stroke="url(#corridorGlowRed)"
                strokeWidth={activeHubId === 'usa' ? '3.5' : '2'}
                strokeOpacity={activeHubId === 'usa' ? '1' : '0.7'}
              />

              {/* Render Interactive Hub Markers */}
              {hubs.map((hub) => {
                const px = (hub.x / 100) * 1000;
                const py = (hub.y / 100) * 480;
                const isSelected = hub.id === activeHubId;
                const isOrigin = hub.category === 'origin';

                return (
                  <g
                    key={hub.id}
                    className="cursor-pointer transition-all duration-300"
                    onClick={() => setActiveHubId(hub.id)}
                  >
                    {/* Pulsing ring for active selection */}
                    {(isSelected || isOrigin) && (
                      <circle
                        cx={px}
                        cy={py}
                        r={isSelected ? 16 : 10}
                        fill="#C8102E"
                        opacity={isSelected ? 0.25 : 0.15}
                      />
                    )}

                    {/* Outer Glow Ring */}
                    <circle
                      cx={px}
                      cy={py}
                      r={isSelected ? 9 : isOrigin ? 7 : 5}
                      fill={isOrigin ? '#FEE2E2' : '#FFFFFF'}
                      stroke={isSelected ? '#C8102E' : isOrigin ? '#C8102E' : '#64748B'}
                      strokeWidth={2}
                    />

                    {/* Center Core Dot */}
                    <circle
                      cx={px}
                      cy={py}
                      r={isSelected ? 4 : 2.5}
                      fill={isSelected ? '#C8102E' : isOrigin ? '#C8102E' : '#475569'}
                    />

                    {/* Crisp Text Label */}
                    <text
                      x={px + 12}
                      y={py + 4}
                      fill={isSelected ? '#C8102E' : '#1E293B'}
                      fontSize={isSelected ? '12' : '10'}
                      fontFamily="system-ui"
                      fontWeight={isSelected ? '700' : '600'}
                      className="pointer-events-none select-none"
                    >
                      {hub.country}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Visual Legend for Map Elements */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-600">
              <span className="font-semibold text-slate-700 font-mono-num uppercase tracking-wider text-[11px]">Map Legend:</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C8102E] ring-2 ring-[#C8102E]/20" />
                <span className="font-medium text-slate-800">Group Operational Hubs (3 Hubs)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400 ring-2 ring-slate-200" />
                <span>Destination Markets (5 Regions)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-0.5 bg-[#C8102E] inline-block" />
                <span>Active Commercial Corridors</span>
              </div>
            </div>

            <div className="text-[11px] font-mono-num text-slate-400">
              Click any hub or button below to inspect details
            </div>
          </div>

          {/* Map Controls / Grouped Hub Selectors */}
          <div className="mt-4 pt-4 border-t border-slate-200 space-y-3">
            {/* Group 1: Group Operational Hubs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <div className="text-[11px] font-mono-num uppercase tracking-wider text-[#C8102E] font-bold shrink-0 w-36 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                <span>Operational Hubs:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {hubs.filter(h => h.category === 'origin').map((hub) => {
                  const isSelected = hub.id === activeHubId;
                  return (
                    <button
                      key={hub.id}
                      onClick={() => setActiveHubId(hub.id)}
                      className={`px-3 py-1.5 text-xs font-medium rounded transition-all cursor-pointer flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-[#C8102E] text-white shadow-xs font-semibold'
                          : 'bg-[#C8102E]/10 text-[#C8102E] border border-[#C8102E]/30 hover:bg-[#C8102E]/20'
                      }`}
                    >
                      <MapPin className="w-3 h-3 text-current" />
                      <span>{hub.nameEn}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Group 2: Key Destination Markets & Corridors */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <div className="text-[11px] font-mono-num uppercase tracking-wider text-slate-500 font-semibold shrink-0 w-36 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>Destination Markets:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {hubs.filter(h => h.category === 'market').map((hub) => {
                  const isSelected = hub.id === activeHubId;
                  return (
                    <button
                      key={hub.id}
                      onClick={() => setActiveHubId(hub.id)}
                      className={`px-3 py-1.5 text-xs font-medium rounded transition-all cursor-pointer flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-slate-900 text-white shadow-xs font-semibold'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <span>{hub.nameEn}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Selected Hub Detail Intelligence Card (Bright Clean Executive Card) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm text-slate-900">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-num text-[#C8102E] tracking-wider uppercase mb-2 font-semibold">
                <span>{activeHub.status}</span>
                <span>·</span>
                <span>{activeHub.country}</span>
              </div>
              <h3 className="text-2xl font-serif-corp text-slate-950 font-medium">
                {activeHub.nameEn}
              </h3>
              <p className="mt-3 text-sm text-slate-600 font-light leading-relaxed">
                {activeHub.roleEn}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between lg:border-l lg:border-slate-100 lg:pl-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-3 font-mono-num">
                Primary Trade &amp; Sourced Commodities
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeHub.commoditiesEn.map(
                  (item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between text-xs"
                    >
                      <span className="text-slate-800 font-medium">{item}</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-light">
                Commercial contracts and export certificates available upon formal inquiry.
              </span>
              <button
                onClick={() =>
                  onOpenInquiry?.(activeHub.commoditiesEn[0])
                }
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-slate-950 text-white hover:bg-[#C8102E] rounded transition-colors shrink-0 flex items-center gap-2 cursor-pointer shadow-xs font-sans-corp"
              >
                <span>Inquire Corridor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
