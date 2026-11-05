import React, { useState } from 'react';
import { Language, ProductCategory, ProductItem } from '../types';
import { translations } from '../data/translations';
import { productsData } from '../data/products';
import { RealImage } from '../components/RealImage';
import {
  ShieldAlert,
  Flame,
  Wheat,
  Fish,
  Layers,
  FileText,
  MapPin,
  CheckCircle2,
  Building2,
  Filter
} from 'lucide-react';

interface ProductsViewProps {
  language: Language;
  onOpenInquiry: (commodity?: string) => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  language,
  onOpenInquiry,
  onSelectProduct,
}) => {
  const t = translations[language].products;
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');
  const [activeCompanyFilter, setActiveCompanyFilter] = useState<'all' | 'malaysia' | 'indonesia' | 'vietnam'>('all');

  const filteredProducts = productsData.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesCompany = activeCompanyFilter === 'all' || p.companyId === activeCompanyFilter;
    return matchesCategory && matchesCompany;
  });

  const getCategoryIcon = (category: ProductCategory) => {
    switch (category) {
      case 'minerals_metals':
        return <Flame className="w-4 h-4 text-amber-600" />;
      case 'food_agriculture':
        return <Wheat className="w-4 h-4 text-emerald-600" />;
      case 'seafood':
        return <Fish className="w-4 h-4 text-[#C8102E]" />;
    }
  };

  const getCategoryLabel = (category: ProductCategory) => {
    switch (category) {
      case 'minerals_metals':
        return 'Mineral Commodities & Mining Resources';
      case 'food_agriculture':
        return 'Food & Agriculture';
      case 'seafood':
        return 'Seafood Products';
    }
  };

  return (
    <div className="w-full pt-28 pb-20 bg-[#FAF9F6]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] mb-3 font-semibold">
          {t.tag}
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-corp font-normal tracking-tight text-slate-950 max-w-4xl leading-[1.12]">
          {t.title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
          {t.subtitle}
        </p>

        {/* Corporate Disclosure Banner */}
        <div className="mt-8 p-4 bg-white border border-slate-200 rounded-xl flex items-start gap-3 text-xs text-slate-700 max-w-3xl shadow-xs">
          <ShieldAlert className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
          <p className="leading-relaxed font-light">
            <strong className="font-semibold text-slate-900">
              Corporate Disclosure Policy:
            </strong>{' '}
            {t.disclaimerNotice}
          </p>
        </div>



        {/* Dual Filter Bars (By Category & By Company) */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pt-6 border-t border-slate-200">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-medium rounded transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-xs font-semibold'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {t.tabs.all} ({productsData.length})
            </button>
            <button
              onClick={() => setActiveCategory('minerals_metals')}
              className={`px-4 py-2 text-xs font-medium rounded transition-all cursor-pointer flex items-center gap-1.5 ${
                activeCategory === 'minerals_metals'
                  ? 'bg-slate-900 text-white shadow-xs font-semibold'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>{t.tabs.minerals}</span>
            </button>
            <button
              onClick={() => setActiveCategory('food_agriculture')}
              className={`px-4 py-2 text-xs font-medium rounded transition-all cursor-pointer flex items-center gap-1.5 ${
                activeCategory === 'food_agriculture'
                  ? 'bg-slate-900 text-white shadow-xs font-semibold'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Wheat className="w-3.5 h-3.5 text-emerald-500" />
              <span>{t.tabs.agri}</span>
            </button>
          </div>

          {/* Company Filter */}
          <div className="flex items-center gap-2 text-xs font-mono-num">
            <span className="text-slate-400 uppercase font-semibold">Filter by Entity:</span>
            <select
              value={activeCompanyFilter}
              onChange={(e) => setActiveCompanyFilter(e.target.value as any)}
              className="bg-white border border-slate-200 rounded px-3 py-1.5 text-slate-800 text-xs font-sans-corp focus:outline-none"
            >
              <option value="all">All Operating Companies</option>
              <option value="malaysia">KIDRILL (Penang, Malaysia · Smelter)</option>
              <option value="indonesia">KIDRILL METAL MINING (PT PMA Kidrill, Indonesia)</option>
              <option value="vietnam">Thunder Mark Vietnam Co., Ltd. (Vietnam)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Items Grid with Real Photographs & Click Interaction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid gap-6 sm:gap-8 ${
          filteredProducts.length === 1
            ? 'grid-cols-1 max-w-xl'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {filteredProducts.map((product) => {
            const title = product.titleKey;
            const origin = product.originKey;

            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#C8102E]/50 transition-all duration-300 group cursor-pointer"
              >
                <div>
                  {/* Real Photograph */}
                  <div className="w-full relative overflow-hidden">
                    <RealImage
                      src={product.realImageUrl}
                      fallbackSrc={product.fallbackImageUrl}
                      alt={title}
                      aspectRatio="16/9"
                      badge={product.status}
                    />
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-xs font-mono-num">
                      <div className="flex items-center gap-1.5">
                        {getCategoryIcon(product.category)}
                        <span className="text-slate-700 font-semibold">
                          {getCategoryLabel(product.category)}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#C8102E] font-bold uppercase">
                        {product.companyId === 'malaysia' ? 'MY Hub' : product.companyId === 'indonesia' ? 'ID Hub' : 'VN Hub'}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono-num uppercase tracking-wider text-[#C8102E] font-semibold mb-1">
                      {product.companyNameEn}
                    </div>

                    <h3 className="text-xl font-serif-corp font-medium text-slate-950 group-hover:text-[#C8102E] transition-colors">
                      {title}
                    </h3>

                    <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500 font-mono-num">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{origin}</span>
                    </div>

                    <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-light line-clamp-3">
                      {product.descriptionKey}
                    </p>

                    {/* Technical Specifications Disclaimer Block */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100 space-y-1.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-mono-num">{t.specsLabel}:</span>
                        <span className="text-slate-800 font-medium italic text-[11px]">
                          {t.specDisclaimer}
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-slate-400 font-mono-num shrink-0">{t.shippingLabel}:</span>
                        <span className="text-slate-700 text-right font-light text-[11px] truncate max-w-[180px]">
                          {product.shippingTerms}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
