import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const TOTAL_FRAMES = 110;

export default function Lipstick() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const progressRef = useRef(0);
  const loadedRef = useRef(0);

  const [loaded, setLoaded] = useState(0);
  const [progress, setProgress] = useState(0);

  // Load all 110 frames
  useEffect(() => {
    let cancelled = false;
    const images = [];

    loadedRef.current = 0;
    setLoaded(0);

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const number = String(i).padStart(3, "0");
      const img = new Image();

      img.src = `${import.meta.env.BASE_URL}videos/ezgif-frame-${number}.jpg`;

      img.onload = () => {
        if (cancelled) return;
        loadedRef.current += 1;
        setLoaded(loadedRef.current);
      };

      img.onerror = () => {
        console.error("Frame image not found:", img.src);
      };

      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      cancelled = true;
    };
  }, []);

  // Draw scroll-controlled frames
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;

    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;

    function draw() {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (!width || !height) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const pixelWidth = Math.round(width * dpr);
      const pixelHeight = Math.round(height * dpr);

      if (
        canvas.width !== pixelWidth ||
        canvas.height !== pixelHeight
      ) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const index = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(progressRef.current * (TOTAL_FRAMES - 1))
      );

      const images = imagesRef.current;
      let img = images[index];

      // Find the nearest available frame
      if (!img?.complete || !img.naturalWidth) {
        img = null;

        for (let distance = 1; distance < TOTAL_FRAMES; distance++) {
          const next = images[index + distance];
          const previous = images[index - distance];

          if (next?.complete && next.naturalWidth) {
            img = next;
            break;
          }

          if (previous?.complete && previous.naturalWidth) {
            img = previous;
            break;
          }
        }
      }

      if (!img?.naturalWidth) return;

      // Fill the entire right-side visual area
      const scale = Math.max(
        width / img.naturalWidth,
        height / img.naturalHeight
      );

      const drawWidth = img.naturalWidth * scale;
      const drawHeight = img.naturalHeight * scale;

      const x = (width - drawWidth) / 2;
      const y = (height - drawHeight) / 2;

      ctx.drawImage(img, x, y, drawWidth, drawHeight);
    }

    function update() {
      const rect = section.getBoundingClientRect();
      const distance = section.offsetHeight - window.innerHeight;

      const nextProgress = Math.max(
        0,
        Math.min(1, -rect.top / Math.max(1, distance))
      );

      progressRef.current = nextProgress;
      setProgress(nextProgress);

      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(draw);
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(animationFrame);
    };
  }, [loaded]);

  const frameNumber = Math.min(
    TOTAL_FRAMES,
    Math.floor(progress * (TOTAL_FRAMES - 1)) + 1
  );

  return (
    <section className="frame-scroll" id="story" ref={sectionRef}>
      <div className="frame-sticky">

        {/* LEFT CONTENT */}
        <div className="frame-content">
          <div className="frame-copy">
            <span className="frame-eyebrow">
            
            </span>

            <h2>
              Nature becomes
              <br />
              <em>artistry.</em>
            </h2>

            <p className="frame-description">
              Beauty begins with nature and transforms through
              the hands of an artist. Every shade is carefully
              created to capture a mood, express individuality,
              and reveal your unique beauty.
            </p>

            <p className="frame-description">
              From the selection of rich pigments to the
              creation of a silky, luxurious finish, every
              detail matters. Discover the journey behind
              your lipstick and the craftsmanship that brings
              every signature shade to life.
            </p>

            <div className="frame-features">
              <div className="frame-feature">
                <span className="frame-feature-number">01</span>
                <div>
                  <h3>Inspired by Nature</h3>
                  <p>
                    Beautiful shades inspired by colour,
                    texture and the world around us.
                  </p>
                </div>
              </div>

              <div className="frame-feature">
                <span className="frame-feature-number">02</span>
                <div>
                  <h3>Crafted with Precision</h3>
                  <p>
                    Every detail is thoughtfully developed
                    for a refined lipstick experience.
                  </p>
                </div>
              </div>

              <div className="frame-feature">
                <span className="frame-feature-number">03</span>
                <div>
                  <h3>Your Signature Shade</h3>
                  <p>
                    Explore the artistry behind a finish
                    that makes every look your own.
                  </p>
                </div>
              </div>
            </div>

            <a href="#atelier-making" className="frame-discover">
              EXPLORE THE MAKING <span>↗</span>
            </a>

            <div className="frame-load-info">
              <div className="frame-load-labels">
                <span>EXPERIENCE LOADING</span>
                <span>{loaded} / {TOTAL_FRAMES}</span>
              </div>

              <div className="frame-load-track">
                <i
                  style={{
                    width: `${(loaded / TOTAL_FRAMES) * 100}%`
                  }}
                />
              </div>
            </div>
          </div>

          <div className="frame-bottom">
            <span>SCROLL TO TRANSFORM</span>

            <div className="frame-progress">
              <i
                style={{
                  transform: `scaleX(${progress})`
                }}
              />
            </div>

            <span>{Math.round(progress * 100)}%</span>
          </div>
        </div>

        {/* FULL RIGHT-SIDE VISUAL */}
        <div className="frame-visual">
          <canvas
            ref={canvasRef}
            className="frame-canvas"
            aria-label="Scroll-controlled lipstick transformation"
          />

          <div className="frame-visual-index">
            {String(frameNumber).padStart(3, "0")} / {TOTAL_FRAMES}
          </div>
        </div>

      </div>
    </section>
  );
}