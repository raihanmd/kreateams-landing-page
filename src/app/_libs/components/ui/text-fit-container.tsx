"use client";

import { useEffect, useRef } from "react";

export default function TextFitContainer({ content }: { content: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  return (
    <div
      className="relative -left-12 z-[-1] w-full xl:-left-48 2xl:-left-72"
      ref={containerRef}
    >
      <p
        className="absolute -top-5 select-none font-neue leading-none text-transparent [-webkit-text-stroke:_2px_#f4b100] [text-stroke:_2px_#f4b100] sm:-top-12 md:-top-20"
        ref={textRef}
      >
        {content}
      </p>
    </div>
  );
}
