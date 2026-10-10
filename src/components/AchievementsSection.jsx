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
          bg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
          dot: 'bg-amber-400'
        };
      default:
        return {
          bg: 'bg-zinc-800 text-zinc-300 border-zinc-700',
          dot: 'bg-zinc-400'
        };
    }
  };

  return (
    <div className="animate-tab-content space-y-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" />
          <span>Accréditations &amp; Savoir-faire</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Certifications &amp; Formations
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Parcours rigoureux d'auto-formation et validation de compétences techniques en Python, Data Engineering, Cloud, Bases de données et Intelligence Artificielle.
            </p>
          </div>

          {/* Quick Metrics Banner */}
          <div className="flex items-center gap-6 p-3 px-5 rounded-2xl bg-[#14141a]/90 border border-[#27272a] backdrop-blur-sm self-start md:self-auto shadow-sm">
            <div>
              <span className="block text-xl font-bold text-white tracking-tight">13</span>
              <span className="text-[11px] text-slate-400 font-medium">Certificats</span>
            </div>
            <div className="h-7 w-px bg-[#27272a]" />
            <div>
              <span className="block text-xl font-bold text-white tracking-tight">3</span>
              <span className="text-[11px] text-slate-400 font-medium">Plateformes</span>
            </div>
            <div className="h-7 w-px bg-[#27272a]" />
            <div>
              <span className="block text-xl font-bold text-amber-400 tracking-tight">100%</span>
              <span className="text-[11px] text-slate-400 font-medium">Vérifiables</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#27272a]">
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
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-glow-amber'
                  : 'bg-[#14141a] text-slate-400 hover:text-white hover:bg-[#1c1c24] border border-[#27272a]'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isActive ? 'bg-amber-700 text-white' : 'bg-zinc-800 text-slate-400'
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
                  ? 'bg-[#14141a]/95 border-amber-500/35 hover:border-amber-400 hover:shadow-glow-amber' 
                  : 'bg-[#14141a]/60 border-[#27272a] hover:border-amber-500/30 hover:bg-[#14141a]'
              }`}
            >
              {/* Highlight ribbon for flagship certs */}
              {cert.highlight && (
                <div className="absolute top-3.5 right-3.5 flex items-center gap-1 text-[10px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                  <Sparkles className="w-3 h-3" />
                  <span>Majeure</span>
                </div>
              )}

              <div className="space-y-3">
                {/* Certificate Visual Image Preview */}
                {cert.image && (
                  <div className="relative rounded-xl overflow-hidden border border-[#27272a] bg-black/40 aspect-[16/10] group/img">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                      loading="lazy"
                    />
                    {/* Hover Overlay */}
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-semibold text-white backdrop-blur-[2px]"
                    >
                      <FileText className="w-4 h-4 text-amber-400" />
                      <span>Consulter le document</span>
                    </a>
                  </div>
                )}

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
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug">
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
                        className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 mt-4 border-t border-[#27272a] flex items-center justify-between gap-2">
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
                      className="p-2 rounded-xl text-slate-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 transition-colors"
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-500/15 text-amber-300 hover:bg-amber-500 hover:text-slate-950 border border-amber-500/30 transition-all duration-200"
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
      <div className="p-4 rounded-2xl bg-[#14141a]/60 border border-[#27272a] flex items-center gap-3 text-slate-400 text-xs sm:text-sm">
        <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
        <span>
          Tous les diplômes et certificats ci-dessus ont été passés et validés avec succès par <strong>Abdellah Dlimi</strong>. Cliquez sur le bouton <strong>PDF</strong> pour afficher le document officiel original.
        </span>
      </div>
    </div>
  );
}
