"use client";
import { Parallax } from 'react-parallax';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProyectoSolar from "./components/ProyectoSolar";
import BrandCarousel from "./components/BrandCarousel";
import Footer from "./components/Footer";
import StatisticsSection from "./components/StatisticsSection";
import CertificationsSection from "./components/CertificationsSection";
import SolarEnergySection from "./components/SolarEnergySection";
import PartnersSection from "./components/PartnersSection";
import CTA from "./components/CTA";

const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <video
          className="fixed top-0 left-0 w-full h-full object-cover"
          src="/assets/homepage/parallax.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        <section className="relative z-20 h-full md:bg-fixed bg-cover bg-center">
          <Navbar />
          <Hero />
          <ProyectoSolar />
          <BrandCarousel />
          <StatisticsSection />
          <CertificationsSection />
          <PartnersSection />
          <SolarEnergySection />
          <CTA />
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default Home;