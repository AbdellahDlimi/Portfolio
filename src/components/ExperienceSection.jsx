import React from 'react';
import { CheckCircle2, Building2, MapPin, Calendar, Briefcase } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <div className="animate-tab-content space-y-8 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center sm:text-left space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Trajectory</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Work Experience
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Proven history in architecting high-scale distributed systems and optimizing deep learning inference pipelines.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l border-[#27272a] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative group">
            
            {/* Timeline node dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-[#09090b] border-2 border-amber-500 group-hover:scale-125 group-hover:border-amber-400 group-hover:bg-amber-500/30 transition-all duration-300 shadow-glow-amber" />

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#14141a]/95 border border-[#27272a] hover:border-amber-500/40 hover:bg-[#181822] transition-all duration-300 shadow-card-depth glow-card">
              
              {/* Header: Company, Role, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#27272a]">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.company}
                    </h3>
                    {exp.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-amber-400 mt-1 flex items-center gap-2">
                    <span>{exp.role}</span>
                    {exp.location && (
                      <>
                        <span className="text-zinc-600">•</span>
                        <span className="text-xs text-zinc-400 font-normal flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </>
                    )}
                  </p>
                </div>

                {/* Date Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f0f13] border border-[#27272a] text-zinc-300 text-xs font-medium self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* High-level summary */}
              <p className="mt-4 text-sm text-slate-300 leading-relaxed font-normal">
                {exp.description}
              </p>

              {/* Bulleted Achievements */}
              <ul className="mt-5 space-y-3.5">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 group-hover/item:text-amber-300 transition-colors" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed group-hover/item:text-slate-100 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
