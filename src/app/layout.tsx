import type { Metadata } from "next";
import { Fraunces, DM_Sans, Space_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inkomics Studio | Ink Editorial",
  description: "A studio for people who take their art seriously. Custom work only.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${spaceGrotesk.variable} antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-full flex flex-col font-body bg-background text-text-primary selection:bg-accent-red selection:text-white"
        suppressHydrationWarning
      >
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
