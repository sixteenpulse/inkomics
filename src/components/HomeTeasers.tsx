"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HomeTeasers() {
  const artistsRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Artist card hover logic via generic CSS or slight GSAP
    // Given React patterns, CSS hover is typically better unless complex quickTo is needed.
  }, []);

  return (
    <>
      {/* 04 - Artists */}
      <section ref={artistsRef} className="w-full bg-[#111111] py-24 md:py-32 px-6 md:px-10 border-t border-surface">
        <div className="max-w-[1400px] mx-auto">
          <header className="mb-16 md:mb-24 flex flex-col gap-4">
            <span className="font-accent text-xs tracking-[0.15em] uppercase text-text-secondary">THE ARTISTS</span>
            <h2 className="font-display text-4xl md:text-6xl max-w-xl leading-tight">
              Five perspectives. <br/>One obsession with the craft.
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {/* Artist 1 */}
            <div className="group flex flex-col gap-4 cursor-pointer">
              <div className="relative w-full aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image src="https://loremflickr.com/600/800/portrait,tattoo?random=7" alt="Mara Solís" fill className="object-cover" />
                {/* Reveal tag on hover */}
                <div className="absolute inset-0 bg-[#080808]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <span className="font-accent text-xl tracking-widest text-accent-white">BLACKWORK</span>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-display text-2xl group-hover:text-accent-red transition-colors">Mara Solís</h3>
                <span className="font-accent text-[10px] tracking-widest uppercase text-text-secondary">Blackwork / Illustrative</span>
                <span className="text-sm font-body mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent-red">See Mara's Work →</span>
              </div>
            </div>

            {/* Artist 2 */}
            <div className="group flex flex-col gap-4 cursor-pointer mt-0 md:mt-12">
              <div className="relative w-full aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image src="https://loremflickr.com/600/800/portrait,tattoo?random=8" alt="Juno Park" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#080808]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <span className="font-accent text-xl tracking-widest text-accent-white">FINE LINE</span>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-display text-2xl group-hover:text-accent-red transition-colors">Juno Park</h3>
                <span className="font-accent text-[10px] tracking-widest uppercase text-text-secondary">Fine Line / Botanicals</span>
                <span className="text-sm font-body mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent-red">See Juno's Work →</span>
              </div>
            </div>

            {/* Artist 3 */}
            <div className="group flex flex-col gap-4 cursor-pointer mt-0 md:-mt-12">
              <div className="relative w-full aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image src="https://loremflickr.com/600/800/portrait,tattoo?random=9" alt="Ezra Volk" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#080808]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <span className="font-accent text-xl tracking-widest text-accent-white">JAPANESE</span>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-display text-2xl group-hover:text-accent-red transition-colors">Ezra Volk</h3>
                <span className="font-accent text-[10px] tracking-widest uppercase text-text-secondary">Japanese / Neo-Traditional</span>
                <span className="text-sm font-body mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent-red">See Ezra's Work →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 - Culture Teaser */}
      <section className="w-full bg-background py-24 px-6 md:px-10 border-t border-surface">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-1 flex flex-col gap-4">
             <span className="font-accent text-xs tracking-[0.15em] uppercase text-text-secondary">FROM THE STUDIO</span>
             <p className="font-body text-xl max-w-xs">Tattoo culture runs deeper than skin. We write about it.</p>
             <Link href="/culture" className="mt-8 font-accent text-sm tracking-widest hover:text-accent-red inline-block mr-auto border-b border-current pb-1">READ ALL</Link>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="group cursor-pointer flex flex-col gap-4">
               <div className="w-full aspect-[4/3] relative overflow-hidden bg-surface">
                 <Image src="https://loremflickr.com/600/400/tattoo,artist?random=10" alt="Article" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <span className="font-accent text-[10px] text-accent-red tracking-widest uppercase">HISTORY • 6 MIN</span>
               <h4 className="font-display text-xl leading-snug group-hover:text-text-secondary transition-colors">Why Japanese Irezumi Changed Everything</h4>
            </article>

            <article className="group cursor-pointer flex flex-col gap-4">
               <div className="w-full aspect-[4/3] relative overflow-hidden bg-surface">
                 <Image src="https://loremflickr.com/600/400/tattoo,artist?random=11" alt="Article" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <span className="font-accent text-[10px] text-accent-red tracking-widest uppercase">OPINION • 4 MIN</span>
               <h4 className="font-display text-xl leading-snug group-hover:text-text-secondary transition-colors">The Case Against Flash: On Custom-Only Studios</h4>
            </article>

            <article className="group cursor-pointer flex flex-col gap-4 hidden sm:flex lg:flex">
               <div className="w-full aspect-[4/3] relative overflow-hidden bg-surface">
                 <Image src="https://loremflickr.com/600/400/tattoo,artist?random=12" alt="Article" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <span className="font-accent text-[10px] text-accent-red tracking-widest uppercase">GUIDE • 8 MIN</span>
               <h4 className="font-display text-xl leading-snug group-hover:text-text-secondary transition-colors">What Your Artist Needs You to Know Before the First Session</h4>
            </article>
          </div>

        </div>
      </section>

      {/* 06 - About Teaser */}
      <section className="w-full aspect-square md:aspect-[21/9] relative flex items-center justify-center p-6 md:p-10 border-t border-surface">
         <Image src="https://loremflickr.com/1600/900/tattoo,studio?random=13" alt="Studio space" fill className="object-cover opacity-20 hover:opacity-30 transition-opacity duration-1000 mix-blend-screen" />
         <div className="relative z-10 max-w-3xl flex flex-col items-center text-center gap-8">
            <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.9] uppercase text-text-primary">
              We don't do <br/> walk-in art.
            </h2>
            <p className="font-body text-lg md:text-xl text-text-primary opacity-80 max-w-xl leading-relaxed">
              Inkomics was founded on a single conviction: a tattoo that means nothing is a tattoo that ages badly. Every piece we create begins with a conversation, not a catalog. We'll push back on your idea if we think it can be better. That's not arrogance. That's respect for your skin.
            </p>
            <Link href="/about" className="font-accent text-sm tracking-widest uppercase hover:text-accent-red transition-colors inline-block relative border-b border-transparent hover:border-current pb-1">
              Read our story →
            </Link>
         </div>
      </section>

    </>
  );
}
