import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Layers,
  GraduationCap
} from 'lucide-react';
import { certifications, certificateCategories } from '../data/portfolioData';

export default function AchievementsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCerts = selectedCategory === 'all'
    ? certifications
    : certifications.filter((c) => c.category === selectedCategory);

  const getIssuerBadge = (issuer) => {
    switch (issuer) {
      case 'Udemy':
        return {
          bg: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
          dot: 'bg-purple-400'
        };
      case 'DataCamp':
        return {
          bg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
          dot: 'bg-emerald-400'
        };
      case '365 Data Science':
        return {
          bg: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
          dot: 'bg-blue-400'
        };
      default:
        return {
          bg: 'bg-slate-700/40 text-slate-300 border-slate-600',
          dot: 'bg-slate-400'
        };
    }
  };

  return (
    <div className="animate-tab-content space-y-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" />
          <span>Accréditations &amp; Savoir-faire</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Certifications &amp; Formations
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Parcours rigoureux d'auto-formation et validation de compétences en Python avancé, Data Engineering, Cloud, Bases de données et Intelligence Artificielle.
            </p>
          </div>

          {/* Quick Metrics Banner */}
          <div className="flex items-center gap-6 p-3 px-5 rounded-2xl bg-[#111827]/80 border border-slate-800 backdrop-blur-sm self-start md:self-auto">
            <div>
              <span className="block text-xl font-bold text-white tracking-tight">13</span>
              <span className="text-[11px] text-slate-400 font-medium">Certificats</span>
            </div>
            <div className="h-7 w-px bg-slate-800" />
            <div>
              <span className="block text-xl font-bold text-white tracking-tight">3</span>
              <span className="text-[11px] text-slate-400 font-medium">Plateformes</span>
            </div>
            <div className="h-7 w-px bg-slate-800" />
            <div>
              <span className="block text-xl font-bold text-emerald-400 tracking-tight">100%</span>
              <span className="text-[11px] text-slate-400 font-medium">Vérifiables</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-800/80">
        {certificateCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count = cat.id === 'all' 
            ? certifications.length 
            : certifications.filter((c) => c.category === cat.id).length;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-glow-blue'
                  : 'bg-[#111827] text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isActive ? 'bg-blue-700 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCerts.map((cert) => {
          const badgeStyle = getIssuerBadge(cert.issuer);

          return (
            <div
              key={cert.id}
              className={`group relative rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 border ${
                cert.highlight 
                  ? 'bg-[#111827]/90 border-blue-500/30 hover:border-blue-500/60 hover:shadow-glow-blue' 
                  : 'bg-[#111827]/60 border-slate-800 hover:border-slate-700 hover:bg-[#111827]'
              }`}
            >
              {/* Highlight ribbon for flagship certs */}
              {cert.highlight && (
                <div className="absolute top-3.5 right-3.5 flex items-center gap-1 text-[10px] font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                  <Sparkles className="w-3 h-3" />
                  <span>Majeure</span>
                </div>
              )}

              <div className="space-y-3">
                {/* Issuer Badge & Metadata */}
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-xs font-semibold border ${badgeStyle.bg}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${badgeStyle.dot}`} />
                    {cert.issuer}
                  </span>
                  <span className="text-xs text-slate-500">•</span>
                  <span className="text-xs text-slate-400 font-mono">{cert.date}</span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-2 leading-snug">
                    {cert.title}
                  </h3>
                  {cert.instructor && (
                    <p className="text-xs text-slate-400 mt-1">
                      Par <span className="text-slate-300">{cert.instructor}</span>
                    </p>
                  )}
                </div>

                {/* Skills tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                    {cert.duration ? cert.duration : 'Vérifié'}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 truncate max-w-[130px]" title={cert.credentialId}>
                    ID: {cert.credentialId}
                  </span>
                </div>

                {/* Action: Open PDF */}
                <div className="flex items-center gap-1.5">
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                      title="Vérifier sur la plateforme"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {cert.pdf && (
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-600/20 text-blue-300 hover:bg-blue-600 hover:text-white border border-blue-500/30 transition-all duration-200"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Verification footer note */}
      <div className="p-4 rounded-2xl bg-[#111827]/40 border border-slate-800/60 flex items-center gap-3 text-slate-400 text-xs sm:text-sm">
        <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
        <span>
          Tous les diplômes et certificats ci-dessus ont été passés et validés avec succès par <strong>Abdellah Dlimi</strong>. Cliquez sur le bouton <strong>PDF</strong> pour afficher le document officiel original.
        </span>
      </div>
    </div>
  );
}
