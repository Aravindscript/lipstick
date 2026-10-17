
import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const TOTAL_FRAMES = 222;

export default function Lipstick() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const progressRef = useRef(0);

  const [loaded, setLoaded] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const images = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const number = String(i).padStart(3, "0");

      // Frames must be inside public/frames/
      img.src = `${import.meta.env.BASE_URL}videos/ezgif-frame-${number}.jpg`;

      img.onload = () => {
        if (!cancelled) {
          setLoaded((count) => count + 1);
        }
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

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !section || !ctx) return;

    let animationFrame;

    function draw() {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (!width || !height) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 3);

      if (
        canvas.width !== Math.round(width * dpr) ||
        canvas.height !== Math.round(height * dpr)
      ) {
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;
ctx.imageSmoothingQuality = "high";
      ctx.clearRect(0, 0, width, height);

      const index = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(progressRef.current * (TOTAL_FRAMES - 1))
      );

      const img = imagesRef.current[index];

      if (!img?.complete || !img.naturalWidth) return;

     
// Fill the entire screen and crop the extra edges
const scale = Math.max(
  width / img.naturalWidth,
  height / img.naturalHeight
);

const drawWidth = img.naturalWidth * scale;
const drawHeight = img.naturalHeight * scale;

ctx.drawImage(
  img,
  (width - drawWidth) / 2,
  (height - drawHeight) / 2,
  drawWidth,
  drawHeight
);


       

      ctx.drawImage(
        img,
        (width - drawWidth) / 2,
        (height - drawHeight) / 2,
        drawWidth,
        drawHeight
      );
    }

    function update() {
      const rect = section.getBoundingClientRect();
     const distance = section.offsetHeight - window.innerHeight;
const nextProgress = Math.max(
  0,
  Math.min(1, -rect.top / Math.max(1, distance))
);

      progressRef.current = Math.max(
        0,
        Math.min(1, -rect.top / Math.max(1, distance))
      );

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

  return (
    <section className="frame-scroll" id="story" ref={sectionRef}>
      <div className="frame-sticky">
        <canvas
          ref={canvasRef}
          className="frame-canvas"
          aria-label="Scroll-controlled lipstick animation"
        />

        <div className="frame-shade" />

        <div className="frame-top">
          <span>VELVÉRA — THE TRANSFORMATION</span>
          <span>{loaded}/{TOTAL_FRAMES} FRAMES LOADED</span>
        </div>

        <div className="frame-copy">
          <span className="frame-eyebrow">THE TRANSFORMATION</span>
          <h2>Nature becomes artistry.</h2>
          <p>Scroll to experience the transformation, frame by frame.</p>
        </div>

        <div className="frame-bottom">
          <span>SCROLL TO TRANSFORM</span>
          <div className="frame-progress">
            <i
              style={{
                transform: `scaleX(${progressRef.current})`,
              }}
            />
          </div>
          <span>{Math.round(progressRef.current * 100)}%</span>
        </div>
      </div>
    </section>
  );
}
