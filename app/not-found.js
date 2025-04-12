"use client";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./components/Footer"), {
  ssr: false,
});

export default function NotFound() {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center h-screen bg-white text-center">
        <h2 className="text-6xl font-bold text-red-500">404</h2>
        <p className="text-2xl mt-4 text-gray-600">Lo sentimos, esta página no existe.</p>
        <a
          href="/"
          className="mt-8"
        >
          <button
            className="relative px-3 py-3 text-lg font-medium text-white overflow-hidden bg-[#037F3F] transition-all duration-500 hover:text-white group rounded-tl-xl rounded-br-xl"
            aria-label="Recibir asesoría"
            data-aos="fade-down"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            <span className="relative z-10 font-roboto font-bold text-2xl"> volver al inicio</span>
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
}

