
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Sparkles,
  Play,
  RotateCcw
} from "lucide-react";
import "./AtelierExperience.css";

const shades = [
  {
    name: "VELVET CRIMSON",
    number: "01",
    color: "#a30e30",
    description: "A confident red. Impossible to overlook.",
    note: "THE ICON"
  },
  {
    name: "AFTER HOURS",
    number: "02",
    color: "#bb5368",
    description: "A muted rose for unforgettable evenings.",
    note: "THE ROMANTIC"
  },
  {
    name: "SOFT SPOKEN",
    number: "03",
    color: "#bd8178",
    description: "Understated nude. Effortless presence.",
    note: "THE ESSENTIAL"
  },
  {
    name: "MIDNIGHT BERRY",
    number: "04",
    color: "#69213e",
    description: "Deep berry. A little mystery, always.",
    note: "THE MUSE"
  }
];

const chapters = [
  {
    number: "01",
    eyebrow: "THE BEGINNING",
    title: "Melt the",
    italic: "pigment.",
    description:
      "Colour begins as a molten blend. Pigment and wax transform into a rich, luminous formula.",
    label: "MOLTEN PIGMENT"
  },
  {
    number: "02",
    eyebrow: "THE FORMATION",
    title: "Shape the",
    italic: "icon.",
    description:
      "The liquid formula settles into its mould, taking on the unmistakable silhouette of a lipstick.",
    label: "PRECISION MOULDING"
  },
  {
    number: "03",
    eyebrow: "THE ASSEMBLY",
    title: "Dress it in",
    italic: "gold.",
    description:
      "A sculpted colour meets a polished metal collar and a refined black-and-gold case.",
    label: "CRAFTED DETAILS"
  },
  {
    number: "04",
    eyebrow: "THE REVEAL",
    title: "Wear your",
    italic: "signature.",
    description:
      "The final creation emerges: a timeless beauty object, made to become part of your ritual.",
    label: "VELVÉRA SIGNATURE"
  }
];

