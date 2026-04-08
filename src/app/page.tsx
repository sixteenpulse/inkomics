"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import GalleryPreview from "@/components/GalleryPreview";
import HomeTeasers from "@/components/HomeTeasers";
import BookingButton from "@/components/BookingButton";
import BookingInline from "@/components/BookingInline";
import FAQ from "@/components/FAQ";

gsap.registerPlugin(ScrollTrigger);

// Helper component to split text safely in React 
// This avoids hydration errors and third-party DOM-manipulation conflicts
const AnimatedText = ({ text }: { text: string }) => {
  return (
    <>
      {text.split(" ").map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block mr-[0.3em] leading-none align-top">
          {word.split("").map((char, charIdx) => {
            return (
              <span key={charIdx} className="char inline-block opacity-0 translate-y-[30px] leading-none">
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </>
  );
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Custom GSAP Needle Drag (React Safe)
    if (heroTextRef.current) {
      const chars = heroTextRef.current.querySelectorAll('.char');
      
      gsap.fromTo(chars, 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.03, 
          ease: "back.out(1.2)", 
          duration: 1.2,
          delay: 0.2
        }
      );
    }

    // Hero parallax & fade out text
    gsap.to(".hero-bg", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".hero-text-wrap", {
      yPercent: 50,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Scrolljacked Marquee
    if (marqueeRef.current) {
      gsap.to(".marquee-inner", {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }

  }, []);

  return (
    <main ref={containerRef} className="relative w-full">
      <CustomCursor />
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section relative w-full h-screen overflow-hidden flex items-center justify-center p-6 md:p-10">
        <div className="hero-bg absolute inset-0 w-full h-[120%] -top-[10%] z-0">
          <Image 
            src="https://loremflickr.com/1920/1200/tattoo,studio?random=99" 
            alt="Tattoo Artist working" 
            fill 
            className="object-cover object-center scale-105"
            priority

          />
          {/* Brutalist Grain/Dark Overlay */}
          <div className="absolute inset-0 bg-[#080808] opacity-[0.85] pointer-events-none mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
        </div>
        
        <div className="hero-text-wrap relative z-10 w-full max-w-[1400px] flex flex-col gap-6 md:gap-8">
          <h1 
            ref={heroTextRef}
            className="font-display text-[clamp(48px,9vw,140px)] tracking-tight uppercase flex flex-col"
          >
            <div className="flex flex-wrap overflow-hidden pt-2"><AnimatedText text="NOT ALL ART" /></div>
            <div className="flex flex-wrap overflow-hidden pt-2"><AnimatedText text="HANGS ON WALLS." /></div>
          </h1>
          <p className="font-body text-xl md:text-2xl text-text-primary max-w-lg opacity-80 mt-2">
            Inkomics. A studio for people who take their art seriously.
          </p>

          <div className="mt-8 flex">
            <BookingButton 
              label="SECURE A SESSION"
              className="px-8 py-4 bg-accent-white text-background font-accent text-sm tracking-widest uppercase hover:bg-accent-red hover:text-accent-white transition-all duration-300 pointer-events-auto"
            />
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-6 md:left-10 font-accent text-[11px] tracking-widest uppercase flex items-center gap-4">
          SCROLL
          <div className="w-10 h-[1px] bg-surface relative overflow-hidden">
             <div className="w-full h-full bg-text-primary absolute top-0 left-0 -translate-x-full animate-[scrollLine_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section ref={marqueeRef} className="w-full bg-accent-red py-4 md:py-5 overflow-hidden border-y border-surface flex items-center">
        <div className="marquee-inner flex whitespace-nowrap font-accent text-xs md:text-sm tracking-widest uppercase text-accent-white">
          <span className="pr-10">FINE LINE ✦ BLACKWORK ✦ REALISM ✦ TRADITIONAL ✦ JAPANESE ✦ NEO-TRADITIONAL ✦ CUSTOM WORK ONLY ✦</span>
          <span className="pr-10">FINE LINE ✦ BLACKWORK ✦ REALISM ✦ TRADITIONAL ✦ JAPANESE ✦ NEO-TRADITIONAL ✦ CUSTOM WORK ONLY ✦</span>
          <span className="pr-10">FINE LINE ✦ BLACKWORK ✦ REALISM ✦ TRADITIONAL ✦ JAPANESE ✦ NEO-TRADITIONAL ✦ CUSTOM WORK ONLY ✦</span>
          <span className="pr-10">FINE LINE ✦ BLACKWORK ✦ REALISM ✦ TRADITIONAL ✦ JAPANESE ✦ NEO-TRADITIONAL ✦ CUSTOM WORK ONLY ✦</span>
        </div>
      </section>

      {/* Home Sections */}
      <GalleryPreview />
      <HomeTeasers />
      <FAQ />
      <BookingInline />
      
    </main>
  );
}
