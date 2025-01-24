"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      disableMutationObserver: true,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="flex items-center justify-center h-screen">

        <section className="relative w-[96%] rounded-3xl h-[94vh] overflow-hidden mx-auto my-auto">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/assets/HeroBG.avif"
              alt="Solar Panels Installation"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Logo */}
          <div className="absolute w-full mt-3 flex justify-center lg:justify-start lg:mt-0 lg:absolute lg:top-8 lg:left-8">
            <Image
              src="/assets/LogoHiPower.svg"
              alt="HiPower Logo"
              width={210}
              height={100}
              className="brightness-0 invert"
              priority
            />
          </div>

          {/* Main Content */}
          <div className="relative flex flex-col items-center justify-center w-full h-full text-white px-4 md:px-8">
            {/* Star Icon */}
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="mb-4"
            >
              <Image
                src="/assets/HeroIcon.svg"
                alt="Star Icon"
                width={90}
                height={90}
                priority
              />
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl md:text-5xl lg:text-[3.40rem] text-center max-w-[61rem] mb-4 font-roboto font-bold lg:leading-snug"
            >
              Optimiza tus costos de energía y acelera la sostenibilidad de tu empresa.
            </h1>

            {/* Subheading */}
            <p
              className="text-md md:text-2xl text-center max-w-xs md:max-w-lg mb-5 font-roboto font-medium"
            >
              Déjanos tus datos y te ayudamos a reducir costos con soluciones personalizadas.
            </p>

            {/* CTA Button */}
            <button
              className="relative px-3 py-3 text-lg font-medium text-white overflow-hidden bg-[#037F3F]
             transition-all duration-500 hover:text-white group rounded-tl-xl rounded-br-xl"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-10 font-roboto font-bold text-2xl"> Recibir Asesoría</span>
            </button>

            {/*  <div 
            data-aos="fade-down"
            data-aos-duration="1000"
            className=""
          >
            <Image
              src="/assets/HeroIcon2.svg"
              alt="Star Icon"
              width={5}
              height={5}
              priority
            />
          </div>/* <div class}

          {/* Stats Section */}

            <div className="w-full xl:block hidden mt-[5%]">
              <div className="flex flex-row px-4 w-full justify-center items-center">

                <h2 className="text-2xl md:text-[2.50rem] font-bold max-w-sm leading-tight mr-5">
                  ¿Por qué somos el aliado ideal para tu empresa?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">

                  {/* Stat 1 */}
                  <div className="relative bg-white/10 backdrop-blur-md rounded-tl-3xl rounded-br-3xl py-8 text-center px-10 transition-all duration-500 group overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    <h3 className="text-4xl font-bold mb-2 relative z-10 font-roboto">3 años</h3>
                    <p className="text-md relative z-10 font-roboto font-[200]">de experiencia en proyectos solares estratégicos.</p>
                  </div>

                  {/* Stat 2 */}
                  <div className="relative bg-white/10 backdrop-blur-md rounded-tl-3xl rounded-br-3xl py-8 text-center px-10 transition-all duration-500 group overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    <h3 className="text-4xl font-bold mb-2 relative z-10 font-roboto">20 MW</h3>
                    <p className="text-md relative z-10 font-roboto font-[200]">instalados en proyectos fotovoltaicos exitosos.</p>
                  </div>

                  {/* Stat 3 */}
                  <div className="relative bg-white/10 backdrop-blur-md rounded-tl-3xl rounded-br-3xl py-8 text-center px-10 transition-all duration-500 group overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    <h3 className="text-4xl font-bold mb-2 relative z-10 font-roboto">+5 MWh</h3>
                    <p className="text-md relative z-10 font-roboto font-[200]">en sistemas avanzados de almacenamiento de energía.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>



      <div className="w-full xl:hidden my-[5%]">
        <div className="flex flex-col px-4 w-full justify-center items-center">

          <h2 className="text-[2.50rem] text-center mb-5 font-bold max-w-sm leading-tight mr-5 text-[#002D6A]">
            ¿Por qué somos el aliado ideal para tu empresa?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[18rem] md:max-w-4xl">

            {/* Stat 1 */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-tl-3xl rounded-br-3xl py-8 text-center px-10 transition-all duration-500 group overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A]"></span>
              <h3 className="text-4xl font-bold mb-2 relative z-10 font-roboto">3 años</h3>
              <p className="text-md relative z-10 font-roboto font-[200]">de experiencia en proyectos solares estratégicos.</p>
            </div>

            {/* Stat 2 */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-tl-3xl rounded-br-3xl py-8 text-center px-10 transition-all duration-500 group overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A]"></span>
              <h3 className="text-4xl font-bold mb-2 relative z-10 font-roboto">20 MW</h3>
              <p className="text-md relative z-10 font-roboto font-[200]">instalados en proyectos fotovoltaicos exitosos.</p>
            </div>

            {/* Stat 3 */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-tl-3xl rounded-br-3xl py-8 text-center px-10 transition-all duration-500 group overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A]"></span>
              <h3 className="text-4xl font-bold mb-2 relative z-10 font-roboto">+5 MWh</h3>
              <p className="text-md relative z-10 font-roboto font-[200]">en sistemas avanzados de almacenamiento de energía.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}