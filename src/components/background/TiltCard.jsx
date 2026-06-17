import { useEffect, useRef, useState } from "react";

export default function TiltCard({ children, className = "", maxTilt = 10, style = {} }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const node = ref.current;
    if (!node) return;

    function onMove(event) {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const rotateY = x * maxTilt;
      const rotateX = -y * maxTilt;
      setTransform(
        `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(8px)`
      );
    }

    function onLeave() {
      setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
    }

    node.addEventListener("mousemove", onMove);
    node.addEventListener("mouseleave", onLeave);
    return () => {
      node.removeEventListener("mousemove", onMove);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, [maxTilt]);

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      style={{ transform, transformStyle: "preserve-3d", ...style }}
    >
      {children}
    </div>
  );
}
