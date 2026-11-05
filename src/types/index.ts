export type Language = 'en' | 'ko';

export interface CompanyInfo {
  id: 'indonesia' | 'malaysia' | 'vietnam';
  legalName: string;
  shortName: string;
  country: string;
  city: string;
  address: string[];
  coreBusiness: string[];
  primaryMarkets: string[];
  positioning: string;
  leadCommodities: string[];
  contactEmail: string;
  contactPhone: string;
}

export type ProductCategory = 'minerals_metals' | 'food_agriculture' | 'seafood';

export interface ProductItem {
  id: string;
  companyId: 'indonesia' | 'malaysia' | 'vietnam';
  companyNameEn: string;
  companyNameKo: string;
  category: ProductCategory;
  titleKey: string;
  titleKo: string;
  originKey: string;
  originKo: string;
  descriptionKey: string;
  descriptionKo: string;
  specsSummary: string;
  specsSummaryKo: string;
  shippingTerms: string;
  inspection: string;
  status: string;
  portOfLoading: string;
  packagingTerms: string;
  realImageUrl: string;
  fallbackImageUrl?: string;
  keyHighlights: string[];
  keyHighlightsKo: string[];
}

export interface NewsArticle {
  id: string;
  category: string;
  titleEn: string;
  titleKo: string;
  excerptEn: string;
  excerptKo: string;
  date: string;
  readTime: string;
  contentEn: string[];
  contentKo: string[];
  isSample: boolean;
  realImageUrl: string;
}

export interface TradeCorridor {
  id: string;
  regionEn: string;
  regionKo: string;
  countryCode: string;
  coordinates: { x: number; y: number };
  commoditiesEn: string[];
  commoditiesKo: string[];
  transitFocusEn: string;
  transitFocusKo: string;
}
