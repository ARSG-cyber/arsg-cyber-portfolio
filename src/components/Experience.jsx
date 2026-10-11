import React from 'react';
import { Calendar, GraduationCap, Code2, Award, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400 font-heading">
              Journey & Milestones
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-100 tracking-tight">
            Academic & Tech Experience
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experienceData.map((item, index) => (
            <div
              key={item.role}
              className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/90 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header Period & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {item.badge}
                  </span>
                </div>

                {/* Role & Org */}
                <h3 className="text-lg font-heading font-bold text-slate-100 mb-1">
                  {item.role}
                </h3>
                <p className="text-xs text-slate-400 font-medium mb-4">
                  {item.organization}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-slate-800/60">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                  Key Competencies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800/60 text-slate-300 border border-slate-700/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
