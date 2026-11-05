import React, { useEffect } from 'react';
import { ProductItem, Language } from '../types';
import { RealImage } from './RealImage';
import {
  X,
  MapPin,
  Ship,
  ShieldCheck,
  Package,
  FileText,
  Building2,
  CheckCircle2,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onOpenInquiry: (commodity: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  language,
  onOpenInquiry,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const title = product.titleKey;
  const description = product.descriptionKey;
  const origin = product.originKey;
  const company = product.companyNameEn;
  const specs = product.specsSummary;
  const highlights = product.keyHighlights;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl text-slate-900 overflow-hidden my-8 border border-slate-200">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#C8102E]" />
            <span className="text-xs font-mono-num font-semibold text-slate-800 uppercase tracking-wider">
              {company}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-10 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Real Photograph (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <RealImage
                src={product.realImageUrl}
                fallbackSrc={product.fallbackImageUrl}
                alt={title}
                aspectRatio="4/3"
                badge={product.status}
                className="rounded-xl shadow-md border border-slate-200"
              />
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg text-xs space-y-1.5 font-mono-num text-slate-600">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Loading Port:</span>
                  <span className="text-slate-800 font-medium text-right text-[11px] truncate max-w-[200px]">
                    {product.portOfLoading.split('/')[0]}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Packaging:</span>
                  <span className="text-slate-800 font-medium text-right text-[11px] truncate max-w-[200px]">
                    {product.packagingTerms.split('(')[0]}
                  </span>
                </div>
              </div>
            </div>

            {/* Product Narrative & Specifications (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-num text-[#C8102E] font-bold uppercase tracking-wider mb-1.5">
                  <span>{product.category.replace('_', ' ').toUpperCase()}</span>
                  <span>·</span>
                  <span>{origin}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif-corp font-medium text-slate-950 leading-tight">
                  {title}
                </h2>
                <div className="mt-2 flex items-center gap-2 text-xs text-slate-600 font-mono-num">
                  <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>
                    {product.companyId === 'malaysia'
                      ? `Processed & Produced by: ${company} (Penang, Malaysia · Mineral Processing & Smelter)`
                      : product.companyId === 'indonesia'
                      ? `Sourced & Supplied by: ${company} (PT PMA Kidrill Metal Mining · Indonesia)`
                      : `Sourced & Exported by: ${company}`}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-light">
                {description}
              </p>

              {/* Technical Specifications Block */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-xs font-mono-num uppercase tracking-wider font-bold text-slate-800">
                    Technical Assay &amp; Specification
                  </span>
                  <span className="text-[11px] text-[#C8102E] font-semibold font-mono-num">
                    Official B2B
                  </span>
                </div>
                <p className="text-xs text-slate-700 font-light leading-relaxed">
                  {specs}
                </p>
                <div className="pt-2 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] font-mono-num uppercase">Delivery Terms:</span>
                    <span className="text-slate-800 font-medium">{product.shippingTerms}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] font-mono-num uppercase">Inspection Agency:</span>
                    <span className="text-slate-800 font-medium">{product.inspection}</span>
                  </div>
                </div>
              </div>

              {/* Key Commercial Highlights */}
              <div>
                <span className="text-xs font-mono-num uppercase tracking-wider text-slate-500 font-semibold block mb-2.5">
                  Key Supply &amp; Compliance Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-white border border-slate-200 rounded-lg flex items-center gap-2 text-xs text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer Ribbon */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl">
            <div>
              <h4 className="text-sm font-semibold text-slate-900">
                Request Detailed Specs &amp; Quotation (RFQ)
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Directly routes your inquiry to this company's commercial trading desk.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry(title);
              }}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-stone-900 text-white hover:bg-[#C8102E] rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Request Product Information</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
