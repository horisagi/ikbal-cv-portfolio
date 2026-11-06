import React from 'react';
import { cvData } from '../data/cvData';

export default function About({ darkMode }) {
  const { personal, interests } = cvData;

  const iconMap = {
    Cpu: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    Network: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    Code: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    Sparkles: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    Palette: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21a4 4 0 01-4-4 5 5 0 015-5c.677 0 1.25.297 1.637.766L11 14l1.363-1.234A2.49 2.49 0 0114 12c1.38 0 2.5 1.12 2.5 2.5 0 .548-.178 1.055-.48 1.468L15 17h1a4 4 0 014 4H7z" />
      </svg>
    )
  };

  const coreValues = [
    { label: "Rasa Ingin Tahu Tinggi", desc: "Senang mempelajari inovasi dan teknologi baru" },
    { label: "Tanggung Jawab", desc: "Berkomitmen menyelesaikan tugas dan SOP dengan teliti" },
    { label: "Kolaborasi Tim", desc: "Siap bekerja sama dan saling mendukung dalam tim IT" },
    { label: "Kemauan Belajar", desc: "Selalu termotivasi mengasah keterampilan teknis" }
  ];

  return (
    <section id="about" className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900/50' : 'bg-slate-50/70'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-sky-500 bg-sky-500/10 mb-3 uppercase tracking-wider">
            Tentang Saya
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Mengenal Lebih Dekat
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Personal Narrative & Career Goals (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Bio Card */}
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 shadow-sm ${
              darkMode 
                ? 'bg-slate-900 border-slate-800 text-slate-300' 
                : 'bg-white border-slate-200/80 text-slate-700'
            }`}>
              <h3 className={`text-xl font-bold mb-4 flex items-center gap-2.5 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <span className="w-2.5 h-6 rounded-full bg-blue-600"></span>
                <span>Profil Singkat</span>
              </h3>
              <p className="text-base leading-relaxed mb-6">
                {personal.aboutMe}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                {coreValues.map((val, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-sky-500 mt-1">✓</span>
                    <div>
                      <div className={`text-xs font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                        {val.label}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {val.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Goals Highlight Box */}
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
              darkMode 
                ? 'bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-900 border-blue-500/30' 
                : 'bg-gradient-to-br from-blue-50 via-white to-sky-50 border-blue-200'
            }`}>
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-28 h-28 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-blue-600 text-white shadow-md">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Tujuan Karier & Pengembangan
                </h4>
              </div>
              <p className={`text-sm sm:text-base leading-relaxed italic ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                "{personal.careerGoal}"
              </p>
            </div>

          </div>

          {/* Right Column: Interests & Fields of Focus (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            <div className="mb-2">
              <h3 className={`text-xl font-bold flex items-center gap-2.5 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <span className="w-2.5 h-6 rounded-full bg-sky-500"></span>
                <span>Minat & Bidang yang Dikuasai</span>
              </h3>
              <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Bidang teknologi yang aktif dipelajari, dieksplorasi, dan dikembangkan secara berkelanjutan:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group ${
                    darkMode 
                      ? 'bg-slate-900 border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/80' 
                      : 'bg-white border-slate-200/90 hover:border-blue-400 hover:shadow-blue-900/5'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-sky-950/70 text-sky-400 group-hover:bg-sky-900 group-hover:text-sky-300' 
                        : 'bg-blue-50 text-blue-700 group-hover:bg-blue-100'
                    }`}>
                      {iconMap[item.icon] || iconMap.Cpu}
                    </div>
                    <div>
                      <h4 className={`text-base font-bold mb-1 transition-colors ${
                        darkMode ? 'text-white group-hover:text-sky-300' : 'text-slate-900 group-hover:text-blue-700'
                      }`}>
                        {item.title}
                      </h4>
                      <p className={`text-xs sm:text-sm leading-relaxed ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Extra Summary Box filling grid nicely */}
              <div className={`p-5 rounded-2xl border flex flex-col justify-center ${
                darkMode 
                  ? 'bg-gradient-to-r from-slate-900 to-sky-950/40 border-slate-800' 
                  : 'bg-gradient-to-r from-blue-50/70 to-sky-50/70 border-blue-100'
              }`}>
                <div className="text-xs font-bold text-sky-500 uppercase tracking-wider mb-1">
                  Komitmen Belajar
                </div>
                <div className={`text-sm font-semibold leading-snug ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  Siap mengaplikasikan minat teknis dalam penugasan kerja nyata dan proyek industri.
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
