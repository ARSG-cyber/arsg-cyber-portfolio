import React from 'react';
import { ArrowRight, GraduationCap, Layers, Compass, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About = ({ onOpenBio }) => {
  return (
    <section id="about" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400 font-heading">
            About Me
          </span>
        </div>

        {/* Three-column / 3-part layout matching Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Part 1: Who I Am (Left) */}
          <div className="lg:col-span-4 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-100 tracking-tight">
              Who I Am
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {personalInfo.aboutParagraph}
            </p>

            <button
              onClick={onOpenBio}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400/50 text-slate-200 hover:text-cyan-300 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer group shadow-sm"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-cyan-400" />
            </button>
          </div>

          {/* Part 2: Information Card (Middle) */}
          <div className="lg:col-span-4">
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/90 border border-slate-800/90 hover:border-cyan-500/30 shadow-xl backdrop-blur-md transition-all duration-300 space-y-5">
              
              {/* Item 1: Education */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Education</h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-100 mt-0.5">Software Engineering at GCUF</p>
                </div>
              </div>

              {/* Item 2: Current Focus */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Current Focus</h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-100 mt-0.5">{personalInfo.currentFocus}</p>
                </div>
              </div>

              {/* Item 3: Interests */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Interests</h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-100 mt-0.5">{personalInfo.interests}</p>
                </div>
              </div>

              {/* Item 4: Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Location</h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-100 mt-0.5">{personalInfo.location}</p>
                </div>
              </div>

            </div>
          </div>

          {/* Part 3: Technology Platform Illustration (Right) - seamlessly blended */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Soft circular glowing halo */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-600/15 to-purple-600/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative w-full">
                <img
                  src="/assets/about_platform_blended.png"
                  alt="Tech Stack 3D Platform with Laptop and Floating React, Node, MongoDB, Express neon badges"
                  className="w-full h-auto object-contain select-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
