import React from 'react';
import { 
  Code2, 
  Brain, 
  Cpu, 
  Layers, 
  Wrench, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Brain: Brain,
  Cpu: Cpu,
  Layers: Layers,
  Wrench: Wrench,
};

export default function SkillsSection() {
  return (
    <div className="animate-tab-content space-y-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center sm:text-left space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
          <Cpu className="w-3.5 h-3.5" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Technical Skills &amp; Stack
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          A balanced foundation spanning low-level bare-metal programming, deep learning acceleration, and distributed backends.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((group, idx) => {
          const IconComponent = iconMap[group.icon] || Cpu;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#111827] border border-[#1e293b] hover:border-blue-500/30 hover:bg-[#161f30] transition-all duration-300 shadow-card-depth glow-card flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                  <div className="p-2 rounded-xl bg-blue-500/15 text-blue-400">
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
                          ? 'bg-blue-950/60 border border-blue-500/40 text-blue-200 hover:border-blue-400'
                          : 'bg-[#0f172a] border border-[#1e293b] text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <span>{skill.name}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/40 text-slate-400">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/60 text-right">
                <span className="text-[11px] text-slate-500 font-medium">
                  {group.skills.length} skills listed
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
