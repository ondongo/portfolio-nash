"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CursorLightMask() {
  const ref = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [smooth, setSmooth] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    document.addEventListener("mousemove", handleMouse);
    return () => document.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    let frame: number;
    const animate = () => {
      setSmooth((prev) => {
        const dx = cursor.x - prev.x;
        const dy = cursor.y - prev.y;
        return {
          x: prev.x + dx * 0.1,
          y: prev.y + dy * 0.1,
        };
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [cursor]);

  const maskStyle: React.CSSProperties = {
    WebkitMaskImage: `radial-gradient(200px at ${smooth.x}px ${smooth.y}px, black 0%, transparent 100%)`,
    maskImage: `radial-gradient(200px at ${smooth.x}px ${smooth.y}px, black 0%, transparent 100%)`,
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
    pointerEvents: "none",
  };

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[-1]"
      style={{
        backgroundImage: "radial-gradient(#ffffff22 0px, transparent 1px)",
        backgroundSize: "6px 6px",
      }}
    >
         <div
        className="absolute inset-0 mask"
        style={{
          // variables CSS dynamiques pour le mask
          ["--mask-radius" as any]: "400px",
          ["--mask-position-x" as any]: `${smooth.x}px`,
          ["--mask-position-y" as any]: `${smooth.y}px`,
        }}
      >
        <div
          className="gradient"
          style={{
            ["--gradient-width" as any]: "300%",
            ["--gradient-height" as any]: "300%",
            ["--gradient-position-x" as any]: `${smooth.x}px`,
            ["--gradient-position-y" as any]: `${smooth.y}px`,
            ["--gradient-color-start" as any]: "#21C55D22",
            ["--gradient-color-end" as any]: "#21C55D00",
            ["--gradient-tilt" as any]: "0deg",
          }}
        />
      </div>
    </div>
  );
}
