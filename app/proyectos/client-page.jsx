"use client";
import { useEffect } from "react";
import ProjectsHero from "../components/proyectos/ProjectsHero";
import { useContactAction } from '../hooks/useContactAction';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Proyectos from "../components/proyectos/Proyectos";
import CTA from "../components/proyectos/CTA";

export default function ProyectosClientPage() {
  const handleContactClick = useContactAction();

  return (
    <main className="min-h-screen bg-[#F3F3F3]">
      <Navbar />
      <ProjectsHero />
      <Proyectos />
      <CTA />
      <Footer />
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500`}>
        {/* Bubble container */}
        <div className="relative group">
          <button
                        onClick={handleContactClick}
                        className="flex items-center justify-center w-16 h-16 bg-[#037F3F] rounded-full shadow-lg hover:bg-[#002D6A] transition-all duration-300 animate-pulse"
            aria-label="Conectar con nosotros"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>

          {/* Tooltip text */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-gray-800 text-white text-sm rounded py-1 px-3 whitespace-nowrap">
              Conectar con nosotros
              <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>
        </div>
        </div>


    </main>
  );
} 