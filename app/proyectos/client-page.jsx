"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Navbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});

const ProjectsHero = dynamic(() => import("../components/proyectos/ProjectsHero"), {
  ssr: false,
});

const Footer = dynamic(() => import("../components/Footer"), {
  ssr: false,
});

const Proyectos = dynamic(() => import("../components/proyectos/Proyectos"), {
  ssr: false,
});

const CTA = dynamic(() => import("../components/proyectos/CTA"), {
    ssr: false,
  });

export default function ProyectosClientPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3]">
      <Navbar />
      <ProjectsHero />
      <Proyectos />
      <CTA />
      <Footer />
    </main>
  );
} 