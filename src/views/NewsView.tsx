import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { newsArticles } from '../data/news';
import { RealImage } from '../components/RealImage';
import {
  Calendar,
  Clock,
  ArrowRight,
  ShieldAlert,
  Search,
  Filter
} from 'lucide-react';

interface NewsViewProps {
  language: Language;
  onReadArticle: (articleId: string) => void;
}

export const NewsView: React.FC<NewsViewProps> = ({
  language,
  onReadArticle,
}) => {
  const t = translations[language].news;
  const [selectedCategory, setSelectedCategory] = useState<string>('All Topics');

  const categories = [
    'All Topics',
    'Minerals & Metals',
    'Food & Agriculture',
    'Commodity Markets',
    'International Trade',
    'Company News'
  ];

  const filteredArticles = newsArticles.filter((article) => {
    if (selectedCategory === 'All Topics') return true;
    return article.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

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

        {/* Sample Disclaimer Banner */}
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200/80 rounded-xl flex items-center gap-3 text-xs text-amber-900 max-w-3xl">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
          <span>{t.sampleNotice}</span>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {categories.map((cat, idx) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-xs font-semibold'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Articles Grid with Real Photography */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => {
            const title = article.titleEn;
            const excerpt = article.excerptEn;

            return (
              <div
                key={article.id}
                onClick={() => onReadArticle(article.id)}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Real Photo */}
                  <div className="w-full relative overflow-hidden">
                    <RealImage
                      src={article.realImageUrl}
                      alt={title}
                      aspectRatio="16/9"
                      badge={article.category}
                    />
                  </div>

                  <div className="p-7 sm:p-8">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-xs font-mono-num">
                      <span className="text-[#C8102E] font-semibold uppercase">
                        {article.category}
                      </span>
                      <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[10px] font-medium">
                        {t.sampleBadge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif-corp font-medium text-slate-950 group-hover:text-[#C8102E] transition-colors leading-snug">
                      {title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-7 sm:px-8 pb-7 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono-num text-slate-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {article.readTime}
                      </span>
                    </div>

                    <span className="text-slate-900 font-semibold group-hover:translate-x-1 group-hover:text-[#C8102E] transition-all inline-flex items-center gap-1">
                      {t.readArticle}
                      <ArrowRight className="w-3.5 h-3.5 text-[#C8102E]" />
                    </span>
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
