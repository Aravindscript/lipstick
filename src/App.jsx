  
  import React from "react";
  import {
    ArrowUpRight,
    Menu,
    ShoppingBag,
    X,
    Sparkles
  } from "lucide-react";
  
  import Lipstick from "./Lipstick.jsx";
  import "./style.css";
 import l1 from "./assets/l11.png";
import l2 from "./assets/l22.png";
import l3 from "./assets/l33.png";
import l4 from "./assets/l44.png";
import l5 from "./assets/l55.png";
import l6 from "./assets/l66.png";
  
  const products = [
    {
      name: "Rouge No. 01",
      shade: "Velvet Crimson",
      price: 1038,
      color: "#a30e30",
      Image: l1,
      label: "BESTSELLER"

    },
    {
      name: "Rose No. 02",
      shade: "After Hours",
      price: 2938,
      color: "#bb5368",
      Image: l2,
      label: "NEW SHADE"
    },
    {
      name: "Nude No. 03",
      shade: "Soft Spoken",
      price: 2038,
      color: "#bd8178",
      Image: l3,
      label: "EDITOR'S PICK"
    },
    {
      name: "Berry No. 04",
      shade: "Midnight Berry",
      price: 4062,
      color: "#69213e",
      Image: l4,
      label: "LIMITED EDITION"
    },
    {
      name: "Coral No. 05",
      shade: "Sunlit Petal",
      price: 3999,
      color: "#d66d59",
      Image: l5,
      label: "JUST ARRIVED"
    },
    {
      name: "Plum No. 06",
      shade: "Velvet Dusk",
      price: 4002,
      color: "#69334f",
      Image: l6,
      label: "ATELIER PICK"
    }
  ];
  
  function MainPage() {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [bag, setBag] = React.useState([]);
    const [toast, setToast] = React.useState("");
    const [bookingDone, setBookingDone] = React.useState(false);
    const [activeProduct, setActiveProduct] = React.useState(0);
  
    function addToBag(product) {
      setBag((old) => [...old, product]);
      setToast(`${product.name} added to your bag`);
      window.setTimeout(() => setToast(""), 2200);
    }
  
    function bookAppointment(event) {
      event.preventDefault();
      setBookingDone(true);
    }
  
    return (
      <>
        <header className="header">
          <a className="logo" href="#home">VELVÉRA<span>®</span></a>
  
          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
  
          <nav className={menuOpen ? "nav nav-open" : "nav"}>
            {[
              ["ABOUT", "#about"],
              ["THE STORY", "#story"],
              ["COLLECTION", "#collection"],
              ["ATELIER", "#atelier"],
              ["BOOK A SESSION", "#booking"]
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
  
          <a className="bag" href="#collection">
            <ShoppingBag size={16} /> BAG ({bag.length})
          </a>
        </header>
  
        <main>
          <section className="hero" id="home">
            <video className="hero-video" autoPlay muted loop playsInline>
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
            <div className="hero-overlay" />
  
            <div className="hero-content">
              <p className="eyebrow">THE ART OF A FIRST IMPRESSION</p>
              <h1>Color,<br /><em>captured.</em></h1>
              <p className="hero-sub">
                A signature shade. A lasting impression.
                <br />Meet the new language of lips.
              </p>
              <a className="gold-btn" href="#about">
                DISCOVER VELVÉRA <ArrowUpRight size={16} />
              </a>
            </div>
  
            <span className="vertical-note">THE VELVÉRA COLLECTION — 2026</span>
            <a className="scroll-hint" href="#about">SCROLL TO DISCOVER ↓</a>
          </section>
  
          {/* ABOUT */}
          <section className="about section-pad" id="about">
            <div className="about-visual">
              <span className="about-orbit">V</span>
              <span className="about-side-note">BEAUTY, WITH INTENTION</span>
            </div>
  
            <div className="about-copy">
              <p className="eyebrow">01 — OUR PHILOSOPHY</p>
              <h2>More than color.<br /><em>A signature.</em></h2>
              <p>
                At VELVÉRA, lipstick is more than the final touch.
                It is a personal ritual, a quiet expression of confidence
                and a detail that makes a moment unforgettable.
              </p>
              <p>
                Inspired by the depth of botanical color and the
                precision of modern design, our collection celebrates
                expressive shades, considered textures and timeless style.
              </p>
              <a className="text-link" href="#collection">
                EXPLORE OUR SHADES <ArrowUpRight size={15} />
              </a>
            </div>
          </section>
  
          {/* 76 FRAME SCROLL ANIMATION */}
          <Lipstick />
  
          {/* COLLECTION */}
          
{/* COLLECTION — EXPANDING LIPSTICK CAROUSEL */}
<section className="collection section-pad" id="collection">
  <div className="section-title">
    <div>
      <p className="eyebrow">02 — THE SIGNATURE COLLECTION</p>
      <h2>
        Find your <em>color story.</em>
      </h2>
    </div>

    <p className="muted">
      Six considered shades.
      <br />
      One unmistakable feeling.
    </p>
  </div>

  <div className="lipstick-carousel">
    {products.map((product, index) => (
      <article
        key={product.name}
        className={`lipstick-slide ${
          activeProduct === index ? "lipstick-active" : ""
        }`}
        style={{ "--lipstick-color": product.color }}
        onClick={() => setActiveProduct(index)}
      >
        <div className="lipstick-slide-image">
          <img
            src={product.Image}
            alt={product.name}
            className="lipstick-slide-photo"
          />

          <div className="lipstick-slide-shade" />

          <span className="lipstick-slide-number">
            0{index + 1}
          </span>

          <span className="lipstick-vertical-name">
            {product.name}
          </span>

          <div className="lipstick-slide-info">
            <span className="lipstick-slide-label">
              {product.label}
            </span>

            <h3>{product.name}</h3>

            <p className="lipstick-slide-subtitle">
              {product.shade}
            </p>

            <p className="lipstick-slide-description">
              Every shade tells a story. 
              Let yours speak in elegance, confidence, and quiet luxury 
              of the VELVÉRA collection.
            </p>

            <div className="lipstick-slide-bottom">
              <span className="lipstick-slide-price">
                Rs={product.price}
              </span>

              <button
                className="lipstick-slide-add"
                onClick={(event) => {
                  event.stopPropagation();
                  addToBag(product);
                }}
              >
                ADD TO BAG <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>

  
          {/* BRAND EXPERIENCE */}
          <section className="experience section-pad">
            <div className="experience-heading">
              <p className="eyebrow">03 — THE VELVÉRA EXPERIENCE</p>
              <h2>Beauty in every <em>detail.</em></h2>
            </div>
  
            <div className="experience-grid">
              <article>
                <span>01</span>
                <Sparkles />
                <h3>Considered Color</h3>
                <p>
                  Shades designed to complement your own expression,
                  from soft everyday tones to unmistakable crimson.
                </p>
              </article>
  
              <article>
                <span>02</span>
                <Sparkles />
                <h3>The Texture Ritual</h3>
                <p>
                  Explore a sensorial beauty ritual with a refined finish
                  and a smooth, comfortable feel.
                </p>
              </article>
  
              <article>
                <span>03</span>
                <Sparkles />
                <h3>Designed to Keep</h3>
                <p>
                  From the first reveal to the final detail,
                  every element is considered with intention.
                </p>
              </article>
            </div>
          </section>
  
          {/* BOOKING */}
          <section className="booking section-pad" id="booking">
            <div className="booking-copy">
              <p className="eyebrow">04 — YOUR PRIVATE ATELIER</p>
              <h2>Your shade.<br /><em>Your moment.</em></h2>
              <p>
                Discover your signature color with a personal shade
                consultation. Choose your preferred session and leave
                with a look that feels unmistakably yours.
              </p>
              <div className="booking-detail">
                <span>01</span> Personalized shade discovery
              </div>
              <div className="booking-detail">
                <span>02</span> Texture and finish exploration
              </div>
              <div className="booking-detail">
                <span>03</span> Your signature look
              </div>
            </div>
  
            <form className="booking-form" onSubmit={bookAppointment}>
              <p className="eyebrow">REQUEST AN APPOINTMENT</p>
  
              <label>
                YOUR NAME
                <input name="name" placeholder="Full name" required />
              </label>
  
              <label>
                EMAIL ADDRESS
                <input name="email" type="email" placeholder="you@example.com" required />
              </label>
  
              <label>
                PREFERRED DATE
                <input name="date" type="date" min={new Date().toISOString().split("T")[0]} required />
              </label>
  
              <label>
                SESSION TYPE
                <select name="session" required defaultValue="">
                  <option value="" disabled>Select a session</option>
                  <option>Signature shade consultation</option>
                  <option>Color and finish discovery</option>
                  <option>Personal beauty experience</option>
                </select>
              </label>
  
              <button className="gold-btn booking-submit" type="submit">
                REQUEST A SESSION <ArrowUpRight size={16} />
              </button>
  
              {bookingDone && (
                <p className="booking-success" role="status">
                  Thank you! Your request has been prepared. This demo
                  does not send bookings to a server.
                </p>
              )}
            </form>
          </section>
  
          {/* ATELIER / BRAND STORY */}
          <section className="atelier section-pad" id="atelier">
            <div className="atelier-icon">
              <Sparkles size={18} /> THE VELVÉRA PROMISE
            </div>
  
            <p className="quote">
              “Luxury is not loud.<br />
              <em>It leaves a trace.</em>”
            </p>
  
            <p className="atelier-description">
              Thoughtful color. A personal ritual. A lasting impression.
              Discover beauty at your own pace.
            </p>
  
            <div className="atelier-bottom">
              <span>FORMULATED WITH INTENTION</span>
              <span>CRAFTED FOR YOUR MOMENT</span>
            </div>
          </section>
        </main>
  
        <footer className="footer">
          <div>
            <a className="logo" href="#home">VELVÉRA<span>®</span></a>
            <p>Color, captured. Beauty, remembered.</p>
          </div>
  
          <div className="footer-links">
            <a href="#about">Our philosophy</a>
            <a href="#collection">Collection</a>
            <a href="#booking">Book a session</a>
          </div>
  
          <div className="footer-right">
            <span>CRAFTED FOR YOUR MOMENT</span>
            <span>© 2026 VELVÉRA BEAUTY</span>
          </div>
        </footer>
  
        <div className={toast ? "toast toast-show" : "toast"} role="status">
          {toast}
        </div>
      </>
    );
  }
  
  // App flow: Loading screen -> intro video -> existing main website
  export default function App() {
    const [phase, setPhase] = React.useState("loading");
  
    React.useEffect(() => {
      const timer = window.setTimeout(() => setPhase("intro"), 1500);
      return () => window.clearTimeout(timer);
    }, []);
  
    if (phase === "loading") {
      return (
        <div className="velvera-loading-screen">
          <style>{`
            .velvera-loading-screen, .velvera-intro-screen {
              position: fixed; inset: 0; z-index: 99999;
              background: #100b0d; color: #f2dfbf;
              display: flex; align-items: center; justify-content: center;
              overflow: hidden;
            }
            .velvera-loading-inner { text-align: center; padding: 24px; }
            .velvera-loading-logo {
              font-family: Georgia, serif; font-size: clamp(34px, 7vw, 72px);
              font-weight: 400; letter-spacing: .2em;
            }
            .velvera-loading-logo span { font: 12px Arial, sans-serif; vertical-align: top; }
            .velvera-loading-track {
              width: min(220px, 60vw); height: 2px; margin: 28px auto 18px;
              background: #49353b; overflow: hidden;
            }
            .velvera-loading-progress {
              height: 100%; background: #d9b77b; transform-origin: left;
              animation: velvera-progress 1.4s ease forwards;
            }
            .velvera-loading-caption { font: 9px Arial, sans-serif; letter-spacing: .24em; color: #c7b7b8; }
            .velvera-intro-screen { display: block; background: #100b0d; animation: velvera-fade .6s ease both; }
            .velvera-intro-video { position: absolute; inset: 0; z-index: 0; width: 100%; height: 100%; object-fit: cover; display: block; }
            .velvera-intro-shade { position: absolute; inset: 0; z-index: 1; background: linear-gradient(90deg, rgba(16,8,12,.48), rgba(16,8,12,.08)); pointer-events: none; }
            .velvera-intro-copy { position: absolute; left: 8%; bottom: 14%; z-index: 2; color: #fff3e5; animation: velvera-rise 1s ease both; }
            .velvera-intro-copy p { font: 10px Arial, sans-serif; letter-spacing: .28em; }
            .velvera-intro-copy h1 { margin: 18px 0 8px; font: 400 clamp(46px, 10vw, 112px) Georgia, serif; letter-spacing: .08em; }
            .velvera-intro-copy span { font: italic clamp(18px, 3vw, 28px) Georgia, serif; }
            @keyframes velvera-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
            @keyframes velvera-fade { from { opacity: 0; } to { opacity: 1; } }
            @keyframes velvera-rise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            @media (max-width: 600px) { .velvera-intro-copy { left: 7%; right: 7%; bottom: 12%; } .velvera-intro-copy p { font-size: 8px; } }
          `}</style>
          <div className="velvera-loading-inner">
            <div className="velvera-loading-logo">VELVÉRA<span>®</span></div>
            <div className="velvera-loading-track"><div className="velvera-loading-progress" /></div>
            <div className="velvera-loading-caption">PREPARING YOUR BEAUTY EXPERIENCE</div>
          </div>
        </div>
      );
    }
  
    if (phase === "intro") {
      return (
        <div className="velvera-intro-screen">
          <style>{`
            .velvera-loading-screen, .velvera-intro-screen {
              position: fixed; inset: 0; z-index: 99999;
              background: #100b0d; color: #f2dfbf;
              display: flex; align-items: center; justify-content: center;
              overflow: hidden;
            }
            .velvera-intro-screen { display: block; animation: velvera-fade .6s ease both; }
            .velvera-intro-video { position: absolute; inset: 0; z-index: 0; width: 100%; height: 100%; object-fit: cover; display: block; }
            .velvera-intro-shade { position: absolute; inset: 0; z-index: 1; background: linear-gradient(90deg, rgba(16,8,12,.48), rgba(16,8,12,.08)); pointer-events: none; }
            .velvera-intro-copy { position: absolute; left: 8%; bottom: 14%; z-index: 2; color: #fff3e5; animation: velvera-rise 1s ease both; }
            .velvera-intro-copy p { font: 10px Arial, sans-serif; letter-spacing: .28em; }
            .velvera-intro-copy h1 { margin: 18px 0 8px; font: 400 clamp(46px, 10vw, 112px) Georgia, serif; letter-spacing: .08em; }
            .velvera-intro-copy span { font: italic clamp(18px, 3vw, 28px) Georgia, serif; }
            @keyframes velvera-fade { from { opacity: 0; } to { opacity: 1; } }
            @keyframes velvera-rise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            @media (max-width: 600px) { .velvera-intro-copy { left: 7%; right: 7%; bottom: 12%; } .velvera-intro-copy p { font-size: 8px; } }
          `}</style>
          <video
            className="velvera-intro-video"
            autoPlay
            muted
            playsInline
            preload="auto"
            onTimeUpdate={(e) => {
    if (e.currentTarget.currentTime >= 4) {
      e.currentTarget.pause();
      setPhase("main");
    }
  }}
            onEnded={() => setPhase("main")}
            onError={() => setPhase("main")}
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
          </video>
          <div className="velvera-intro-shade" />
          <div className="velvera-intro-copy">
            <p>THE ART OF A FIRST IMPRESSION</p>
            <h1>VELVÉRA</h1>
            <span>Color, captured.</span>
          </div>
        </div>
      );
    }
  
    return <MainPage />;
  }
  
  