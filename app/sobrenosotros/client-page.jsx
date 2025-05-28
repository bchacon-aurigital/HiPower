"use client";
import { useEffect } from "react";
import AboutUsHero from "../components/aboutUs/AboutUsHero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Timeline from "../components/aboutUs/Timeline";
import Commitment from "../components/aboutUs/Commitment";
import CTA from "../components/aboutUs/CTA";

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