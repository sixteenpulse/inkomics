import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#080808] border-t border-surface">
       <div className="w-full py-10 px-6 md:px-10 border-b border-surface">
          <span className="font-accent text-[10px] tracking-[0.2em] uppercase text-text-secondary mb-6 block">FOLLOW THE WORK — @INKOMICS</span>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
            {[
              "14",
              "15",
              "16",
              "17",
              "18"
            ].map((id) => (
              <div key={id} className="w-full aspect-square relative bg-surface overflow-hidden group cursor-pointer">
                 <Image src={`https://loremflickr.com/400/400/tattoo?random=${id}`} alt="Instagram post" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                 <div className="absolute inset-0 bg-accent-red/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-accent text-xs tracking-widest">VIEW</span>
                 </div>
              </div>
            ))}
          </div>
          <p className="font-body mt-6 text-sm opacity-60">Daily ink. Process shots. The work between the work.</p>
       </div>
       
       <div className="max-w-[1400px] mx-auto py-16 px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="font-accent font-black tracking-tighter text-4xl md:text-5xl uppercase block mb-4">
              Inkomics
            </Link>
            <span className="font-body text-sm text-text-secondary">© 2026 Inkomics Studio.</span>
          </div>
          
          <div className="flex flex-col gap-2 font-accent text-xs tracking-widest uppercase text-text-secondary">
             <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
             <Link href="/artists" className="hover:text-white transition-colors">Artists</Link>
             <Link href="/culture" className="hover:text-white transition-colors">Culture</Link>
             <Link href="/about" className="hover:text-white transition-colors">About</Link>
             <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
             <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-2 font-body text-sm text-text-secondary">
             <span className="text-white">hello@inkomics.com</span>
             <span>Mon–Sat 11:00–19:00</span>
             <span>102 Studio Ave, Design District</span>
          </div>
       </div>
    </footer>
  );
}
