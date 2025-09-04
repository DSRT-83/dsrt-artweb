import React from "react";
import "../styles/global.css"; // kalau style global kamu taruh di sini

const Dashboard: React.FC = () => {
  return (
    <>
      {/* Rain Background */}
      <div className="rain" aria-hidden="true">
        <span className="drop d1"></span>
        <span className="drop d2"></span>
        <span className="drop d3"></span>
        <span className="drop d4"></span>
      </div>

      {/* Header */}
      <header>
        <h1>DSRT Dashboard</h1>
      </header>

      {/* Main Content */}
      <main>
        <div className="features">
          <a className="card" href="/editor/foto">
            <div className="icon">🖼️</div>
            <h3>Editing Foto</h3>
            <p>Crop, retouch, filter.</p>
          </a>
          <a className="card" href="/editor/video">
            <div className="icon">🎬</div>
            <h3>Editing Video</h3>
            <p>Potong, transisi, overlay.</p>
          </a>
          <a className="card" href="/editor/logo">
            <div className="icon">🎨</div>
            <h3>Editing Logo</h3>
            <p>Desain & ekspor vektor.</p>
          </a>
          <a className="card" href="/editor/removebg">
            <div className="icon">✂️</div>
            <h3>Remove Background</h3>
            <p>AI auto & manual.</p>
          </a>
          <a className="card" href="/editor/faceswap">
            <div className="icon">🪄</div>
            <h3>FaceSwap</h3>
            <p>Tukar wajah Single & Multi secara realistis.</p>
          </a>
        </div>

        {/* Premium Section */}
        <section className="premium">
          <h2 style={{ color: "var(--accent)", margin: "0 0 8px" }}>
            Upgrade ke Premium 🚀
          </h2>
          <p style={{ margin: "0 0 16px" }}>
            Akses fitur tanpa batas, tanpa watermark, prioritas render.
          </p>
          <a className="btn" href="/premium">
            Upgrade Sekarang
          </a>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <a href="/home">
          🏠<br />
          Home
        </a>
        <a href="/profile">
          👤<br />
          Profile
        </a>
      </nav>
    </>
  );
};

export default Dashboard;
