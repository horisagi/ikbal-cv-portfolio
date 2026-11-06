import React, { useState } from 'react';
import { cvData } from '../data/cvData';

export default function Projects({ darkMode, onSelectProject }) {
  const { projects } = cvData;
  const [filter, setFilter] = useState('all');

  const categories = [
    { label: 'Semua Proyek', value: 'all' },
    { label: 'Jaringan', value: 'Jaringan' },
    { label: 'Web Dev', value: 'Web Dev' },
    { label: 'Hardware', value: 'Hardware' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900/50' : 'bg-slate-50/70'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-sky-500 bg-sky-500/10 mb-3 uppercase tracking-wider">
            Portofolio Karya
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Proyek Pilihan
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mt-4"></div>
          <p className={`mt-3 max-w-xl text-sm sm:text-base ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Koleksi proyek jaringan komputer, perakitan perangkat, dan eksplorasi web development.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  filter === cat.value
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : darkMode 
                      ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800' 
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden group ${
                darkMode 
                  ? 'bg-slate-900 border-slate-800 hover:border-sky-500/50' 
                  : 'bg-white border-slate-200/90 hover:border-blue-300 hover:shadow-blue-900/5'
              }`}
            >
              {/* Top Banner with Icon & Category */}
              <div className={`p-6 sm:p-7 border-b ${
                darkMode ? 'border-slate-800 bg-slate-950/40' : 'border-slate-100 bg-slate-50/50'
              } flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-500 flex items-center justify-center font-bold text-lg">
                    {project.category === 'Jaringan' ? '🌐' : project.category === 'Web Dev' ? '💻' : '🔧'}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-500">
                      {project.category}
                    </span>
                    <h3 className={`text-base sm:text-lg font-bold transition-colors ${
                      darkMode ? 'text-white group-hover:text-sky-300' : 'text-slate-900 group-hover:text-blue-700'
                    }`}>
                      {project.title}
                    </h3>
                  </div>
                </div>

                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                  darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-200/70 text-slate-700'
                }`}>
                  Terselesaikan
                </span>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  <div className={`p-3 rounded-xl mb-5 text-xs font-medium border ${
                    darkMode ? 'bg-slate-950/70 border-slate-800 text-sky-400' : 'bg-blue-50/60 border-blue-100 text-blue-900'
                  }`}>
                    <span className="font-bold">Highlight: </span>
                    <span>{project.highlights}</span>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-mono ${
                          darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className={`pt-4 border-t flex items-center justify-between gap-3 ${
                  darkMode ? 'border-slate-800' : 'border-slate-100'
                }`}>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs sm:text-sm font-semibold text-sky-500 hover:text-sky-400 flex items-center gap-1 transition"
                  >
                    <span>Lihat Detail</span>
                    <span>→</span>
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                      darkMode 
                        ? 'border-slate-700 hover:border-slate-600 bg-slate-800 text-slate-200' 
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-700'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
