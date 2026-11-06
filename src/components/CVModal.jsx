import React from 'react';
import { cvData } from '../data/cvData';

export default function CVModal({ isOpen, onClose, darkMode }) {
  if (!isOpen) return null;

  const { personal, education, skills, experiences, projects } = cvData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn print:p-0 print:bg-white print:static print:inset-auto">
      
      {/* Backdrop click to close (hidden on print) */}
      <div 
        className="fixed inset-0 print:hidden" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Main Container */}
      <div className="relative w-full max-w-4xl my-auto rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh] print:max-h-none print:shadow-none print:rounded-none print:border-none print:w-full print:m-0">
        
        {/* Floating Top Control Bar (Hidden on print) */}
        <div className={`px-6 py-4 border-b flex items-center justify-between print:hidden ${
          darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'
        }`}>
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-blue-600 text-white text-sm font-bold">
              📄
            </span>
            <div>
              <h3 className="font-bold text-sm sm:text-base leading-tight">
                Curriculum Vitae Resmi — {personal.fullName}
              </h3>
              <p className="text-xs text-sky-500 font-medium">
                Format Cetak & PDF Siap Kerja / Magang
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all transform hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>Cetak / Simpan PDF</span>
            </button>

            <button
              onClick={onClose}
              className={`p-2 rounded-xl transition ${
                darkMode ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-slate-600 hover:text-black'
              }`}
              aria-label="Tutup Pratinjau"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Printable CV Paper Document Container (Standard A4 ratio & styling) */}
        <div id="printable-cv" className="overflow-y-auto p-4 sm:p-8 bg-slate-100 dark:bg-slate-950 print:bg-white print:p-0 print:overflow-visible">
          
          <div className="max-w-[800px] mx-auto bg-white text-slate-900 shadow-xl print:shadow-none p-8 sm:p-12 rounded-xl print:rounded-none border border-slate-200 print:border-none font-sans leading-relaxed">
            
            {/* Header: Name, Contact & Profession */}
            <div className="border-b-2 border-navy-900 pb-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
                    {personal.fullName}
                  </h1>
                  <h2 className="text-sm sm:text-base font-bold text-blue-700 mt-1">
                    {personal.profession}
                  </h2>
                </div>

                {/* Contact Pill Details */}
                <div className="text-xs text-slate-600 space-y-1 sm:text-right font-medium">
                  <div>📧 {personal.email}</div>
                  <div>📱 WhatsApp: {personal.whatsapp}</div>
                  <div>🌐 GitHub: github.com/{personal.github}</div>
                  <div>📸 Instagram: @{personal.instagram}</div>
                  <div>📍 {personal.location}</div>
                </div>
              </div>
            </div>

            {/* Section 1: Ringkasan Profil */}
            <div className="mb-6">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                RINGKASAN PROFIL
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                {personal.aboutMe} {personal.shortBio}
              </p>
            </div>

            {/* Section 2: Riwayat Pendidikan */}
            <div className="mb-6">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
                PENDIDIKAN FORMAL
              </h3>
              <div className="space-y-3">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between text-xs">
                    <div>
                      <div className="font-bold text-slate-900 text-sm">
                        {edu.institution}
                      </div>
                      <div className="text-blue-700 font-semibold">
                        {edu.major}
                      </div>
                      <div className="text-slate-600 mt-0.5">
                        {edu.description}
                      </div>
                    </div>
                    <div className="font-mono font-semibold text-slate-500 sm:text-right shrink-0 mt-1 sm:mt-0">
                      {edu.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Keahlian Teknis & Soft Skills */}
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                  KEAHLIAN TEKNIS (HARD SKILLS)
                </h3>
                <ul className="text-xs space-y-1 text-slate-700">
                  {skills.technical.map((item, i) => (
                    <li key={i} className="flex justify-between items-center">
                      <span>• {item.name}</span>
                      <span className="font-mono text-slate-500 font-semibold">{item.level}%</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                  SOFT SKILLS & KARAKTER
                </h3>
                <ul className="text-xs space-y-1.5 text-slate-700">
                  {skills.soft.map((item, i) => (
                    <li key={i}>
                      <span className="font-bold">• {item.name}:</span> {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 4: Pengalaman Praktik & Organisasi */}
            <div className="mb-6">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
                PENGALAMAN PRAKTIK & REKAM JEJAK
              </h3>
              <div className="space-y-3">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-slate-900 text-sm">
                        {exp.title}
                      </span>
                      <span className="font-mono text-slate-500 text-[11px]">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-blue-700 font-medium mb-1">
                      {exp.role} — {exp.organization}
                    </div>
                    <ul className="list-disc list-inside text-slate-600 space-y-0.5">
                      {exp.achievements.slice(0, 2).map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5: Portofolio Proyek Terkait */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
                PROYEK & IMPLEMENTASI TEKNOLOGI
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-2.5 rounded border border-slate-200 bg-slate-50">
                    <div className="font-bold text-slate-900">{proj.title}</div>
                    <div className="text-[11px] text-blue-700 font-mono mb-1">{proj.technologies.join(', ')}</div>
                    <div className="text-[11px] text-slate-600 leading-snug">{proj.highlights}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CV Footer Declaration */}
            <div className="mt-8 pt-4 border-t border-slate-200 text-center text-[10px] text-slate-500">
              Dokumen Curriculum Vitae ini disusun secara jujur dan dapat dipertanggungjawabkan keabsahannya.
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
