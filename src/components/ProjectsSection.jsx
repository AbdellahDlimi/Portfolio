import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Terminal, 
  Sparkles, 
  Layers,
  ArrowUpRight 
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projects, projectCategories } from '../data/portfolioData';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="animate-tab-content space-y-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>Réalisations &amp; Projets Techniques</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projets Réels &amp; Ingénierie
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Modèles de Deep Learning appliqués, bases de données (Oracle DB &amp; BDA), pipelines ETL et plateformes logicielles complètes.
          </p>
        </div>

        {/* Secondary Sub-navigation Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#14141a] border border-[#27272a]">
          {projectCategories.map((cat) => {
            const isCatActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isCatActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-glow-amber'
                    : 'text-slate-400 hover:text-white hover:bg-[#1e1e26]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-2xl bg-[#14141a]/95 border border-[#27272a] hover:border-amber-500/40 hover:bg-[#181822] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-card-depth glow-card"
          >
            {/* Top row: Category tag + Links */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-zinc-800/90 text-zinc-300 border border-zinc-700/60">
                  {project.categoryName}
                </span>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-zinc-800/60 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/25 text-amber-400 hover:text-amber-300 transition-colors"
                      aria-label={`${project.title} live demo or details`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors tracking-tight">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-xs font-semibold text-amber-400/90 mt-0.5">
                  {project.subtitle}
                </p>
              )}

              {/* Project Badge / Period */}
              {project.badge && (
                <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-800/90 text-zinc-300 border border-zinc-700/50">
                  <span>{project.badge}</span>
                </div>
              )}

              {/* Stat highlight if present */}
              {project.stats && (
                <p className="text-xs font-semibold text-amber-400 mt-2 flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>{project.stats}</span>
                </p>
              )}

              {/* Description */}
              <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                {project.description}
              </p>

              {/* Highlights bullet points if available */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {project.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="text-xs text-slate-400 flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Bottom: Tags */}
            <div className="mt-6 pt-4 border-t border-[#27272a] flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#0f0f13] text-zinc-400 border border-[#27272a] group-hover:border-zinc-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
