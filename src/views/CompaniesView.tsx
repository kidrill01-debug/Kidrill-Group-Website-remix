import React, { useState } from 'react';
import { Language, ProductItem } from '../types';
import { translations } from '../data/translations';
import { productsData } from '../data/products';
import { RealImage } from '../components/RealImage';
import kidrillFacilityImage from '../assets/images/regenerated_image_1792997135184.png';
import pakuwonHeadquartersImage from '../assets/images/about_us_pakuwon.png';
import vietnamAgriImage from '../assets/images/regenerated_image_1793343930929.png';
import {
  Building2,
  MapPin,
  Globe2,
  Mail,
  Phone,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Ship,
  Layers,
  Package,
  FileText,
  ExternalLink,
  Sparkles,
  Workflow,
  ChevronRight
} from 'lucide-react';

interface CompaniesViewProps {
  language: Language;
  onNavigate: (view: string) => void;
  onOpenInquiry: (commodity?: string) => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const CompaniesView: React.FC<CompaniesViewProps> = ({
  language,
  onNavigate,
  onOpenInquiry,
  onSelectProduct,
}) => {
  const t = translations[language].twoCompanies;
  const [selectedCompany, setSelectedCompany] = useState<'all' | 'indonesia' | 'malaysia' | 'vietnam'>('all');

  const indonesiaProducts = productsData.filter((p) => p.companyId === 'indonesia');
  const malaysiaProducts = productsData.filter((p) => p.companyId === 'malaysia');
  const vietnamProducts = productsData.filter((p) => p.companyId === 'vietnam');

  return (
    <div className="w-full pt-28 pb-20 bg-[#FAF9F6]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] mb-3 font-semibold">
          {t.tag}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[52px] 2xl:text-6xl font-serif-corp font-normal tracking-tight text-slate-950 leading-[1.12]">
          {t.title}
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
          {t.subtitle}
        </p>

        {/* Company Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2 p-1.5 bg-stone-200/80 rounded-lg max-w-2xl">
          <button
            onClick={() => setSelectedCompany('all')}
            className={`px-3.5 py-2 text-xs font-medium rounded-md transition-all cursor-pointer ${
              selectedCompany === 'all'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Entities (03)
          </button>
          <button
            onClick={() => setSelectedCompany('indonesia')}
            className={`px-3.5 py-2 text-xs font-medium rounded-md transition-all cursor-pointer ${
              selectedCompany === 'indonesia'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            KIDRILL METAL MINING (Indonesia)
          </button>
          <button
            onClick={() => setSelectedCompany('malaysia')}
            className={`px-3.5 py-2 text-xs font-medium rounded-md transition-all cursor-pointer ${
              selectedCompany === 'malaysia'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            KIDRILL (Malaysia)
          </button>
          <button
            onClick={() => setSelectedCompany('vietnam')}
            className={`px-3.5 py-2 text-xs font-medium rounded-md transition-all cursor-pointer ${
              selectedCompany === 'vietnam'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Thunder Mark Vietnam
          </button>
        </div>
      </div>

      {/* Main Companies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ========================================================================= */}
        {/* COMPANY 01: PT PMA Kidrill Metal Mining (Surabaya, Indonesia) */}
        {/* ========================================================================= */}
        {(selectedCompany === 'all' || selectedCompany === 'indonesia') && (
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Top Corporate Overview Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200">
              {/* Left Column: Office Details */}
              <div className="lg:col-span-5 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono-num text-[#C8102E] uppercase tracking-widest mb-2 font-bold">
                    <span>COMPANY 01</span>
                    <span aria-hidden="true">·</span>
                    <span>SURABAYA, JAWA TIMUR, INDONESIA</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif-corp font-medium text-slate-950">
                    {t.company1.name}
                  </h2>
                  <p className="mt-1 text-xs font-mono-num text-slate-500 uppercase">
                    Legal Entity: PT PMA Kidrill Metal Mining · Surabaya, Indonesia
                  </p>

                  {/* Registered Address */}
                  <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-2">
                    <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
                      <span>Registered Corporate Headquarters:</span>
                    </div>
                    <p className="text-slate-600 font-light leading-relaxed pl-5">
                      23 RD FLOOR, PAKUWON CENTRE,
                      <br />
                      JL EMBONG MALANG KEDUNGDORO,
                      <br />
                      TEGALSARI, KOTA SURABAYA,
                      <br />
                      JAWA TIMUR, INDONESIA
                    </p>
                  </div>

                  <div className="mt-4 space-y-2 text-xs font-mono-num text-slate-600">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span>+62 822 64973015</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span>total@datmv.com</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onOpenInquiry('Minerals & Metals (Indonesia Hub)')}
                    className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white hover:bg-[#C8102E] rounded transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Contact Indonesia Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Real Photograph & Scope */}
              <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-10 space-y-6 lg:border-l lg:border-slate-200 flex flex-col justify-between">
                <div>
                  <RealImage
                    src={pakuwonHeadquartersImage}
                    fallbackSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                    alt="PT PMA Kidrill Metal Mining - Pakuwon Centre Headquarters, Surabaya"
                    caption="Pakuwon Centre, 23rd Floor, Surabaya · Corporate headquarters of PT PMA Kidrill Metal Mining"
                    aspectRatio="16/9"
                    className="rounded-xl shadow-xs mb-6"
                  />

                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-2 font-mono-num">
                    Core Business Lines
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-light">
                    {t.company1.business}
                  </p>

                  <div className="mt-4 p-4 bg-stone-100 border border-stone-200 rounded-lg">
                    <h4 className="text-xs font-bold text-[#C8102E] uppercase tracking-wider mb-1 font-mono-num">
                      Institutional Positioning & Strategic Role
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-800 font-light leading-relaxed">
                      {t.company1.role}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono-num uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                    Primary Export & Industrial Buyer Markets
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {t.company1.markets.map((market, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-white border border-slate-200 rounded text-xs flex items-center justify-between text-slate-800 font-medium"
                      >
                        <span>{market}</span>
                        <Ship className="w-3.5 h-3.5 text-[#C8102E]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dedicated Products Section for PT PMA Kidrill Metal Mining */}
            <div className="p-8 sm:p-12 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono-num text-[#C8102E] uppercase tracking-widest font-bold">
                    <Package className="w-4 h-4" />
                    <span>
                      Products Sourced &amp; Supplied by KIDRILL METAL MINING
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif-corp text-slate-900 font-medium mt-1">
                    Mineral Commodities &amp; Mining Resources
                  </h3>
                </div>
                <span className="text-xs text-slate-500 font-mono-num">
                  Exclusive Category · PT PMA Kidrill Metal Mining
                </span>
              </div>

              {/* Product Cards Grid with Real Photographs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {indonesiaProducts.map((product) => {
                  const title = product.titleKey;

                  return (
                    <div
                      key={product.id}
                      onClick={() => onSelectProduct(product)}
                      className="group bg-slate-50/70 border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#C8102E]/50 transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        {/* Real Photograph */}
                        <div className="w-full relative overflow-hidden">
                          <RealImage
                            src={product.realImageUrl}
                            fallbackSrc={product.fallbackImageUrl}
                            alt={title}
                            aspectRatio="4/3"
                          />
                        </div>

                        <div className="p-5">
                          <h4 className="text-base font-serif-corp font-semibold text-slate-900 group-hover:text-[#C8102E] transition-colors line-clamp-1">
                            {title}
                          </h4>
                          <p className="mt-2 text-xs text-slate-600 line-clamp-2 font-light leading-relaxed">
                            {product.descriptionKey}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-[#C8102E] font-semibold">
                          <span>View Specifications</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* COMPANY 02: KIDRILL (Penang, Malaysia) */}
        {/* ========================================================================= */}
        {(selectedCompany === 'all' || selectedCompany === 'malaysia') && (
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Top Corporate Overview Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200">
              {/* Left Column: Office & Facility Details */}
              <div className="lg:col-span-5 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono-num text-[#C8102E] uppercase tracking-widest mb-2 font-bold">
                    <span>COMPANY 02</span>
                    <span aria-hidden="true">·</span>
                    <span>PENANG, MALAYSIA</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif-corp font-normal tracking-tight text-slate-950">
                    KIDRILL
                  </h2>
                  <p className="mt-1 text-xs font-mono-num text-[#C8102E] uppercase font-semibold">
                    Mineral Processing &amp; Smelter
                  </p>

                  {/* Corporate Operating Location */}
                  <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-2">
                    <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
                      <span>Corporate Operating Location:</span>
                    </div>
                    <p className="text-slate-600 font-light leading-relaxed pl-5">
                      Penang Port &amp; Industrial Corridor,
                      <br />
                      Penang, Malaysia
                    </p>
                  </div>

                  <div className="mt-4 space-y-2 text-xs font-mono-num text-slate-600">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span>+62 822 64973015 (Group Commercial Desk)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span>total@datmv.com</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => onNavigate('penang-facility')}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white hover:bg-[#C8102E] rounded transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Explore KIDRILL (Malaysia)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenInquiry('KIDRILL - Mineral Processing & Smelter')}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-white text-slate-800 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 rounded transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Inquire with KIDRILL</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Real Photograph & Scope */}
              <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-10 space-y-6 lg:border-l lg:border-slate-200 flex flex-col justify-between">
                <div>
                  <RealImage
                    src={kidrillFacilityImage}
                    fallbackSrc="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80"
                    alt="KIDRILL - Mineral Processing & Smelter Facility in Penang Malaysia"
                    caption="Industrial mineral processing and smelter facility in Penang, Malaysia"
                    aspectRatio="16/9"
                    className="rounded-xl shadow-xs mb-6"
                  />

                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-2 font-mono-num">
                    Core Business Positioning
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-light">
                    KIDRILL is our mineral processing and smelting facility located in Penang, Malaysia. It is an important part of our group's industrial business.
                  </p>

                  <div className="mt-4 p-4 bg-amber-50/70 border border-amber-200/80 rounded-lg">
                    <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1 font-mono-num flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                      <span>Product Portfolios Produced &amp; Supplied by KIDRILL</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-light leading-relaxed">
                      1. Copper (Cathode &amp; Concentrates) — Copper cathodes and copper concentrates.<br />
                      2. Industrial Metals &amp; Non-Ferrous Alloys — Industrial metals, base metals and non-ferrous alloys.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono-num uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                    Strategic Corridors &amp; Supply Integration
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="p-3 bg-white border border-slate-200 rounded text-xs flex items-center justify-between text-slate-800 font-medium">
                      <span>Indonesia → Penang Maritime Corridor</span>
                      <Ship className="w-3.5 h-3.5 text-[#C8102E]" />
                    </div>
                    <div className="p-3 bg-white border border-slate-200 rounded text-xs flex items-center justify-between text-slate-800 font-medium">
                      <span>Regional Smelter &amp; Industrial Offtake</span>
                      <Layers className="w-3.5 h-3.5 text-amber-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dedicated Products Section for KIDRILL (Penang, Malaysia) */}
            <div className="p-8 sm:p-12 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono-num text-[#C8102E] uppercase tracking-widest font-bold">
                    <Package className="w-4 h-4" />
                    <span>
                      Products Processed &amp; Produced by KIDRILL (Penang, Malaysia)
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif-corp text-slate-900 font-medium mt-1">
                    Mineral Processing &amp; Smelter Product Portfolios
                  </h3>
                </div>
                <span className="text-xs text-slate-500 font-mono-num">
                  {malaysiaProducts.length} Confirmed Product Categories
                </span>
              </div>

              {/* Product Cards Grid with Real Photographs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {malaysiaProducts.map((product) => {
                  const title = product.titleKey;

                  return (
                    <div
                      key={product.id}
                      onClick={() => onSelectProduct(product)}
                      className="group bg-slate-50/70 border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#C8102E]/50 transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        {/* Real Photograph */}
                        <div className="w-full relative overflow-hidden">
                          <RealImage
                            src={product.realImageUrl}
                            fallbackSrc={product.fallbackImageUrl}
                            alt={title}
                            aspectRatio="16/9"
                          />
                        </div>

                        <div className="p-6">
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-xs font-mono-num font-semibold text-[#C8102E] uppercase tracking-wider">
                              KIDRILL · Penang, Malaysia
                            </span>
                            <span className="text-[11px] font-mono-num text-slate-400">
                              {product.status}
                            </span>
                          </div>

                          <h4 className="text-lg font-serif-corp font-semibold text-slate-950 group-hover:text-[#C8102E] transition-colors">
                            {title}
                          </h4>

                          <p className="mt-2 text-xs text-slate-600 line-clamp-3 font-light leading-relaxed">
                            {product.descriptionKey}
                          </p>

                          <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-mono-num">
                            <span>Port: {product.portOfLoading.split('/')[0]}</span>
                            <span className="text-slate-400">Terms: {product.shippingTerms.split(' ')[0]}</span>
                          </div>
                        </div>
                      </div>

                      <div className="px-6 pb-5 pt-0">
                        <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-[#C8102E] font-semibold">
                          <span>View Product Specifications</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Banner Linking to Detailed Process Flow */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#C8102E] shrink-0 shadow-2xs">
                  <Workflow className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900">
                    Complete 6-Stage Process Flow Diagram Available
                  </div>
                  <div className="text-xs text-slate-500 font-light">
                    Review KIDRILL's raw material sourcing, maritime transit, ore preparation, mineral processing and smelting circuits.
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('penang-facility')}
                className="text-xs font-semibold font-mono-num text-[#C8102E] hover:text-[#a50d26] inline-flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>Explore KIDRILL Industrial Profile</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* COMPANY 02: Thunder Mark Vietnam Co., Ltd. (Ho Chi Minh City, Vietnam) */}
        {/* ========================================================================= */}
        {(selectedCompany === 'all' || selectedCompany === 'vietnam') && (
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Top Corporate Overview Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200">
              {/* Left Column: Office Details */}
              <div className="lg:col-span-5 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono-num text-emerald-800 uppercase tracking-widest mb-2 font-bold">
                    <span>COMPANY 03</span>
                    <span aria-hidden="true">·</span>
                    <span>HO CHI MINH CITY, VIETNAM</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif-corp font-medium text-slate-950">
                    {t.company2.name}
                  </h2>
                  <p className="mt-1 text-xs font-mono-num text-slate-500 uppercase">
                    International Export &amp; Sourcing Enterprise
                  </p>

                  {/* Registered Address */}
                  <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-2">
                    <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Registered Corporate Headquarters:</span>
                    </div>
                    <p className="text-slate-600 font-light leading-relaxed pl-5">
                      Golding King Tower,
                      <br />
                      Nguyen Luong Bang St.,
                      <br />
                      Tan Hung Ward,
                      <br />
                      Ho Chi Minh City, Vietnam
                    </p>
                  </div>

                  <div className="mt-4 space-y-2 text-xs font-mono-num text-slate-600">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-emerald-600" />
                      <span>+62 822 64973015</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-emerald-600" />
                      <span>total@datmv.com</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onOpenInquiry('Agricultural & Food Products (Vietnam Hub)')}
                    className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800 rounded transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Contact Vietnam Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Real Photograph & Scope */}
              <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-10 space-y-6 lg:border-l lg:border-slate-200 flex flex-col justify-between">
                <div>
                  <RealImage
                    src={vietnamAgriImage}
                    fallbackSrc="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80"
                    alt="Thunder Mark Vietnam Co., Ltd. - Export Quality Agricultural & Food Products"
                    caption="Mekong Delta agricultural produce, rice and high-grade export commodities"
                    aspectRatio="16/9"
                    className="rounded-xl shadow-xs mb-6"
                    imgStyle={{ height: '303px' }}
                  />

                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-2 font-mono-num">
                    Core Business Lines
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-light">
                    {t.company2.business}
                  </p>

                  <div className="mt-4 p-4 bg-emerald-50/70 border border-emerald-100 rounded-lg">
                    <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1 font-mono-num">
                      Institutional Positioning & Strategic Role
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-950 font-light leading-relaxed">
                      {t.company2.role}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono-num uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                    Primary Export & Global Buyer Markets
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {t.company2.markets.map((market, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-white border border-slate-200 rounded text-xs flex items-center justify-between text-slate-800 font-medium"
                      >
                        <span>{market}</span>
                        <Ship className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dedicated Products Section for Thunder Mark Vietnam Co., Ltd. */}
            <div className="p-8 sm:p-12 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono-num text-emerald-800 uppercase tracking-widest font-bold">
                    <Package className="w-4 h-4" />
                    <span>
                      Products Sourced & Exported by Thunder Mark Vietnam Co., Ltd.
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif-corp text-slate-900 font-medium mt-1">
                    Click Any Product to View Full Specifications & Sourcing Details
                  </h3>
                </div>
                <span className="text-xs text-slate-500 font-mono-num">
                  {vietnamProducts.length} Export {vietnamProducts.length === 1 ? 'Commodity' : 'Commodities'} Available
                </span>
              </div>

              {/* Single Product Card presented prominently without empty column gaps */}
              <div className="max-w-xl">
                {vietnamProducts.map((product) => {
                  const title = product.titleKey;
                  const origin = product.originKey;

                  return (
                    <div
                      key={product.id}
                      onClick={() => onSelectProduct(product)}
                      className="group bg-slate-50/70 border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-emerald-500 transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        {/* Real Photograph */}
                        <div className="w-full relative overflow-hidden">
                          <RealImage
                            src={product.realImageUrl}
                            fallbackSrc={product.fallbackImageUrl}
                            alt={title}
                            aspectRatio="4/3"
                            badge={product.status}
                          />
                        </div>

                        <div className="p-5">
                          <div className="text-[10px] font-mono-num uppercase tracking-wider text-slate-400 mb-1">
                            {origin}
                          </div>
                          <h4 className="text-base font-serif-corp font-semibold text-slate-900 group-hover:text-emerald-900 transition-colors line-clamp-1">
                            {title}
                          </h4>
                          <p className="mt-2 text-xs text-slate-600 line-clamp-2 font-light leading-relaxed">
                            {product.descriptionKey}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-emerald-800 font-semibold">
                          <span>View Specifications</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
