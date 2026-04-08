"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Disable custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }

    const cursor = cursorRef.current;
    const text = textRef.current;
    if (!cursor || !text) return;

    // Quick setters for performance
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);

    // Handle interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const link = target.closest('a, button');
      const image = target.closest('img, [data-cursor="view"]');
      
      if (link) {
        gsap.to(cursor, { scale: 1.5, mixBlendMode: 'difference', borderColor: '#C8102E', backgroundColor: '#C8102E', duration: 0.2 });
        gsap.to('.cursor-cross', { opacity: 0, duration: 0.1 });
      } else if (image) {
        gsap.to(cursor, { 
          scale: 4.5, 
          borderColor: '#F0EDE6',
          backgroundColor: '#080808',
          mixBlendMode: 'normal',
          duration: 0.3,
          ease: "back.out(1.5)"
        });
        gsap.to('.cursor-cross', { opacity: 0, duration: 0.1 });
        if (text) {
          text.innerHTML = 'VIEW';
          gsap.to(text, { opacity: 1, duration: 0.2 });
        }
      } else {
        // Reset
        gsap.to(cursor, { 
          scale: 1, 
          borderColor: '#F0EDE6', 
          backgroundColor: 'transparent',
          mixBlendMode: 'difference',
          duration: 0.2 
        });
        gsap.to('.cursor-cross', { opacity: 1, duration: 0.2 });
        if (text) gsap.to(text, { opacity: 0, duration: 0.1 });
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [pathname]);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-[14px] h-[14px] border border-text-primary rounded-full select-none pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
    >
      <div className="cursor-cross absolute w-full h-[1px] bg-text-primary"></div>
      <div className="cursor-cross absolute w-[1px] h-full bg-text-primary"></div>
      <span ref={textRef} className="absolute font-accent text-[3px] tracking-widest text-text-primary opacity-0 mt-[1px]"></span>
    </div>
  );
}
