import React from 'react';
import { 
  Mail, 
  Terminal, 
  Trophy, 
  Brain,
  Download, 
  ExternalLink,
  Code2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  PyPiIcon, 
  CodeforcesIcon 
} from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function HeroSection({ onContactClick }) {
  const socials = [
    {
      name: 'LinkedIn',
      url: personalInfo.socials.linkedin,
      icon: <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />,
    },
    {
      name: 'GitHub',
      url: personalInfo.socials.github,
      icon: <GithubIcon className="w-4 h-4 text-white" />,
    },
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full z-10">
        
        {/* Left Column: Bio & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium backdrop-blur-sm transition-all hover:bg-amber-500/15 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="available-pulse absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <span>{personalInfo.status}</span>
          </div>

          {/* Large Name */}
          <div className="space-y-1">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-none">
              Abdellah
              <span className="block text-gradient mt-1">Dlimi</span>
            </h1>
          </div>

          {/* Subtitle / Roles */}
          <p className="text-base sm:text-lg lg:text-xl text-[#a1a1aa] font-normal max-w-2xl leading-relaxed">
            <span className="text-slate-100 font-semibold">Big Data</span>
            <span className="mx-2 text-amber-400 font-bold">•</span>
            <span className="text-slate-200">Data Science</span>
            <span className="mx-2 text-yellow-400 font-bold">•</span>
            <span className="text-slate-100 font-semibold">Artificial Intelligence</span>
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Action Row: Socials + Primary CTA */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
            
            {/* Primary CTA Contact Me */}
            <button
              onClick={onContactClick}
              id="hero-contact-btn"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm sm:text-base shadow-glow-amber transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
            >
              <Mail className="w-4 h-4 transition-transform group-hover:rotate-12" />
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Social Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#14141a]/90 hover:bg-[#1c1c24] border border-[#27272a] hover:border-amber-500/40 text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg backdrop-blur-sm"
                >
                  {s.icon}
                  <span>{s.name}</span>
                </a>
              ))}
            </div>

          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-4 flex flex-wrap gap-8 sm:gap-14 border-t border-[#27272a] mt-6">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Avatar Portrait with Pulsing Glow & Floating Badges */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          
          {/* Ambient Blurred Halo Blob */}
          <div 
            className="absolute w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] rounded-full bg-gradient-to-tr from-amber-500/25 via-amber-600/20 to-yellow-500/15 blur-3xl -z-10 animate-pulse-slow"
            aria-hidden="true"
          />

          {/* Circular Container with double glowing border */}
          <div className="relative group">
            <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full p-1.5 bg-gradient-to-br from-amber-500/50 via-slate-800 to-amber-600/40 shadow-card-depth relative">
              <div className="w-full h-full rounded-full overflow-hidden border border-slate-700/80 bg-[#121217]">
                <img
                  src="/avatar.jpeg"
                  alt="Abdellah Dlimi"
                  className="w-full h-full object-cover object-[center_22%] filter brightness-[1.02] contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>

            {/* Orbiting Badge 1: AI Project */}
            <div className="absolute -top-3 -right-2 sm:top-4 sm:-right-4 bg-[#14141a]/95 border border-amber-500/40 rounded-xl px-3.5 py-2 shadow-glow-amber backdrop-blur-md flex items-center gap-2.5 animate-float-slow">
              <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                <Brain className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Deep Learning</p>
                <p className="text-xs sm:text-sm font-bold text-white">VibAE-Monitor</p>
              </div>
            </div>

            {/* Orbiting Badge 2: Stage SRM */}
            <div className="absolute -bottom-4 -left-2 sm:bottom-6 sm:-left-6 bg-[#14141a]/95 border border-amber-500/40 rounded-xl px-3.5 py-2 shadow-glow-amber backdrop-blur-md flex items-center gap-2.5 animate-float-slow [animation-delay:2s]">
              <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                <Code2 className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Stage Technique</p>
                <p className="text-xs sm:text-sm font-bold text-white">SRM Souss-Massa</p>
              </div>
            </div>

            {/* Orbiting Badge 3: TrustPool R&D */}
            <div className="hidden sm:flex absolute -bottom-4 right-4 bg-[#14141a]/95 border border-amber-500/40 rounded-xl px-3.5 py-2 text-xs text-slate-300 items-center gap-2.5 backdrop-blur-md shadow-glow-amber">
              <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <p className="text-[10px] text-amber-300 font-semibold uppercase tracking-wider">Stage R&amp;D (2 mois)</p>
                <p className="text-xs sm:text-sm font-bold text-white">TrustPool • P2P &amp; IA</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
