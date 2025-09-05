"use client";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import dynamic from "next/dynamic";

const ProyectoSolar = dynamic(() => import("./components/ProyectoSolar"), {
  ssr: false,
});

const BrandCarousel = dynamic(() => import("./components/BrandCarousel"), {
  ssr: false,
});

const Footer = dynamic(() => import("./components/Footer"), {
  ssr: false,
});

const StatisticsSection = dynamic(() => import("./components/StatisticsSection"), {
  ssr: false,
});

const CertificationsSection = dynamic(() => import("./components/CertificationsSection"), {
  ssr: false,
});

const SolarEnergySection = dynamic(() => import("./components/SolarEnergySection"), {
  ssr: false,
});

const PartnersSection = dynamic(() => import("./components/PartnersSection"), {
  ssr: false,
});

const CTA = dynamic(() => import("./components/CTA"), {
  ssr: false,
});

const useIsMobile = dynamic(() => import("./hooks/useIsMobile"), {
  ssr: false,
});

const Home = () => {
  const isMobile = useIsMobile();

  return (
    <main className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <video
          className="fixed top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={isMobile ? "/assets/homepage/parallaxMobile.webm" : "/assets/homepage/parallax.webm"} type="video/webm" />
          <source src={isMobile ? "/assets/homepage/parallaxMobile.mp4" : "/assets/homepage/parallax.mp4"} type="video/mp4" />
        </video>
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