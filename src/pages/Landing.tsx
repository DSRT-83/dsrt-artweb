import React from "react";
import "../styles/landing.css"; // ambil styling dari CSS terpisah

const Landing: React.FC = () => {
  return (
    <div className="landing-page">
      {/* background rain effect */}
      <div className="hero-bg" aria-hidden="true">
        <span className="r r1"></span>
        <span className="r r2"></span>
        <span className="r r3"></span>
        <span className="r r4"></span>
      </div>

      {/* header */}
      <header className="header">
        <h1>DSRT — Digital Smart Revise Technology</h1>
      </header>

      {/* main hero */}
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <h2 id="hero-title">Solusi Editing & Transformasi Digital</h2>
          <p>
            Platform all-in-one untuk editing foto, video, desain visual, serta
            pengolahan konten berbasis AI dengan alur kerja efisien.
          </p>
          <a className="cta" href="/home">
            Masuk ke Dashboard
          </a>
        </section>

        {/* fitur unggulan */}
        <section className="features" aria-label="Fitur Unggulan">
          <article className="feature">
            <div className="icon">🖼️</div>
            <h3>Foto</h3>
            <p>
              Optimasi gambar dengan pengaturan warna, cahaya, retouching, serta
              dukungan filter profesional.
            </p>
          </article>

          <article className="feature">
            <div className="icon">🎬</div>
            <h3>Video</h3>
            <p>
              Editing presisi: potong, transisi, overlay, efek, hingga rendering
              performa tinggi untuk hasil sinematik.
            </p>
          </article>

          <article className="feature">
            <div className="icon">🎨</div>
            <h3>Logo</h3>
            <p>
              Rancang identitas visual modern dengan library aset, tipografi
              fleksibel, dan ekspor vektor siap cetak.
            </p>
          </article>

          <article className="feature">
            <div className="icon">✂️</div>
            <h3>Remove BG</h3>
            <p>
              Pemotongan latar otomatis berbasis AI dengan opsi fine-tune manual
              untuk hasil bersih dan natural.
            </p>
          </article>

          <article className="feature">
            <div className="icon">🪄</div>
            <h3>SwapFace</h3>
            <p>
              Tukar wajah secara realistis dengan dukungan Single & Multi Face
              Swap, ideal untuk konten kreatif maupun profesional.
            </p>
          </article>
        </section>
      </main>

      {/* footer */}
      <footer>&copy; 2025 DSRT — All rights reserved.</footer>
    </div>
  );
};

export default Landing;
