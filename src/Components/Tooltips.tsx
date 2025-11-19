"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";

interface TooltipProps {
  content: React.ReactNode; // allow JSX (image + text)
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  githubLink?: string;
}

export default function Tooltip({
  content,
  children,
  position = "top",
  githubLink = "https://github.com/your-repo", // replace with actual repo
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const tooltip = tooltipRef.current;
    const container = containerRef.current;

    if (tooltip && container && isVisible) {
      const tooltipRect = tooltip.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      let top = 0;
      let left = 0;

      switch (position) {
        case "top":
          top = -tooltipRect.height - 10;
          left = (containerRect.width - tooltipRect.width) / 2;
          break;
        case "bottom":
          top = containerRect.height + 10;
          left = (containerRect.width - tooltipRect.width) / 2;
          break;
        case "left":
          top = (containerRect.height - tooltipRect.height) / 2;
          left = -tooltipRect.width - 10;
          break;
        case "right":
          top = (containerRect.height - tooltipRect.height) / 2;
          left = containerRect.width + 10;
          break;
      }

      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;
    }
  }, [isVisible, position]);

  return (
    <div ref={containerRef} className="relative inline-block">
      {children}
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`absolute z-20 px-4 py-3 bg-[#4A4A4A] rounded-xl shadow-lg  duration-300 max-w-[30rem] ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-start gap-3">{content}</div>
        </div>
      )}
    </div>
  );
}
