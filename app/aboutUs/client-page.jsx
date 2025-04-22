"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import AboutUsHero from "../components/aboutUs/AboutUsHero";

const Navbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});

const Footer = dynamic(() => import("../components/Footer"), {
  ssr: false,
});

const Timeline = dynamic(() => import("../components/aboutUs/Timeline"), {
  ssr: false,
});

const Commitment = dynamic(() => import("../components/aboutUs/Commitment"), {
  ssr: false,
});

const CTA = dynamic(() => import("../components/aboutUs/CTA"), {
    ssr: false,
  });

export default function ProyectosClientPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3]">
      <Navbar />
      <AboutUsHero />
      <Commitment/>
      <Timeline />
      <CTA />
      <Footer />
    </main>
  );
} 