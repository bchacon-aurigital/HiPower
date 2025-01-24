import React from 'react';

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Trayectoria Comprobada",
      description: "13 años de experiencia y más de 20 MW instalados en proyectos solares fotovoltaicos, junto con +5 MWh en almacenamiento de energía, nos posicionan como pioneros en Costa Rica.",
      imageUrl: "/assets/HeroBG.avif"
    },
    {
      title: "Certificaciones Internacionales",
      description: "Única empresa en Costa Rica con ingenieros certificados NABCEP y certificados por fabricantes líderes en la industria.",
      imageUrl: "/assets/HeroBG.avif"
    },
    {
      title: "Rentabilidad Garantizada",
      description: "Soluciones sostenibles y eficientes diseñadas para maximizar la rentabilidad detrás de cada proyecto.",
      imageUrl: "/assets/HeroBG.avif" 
       }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">
        ¿Por qué elegir HiPower?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="rounded-2xl overflow-hidden px-4 py-4 bg-cover bg-bottom h-[30rem]"
          style={{ backgroundImage: `url(${card.imageUrl})` }}>
            <div className="aspect-[4/5] relative">
        
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 rounded-2xl min-h-32">
                <h3 className="text-xl font-bold mb-1.5 text-white">{card.title}</h3>
                <p className="text-xs text-white/90 leading-snug">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}