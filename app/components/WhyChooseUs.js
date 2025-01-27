export default function WhyChooseUs() {
  const cards = [
    {
      title: "Trayectoria Comprobada",
      description: "13 años de experiencia y más de 20 MW instalados en proyectos solares fotovoltaicos, junto con +5 MWh en almacenamiento de energía, nos posicionan como pioneros en Costa Rica.",
      imageUrl: "/assets/landing/WhyChooseUs/Card1.avif",
      fallbackUrl: "/assets/landing/WhyChooseUs/Card1.png",
      alt: "Imagen de instalaciones solares y almacenamiento de energía"
    },
    {
      title: "Certificaciones Internacionales",
      description: "Única empresa en Costa Rica con ingenieros certificados NABCEP y certificados por fabricantes líderes en la industria.",
      imageUrl: "/assets/landing/WhyChooseUs/Card2.avif",
      fallbackUrl: "/assets/landing/WhyChooseUs/Card2.png",
      alt: "Ingenieros certificados trabajando en instalaciones solares"
    },
    {
      title: "Rentabilidad Garantizada",
      description: "Soluciones sostenibles y eficientes diseñadas para maximizar la rentabilidad detrás de cada proyecto.",
      imageUrl: "/assets/landing/WhyChooseUs/Card3.avif",
      fallbackUrl: "/assets/landing/WhyChooseUs/Card3.png",
      alt: "Proyectos solares con diseños rentables y sostenibles"
    }
  ];

  return (
    <section
      className="max-w-7xl mx-auto px-6 mb-20"
      aria-labelledby="why-choose-us-heading"
    >
      <h2 id="why-choose-us-heading" className="text-3xl md:text-4xl text-center mx-auto font-roboto font-bold text-[#002D6A] mb-5 max-w-[60%]">
        ¿Por qué elegir HiPower?
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        role="list"
        aria-label="Razones para elegir HiPower"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-[2rem] overflow-hidden relative h-[30rem] bg-cover bg-center"
            style={{
              backgroundImage: `url(${card.fallbackUrl}), url(${card.imageUrl})`
            }}
            role="listitem"
            aria-labelledby={`card-title-${index}`}
            aria-describedby={`card-description-${index}`}
            aria-label={card.alt}
          >
            <div className="absolute inset-0 flex flex-col justify-end">
              <div className="bg-black/40 p-4 rounded-3xl mx-3 mb-3 h-32">
                <h3
                  id={`card-title-${index}`}
                  className="text-xl font-bold mb-1 text-white"
                >
                  {card.title}
                </h3>
                <p
                  id={`card-description-${index}`}
                  className="text-sm text-white/90 leading-snug"
                >
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
