import React from 'react';
import { cvData } from '../data/cvData';

export default function Experience({ darkMode }) {
  const { experiences } = cvData;

  return (
    <section id="experience" className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-500 bg-blue-500/10 mb-3 uppercase tracking-wider">
            Rekam Jejak
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Pengalaman & Kesiapan Kerja
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mt-4"></div>
          <p className={`mt-3 max-w-xl text-sm sm:text-base ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Pengalaman praktis di laboratorium sekolah, kolaborasi proyek, serta kesiapan menyambut kesempatan magang.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${
                darkMode 
                  ? 'bg-slate-900 border-slate-800 hover:border-sky-500/50' 
                  : 'bg-white border-slate-200/90 hover:border-blue-300 hover:shadow-blue-900/5'
              }`}
            >
              <div>
                {/* Type Badge & Period */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                    darkMode ? 'bg-sky-950 text-sky-400 border border-sky-800' : 'bg-blue-50 text-blue-700'
                  }`}>
                    {exp.type}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {exp.period}
                  </span>
                </div>

                {/* Role & Organization */}
                <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {exp.title}
                </h3>
                
                <div className="text-xs font-semibold text-sky-500 mb-4">
                  {exp.role} • {exp.organization}
                </div>

                {/* Achievements / Points */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-sky-500 mt-1 font-bold">›</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Footer */}
              <div className={`mt-6 pt-4 border-t text-[11px] font-medium flex items-center justify-between ${
                darkMode ? 'border-slate-800 text-slate-500' : 'border-slate-100 text-slate-400'
              }`}>
                <span>Kategori: {exp.type}</span>
                <span className="text-emerald-500 font-bold">✓ Terverifikasi</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
