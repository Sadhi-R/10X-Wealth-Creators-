import { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

const STAR_COUNT = 420;
const SHOOTING_STAR_INTERVAL = 3800;

function createStars(width, height) {
  return Array.from({ length: STAR_COUNT }, () => {
    const roll = Math.random();
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 0.85 + 0.15,
      size: Math.random() * 2.8 + 0.6,
      opacity: Math.random() * 0.45 + 0.45,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.0025 + 0.0012,
      tint: roll > 0.88 ? "violet" : roll > 0.72 ? "gold" : "white",
      sparkle: Math.random() > 0.82,
    };
  });
}

function createShootingStar(width, height) {
  const fromLeft = Math.random() > 0.5;
  return {
    x: fromLeft ? Math.random() * width * 0.4 : width * 0.6 + Math.random() * width * 0.4,
    y: Math.random() * height * 0.45,
    length: 100 + Math.random() * 140,
    speed: 7 + Math.random() * 9,
    angle: fromLeft ? Math.PI / 4 + Math.random() * 0.25 : (Math.PI * 3) / 4 - Math.random() * 0.25,
    life: 1,
    decay: 0.011 + Math.random() * 0.007,
  };
}

export default function SceneBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, smoothX: 0.5, smoothY: 0.5 });
  const starsRef = useRef([]);
  const shootingRef = useRef(null);
  const lastShootRef = useRef(0);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let animationId = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      starsRef.current = createStars(width, height);
    }

    function onMove(event) {
      mouseRef.current.x = event.clientX / width;
      mouseRef.current.y = event.clientY / height;
    }

    function drawCosmicBase(isDark) {
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      if (isDark) {
        gradient.addColorStop(0, "rgba(30, 27, 75, 0.35)");
        gradient.addColorStop(0.45, "rgba(9, 9, 11, 0.08)");
        gradient.addColorStop(1, "rgba(24, 24, 27, 0.2)");
      } else {
        gradient.addColorStop(0, "rgba(99, 102, 241, 0.12)");
        gradient.addColorStop(0.5, "rgba(250, 250, 250, 0.02)");
        gradient.addColorStop(1, "rgba(184, 134, 11, 0.08)");
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    function drawNebula(isDark, mx, my) {
      const parallaxX = (mx - 0.5) * 80;
      const parallaxY = (my - 0.5) * 60;

      const nebulae = isDark
        ? [
            { cx: width * 0.18 + parallaxX, cy: height * 0.22 + parallaxY, r: width * 0.5, c: "rgba(99, 102, 241, 0.2)" },
            { cx: width * 0.8 - parallaxX * 0.7, cy: height * 0.52 + parallaxY * 0.5, r: width * 0.42, c: "rgba(139, 92, 246, 0.16)" },
            { cx: width * 0.5 + parallaxX * 0.4, cy: height * 0.82 - parallaxY, r: width * 0.55, c: "rgba(245, 197, 24, 0.12)" },
          ]
        : [
            { cx: width * 0.12 + parallaxX, cy: height * 0.18 + parallaxY, r: width * 0.48, c: "rgba(99, 102, 241, 0.16)" },
            { cx: width * 0.85 - parallaxX * 0.6, cy: height * 0.48 + parallaxY * 0.45, r: width * 0.4, c: "rgba(184, 134, 11, 0.14)" },
            { cx: width * 0.52, cy: height * 0.78, r: width * 0.45, c: "rgba(139, 92, 246, 0.12)" },
          ];

      nebulae.forEach((n) => {
        const g = ctx.createRadialGradient(n.cx, n.cy, 0, n.cx, n.cy, n.r);
        g.addColorStop(0, n.c);
        g.addColorStop(0.55, n.c.replace(/[\d.]+\)$/, (m) => `${parseFloat(m) * 0.45})`));
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);
      });
    }

    function starColor(tint, isDark, alpha) {
      const a = Math.min(alpha, 1);
      if (tint === "gold") {
        return isDark
          ? `rgba(245, 197, 24, ${a})`
          : `rgba(161, 98, 7, ${a})`;
      }
      if (tint === "violet") {
        return isDark
          ? `rgba(192, 132, 252, ${a})`
          : `rgba(109, 40, 217, ${a})`;
      }
      return isDark
        ? `rgba(255, 255, 255, ${a})`
        : `rgba(15, 23, 42, ${a})`;
    }

    function drawSparkle(px, py, size, color, alpha) {
      const arm = size * 2.8;
      ctx.strokeStyle = color.replace(/[\d.]+\)$/, `${alpha * 0.7})`);
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(px - arm, py);
      ctx.lineTo(px + arm, py);
      ctx.moveTo(px, py - arm);
      ctx.lineTo(px, py + arm);
      ctx.stroke();
    }

    function drawStars(time, isDark, mx, my) {
      const mousePx = mx * width;
      const mousePy = my * height;
      const lightBoost = isDark ? 1 : 1.35;

      starsRef.current.forEach((star) => {
        const depth = star.z;
        const parallaxX = (mx - 0.5) * 140 * depth;
        const parallaxY = (my - 0.5) * 110 * depth;

        let px = star.x + parallaxX;
        let py = star.y + parallaxY;

        if (!reduced) {
          py -= time * 0.01 * depth;
          if (py < -10) {
            py = height + 10;
            star.x = Math.random() * width;
          }
        }

        const twinkle = 0.55 + Math.sin(time * star.twinkleSpeed + star.twinkle) * 0.45;
        let alpha = star.opacity * twinkle * depth * lightBoost;

        const dx = px - mousePx;
        const dy = py - mousePy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 220) {
          alpha += (1 - dist / 220) * 0.55 * depth;
        }

        const size = star.size * (0.7 + depth * 0.65);
        const color = starColor(star.tint, isDark, Math.min(alpha, 1));

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = color;

        if (depth > 0.55) {
          ctx.shadowBlur = isDark ? 10 : 6;
          ctx.shadowColor =
            star.tint === "gold"
              ? "rgba(245, 197, 24, 0.75)"
              : star.tint === "violet"
                ? "rgba(167, 139, 250, 0.65)"
                : isDark
                  ? "rgba(255, 255, 255, 0.55)"
                  : "rgba(99, 102, 241, 0.45)";
        }

        ctx.fill();
        ctx.shadowBlur = 0;

        if (star.sparkle && alpha > 0.45) {
          drawSparkle(px, py, size, color, alpha);
        }
      });
    }

    function drawShootingStar(isDark) {
      const s = shootingRef.current;
      if (!s || s.life <= 0) return;

      const ex = s.x + Math.cos(s.angle) * s.length * s.life;
      const ey = s.y + Math.sin(s.angle) * s.length * s.life;

      const gradient = ctx.createLinearGradient(s.x, s.y, ex, ey);
      gradient.addColorStop(0, "rgba(0,0,0,0)");
      gradient.addColorStop(
        0.35,
        isDark ? "rgba(255,255,255,0.95)" : "rgba(180, 120, 10, 0.85)"
      );
      gradient.addColorStop(1, "rgba(0,0,0,0)");

      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(ex, ey);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = isDark ? 2 : 1.8;
      ctx.stroke();

      s.x += Math.cos(s.angle) * s.speed;
      s.y += Math.sin(s.angle) * s.speed;
      s.life -= s.decay;
    }

    function drawMouseAura(isDark, mx, my) {
      const cx = mx * width;
      const cy = my * height;
      const radius = isDark ? 280 : 240;

      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      if (isDark) {
        g.addColorStop(0, "rgba(245, 197, 24, 0.18)");
        g.addColorStop(0.4, "rgba(139, 92, 246, 0.12)");
        g.addColorStop(0.7, "rgba(99, 102, 241, 0.06)");
      } else {
        g.addColorStop(0, "rgba(184, 134, 11, 0.16)");
        g.addColorStop(0.4, "rgba(99, 102, 241, 0.12)");
        g.addColorStop(0.7, "rgba(139, 92, 246, 0.07)");
      }
      g.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    function render(time) {
      const isDark = theme === "dark";
      const mouse = mouseRef.current;

      mouse.smoothX += (mouse.x - mouse.smoothX) * 0.07;
      mouse.smoothY += (mouse.y - mouse.smoothY) * 0.07;

      ctx.clearRect(0, 0, width, height);

      drawCosmicBase(isDark);
      drawNebula(isDark, mouse.smoothX, mouse.smoothY);
      drawStars(time, isDark, mouse.smoothX, mouse.smoothY);
      drawMouseAura(isDark, mouse.smoothX, mouse.smoothY);

      if (!reduced && time - lastShootRef.current > SHOOTING_STAR_INTERVAL) {
        shootingRef.current = createShootingStar(width, height);
        lastShootRef.current = time;
      }
      drawShootingStar(isDark);

      if (!reduced) {
        animationId = requestAnimationFrame(render);
      }
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });

    lastShootRef.current = performance.now();

    if (reduced) {
      render(0);
    } else {
      animationId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="scene-canvas pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
