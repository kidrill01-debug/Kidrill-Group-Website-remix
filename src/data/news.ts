import { NewsArticle } from '../types';
import indonesianCoalImage from '../assets/images/indonesian_coal.png';
import vietnamFoodImage from '../assets/images/vietnam_food.png';
import commodityTradeImage from '../assets/images/commodity_trade.png';

export const newsArticles: NewsArticle[] = [
  {
    id: 'sample-coal-market-2026',
    category: 'Minerals & Metals',
    titleEn: 'Evaluating Pacific Basin Thermal Coal Demand Dynamics and Southeast Asian Supply Corridors',
    titleKo: '환태평양 화력발전용 석탄 수요 추이 및 동남아시아 공급 회랑 분석',
    excerptEn: 'An executive overview of evolving procurement strategies across East Asian utilities and the critical role of Indonesian supply consistency in meeting baseline energy requirements.',
    excerptKo: '동아시아 주요 유틸리티 기업들의 원자재 조달 전략 변화와 기저 발전 수요 충족을 위한 인도네시아 공급망의 핵심 역할에 대한 경영진 관점의 분석.',
    date: 'OCT 2026',
    readTime: '5 min read',
    isSample: true,
    realImageUrl: indonesianCoalImage,
    contentEn: [
      'This is a Sample Article prepared for the Kidrill Group corporate portal editorial preview.',
      'As industrial capacity across East and Southeast Asia continues to scale, baseline energy commodities face structural shifts. Thermal coal flows from key Indonesian production basins remain a cornerstone for regional energy reliability, even as economies advance energy transition blueprints.',
      'Kidrill Group monitors vessel queuing, barging transshipment efficiency, and third-party calorific certification protocols to ensure counterparties receive verified, contract-compliant shipments without supply chain disruption.',
      'Detailed market analysis and spot vs. term contract structuring insights are available to qualified institutional trading partners upon inquiry.'
    ],
    contentKo: [
      '본 게시물은 키드릴 그룹 웹사이트의 레이아웃 및 정보 제공 방식을 시연하기 위한 샘플 기사(Sample Article)입니다.',
      '동아시아 및 동남아시아 전역의 산업 생산 능력이 확대됨에 따라 기저 에너지 원자재에 대한 구조적 수요가 지속되고 있습니다. 인도네시아 주요 생산지로부터의 발전용 석탄 공급은 역내 에너지 안보를 뒷받침하는 핵심 요소입니다.',
      '키드릴 그룹은 바지선 환적 효율성, 선박 체선 관리 및 SGS 등 공인 3자 발열량 검정 체계를 면밀히 조율하여 고객사에 규격에 부합하는 원자재를 안정적으로 공급합니다.',
      '세부적인 시장 분석 보고서 및 장기 공급 계약 구조화 방안은 공인된 기관 고객에 한해 요청 시 제공됩니다.'
    ]
  },
  {
    id: 'sample-vietnam-rice-agri',
    category: 'Food & Agriculture',
    titleEn: 'Vietnamese Agricultural Export Infrastructure: Navigating Quality Verification and Global Standards',
    titleKo: '베트남 농산물 수출 인프라: 품질 검증 체계와 글로벌 식품 안전 규격 준수',
    excerptEn: 'How direct-origin sourcing, modern milling facilities, and strict phytosanitary protocols are strengthening Vietnam’s position as a premier global agricultural supplier.',
    excerptKo: '원산지 직소싱, 최신 정미 및 도정 시설, 엄격한 식물검역 관리가 베트남을 글로벌 농산물 핵심 수출국으로 도약시키는 과정에 대한 고찰.',
    date: 'SEP 2026',
    readTime: '4 min read',
    isSample: true,
    realImageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80',
    contentEn: [
      'This is a Sample Article prepared for the Kidrill Group corporate portal editorial preview.',
      'Vietnam has established itself as an indispensable agricultural powerhouse, particularly in long-grain white rice, fragrant jasmine rice, and origin commodities like pepper and cashew nuts. Modern international buyers demand unprecedented levels of batch traceability and phytosanitary rigor.',
      'Through Thunder Mark Vietnam Co., Ltd., Kidrill Group works alongside accredited milling complexes and regional farmer collectives to guarantee moisture conformity, grain purity, and export container ventilation standards.',
      'Our commercial desk structures CIF and FOB bilateral agreements tailored to overseas food manufacturers, packaging distributors, and national distribution consortia.'
    ],
    contentKo: [
      '본 게시물은 키드릴 그룹 웹사이트의 레이아웃 및 정보 제공 방식을 시연하기 위한 샘플 기사(Sample Article)입니다.',
      '베트남은 수출용 쌀과 고품질 특산 농산물 분야에서 대체 불가능한 글로벌 농업 강국으로 자리매김했습니다. 특히 최근 글로벌 수입업체들은 엄격한 원산지 이력 추적성과 식물검역 합격을 필수로 요구하고 있습니다.',
      '키드릴 그룹은 베트남 현지 법인인 Thunder Mark Vietnam Co., Ltd.를 통해 공인 정미 공장 및 농가 협력체와 긴밀히 연계하여 수분율 관리, 선별 순도 및 컨테이너 환기 기준을 철저히 준수합니다.',
      '해외 식품 제조사 및 대형 농산물 유통사를 위한 맞춤형 FOB 및 CIF 장기 공급 계약을 지원합니다.'
    ]
  },
  {
    id: 'sample-mineral-commodities-trade',
    category: 'Mineral Commodities & Mining Resources',
    titleEn: 'Strategic Mineral Commodities and Raw Industrial Ores in Cross-Border Asian Trade',
    titleKo: '국경 간 아시아 무역에서의 전략 광물 원자재 및 산업용 원광석 공급망',
    excerptEn: 'Examining global supply dynamics in raw mineral commodities and how regional trading intermediaries connect verified Southeast Asian mining concessions with international processors.',
    excerptKo: '광물 원자재의 글로벌 공급 동향과 동남아시아 공인 광산을 해외 가공 시설과 연결하는 전문 무역 상사의 역할.',
    date: 'AUG 2026',
    readTime: '6 min read',
    isSample: true,
    realImageUrl: commodityTradeImage,
    contentEn: [
      'This is a Sample Article prepared for the Kidrill Group corporate portal editorial preview.',
      'Industrial transformation across manufacturing, energy infrastructure, and metallurgical processing has placed reliable raw mineral commodities at the center of international trade.',
      'Kidrill Group through PT PMA Kidrill Metal Mining monitors statutory concession compliance, assay verification, and secure vessel transit to connect verified mining operations with international industrial processing plants.',
      'All commercial inquiries for mineral commodities and mining resources are managed under strict institutional governance and third-party laboratory verification.'
    ],
    contentKo: [
      '본 게시물은 키드릴 그룹 웹사이트의 레이아웃 및 정보 제공 방식을 시연하기 위한 샘플 기사(Sample Article)입니다.',
      '제조업, 에너지 인프라 및 금속 가공 산업의 전환으로 신뢰할 수 있는 광물 원자재는 국제 무역의 핵심 품목으로 부상했습니다.',
      '키드릴 그룹의 인도네시아 법인인 PT PMA Kidrill Metal Mining은 법적 광업권 검증, 공인 성적서 확인 및 안전한 해상 운송 경로를 관리하여 채굴 광산과 해외 정련/가공 시설을 연결합니다.',
      '모든 광물 원자재 및 광산 자원 거래 문의는 엄격한 기업 규정 준수와 독립 공인 시험소의 품질 보증 하에 진행됩니다.'
    ]
  },
  {
    id: 'sample-processed-food-agri',
    category: 'Food & Agriculture',
    titleEn: 'Value-Added Agricultural Produce and Processed Food Exports from Vietnam',
    titleKo: '베트남산 고부가가치 가공식품 및 특산 농산물의 글로벌 수출 규격',
    excerptEn: 'Deep dive into automated packaging, phytosanitary standards, and international retail compliance governing high-grade Vietnamese agricultural commodities and processed foodstuffs.',
    excerptKo: '베트남의 우수한 농식품 수출에 필수적인 자동화 포장 공정, 식물검역 기준 및 국제 유통망 적합성 검증 체계.',
    date: 'JUL 2026',
    readTime: '4 min read',
    isSample: true,
    realImageUrl: vietnamFoodImage,
    contentEn: [
      'This is a Sample Article prepared for the Kidrill Group corporate portal editorial preview.',
      'International demand for Vietnamese agricultural commodities and value-added processed food products continues to expand across East Asia, Europe, and North America.',
      'Thunder Mark Vietnam Co., Ltd. coordinates directly with certified packaging lines and agricultural cooperatives in Southern Vietnam to guarantee export compliance, private labeling integrity, and container moisture stability.',
      'Customized export packaging, private labeling for overseas retail brands, and bulk agricultural container shipments are evaluated on a commercial inquiry basis.'
    ],
    contentKo: [
      '본 게시물은 키드릴 그룹 웹사이트의 레이아웃 및 정보 제공 방식을 시연하기 위한 샘플 기사(Sample Article)입니다.',
      '베트남산 특산 농산물과 부가가치 가공식품에 대한 국제적 수요는 동아시아, 유럽, 북미 시장 전역에서 지속적으로 확대되고 있습니다.',
      'Thunder Mark Vietnam Co., Ltd.는 베트남 현지의 공인 포장 공장 및 산지 농가 협동조합과 직접 협력하여 수출 규격 적합성, 바이어 PB 브랜드 패키징 및 컨테이너 선적 품질을 철저히 검증합니다.',
      '해외 유통사 맞춤형 소포장, PB 브랜드 및 대량 컨테이너 선적에 대한 B2B 무역 문의를 전문적으로 처리하고 있습니다.'
    ]
  },
  {
    id: 'sample-penang-smelter-copper',
    category: 'Mineral Processing & Smelter',
    titleEn: 'Penang Smelter Corridor: High-Purity Copper Cathode and Industrial Metal Supply',
    titleKo: '페낭 제련소 회랑: 고순도 전기동(Copper Cathode) 및 산업용 비철금속 공급망',
    excerptEn: 'Strategic insights into KIDRILL Penang mineral processing operations, electrolytic copper cathode offtake, and regional non-ferrous metal logistics across Southeast Asia.',
    excerptKo: 'KIDRILL 말레이시아 페낭 광물 가공 및 제련 시설의 전기동 오프테이크와 동남아시아 비철금속 공급망 분석.',
    date: 'SEP 2026',
    readTime: '4 min read',
    isSample: true,
    realImageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    contentEn: [
      'This is a Sample Article prepared for the Kidrill Group corporate portal editorial preview.',
      'Mineral processing and smelting represent high-precision metallurgical operations connecting extracted concentrates with global downstream manufacturing.',
      'Operating out of Penang, Malaysia, KIDRILL manages mineral processing and smelter operations focused strictly on Copper (Cathode & Concentrates) and Industrial Metals & Non-Ferrous Alloys.',
      'Benefiting from Penang port infrastructure and direct Malacca Strait access, KIDRILL facilitates commercial offtake dialogues with certified manufacturers and international metal consumers.'
    ],
    contentKo: [
      '본 게시물은 키드릴 그룹 웹사이트의 레이아웃 및 정보 제공 방식을 시연하기 위한 샘플 기사(Sample Article)입니다.',
      '광물 가공 및 제련 공정은 채굴된 정광을 글로벌 다운스트림 제조 산업으로 연결하는 핵심 야금 기술입니다.',
      '말레이시아 페낭에 위치한 KIDRILL은 전기동(Copper Cathodes & Concentrates) 및 산업용 비철금속(Industrial Metals & Non-Ferrous Alloys) 전담 광물 가공·제련 시설을 운영하고 있습니다.',
      '페낭 심수항의 물류 인프라와 말라카 해협 항로 접근성을 기반으로 공인 제조사 및 글로벌 금속 수요처와의 상업적 오프테이크 협력을 지원합니다.'
    ]
  }
];
