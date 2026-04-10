"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import gsap from "gsap";

export default function SuccessPage() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });
    
    tl.fromTo(".success-title span", 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.1 }
    )
    .fromTo(".success-content", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0 }, 
      "-=1"
    )
    .fromTo(".success-cta", 
      { scaleX: 0, transformOrigin: "left" }, 
      { scaleX: 1 }, 
      "-=0.8"
    );
  }, []);

  return (
    <main className="min-h-screen bg-background text-text-primary selection:bg-accent-red selection:text-white overflow-x-hidden">
      <Navigation />
      
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center px-6 md:px-10 pt-32 pb-20">
        {/* Large Decorative Grain Background */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
        </div>

        <div className="relative z-10 max-w-4xl w-full text-center flex flex-col gap-8 md:gap-12">
          <span className="font-accent text-xs md:text-sm tracking-[0.3em] uppercase text-accent-red animate-pulse">
            TRANSMISSION RECEIVED
          </span>
          
          <h1 className="success-title font-display text-6xl md:text-8xl lg:text-[140px] leading-[0.85] uppercase flex flex-col items-center">
            <span className="inline-block overflow-hidden pb-2">YOU'RE IN</span>
            <span className="inline-block overflow-hidden text-surface-secondary">THE BOOK.</span>
          </h1>

          <div className="success-content flex flex-col gap-6 max-w-xl mx-auto">
            <p className="font-body text-lg md:text-xl text-text-secondary leading-relaxed">
              Your consultation request is now in our system. Our artists will review your concept and reach out via email within 48 hours to confirm the logistics.
            </p>
            
            <div className="flex flex-col gap-2 mt-4 items-center">
              <span className="font-accent text-[10px] tracking-widest text-text-secondary uppercase">CHECK YOUR INBOX FOR</span>
              <span className="font-display text-2xl uppercase text-text-primary">CONFIRMATION_RECEIPT</span>
            </div>
          </div>

          <div className="success-cta mt-8 flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/"
              className="px-10 py-5 bg-text-primary text-background font-accent text-xs tracking-[0.2em] uppercase hover:bg-accent-red hover:text-white transition-all duration-500 flex items-center gap-4 group"
            >
              RETURN TO STUDIO
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            
            <Link 
              href="/culture"
              className="px-10 py-5 border border-surface text-text-primary font-accent text-xs tracking-[0.2em] uppercase hover:border-text-primary transition-all duration-500"
            >
              READ THE JOURNAL
            </Link>
          </div>
        </div>
      </section>

      {/* Decoupled check: Footer is now in layout.tsx, but we ensure layout is clean */}
    </main>
  );
}
