# Website CV & Portfolio Profesional — Ikbal Abi Pamungkas

Website Curriculum Vitae (CV) dan Portfolio digital interaktif yang dirancang dengan gaya **modern, minimalis, elegan, dan sepenuhnya responsif**. Dibuat untuk kebutuhan melamar program magang / Praktik Kerja Lapangan (PKL) maupun karier profesional di bidang Teknologi Informasi dan Jaringan Komputer.

---

## 👨‍💻 Profil Singkat

- **Nama Lengkap:** Ikbal Abi Pamungkas
- **Status / Peran:** Siswa SMK TKJ • Calon Praktikan Magang IT
- **Sekolah:** SMK TI GARUDA NUSANTARA (Teknik Komputer dan Jaringan / TKJ, 2024 – Sekarang)
- **Email:** [kazenakair@gmail.com](mailto:kazenakair@gmail.com)
- **WhatsApp:** 
- **Instagram:** [@andrw_gves](https://instagram.com/andrw_gves)
- **GitHub:** [horisagi](https://github.com/horisagi)

---

## 🌟 Fitur Utama Website

1. **Desain Modern & Palet Warna Elegan:**
   - Dominasi warna **Navy Blue** (`#0B192C`, `#0F172A`, `#1E293B`), putih bersih, dan aksen **Sky Blue** (`#38BDF8`, `#0284C7`).
   - Tipografi modern menggunakan font *Plus Jakarta Sans*.
   - Animasi halus, hover states interaktif pada kartu, dan transisi smooth.

2. **Fitur Ekspor & Cetak CV PDF Resmi:**
   - Tombol **"Download CV"** membuka pratinjau dokumen CV berstandar ATS.
   - Tombol **"Cetak / Simpan PDF"** memicu fungsi cetak dengan stylesheet khusus (`@media print`) berukuran standar kertas A4 tanpa gangguan header atau tombol website.

3. **Dark Mode & Light Mode:**
   - Tombol sakelar tema di header navigasi dengan penyimpanan preferensi otomatis di `localStorage`.

4. **Navigasi & Aksesibilitas Responsif:**
   - Sticky navbar dengan active scroll spy.
   - Hamburger drawer menu untuk perangkat smartphone dan tablet.

5. **Struktur Konten Lengkap & Bebas Data Fiktif:**
   - **Hero Section:** Foto profil profesional, status ketersediaan magang, deskripsi diri, dan tombol aksi utama.
   - **About Me:** Penjelasan minat (IT, Jaringan, Web Dev, AI, Desain Digital) dan tujuan karier.
   - **Education:** Garis waktu pendidikan (SD 2015–2021, SMP 2021–2024, SMK TI Garuda Nusantara 2024–Sekarang).
   - **Skills:** Visualisasi progress bar untuk Technical Skills dan kartu elegan untuk Soft Skills.
   - **Experience:** Praktikum lab jaringan, kolaborasi proyek, dan kesiapan penempatan magang/PKL.
   - **Projects:** Galeri proyek dengan filter kategori (Jaringan, Web Dev, Hardware) dan modal rincian proyek.
   - **Contact:** Tombol direct WhatsApp dengan pesan otomatis terformat, kirim email cepat, salin kontak ke clipboard, dan tautan sosial media aktif.

---

## 🚀 Cara Menjalankan & Membuka Website

### Opsi 1: Pratinjau Instan (Tanpa Install Apapun)
Buka langsung file `preview.html` di browser Anda:
```bash
C:\Users\T14S\.gemini\antigravity\scratch\ikbal-cv-portfolio\preview.html
```
*(Cukup klik dua kali `preview.html` dari File Explorer Windows atau klik kanan > Buka dengan Chrome / Edge).*

### Opsi 2: Menjalankan Proyek React + Vite (Pengembangan)
Pastikan Node.js telah terpasang di komputer Anda, lalu jalankan perintah berikut di PowerShell atau Command Prompt:

```powershell
# Masuk ke folder proyek
cd C:\Users\T14S\.gemini\antigravity\scratch\ikbal-cv-portfolio

# Install dependensi paket
npm install

# Jalankan server lokal Vite
npm run dev
```
Setelah server berjalan, buka alamat yang ditampilkan di terminal (biasanya `http://localhost:3000` atau `http://localhost:5173`).

### Opsi 3: Build Produksi
Untuk menghasilkan file statis siap hosting di Vercel, Netlify, atau GitHub Pages:
```powershell
npm run build
```
File hasil kompilasi akan berada di folder `dist/`.

---

## 📁 Struktur Direktori Proyek

```
ikbal-cv-portfolio/
├── preview.html               # Versi standalone instan (langsung jalan di browser)
├── index.html                 # Entry point HTML untuk Vite
├── package.json               # Konfigurasi dependensi dan script Node.js
├── vite.config.js             # Konfigurasi bundler Vite
├── tailwind.config.js         # Konfigurasi Tailwind CSS (palet navy & typography)
├── postcss.config.js          # Konfigurasi PostCSS
├── README.md                  # Dokumentasi proyek lengkap
├── avatar-placeholder.svg     # Ilustrasi avatar profil profesional
├── favicon.svg                # Monogram logo favicon
├── public/
│   ├── avatar-placeholder.svg
│   └── favicon.svg
└── src/
    ├── main.jsx               # React DOM entry point
    ├── App.jsx                # Komponen induk aplikasi
    ├── index.css              # Styling kustom & stylesheet cetak PDF A4
    ├── data/
    │   └── cvData.js          # Data terpusat (profil, pendidikan, skills, proyek)
    └── components/
        ├── Navbar.jsx         # Navigasi sticky, tema toggle, mobile menu
        ├── Hero.jsx           # Hero banner, status badge, tombol download & kontak
        ├── About.jsx          # Perkenalan, minat teknologi, tujuan karier
        ├── Education.jsx      # Garis waktu riwayat pendidikan
        ├── Skills.jsx         # Technical & Soft skills dengan progress bar
        ├── Experience.jsx     # Pengalaman praktikum & kesiapan magang
        ├── Projects.jsx       # Galeri proyek & filter kategori
        ├── ProjectModal.jsx   # Modal pop-up rincian proyek
        ├── Contact.jsx        # Formulir pesan, WhatsApp langsung & copy clipboard
        ├── Footer.jsx         # Footer & tombol kembali ke atas
        └── CVModal.jsx        # Pratinjau CV resmi & pemicu cetak PDF A4
```

---

## 📄 Lisensi
Dibuat secara khusus untuk portofolio pribadi **Ikbal Abi Pamungkas**.
