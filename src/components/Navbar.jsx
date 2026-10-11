import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Cpu, 
  Award, 
  Send 
} from 'lucide-react';

export const tabs = [
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'achievements', label: 'Certifications', icon: Award },
];

export default function Navbar({ activeTab, onSelectTab, onContactClick }) {
  return (
    <div className="sticky top-4 z-40 w-full px-4 flex justify-center items-center pointer-events-none">
      <nav 
        aria-label="Main Navigation Tabs"
        className="pointer-events-auto max-w-full overflow-x-auto no-scrollbar rounded-2xl glass-nav p-1.5 shadow-nav-depth flex items-center gap-1 sm:gap-1.5 transition-all duration-300"
      >
        {/* Brand Logo Avatar */}
        <a 
          href="#hero" 
          className="flex items-center gap-2 pl-1 pr-1.5 py-1 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
          title="Abdellah Dlimi"
        >
          <img 
            src="/logo.jpg" 
            alt="AD Logo" 
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg object-cover ring-1 ring-amber-500/50 group-hover:ring-amber-400 transition-all shadow-glow-amber"
          />
        </a>

        {/* Separator */}
        <div className="h-5 w-px bg-slate-800 mx-0.5" />

        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              onClick={() => onSelectTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-250 cursor-pointer whitespace-nowrap select-none ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-glow-amber'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}

        {/* Separator */}
        <div className="h-5 w-px bg-slate-800 mx-1 hidden sm:block" />

        {/* Direct Contact Button in Nav */}
        <button
          onClick={onContactClick}
          id="nav-contact-btn"
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-amber-400 hover:text-slate-950 hover:bg-amber-500 border border-amber-500/30 hover:border-amber-400 transition-all cursor-pointer whitespace-nowrap shadow-sm"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Contact</span>
        </button>
      </nav>
    </div>
  );
}
