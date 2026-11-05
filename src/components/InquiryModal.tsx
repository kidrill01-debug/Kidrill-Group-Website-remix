import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { X, CheckCircle, Mail, Phone, MapPin, Send, Shield } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  initialCommodity?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  language,
  initialCommodity = '',
}) => {
  const t = translations[language].contact;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    interest: t.interests[0],
    commodity: initialCommodity || '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialCommodity) {
      setFormData((prev) => ({ ...prev, commodity: initialCommodity }));
    }
  }, [initialCommodity]);

  // Lock body scroll when modal is open
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

  if (!isOpen) return null;

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
    }, 900);
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
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl text-slate-900 overflow-hidden my-8">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
            <span className="text-xs font-mono-num uppercase tracking-widest text-slate-600 font-semibold">
              Official B2B Commercial Inquiry
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

        {status === 'success' ? (
          <div className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[#C8102E]/10 border border-[#C8102E]/30 flex items-center justify-center mx-auto mb-6 text-[#C8102E]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif-corp font-medium text-slate-950">
              {t.fields.successTitle}
            </h3>
            <p className="mt-3 text-slate-600 max-w-lg mx-auto text-sm leading-relaxed">
              {t.fields.successMsg}
            </p>

            <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-lg max-w-md mx-auto text-xs text-slate-600 text-left space-y-2">
              <div className="flex items-center gap-2 text-slate-900">
                <Shield className="w-4 h-4 text-[#C8102E] shrink-0" />
                <span className="font-medium">Direct Trade Desk Routing</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>total@datmv.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>+62 822 64973015</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="mt-8 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-slate-950 text-white hover:bg-[#C8102E] rounded transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-serif-corp text-slate-950">
                {t.formTitle}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                {t.formSubtitle}
              </p>
            </div>

            {errorMessage && (
              <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded">
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
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded focus:border-[#C8102E] focus:outline-none text-slate-900 placeholder-slate-400"
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
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded focus:border-[#C8102E] focus:outline-none text-slate-900 placeholder-slate-400"
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
                  placeholder="Country / Region"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded focus:border-[#C8102E] focus:outline-none text-slate-900 placeholder-slate-400"
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
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded focus:border-[#C8102E] focus:outline-none text-slate-900 placeholder-slate-400"
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
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded focus:border-[#C8102E] focus:outline-none text-slate-900 placeholder-slate-400"
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
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded focus:border-[#C8102E] focus:outline-none text-slate-900"
                >
                  {t.interests.map((item, idx) => (
                    <option key={idx} value={item} className="bg-white text-slate-900">
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
                placeholder="e.g., Copper Cathodes (KIDRILL), Industrial Metals (KIDRILL), Mineral Commodities (KIDRILL METAL MINING), Rice, Coffee"
                className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded focus:border-[#C8102E] focus:outline-none text-slate-900 placeholder-slate-400"
              />
            </div>

            {/* Message */}
            <div className="mt-4">
              <label className="block text-xs font-medium text-slate-700 mb-1.5">
                {t.fields.message}
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Target volume (MT / containers), preferred delivery term (FOB / CIF), destination port, technical requirements..."
                className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded focus:border-[#C8102E] focus:outline-none text-slate-900 placeholder-slate-400"
              />
            </div>

            {/* Direct Verification Contacts */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#C8102E]" />
                  total@datmv.com
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C8102E]" />
                  +62 822 64973015
                </span>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-slate-950 text-white hover:bg-[#C8102E] rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{status === 'submitting' ? t.fields.submitting : t.fields.submit}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
