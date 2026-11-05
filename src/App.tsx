import React, { useState, useEffect } from 'react';
import { Language, NewsArticle, ProductItem } from './types';
import { newsArticles } from './data/news';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { ArticleModal } from './components/ArticleModal';
import { ProductDetailModal } from './components/ProductDetailModal';

import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { CompaniesView } from './views/CompaniesView';
import { BusinessView } from './views/BusinessView';
import { ProductsView } from './views/ProductsView';
import { ProjectsView } from './views/ProjectsView';
import { MarketsView } from './views/MarketsView';
import { SustainabilityView } from './views/SustainabilityView';
import { NewsView } from './views/NewsView';
import { ContactView } from './views/ContactView';
import { PenangFacilityView } from './views/PenangFacilityView';

export default function App() {
  const language: Language = 'en';
  const [currentView, setCurrentView] = useState<string>('home');
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);
  const [inquiryCommodity, setInquiryCommodity] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Scroll to top on view change
  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (commodity?: string) => {
    setInquiryCommodity(commodity || '');
    setIsInquiryModalOpen(true);
  };

  const handleReadArticle = (articleId: string) => {
    const article = newsArticles.find((a) => a.id === articleId) || null;
    setActiveArticle(article);
  };

  const handleSelectProduct = (product: ProductItem) => {
    setSelectedProduct(product);
  };

  // Dynamic document title update
  useEffect(() => {
    const baseTitle = 'Kidrill Group | Global Resources & Trusted Trade';

    const viewTitlesEn: Record<string, string> = {
      home: 'Home',
      about: 'About Us',
      companies: 'Our Companies',
      'penang-facility': 'KIDRILL · Mineral Processing & Smelter (Penang, Malaysia)',
      business: 'Business Areas',
      products: 'Products & Commodities',
      projects: 'Projects & Pipelines',
      markets: 'Global Markets',
      sustainability: 'Sustainability',
      news: 'News & Insights',
      contact: 'Contact & Inquiries',
    };

    const pageName = viewTitlesEn[currentView] || 'Corporate';
    document.title = currentView === 'home' ? baseTitle : `${pageName} · ${baseTitle}`;
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#121619] font-sans-corp selection:bg-[#C8102E] selection:text-white">
      {/* Sticky Top Navigation */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        language={language}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Main View Router */}
      <main className="flex-1 w-full">
        {currentView === 'home' && (
          <HomeView
            language={language}
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
            onReadArticle={handleReadArticle}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentView === 'about' && (
          <AboutView
            language={language}
            onNavigate={handleNavigate}
            onOpenInquiry={() => handleOpenInquiry()}
          />
        )}

        {currentView === 'companies' && (
          <CompaniesView
            language={language}
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentView === 'penang-facility' && (
          <PenangFacilityView
            language={language}
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentView === 'business' && (
          <BusinessView
            language={language}
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentView === 'products' && (
          <ProductsView
            language={language}
            onOpenInquiry={handleOpenInquiry}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentView === 'projects' && (
          <ProjectsView
            language={language}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentView === 'markets' && (
          <MarketsView
            language={language}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentView === 'sustainability' && (
          <SustainabilityView
            language={language}
            onOpenInquiry={() => handleOpenInquiry()}
          />
        )}

        {currentView === 'news' && (
          <NewsView
            language={language}
            onReadArticle={handleReadArticle}
          />
        )}

        {currentView === 'contact' && (
          <ContactView language={language} />
        )}
      </main>

      {/* Corporate Footer with Verified Locations & Direct Contact Info */}
      <Footer
        language={language}
        onNavigate={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Interactive B2B Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        language={language}
        initialCommodity={inquiryCommodity}
      />

      {/* Interactive Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        language={language}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* News & Insights Article Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        language={language}
        onOpenInquiry={handleOpenInquiry}
      />
    </div>
  );
}
