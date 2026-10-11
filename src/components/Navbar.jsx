import React, { useState, useEffect } from 'react';
import { Download, Moon, Menu, X, Sparkles, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar = ({ onOpenResume, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#040814]/85 backdrop-blur-md border-b border-blue-500/15 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Abdul Rehman Portfolio Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/30 border border-cyan-400/30 shadow-[0_0_15px_rgba(56,189,248,0.2)] group-hover:border-cyan-400/60 transition-all duration-300">
              {/* Cyber AR Monogram SVG */}
              <svg className="w-6 h-6 transform group-hover:scale-105 transition-transform" viewBox="0 0 100 100" fill="none">
                <path d="M22 75 L38 25 L48 25 L40 50 L60 50 L56 62 L36 62 L32 75 Z" fill="#38BDF8"/>
                <path d="M50 25 L72 25 C82 25 88 31 88 40 C88 47 83 53 74 55 L88 75 L74 75 L62 57 L50 57 Z M62 37 L62 47 L70 47 C74 47 77 45 77 42 C77 39 74 37 70 37 Z" fill="#C084FC"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-slate-100 tracking-tight group-hover:text-cyan-300 transition-colors">
                {personalInfo.name}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-cyan-400 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full shadow-[0_0_8px_#38bdf8]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              id="resume-nav-btn"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400/50 hover:text-cyan-300 shadow-sm transition-all duration-200 cursor-pointer"
            >
              <span>Resume</span>
              <Download className="w-4 h-4 text-cyan-400" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              title="Toggle Glow Mode"
              className="p-2 rounded-xl text-slate-400 hover:text-cyan-300 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-all cursor-pointer"
              aria-label="Theme Accent"
            >
              <Moon className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-slate-950/95 border border-slate-800/90 backdrop-blur-xl shadow-2xl flex flex-col gap-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-2.5 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/60 rounded-xl transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-400/50"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
