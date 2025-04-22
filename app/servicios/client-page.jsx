"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import ServiciosHero from "../components/servicios/ServiciosHero";

const Navbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});

const Footer = dynamic(() => import("../components/Footer"), {
  ssr: false,
});

const Servicios = dynamic(() => import("../components/servicios/Servicios"), {
  ssr: false,
});

const ProcesoTrabajo = dynamic(() => import("../components/servicios/ProcesoTrabajo"), {
  ssr: false,
});

const BeneficiosEnergiaSolar  = dynamic(() => import("../components/servicios/BeneficiosEnergiaSolar"), {
  ssr: false,
});


const CTA = dynamic(() => import("../components/servicios/CTA"), {
    ssr: false,
  });

export default function ProyectosClientPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3]">
      <Navbar />
      <ServiciosHero />
      <Servicios />
      <ProcesoTrabajo/>
      <BeneficiosEnergiaSolar/>
      <CTA />
      <Footer />
    </main>
  );
} 