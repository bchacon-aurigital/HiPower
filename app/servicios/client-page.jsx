"use client";
import { useEffect } from "react";
import ServiciosHero from "../components/servicios/ServiciosHero";
import NavbarServicios from "../components/NavbarServicios";
import Footer from "../components/Footer";
import Servicios from "../components/servicios/Servicios";
import ProcesoTrabajo from "../components/servicios/ProcesoTrabajo";
import BeneficiosEnergiaSolar from "../components/servicios/BeneficiosEnergiaSolar";
import CTA from "../components/servicios/CTA";

export default function ProyectosClientPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3]">
      <NavbarServicios />
      <ServiciosHero />
      <Servicios />
      <ProcesoTrabajo/>
      <BeneficiosEnergiaSolar/>
      <CTA />
      <Footer />
    </main>
  );
} 