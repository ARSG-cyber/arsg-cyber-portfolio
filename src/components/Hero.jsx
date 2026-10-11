import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon, 
  MailIcon, 
  GraduationCapIcon, 
  SparklesIcon, 
  GithubIcon, 
  LinkedinIcon, 
  TwitterIcon 
} from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Hero = ({ onOpenContact }) => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[96vh] pt-24 pb-12 lg:pt-28 lg:pb-16 flex flex-col justify-between overflow-hidden bg-[#040814]"
    >
      {/* Background Neon Ambient Halo Arcs & Lighting Layers */}
      <div className="absolute -top-40 right-[8%] w-[68rem] h-[68rem] rounded-full border-[1.5px] border-cyan-400/25 blur-[1px] pointer-events-none transform -rotate-12 opacity-80" />
      <div className="absolute top-10 right-[10%] w-[52rem] h-[52rem] bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-purple-600/25 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[35rem] h-[35rem] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[38rem] h-[38rem] bg-purple-700/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber Grid Texture */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      {/* Wide Fluid Hero Container - Takes Full Screen Width on Large Screens */}
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Introduction & CTAs (5 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-start space-y-6 z-20 lg:pr-2"
          >
            {/* Student Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-medium tracking-wide shadow-[0_0_25px_rgba(56,189,248,0.25)] backdrop-blur-xl"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400">
                <GraduationCapIcon className="w-3.5 h-3.5" />
              </span>
              <span>{personalInfo.role}</span>
            </motion.div>

            {/* Headline with High Contrast & Radiant Gradient */}
            <div className="space-y-1.5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-100 tracking-tight">
                Hi, I'm
              </h2>
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-heading font-extrabold tracking-tight leading-[1.08]">
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(56,189,248,0.4)]">
                  {personalInfo.name}
                </span>
              </h1>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-300/95 leading-relaxed max-w-xl font-normal">
              {personalInfo.bioShort}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                id="view-projects-btn"
                className="btn-primary-glow inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-white font-medium text-sm sm:text-base cursor-pointer group shadow-[0_0_35px_rgba(79,70,229,0.5)] hover:shadow-[0_0_45px_rgba(56,189,248,0.6)] transition-all"
              >
                <span>View My Projects</span>
                <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </a>

              <button
                onClick={onOpenContact}
                id="hero-contact-btn"
                className="btn-secondary-glow inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-slate-200 hover:text-white font-medium text-sm sm:text-base cursor-pointer shadow-md backdrop-blur-md"
              >
                <MailIcon className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3.5 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-400/50 shadow-sm transition-all duration-200 hover:scale-105"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-400/50 shadow-sm transition-all duration-200 hover:scale-105"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="X Profile"
                className="p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-400/50 shadow-sm transition-all duration-200 hover:scale-105"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-400/50 shadow-sm transition-all duration-200 hover:scale-105"
              >
                <MailIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Dominant, Large, Immersive Developer Workspace Visual (7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 relative flex items-center justify-center lg:justify-end"
          >
            {/* The Visual Container: Large, Wide, Unconstrained */}
            <div className="relative w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
              
              {/* Backlight Ambient Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-400/25 to-purple-600/35 blur-[100px] rounded-full pointer-events-none transform scale-105 animate-pulse" />

              {/* High-Resolution Epic Developer Visual with smooth floating motion */}
              <div className="relative w-full overflow-visible select-none animate-float">
                <img
                  src="/assets/hero_developer_epic.png"
                  alt="Abdul Rehman - Software Engineering Student Developer Workspace with triple monitors, code glowing symbol on hoodie, and Dream Build Deploy neon sign"
                  className="w-full h-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] filter contrast-105 brightness-105"
                  loading="eager"
                />

                {/* Subtle soft alpha gradient on the left edge to melt into background */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#040814] via-[#040814]/40 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#040814] via-[#040814]/30 to-transparent pointer-events-none" />

                {/* Floating Glassmorphic Micro-Badge for technical depth */}
                <div className="absolute top-4 right-8 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-cyan-400/40 text-cyan-200 text-xs backdrop-blur-md shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="font-mono font-medium">gcuf::swe</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Bottom Hero Row: Standalone, Crisp Scroll Down Indicator */}
        <div className="mt-8 lg:mt-12 flex justify-end items-center pr-4">
          <a
            href="#about"
            onClick={scrollToAbout}
            className="flex items-center gap-3 text-slate-400 hover:text-cyan-300 transition-colors group cursor-pointer"
          >
            {/* Animated HTML Mouse Silhouette with Glowing Wheel */}
            <div className="w-5 h-9 rounded-full border-2 border-slate-600 group-hover:border-cyan-400 flex items-start justify-center p-1 transition-colors shadow-sm bg-slate-950/60 backdrop-blur-sm">
              <div className="w-1.5 h-2.5 bg-cyan-400 rounded-full animate-bounce" />
            </div>
            <span className="text-xs font-semibold font-heading tracking-widest uppercase">Scroll Down</span>
          </a>
        </div>

      </div>

      {/* Full-Width Glowing Horizon Divider Line between Hero and About */}
      <div className="relative w-full mt-6">
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2/5 h-3 bg-cyan-500/15 blur-md pointer-events-none" />
      </div>

    </section>
  );
};
