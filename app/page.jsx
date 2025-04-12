"use client";
import dynamic from "next/dynamic";

const Loading = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-[#037F3F] to-[#002D6A] z-50">
    <img
      src="/assets/landing/LogoHiPower.svg"
      alt="Loading..."
      className="w-[50vh]"
    />
  </div>
);

const Navbar = dynamic(() => import("./components/Navbar"), {
  ssr: false,
  loading: () => <Loading />,
});

const Hero = dynamic(() => import("./components/Hero"), {
  ssr: false,
  loading: () => <Loading />,
});

const Footer = dynamic(() => import("./components/Footer"), {
  ssr: false,
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
} 