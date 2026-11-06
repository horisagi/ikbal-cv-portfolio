import React, { useState } from 'react';
import { cvData } from '../data/cvData';

export default function Contact({ darkMode }) {
  const { personal } = cvData;

  const [formData, setFormData] = useState({
    name: '',
    senderContact: '',
    subject: '',
    message: ''
  });
  const [copyFeedback, setCopyFeedback] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopyFeedback(type);
    setTimeout(() => setCopyFeedback(null), 2500);
  };

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Mohon isi nama dan pesan Anda terlebih dahulu.");
      return;
    }
    const text = `Halo Ikbal,%0A%0ANama: ${encodeURIComponent(formData.name)}%0AKontak: ${encodeURIComponent(formData.senderContact || '-')}%0ASubjek: ${encodeURIComponent(formData.subject || 'Peluang Magang / Diskusi')}%0APesan:%0A${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/6285147633210?text=${text}`, '_blank');
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Mohon isi nama dan pesan Anda terlebih dahulu.");
      return;
    }
    const subject = encodeURIComponent(`[Portfolio CV] ${formData.subject || 'Diskusi / Peluang Magang'}`);
    const body = encodeURIComponent(`Halo Ikbal,\n\nNama: ${formData.name}\nKontak Pengirim: ${formData.senderContact || '-'}\n\nPesan:\n${formData.message}\n\nSalam,\n${formData.name}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-500 bg-blue-500/10 mb-3 uppercase tracking-wider">
            Hubungi Saya
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Mari Terhubung & Berdiskusi
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mt-4"></div>
          <p className={`mt-3 max-w-xl text-sm sm:text-base ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Terbuka untuk peluang magang, program PKL, kerja sama proyek, maupun diskusi seputar dunia teknologi informasi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Saluran Komunikasi Resmi
            </h3>
            <p className={`text-sm mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Anda dapat menghubungi saya secara langsung melalui WhatsApp, Email, maupun jejaring sosial di bawah ini:
            </p>

            {/* WhatsApp Card */}
            <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-md ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-xl">
                    💬
                  </div>
                  <div>
                    <div className="text-xs font-medium text-emerald-500">WhatsApp Langsung</div>
                    <div className={`font-bold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {personal.whatsapp}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(personal.whatsapp, 'wa')}
                    title="Salin Nomor WhatsApp"
                    className="p-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition"
                  >
                    {copyFeedback === 'wa' ? '✓ Tersalin' : 'Salin'}
                  </button>
                  <a
                    href={personal.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition shadow"
                  >
                    Chat
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-md ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center font-bold text-xl">
                    ✉️
                  </div>
                  <div>
                    <div className="text-xs font-medium text-sky-500">Email Utama</div>
                    <div className={`font-bold text-sm sm:text-base break-all ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {personal.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(personal.email, 'email')}
                    title="Salin Alamat Email"
                    className="p-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition"
                  >
                    {copyFeedback === 'email' ? '✓ Tersalin' : 'Salin'}
                  </button>
                  <a
                    href={`mailto:${personal.email}`}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white transition shadow"
                  >
                    Kirim
                  </a>
                </div>
              </div>
            </div>

            {/* Social Grid (Instagram & GitHub) */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Instagram */}
              <a
                href={personal.instagramLink}
                target="_blank"
                rel="noreferrer"
                className={`p-4 rounded-2xl border transition-all duration-200 hover:border-pink-500/50 hover:-translate-y-0.5 ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                } flex flex-col justify-between group`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">📸</span>
                  <span className="text-xs text-pink-500 font-bold group-hover:translate-x-0.5 transition">↗</span>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Instagram</div>
                  <div className={`text-sm font-bold truncate ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    @{personal.instagram}
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personal.githubLink}
                target="_blank"
                rel="noreferrer"
                className={`p-4 rounded-2xl border transition-all duration-200 hover:border-slate-500 hover:-translate-y-0.5 ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                } flex flex-col justify-between group`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🐙</span>
                  <span className="text-xs text-sky-400 font-bold group-hover:translate-x-0.5 transition">↗</span>
                </div>
                <div>
                  <div className="text-xs text-slate-500">GitHub</div>
                  <div className={`text-sm font-bold truncate ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    @{personal.github}
                  </div>
                </div>
              </a>

            </div>

            {/* Fast Response Guarantee */}
            <div className={`p-4 rounded-xl border flex items-center gap-3 text-xs ${
              darkMode ? 'bg-slate-950/40 border-slate-800 text-slate-400' : 'bg-blue-50/50 border-blue-100 text-blue-900'
            }`}>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
              <span>Respons Cepat: Pesan melalui WhatsApp biasanya dibalas dalam waktu kurang dari 24 jam.</span>
            </div>

          </div>

          {/* Right Column: Interactive Quick Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 shadow-xl ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200/90'
            }`}>
              <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Kirim Pesan Langsung
              </h3>
              <p className={`text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Isi formulir di bawah ini untuk mengirimkan pesan otomatis ke WhatsApp atau Email saya:
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm border transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        darkMode 
                          ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-500' 
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Kontak Pengirim (Email / WA)
                    </label>
                    <input
                      type="text"
                      placeholder="nama@perusahaan.com / 0812..."
                      value={formData.senderContact}
                      onChange={(e) => setFormData({ ...formData, senderContact: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm border transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        darkMode 
                          ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-500' 
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Subjek Keperluan
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Tawaran Magang IT / Diskusi Proyek Jaringan"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode 
                        ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-500' 
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Isi Pesan *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tuliskan pesan, rincian kualifikasi magang, atau informasi yang ingin disampaikan..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border transition focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                      darkMode 
                        ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-500' 
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  ></textarea>
                </div>

                {/* Submit Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleSubmitWhatsApp}
                    className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Kirim ke WhatsApp</span>
                    <span>💬</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSubmitEmail}
                    className={`w-full sm:w-1/2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm border transition-all transform hover:-translate-y-0.5 ${
                      darkMode 
                        ? 'border-slate-700 bg-slate-800 text-white hover:bg-slate-700' 
                        : 'border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200'
                    }`}
                  >
                    <span>Kirim ke Email</span>
                    <span>✉️</span>
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
