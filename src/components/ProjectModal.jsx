import React from 'react';

export default function ProjectModal({ project, onClose, darkMode }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className={`relative w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden z-10 transition-all ${
        darkMode ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        
        {/* Modal Header */}
        <div className={`px-6 py-5 border-b flex items-center justify-between ${
          darkMode ? 'border-slate-800 bg-slate-950/60' : 'border-slate-100 bg-slate-50'
        }`}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">
              {project.category === 'Jaringan' ? '🌐' : project.category === 'Web Dev' ? '💻' : '🔧'}
            </span>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-500">
                {project.category}
              </span>
              <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
            aria-label="Tutup Modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-5 max-h-[75vh] overflow-y-auto">
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Deskripsi Lengkap
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${
            darkMode ? 'bg-slate-950/80 border-slate-800 text-sky-300' : 'bg-blue-50/80 border-blue-200 text-blue-900'
          }`}>
            <div className="text-xs font-bold uppercase tracking-wider mb-1">
              Sorotan Utama & Manfaat
            </div>
            <p className="text-sm">
              {project.highlights}
            </p>
          </div>

          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Teknologi & Instrumen
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-medium ${
                    darkMode ? 'bg-slate-800 text-sky-400' : 'bg-slate-100 text-blue-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className={`px-6 py-4 border-t flex items-center justify-between gap-3 ${
          darkMode ? 'border-slate-800 bg-slate-950/40' : 'border-slate-100 bg-slate-50'
        }`}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow transition"
          >
            <span>Kunjungi GitHub Repository</span>
            <span>↗</span>
          </a>

          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border ${
              darkMode ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
}
