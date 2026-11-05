import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ShieldCheck,
  CheckCircle,
  Building2,
  FileCheck2
} from 'lucide-react';

interface ContactViewProps {
  language: Language;
}

export const ContactView: React.FC<ContactViewProps> = ({ language }) => {
  const t = translations[language].contact;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    interest: t.interests[0],
    commodity: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.email) {
      setErrorMessage('Please complete all required fields (Name, Company, Corporate Email).');
      return;
    }

    setErrorMessage('');
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 850);
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({
      name: '',
      company: '',
      country: '',
      email: '',
      phone: '',
      interest: t.interests[0],
      commodity: '',
      message: '',
    });
  };

  return (
    <div className="w-full pt-28 pb-20 bg-[#FAF9F6]">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-slate-500 mb-3">
          {t.tag}
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-corp font-normal tracking-tight text-slate-900 max-w-4xl leading-[1.12]">
          {t.title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Corporate Contacts & Operating Company Addresses (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Communication Block (Bright Clean White Card) */}
            <div className="bg-white text-slate-900 rounded-2xl p-8 border border-slate-200 space-y-6 shadow-sm">
              <div>
                <span className="text-xs font-mono-num uppercase tracking-widest text-[#C8102E] font-semibold">
                  {t.directDetails}
                </span>
                <h3 className="text-2xl font-serif-corp font-medium text-slate-950 mt-1">
                  Kidrill Group
                </h3>
              </div>

              <div className="space-y-4 text-sm font-mono-num text-slate-700">
                <a
                  href="mailto:total@datmv.com"
                  className="flex items-center gap-3 hover:text-[#C8102E] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C8102E] shrink-0" />
                  <span>total@datmv.com</span>
                </a>

                <a
                  href="tel:+6282264973015"
                  className="flex items-center gap-3 hover:text-[#C8102E] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C8102E] shrink-0" />
                  <span>+62 822 64973015</span>
                </a>

                <div className="flex items-center gap-3 text-slate-500 text-xs">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{t.hours}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-light leading-relaxed">
                All bilateral tenders, export documentation, and contract negotiations are handled via our commercial trading desks.
              </div>
            </div>

            {/* Registered Office 1: Indonesia */}
            <div className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-xs font-mono-num uppercase tracking-wider text-[#C8102E] font-semibold">
                  KIDRILL METAL MINING
                </span>
                <span className="text-[11px] font-mono-num text-slate-400">INDONESIA</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-600 font-light leading-relaxed">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <address className="not-italic font-mono-num">
                  PT PMA Kidrill Metal Mining
                  <br />
                  23rd FLOOR. PAKUWON CENTRE,
                  <br />
                  JL EMBONG MALANG KEDUNGDORO,
                  <br />
                  TEGALSARI KOTA SURABAYA JAWA TIMUR
                </address>
              </div>
              <div className="text-[11px] text-slate-500 font-mono-num pt-2 border-t border-stone-100">
                Mineral Commodities &amp; Mining Resources Trading Desk
              </div>
            </div>

            {/* Industrial Pillar 2: Malaysia */}
            <div className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-xs font-mono-num uppercase tracking-wider text-[#C8102E] font-semibold">
                  KIDRILL
                </span>
                <span className="text-[11px] font-mono-num text-slate-400">PENANG, MALAYSIA</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-600 font-light leading-relaxed">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <address className="not-italic font-mono-num">
                  Penang Port &amp; Industrial Corridor,
                  <br />
                  Penang, Malaysia
                </address>
              </div>
              <div className="text-[11px] text-slate-500 font-mono-num pt-2 border-t border-stone-100">
                Mineral Processing &amp; Smelter Operations Desk · Copper &amp; Industrial Metals
              </div>
            </div>

            {/* Registered Office 2: Vietnam */}
            <div className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-xs font-mono-num uppercase tracking-wider text-[#C8102E] font-semibold">
                  Thunder Mark Vietnam Co., Ltd.
                </span>
                <span className="text-[11px] font-mono-num text-slate-400">VIETNAM</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-600 font-light leading-relaxed">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <address className="not-italic font-mono-num">
                  Golden King Tower,
                  <br />
                  Nguyen Luong Bang St.,
                  <br />
                  Tan Hung Ward, HCM City, Vietnam
                </address>
              </div>
              <div className="text-[11px] text-slate-500 font-mono-num pt-2 border-t border-stone-100">
                Agricultural &amp; Processed Food Products Export Operations Desk
              </div>
            </div>
          </div>

          {/* Right Column: Professional B2B Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-stone-200/90 rounded-2xl p-8 sm:p-12 shadow-sm">
              {status === 'success' ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-6 text-emerald-600">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif-corp font-medium text-slate-900">
                    {t.fields.successTitle}
                  </h3>
                  <p className="mt-3 text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    {t.fields.successMsg}
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-8 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800 rounded transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <span className="text-xs font-mono-num uppercase tracking-widest text-slate-400 block mb-1">
                      COMMERCIAL INTAKE
                    </span>
                    <h2 className="text-2xl font-serif-corp font-medium text-slate-900">
                      {t.formTitle}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {t.formSubtitle}
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        {t.fields.name} <span className="text-[#C8102E]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full Name"
                        className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        {t.fields.company} <span className="text-[#C8102E]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company Name"
                        className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        {t.fields.country} <span className="text-[#C8102E]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="Country"
                        className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Corporate Email */}
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        {t.fields.email} <span className="text-[#C8102E]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@corporation.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        {t.fields.phone}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+82 10 0000 0000"
                        className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Business Interest */}
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        {t.fields.interest}
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded focus:border-slate-900 focus:bg-white focus:outline-none transition-colors text-slate-800"
                      >
                        {t.interests.map((item, idx) => (
                          <option key={idx} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Product / Commodity */}
                  <div className="mt-4">
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      {t.fields.commodity}
                    </label>
                    <input
                      type="text"
                      value={formData.commodity}
                      onChange={(e) => setFormData({ ...formData, commodity: e.target.value })}
                      placeholder="e.g., Copper Cathodes, Industrial Metals, Mineral Commodities, Vietnamese Export Rice"
                      className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="mt-4">
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      {t.fields.message}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify required volume, grade specifications, target delivery terms (FOB/CIF), discharge ports, and timing."
                      className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-xs text-slate-500 font-light flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#C8102E] shrink-0" />
                      <span>Encrypted B2B Corporate Protocol</span>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto px-8 py-3 text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white hover:bg-[#C8102E] rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{status === 'submitting' ? t.fields.submitting : t.fields.submit}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
