"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import BookingButton from "./BookingButton";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down - hide
          gsap.to(navRef.current, { yPercent: -100, duration: 0.3, ease: 'power2.inOut' });
        } else {
          // Scrolling up - show minimal
          gsap.to(navRef.current, { yPercent: 0, backgroundColor: '#080808ee', backdropFilter: 'blur(10px)', borderBottom: '1px solid #111111', duration: 0.3, ease: 'power2.out' });
        }
      } else {
        // At top
        gsap.to(navRef.current, { yPercent: 0, backgroundColor: 'transparent', backdropFilter: 'none', borderBottom: '1px solid transparent', duration: 0.3 });
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 md:px-10 transition-colors">
        <Link href="/" className="font-accent font-black tracking-tighter text-xl uppercase z-50 mix-blend-difference">
          Inkomics
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center font-accent text-xs tracking-[0.1em] uppercase mix-blend-difference">
          <Link href="/gallery" className="hover:text-accent-red transition-colors">Gallery</Link>
          <Link href="/artists" className="hover:text-accent-red transition-colors">Artists</Link>
          <Link href="/culture" className="hover:text-accent-red transition-colors">Culture</Link>
          <Link href="/about" className="hover:text-accent-red transition-colors">About</Link>
          <Link href="/contact" className="hover:text-accent-red transition-colors">Contact</Link>
          <BookingButton className="ml-4 px-5 py-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 pointer-events-auto" />
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden font-accent text-xs tracking-widest uppercase z-50 mix-blend-difference"
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-background z-40 flex flex-col justify-center items-center gap-8 md:hidden">
          <Link onClick={() => setMenuOpen(false)} href="/gallery" className="font-display text-4xl hover:text-accent-red transition-colors">Gallery</Link>
          <Link onClick={() => setMenuOpen(false)} href="/artists" className="font-display text-4xl hover:text-accent-red transition-colors">Artists</Link>
          <Link onClick={() => setMenuOpen(false)} href="/culture" className="font-display text-4xl hover:text-accent-red transition-colors">Culture</Link>
          <Link onClick={() => setMenuOpen(false)} href="/about" className="font-display text-4xl hover:text-accent-red transition-colors">About</Link>
          <Link onClick={() => setMenuOpen(false)} href="/contact" className="font-display text-4xl hover:text-accent-red transition-colors">Contact</Link>
          <BookingButton className="mt-8 px-8 py-4 border border-surface hover:bg-text-primary hover:text-background font-accent text-sm tracking-widest uppercase transition-colors" />
        </div>
      )}
    </>
  );
}
