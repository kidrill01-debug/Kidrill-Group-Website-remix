import React from 'react';

interface VisualProps {
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '21/9' | '1/1' | '3/2';
  title?: string;
}

/**
 * 1. Hero Cinematic Visual: Bright Daytime Maritime Trade & Bulk Carrier Vessel
 * Inspired by Mitsubishi Corporation's bright, expansive ocean logistics imagery.
 */
export const HeroMaritimeVisual: React.FC<VisualProps> = ({
  className = '',
  aspectRatio = '16/9',
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl shadow-lg bg-gradient-to-b from-[#E0F2FE] via-[#BAE6FD] to-[#0284C7] ${className}`}
      style={{ aspectRatio }}
    >
      <svg
        viewBox="0 0 1200 675"
        className="w-full h-full object-cover"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Sky Gradient */}
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7DD3FC" />
            <stop offset="45%" stopColor="#BAE6FD" />
            <stop offset="75%" stopColor="#E0F2FE" />
            <stop offset="100%" stopColor="#F0F9FF" />
          </linearGradient>

          {/* Deep Ocean Gradient */}
          <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="35%" stopColor="#0369A1" />
            <stop offset="70%" stopColor="#075985" />
            <stop offset="100%" stopColor="#0C4A6E" />
          </linearGradient>

          {/* Sunlight Horizon Glow */}
          <radialGradient id="sunGlow" cx="65%" cy="58%" r="40%">
            <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#BAE6FD" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0" />
          </radialGradient>

          {/* Ship Hull Gradient */}
          <linearGradient id="hullGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="40%" stopColor="#334155" />
            <stop offset="85%" stopColor="#0F172A" />
          </linearGradient>

          {/* Crimson Keel Bottom Line */}
          <linearGradient id="keelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8A1425" />
            <stop offset="50%" stopColor="#C8102E" />
            <stop offset="100%" stopColor="#6B0E1E" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect width="1200" height="420" fill="url(#skyGrad)" />
        <circle cx="780" cy="380" r="280" fill="url(#sunGlow)" />

        {/* Soft Cirrus Clouds */}
        <path
          d="M100,120 Q240,100 400,125 T800,110 T1150,130"
          stroke="#FFFFFF"
          strokeWidth="28"
          strokeLinecap="round"
          opacity="0.45"
        />
        <path
          d="M200,170 Q380,150 560,165 T950,155"
          stroke="#FFFFFF"
          strokeWidth="20"
          strokeLinecap="round"
          opacity="0.35"
        />

        {/* Distant Port Skyline & Gantry Cranes */}
        <g opacity="0.3" fill="#0369A1">
          <rect x="900" y="360" width="12" height="40" />
          <polygon points="890,360 920,360 940,330 900,330" />
          <line x1="940" y1="330" x2="980" y2="330" stroke="#0369A1" strokeWidth="3" />

          <rect x="960" y="355" width="12" height="45" />
          <polygon points="950,355 980,355 1000,325 960,325" />
          <line x1="1000" y1="325" x2="1040" y2="325" stroke="#0369A1" strokeWidth="3" />

          {/* Distant mountains/islands */}
          <path d="M0,400 Q150,375 320,395 Q480,380 650,400 L650,420 L0,420 Z" fill="#93C5FD" opacity="0.4" />
        </g>

        {/* Ocean Surface */}
        <rect y="400" width="1200" height="275" fill="url(#oceanGrad)" />

        {/* Sun Glimmer on Sea */}
        <ellipse cx="780" cy="420" rx="220" ry="8" fill="#FEF08A" opacity="0.6" />
        <ellipse cx="770" cy="435" rx="160" ry="6" fill="#FFFFFF" opacity="0.5" />
        <ellipse cx="750" cy="455" rx="120" ry="4" fill="#FFFFFF" opacity="0.4" />

        {/* Large Modern International Bulk Carrier Ship */}
        <g id="bulkCarrier">
          {/* Red Lower Hull / Antifouling Keel */}
          <polygon
            points="240,495 290,535 880,535 980,480 970,470 260,470"
            fill="url(#keelGrad)"
          />

          {/* Upper Black / Navy Steel Hull */}
          <polygon
            points="220,440 260,470 970,470 1020,430 1000,410 240,415"
            fill="url(#hullGrad)"
          />

          {/* White Bulwark Top Line */}
          <polygon points="238,414 1002,409 1000,416 237,421" fill="#F8FAFC" />

          {/* Cargo Hatches on Deck */}
          <g fill="#475569" stroke="#334155" strokeWidth="1">
            <rect x="360" y="398" width="80" height="15" rx="2" fill="#E2E8F0" />
            <rect x="470" y="396" width="85" height="15" rx="2" fill="#CBD5E1" />
            <rect x="585" y="395" width="85" height="15" rx="2" fill="#E2E8F0" />
            <rect x="700" y="394" width="85" height="15" rx="2" fill="#CBD5E1" />
          </g>

          {/* Deck Cargo Cranes */}
          <g stroke="#F8FAFC" strokeWidth="3" fill="#0284C7">
            <line x1="455" y1="400" x2="455" y2="365" />
            <line x1="455" y1="365" x2="495" y2="355" stroke="#E2E8F0" strokeWidth="2" />

            <line x1="570" y1="398" x2="570" y2="363" />
            <line x1="570" y1="363" x2="610" y2="353" stroke="#E2E8F0" strokeWidth="2" />

            <line x1="685" y1="396" x2="685" y2="361" />
            <line x1="685" y1="361" x2="725" y2="351" stroke="#E2E8F0" strokeWidth="2" />
          </g>

          {/* Superstructure / Accommodation Bridge (White Modern Multi-Tier Tower) */}
          <g id="bridgeTower">
            <rect x="830" y="340" width="75" height="60" fill="#FFFFFF" rx="2" />
            <rect x="840" y="315" width="55" height="28" fill="#F8FAFC" rx="2" />
            <rect x="850" y="295" width="40" height="22" fill="#FFFFFF" rx="1" />

            {/* Bridge Windows (Tinted Cyan/Dark Glass) */}
            <rect x="852" y="300" width="36" height="7" fill="#0F172A" />
            <rect x="842" y="322" width="51" height="5" fill="#334155" />

            {/* Radar Mast & Navigation Antennas */}
            <line x1="870" y1="295" x2="870" y2="260" stroke="#CBD5E1" strokeWidth="2.5" />
            <line x1="860" y1="270" x2="880" y2="270" stroke="#CBD5E1" strokeWidth="2" />
            <circle cx="870" cy="256" r="3" fill="#38BDF8" />

            {/* Corporate Exhaust Funnel */}
            <polygon points="905,320 920,320 928,370 900,370" fill="#0284C7" />
            {/* White/Red Band on Funnel */}
            <rect x="903" y="335" width="19" height="8" fill="#FFFFFF" />
            <rect x="902" y="343" width="21" height="4" fill="#C8102E" />
          </g>

          {/* Bow Bulb & Water Spray Wake */}
          <path
            d="M210,455 Q170,480 120,490 Q220,505 270,515"
            fill="#FFFFFF"
            opacity="0.85"
          />
          <path
            d="M260,520 Q550,555 990,540 Q1120,555 1200,565 L1200,675 L200,675 Z"
            fill="#38BDF8"
            opacity="0.2"
          />
          <path
            d="M250,525 Q600,560 1150,548"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeDasharray="16 10"
            opacity="0.6"
          />
        </g>

        {/* Clean Daylight Lighting Badge in Corner */}
        <g transform="translate(40, 40)">
          <rect width="220" height="34" rx="4" fill="#FFFFFF" fillOpacity="0.9" />
          <text
            x="14"
            y="22"
            fill="#0369A1"
            fontSize="11"
            fontFamily="system-ui"
            fontWeight="700"
            letterSpacing="0.15em"
          >
            GLOBAL MARITIME CORRIDOR
          </text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 2. Mineral Commodities & Mining Resources Visual
 */
export const MineralsMetalsVisual: React.FC<VisualProps> = ({
  className = '',
  aspectRatio = '4/3',
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-gradient-to-tr from-[#3B1F0B] via-[#78350F] to-[#B45309] shadow-sm ${className}`}
      style={{ aspectRatio }}
    >
      <svg
        viewBox="0 0 600 450"
        className="w-full h-full object-cover"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Copper Glow */}
          <linearGradient id="copperCathodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDBA74" />
            <stop offset="40%" stopColor="#EA580C" />
            <stop offset="80%" stopColor="#9A3412" />
            <stop offset="100%" stopColor="#431407" />
          </linearGradient>

          {/* High-Grade Coal Texture */}
          <linearGradient id="coalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="45%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* Clean Metallic Rim */}
          <linearGradient id="metalRim" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B45309" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Industrial Clean Room / Warehouse Background */}
        <rect width="600" height="450" fill="#1C1917" />
        <rect width="600" height="180" fill="#292524" />
        <line x1="0" y1="180" x2="600" y2="180" stroke="#44403C" strokeWidth="2" />

        {/* Stacked Refined Grade A Copper Cathode Plates */}
        <g id="copperPlates">
          {/* Stack Base Shadow */}
          <polygon points="120,380 480,380 520,350 160,350" fill="#0C0A09" opacity="0.8" />

          {/* Copper Cathode Sheet 1 */}
          <polygon points="140,350 460,350 500,290 180,290" fill="url(#copperCathodeGrad)" />
          <line x1="140" y1="350" x2="460" y2="350" stroke="#FED7AA" strokeWidth="2" />
          <polygon points="140,350 460,350 460,360 140,360" fill="#C2410C" />

          {/* Copper Cathode Sheet 2 */}
          <polygon points="135,325 455,325 495,265 175,265" fill="url(#copperCathodeGrad)" />
          <line x1="135" y1="325" x2="455" y2="325" stroke="#FFEDD5" strokeWidth="2.5" />
          <polygon points="135,325 455,325 455,335 135,335" fill="#9A3412" />

          {/* Copper Cathode Sheet 3 (Top Gleaming Sheet) */}
          <polygon points="130,300 450,300 490,240 170,240" fill="url(#copperCathodeGrad)" />
          <line x1="130" y1="300" x2="450" y2="300" stroke="#FFF7ED" strokeWidth="3" />
          {/* Lug Hanging Ears for Electrolytic Tankhouse */}
          <rect x="180" y="235" width="24" height="12" rx="2" fill="#FED7AA" />
          <rect x="420" y="235" width="24" height="12" rx="2" fill="#FED7AA" />
        </g>

        {/* Glossy Anthracite & Thermal Coal Mineral Rocks on Left */}
        <g id="coalMinerals">
          <polygon points="40,380 90,310 160,330 190,390 110,420" fill="url(#coalGrad)" stroke="#64748B" strokeWidth="1" />
          <polygon points="90,310 130,280 170,300 160,330" fill="#334155" />
          <polygon points="120,400 180,360 230,390 200,430 140,430" fill="url(#coalGrad)" stroke="#475569" strokeWidth="1" />
        </g>

        {/* Specification Watermark */}
        <text
          x="30"
          y="42"
          fill="#FED7AA"
          fontSize="12"
          fontFamily="system-ui"
          fontWeight="700"
          letterSpacing="0.2em"
        >
          KIDRILL · COPPER &amp; INDUSTRIAL METALS | KIDRILL METAL MINING · MINERAL COMMODITIES
        </text>
      </svg>
    </div>
  );
};

/**
 * 3. Food & Agriculture Visual: Vietnam Coffee Beans & Premium Rice Grains
 */
export const FoodAgriVisual: React.FC<VisualProps> = ({
  className = '',
  aspectRatio = '4/3',
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-gradient-to-tr from-[#064E3B] via-[#047857] to-[#10B981] shadow-sm ${className}`}
      style={{ aspectRatio }}
    >
      <svg
        viewBox="0 0 600 450"
        className="w-full h-full object-cover"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="warmAgriGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="60%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          <linearGradient id="coffeeBeanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#78350F" />
            <stop offset="50%" stopColor="#451A03" />
            <stop offset="100%" stopColor="#1E0B02" />
          </linearGradient>

          <linearGradient id="greenBeanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A7F3D0" />
            <stop offset="60%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#065F46" />
          </linearGradient>
        </defs>

        {/* Clean Natural Light Background */}
        <rect width="600" height="450" fill="#F8FAFC" />
        <rect y="220" width="600" height="230" fill="#F1F5F9" />

        {/* Wooden Tasting & Testing Tray */}
        <ellipse cx="300" cy="330" rx="260" ry="90" fill="#E2E8F0" />
        <ellipse cx="300" cy="320" rx="250" ry="85" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="2" />

        {/* Ceramic Sample Dishes */}
        {/* Left Dish: Green & Roasted Robusta Coffee Beans */}
        <g transform="translate(180, 290)">
          <ellipse cx="0" cy="0" rx="100" ry="45" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          {/* Coffee Beans Cluster */}
          <ellipse cx="-40" cy="-5" rx="16" ry="11" fill="url(#coffeeBeanGrad)" transform="rotate(25 -40 -5)" />
          <ellipse cx="-15" cy="-12" rx="18" ry="12" fill="url(#coffeeBeanGrad)" transform="rotate(-15 -15 -12)" />
          <ellipse cx="15" cy="-8" rx="17" ry="11" fill="url(#greenBeanGrad)" transform="rotate(40 15 -8)" />
          <ellipse cx="45" cy="-2" rx="18" ry="12" fill="url(#coffeeBeanGrad)" transform="rotate(-30 45 -2)" />
          <ellipse cx="-10" cy="12" rx="17" ry="11" fill="url(#greenBeanGrad)" transform="rotate(10 -10 12)" />
          <ellipse cx="25" cy="10" rx="16" ry="10" fill="url(#coffeeBeanGrad)" transform="rotate(-45 25 10)" />
        </g>

        {/* Right Dish: Polished Long Grain Vietnamese Jasmine Rice */}
        <g transform="translate(420, 290)">
          <ellipse cx="0" cy="0" rx="100" ry="45" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          {/* Clean White Rice Mound */}
          <ellipse cx="0" cy="-2" rx="75" ry="32" fill="#F8FAFC" />
          <ellipse cx="0" cy="-6" rx="60" ry="24" fill="#FFFFFF" />
          {/* Subtle Individual Grains */}
          <ellipse cx="-20" cy="-10" rx="7" ry="2.5" fill="#F1F5F9" transform="rotate(35 -20 -10)" />
          <ellipse cx="15" cy="-14" rx="7" ry="2.5" fill="#F8FAFC" transform="rotate(-20 15 -14)" />
          <ellipse cx="0" cy="4" rx="8" ry="3" fill="#E2E8F0" transform="rotate(15 0 4)" />
          <ellipse cx="28" cy="2" rx="7" ry="2.5" fill="#F1F5F9" transform="rotate(-40 28 2)" />
        </g>

        {/* Golden Sunlit Mekong Agricultural Fields in Background */}
        <path d="M0,220 Q150,160 300,190 T600,170 L600,220 L0,220 Z" fill="#D97706" opacity="0.25" />
        <path d="M0,200 Q200,140 400,170 T600,150 L600,200 L0,200 Z" fill="#059669" opacity="0.3" />

        {/* Title Badge */}
        <text
          x="30"
          y="42"
          fill="#065F46"
          fontSize="12"
          fontFamily="system-ui"
          fontWeight="700"
          letterSpacing="0.2em"
        >
          VIETNAMESE ROBUSTA &amp; LONG-GRAIN RICE
        </text>
      </svg>
    </div>
  );
};

/**
 * 4. Seafood Visual: Cold Chain Export Shrimp & Marine Harvest
 */
export const SeafoodColdChainVisual: React.FC<VisualProps> = ({
  className = '',
  aspectRatio = '4/3',
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-gradient-to-tr from-[#075985] via-[#0284C7] to-[#38BDF8] shadow-sm ${className}`}
      style={{ aspectRatio }}
    >
      <svg
        viewBox="0 0 600 450"
        className="w-full h-full object-cover"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Pristine Ice Gradient */}
          <linearGradient id="iceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#E0F2FE" />
            <stop offset="100%" stopColor="#BAE6FD" />
          </linearGradient>

          {/* Tiger Prawn Amber Shell */}
          <linearGradient id="shrimpShell" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDBA74" />
            <stop offset="35%" stopColor="#EA580C" />
            <stop offset="70%" stopColor="#C2410C" />
            <stop offset="100%" stopColor="#7C2D12" />
          </linearGradient>
        </defs>

        {/* Modern Clean Cold Storage Backdrop */}
        <rect width="600" height="450" fill="#0C4A6E" />
        <rect y="200" width="600" height="250" fill="#075985" />

        {/* Stainless Steel Grade 316 Inspection Counter */}
        <polygon points="0,220 600,180 600,450 0,450" fill="#E2E8F0" />
        <polygon points="0,220 600,180 600,230 0,270" fill="#CBD5E1" />

        {/* Ice Bed Base */}
        <ellipse cx="300" cy="310" rx="260" ry="85" fill="url(#iceGrad)" stroke="#BAE6FD" strokeWidth="2" />

        {/* Export Black Tiger / Vannamei Prawns Artwork */}
        <g id="prawnsCluster">
          {/* Main Curved Tiger Prawn 1 */}
          <path
            d="M220,320 C180,260 210,210 270,220 C320,230 350,260 370,300 C340,310 290,290 260,260 C240,240 230,270 240,300 Z"
            fill="url(#shrimpShell)"
          />
          {/* Dark Tiger Stripes */}
          <path d="M235,265 Q255,250 275,260" stroke="#431407" strokeWidth="4" />
          <path d="M260,280 Q285,270 305,280" stroke="#431407" strokeWidth="4" />
          <path d="M290,295 Q315,290 335,300" stroke="#431407" strokeWidth="4" />

          {/* Second Prawn */}
          <path
            d="M340,330 C300,270 330,230 390,240 C440,250 460,280 470,320 C440,325 400,305 380,280 Z"
            fill="url(#shrimpShell)"
            opacity="0.9"
          />

          {/* Cold Mist & Ice Sparkles */}
          <circle cx="280" cy="270" r="3" fill="#FFFFFF" opacity="0.9" />
          <circle cx="340" cy="250" r="2.5" fill="#FFFFFF" opacity="0.9" />
          <circle cx="390" cy="290" r="3" fill="#FFFFFF" opacity="0.9" />
          <circle cx="210" cy="300" r="2" fill="#FFFFFF" opacity="0.8" />
        </g>

        {/* Export Cold Chain Badge */}
        <text
          x="30"
          y="42"
          fill="#38BDF8"
          fontSize="12"
          fontFamily="system-ui"
          fontWeight="700"
          letterSpacing="0.2em"
        >
          VIETNAM SEAFOOD / CERTIFIED -18°C COLD CHAIN
        </text>
      </svg>
    </div>
  );
};

/**
 * 5. Corporate Headquarters & International Trading Visual
 */
export const CorporateHeadquartersVisual: React.FC<VisualProps> = ({
  className = '',
  aspectRatio = '16/9',
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-gradient-to-tr from-[#0F172A] via-[#1E293B] to-[#334155] shadow-sm ${className}`}
      style={{ aspectRatio }}
    >
      <svg
        viewBox="0 0 1200 675"
        className="w-full h-full object-cover"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="skyCity" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="60%" stopColor="#BAE6FD" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </linearGradient>

          <linearGradient id="glassFacade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>
        </defs>

        {/* Bright Daytime Sky */}
        <rect width="1200" height="675" fill="url(#skyCity)" />

        {/* Modern Corporate Skyscraper Skyline (Pakuwon Centre Surabaya & Golding King Tower HCMC style) */}
        {/* Tower 1 */}
        <rect x="250" y="140" width="180" height="535" fill="#FFFFFF" />
        <rect x="270" y="160" width="140" height="515" fill="url(#glassFacade)" opacity="0.6" />

        {/* Window Grid Pattern */}
        <g stroke="#FFFFFF" strokeWidth="1.5" opacity="0.4">
          <line x1="270" y1="200" x2="410" y2="200" />
          <line x1="270" y1="240" x2="410" y2="240" />
          <line x1="270" y1="280" x2="410" y2="280" />
          <line x1="270" y1="320" x2="410" y2="320" />
          <line x1="270" y1="360" x2="410" y2="360" />
          <line x1="270" y1="400" x2="410" y2="400" />
          <line x1="320" y1="160" x2="320" y2="675" />
          <line x1="360" y1="160" x2="360" y2="675" />
        </g>

        {/* Main Central Tower: High Architectural Glass Tower */}
        <polygon points="460,80 720,50 750,675 430,675" fill="#0F172A" />
        <polygon points="480,95 700,70 725,675 455,675" fill="url(#glassFacade)" opacity="0.75" />

        {/* Center Tower Vertical Mullions */}
        <g stroke="#FFFFFF" strokeWidth="2" opacity="0.5">
          <line x1="520" y1="90" x2="520" y2="675" />
          <line x1="560" y1="85" x2="560" y2="675" />
          <line x1="600" y1="80" x2="600" y2="675" />
          <line x1="640" y1="75" x2="640" y2="675" />
          <line x1="680" y1="70" x2="680" y2="675" />
        </g>

        {/* Tower 3 on Right */}
        <rect x="780" y="200" width="160" height="475" fill="#E2E8F0" />
        <rect x="800" y="220" width="120" height="455" fill="#0284C7" opacity="0.4" />

        {/* Modernist Architectural Pavilion in Foreground */}
        <rect y="540" width="1200" height="135" fill="#F8FAFC" opacity="0.95" />
        <line x1="0" y1="540" x2="1200" y2="540" stroke="#CBD5E1" strokeWidth="2" />

        {/* Clean Corporate Typography */}
        <text
          x="50"
          y="600"
          fill="#0B1727"
          fontSize="22"
          fontFamily="system-ui"
          fontWeight="700"
          letterSpacing="0.1em"
        >
          KIDRILL GROUP · CORPORATE HEADQUARTERS &amp; HUBS
        </text>
        <text
          x="50"
          y="630"
          fill="#64748B"
          fontSize="13"
          fontFamily="system-ui"
          fontWeight="400"
          letterSpacing="0.05em"
        >
          Surabaya (PT PMA Kidrill Metal Mining) · Penang (KIDRILL) · Ho Chi Minh City (Thunder Mark Vietnam)
        </text>
      </svg>
    </div>
  );
};
