import React, { useEffect } from 'react';
import { X, Download, Printer, GraduationCap, Code, Briefcase, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { personalInfo, skillsData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-950 border border-cyan-500/30 shadow-[0_0_50px_rgba(56,189,248,0.2)] p-6 sm:p-10 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Actions */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-heading">
              Resume Preview
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400/50 text-xs text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="py-6 space-y-8 font-sans">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
            <div>
              <h2 className="text-3xl font-heading font-bold text-white tracking-tight">
                {personalInfo.name}
              </h2>
              <p className="text-sm text-cyan-400 font-medium mt-0.5">
                Software Engineering Student & Full-Stack Developer
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Faisalabad, Pakistan • {personalInfo.email}
              </p>
            </div>
            <div className="text-xs text-slate-400 space-y-1">
              <div><span className="text-slate-500">GitHub:</span> github.com/{personalInfo.githubUsername}</div>
              <div><span className="text-slate-500">LinkedIn:</span> linkedin.com/in/{personalInfo.linkedinUsername}</div>
            </div>
          </div>

          {/* Education */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 font-heading">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h3>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-semibold text-white">BS Software Engineering</h4>
                  <p className="text-xs text-slate-400">Government College University Faisalabad (GCUF)</p>
                </div>
                <span className="text-xs text-cyan-400 font-mono">2023 — Present</span>
              </div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (C++), Relational Database Management Systems, Software Design & Architecture, Computer Networks.
              </p>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 font-heading">
              <Code className="w-4 h-4" />
              <span>Technical Skills</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <span className="text-xs font-semibold text-slate-300 block mb-1">Languages & Core:</span>
                <span className="text-xs text-slate-400">C++, Python, JavaScript (ES6+), HTML5, CSS3</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <span className="text-xs font-semibold text-slate-300 block mb-1">Frameworks & Libraries:</span>
                <span className="text-xs text-slate-400">React, Node.js, Express.js, Tailwind CSS</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <span className="text-xs font-semibold text-slate-300 block mb-1">Databases & Tools:</span>
                <span className="text-xs text-slate-400">MongoDB, Git, GitHub, VS Code, Postman</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <span className="text-xs font-semibold text-slate-300 block mb-1">Key Focus Areas:</span>
                <span className="text-xs text-slate-400">Full-Stack Web, AI/ML Exploration, Cybersecurity Fundamentals</span>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 font-heading">
              <Briefcase className="w-4 h-4" />
              <span>Selected Projects</span>
            </h3>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xs font-bold text-white">TaskFlow Pro — Modern Task Management</h4>
                  <span className="text-[11px] text-cyan-400">React, Node.js, MongoDB</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Full-stack Kanban application featuring JWT auth, real-time status updates, team collaboration boards, and performance analytics.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xs font-bold text-white">Secure Notes — E2E Encrypted Notes</h4>
                  <span className="text-[11px] text-rose-400">React, Node.js, AES-256</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Security-centric application utilizing client-side AES-256 GCM encryption, ensuring complete zero-knowledge privacy for stored data.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xs font-bold text-white">ShopEase — E-commerce Platform</h4>
                  <span className="text-[11px] text-blue-400">React, Node.js, Express, MongoDB</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Modern e-commerce platform with reactive product filtering, persistent shopping cart, checkout flow, and administrative inventory management.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
