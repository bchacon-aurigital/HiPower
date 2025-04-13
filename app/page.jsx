"use client";
import dynamic from "next/dynamic";
import { Parallax } from 'react-parallax';

const Navbar = dynamic(() => import("./components/Navbar"), {
  ssr: false,
});

const Hero = dynamic(() => import("./components/Hero"), {
  ssr: false,
});

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
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default Home;