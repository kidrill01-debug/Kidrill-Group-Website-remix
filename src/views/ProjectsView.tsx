import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import {
  Lock,
  ArrowRight,
  Building2,
  MapPin,
  Activity
} from 'lucide-react';

interface ProjectsViewProps {
  language: Language;
  onOpenInquiry: (topic?: string) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  language,
  onOpenInquiry,
}) => {
  const t = translations[language].projects;

  const projectPipelines = [
    {
      id: 'pipeline-01',
      category: t.categories.mineral,
      titleEn: 'East Kalimantan Energy & Mineral Sourcing Initiative',
      stageEn: 'Supplier Due Diligence & Trade Structuring',
      descriptionEn: 'Evaluating potential commercial offtake arrangements with authorized Indonesian coal and mineral producers to supply industrial consumers under KIDRILL METAL MINING.',
      entityEn: 'KIDRILL METAL MINING (PT PMA Kidrill Metal Mining)',
      hub: 'Surabaya Desk · East Java, Indonesia',
    },
    {
      id: 'pipeline-02',
      category: t.categories.commodity,
      titleEn: 'Penang Smelter Processing & Copper Cathode Corridor',
      stageEn: 'Smelter Offtake Protocol & Metal Distribution',
      descriptionEn: 'Connecting mineral processing and smelter output in Penang, Malaysia with industrial manufacturers requiring copper cathodes, concentrates and non-ferrous alloys under KIDRILL.',
      entityEn: 'KIDRILL (Mineral Processing & Smelter)',
      hub: 'Penang Hub · Penang Port, Malaysia',
    },
    {
      id: 'pipeline-03',
      category: t.categories.export,
      titleEn: 'Mekong Delta Agricultural Traceability & Export Corridor',
      stageEn: 'Milling Quality & Phytosanitary Standard Harmonization',
      descriptionEn: 'Collaborating with accredited rice milling facilities in Southern Vietnam to satisfy strict export phytosanitary and packaging standards for East Asian and European food distributors.',
      entityEn: 'Thunder Mark Vietnam Co., Ltd.',
      hub: 'Ho Chi Minh City Desk · Vietnam',
    },
    {
      id: 'pipeline-04',
      category: t.categories.partnership,
      titleEn: 'Processed Food Products & Origin Agricultural Export Network',
      stageEn: 'Retail Packaging & Compliance Harmonization',
      descriptionEn: 'Developing international distribution channels and private-label packaging for shelf-stable processed food products and origin agricultural specialties from Vietnam.',
      entityEn: 'Thunder Mark Vietnam Co., Ltd.',
      hub: 'Ho Chi Minh City Desk · Vietnam',
    }
  ];

  return (
    <div className="w-full pt-28 pb-20 bg-[#FAF9F6]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-xs font-mono-num uppercase tracking-[0.25em] text-[#C8102E] mb-3 font-semibold">
          {t.tag}
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-corp font-normal tracking-tight text-slate-900 leading-[1.12]">
          {t.title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
          {t.subtitle}
        </p>

        {/* Institutional Confidentiality Notice (Bright Light Theme) */}
        <div className="mt-8 p-6 bg-slate-50 border border-slate-200 text-slate-900 rounded-2xl flex items-start gap-4 max-w-3xl shadow-xs">
          <Lock className="w-5 h-5 text-[#C8102E] shrink-0 mt-0.5" />
          <div className="space-y-1.5 text-xs">
            <span className="font-semibold text-[#C8102E] uppercase tracking-wider block font-mono-num">
              Confidentiality & Due Diligence Notice
            </span>
            <p className="text-slate-600 leading-relaxed font-light">
              {t.confidentialNotice}
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid: Clean, image-free professional two-column layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectPipelines.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-9 flex flex-col justify-between hover:shadow-xl hover:border-slate-300 transition-all duration-300 group shadow-xs"
            >
              <div className="space-y-5">
                {/* Header Tag Bar */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100 text-xs font-mono-num">
                  <span className="text-[#C8102E] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded text-[11px] bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                    {t.comingSoonTag}
                  </span>
                </div>

                {/* Company & Operational Desk Attribution */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono-num text-slate-600">
                  <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
                    {project.entityEn}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    {project.hub}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif-corp font-medium text-slate-950 leading-snug group-hover:text-[#C8102E] transition-colors">
                  {project.titleEn}
                </h3>

                {/* Execution Phase Box */}
                <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl text-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 font-mono-num uppercase tracking-wider text-slate-400 text-[10px] font-semibold">
                    <Activity className="w-3 h-3 text-[#C8102E]" />
                    <span>Execution Phase / Current Milestone</span>
                  </div>
                  <div className="text-slate-900 font-medium text-xs sm:text-sm">
                    {project.stageEn}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  {project.descriptionEn}
                </p>
              </div>

              {/* Action Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-mono-num">
                  Operational Desk: {project.hub}
                </span>
                <button
                  onClick={() => onOpenInquiry(`Project Dossier: ${project.titleEn}`)}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white hover:bg-[#C8102E] rounded transition-colors cursor-pointer shadow-xs inline-flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                  <span>Request Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
