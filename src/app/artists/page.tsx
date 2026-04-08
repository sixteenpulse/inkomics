"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import BookingInline from "@/components/BookingInline";

export const ARTISTS = [
  {
    slug: "mara-solis",
    name: "MARA SOLÍS",
    specialty: "HEAVY BLACKWORK",
    image: "https://loremflickr.com/800/1000/portrait,tattoo?random=7",
  },
  {
    slug: "juno-park",
    name: "JUNO PARK",
    specialty: "FINE LINE & MICRO",
    image: "https://loremflickr.com/800/1000/portrait,tattoo?random=8",
  },
  {
    slug: "ezra-volk",
    name: "EZRA VOLK",
    specialty: "NEO-JAPANESE",
    image: "https://loremflickr.com/800/1000/portrait,tattoo?random=9",
  }
];

export default function ArtistsPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-10">
      <Navigation />
      
      <header className="px-6 md:px-10 max-w-[1400px] mx-auto mb-16 md:mb-24 flex flex-col gap-6">
         <span className="font-accent text-xs tracking-[0.15em] uppercase text-text-secondary">
           OUR ROSTER
         </span>
         <h1 className="font-display text-5xl md:text-8xl uppercase leading-[0.9] max-w-3xl">
           NO APPRENTICES. <br/> NO GUEST SPOTS.
         </h1>
      </header>

      <section className="px-6 md:px-10 max-w-[1400px] mx-auto mb-32 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {ARTISTS.map((artist) => (
          <Link href={`/artists/${artist.slug}`} key={artist.slug}>
            <div className="group cursor-pointer flex flex-col gap-6">
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-surface">
                 <Image 
                   src={artist.image} 
                   alt={artist.name} 
                   fill 
                   className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-[cubic-bezier(0.76,0,0.24,1)] scale-100 group-hover:scale-110" 

                 />
                 <div className="absolute top-0 left-0 w-full h-full bg-accent-red/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <div className="flex flex-col gap-2 border-t border-surface pt-4 relative overflow-hidden">
                 <h2 className="font-display text-4xl uppercase tracking-tighter group-hover:text-accent-red transition-colors duration-500">
                   {artist.name}
                 </h2>
                 <span className="font-accent text-xs tracking-widest text-text-secondary">
                   {artist.specialty}
                 </span>
                 <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent-red -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <BookingInline />
    </main>
  );
}
