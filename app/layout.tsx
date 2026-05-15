import type { Metadata } from "next";
import {
  Inter,
  Space_Grotesk,
  Schibsted_Grotesk,
  Martian_Mono,
} from "next/font/google";
import "./globals.css";
import LightRays from "@/components/ui/LightRays";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import { Suspense } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "The Hub for Every Dev Event You Mustn't Miss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>

        <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
          <LightRays
            raysOrigin="top-center-offset"
            raysColor="#5dfeca"
            raysSpeed={0.5}
            lightSpread={0.9}
            rayLength={1.4}
            followMouse={true}
            mouseInfluence={0.02}
            noiseAmount={0.0}
            distortion={0.01}
          />
        </div>

        <main>{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1a1a2e",
              border: "1px solid rgba(93, 254, 202, 0.2)",
              color: "#e0e0e0",
              fontFamily: "var(--font-inter)",
            },
          }}
          richColors
        />
      </body>
    </html>
  );
}
