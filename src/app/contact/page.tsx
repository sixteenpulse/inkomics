"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Navigation from "@/components/Navigation";

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "default",
        embedJsUrl: "https://cal.id/embed-link/embed.js"
      });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#080808", "cal-bg": "transparent" },
          dark: { "cal-brand": "#C8102E", "cal-bg": "transparent" }
        },
        hideEventTypeDetails: false,
        hideBranding: true,
        layout: "month_view"
      } as any);
      cal("on", {
        action: "bookingSuccessful",
        callback: (event: any) => {
          window.location.href = "/success";
        }
      });
      setIsLoaded(true);
    })();
  }, []);

  return (
    <main className="min-h-screen bg-background text-text-primary selection:bg-accent-red selection:text-white pb-12">
      <Navigation />
      
      {/* Contact Header */}
      <section className="w-full pt-32 md:pt-44 pb-12 px-6 md:px-10 max-w-[1400px] mx-auto border-b border-surface">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-between items-start md:items-end">
          <div className="flex flex-col gap-4">
            <span className="font-accent text-[10px] md:text-xs tracking-[0.15em] uppercase text-text-secondary">
              05 — CONSULTATIONS
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[100px] leading-[0.9] uppercase relative inline-block">
              BOOK A <br className="hidden md:block" />SESSION.
            </h1>
          </div>
          <div className="max-w-xs font-accent text-xs md:text-sm leading-relaxed tracking-wide text-text-secondary">
            <p>Our artists review all inquiries manually. Please select an available slot below to secure your consultation block.</p>
          </div>
        </div>
      </section>

      {/* Embedded Booking Frame */}
      <section className="w-full py-12 md:py-16 px-0 md:px-10 max-w-[1400px] mx-auto flex justify-center">
        <div className="w-full max-w-5xl bg-surface/30 md:rounded-xl overflow-hidden border-y md:border-x border-surface relative min-h-[700px]">
            {!isLoaded && (
               <div className="absolute inset-0 flex items-center justify-center p-6 text-center font-accent text-xs tracking-widest text-text-secondary animate-pulse uppercase">
                 INITIALIZING SECURE PORTAL...
               </div>
            )}
            <Cal 
              namespace="default"
              calLink="bold-labs/something-artist"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view", theme: "dark", hideBranding: "true" }}
              calOrigin="https://cal.id"
              embedJsUrl="https://cal.id/embed-link/embed.js"
            />
        </div>
      </section>
      
    </main>
  );
}
