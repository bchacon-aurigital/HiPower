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

  // First row - 4 logos
  const firstRow = partners.slice(0, 4);
  // Second row - 3 logos
  const secondRow = partners.slice(4, 7);
  // Third row - 4 logos
  const thirdRow = partners.slice(7);

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
          Conoce sobre nuestros aliados en la fabricación de paneles, inversores y baterías.
        </p>
        
        {/* First row - 4 logos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {firstRow.map((partner, index) => (
            <div 
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
            </div>
          ))}
        </div>
        
        {/* Second row - 3 logos (equal width) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {secondRow.map((partner, index) => (
            <div 
              key={`second-${index}`} 
              className="border border-[#C9C9C9] rounded-tl-3xl rounded-br-3xl flex items-center justify-center p-6 h-32 transition-transform hover:scale-105"
            >
              <Image
                src={partner.logo}
                alt={`Logo de ${partner.name}`}
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        
        {/* Third row - 4 logos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {thirdRow.map((partner, index) => (
            <div 
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;