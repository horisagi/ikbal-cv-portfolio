import React from 'react';
import { cvData } from '../data/cvData';

export default function Hero({ darkMode, onOpenCVModal }) {
  const { personal } = cvData;

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      
      {/* Background Decorative Gradient Blobs (Navy & Sky Blue Subtle Accents) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/15 via-sky-400/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-sky-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Call to Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            
            {/* Status Pill */}
            <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 border transition-all duration-300 shadow-sm ${
              darkMode 
                ? 'bg-slate-900/90 border-sky-500/30 text-sky-300' 
                : 'bg-blue-50 border-blue-200 text-blue-800'
            }`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personal.statusBadge}</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4">
              <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                Halo, Saya{' '}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400">
                {personal.fullName}
              </span>
            </h1>

            {/* Profession / Role */}
            <h2 className={`text-lg sm:text-xl md:text-2xl font-semibold mb-5 ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {personal.profession}
            </h2>

            {/* Short Bio Description */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mb-8 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {personal.shortBio}
            </p>

            {/* Action Buttons: Download CV & Contact Me */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenCVModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 hover:from-blue-800 hover:to-sky-700 shadow-lg shadow-blue-600/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download CV (PDF)</span>
              </button>

              <a
                href="#contact"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm border transition-all duration-300 ${
                  darkMode 
                    ? 'border-slate-700 bg-slate-900/80 text-slate-200 hover:border-sky-500 hover:text-sky-400 hover:bg-slate-800' 
                    : 'border-slate-300 bg-white text-slate-800 hover:border-blue-600 hover:text-blue-700 hover:bg-slate-50'
                } shadow-sm transform hover:-translate-y-0.5 active:translate-y-0`}
              >
                <svg className="w-5 h-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Contact & Social Links Bar */}
            <div className={`pt-6 border-t w-full flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium ${
              darkMode ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-500'
            }`}>
              <a 
                href={personal.whatsappLink} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-emerald-500 transition-colors"
                title="Chat via WhatsApp"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>WhatsApp: {personal.whatsapp}</span>
              </a>

              <a 
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 hover:text-sky-500 transition-colors"
                title="Kirim Email"
              >
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                <span>{personal.email}</span>
              </a>

              <a 
                href={personal.githubLink}
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-slate-200 transition-colors"
                title="Profil GitHub"
              >
                <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                <span>GitHub: @{personal.github}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Professional Profile Photo & Floating Badges (5 cols) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Outer Decorative Glow Ring */}
              <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-600 via-sky-500 to-indigo-600 opacity-30 blur-xl group-hover:opacity-50 transition duration-700`} />
              
              {/* Main Card Frame */}
              <div className={`relative rounded-3xl overflow-hidden p-3 border shadow-2xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-slate-900/90 border-slate-700/80 shadow-slate-950/60' 
                  : 'bg-white border-slate-200/80 shadow-blue-900/10'
              }`}>
                
                {/* Profile Image / SVG Avatar */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 to-navy-950 flex items-center justify-center">
                  <img
                    src="./avatar-placeholder.svg"
                    alt={personal.fullName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle Corner Tech Accents */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/70 backdrop-blur-md border border-sky-500/30 text-[11px] font-mono font-semibold text-sky-400">
                    SMK TI Garuda N.
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-slate-950/70 backdrop-blur-md border border-emerald-500/30 text-[11px] font-mono font-semibold text-emerald-400">
                    TKJ 2024–Now
                  </div>
                </div>

                {/* Bottom Card Summary */}
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {personal.fullName}
                    </h3>
                    <p className="text-xs text-sky-500 font-medium">
                      Teknik Komputer & Jaringan
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                      darkMode ? 'bg-sky-950 text-sky-300 border border-sky-800' : 'bg-sky-100 text-sky-800'
                    }`}>
                      Ready for Work
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating Badge 1: Networking Skills */}
              <div className={`hidden sm:flex absolute -left-6 top-16 items-center gap-3 p-3 rounded-2xl border shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 ${
                darkMode ? 'bg-slate-900/95 border-sky-500/40 text-slate-100' : 'bg-white/95 border-blue-200 text-slate-800'
              }`}>
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-500 flex items-center justify-center font-bold">
                  🌐
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">Computer Networking</div>
                  <div className="text-[10px] text-sky-500 font-medium">Mikrotik & LAN Config</div>
                </div>
              </div>

              {/* Floating Badge 2: Troubleshooting */}
              <div className={`hidden sm:flex absolute -right-6 bottom-16 items-center gap-3 p-3 rounded-2xl border shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 ${
                darkMode ? 'bg-slate-900/95 border-emerald-500/40 text-slate-100' : 'bg-white/95 border-emerald-200 text-slate-800'
              }`}>
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold">
                  ⚙️
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">Hardware & Software</div>
                  <div className="text-[10px] text-emerald-500 font-medium">Troubleshooting Ready</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
