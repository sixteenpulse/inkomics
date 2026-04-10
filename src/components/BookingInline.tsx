"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function BookingInline() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "default",
        embedJsUrl: "https://cal.id/embed-link/embed.js"
      });
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#C8102E" },
          body: { background: "transparent" }
        },
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
    <section className="w-full py-12 md:py-24 px-0 md:px-10 max-w-[1400px] mx-auto min-h-[700px] flex flex-col justify-center items-center border-t border-surface">
      <div className="mb-8 md:mb-12 text-center max-w-2xl flex flex-col gap-3 px-6 md:px-0">
        <span className="font-accent text-xs tracking-[0.15em] uppercase text-text-secondary">
          CONSULTATIONS
        </span>
        <h2 className="font-display text-4xl md:text-6xl uppercase px-2">
          SECURE YOUR SESSION.
        </h2>
        <p className="font-body text-text-secondary text-sm md:text-base mt-2 px-2">
          Select an available slot below. Our artists will review your concept and confirm the appointment.
        </p>
      </div>
      
      <div className="w-full max-w-5xl bg-surface/30 md:rounded-xl overflow-hidden border-y md:border-x border-surface relative min-h-[700px]">
          {!isLoaded && (
             <div className="absolute inset-0 flex items-center justify-center font-accent text-xs tracking-widest text-text-secondary animate-pulse uppercase px-4 text-center">
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
  );
}
