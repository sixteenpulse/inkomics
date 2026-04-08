"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const faqs = [
  {
    question: "Do you accept walk-ins?",
    answer: "No. Inkomics is a custom-only, appointment-only studio. We dedicate our full attention to clients who have booked in advance to ensure the highest quality of focused, custom artwork."
  },
  {
    question: "What is your hourly rate?",
    answer: "Our artists book by the session (half-day or full-day) rather than strictly by the hour. Rates vary depending on the artist and the complexity of the piece. A deposit is required to secure your booking."
  },
  {
    question: "Do you do cover-ups?",
    answer: "Yes, depending on the existing tattoo and your goals. Cover-ups require a mandatory in-person consultation so the artist can properly assess the skin, scale, and density needed to effectively execute the new piece."
  },
  {
    question: "How should I prepare for my session?",
    answer: "Rest well, eat a full meal before arriving, and stay hydrated. Do not consume alcohol 24 hours prior. Wear comfortable clothing that allows easy access to the area being tattooed."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-10 bg-background border-t border-surface">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <span className="font-accent text-xs tracking-[0.15em] uppercase text-text-secondary">
            INFORMATION
          </span>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.9] uppercase">
            FREQUENTLY <br/> ASKED.
          </h2>
          <p className="font-body text-text-secondary mt-4 max-w-sm">
            Everything you need to know before securing a session at Inkomics.
          </p>
        </div>

        <div className="w-full md:w-2/3 flex flex-col border-t border-surface">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-surface">
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full py-8 flex justify-between items-center text-left group hover:text-accent-red transition-colors"
              >
                <span className="font-accent text-sm md:text-base tracking-widest uppercase pr-8">
                  {faq.question}
                </span>
                <span className="font-display text-2xl group-hover:scale-110 transition-transform">
                  {openIndex === idx ? "—" : "+"}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  openIndex === idx ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-body text-text-secondary leading-relaxed max-w-2xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
