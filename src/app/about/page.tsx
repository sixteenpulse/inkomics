"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import BookingInline from "@/components/BookingInline";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    const lines = scrollRef.current.querySelectorAll('.manifesto-line');
    
    lines.forEach((line) => {
      gsap.fromTo(line, 
        { rotateX: -90, opacity: 0, y: 50 },
        {
          rotateX: 0,
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
             trigger: line,
             start: "top 85%",
          }
        }
      );
    });

    gsap.fromTo(".bg-image",
      { scale: 1.2, opacity: 0 },
      { 
         scale: 1, 
         opacity: 0.15, 
         duration: 2, 
         ease: "power2.out",
         scrollTrigger: {
            trigger: ".bg-image-trigger",
            start: "top center",
         }
      }
    )

  }, []);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />

      {/* Hero Intro */}
      <section className="h-screen w-full flex flex-col justify-center px-6 md:px-10 max-w-[1400px] mx-auto border-b border-surface">
         <span className="font-accent text-xs tracking-widest text-text-secondary uppercase mb-8">
           THE TRUTH
         </span>
         <h1 className="font-display text-6xl md:text-[150px] uppercase leading-[0.85] tracking-[-0.02em] text-text-primary z-10 relative">
           WE DONT DO <br/> FLASH. <br/> NEVER WILL. 
         </h1>
      </section>

      {/* Manifesto Sequence */}
      <section ref={scrollRef} className="py-32 md:py-64 px-6 md:px-10 max-w-[1400px] mx-auto flex flex-col gap-24 md:gap-48 relative">
        
        {/* Parallax BG element trigger */}
        <div className="bg-image-trigger absolute inset-0 -z-10 bg-image opacity-0">
           <Image 
             src="https://loremflickr.com/1920/1080/tattoo,studio?random=981" 
             alt="Studio Vibe" 
             fill 
             className="object-cover grayscale"

           />
           <div className="absolute inset-0 bg-background mix-blend-multiply opacity-50"></div>
        </div>

        <div className="manifesto-line font-display text-4xl md:text-8xl lg:text-[110px] uppercase leading-[0.9] max-w-5xl origin-bottom">
          Tattooing is an <span className="text-accent-red">architectural</span> commitment.
        </div>
        
        <div className="manifesto-line font-display text-4xl md:text-8xl lg:text-[110px] uppercase leading-[0.9] max-w-6xl origin-bottom self-end text-right">
          It requires <span className="text-accent-red">blood</span>, trust, and zero compromises.
        </div>
        
        <div className="manifesto-line font-body text-xl md:text-3xl lg:text-4xl leading-relaxed max-w-3xl text-text-secondary origin-bottom">
          Inkomics was founded because we were tired of the generic street-shop mentality. The rush. The copied Pinterest designs. The lack of curation. We believe skin is a premium substrate. If you are going to wear an image until you die, the artist drawing it should treat the task with absolute reverence.
        </div>

        <div className="manifesto-line font-display text-4xl md:text-8xl lg:text-[110px] uppercase leading-[0.9] max-w-5xl origin-bottom">
          We operate quietly. We design heavily.
        </div>

      </section>

      {/* Final Statement & Call to Action built into layout */}
      <section className="w-full bg-[#111111] py-32 px-6 md:px-10 flex flex-col items-center justify-center text-center">
         <h2 className="font-display text-5xl md:text-9xl uppercase text-text-primary mb-8">
           UNDERSTOOD?
         </h2>
      </section>

      <BookingInline />
    </main>
  );
}
