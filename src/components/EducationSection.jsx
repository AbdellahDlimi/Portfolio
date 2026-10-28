import React, { useState } from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2, Building2, Maximize2, X } from 'lucide-react';
import { educations } from '../data/portfolioData';

export default function EducationSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="animate-tab-content space-y-8 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center sm:text-left space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
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
            className="p-6 sm:p-8 rounded-2xl bg-[#14141a]/95 border border-[#27272a] hover:border-amber-500/40 hover:bg-[#181822] transition-all duration-300 shadow-card-depth glow-card"
          >
            {/* Header: Title, Institution, Period */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#27272a]">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  {edu.image ? (
                    <div 
                      onClick={() => setSelectedImage({ url: edu.image, title: edu.institution, caption: edu.imageCaption })}
                      className="w-12 h-12 rounded-xl overflow-hidden border border-amber-500/30 flex-shrink-0 bg-black/40 shadow-sm cursor-pointer hover:border-amber-400 transition-colors"
                      title="Cliquer pour agrandir la photo de l'école"
                    >
                      <img 
                        src={edu.image} 
                        alt={edu.institution} 
                        className="w-full h-full object-cover object-center" 
                      />
                    </div>
                  ) : (
                    <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400 flex-shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-amber-400">
                      {edu.institution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Period Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f0f13] border border-[#27272a] text-zinc-300 text-xs font-medium self-start sm:self-center flex-shrink-0">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                <span>{edu.period}</span>
              </div>
            </div>

            {/* Body: Details with Photo side-by-side */}
            <div className="flex flex-col md:flex-row gap-6 items-start mt-4">
              {/* Left Column: Honors & Academic Modules */}
              <div className="flex-1 space-y-4 w-full">
                {/* Honors Badge */}
                {edu.honors && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>{edu.honors}</span>
                  </div>
                )}

                {/* Academic Details / Research */}
                <ul className="space-y-2.5">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: School Photo next to the formation */}
              {edu.image && (
                <div className="w-full md:w-72 lg:w-80 flex-shrink-0">
                  <div
                    onClick={() => setSelectedImage({ url: edu.image, title: edu.institution, caption: edu.imageCaption })}
                    className="group/img relative rounded-xl overflow-hidden border border-[#27272a] hover:border-amber-500/50 bg-black/40 shadow-lg cursor-pointer transition-all duration-300"
                  >
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      className="w-full h-44 sm:h-48 md:h-52 object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                      loading="lazy"
                    />
                    {/* Overlay with Caption & Zoom Icon */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-white/95">
                          <Building2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                          <span className="truncate">{edu.imageCaption || "Campus ENSA Agadir"}</span>
                        </div>
                        <span className="p-1 rounded-md bg-black/60 text-amber-400 backdrop-blur-sm border border-amber-500/30 group-hover/img:bg-amber-500 group-hover/img:text-black transition-colors flex-shrink-0">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-zinc-500 text-center mt-1.5">
                    Cliquer sur la photo pour agrandir
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for School Photo */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#14141a] rounded-2xl border border-amber-500/30 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#27272a]">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm sm:text-base font-bold text-white truncate">
                  {selectedImage.caption || selectedImage.title}
                </h4>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative bg-black/60 max-h-[75vh] flex items-center justify-center p-2">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-[#0f0f13] border-t border-[#27272a] text-center">
              <p className="text-xs text-zinc-400">
                {selectedImage.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
