import React, { useState } from 'react';
import { Target } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400 font-heading">
                My Skills
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-100 tracking-tight">
              Technologies & Tools
            </h2>
          </div>

          {/* Right side focus pill badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 backdrop-blur-md shadow-sm">
            <div className="w-6 h-6 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center flex-shrink-0">
              <Target className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <span className="text-slate-400">Currently focusing on: </span>
              <span className="font-semibold text-cyan-300">JavaScript, React, Node.js, Express.js, MongoDB</span>
            </div>
          </div>
        </div>

        {/* 12 Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/90 backdrop-blur-md transition-all duration-300 cursor-pointer shadow-sm hover:-translate-y-1"
              style={{
                boxShadow:
                  hoveredSkill === skill.name
                    ? `0 10px 30px -10px ${skill.glowColor}, 0 0 15px 0 ${skill.glowColor}`
                    : 'none',
              }}
            >
              {/* Icon Container with authentic SVG */}
              <div
                className="w-12 h-12 mb-3 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
                dangerouslySetInnerHTML={{ __html: skill.svg }}
              />

              {/* Skill Label */}
              <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors text-center">
                {skill.name}
              </span>

              {/* Hover indicator glow corner */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
