"use client";
import React from "react";
import Image from "next/image";

const CommitmentSection = () => {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="max-w-screen mx-auto py-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          <div>
            <h2 className="text-[2.9rem] font-normal text-black leading-tight">
              Nuestro <br /> compromiso es claro
            </h2>
          </div>
          <div>
            <p className="text-black text-[1.60rem] font-medium mb-2">
              Impulsar el crecimiento de nuestros clientes mediante proyectos
              sostenibles, innovadores y a la medida.
            </p>
            <p className="text-[#00000099] text-sm font-medium">
              Llevamos energía solar donde sea que se necesite. Hemos
              participado en algunos de los proyectos más desafiantes de Costa
              Rica, incluyendo instalaciones en zonas indígenas de difícil
              acceso.
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-b-2xl">
          <Image
            src="/assets/aboutUs/Frame 4.avif"
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
