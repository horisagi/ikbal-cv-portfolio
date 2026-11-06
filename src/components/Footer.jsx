import React from 'react';
import { cvData } from '../data/cvData';

export default function Footer({ darkMode }) {
  const { personal } = cvData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 border-slate-800/80 text-slate-400' : 'bg-slate-900 border-slate-800 text-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Brand & Bio */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-sky-400 text-white flex items-center justify-center font-bold text-base shadow-md">
                IP
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                {personal.fullName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed mb-4">
              Siswa SMK TI Garuda Nusantara jurusan TKJ. Siap berkontribusi dalam tim IT dengan integritas, semangat belajar tinggi, dan dedikasi.
            </p>
            <div className="text-xs text-sky-400 font-mono">
              ● Open for Internship / PKL & Project Collaborations
            </div>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm font-medium">
            <a href="#hero" className="hover:text-white transition">Beranda</a>
            <a href="#about" className="hover:text-white transition">Tentang</a>
            <a href="#education" className="hover:text-white transition">Pendidikan</a>
            <a href="#skills" className="hover:text-white transition">Keahlian</a>
            <a href="#experience" className="hover:text-white transition">Pengalaman</a>
            <a href="#projects" className="hover:text-white transition">Proyek</a>
            <a href="#contact" className="hover:text-white transition">Kontak</a>
          </div>

          {/* Right Column: Social Links & Back-to-Top */}
          <div className="md:col-span-3 flex flex-col md:items-end gap-4">
            <div className="flex items-center gap-3">
              <a
                href={personal.whatsappLink}
                target="_blank"
                rel="noreferrer"
                title="WhatsApp"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-emerald-600 text-white flex items-center justify-center transition"
              >
                💬
              </a>
              <a
                href={`mailto:${personal.email}`}
                title="Email"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-sky-600 text-white flex items-center justify-center transition"
              >
                ✉️
              </a>
              <a
                href={personal.githubLink}
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition"
              >
                🐙
              </a>
              <a
                href={personal.instagramLink}
                target="_blank"
                rel="noreferrer"
                title="Instagram"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-pink-600 text-white flex items-center justify-center transition"
              >
                📸
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition group"
            >
              <span>Kembali ke Atas</span>
              <span className="transform group-hover:-translate-y-0.5 transition">↑</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            &copy; {new Date().getFullYear()} {personal.fullName}. Hak Cipta Dilindungi.
          </div>
          <div className="text-[11px] text-slate-500">
            Didesain dengan React, Tailwind CSS & Standar Portfolio Profesional.
          </div>
        </div>

      </div>
    </footer>
  );
}
