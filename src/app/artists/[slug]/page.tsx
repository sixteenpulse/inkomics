"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import BookingInline from "@/components/BookingInline";

// Shared data pool
const ARTIST_DB: Record<string, any> = {
  "mara-solis": {
    name: "MARA SOLÍS",
    specialty: "HEAVY BLACKWORK",
    bio: "Mara’s methodology revolves around architectural geometry intersecting with organic flowing shapes. Her heavy blackwork relies entirely on deliberate saturation, carving bold contrast onto the body. Operating out of our primary studio, Mara is currently booking three months out exclusively for large-scale pieces.",
    images: Array.from({ length: 6 }).map((_, i) => `https://loremflickr.com/1000/1200/tattoo,blackwork?random=${100 + i}`),
  },
  "juno-park": {
    name: "JUNO PARK",
    specialty: "FINE LINE & MICRO",
    bio: "Juno engineers delicacy. Every piece is constructed with single needles and ultra-tight grouping to achieve realism and micro-illustrative designs that mimic graphite pencil sketches on skin. Juno’s sessions are quiet, methodical, and profoundly focused.",
    images: Array.from({ length: 6 }).map((_, i) => `https://loremflickr.com/1000/1200/tattoo,fineline?random=${200 + i}`),
  },
  "ezra-volk": {
    name: "EZRA VOLK",
    specialty: "NEO-JAPANESE",
    bio: "Ezra fuses the strict mythological guidelines of traditional Irezumi with modern illustrative gradients and brutalist composition. From full backplates to sleeves, Ezra’s focus is on the flow of the body, adapting massive dragon and koi motifs seamlessly across anatomy.",
    images: Array.from({ length: 6 }).map((_, i) => `https://loremflickr.com/1000/1200/tattoo,japanese?random=${300 + i}`),
  }
};

export default function ArtistProfilePage() {
  const params = useParams();
  const slug = params.slug as string;
  const artist = ARTIST_DB[slug];

  if (!artist) {
    return (
      <main className="min-h-screen bg-background flex flex-col justify-center items-center">
         <Navigation />
         <h1 className="font-display text-4xl uppercase text-text-secondary">ARTIST NOT FOUND.</h1>
         <Link href="/artists" className="mt-8 font-accent tracking-widest hover:text-accent-red transition-colors">← BACK TO ROSTER</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background pt-32 pb-10">
      <Navigation />

      <section className="px-6 md:px-10 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative mb-32">
         {/* Left Sticky Column: Biography */}
         <div className="w-full lg:w-5/12 h-fit lg:sticky lg:top-32 flex flex-col gap-8 pr-0 lg:pr-10 border-b lg:border-b-0 lg:border-r border-surface pb-12 lg:pb-0">
            <Link href="/artists" className="font-accent text-[10px] tracking-widest text-text-secondary hover:text-accent-red uppercase w-fit inline-block mb-4">
              ← BACK TO ROSTER
            </Link>
            
            <div className="flex flex-col gap-2">
              <span className="font-accent text-xs tracking-[0.2em] text-accent-red uppercase">
                {artist.specialty}
              </span>
              <h1 className="font-display text-5xl sm:text-7xl lg:text-[100px] leading-[0.8] uppercase tracking-[-0.02em]">
                {artist.name.split(' ').map((part: string, i: number) => (
                  <span key={i} className="block">{part}</span>
                ))}
              </h1>
            </div>

            <p className="font-body text-text-primary/80 leading-relaxed text-lg sm:text-xl max-w-md">
              {artist.bio}
            </p>

            <div className="pt-8 border-t border-surface flex flex-col gap-6 font-accent text-xs tracking-widest uppercase">
              <div className="flex justify-between">
                <span className="text-text-secondary">CURRENT STATUS</span>
                <span className="text-accent-white">BOOKING OPEN</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">RATE</span>
                <span className="text-accent-white">DAY RATES ONLY</span>
              </div>
              
              <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="w-full py-4 mt-6 border border-accent-white hover:bg-accent-white hover:text-background transition-colors">
                REQUEST SESSION
              </button>
            </div>
         </div>

         {/* Right Scroll Column: Portfolio Feed */}
         <div className="w-full lg:w-7/12 flex flex-col gap-8 md:gap-16">
            {artist.images.map((img: string, idx: number) => (
              <div key={idx} className="relative w-full aspect-[4/5] bg-surface overflow-hidden group">
                 <Image 
                   src={img} 
                   alt={`${artist.name} Portfolio Piece ${idx + 1}`} 
                   fill 
                   className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.76,0,0.24,1)] scale-100 group-hover:scale-[1.03]" 
                 />
              </div>
            ))}
         </div>
      </section>

      <BookingInline />
    </main>
  );
}