function Lipstick({ color, className = "" }) {
  const id = React.useId().replace(/:/g, "");

  return (
    <svg
      className={`make-lipstick ${className}`}
      viewBox="0 0 240 440"
      role="img"
      aria-label="VELVÉRA luxury lipstick illustration"
    >
      <defs>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#604323" />
          <stop offset=".16" stopColor="#f5dba0" />
          <stop offset=".34" stopColor="#927044" />
          <stop offset=".55" stopColor="#fff0c5" />
          <stop offset=".76" stopColor="#a57d49" />
          <stop offset="1" stopColor="#49331e" />
        </linearGradient>

        <linearGradient id={`${id}-bullet`} x1="0" y1="0" x2="1" y2=".15">
          <stop offset="0" stopColor="#450518" />
          <stop offset=".2" stopColor={color} />
          <stop offset=".46" stopColor="#ffb4b7" />
          <stop offset=".63" stopColor={color} />
          <stop offset="1" stopColor="#50091e" />
        </linearGradient>

        <linearGradient id={`${id}-case`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#090709" />
          <stop offset=".25" stopColor="#33232a" />
          <stop offset=".42" stopColor="#100b0e" />
          <stop offset=".8" stopColor="#27151c" />
          <stop offset="1" stopColor="#050405" />
        </linearGradient>

        <linearGradient id={`${id}-shine`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset=".38" stopColor="#fff" stopOpacity=".48" />
          <stop offset=".5" stopColor="#fff" stopOpacity=".8" />
          <stop offset=".68" stopColor="#fff" stopOpacity=".12" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>

        <filter id={`${id}-shadow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      {/* Soft product shadow */}
      <ellipse
        cx="127"
        cy="406"
        rx="58"
        ry="8"
        fill="#000"
        opacity=".45"
        filter={`url(#${id}-shadow)`}
      />

      {/* Sculpted lipstick bullet */}
      <g className="make-bullet">
        <path
          d="M85 178 L85 104 Q85 84 104 68 L143 37 Q155 29 159 47 L170 105 L170 178 Z"
          fill={`url(#${id}-bullet)`}
          stroke="#e6a6aa"
          strokeOpacity=".65"
          strokeWidth="1.2"
        />

        <path
          d="M104 68 L143 37 Q155 29 159 47 L170 105 L85 104 Z"
          fill={color}
          opacity=".62"
        />

        <path
          d="M112 71 L146 43 Q153 40 155 51 L160 88"
          fill="none"
          stroke="#fff4e8"
          strokeWidth="2"
          strokeOpacity=".78"
          strokeLinecap="round"
        />

        <path
          d="M94 111 Q103 139 101 170"
          fill="none"
          stroke="#fff"
          strokeWidth="7"
          strokeOpacity=".14"
          strokeLinecap="round"
        />

        <path
          d="M139 52 Q146 76 148 103"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeOpacity=".25"
        />
      </g>

      {/* Polished gold collar */}
      <g className="make-collar">
        <path
          d="M79 172 L176 172 L181 197 L74 197 Z"
          fill={`url(#${id}-gold)`}
        />
        <path
          d="M77 182 H179"
          stroke="#fff0c5"
          strokeWidth="2"
          strokeOpacity=".8"
        />
        <path d="M75 194 H180" stroke="#3a2718" strokeWidth="2" />
      </g>

      {/* Black luxury case */}
      <g className="make-case">
        <rect
          x="80"
          y="197"
          width="95"
          height="166"
          rx="5"
          fill={`url(#${id}-case)`}
          stroke={`url(#${id}-gold)`}
          strokeWidth="1.6"
        />

        <rect
          x="87"
          y="202"
          width="80"
          height="155"
          rx="3"
          fill={`url(#${id}-shine)`}
          opacity=".22"
        />

        <path
          d="M91 207 V350"
          stroke="#fff"
          strokeWidth="2"
          strokeOpacity=".24"
        />

        <path
          d="M164 207 V350"
          stroke="#d7b579"
          strokeWidth="1.5"
          strokeOpacity=".65"
        />

        <text
          x="127"
          y="275"
          textAnchor="middle"
          fill="#d8bb83"
          fontSize="23"
          fontFamily="Georgia, serif"
        >
          V
        </text>

        <path
          d="M103 286 H151"
          stroke="#d8bb83"
          strokeOpacity=".65"
        />

        <text
          x="127"
          y="301"
          textAnchor="middle"
          fill="#e1c999"
          fontSize="6.5"
          letterSpacing="2"
        >
          VELVÉRA
        </text>

        <text
          x="127"
          y="314"
          textAnchor="middle"
          fill="#bda16f"
          fontSize="4.5"
          letterSpacing="1.5"
        >
          BEAUTY HOUSE
        </text>
      </g>

      {/* Base and finishing details */}
      <path
        d="M75 362 H180 L170 380 H85 Z"
        fill={`url(#${id}-gold)`}
      />

      <rect
        x="85"
        y="380"
        width="85"
        height="17"
        rx="3"
        fill={`url(#${id}-case)`}
        stroke="#c8a66a"
        strokeWidth="1"
      />

      <ellipse
        cx="127"
        cy="399"
        rx="43"
        ry="5"
        fill="#000"
        opacity=".35"
      />
    </svg>
  );
}

export default function AtelierExperience() {
  const rootRef = useRef(null);
  const videoRef = useRef(null);

  const [active, setActive] = useState(0);
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);

  const shade = shades[active];
  const chapter = chapters[stage];

  // Reveal sections as they enter the viewport.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = root.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      targets.forEach((element) =>
        element.classList.add("atelier-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("atelier-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    targets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Automatically advance the chapter labels while playing.
  useEffect(() => {
    if (!playing) return undefined;

    const timer = window.setInterval(() => {
      setStage((current) => (current + 1) % chapters.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [playing]);

  // Move the spotlight with the pointer.
  function moveSpotlight(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--spot-x",
      `${event.clientX - rect.left}px`
    );

    event.currentTarget.style.setProperty(
      "--spot-y",
      `${event.clientY - rect.top}px`
    );
  }

  function togglePlayback() {
    const video = videoRef.current;

    setPlaying((wasPlaying) => {
      const nextPlaying = !wasPlaying;

      if (video) {
        if (nextPlaying) {
          video.play().catch(() => {
            // The visitor can still use the native video controls.
          });
        } else {
          video.pause();
        }
      }

      return nextPlaying;
    });
  }

  function restartExperience() {
    setStage(0);

    const video = videoRef.current;

    if (video) {
      video.currentTime = 0;

      if (playing) {
        video.play().catch(() => {});
      }
    }
  }

  function selectChapter(index) {
    setStage(index);

    // Keep the selected chapter visible instead of auto-advancing.
    setPlaying(false);

    if (videoRef.current) {
      videoRef.current.pause();
    }
  }

  return (
    <div className="atelier-experience" ref={rootRef}>
      {/* ACT I: Cinematic hero */}
      <section
        className="atelier-opening"
        style={{ "--pigment": shade.color }}
        onPointerMove={moveSpotlight}
      >
        <div className="atelier-grain" />

        <header className="atelier-opening-top">
          <span>VELVÉRA BEAUTY HOUSE</span>
          <span>CHAPTER 01 — THE ART OF COLOR</span>
        </header>

        <div className="atelier-opening-content" data-reveal>
          <span className="atelier-kicker">
            <Sparkles size={13} /> AN EXPRESSION OF YOU
          </span>

          <h2>
            Color is
            <br />
            <em>a feeling.</em>
          </h2>

          <p>
            Before the first impression.
            <br />
            Beyond the final touch.
            <br />
            There is a color that feels like you.
          </p>

          <a href="#atelier-making" className="atelier-cta">
            DISCOVER THE CRAFT <ArrowDownRight size={17} />
          </a>
        </div>

        <div className="atelier-hero-product">
          <div className="atelier-hero-glow" />

          <Lipstick
            color={shade.color}
            className="hero-lipstick"
          />

          <span>THE SIGNATURE OBJECT / V</span>
        </div>

        <div className="atelier-opening-number">
          <span>01</span>
          <span>MADE OF COLOR · DEFINED BY YOU</span>
        </div>
      </section>

      {/* ACT II: Manufacturing story and uploaded video */}
      <section
        className="atelier-making"
        id="atelier-making"
        style={{ "--pigment": shade.color }}
      >
        <div className="making-heading" data-reveal>
          <span className="atelier-kicker">
            02 — BEHIND THE BEAUTY
          </span>

          <h2>
            From pigment
            <br />
            to <em>perfection.</em>
          </h2>

          <p>
            Every signature shade begins with a process.
            Discover the art behind your lipstick.
          </p>
        </div>

        <div className="making-layout">
          <div className="making-copy" data-reveal>
            <span className="making-step-number">
              CHAPTER {chapter.number}
            </span>

            <span className="atelier-kicker">
              {chapter.eyebrow}
            </span>

            <h3>
              {chapter.title}
              <br />
              <em>{chapter.italic}</em>
            </h3>

            <p>{chapter.description}</p>

            <div className="making-current-label">
              <span className="making-status-dot" />
              {chapter.label}
            </div>

            <div className="making-controls">
              <button
                type="button"
                onClick={togglePlayback}
                aria-label={playing ? "Pause video and chapters" : "Play video and chapters"}
              >
                {playing ? <span>Ⅱ</span> : <Play size={15} />}
                {playing ? "PAUSE" : "PLAY"}
              </button>

              <button
                type="button"
                onClick={restartExperience}
                aria-label="Restart video and chapters"
              >
                <RotateCcw size={14} /> RESTART
              </button>
            </div>

            <div className="making-timeline">
              {chapters.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  className={stage === index ? "is-active" : ""}
                  onClick={() => selectChapter(index)}
                  aria-label={`Show chapter ${item.number}: ${item.eyebrow}`}
                  aria-pressed={stage === index}
                >
                  <span>{item.number}</span>
                  <i />
                </button>
              ))}
            </div>
          </div>

          <div className="making-visual" data-reveal>
            <div className="process-video-frame">
              {!videoError ? (
                <video
                  ref={videoRef}
                  className="process-video"
                  controls
                  playsInline
                  preload="metadata"
                  onError={() => setVideoError(true)}
                >
                  <source
                    src={`${import.meta.env.BASE_URL}videos/lipstick-process.mp4`}
                    type="video/mp4"
                  />
                  Your browser does not support this video.
                </video>
              ) : (
                <div className="process-video-error" role="status">
                  <Sparkles size={24} />
                  <p>YOUR LIPSTICK FILM</p>
                  <span>
                    Add lipstick-process.mp4 to public/videos
                    and refresh the page.
                  </span>
                </div>
              )}
            </div>

            <p className="process-video-caption">
              VELVÉRA / THE MAKING OF A SIGNATURE
            </p>
          </div>
        </div>
      </section>

      {/* ACT III: Shade laboratory */}
      <section
        className="atelier-shade-lab"
        style={{ "--pigment": shade.color }}
        id="atelier-shades"
      >
        <div className="atelier-lab-heading" data-reveal>
          <span className="atelier-kicker">
            03 — THE SHADE LABORATORY
          </span>

          <h2>
            Find your
            <br />
            <em>own signature.</em>
          </h2>

          <p>
            Four moods. Four expressions.
            Which one feels unmistakably yours?
          </p>
        </div>

        <div className="atelier-lab-display">
          <div className="atelier-lab-visual" data-reveal>
            <div className="atelier-lab-halo" />

            <div className="shade-swatch">
              <div className="shade-swatch-liquid" />
              <div className="shade-swatch-shine" />
            </div>

            <span className="atelier-lab-index">
              COLOR STUDY / {shade.number}
            </span>

            <span className="atelier-lab-caption">
              {shade.note}
            </span>
          </div>

          <div className="atelier-lab-controls" data-reveal>
            <span className="atelier-kicker">
              SELECT YOUR MOOD
            </span>

            {shades.map((item, index) => (
              <button
                key={item.number}
                type="button"
                className={`atelier-shade-option ${
                  active === index ? "is-selected" : ""
                }`}
                onClick={() => setActive(index)}
                aria-pressed={active === index}
              >
                <span className="atelier-shade-dot">
                  <i style={{ background: item.color }} />
                </span>

                <span className="atelier-shade-name">
                  <small>{item.number}</small>
                  <span>{item.name}</span>
                </span>

                <ArrowUpRight size={17} />
              </button>
            ))}

            <div className="atelier-shade-description" aria-live="polite">
              <span>YOUR COLOR STORY</span>
              <h3>{shade.name}</h3>
              <p>{shade.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ACT IV: Editorial ending */}
      <section className="atelier-manifesto">
        <div className="atelier-manifesto-top">
          <span>04 — A PERSONAL RITUAL</span>
          <Sparkles size={17} />
          <span>BEAUTY WITHOUT NOISE</span>
        </div>

        <div className="atelier-manifesto-title" data-reveal>
          <p>NOT MADE TO FOLLOW.</p>

          <h2>
            Made to
            <br />
            <em>leave a trace.</em>
          </h2>
        </div>

        <div className="atelier-manifesto-bottom">
          <p>
            Luxury is the detail you notice.
            Confidence is the feeling you keep.
            Your signature belongs to nobody else.
          </p>

          <a href="#atelier-shades" className="atelier-cta">
            DISCOVER YOUR SHADE <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="atelier-manifesto-watermark">V</div>
      </section>
    </div>
  );
}
