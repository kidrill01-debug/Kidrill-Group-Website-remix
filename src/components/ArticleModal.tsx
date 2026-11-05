import React, { useEffect } from 'react';
import { NewsArticle, Language } from '../types';
import { RealImage } from './RealImage';
import { X, Calendar, Clock, Bookmark, ArrowRight, ShieldAlert } from 'lucide-react';

interface ArticleModalProps {
  article: NewsArticle | null;
  onClose: () => void;
  language: Language;
  onOpenInquiry?: (topic?: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  language,
  onOpenInquiry,
}) => {
  useEffect(() => {
    if (article) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [article]);

  if (!article) return null;

  const title = article.titleEn;
  const content = article.contentEn;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl text-slate-900 overflow-hidden my-8">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2 text-xs font-mono-num text-[#C8102E] font-semibold">
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.date}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Sample Article Notice Banner */}
          {article.isSample && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-center gap-2.5 text-xs text-amber-900">
              <ShieldAlert className="w-4 h-4 shrink-0 text-amber-700" />
              <span>
                Sample Editorial Article: Prepared for the Kidrill Group corporate portal layout preview.
              </span>
            </div>
          )}

          {/* Real Photograph in Modal */}
          {article.realImageUrl && (
            <RealImage
              src={article.realImageUrl}
              alt={title}
              aspectRatio="16/9"
              className="rounded-xl shadow-xs"
            />
          )}

          <h2 className="text-2xl sm:text-3xl font-serif-corp text-slate-950 font-medium leading-tight">
            {title}
          </h2>

          <div className="pb-4 border-b border-slate-200 flex items-center gap-4 text-xs text-slate-500 font-mono-num">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Bookmark className="w-3.5 h-3.5" />
              Kidrill Market Intelligence
            </span>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-light">
            {content.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? 'text-slate-900 font-normal leading-relaxed text-base sm:text-lg'
                    : ''
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold text-slate-900">
                Related Commodity Procurement Inquiry
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Connect with our commercial trading desk for contract terms and specifications.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry?.(article.category);
              }}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white hover:bg-[#C8102E] rounded transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer shadow-xs"
            >
              <span>Send Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
