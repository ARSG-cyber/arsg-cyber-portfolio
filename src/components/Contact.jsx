import React, { useState } from 'react';
import { Mail, ArrowRight, Copy, Check, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Contact = ({ onOpenContactModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      {/* Curved neon horizon background gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-blue-900/20 via-purple-900/10 to-transparent pointer-events-none" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[60rem] h-64 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-48 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Cyber arc border glow across the bottom */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Card */}
        <div className="relative p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-[#050a1c] border border-cyan-500/25 shadow-2xl backdrop-blur-xl overflow-hidden">
          
          {/* Subtle Ambient Glow inside card */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Headline & Description */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-tight">
                <span className="text-white">Let's </span>
                <span className="text-gradient">Build</span>
                <br />
                <span className="text-slate-100">Something </span>
                <span className="text-gradient-purple">Great Together</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md">
                I'm always open to new opportunities, collaborations, and interesting projects.
              </p>
            </div>

            {/* Middle: Contact Links */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* Email Link & Copy */}
              <div className="flex items-center justify-between group p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-slate-300 group-hover:text-cyan-300 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 block">Email</span>
                    <span className="text-xs sm:text-sm font-medium font-mono">{personalInfo.email}</span>
                  </div>
                </a>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  aria-label="Copy Email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Link */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 block">LinkedIn</span>
                  <span className="text-xs sm:text-sm font-medium font-mono">linkedin.com/in/{personalInfo.linkedinUsername}</span>
                </div>
              </a>

              {/* GitHub Link */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 block">GitHub</span>
                  <span className="text-xs sm:text-sm font-medium font-mono">github.com/{personalInfo.githubUsername}</span>
                </div>
              </a>

            </div>

            {/* Right: Get In Touch CTA & 3D Metallic Orb */}
            <div className="lg:col-span-3 flex flex-row lg:flex-col items-center justify-center gap-6">
              
              {/* 3D Metallic Orb */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                {/* Outer Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 blur-lg opacity-60 animate-pulse" />
                
                {/* 3D Chrome Sphere with specular reflections */}
                <div className="relative w-full h-full rounded-full shadow-2xl border border-white/20 overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-700 to-slate-950">
                  <div className="absolute top-2 left-3 w-8 h-8 rounded-full bg-white/40 blur-sm pointer-events-none" />
                  <div className="absolute bottom-2 right-3 w-10 h-10 rounded-full bg-cyan-400/30 blur-md pointer-events-none" />
                </div>
              </div>

              {/* Get In Touch Pill Button */}
              <button
                onClick={onOpenContactModal}
                id="contact-cta-btn"
                className="btn-primary-glow inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-white font-medium text-sm sm:text-base cursor-pointer group shadow-xl whitespace-nowrap"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
