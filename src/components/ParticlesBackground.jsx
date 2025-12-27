import React, { useEffect, useRef } from "react";

class Particle {
  constructor({ width, height, ctx, colors }) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.colors = colors;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.width;
    this.y = Math.random() * this.height;

    // Slight size adjustment for a sharper look
    this.radius = Math.random() * 1.75 + 0.5;

    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];

    // Reduced speed slightly for a more "majestic" slow drift
    const speed = Math.random() * 0.3 + 0.05;
    this.vx = (Math.random() - 0.5) * speed;
    this.vy = (Math.random() - 0.5) * speed;
  }

  draw() {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > this.width) this.vx *= -1;
    if (this.y < 0 || this.y > this.height) this.vy *= -1;

    this.draw();
  }
}

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let width, height, dpr;

    // --- CONFIG: Space / Cosmic Theme ---
    const COLORS = [
      "rgba(255, 255, 255, 0.8)", // Bright White (Stars)
      "rgba(56, 189, 248, 0.6)", // Sky Blue (Nebula hint)
      "rgba(167, 139, 250, 0.6)", // Violet (Cosmic)
    ];

    // Increased thresholds to compensate for lower density
    const LINK_DISTANCE = 160;
    const MOUSE_DISTANCE = 180;

    const getParticleCount = () => {
      const area = window.innerWidth * window.innerHeight;

      if (area < 600_000) return 20; // Mobile
      if (area < 1_000_000) return 35; // Tablet
      return 65; // Desktop
    };

    const drawLines = () => {
      // 1. Particle-to-Particle Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < LINK_DISTANCE) {
            const opacity = 1 - distance / LINK_DISTANCE;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.08})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // 2. Mouse-to-Particle Connections (Constellation Effect)
        if (mouseRef.current.x !== null) {
          const dx = particles[i].x - mouseRef.current.x;
          const dy = particles[i].y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MOUSE_DISTANCE) {
            const opacity = 1 - distance / MOUSE_DISTANCE;
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.25})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();
          }
        }
      }
    };

    const initCanvas = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push(
          new Particle({
            width,
            height,
            ctx,
            colors: COLORS,
          })
        );
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => p.update());
      drawLines();

      animationRef.current = requestAnimationFrame(animate);
    };

    // Event Listeners
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    initCanvas();
    animate();

    window.addEventListener("resize", initCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", initCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-black"
    />
  );
};

export default ParticlesBackground;
