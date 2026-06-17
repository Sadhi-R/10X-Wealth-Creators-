import { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

const PETAL_COUNT = 16;
const CHAKRA_COUNT = 7;
const WISP_COUNT = 40;

const CHAKRA_PALETTE = {
  light: [
    "rgba(220, 38, 38, 0.07)",
    "rgba(234, 88, 12, 0.07)",
    "rgba(202, 138, 4, 0.08)",
    "rgba(22, 163, 74, 0.07)",
    "rgba(37, 99, 235, 0.07)",
    "rgba(79, 70, 229, 0.07)",
    "rgba(147, 51, 234, 0.08)",
  ],
  dark: [
    "rgba(248, 113, 113, 0.1)",
    "rgba(251, 146, 60, 0.1)",
    "rgba(250, 204, 21, 0.11)",
    "rgba(74, 222, 128, 0.09)",
    "rgba(96, 165, 250, 0.09)",
    "rgba(129, 140, 248, 0.1)",
    "rgba(192, 132, 252, 0.11)",
  ],
};

function createWisps(width, height) {
  return Array.from({ length: WISP_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    z: Math.random() * 0.8 + 0.2,
    size: Math.random() * 3 + 1,
    drift: Math.random() * 0.4 + 0.15,
    phase: Math.random() * Math.PI * 2,
    sway: Math.random() * 0.8 + 0.3,
  }));
}

function drawLotusPetal(ctx, radius, width, height) {
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(radius * 0.15, -radius * 0.35, radius * 0.55, -radius * 0.55, radius * 0.85, -radius * 0.2);
  ctx.bezierCurveTo(radius * 0.55, -radius * 0.05, radius * 0.2, radius * 0.05, 0, 0);
}

