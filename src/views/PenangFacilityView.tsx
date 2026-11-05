import React from 'react';
import { Language } from '../types';
import { RealImage } from '../components/RealImage';
import kidrillFacilityImage from '../assets/images/regenerated_image_1792997135184.png';
import {
  Building2,
  MapPin,
  Ship,
  Layers,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Mail,
  Phone,
  Sparkles,
  FlaskConical,
  Workflow,
  Factory,
  Compass,
  CheckCircle2,
  AlertCircle,
  Leaf,
  Scale,
  PackageCheck,
  Globe2,
  Zap,
  Wheat
} from 'lucide-react';

interface PenangFacilityViewProps {
  language: Language;
  onNavigate: (view: string) => void;
  onOpenInquiry: (topic?: string) => void;
}

export const PenangFacilityView: React.FC<PenangFacilityViewProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  // Conceptual processing stages adhering to user specifications
  const processFlowStages = [
    {
      step: '01',
      title: 'Mineral Sourcing in Indonesia',
      phase: 'Upstream Supply',
      summary: 'Origin ore procurement from authorized Indonesian mining concessions.',
      details: 'Identification, geological sampling, and bilateral offtake structuring of polymetallic mineral ore from verified concessions in Indonesia, compliant with national mineral export governance.',
      icon: Compass,
      inputs: 'Raw Indonesian Polymetallic Ore',
      outputs: 'Verified Concession Ore Lots',
      accentColor: 'border-slate-300'
    },
    {
      step: '02',
      title: 'Transportation to Penang, Malaysia',
      phase: 'Maritime Logistics',
      summary: 'Direct bulk maritime transit across regional Malacca Strait corridors.',
      details: 'Scheduled maritime cargo transport from Indonesian loading anchorages across the Malacca Strait directly to deepwater port terminals in Penang, minimizing transit time and logistical overhead.',
      icon: Ship,
      inputs: 'Concession Bulk Stockpiles',
      outputs: 'Discharged Port Feedstock',
      accentColor: 'border-slate-300'
    },
    {
      step: '03',
      title: 'Ore Preparation & Sizing',
      phase: 'Physical Processing',
      summary: 'Receiving, primary sampling, crushing, screening, and classification.',
      details: 'Bulk cargo receiving, moisture determination, analytical lot assays, and mechanical size reduction (crushing and screening) to deliver uniform particle feed for downstream separation.',
      icon: Layers,
      inputs: 'Run-of-Mine (ROM) Ore',
      outputs: 'Homogeneous Sized Feed',
      accentColor: 'border-slate-300'
    },
    {
      step: '04',
      title: 'Mineral Processing & Separation',
      phase: 'Beneficiation Circuit',
      summary: 'Physical and mineral separation to isolate target metalliferous fractions.',
      details: 'Targeted separation circuits engineered to separate valuable metalliferous mineral grains from non-valuable host gangue rock. Specific separation flowsheets will be confirmed post-engineering.',
      icon: Workflow,
      inputs: 'Classified Ore Slurry / Feed',
      outputs: 'Pre-Concentrated Mineral Streams',
      accentColor: 'border-[#C8102E]/30'
    },
    {
      step: '05',
      title: 'Smelting & Metal Extraction',
      phase: 'Smelting & Metallurgy',
      summary: 'Specialized smelting, concentration, and extraction of copper and gold values.',
      details: 'Downstream metallurgical and smelting circuits dedicated to capturing, enriching, and stabilizing copper-bearing and gold-bearing values into commercial-grade intermediate concentrate and smelter products.',
      icon: FlaskConical,
      inputs: 'Pre-Concentrated Minerals',
      outputs: 'Smelted & Enriched Cu & Au Streams',
      accentColor: 'border-amber-400/40'
    },
    {
      step: '06',
      title: 'Product Handling and Supply',
      phase: 'Commercial Offtake',
      summary: 'Assay certification, moisture control, bulk packaging, and global dispatch.',
      details: 'Third-party certified laboratory assay verification (SGS / Alex Stewart / Alfred H Knight), secure containerized/bulk packaging, and dispatch to international smelters and precious metal refineries.',
      icon: PackageCheck,
      inputs: 'Recovered Intermediate Streams',
      outputs: 'Certified Commercial Offtake Lots',
      accentColor: 'border-emerald-500/40'
    }
  ];

  return (
    <div className="w-full bg-[#FAF9F6] text-slate-900">
      {/* Top Breadcrumb & Corporate Entity Switcher */}
      <div className="pt-28 pb-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 py-2 text-xs font-mono-num">
            {/* Breadcrumb trail */}
            <div className="flex items-center gap-2 text-slate-500">
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-slate-900 transition-colors cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <button
                onClick={() => onNavigate('companies')}
                className="hover:text-slate-900 transition-colors cursor-pointer"
              >
                Our Companies
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 font-semibold">KIDRILL (Penang, Malaysia)</span>
            </div>

            {/* Entity Quick Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-slate-400 hidden md:inline">Corporate Group:</span>
              <button
                onClick={() => onNavigate('companies')}
                className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors cursor-pointer font-medium"
              >
                PT PMA Indonesia
              </button>
              <span className="px-3 py-1 bg-[#C8102E] text-white rounded font-semibold shadow-2xs">
                KIDRILL (Malaysia)
              </span>
              <button
                onClick={() => onNavigate('companies')}
                className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors cursor-pointer font-medium"
              >
                Thunder Mark Vietnam
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION A: COMMANDING HERO & INSTITUTIONAL COMPANY OVERVIEW */}
      {/* ========================================================================= */}
      <section className="relative bg-white border-b border-slate-200 overflow-hidden">
        {/* Subtle background industrial architectural tone */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-white pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Authoritative Editorial Header & Positioning (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Institutional Division Pill */}
              <div className="inline-flex flex-wrap items-center gap-2 text-xs font-mono-num uppercase tracking-wider text-[#C8102E] bg-[#C8102E]/5 border border-[#C8102E]/20 px-3.5 py-1.5 rounded font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
                <span>KIDRILL · PENANG, MALAYSIA</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600">MINERAL PROCESSING &amp; SMELTER</span>
              </div>

              {/* Main Headline */}
              <div>
                <div className="text-xs font-mono-num tracking-[0.25em] uppercase text-[#C8102E] mb-2 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
                  <span>MALAYSIA INDUSTRIAL COMPANY</span>
                </div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-corp font-normal tracking-tight text-slate-950 leading-[1.02]">
                  KIDRILL
                </h1>
                <p className="mt-3 text-2xl sm:text-3xl font-serif-corp text-slate-900 font-normal">
                  Mineral Processing &amp; Smelter
                </p>
                <p className="mt-2 text-lg sm:text-xl font-serif-corp text-[#C8102E] font-medium leading-snug">
                  Penang, Malaysia
                </p>
              </div>

              {/* Supporting Executive Prose */}
              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
                KIDRILL is our mineral processing and smelting facility located in Penang, Malaysia. It is an important part of our group's industrial business.
              </p>

              {/* High-Intent CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenInquiry('KIDRILL - Mineral Processing & Smelter')}
                  className="px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-slate-950 text-white hover:bg-[#C8102E] transition-all rounded shadow-sm flex items-center gap-2.5 cursor-pointer group"
                >
                  <span>Inquire with KIDRILL</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('processing-flow');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-white text-slate-800 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all rounded cursor-pointer flex items-center gap-2"
                >
                  <Workflow className="w-4 h-4 text-[#C8102E]" />
                  <span>Explore Process Flow</span>
                </button>
              </div>
            </div>

            {/* Right Column: Major Industrial Hero Visual (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <RealImage
                  src={kidrillFacilityImage}
                  fallbackSrc="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
                  alt="KIDRILL Mineral Processing & Smelter Facility - Penang Malaysia"
                  aspectRatio="4/3"
                  badge="KIDRILL · PENANG, MALAYSIA"
                  caption="Modern metallurgical mineral processing and smelter facility architecture"
                  className="rounded-2xl shadow-xl border border-slate-200"
                />

                {/* Overlaid Technical Dimension Card */}
                <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl grid grid-cols-2 gap-3 text-xs font-mono-num">
                  <div className="border-r border-slate-200 pr-2">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Company Name</span>
                    <span className="font-semibold text-slate-900 text-sm">KIDRILL</span>
                  </div>
                  <div className="pl-2">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Operating Location</span>
                    <span className="font-semibold text-slate-900 text-sm">Penang, Malaysia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Dimension Strip (4 Pillars) */}
          <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
              <div className="text-[11px] font-mono-num uppercase tracking-wider text-[#C8102E] font-semibold flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                <span>Company Entity</span>
              </div>
              <div className="text-base font-serif-corp font-semibold text-slate-950">
                KIDRILL (Malaysia)
              </div>
              <p className="text-xs text-slate-500 font-light">
                Industrial processing arm located in Penang, Malaysia.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
              <div className="text-[11px] font-mono-num uppercase tracking-wider text-amber-700 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Business Scope</span>
              </div>
              <div className="text-base font-serif-corp font-semibold text-slate-950">
                Mineral Processing &amp; Smelter
              </div>
              <p className="text-xs text-slate-500 font-light">
                Mineral processing and smelting of copper and gold polymetallic ore feedstock.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
              <div className="text-[11px] font-mono-num uppercase tracking-wider text-slate-700 font-semibold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#C8102E]" />
                <span>Feedstock Supply</span>
              </div>
              <div className="text-base font-serif-corp font-semibold text-slate-950">
                Indonesia Concessions
              </div>
              <p className="text-xs text-slate-500 font-light">
                Cross-border maritime corridor connecting Indonesian mining with Penang.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
              <div className="text-[11px] font-mono-num uppercase tracking-wider text-emerald-800 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Corporate Role</span>
              </div>
              <div className="text-base font-serif-corp font-semibold text-slate-950">
                Industrial Processing &amp; Smelter Arm
              </div>
              <p className="text-xs text-slate-500 font-light">
                Completing the group's 3-country supply, smelting, and processing architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION B: MINERAL PROCESSING & SMELTER (INDUSTRIAL FOCUS) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FAF9F6] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Kicker */}
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] mb-3 font-semibold">
              SECTION B · INDUSTRIAL FOCUS
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-corp font-normal tracking-tight text-slate-950 leading-tight">
              Mineral Processing &amp; Smelter at KIDRILL
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              KIDRILL's primary industrial focus is mineral processing and smelting, processing mineral ore to extract valuable copper and gold metals through disciplined mechanical comminution, physical separation, and smelting circuits.
            </p>
          </div>

          {/* Deep-Dive Editorial Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Narrative & Industrial Principles (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-8 shadow-xs flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif-corp font-medium text-slate-950">
                    Upgrading Bulk Ore into Commercial Concentrate Streams
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                    Raw mineral ores as mined often contain valuable metals disseminated within large volumes of host rock and gangue minerals. KIDRILL provides vital intermediate beneficiation in Penang: upgrading lower-grade bulk ores into concentrated mineral fractions suitable for downstream commercial smelting and refining.
                  </p>
                </div>

                {/* 3 Core Industrial Mandates */}
                <div className="space-y-4 pt-2">
                  <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1.5">
                    <div className="font-semibold text-slate-900 text-sm flex items-center gap-2 font-mono-num">
                      <Zap className="w-4 h-4 text-amber-600" />
                      <span>1. Copper Recovery Focus</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      Capturing copper-bearing mineral fractions to produce intermediate concentrates destined for industrial smelters, wire-drawing facilities, and base-metal metallurgical converters.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1.5">
                    <div className="font-semibold text-slate-900 text-sm flex items-center gap-2 font-mono-num">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      <span>2. Gold Recovery Focus</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      Isolating and recovering precious metal mineralization to yield high-value gold-bearing fractions formatted for specialized accredited refiners.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1.5">
                    <div className="font-semibold text-slate-900 text-sm flex items-center gap-2 font-mono-num">
                      <Scale className="w-4 h-4 text-[#C8102E]" />
                      <span>3. Disciplined Technical Governance</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      Maintaining strict analytical assay standards, continuous lot monitoring, moisture control, and transparent chain of custody from reception to shipment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Factual Disclaimer Footer */}
              <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 font-light leading-relaxed">
                <strong className="font-semibold text-slate-700">Technical Note:</strong> Specific operational parameters, assay grades, and offtake schedules are coordinated directly with commercial and industrial partners upon bilateral inquiry.
              </div>
            </div>

            {/* Right Industrial Image & Metallurgy Visual (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
                <RealImage
                  src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
                  fallbackSrc="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
                  alt="Mineral Ore Sample with Copper and Gold Mineralization"
                  aspectRatio="16/9"
                  badge="MINERAL FEEDSTOCK"
                  caption="Polymetallic raw ore sample illustrating disseminated metal mineralization"
                  className="rounded-2xl shadow-xs"
                />

                <div className="space-y-3">
                  <div className="text-xs font-mono-num uppercase tracking-wider text-[#C8102E] font-semibold">
                    Targeted Feedstock Attributes
                  </div>
                  <h4 className="text-lg font-serif-corp font-medium text-slate-950">
                    Polymetallic Ore Characteristics
                  </h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Sourced from verified mineral concessions in Indonesia, incoming ore will undergo physical characterization and metallurgical assays to determine optimal comminution and separation kinetics.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono-num">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="text-[10px] text-slate-400 block uppercase">Primary Base Metal</span>
                    <span className="font-semibold text-slate-900">Copper (Cu)</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="text-[10px] text-slate-400 block uppercase">Primary Precious Metal</span>
                    <span className="font-semibold text-slate-900">Gold (Au)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION C: INTEGRATED REGIONAL BUSINESS MODEL (CORPORATE GROUP STRUCTURE) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Kicker */}
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] mb-3 font-semibold">
              SECTION C · CORPORATE GROUP STRUCTURE
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-corp font-normal tracking-tight text-slate-950 leading-tight">
              Three Businesses, One Corporate Group
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Our corporate group connects three distinct business operations across Southeast Asia, with KIDRILL serving as the dedicated mineral processing and smelting company in Malaysia.
            </p>
          </div>

          {/* 3 Group Pillars Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Pillar 1: Indonesia */}
            <div className="bg-[#FAF9F6] border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-xs font-mono-num font-semibold text-[#C8102E] bg-[#C8102E]/10 rounded uppercase">
                  Operation 01 · Indonesia
                </span>
                <span className="text-xs font-mono-num text-slate-400">Surabaya Hub</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-serif-corp font-medium text-slate-950">
                  PT PMA Kidrill Metal Mining
                </h3>
                <div className="text-xs font-mono-num text-slate-500 uppercase tracking-wider font-semibold">
                  Mineral Trading &amp; Sourcing
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Direct concession sourcing of mineral commodities, mined resources, and raw polymetallic ores across Kalimantan, Sumatra, and Java.
              </p>

              <div className="pt-3 border-t border-slate-200 text-xs font-mono-num text-slate-500 space-y-1">
                <div>· Concession verification &amp; assays</div>
                <div>· Port stockpiling &amp; barge logistics</div>
                <div>· Export trade compliance</div>
              </div>
            </div>

            {/* Pillar 2: Malaysia - KIDRILL */}
            <div className="bg-white border-2 border-[#C8102E] rounded-2xl p-6 sm:p-8 space-y-4 shadow-md relative">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-xs font-mono-num font-semibold text-white bg-[#C8102E] rounded uppercase">
                  Operation 02 · Malaysia
                </span>
                <span className="text-xs font-mono-num text-[#C8102E] font-bold">Penang Facility</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-serif-corp font-bold text-slate-950">
                  KIDRILL
                </h3>
                <div className="text-xs font-mono-num text-[#C8102E] uppercase tracking-wider font-semibold">
                  Mineral Processing &amp; Smelter
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                KIDRILL is our mineral processing and smelting facility located in Penang, Malaysia. It is an integral part of our group's industrial business, complementing our mineral trading operations in Indonesia.
              </p>

              <div className="pt-3 border-t border-slate-100 text-xs font-mono-num text-slate-500 space-y-1">
                <div>· Deepwater port receiving in Penang</div>
                <div>· Mineral processing &amp; comminution</div>
                <div>· Smelting &amp; metal extraction (Cu &amp; Au)</div>
              </div>
            </div>

            {/* Pillar 3: Vietnam */}
            <div className="bg-[#FAF9F6] border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-xs font-mono-num font-semibold text-emerald-800 bg-emerald-100 rounded uppercase">
                  Operation 03 · Vietnam
                </span>
                <span className="text-xs font-mono-num text-slate-400">HCMC Hub</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-serif-corp font-medium text-slate-950">
                  Thunder Mark Vietnam
                </h3>
                <div className="text-xs font-mono-num text-emerald-700 uppercase tracking-wider font-semibold">
                  Food Trading &amp; Export
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Export of certified agricultural commodities (Vietnamese export rice, origin agricultural commodities) and processed food specialties to international markets.
              </p>

              <div className="pt-3 border-t border-slate-200 text-xs font-mono-num text-slate-500 space-y-1">
                <div>· Phytosanitary certified export rice</div>
                <div>· Agricultural products &amp; origin commodities</div>
                <div>· Processed food products &amp; specialties</div>
              </div>
            </div>
          </div>

          {/* Regional Model Narrative Callout */}
          <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="text-xs font-mono-num uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#C8102E]" />
                <span>Cross-Border Mineral Corridor Integration</span>
              </div>
              <p className="text-sm text-slate-700 font-light leading-relaxed">
                By integrating upstream Indonesian mineral sourcing with KIDRILL's processing and smelting operations in Penang, Malaysia, our corporate group structures an efficient regional value chain that minimizes logistics distances across the Malacca Strait and provides dependable intermediate metal streams for global industrial offtakers.
              </p>
            </div>

            <button
              onClick={() => onNavigate('companies')}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-white text-slate-800 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 rounded transition-all cursor-pointer whitespace-nowrap shrink-0 font-mono-num"
            >
              <span>View All Group Entities</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION D: PROCESSING FLOW (STEP-BY-STEP CONCEPTUAL FLOWSHEET) */}
      {/* ========================================================================= */}
      <section id="processing-flow" className="py-20 bg-[#FAF9F6] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Kicker */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-3xl">
              <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] mb-3 font-semibold">
                SECTION D · PROCESS FLOW
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif-corp font-normal tracking-tight text-slate-950 leading-tight">
                KIDRILL Conceptual Processing Flowsheet
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                A structured technical overview detailing the sequential path from origin ore sourcing in Indonesia through maritime transport, physical preparation, mineral separation, and smelting operations at KIDRILL in Penang.
              </p>
            </div>

            {/* Disclaimer Tag */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs font-mono-num text-amber-900 max-w-sm shrink-0">
              <span className="font-semibold block uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                <span>Illustrative Engineering Model</span>
              </span>
              Process stages illustrate the conceptual metallurgical sequence. Specific reagents, flowsheets, and recovery rates are subject to engineering finalization.
            </div>
          </div>

          {/* Sequential 6-Stage Grid with Directional Connectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processFlowStages.map((stage) => {
              const IconComp = stage.icon;
              return (
                <div
                  key={stage.step}
                  className={`bg-white border ${stage.accentColor} rounded-3xl p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group`}
                >
                  <div className="space-y-5">
                    {/* Header with Step Number & Phase */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center font-mono-num text-base font-bold text-slate-900 group-hover:bg-[#C8102E] group-hover:text-white transition-all shadow-2xs">
                        {stage.step}
                      </div>
                      <span className="text-[10px] font-mono-num uppercase tracking-wider text-slate-500 bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
                        {stage.phase}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-slate-400 group-hover:text-[#C8102E] transition-colors">
                        <IconComp className="w-4 h-4" />
                        <span className="text-[11px] font-mono-num uppercase tracking-wider font-semibold">
                          Stage {stage.step}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif-corp font-medium text-slate-950 leading-snug">
                        {stage.title}
                      </h3>
                    </div>

                    {/* Summary & Narrative Details */}
                    <p className="text-xs text-slate-800 font-medium">
                      {stage.summary}
                    </p>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      {stage.details}
                    </p>
                  </div>

                  {/* Stage Technical Inputs / Outputs */}
                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2 text-[11px] font-mono-num">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-slate-400 uppercase">Input:</span>
                      <span className="text-slate-700 text-right font-medium">{stage.inputs}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-slate-400 uppercase">Output:</span>
                      <span className="text-emerald-800 text-right font-semibold">{stage.outputs}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Process Flow Transparent Advisory */}
          <div className="mt-10 p-5 bg-white border border-slate-200 rounded-2xl text-xs text-slate-600 font-light leading-relaxed flex items-start gap-3 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
            <p>
              <strong className="font-semibold text-slate-900">Technical Rigor:</strong> KIDRILL does not invent equipment specifications, recovery percentages, or proprietary reagents. All engineering metrics and performance data will be established through certified pilot studies prior to commercial startup.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION E: PRODUCTS & INDUSTRIAL APPLICATIONS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Kicker */}
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] mb-3 font-semibold">
              SECTION E · PRODUCT STREAMS
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-corp font-normal tracking-tight text-slate-950 leading-tight">
              Products &amp; Industrial Applications
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              KIDRILL focuses on commercial production across two core product categories: Copper (Cathode &amp; Concentrates) and Industrial Metals &amp; Non-Ferrous Alloys for international industrial converters and certified smelters.
            </p>
          </div>

          {/* Two Major Product Portfolios */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* PRODUCT 01: Copper (Cathode & Concentrates) */}
            <div className="bg-[#FAF9F6] border border-slate-200 rounded-3xl p-8 sm:p-12 flex flex-col justify-between space-y-8 shadow-xs">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 text-xs font-mono-num font-semibold text-amber-900 bg-amber-100 rounded uppercase">
                    Category 01 · Copper Product Stream
                  </span>
                  <span className="text-xs font-mono-num text-slate-400">Cu Cathodes &amp; Concentrates</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif-corp font-medium text-slate-950">
                    Copper (Cathode &amp; Concentrates)
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 font-light leading-relaxed">
                    Copper cathodes and copper concentrates engineered for international metallurgy, cable manufacturing, and certified smelting converters.
                  </p>
                </div>

                {/* Applications and Protocols */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono-num text-slate-400 uppercase tracking-wider font-semibold">
                    Targeted Industrial Applications
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold text-slate-900">Smelter Feedstock:</strong> Beneficiated copper concentrate for flash smelting and pyrometallurgical processing.
                      </div>
                    </div>

                    <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold text-slate-900">Metallurgical Conversion:</strong> High-grade copper cathodes for downstream wire rod casting, electrical cabling, and alloys.
                      </div>
                    </div>

                    <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold text-slate-900">Analytical Assay Protocol:</strong> Independent certified sampling and laboratory analysis (wet chemical &amp; ICP-OES) on each shipped lot.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs font-mono-num text-slate-500">
                <span className="font-semibold text-slate-700">Attribution:</span> KIDRILL · Penang, Malaysia (Mineral Processing &amp; Smelter)
              </div>
            </div>

            {/* PRODUCT 02: Industrial Metals & Non-Ferrous Alloys */}
            <div className="bg-[#FAF9F6] border border-slate-200 rounded-3xl p-8 sm:p-12 flex flex-col justify-between space-y-8 shadow-xs">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 text-xs font-mono-num font-semibold text-amber-900 bg-amber-100 rounded uppercase">
                    Category 02 · Industrial Metals Stream
                  </span>
                  <span className="text-xs font-mono-num text-slate-400">Metals &amp; Alloys</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif-corp font-medium text-slate-950">
                    Industrial Metals &amp; Non-Ferrous Alloys
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 font-light leading-relaxed">
                    Industrial metals, base metals, and non-ferrous alloys produced and processed for industrial conversion, foundry operations, and infrastructure manufacturing.
                  </p>
                </div>

                {/* Applications and Protocols */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono-num text-slate-400 uppercase tracking-wider font-semibold">
                    Targeted Industrial Applications
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold text-slate-900">Base Metal Sourcing:</strong> Industrial metal ingots and non-ferrous fractions for heavy manufacturing and automotive alloys.
                      </div>
                    </div>

                    <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold text-slate-900">Foundry &amp; Offtake Supply:</strong> Verified chemical composition and standardized ingot bundling for manufacturing plants.
                      </div>
                    </div>

                    <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold text-slate-900">Quality Certification:</strong> Certified metallurgical assay reports and international export inspection.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs font-mono-num text-slate-500">
                <span className="font-semibold text-slate-700">Attribution:</span> KIDRILL · Penang, Malaysia (Mineral Processing &amp; Smelter)
              </div>
            </div>
          </div>

          {/* Product Governance Notice */}
          <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-600 font-light leading-relaxed">
            <strong className="font-semibold text-slate-900 font-mono-num uppercase">Corporate Product Attribution:</strong> KIDRILL (Penang, Malaysia) is our mineral processing and smelter facility responsible for <strong className="font-medium text-slate-900">Copper (Cathode &amp; Concentrates)</strong> and <strong className="font-medium text-slate-900">Industrial Metals &amp; Non-Ferrous Alloys</strong>. All mineral commodities, raw mineral materials, and mining resources belong exclusively to <strong className="font-medium text-slate-900">KIDRILL METAL MINING</strong> (PT PMA Kidrill Metal Mining, Surabaya, Indonesia).
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION F: FACILITY AND LOCATION (PROMINENT PENANG PRESENCE) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FAF9F6] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Location Features (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] font-semibold">
                SECTION F · LOCATION ADVANTAGE
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif-corp font-normal tracking-tight text-slate-950 leading-tight">
                Penang, Malaysia
              </h2>
              <p className="text-base text-slate-600 font-light leading-relaxed">
                Penang was strategically selected as KIDRILL's operating location for its established deepwater port facilities, mature industrial manufacturing base, competitive logistics infrastructure, and immediate access to the Malacca Strait shipping lanes.
              </p>

              {/* 3 Core Locational Assets */}
              <div className="space-y-4 pt-2">
                <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
                  <div className="font-semibold text-slate-900 text-sm flex items-center gap-2 font-mono-num">
                    <Ship className="w-4 h-4 text-[#C8102E]" />
                    <span>Deepwater Port Connectivity (Penang Port)</span>
                  </div>
                  <p className="text-xs text-slate-600 font-light leading-relaxed pl-6">
                    Direct access to container and dry bulk terminals capable of handling regional feeder vessels and international bulk carriers with rapid customs clearance.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
                  <div className="font-semibold text-slate-900 text-sm flex items-center gap-2 font-mono-num">
                    <Compass className="w-4 h-4 text-[#C8102E]" />
                    <span>Malacca Strait Maritime Proximity</span>
                  </div>
                  <p className="text-xs text-slate-600 font-light leading-relaxed pl-6">
                    Positioned directly on one of the world's most active maritime corridors, offering short sailing times from Indonesian origin ports in Sumatra, Java, and Kalimantan.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
                  <div className="font-semibold text-slate-900 text-sm flex items-center gap-2 font-mono-num">
                    <Factory className="w-4 h-4 text-[#C8102E]" />
                    <span>Established Industrial &amp; Engineering Ecosystem</span>
                  </div>
                  <p className="text-xs text-slate-600 font-light leading-relaxed pl-6">
                    Access to industrial power grids, specialized engineering services, certified testing laboratories, and a skilled technical workforce experienced in manufacturing and processing.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Large Port Visual (6 cols) */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-slate-200 rounded-3xl p-4 shadow-sm">
                <RealImage
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=85"
                  fallbackSrc="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
                  alt="KIDRILL Logistics - Penang Malaysia Deepwater Container and Bulk Terminal"
                  aspectRatio="16/9"
                  badge="PENANG MARITIME GATEWAY"
                  caption="Illustrative representation of regional industrial port infrastructure in Penang, Malaysia"
                  className="rounded-2xl"
                />
                <div className="p-4 pt-3 text-[11px] text-slate-400 font-mono-num">
                  * Note: Imagery represents regional industrial port and maritime infrastructure in Penang, Malaysia, and is displayed for illustrative context.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION G: QUALITY, SAFETY & ENVIRONMENTAL STEWARDSHIP */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] mb-3 font-semibold">
              SECTION G · INDUSTRIAL GOVERNANCE
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-corp font-normal tracking-tight text-slate-950 leading-tight">
              Quality, Safety &amp; Environmental Responsibility
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Industrial processing requires unwavering operational discipline. KIDRILL is designed to incorporate strict environmental controls, comprehensive workplace safety standards, and rigorous analytical quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#FAF9F6] border border-slate-200 rounded-3xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-emerald-700">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif-corp font-medium text-slate-950">
                Environmental Stewardship
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Full alignment with Malaysian Department of Environment (DOE) guidelines and Environmental Impact Assessment (EIA) requirements. Systems include closed-circuit process water recycling, dry tailings management, and active dust suppression across all ore transfer points.
              </p>
            </div>

            <div className="p-8 bg-[#FAF9F6] border border-slate-200 rounded-3xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-[#C8102E]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif-corp font-medium text-slate-950">
                Zero-Harm Safety Protocol
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Occupational safety architecture prioritizing hazard containment, mandatory protective equipment, continuous toxic gas telemetry, automated emergency shutdowns, and ongoing personnel safety certifications.
              </p>
            </div>

            <div className="p-8 bg-[#FAF9F6] border border-slate-200 rounded-3xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-amber-700">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif-corp font-medium text-slate-950">
                Accredited Assay Verification
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Every processed production lot will undergo certified sampling and dual analytical assays conducted by accredited international inspection authorities (such as SGS, Alex Stewart, or Alfred H Knight) prior to commercial release.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 font-light leading-relaxed">
            <strong className="font-semibold text-slate-700 font-mono-num uppercase">Audit &amp; Certification Roadmap:</strong> Formal international certifications (including ISO 9001 Quality Management, ISO 14001 Environmental Management, and ISO 45001 Occupational Health &amp; Safety) will undergo third-party audit and formal accreditation upon physical completion and commercial startup.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION H: BUSINESS & INDUSTRIAL ENQUIRIES (STRONG EXECUTIVE CTA) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8102E]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] font-semibold">
                SECTION H · COMMERCIAL &amp; TECHNICAL ENGAGEMENT
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif-corp font-normal text-white leading-tight">
                Engage with KIDRILL · Penang, Malaysia
              </h2>
              <p className="text-base text-slate-300 font-light leading-relaxed max-w-xl">
                We invite technical collaboration, mineral feedstock supply arrangements, and commercial offtake dialogues with certified smelters, mining concessionaires, and industrial metal consumers.
              </p>

              {/* Direct Group Communication Channels */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono-num">
                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl space-y-1.5">
                  <div className="text-slate-400 uppercase tracking-wider text-[10px]">
                    Corporate Email Desk
                  </div>
                  <a
                    href="mailto:total@datmv.com"
                    className="flex items-center gap-2 text-white hover:text-[#C8102E] transition-colors font-medium text-sm"
                  >
                    <Mail className="w-4 h-4 text-[#C8102E]" />
                    <span>total@datmv.com</span>
                  </a>
                  <div className="text-[11px] text-slate-400">Official commercial inquiries</div>
                </div>

                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl space-y-1.5">
                  <div className="text-slate-400 uppercase tracking-wider text-[10px]">
                    Direct Commercial Line
                  </div>
                  <a
                    href="tel:+6282264973015"
                    className="flex items-center gap-2 text-white hover:text-[#C8102E] transition-colors font-medium text-sm"
                  >
                    <Phone className="w-4 h-4 text-[#C8102E]" />
                    <span>+62 822 64973015</span>
                  </a>
                  <div className="text-[11px] text-slate-400">Group Commercial Desk</div>
                </div>
              </div>

              {/* Quick links to navigate across other entities */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono-num text-slate-400">
                <span>Group Corporate Network:</span>
                <button
                  onClick={() => onNavigate('companies')}
                  className="text-slate-300 hover:text-white underline cursor-pointer"
                >
                  PT PMA Indonesia (Mineral Trading)
                </button>
                <span>·</span>
                <button
                  onClick={() => onNavigate('companies')}
                  className="text-slate-300 hover:text-white underline cursor-pointer"
                >
                  Thunder Mark Vietnam (Food Trading)
                </button>
              </div>
            </div>

            {/* Right Action Card (5 cols) */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-mono-num uppercase tracking-wider text-amber-400 font-semibold">
                  Formal Industrial Inquiry
                </div>
                <h3 className="text-2xl font-serif-corp text-white font-medium">
                  Initiate Commercial Dialogue with KIDRILL
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Submit specifications, feed volume capabilities, or offtake parameters to receive our formal preliminary project dossier.
                </p>
              </div>

              <button
                onClick={() => onOpenInquiry('KIDRILL - Mineral Processing & Smelter')}
                className="w-full py-4 px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#C8102E] text-white hover:bg-[#a50d26] rounded-xl transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2 font-mono-num"
              >
                <span>Open B2B Inquiry Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[11px] text-slate-400 text-center font-mono-num">
                Kidrill Group Corporate Governance · Standard response within 24 business hours
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
