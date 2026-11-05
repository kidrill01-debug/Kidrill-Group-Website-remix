import { ProductItem } from '../types';
import copperCathodeImage from '../assets/images/indonesian_coal.png';
import industrialMetalsImage from '../assets/images/regenerated_image_1793091217372.png';
import mineralCommoditiesImage from '../assets/images/regenerated_image_1793091335589.png';
import processedFoodsImage from '../assets/images/regenerated_image_1793775136612.png';

export const productsData: ProductItem[] = [
  // =========================================================================
  // COMPANY 1: KIDRILL (Penang, Malaysia) · Mineral Processing & Smelter
  // =========================================================================
  {
    id: 'copper-cathode-concentrate',
    companyId: 'malaysia',
    companyNameEn: 'KIDRILL',
    companyNameKo: 'KIDRILL (말레이시아 페낭)',
    category: 'minerals_metals',
    titleKey: 'Copper (Cathode & Concentrates)',
    titleKo: '전기동 음극재 및 동정광 (Copper Cathode & Concentrates)',
    originKey: 'Penang, Malaysia',
    originKo: '말레이시아 페낭 (Penang, Malaysia)',
    descriptionKey: 'Copper cathodes and copper concentrates engineered for international metallurgy, cable manufacturing, and certified smelting converters.',
    descriptionKo: '말레이시아 페낭 가공 및 제련 시설에서 생산 및 회수되는 전기동 음극재(Copper Cathode)와 동정광을 산업 및 제련 수요처에 공급합니다.',
    specsSummary: 'Copper cathodes and copper concentrates available upon request. Detailed assay certificates provided with commercial inquiries.',
    specsSummaryKo: '전기동 및 동정광 성분 분석표 및 상세 스펙은 정식 B2B 문의 시 제공됩니다.',
    shippingTerms: 'FOB Penang Port / CIF Major Global Container Ports (Incoterms 2020)',
    inspection: 'Certified third-party assay verification (SGS / Alfred H Knight / Alex Stewart).',
    status: 'Commercial Offtake',
    portOfLoading: 'Penang Port / Port Klang, Malaysia',
    packagingTerms: 'Strapped cathode bundles / bulk containerized concentrate',
    realImageUrl: copperCathodeImage,
    fallbackImageUrl: copperCathodeImage,
    keyHighlights: [
      'Copper cathodes and copper concentrates processed at Penang facility',
      'Direct maritime corridor connectivity via Penang Port',
      'Standardized sampling & assay certification for international buyers',
      'Structured long-term industrial supply agreements'
    ],
    keyHighlightsKo: [
      '페낭 가공 및 제련 시설 기반의 전기동 음극재 및 동정광',
      '페낭항 해상 무역로를 통한 신속한 국제 선적',
      '공인 검정 기관의 분석 성적서 및 품질 보증',
      '글로벌 제조사를 위한 장기 안정 공급 계약'
    ]
  },
  {
    id: 'industrial-metals',
    companyId: 'malaysia',
    companyNameEn: 'KIDRILL',
    companyNameKo: 'KIDRILL (말레이시아 페낭)',
    category: 'minerals_metals',
    titleKey: 'Industrial Metals & Non-Ferrous Alloys',
    titleKo: '산업용 금속 및 비철합금 (Industrial Metals & Non-Ferrous Alloys)',
    originKey: 'Penang, Malaysia',
    originKo: '말레이시아 페낭 (Penang, Malaysia)',
    descriptionKey: 'Industrial metals, base metals, and non-ferrous alloys produced and processed for industrial conversion, foundry operations, and infrastructure manufacturing.',
    descriptionKo: '중공업, 정련 및 주조 산업에 필수적인 산업용 기초 금속과 비철합금 가공 원자재를 조달 및 공급합니다.',
    specsSummary: 'Base metals, primary ingots, and non-ferrous alloy fractions available upon request.',
    specsSummaryKo: '산업용 비철금속 및 합금 성분 규격서는 B2B 문의 시 제공됩니다.',
    shippingTerms: 'FOB Penang Port / CIF Available upon request (Incoterms 2020)',
    inspection: 'Independent third-party inspection upon request.',
    status: 'Inquiry Basis',
    portOfLoading: 'Penang Port, Malaysia',
    packagingTerms: 'Standard strapped ingots / bulk containers',
    realImageUrl: industrialMetalsImage,
    fallbackImageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    keyHighlights: [
      'Direct processing and supply from Penang industrial hub',
      'Strict metallurgical quality control and assay verification',
      'Flexible spot and term contract structuring for industrial consumers',
      'Seamless regional maritime logistics from Penang Port'
    ],
    keyHighlightsKo: [
      '페낭 산업 회랑 기반의 직가공 및 안정적 출하 체계',
      '철저한 야금 품질 관리 및 정밀 성분 검증',
      '산업 수요처 맞춤형 스팟 및 정기 공급 계약',
      '페낭항을 통한 원활한 동남아 및 글로벌 해상 운송'
    ]
  },

  // =========================================================================
  // COMPANY 2: KIDRILL METAL MINING (PT PMA Kidrill Metal Mining · Indonesia)
  // =========================================================================
  {
    id: 'mineral-commodities',
    companyId: 'indonesia',
    companyNameEn: 'KIDRILL METAL MINING',
    companyNameKo: 'KIDRILL METAL MINING (PT PMA Kidrill Metal Mining)',
    category: 'minerals_metals',
    titleKey: 'Mineral Commodities & Mining Resources',
    titleKo: '광물 원자재 및 광산 자원 (Mineral Commodities & Mining Resources)',
    originKey: 'Surabaya / East Java, Indonesia',
    originKo: '인도네시아 수라바야 및 동남아시아 광산',
    descriptionKey: 'Mineral commodities, raw mineral materials, and mining resources connecting direct Indonesian mining concessions with international processing facilities.',
    descriptionKo: '인도네시아의 풍부한 광산 자원, 원광석 및 원자재를 발굴하여 해외 정련 및 가공 시설과 연결하는 광물 원자재 무역 서비스입니다.',
    specsSummary: 'Available upon request.',
    specsSummaryKo: '광종별 품위 및 성분 분석표는 정식 요청 시 제공됩니다.',
    shippingTerms: 'Bulk Vessel / Barge / Breakbulk terms available upon request',
    inspection: 'Official mining department assay certificates & independent survey reports.',
    status: 'Active Sourcing',
    portOfLoading: 'Indonesian Dedicated Mineral Terminals / Tanjung Perak, Surabaya',
    packagingTerms: 'Bulk cargo hold loading',
    realImageUrl: mineralCommoditiesImage,
    fallbackImageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    keyHighlights: [
      'Direct contact with Indonesian mining concessionaires',
      'Full statutory mining permit (IUP-OP) verification',
      'Transparent chain of custody and royalty compliance',
      'Comprehensive vessel logistics coordination'
    ],
    keyHighlightsKo: [
      '인도네시아 현지 광업 허가(IUP-OP) 보유사와의 직접 협력',
      '채굴 및 수출 법적 인허가 완벽 검증',
      '투명한 유통 이력 및 광업세 납부 증빙 확인',
      '벌크선 및 전용 터미널 선적 물류 총괄 조율'
    ]
  },

  // ==========================================
  // COMPANY 03: Thunder Mark Vietnam Co., Ltd. (Vietnam)
  // ==========================================
  // Processed Food Products & Specialties
  {
    id: 'processed-food-products',
    companyId: 'vietnam',
    companyNameEn: 'Thunder Mark Vietnam Co., Ltd.',
    companyNameKo: 'Thunder Mark Vietnam Co., Ltd. (베트남)',
    category: 'food_agriculture',
    titleKey: 'Processed Food Products & Specialties',
    titleKo: '수출용 가공식품 및 특산품 (Processed Foods)',
    originKey: 'Vietnam',
    originKo: '베트남 현대식 식품 가공 공장',
    descriptionKey: 'Shelf-stable packaged foodstuffs, canned tropical agricultural produce, dried tropical fruits, and value-added consumer packaged goods for overseas retail and food service chains.',
    descriptionKo: '해외 대형 마트 및 식품 유통 체인을 위한 통조림 과일, 건조 열대과일, 인스턴트 식품 등 부가가치가 높은 베트남 가공식품을 수출합니다.',
    specsSummary: 'Available upon request.',
    specsSummaryKo: '수출 전용 포장 규격 및 유통기한 기준은 문의 시 안내해 드립니다.',
    shippingTerms: 'FCL Container shipping available upon request',
    inspection: 'Standard food safety export documentation & lab analysis available upon request.',
    status: 'Inquiry Basis',
    portOfLoading: 'Ho Chi Minh City Port, Vietnam',
    packagingTerms: 'Retail-ready inner packaging & export master cartons',
    realImageUrl: processedFoodsImage,
    fallbackImageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80',
    keyHighlights: [
      'Compliance with international food labeling standards',
      'Modern automated packaging and vacuum sealing lines',
      'OEM / private label branding options available',
      'Diverse consolidation options in 20ft / 40ft containers'
    ],
    keyHighlightsKo: [
      '수출 대상국 식품 표시 규정(Labeling) 완벽 준수',
      '최신 자동화 진공 포장 및 살균 라인 구축',
      '해외 유통사 PB / OEM 맞춤형 브랜드 패키징 가능',
      '다양한 품목의 컨테이너 혼적(Consolidation) 선적 지원'
    ]
  }
];
