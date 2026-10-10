import React, { useState } from 'react';
import { 
  Code2, 
  Brain, 
  Cpu, 
  Layers, 
  Wrench, 
  Check, 
  Sparkles,
  Globe,
  Award,
  Eye,
  ExternalLink,
  X
} from 'lucide-react';
import { skillCategories, languages, softSkills } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Brain: Brain,
  Cpu: Cpu,
  Layers: Layers,
  Wrench: Wrench,
};

export default function SkillsSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="animate-tab-content space-y-12 max-w-6xl mx-auto">
      {/* Section 1 Header: Technical Capabilities */}
      <div className="space-y-8">
        <div className="text-center sm:text-left space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills &amp; Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Compétences techniques développées à travers les projets d'ingénierie à l'ENSA, les stages pratiques et l'auto-formation continue.
          </p>
        </div>

        {/* Grid of Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, idx) => {
            const IconComponent = iconMap[group.icon] || Cpu;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#14141a]/95 border border-[#27272a] hover:border-amber-500/40 hover:bg-[#181822] transition-all duration-300 shadow-card-depth glow-card flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-[#27272a]">
                    <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skill Pills */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                          skill.highlight
                            ? 'bg-amber-500/15 border border-amber-500/40 text-amber-200 hover:border-amber-400'
                            : 'bg-[#0f0f13] border border-[#27272a] text-zinc-300 hover:border-zinc-600'
                        }`}
                      >
                        <span>{skill.name}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/40 text-zinc-400">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#27272a]/60 text-right">
                  <span className="text-[11px] text-zinc-500 font-medium">
                    {group.skills.length} compétences listées
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 2: Dedicated Languages & Soft Skills */}
      <div className="pt-8 border-t border-[#27272a] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              <span>Communication &amp; International</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
              Langues &amp; Compétences Humaines
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Aisance linguistique multiculturelle, attestée par les certifications officielles Rosetta Stone (CEFR B2 en Français et Anglais).
          </p>
        </div>

        {/* Languages 3-column Cards with Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {languages.map((lang, lIdx) => (
            <div
              key={lIdx}
              className="p-5 rounded-2xl bg-[#14141a]/95 border border-[#27272a] hover:border-amber-500/40 hover:bg-[#181822] transition-all duration-300 shadow-card-depth flex flex-col justify-between group"
            >
              <div className="space-y-3.5">
                {/* Header: Flag, Name, Status, Code */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl p-1.5 rounded-xl bg-[#0f0f13] border border-[#27272a] inline-flex items-center justify-center">
                      {lang.flag}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                        {lang.name}
                      </h4>
                      <p className="text-[11px] font-semibold text-amber-400">
                        {lang.status}
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold bg-[#0f0f13] text-zinc-300 border border-[#27272a]">
                    {lang.code}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {lang.description}
                </p>

                {/* Certificate Preview Card if present */}
                {lang.certificate ? (
                  <div className="rounded-xl overflow-hidden border border-[#27272a] bg-[#0c0c10] group/cert hover:border-amber-500/50 transition-all duration-200">
                    <div 
                      className="relative h-28 sm:h-32 w-full overflow-hidden bg-black cursor-pointer"
                      onClick={() => setSelectedCert(lang.certificate)}
                    >
                      <img 
                        src={lang.certificate.image} 
                        alt={lang.certificate.title}
                        className="w-full h-full object-cover object-top filter brightness-95 group-hover/cert:scale-105 group-hover/cert:brightness-100 transition-all duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                      
                      {/* CEFR Level Pill */}
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-amber-500 text-black text-[10px] font-bold tracking-wide shadow flex items-center gap-1">
                        <Award className="w-2.5 h-2.5" />
                        <span>{lang.certificate.cefrLevel}</span>
                      </div>

                      {/* Expand Button */}
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCert(lang.certificate);
                        }}
                        className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-black/80 hover:bg-amber-500 hover:text-black border border-white/10 text-white text-[11px] font-medium flex items-center gap-1.5 backdrop-blur-sm transition-all shadow-sm"
                      >
                        <Eye className="w-3 h-3" />
                        <span>Agrandir</span>
                      </button>
                    </div>

                    {/* Cert Info Banner */}
                    <div className="p-2.5 px-3 flex items-center justify-between text-[11px] bg-[#14141d] border-t border-[#27272a]">
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="font-semibold text-white truncate">{lang.certificate.issuer}</span>
                        <span className="text-zinc-500">•</span>
                        <span className="text-amber-400 font-mono font-medium">{lang.certificate.score}</span>
                      </div>
                      <a
                        href={lang.certificate.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-amber-400 transition-colors p-1"
                        title="Ouvrir en plein écran"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-[#0f0f13] border border-[#27272a] text-[11px] text-zinc-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>Langue Maternelle • Pratique native &amp; bilingue</span>
                  </div>
                )}
              </div>

              {/* Progress Bar & Level */}
              <div className="pt-4 mt-4 border-t border-[#27272a] space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <span>{lang.level}</span>
                    {lang.scoreBadge && (
                      <span className="px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-300 text-[10px] font-mono border border-amber-500/30">
                        {lang.scoreBadge}
                      </span>
                    )}
                  </span>
                  <span className="font-mono text-amber-400 text-[11px] font-bold">{lang.percentage}%</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-[#0f0f13] rounded-full overflow-hidden border border-zinc-800">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-700"
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Banner */}
        <div className="p-6 rounded-2xl bg-[#14141a]/70 border border-[#27272a] space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
            <Sparkles className="w-4 h-4" />
            <span>Soft Skills &amp; Méthodes de Travail</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {softSkills.map((soft, sIdx) => (
              <span
                key={sIdx}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium bg-[#181822] text-slate-200 border border-[#27272a] hover:border-amber-500/40 hover:text-white transition-all shadow-sm"
              >
                <Check className="w-3.5 h-3.5 text-amber-400" />
                <span>{soft}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Full-screen Certificate Image Lightbox Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-[#14141a] rounded-2xl border border-[#27272a] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-[#27272a] flex items-center justify-between bg-[#0f0f13]">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {selectedCert.title}
                </h3>
                <span className="ml-2 px-2 py-0.5 rounded text-xs font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  {selectedCert.cefrLevel}
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-3 sm:p-5 bg-black/60 max-h-[75vh] overflow-auto flex justify-center items-center">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title}
                className="rounded-xl max-h-[65vh] w-auto object-contain shadow-2xl border border-zinc-800"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3.5 border-t border-[#27272a] bg-[#0f0f13] flex items-center justify-between text-xs text-zinc-400">
              <div className="flex items-center gap-2 font-mono text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>{selectedCert.score}</span>
              </div>
              <a 
                href={selectedCert.image} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1 font-medium"
              >
                Ouvrir l'image en pleine résolution <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
