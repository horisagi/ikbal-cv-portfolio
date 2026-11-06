import React from 'react';
import { cvData } from '../data/cvData';

export default function Education({ darkMode }) {
  const { education } = cvData;

  return (
    <section id="education" className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-500 bg-blue-500/10 mb-3 uppercase tracking-wider">
            Riwayat Akademis
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Pendidikan
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mt-4"></div>
          <p className={`mt-3 max-w-xl text-sm sm:text-base ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Jejak pendidikan formal yang membentuk pondasi karakter, disiplin, dan keahlian teknis.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-600 via-sky-400 to-slate-300 dark:to-slate-800 transform sm:-translate-x-1/2"></div>

          <div className="space-y-10 sm:space-y-12">
            {education.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center shadow-lg transition-transform hover:scale-120 ${
                      item.current 
                        ? 'bg-blue-600 border-white dark:border-slate-900 ring-4 ring-blue-500/30' 
                        : 'bg-slate-400 dark:bg-slate-700 border-white dark:border-slate-900'
                    }`}>
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`pl-12 sm:pl-0 sm:w-1/2 ${
                    isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'
                  } w-full`}>
                    
                    <div className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative group ${
                      item.current
                        ? darkMode 
                          ? 'bg-gradient-to-br from-slate-900 to-blue-950/40 border-sky-500/50 shadow-lg shadow-sky-950/30' 
                          : 'bg-gradient-to-br from-white to-blue-50/50 border-blue-300 shadow-md shadow-blue-900/5'
                        : darkMode 
                          ? 'bg-slate-900/80 border-slate-800' 
                          : 'bg-white border-slate-200/90'
                    }`}>
                      
                      {/* Period Badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                        item.current
                          ? 'bg-blue-600 text-white shadow-sm'
                          : darkMode 
                            ? 'bg-slate-800 text-slate-300' 
                            : 'bg-slate-100 text-slate-700'
                      }`}>
                        <span>📅 {item.period}</span>
                        {item.current && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        )}
                      </div>

                      {/* Institution & Major */}
                      <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-1 ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {item.institution}
                      </h3>

                      <h4 className="text-sm font-semibold text-sky-500 mb-3">
                        {item.major}
                      </h4>

                      {/* Description */}
                      <p className={`text-xs sm:text-sm leading-relaxed ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {item.description}
                      </p>

                      {/* Current Status Pill */}
                      {item.current && (
                        <div className={`mt-4 pt-3 border-t text-xs font-semibold flex items-center gap-2 ${
                          isEven ? 'sm:justify-end' : 'sm:justify-start'
                        } ${darkMode ? 'border-slate-800 text-emerald-400' : 'border-blue-100 text-emerald-600'}`}>
                          <span>● Status: Aktif Belajar & Siap Praktik</span>
                        </div>
                      )}

                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
