"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const images = [
  "https://loremflickr.com/800/1000/tattoo?random=1",
  "https://loremflickr.com/800/800/tattoo?random=2",
  "https://loremflickr.com/800/800/tattoo?random=3",
  "https://loremflickr.com/800/1000/tattoo?random=4",
  "https://loremflickr.com/800/1000/tattoo?random=5", 
  "https://loremflickr.com/800/800/tattoo?random=6"
];

export default function GalleryPreview() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    // Ink Reveal Animation
    const images = containerRef.current.querySelectorAll('.ink-reveal-img');
    
    images.forEach((img) => {
      gsap.fromTo(img, 
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          ease: "power3.out",
          duration: 0.9,
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
          }
        }
      );
    });

  }, []);

  return (
    <section ref={containerRef} className="w-full bg-background py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        
        <header className="mb-16 md:mb-24 flex flex-col gap-4">
          <span className="font-accent text-xs tracking-[0.15em] uppercase text-text-secondary">
            SELECTED WORK — 2024–2025
          </span>
          <h2 className="font-display text-4xl md:text-6xl max-w-xl leading-tight">
            Ink that earns its permanence.
          </h2>
        </header>

        {/* Masonry Grid Simulation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mb-16">
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-6">
            <div className="relative w-full aspect-[4/5] overflow-hidden group">
               <Image src={images[0]} alt="Tattoo detail" fill className="ink-reveal-img object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" data-cursor="view" />
            </div>
            <div className="relative w-full aspect-square overflow-hidden group">
               <Image src={images[1]} alt="Tattoo detail" fill className="ink-reveal-img object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" data-cursor="view" />
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 lg:mt-24">
            <div className="relative w-full aspect-square overflow-hidden group">
               <Image src={images[2]} alt="Tattoo detail" fill className="ink-reveal-img object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" data-cursor="view" />
            </div>
            <div className="relative w-full aspect-[4/5] overflow-hidden group">
               <Image src={images[3]} alt="Tattoo detail" fill className="ink-reveal-img object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" data-cursor="view" />
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 lg:-mt-12">
            <div className="relative w-full aspect-[4/5] overflow-hidden group">
               <Image src={images[4]} alt="Tattoo detail" fill className="ink-reveal-img object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" data-cursor="view" />
            </div>
            <div className="relative w-full aspect-square overflow-hidden group">
               <Image src={images[5]} alt="Tattoo detail" fill className="ink-reveal-img object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" data-cursor="view" />
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <Link href="/gallery" className="font-accent text-sm tracking-widest uppercase hover:text-accent-red transition-colors inline-block relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-current hover:after:w-0 after:transition-all after:duration-300">
            VIEW ALL WORK →
          </Link>
        </div>

      </div>
    </section>
  );
}
