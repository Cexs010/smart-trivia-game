// app/components/ArcadeButton.tsx
import React from "react";

interface ArcadeButtonProps {
  label?: string;
  color?: string;
}

export default function ArcadeButton({
  label = "",
  color = "",
}: ArcadeButtonProps) {
  const darker = shadeColor(color, -20);

  return (
    <div className="relative flex items-center justify-center">
      <div
        className="h-24 w-24 rounded-full"
        style={{
          background: darker,
          boxShadow: "0 6px 10px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(0,0,0,0.6)",
        }}
      ></div>

      <button
        type="button"
        className="absolute flex items-center justify-center h-19 w-19 rounded-full font-bold text-black active:translate-y-[3px] transition-transform duration-100"
        style={{
          background: color,
          border: "0.5px solid rgba(0,0,0,0.6)",
          boxShadow:
            "inset 0 -3px 5px rgba(0, 0, 0, 0.3), 0 2px 3px rgba(255, 255, 255, 0.2)",
        }}
      >
        {label}
      </button>
    </div>
  );
}

/**
  @param color 
 @param percent 
 */
function shadeColor(color: string, percent: number): string {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = Math.min(255, Math.max(0, Math.round((R * (100 + percent)) / 100)));
  G = Math.min(255, Math.max(0, Math.round((G * (100 + percent)) / 100)));
  B = Math.min(255, Math.max(0, Math.round((B * (100 + percent)) / 100)));

  const RR = R.toString(16).padStart(2, "0");
  const GG = G.toString(16).padStart(2, "0");
  const BB = B.toString(16).padStart(2, "0");

  return `#${RR}${GG}${BB}`;
}
