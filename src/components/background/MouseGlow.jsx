import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const ref = useRef(null);
  const pos = useRef({ x: -400, y: -400 });
  const target = useRef({ x: -400, y: -400 });
  const visible = useRef(false);
  const frame = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (!el || reduced) return;

    function onMove(event) {
      target.current = { x: event.clientX, y: event.clientY };
      visible.current = true;
      el.style.opacity = "1";
    }

    function onLeave() {
      visible.current = false;
      el.style.opacity = "0";
    }

    function tick() {
      if (visible.current) {
        pos.current.x += (target.current.x - pos.current.x) * 0.12;
        pos.current.y += (target.current.y - pos.current.y) * 0.12;
        el.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      frame.current = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    frame.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="mouse-glow pointer-events-none fixed left-0 top-0 z-[1] hidden md:block"
      style={{ opacity: 0 }}
      aria-hidden="true"
    />
  );
}
