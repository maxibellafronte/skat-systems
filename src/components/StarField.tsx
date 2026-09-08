"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  hue: "white" | "accent" | "violet";
};

type ShootingStar = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
};

const STAR_COLORS: Record<Star["hue"], string> = {
  white: "244, 247, 255",
  accent: "125, 216, 255",
  violet: "155, 140, 255",
};

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationFrame = 0;
    let lastShotAt = 0;

    function resize() {
      if (!canvas || !ctx) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.min(
        220,
        Math.round((width * height) / 8500)
      );

      stars = Array.from({ length: density }, () => {
        const roll = Math.random();
        const hue: Star["hue"] =
          roll > 0.93 ? "accent" : roll > 0.88 ? "violet" : "white";
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.3 + 0.3,
          baseAlpha: Math.random() * 0.5 + 0.35,
          twinkleSpeed: Math.random() * 0.015 + 0.004,
          twinklePhase: Math.random() * Math.PI * 2,
          hue,
        };
      });
    }

    function spawnShootingStar() {
      const startX = Math.random() * width * 0.6 + width * 0.2;
      shootingStars.push({
        x: startX,
        y: -20,
        vx: -2.2 - Math.random() * 1.5,
        vy: 3.2 + Math.random() * 1.8,
        life: 0,
        maxLife: 70 + Math.random() * 20,
      });
    }

    function draw(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        const twinkle = reduceMotion
          ? star.baseAlpha
          : star.baseAlpha +
            Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3;
        const alpha = Math.max(0, Math.min(1, twinkle));
        ctx.beginPath();
        ctx.fillStyle = `rgba(${STAR_COLORS[star.hue]}, ${alpha})`;
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) {
        if (time - lastShotAt > 4500 + Math.random() * 3500) {
          spawnShootingStar();
          lastShotAt = time;
        }

        shootingStars = shootingStars.filter((s) => s.life < s.maxLife);
        for (const s of shootingStars) {
          s.x += s.vx;
          s.y += s.vy;
          s.life += 1;
          const fade = 1 - s.life / s.maxLife;
          const tailX = s.x - s.vx * 8;
          const tailY = s.y - s.vy * 8;
          const gradient = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
          gradient.addColorStop(0, `rgba(244, 247, 255, ${fade})`);
          gradient.addColorStop(1, "rgba(244, 247, 255, 0)");
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();
        }
      }

      animationFrame = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    animationFrame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 h-full w-full bg-space-950 [background:radial-gradient(ellipse_at_top,_var(--color-space-850)_0%,_var(--color-space-950)_60%)]"
    />
  );
}
