import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { educations } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <div className="animate-tab-content space-y-8 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center sm:text-left space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Education &amp; Credentials
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Rigorous foundation in computer science theory, advanced mathematics, and artificial intelligence systems.
        </p>
      </div>

      {/* Education Cards */}
      <div className="space-y-6">
        {educations.map((edu) => (
          <div 
            key={edu.id}
            className="p-6 sm:p-8 rounded-2xl bg-[#111827] border border-[#1e293b] hover:border-slate-700/80 hover:bg-[#161f30] transition-all duration-300 shadow-card-depth glow-card"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-purple-500/15 text-purple-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-purple-400">
                      {edu.institution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Period Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f172a] border border-[#1e293b] text-slate-300 text-xs font-medium self-start sm:self-center">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{edu.period}</span>
              </div>
            </div>

            {/* Honors Badge */}
            {edu.honors && (
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>{edu.honors}</span>
              </div>
            )}

            {/* Academic Details / Research */}
            <ul className="mt-4 space-y-2.5">
              {edu.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
