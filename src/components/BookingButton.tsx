"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

interface BookingButtonProps {
  className?: string;
  label?: string;
}

export default function BookingButton({ 
  className = "", 
  label = "BOOK CONSULTATION" 
}: BookingButtonProps) {
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
    })();
  }, []);

  return (
    <button
      className={className}
      data-cal-namespace="default"
      data-cal-link="bold-labs/something-artist"
      data-cal-origin="https://cal.id"
      data-cal-config='{"layout":"month_view","theme":"dark"}'
    >
      {label}
    </button>
  );
}
