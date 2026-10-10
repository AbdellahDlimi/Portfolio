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
                  ? 'bg-blue-600 text-white shadow-glow-blue'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
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
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium text-blue-400 hover:text-white hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-500/40 transition-all cursor-pointer whitespace-nowrap"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Contact</span>
        </button>
      </nav>
    </div>
  );
}
