"use client";
import React from "react";
import Image from "next/image";

const CommitmentSection = () => {
  return (
    <section className="bg-[#f5f5f5] px-6 md:px-8 pt-12 md:pt-24 pb-8 md:pb-14">
      <div className="max-w-screen mx-auto">
        <div className="mx-auto max-w-md md:max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-[2.9rem] font-normal text-black leading-tight">
              Nuestro <br /> compromiso es claro
            </h2>
          </div>
          <div>
            <p className="text-black text-lg md:text-[1.60rem] md:font-medium mb-2">
              <strong>Impulsar el crecimiento de nuestros clientes</strong> mediante proyectos
              sostenibles, innovadores y adaptados a las necesidades específicas de cada operación.
            </p>
            <p className="text-[#00000099] text-lg font-medium">
              <strong>En HiPower, llevamos energía solar donde sea que se necesite.</strong> Hemos
              participado en algunos de los <strong>proyectos más desafiantes de Costa
              Rica</strong>, incluyendo <strong>instalaciones en zonas indígenas de difícil
              acceso</strong>.
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-b-2xl">
          <Image
            src="/assets/aboutUs/Frame.avif"
            alt="Proyecto solar en zona rural"
            width={1200}
            height={300}
            className="w-full h-[35rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
