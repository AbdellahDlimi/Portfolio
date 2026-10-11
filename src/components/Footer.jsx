import React from 'react';
import { ArrowUp, Heart, Coffee } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#27272a] bg-[#09090b] py-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand info */}
        <div className="flex items-center gap-3">
          <img 
            src="/logo.jpg" 
            alt="AD Logo" 
            className="w-8 h-8 rounded-lg object-cover ring-1 ring-amber-500/40 shadow-sm"
          />
          <div className="flex flex-col items-center sm:items-start gap-0.5">
            <p className="text-slate-200 font-semibold text-sm">
              {personalInfo.name} — Portfolio
            </p>
            <p className="text-slate-500 text-[11px]">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>

        {/* Note: Built with love & coffee */}
        <div className="flex items-center gap-1.5 text-slate-400 text-xs">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          <span>and lots of</span>
          <Coffee className="w-3.5 h-3.5 text-amber-500" />
          <span>for high-performance engineering.</span>
        </div>

        {/* Back to top & links */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
