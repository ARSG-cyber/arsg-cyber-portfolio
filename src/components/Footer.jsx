import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#030611] py-8 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left: AR Monogram Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800">
              <svg className="w-5 h-5" viewBox="0 0 100 100" fill="none">
                <path d="M22 75 L38 25 L48 25 L40 50 L60 50 L56 62 L36 62 L32 75 Z" fill="#38BDF8"/>
                <path d="M50 25 L72 25 C82 25 88 31 88 40 C88 47 83 53 74 55 L88 75 L74 75 L62 57 L50 57 Z M62 37 L62 47 L70 47 C74 47 77 45 77 42 C77 39 74 37 70 37 Z" fill="#C084FC"/>
              </svg>
            </div>
            <span className="font-heading font-semibold text-slate-200">
              {personalInfo.name}
            </span>
          </div>

          {/* Center: Copyright */}
          <div className="text-xs sm:text-sm text-slate-500 font-mono text-center">
            © {new Date().getFullYear()} Abdul Rehman. All rights reserved.
          </div>

          {/* Right: Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X Profile"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="ml-2 p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
