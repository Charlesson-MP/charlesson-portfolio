"use client"

import { useState, useEffect, useRef } from "react";

interface WalkingCharacterProps {
  frame1: string;
  frame2: string;
  interval?: number;
  height?: number;
  direction?: "right" | "left";
  className?: string;
}

export default function WalkingCharacter({
  frame1,
  frame2,
  interval = 300,
  height = 120,
  direction = "right",
  className = "",
}: WalkingCharacterProps) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const tick = () => {
      setCurrentFrame((f) => (f === 0 ? 1 : 0));
      timerRef.current = setTimeout(tick, interval);
    };

    timerRef.current = setTimeout(tick, interval);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [interval]);

  const src = currentFrame === 0 ? frame1 : frame2;

  return (
    <div className={className} style={{ display: "inline-block", lineHeight: 0 }}>
      <img
        src={src}
        alt="personagem caminhando"
        style={{
          height: `${height}px`,
          width: "auto",
          imageRendering: "pixelated",
          transform: direction === "left" ? "scaleX(-1)" : "scaleX(1)",
          transition: "transform 0.1s ease",
          userSelect: "none",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}