import React from "react";
import Image from "next/image";

const PartnersSection = () => {
  const partners = [
    { name: "Canadian Solar", logo: "/assets/homepage/partners/image 24.png" },
    { name: "Trina Solar", logo: "/assets/homepage/partners/image 25.png" },
    { name: "JinKO Solar", logo: "/assets/homepage/partners/image 26.png" },
    { name: "SMA", logo: "/assets/homepage/partners/image 28.png" },
    { name: "OutBack Power", logo: "/assets/homepage/partners/image 34.png" },
    { name: "Schneider Electric", logo: "/assets/homepage/partners/image 35.png" },
    { name: "Fortress Power", logo: "/assets/homepage/partners/image 39.png" },
    { name: "Fronius", logo: "/assets/homepage/partners/image 29.png" },
    { name: "SolarEdge", logo: "/assets/homepage/partners/image 30.png" },
    { name: "Solis", logo: "/assets/homepage/partners/image 31.png" },
    { name: "Longi", logo: "/assets/homepage/partners/image 32.png" }
  ];

  return (
    <section className="px-6 md:px-8 py-8 md:py-14 bg-white" aria-labelledby="aliados-heading">
      <div className="container mx-auto px-4">
        <h2 
          id="aliados-heading" 
          className="text-4xl text-black font-bold text-center mb-2"
        >
          Nuestros Aliados
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Conocé sobre nuestros aliados en la fabricación de paneles, inversores y baterías.
        </p>
        
        <ul 
          className="lista-aliados grid grid-cols-2 md:grid-cols-4 gap-4"
          role="list"
          aria-label="Logos de aliados estratégicos de Hi Power"
        >
          {/* First row - 4 items */}
          {partners.slice(0, 4).map((partner, index) => (
            <li 
              key={`first-${index}`} 
              className="border border-[#C9C9C9] rounded-tl-3xl rounded-br-3xl flex items-center justify-center p-6 h-32 transition-transform hover:scale-105"
            >
              <Image
                src={partner.logo}
                alt={`Logo de ${partner.name}`}
                width={150}
                height={60}
                className="object-contain"
              />
            </li>
          ))}
          
          {/* Second row with custom layout - 3 items */}
          <li 
            className="border border-[#C9C9C9] rounded-tl-3xl rounded-br-3xl flex items-center justify-center p-6 h-32 transition-transform hover:scale-105 col-span-1"
          >
            <Image
              src={partners[4].logo}
              alt={`Logo de ${partners[4].name}`}
              width={150}
              height={60}
              className="object-contain"
            />
          </li>
          <li 
            className="border border-[#C9C9C9] rounded-tl-3xl rounded-br-3xl flex items-center justify-center p-6 h-32 transition-transform hover:scale-105 col-span-1"
          >
            <Image
              src={partners[5].logo}
              alt={`Logo de ${partners[5].name}`}
              width={150}
              height={60}
              className="object-contain"
            />
          </li>
          <li 
            className="border border-[#C9C9C9] rounded-tl-3xl rounded-br-3xl flex items-center justify-center p-6 h-32 transition-transform hover:scale-105 col-span-2 md:col-span-1"
          >
            <Image
              src={partners[6].logo}
              alt={`Logo de ${partners[6].name}`}
              width={150}
              height={60}
              className="object-contain"
            />
          </li>
          
          {/* Third row - 4 items */}
          {partners.slice(7).map((partner, index) => (
            <li 
              key={`third-${index}`} 
              className="border border-[#C9C9C9] rounded-tl-3xl rounded-br-3xl flex items-center justify-center p-6 h-32 transition-transform hover:scale-105"
            >
              <Image
                src={partner.logo}
                alt={`Logo de ${partner.name}`}
                width={150}
                height={60}
                className="object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PartnersSection;