export default function SceneBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const wispsRef = useRef([]);
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
      wispsRef.current = createWisps(width, height);
    }

    function onMove(event) {
      mouseRef.current = {
        x: event.clientX / width,
        y: event.clientY / height,
      };
    }

    function center() {
      const parallaxX = (mouseRef.current.x - 0.5) * 80;
      const parallaxY = (mouseRef.current.y - 0.5) * 60;
      return {
        x: width * 0.5 + parallaxX,
        y: height * 0.42 + parallaxY,
      };
    }

    function drawAura(time, cx, cy) {
      const isDark = theme === "dark";
      const breath = 0.92 + Math.sin(time * 0.0012) * 0.08;
      const base = isDark ? "rgba(245, 197, 24," : "rgba(184, 134, 11,";

      for (let i = 3; i >= 0; i--) {
        const r = (140 + i * 55) * breath;
        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        gradient.addColorStop(0, `${base} ${0.14 - i * 0.02})`);
        gradient.addColorStop(0.5, `${base} ${0.06 - i * 0.01})`);
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      }

      const sage = ctx.createRadialGradient(cx, cy, 0, cx, cy, 220 * breath);
      sage.addColorStop(0, isDark ? "rgba(134, 239, 172, 0.06)" : "rgba(74, 222, 128, 0.05)");
      sage.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = sage;
      ctx.beginPath();
      ctx.arc(cx, cy, 220 * breath, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawChakraRings(time, cx, cy) {
      const palette = theme === "dark" ? CHAKRA_PALETTE.dark : CHAKRA_PALETTE.light;
      const breath = 0.95 + Math.sin(time * 0.0012) * 0.05;

      palette.forEach((color, i) => {
        const radius = (70 + i * 38) * breath;
        const wobble = Math.sin(time * 0.0008 + i) * 3;
        ctx.beginPath();
        ctx.arc(cx + wobble, cy - wobble * 0.5, radius, 0, Math.PI * 2);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.4;
        ctx.stroke();
      });
    }

    function drawMandala(time, cx, cy) {
      const isDark = theme === "dark";
      const rotation = reduced ? 0 : time * 0.00015;
      const breath = 0.9 + Math.sin(time * 0.0012) * 0.1;
      const petalStroke = isDark ? "rgba(245, 197, 24, 0.22)" : "rgba(184, 134, 11, 0.24)";
      const petalFill = isDark ? "rgba(245, 197, 24, 0.04)" : "rgba(184, 134, 11, 0.05)";
      const innerRadius = 90 * breath;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation);

      for (let i = 0; i < PETAL_COUNT; i++) {
        const angle = (i / PETAL_COUNT) * Math.PI * 2;
        ctx.save();
        ctx.rotate(angle);
        ctx.beginPath();
        drawLotusPetal(ctx, innerRadius, width, height);
        ctx.closePath();
        ctx.fillStyle = petalFill;
        ctx.fill();
        ctx.strokeStyle = petalStroke;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      ctx.beginPath();
      ctx.arc(0, 0, 28 * breath, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? "rgba(245, 197, 24, 0.12)" : "rgba(184, 134, 11, 0.14)";
      ctx.fill();
      ctx.strokeStyle = isDark ? "rgba(245, 197, 24, 0.35)" : "rgba(184, 134, 11, 0.38)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      const outerRotation = reduced ? 0 : -time * 0.00008;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(outerRotation);
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const ox = Math.cos(angle) * innerRadius * 1.35;
        const oy = Math.sin(angle) * innerRadius * 1.35;
        ctx.save();
        ctx.translate(ox, oy);
        ctx.rotate(angle + Math.PI / 2);
        ctx.beginPath();
        drawLotusPetal(ctx, innerRadius * 0.55, width, height);
        ctx.closePath();
        ctx.strokeStyle = isDark ? "rgba(167, 139, 250, 0.18)" : "rgba(139, 92, 246, 0.14)";
        ctx.lineWidth = 0.9;
        ctx.stroke();
        ctx.restore();
      }
      ctx.restore();
    }

    function drawEnergyRays(time, cx, cy) {
      const isDark = theme === "dark";
      const rayCount = 12;
      const breath = 0.95 + Math.sin(time * 0.0012) * 0.05;

      for (let i = 0; i < rayCount; i++) {
        const angle = (i / rayCount) * Math.PI * 2 + (reduced ? 0 : time * 0.0001);
        const length = (180 + Math.sin(time * 0.0015 + i) * 30) * breath;
        const ex = cx + Math.cos(angle) * length;
        const ey = cy + Math.sin(angle) * length;

        const gradient = ctx.createLinearGradient(cx, cy, ex, ey);
        gradient.addColorStop(0, isDark ? "rgba(245, 197, 24, 0.12)" : "rgba(184, 134, 11, 0.1)");
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    }

    function drawRipples(time, cx, cy) {
      const isDark = theme === "dark";

      for (let i = 0; i < 3; i++) {
        const progress = ((time * 0.0004 + i * 0.33) % 1);
        const radius = 60 + progress * 280;
        const alpha = (1 - progress) * 0.35;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = isDark
          ? `rgba(134, 239, 172, ${alpha})`
          : `rgba(74, 222, 128, ${alpha})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    }

    function drawWisps(time) {
      const isDark = theme === "dark";
      const wispColor = isDark ? "rgba(192, 132, 252, 0.55)" : "rgba(139, 92, 246, 0.45)";
      const goldWisp = isDark ? "rgba(245, 197, 24, 0.45)" : "rgba(184, 134, 11, 0.4)";

      wispsRef.current.forEach((w, i) => {
        if (!reduced) {
          w.y -= w.drift;
          w.x += Math.sin(time * 0.001 + w.phase) * w.sway * 0.08;
          if (w.y < -20) {
            w.y = height + 20;
            w.x = Math.random() * width;
          }
        }

        const px = w.x + (mouseRef.current.x - 0.5) * 50 * w.z;
        const py = w.y + (mouseRef.current.y - 0.5) * 40 * w.z;
        const pulse = 0.6 + Math.sin(time * 0.002 + w.phase) * 0.4;

        ctx.beginPath();
        ctx.arc(px, py, w.size * pulse * w.z, 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? goldWisp : wispColor;
        ctx.globalAlpha = 0.25 + w.z * 0.35;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
    }

    function drawYogaSilhouetteHints(cx, cy, time) {
      const isDark = theme === "dark";
      const stroke = isDark ? "rgba(245, 197, 24, 0.08)" : "rgba(184, 134, 11, 0.07)";
      const breath = Math.sin(time * 0.0012) * 8;

      ctx.save();
      ctx.translate(cx, cy + 120 + breath);
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";

      ctx.beginPath();
      ctx.arc(0, -55, 12, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, -43);
      ctx.lineTo(0, 10);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, -20);
      ctx.lineTo(-35, 5);
      ctx.moveTo(0, -20);
      ctx.lineTo(35, 5);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, 10);
      ctx.lineTo(-22, 55);
      ctx.moveTo(0, 10);
      ctx.lineTo(22, 55);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-22, 55);
      ctx.lineTo(-38, 30);
      ctx.moveTo(22, 55);
      ctx.lineTo(38, 30);
      ctx.stroke();

      ctx.restore();
    }

    function render(time) {
      ctx.clearRect(0, 0, width, height);
      const { x: cx, y: cy } = center();

      drawWisps(time);
      drawAura(time, cx, cy);
      drawRipples(time, cx, cy);
      drawChakraRings(time, cx, cy);
      drawEnergyRays(time, cx, cy);
      drawMandala(time, cx, cy);
      drawYogaSilhouetteHints(cx, cy, time);

      if (!reduced) {
        animationId = requestAnimationFrame(render);
      }
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });

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
