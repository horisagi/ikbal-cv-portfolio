import React, { useState } from 'react';
import { cvData } from '../data/cvData';

export default function Skills({ darkMode }) {
  const { technical, soft } = cvData.skills;
  const [activeTab, setActiveTab] = useState('all');

  const categories = ['all', 'Jaringan', 'Hardware', 'Pemrograman', 'Sistem'];
  
  const filteredTech = activeTab === 'all' 
    ? technical 
    : technical.filter(s => s.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section id="skills" className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900/50' : 'bg-slate-50/70'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-sky-500 bg-sky-500/10 mb-3 uppercase tracking-wider">
            Kompetensi
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Keahlian & Kemampuan
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mt-4"></div>
          <p className={`mt-3 max-w-xl text-sm sm:text-base ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Kombinasi kemampuan teknis di bidang TKJ serta soft skills yang menunjang profesionalisme kerja.
          </p>
        </div>

        {/* Two Columns Grid: Technical Skills & Soft Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Technical Skills (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 shadow-sm ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200/90'
            }`}>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-600/15 text-blue-500">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      Technical Skills
                    </h3>
                    <p className="text-xs text-slate-500">Keahlian praktis & instrumen teknologi</p>
                  </div>
                </div>

                {/* Filter Category Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveTab(cat)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                        activeTab === cat
                          ? 'bg-blue-600 text-white font-semibold shadow-sm'
                          : darkMode 
                            ? 'bg-slate-800 text-slate-400 hover:text-white' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {cat === 'all' ? 'Semua' : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress Bars List */}
              <div className="space-y-5">
                {filteredTech.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-center mb-1.5 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                          {skill.name}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                          darkMode ? 'bg-slate-800 text-sky-400' : 'bg-slate-100 text-blue-600'
                        }`}>
                          {skill.category}
                        </span>
                      </div>
                      <span className="font-bold text-sky-500 font-mono">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className={`h-2.5 w-full rounded-full overflow-hidden ${
                      darkMode ? 'bg-slate-800' : 'bg-slate-100'
                    }`}>
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 transition-all duration-1000 ease-out group-hover:brightness-110 shadow-sm"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Note */}
              <div className={`mt-8 p-3.5 rounded-xl border flex items-center gap-3 text-xs ${
                darkMode ? 'bg-slate-950/60 border-slate-800 text-slate-400' : 'bg-blue-50/70 border-blue-100 text-blue-900'
              }`}>
                <span className="text-base">💡</span>
                <span>
                  Dilatih dan diuji melalui simulasi jaringan lab, instalasi sistem operasi, dan perakitan langsung di SMK TI Garuda Nusantara.
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Soft Skills Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 shadow-sm ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200/90'
            }`}>
              
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="p-2 rounded-xl bg-sky-500/15 text-sky-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Soft Skills
                  </h3>
                  <p className="text-xs text-slate-500">Karakter personal & etika kerja</p>
                </div>
              </div>

              {/* Soft Skills Cards */}
              <div className="space-y-3.5">
                {soft.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border transition-all duration-200 hover:scale-[1.01] ${
                      darkMode 
                        ? 'bg-slate-950/60 border-slate-800 hover:border-sky-500/40' 
                        : 'bg-slate-50 border-slate-200/80 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className={`text-sm font-bold flex items-center gap-2 ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                        <span>{item.name}</span>
                      </h4>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        darkMode ? 'bg-sky-950 text-sky-300 border border-sky-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className={`text-xs leading-relaxed ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
