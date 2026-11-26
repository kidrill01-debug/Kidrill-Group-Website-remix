import React from 'react';
import { Language, ProductItem } from '../types';
import { translations } from '../data/translations';
import { productsData } from '../data/products';
import { newsArticles } from '../data/news';
import { GlobalPresenceMap } from '../components/GlobalPresenceMap';
import { RealImage } from '../components/RealImage';
import heroMaritimeImage from '../assets/images/regenerated_image_1792657885994.png';
import kidrillFacilityImage from '../assets/images/regenerated_image_1792997135184.png';
import aboutUsPakuwonImage from '../assets/images/about_us_pakuwon.png';
import commodityTradeImage from '../assets/images/commodity_trade.png';
import thunderMarkVietnamImage from '../assets/images/regenerated_image_1793775136612.png';
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Ship,
  Layers,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Flame,
  Wheat,
  Fish,
  Compass,
  Package
} from 'lucide-react';

interface HomeViewProps {
  language: Language;
  onNavigate: (view: string) => void;
  onOpenInquiry: (commodity?: string) => void;
  onReadArticle: (articleId: string) => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  language,
  onNavigate,
  onOpenInquiry,
  onReadArticle,
  onSelectProduct,
}) => {
  const t = translations[language];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. BRIGHT, CINEMATIC DAYTIME HERO SECTION (With Real Photograph) */}
      <section className="relative pt-24 pb-16 sm:pb-24 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8 sm:pt-12">
            {/* Left Hero Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif-corp font-normal tracking-tight text-slate-950 leading-[1.08]">
                <span className="block">Global Resources</span>
                <span className="block text-slate-900 mt-1 sm:mt-2">Trusted Trade</span>
              </h1>

              {/* Supporting Editorial Prose */}
              <p className="text-base sm:text-lg text-slate-600 font-light max-w-2xl lg:max-w-3xl leading-relaxed">
                {t.hero.subheadline}
              </p>

              {/* High-Intent Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('business')}
                  className="px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-stone-900 text-white hover:bg-[#C8102E] transition-all rounded shadow-sm flex items-center gap-2.5 cursor-pointer group"
                >
                  <span>{t.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-white text-slate-800 border border-slate-300 hover:border-[#C8102E] hover:bg-slate-50 transition-all rounded cursor-pointer"
                >
                  {t.hero.secondaryCta}
                </button>
              </div>

              {/* Operational Subtitle markers */}
              <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 font-mono-num">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
                  PT PMA Kidrill Metal Mining
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
                  KIDRILL Malaysia
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
                  Thunder Mark Vietnam Co., Ltd.
                </span>
              </div>
            </div>

            {/* Right Hero Real Commercial Ship Photograph (5 cols) */}
            <div className="lg:col-span-5">
              {/* Header content above photo */}
              <div className="mb-3 flex items-center text-xs font-mono-num px-0.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono-num uppercase tracking-wider font-semibold bg-white text-slate-900 rounded border border-slate-200 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                  GLOBAL MARITIME CORRIDOR
                </span>
              </div>

              <div className="relative group">
                <RealImage
                  src={heroMaritimeImage}
                  fallbackSrc="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
                  alt="Kidrill Group Maritime Trade - Bulk Carrier and Container Fleet"
                  aspectRatio="16/9"
                  className="rounded-2xl shadow-xl border border-slate-200"
                />
              </div>
            </div>
          </div>

          {/* Factual Institutional Metrics Strip (Bright Card Strip) */}
          <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs space-y-1">
              <div className="text-xs uppercase tracking-widest text-slate-500 font-mono-num font-semibold">
                {t.hero.stat1Label}
              </div>
              <div className="text-3xl font-serif-corp font-medium text-slate-950">
                {t.hero.stat1Val}
              </div>
              <div className="text-xs text-slate-600 font-light">
                {t.hero.stat1Sub}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs space-y-1">
              <div className="text-xs uppercase tracking-widest text-slate-500 font-mono-num font-semibold">
                {t.hero.stat2Label}
              </div>
              <div className="text-3xl font-serif-corp font-medium text-slate-950">
                {t.hero.stat2Val}
              </div>
              <div className="text-xs text-slate-600 font-light">
                {t.hero.stat2Sub}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs space-y-1">
              <div className="text-xs uppercase tracking-widest text-slate-500 font-mono-num font-semibold">
                {t.hero.stat3Label}
              </div>
              <div className="text-3xl font-serif-corp font-medium text-slate-950">
                {t.hero.stat3Val}
              </div>
              <div className="text-xs text-slate-600 font-light">
                {t.hero.stat3Sub}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GLOBAL PRESENCE INTERACTIVE MAP (Crisp Light Theme) */}
      <GlobalPresenceMap language={language} onOpenInquiry={onOpenInquiry} />

      {/* 3. BUSINESS AREAS WITH REAL COMMERCIAL PHOTOGRAPHY */}
      <section className="py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col 2xl:flex-row 2xl:items-end justify-between gap-4 2xl:gap-6 mb-16">
            <div>
              <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] mb-2 font-semibold">
                {t.businessOverview.tag}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif-corp font-normal tracking-tight text-slate-950 leading-tight sm:whitespace-nowrap">
                {t.businessOverview.title}
              </h2>
            </div>
            <p className="max-w-3xl 2xl:max-w-sm text-sm text-slate-600 leading-relaxed font-light">
              {t.businessOverview.subtitle}
            </p>
          </div>

          {/* 4 Large Editorial Cards with Real Photographs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Sector 1: Minerals & Metals */}
            <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Real Photograph */}
                <div className="w-full relative overflow-hidden">
                  <RealImage
                    src={commodityTradeImage}
                    fallbackSrc={commodityTradeImage}
                    alt="PT PMA Kidrill Metal Mining - Mineral Commodities & Energy Resources"
                    aspectRatio="16/9"
                  />
                </div>

                <div className="p-8 sm:p-10">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 text-xs font-mono-num">
                    <span className="text-slate-600 font-medium">KIDRILL METAL MINING · PT PMA Kidrill Metal Mining</span>
                  </div>

                  <h3 className="text-2xl font-serif-corp font-medium text-slate-950 group-hover:text-[#C8102E] transition-colors">
                    {t.businessOverview.sector1.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-light">
                    {t.businessOverview.sector1.desc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <span className="text-[11px] font-mono-num uppercase tracking-wider text-slate-400 block mb-2.5 font-semibold">
                      Key Commodities Handled
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {t.businessOverview.sector1.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 sm:px-10 pb-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono-num">
                  Origin: Indonesia &amp; Regional
                </span>
              </div>
            </div>

            {/* Sector 2: Food & Agriculture */}
            <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Real Photograph */}
                <div className="w-full relative overflow-hidden">
                  <RealImage
                    src={thunderMarkVietnamImage}
                    fallbackSrc="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80"
                    alt="Food & Agriculture - Thunder Mark Vietnam Agricultural Products"
                    aspectRatio="16/9"
                  />
                </div>

                <div className="p-8 sm:p-10">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 text-xs font-mono-num">
                    <span className="text-slate-500">Thunder Mark Vietnam Co., Ltd.</span>
                  </div>

                  <h3 className="text-2xl font-serif-corp font-medium text-slate-950 group-hover:text-[#C8102E] transition-colors">
                    {t.businessOverview.sector2.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-light">
                    {t.businessOverview.sector2.desc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <span className="text-[11px] font-mono-num uppercase tracking-wider text-slate-400 block mb-2.5 font-semibold">
                      Key Commodities Handled
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {t.businessOverview.sector2.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 sm:px-10 pb-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono-num">
                  Origin: Vietnam (HCMC Hub)
                </span>
              </div>
            </div>

            {/* Sector 3: Mineral Processing & Smelter (KIDRILL Penang, Malaysia) */}
            <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Real Photograph */}
                <div className="w-full relative overflow-hidden">
                  <RealImage
                    src={kidrillFacilityImage}
                    fallbackSrc="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
                    alt="KIDRILL Mineral Processing & Smelter Facility - Penang, Malaysia"
                    aspectRatio="16/9"
                  />
                </div>

                <div className="p-8 sm:p-10">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 text-xs font-mono-num">
                    <span className="text-slate-600 font-medium">KIDRILL (Penang, Malaysia) · Mineral Processing &amp; Smelter</span>
                  </div>

                  <h3 className="text-2xl font-serif-corp font-medium text-slate-950 group-hover:text-[#C8102E] transition-colors">
                    {t.businessOverview.sector3.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-light">
                    {t.businessOverview.sector3.desc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <span className="text-[11px] font-mono-num uppercase tracking-wider text-slate-400 block mb-2.5 font-semibold">
                      Key Industrial Capabilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {t.businessOverview.sector3.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 sm:px-10 pb-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono-num">
                  Facility: Penang, Malaysia
                </span>
              </div>
            </div>

            {/* Sector 4: International Trading */}
            <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Real Photograph */}
                <div className="w-full relative overflow-hidden">
                  <RealImage
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                    fallbackSrc="https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80"
                    alt="Kidrill Group Headquarters - Global Commercial Tower"
                    aspectRatio="16/9"
                  />
                </div>

                <div className="p-8 sm:p-10">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 text-xs font-mono-num">
                    <span className="text-slate-500">Kidrill Group Governance</span>
                  </div>

                  <h3 className="text-2xl font-serif-corp font-medium text-slate-950 group-hover:text-[#C8102E] transition-colors">
                    {t.businessOverview.sector4.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-light">
                    {t.businessOverview.sector4.desc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <span className="text-[11px] font-mono-num uppercase tracking-wider text-slate-400 block mb-2.5 font-semibold">
                      Core Trade Capabilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {t.businessOverview.sector4.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 sm:px-10 pb-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono-num">
                  Governance: Institutional B2B
                </span>
              </div>
            </div>
          </div>

          {/* Featured Sourcing Callout for Prospective Suppliers */}
          <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-[11px] font-mono-num uppercase tracking-[0.2em] text-[#C8102E] font-semibold">
                COMMERCIAL SOURCING &amp; SUPPLIER PARTNERSHIPS
              </div>
              <h3 className="text-xl sm:text-2xl font-serif-corp font-medium text-slate-950">
                Our Sourcing Requirements: Copper Ore
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                KIDRILL Group is seeking reliable suppliers and strategic sourcing partners for copper ore to support its mineral processing and trading activities.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  onNavigate('business');
                  setTimeout(() => {
                    document.getElementById('sourcing-requirements')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#C8102E] text-white hover:bg-slate-900 rounded transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Review Sourcing Criteria</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THREE CORE MINERAL & METAL PRODUCTS ATTRIBUTION */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] mb-2 font-semibold">
                COMPANY &amp; PRODUCT ATTRIBUTION
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif-corp font-normal tracking-tight text-slate-950">
                Core Mineral &amp; Metal Portfolios
              </h2>
              <p className="mt-2 text-sm text-slate-600 font-light max-w-2xl">
                Dedicated product portfolios attributed to <strong className="font-medium text-slate-900">KIDRILL</strong> (Penang, Malaysia · Mineral Processing &amp; Smelter) and <strong className="font-medium text-slate-900">KIDRILL METAL MINING</strong> (PT PMA Kidrill Metal Mining · Indonesia).
              </p>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-900 hover:text-[#C8102E] transition-colors shrink-0"
            >
              <span>View Full Catalogue</span>
              <ArrowRight className="w-4 h-4 text-[#C8102E]" />
            </button>
          </div>

          {/* Two Distinct Company Groups */}
          <div className="space-y-12">
            {/* GROUP 1: KIDRILL (Penang, Malaysia) · Mineral Processing & Smelter */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono-num font-bold text-[#C8102E] uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
                    <span>COMPANY 1 · KIDRILL (PENANG, MALAYSIA)</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif-corp font-medium text-slate-950">
                    Mineral Processing &amp; Smelter Products
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light">
                    Penang Port &amp; Industrial Corridor, Malaysia · Sourced, processed, and produced at our Penang metallurgical facility.
                  </p>
                </div>
                <span className="self-start sm:self-auto text-xs font-mono-num font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded border border-slate-200/70">
                  2 Product Categories
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {productsData.slice(0, 2).map((product) => (
                  <div
                    key={product.id}
                    onClick={() => onSelectProduct(product)}
                    className="group bg-slate-50/60 border border-slate-200 rounded-xl overflow-hidden hover:shadow-md hover:border-[#C8102E]/40 transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-full relative overflow-hidden">
                        <RealImage
                          src={product.realImageUrl}
                          fallbackSrc={product.fallbackImageUrl}
                          alt={product.titleKey}
                          aspectRatio="16/9"
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-[11px] font-mono-num uppercase tracking-wider text-[#C8102E] font-semibold mb-1">
                          KIDRILL · Penang, Malaysia
                        </div>
                        <h4 className="text-lg font-serif-corp font-semibold text-slate-950 group-hover:text-[#C8102E] transition-colors">
                          {product.titleKey}
                        </h4>
                        <p className="mt-2 text-xs text-slate-600 line-clamp-2 font-light leading-relaxed">
                          {product.descriptionKey}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-[#C8102E] font-semibold">
                        <span className="text-slate-500 font-mono-num text-[11px] font-normal">{product.portOfLoading.split('/')[0]}</span>
                        <div className="flex items-center gap-1">
                          <span>View Specs &amp; RFQ</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GROUP 2: KIDRILL METAL MINING · PT PMA Kidrill Metal Mining (Indonesia) */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono-num font-bold text-amber-800 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-amber-600" />
                    <span>COMPANY 2 · KIDRILL METAL MINING</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif-corp font-medium text-slate-950">
                    Mineral Commodities &amp; Energy Resources
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light">
                    PT PMA Kidrill Metal Mining · 23rd Floor Pakuwon Centre, Surabaya, East Java, Indonesia · Indonesian mineral commodities, energy resources and regional trade coordination.
                  </p>
                </div>
                <span className="self-start sm:self-auto text-xs font-mono-num font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded border border-slate-200/70">
                  Exclusive Category
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {productsData.slice(2, 3).map((product) => (
                  <div
                    key={product.id}
                    onClick={() => onSelectProduct(product)}
                    className="group bg-slate-50/60 border border-slate-200 rounded-xl overflow-hidden hover:shadow-md hover:border-amber-600/40 transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-full relative overflow-hidden">
                        <RealImage
                          src={product.realImageUrl}
                          fallbackSrc={product.fallbackImageUrl}
                          alt={product.titleKey}
                          aspectRatio="16/9"
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-[11px] font-mono-num uppercase tracking-wider text-amber-800 font-semibold mb-1">
                          KIDRILL METAL MINING · PT PMA Kidrill Metal Mining
                        </div>
                        <h4 className="text-lg font-serif-corp font-semibold text-slate-950 group-hover:text-[#C8102E] transition-colors">
                          {product.titleKey}
                        </h4>
                        <p className="mt-2 text-xs text-slate-600 line-clamp-2 font-light leading-relaxed">
                          {product.descriptionKey}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-[#C8102E] font-semibold">
                        <span className="text-slate-500 font-mono-num text-[11px] font-normal">{product.portOfLoading.split('/')[0]}</span>
                        <div className="flex items-center gap-1">
                          <span>View Specs &amp; RFQ</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 6. SUSTAINABILITY COMMITMENT (Luminous Executive Light Section) */}
      <section className="py-24 bg-slate-50 text-slate-900 border-y border-slate-200 relative overflow-hidden">
        {/* Subtle grid pattern for corporate texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#c8102e_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] bg-[#C8102E]/5 border border-[#C8102E]/20 px-3.5 py-1.5 rounded-full mb-6 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
            <span>{t.sustainability.tag}</span>
          </div>

          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif-corp text-slate-950 italic font-normal leading-relaxed">
            "{t.sustainability.quote}"
          </blockquote>

          <p className="mt-6 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            {t.sustainability.desc}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('sustainability')}
              className="px-7 py-3 text-xs font-semibold uppercase tracking-wider bg-slate-950 text-white hover:bg-[#C8102E] rounded transition-colors shadow-xs cursor-pointer"
            >
              Review Sustainability Principles
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-7 py-3 text-xs font-semibold tracking-wider uppercase bg-white text-slate-800 border border-slate-300 hover:border-[#C8102E] hover:bg-slate-100 rounded transition-colors cursor-pointer"
            >
              Corporate Philosophy
            </button>
          </div>
        </div>
      </section>

      {/* 7. LATEST NEWS & MARKET INSIGHTS */}
      <section className="py-20 sm:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] mb-2 font-semibold">
                {t.news.tag}
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif-corp font-normal tracking-tight text-slate-950">
                {t.news.title}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('news')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-900 hover:text-[#C8102E] transition-colors"
            >
              <span>View All Insights</span>
              <ArrowRight className="w-4 h-4 text-[#C8102E]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {newsArticles.slice(0, 2).map((article) => {
              const title = article.titleEn;
              const excerpt = article.excerptEn;
              return (
                <div
                  key={article.id}
                  onClick={() => onReadArticle(article.id)}
                  className="group bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 sm:p-10 lg:p-11 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between hover:border-[#C8102E]/40"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono-num text-slate-500 mb-5 pb-3.5 border-b border-slate-200">
                      <span className="text-[#C8102E] font-semibold tracking-wide">{article.category}</span>
                      <span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded text-[11px] font-medium">
                        {t.news.sampleBadge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-[26px] lg:text-[28px] font-serif-corp font-medium text-slate-950 group-hover:text-[#C8102E] transition-colors leading-snug">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm sm:text-base text-slate-600 font-light leading-relaxed line-clamp-3 sm:line-clamp-4">
                      {excerpt}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm font-mono-num text-slate-500">
                    <span>{article.date} · {article.readTime}</span>
                    <span className="text-slate-900 font-semibold group-hover:translate-x-1 group-hover:text-[#C8102E] transition-all inline-flex items-center gap-1.5">
                      {t.news.readArticle}
                      <ArrowRight className="w-4 h-4 text-[#C8102E]" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. EXECUTIVE BILATERAL TRADE CALL TO ACTION (Luminous Executive Light Theme) */}
      <section className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C8102E]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] bg-[#C8102E]/5 border border-[#C8102E]/20 px-3.5 py-1.5 rounded font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
            <span>B2B COMMODITY PARTNERSHIP · DIRECT TRADE DESK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-corp font-normal tracking-tight text-slate-950 leading-tight">
            {t.contact.title}
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            {t.contact.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry()}
              className="px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-slate-950 text-white hover:bg-[#C8102E] rounded transition-all shadow-md flex items-center gap-2.5 cursor-pointer font-sans-corp"
            >
              <span>{t.contact.fields.submit}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-white text-slate-800 border border-slate-300 hover:border-[#C8102E] hover:bg-slate-100 rounded transition-all cursor-pointer font-sans-corp"
            >
              Corporate Office Directory
            </button>
          </div>

          {/* Quick entity tags */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-mono-num">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
              <span>Surabaya Hub: PT PMA Kidrill Metal Mining</span>
            </span>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
              <span>Penang Facility: KIDRILL (Malaysia)</span>
            </span>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
              <span>HCMC Hub: Thunder Mark Vietnam Co., Ltd.</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
