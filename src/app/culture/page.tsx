import Link from "next/link";
import Navigation from "@/components/Navigation";
import BookingInline from "@/components/BookingInline";

export const ARTICLES = [
  {
    title: "Why Japanese Irezumi Changed Everything",
    category: "HISTORY",
    readTime: "6 MIN",
    date: "MAR 14, 2026",
  },
  {
    title: "The Case Against Flash: On Custom-Only Studios",
    category: "OPINION",
    readTime: "4 MIN",
    date: "FEB 28, 2026",
  },
  {
    title: "What Your Artist Needs You to Know Before the First Session",
    category: "GUIDE",
    readTime: "8 MIN",
    date: "FEB 10, 2026",
  },
  {
    title: "Understanding Heavy Blackwork Architecture",
    category: "INTERVIEW",
    readTime: "12 MIN",
    date: "JAN 22, 2026",
  },
  {
    title: "Aftercare: The Brutal Truth About Second Skin Healing",
    category: "GUIDE",
    readTime: "5 MIN",
    date: "DEC 05, 2025",
  }
];

export default function CulturePage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-10">
      <Navigation />
      
      <header className="px-6 md:px-10 max-w-[1400px] mx-auto mb-20 md:mb-32">
         <span className="font-accent text-xs tracking-[0.15em] uppercase text-text-secondary">
           THE JOURNAL
         </span>
         <h1 className="font-display text-5xl md:text-8xl lg:text-[120px] uppercase leading-[0.8] mt-4 mb-8">
           CULTURE.
         </h1>
         <p className="font-body text-xl md:text-2xl text-text-secondary max-w-2xl">
           Editorials, studio policy updates, and historical examinations of the ink we permanentize.
         </p>
      </header>

      <section className="px-6 md:px-10 max-w-[1400px] mx-auto mb-32 flex flex-col">
         {/* Table Header Row */}
         <div className="hidden md:flex justify-between w-full border-b border-text-secondary pb-4 mb-4 font-accent text-[10px] tracking-[0.2em] uppercase text-text-secondary">
           <div className="w-[10%]">DATE</div>
           <div className="w-[50%]">TITLE</div>
           <div className="w-[20%]">CATEGORY</div>
           <div className="w-[20%] text-right">READ TIME</div>
         </div>

         {/* Magazine Article Listing */}
         {ARTICLES.map((article, idx) => (
           <Link href="#" key={idx} className="w-full border-b border-surface group cursor-pointer hover:border-text-primary transition-colors duration-500">
             <article className="w-full flex justify-between items-start md:items-center py-8">
               {/* Mobile / Shared Title block */}
               <div className="flex flex-col md:hidden w-full gap-2">
                 <div className="flex justify-between font-accent text-[10px] text-text-secondary uppercase">
                   <span>{article.date}</span>
                   <span className="text-accent-red">{article.category}</span>
                 </div>
                 <h3 className="font-display text-3xl group-hover:text-accent-red transition-colors">{article.title}</h3>
                 <span className="font-accent text-[10px] text-text-secondary">{article.readTime}</span>
               </div>

               {/* Desktop Wide Row */}
               <div className="hidden md:flex justify-between w-full items-center">
                   <div className="w-[10%] font-accent text-xs text-text-secondary">{article.date.split(',')[0]}</div>
                   <h3 className="w-[50%] font-display text-4xl pr-8 group-hover:text-accent-red transition-colors duration-300">
                     {article.title}
                   </h3>
                   <div className="w-[20%] font-accent text-xs tracking-widest text-[#8A8680] group-hover:text-text-primary transition-colors">
                     {article.category}
                   </div>
                   <div className="w-[20%] text-right font-accent text-xs tracking-widest">{article.readTime}</div>
               </div>
             </article>
           </Link>
         ))}
      </section>

      <BookingInline />
    </main>
  );
}
