import React, { useEffect } from 'react';
import { X, Sparkles, Code2, Compass, Shield, Terminal, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const BioModal = ({ isOpen, onClose, onOpenContact }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-950 border border-cyan-500/30 shadow-[0_0_50px_rgba(56,189,248,0.2)] p-6 sm:p-10 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Journey</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            About Abdul Rehman
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              I am an aspiring Software Engineer currently pursuing my Bachelor of Science in Software Engineering at Government College University Faisalabad (GCUF). My journey in computing started with a curiosity about how software shapes the everyday world.
            </p>
            <p>
              Over the course of my academic studies, I have established a strong base in algorithmic problem solving and Object-Oriented Programming with C++. Simultaneously, I have dedicated significant time toward hands-on modern web engineering, specializing in JavaScript, React, Node.js, Express, and MongoDB.
            </p>
            <p>
              Beyond traditional web stacks, I am passionately exploring the frontiers of artificial intelligence and cybersecurity. I experiment with machine learning pipelines in Python and study defensive software security practices to build web systems that are resilient, performant, and secure by design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <Code2 className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
              <div className="text-xs font-semibold text-white">Modern Web</div>
              <div className="text-[11px] text-slate-400 mt-0.5">React & Node.js</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <Compass className="w-5 h-5 text-purple-400 mx-auto mb-2" />
              <div className="text-xs font-semibold text-white">AI / ML</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Python & Models</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <Shield className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
              <div className="text-xs font-semibold text-white">Cybersecurity</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Secure Architecture</div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-mono">Location: Faisalabad, Pakistan</span>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="btn-primary-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
