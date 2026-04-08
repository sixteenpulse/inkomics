"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import Navigation from "@/components/Navigation";
import BookingInline from "@/components/BookingInline";

const FILTERS = ["ALL", "BLACKWORK", "FINE LINE", "JAPANESE", "REALISM"];

// Generate deterministic images for the gallery
const PICS = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  src: `https://loremflickr.com/800/${i % 2 === 0 ? '1000' : '800'}/tattoo?random=${30 + i}`,
  category: FILTERS[(i % 4) + 1], // Disperse categories organically
}));

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const gridRef = useRef<HTMLDivElement>(null);
  
  const filteredPics = activeFilter === "ALL" 
    ? PICS 
    : PICS.filter(p => p.category === activeFilter);

  useEffect(() => {
    if (!gridRef.current) return;
    const items = gridRef.current.querySelectorAll('.gallery-item');
    
    // Reset opacities quickly
    gsap.set(items, { opacity: 0, y: 20 });
    
    // Stagger in
    gsap.to(items, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: "power2.out"
    });
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-background pt-32 pb-10">
      <Navigation />
      
      <header className="px-6 md:px-10 max-w-[1400px] mx-auto mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div>
           <h1 className="font-display text-5xl md:text-8xl uppercase leading-[0.9]">
             OUR WORK.
           </h1>
        </div>
        
        <div className="flex flex-wrap gap-4 md:gap-8 font-accent text-xs tracking-widest uppercase">
          {FILTERS.map(f => (
            <button 
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`transition-colors duration-300 ${activeFilter === f ? "text-accent-red" : "text-text-secondary hover:text-text-primary"}`}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      <section className="px-6 md:px-10 max-w-[1400px] mx-auto mb-24">
        {/* CSS Columns block to emulate masonry without complex JS computation */}
        <div ref={gridRef} className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {filteredPics.map((pic) => (
            <div key={pic.id} className="gallery-item w-full relative overflow-hidden group break-inside-avoid">
              {/* Ensure standard height resolution based on deterministic data */}
               <Image 
                 src={pic.src} 
                 alt={`Tattoo Work ${pic.category}`} 
                 width={800}
                 height={pic.id % 2 === 0 ? 1000 : 800}
                 className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] scale-100 group-hover:scale-105"

               />
               <div className="absolute inset-0 bg-[#080808]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-accent text-xs tracking-widest text-accent-white">
                    {pic.category}
                  </span>
               </div>
            </div>
          ))}
        </div>
        {filteredPics.length === 0 && (
          <div className="w-full py-24 text-center font-accent text-text-secondary tracking-widest">
            NO PIECES FOUND IN THIS CATEGORY.
          </div>
        )}
      </section>

      <BookingInline />
    </main>
  );
}
