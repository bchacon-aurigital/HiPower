import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const brands = [
    { src: "/assets/landing/brands/image3.png", alt: "TEC Costa Rica" },
    { src: "/assets/landing/brands/image4.png", alt: "Banco Popular" },
    { src: "/assets/landing/brands/image5.png", alt: "Establishment Labs" },
    { src: "/assets/landing/brands/image6.png", alt: "Segundo Social" },
    { src: "/assets/landing/brands/image7.png", alt: "Guanacaste Aeropuerto" },
    { src: "/assets/landing/brands/image8.png", alt: "Fundación Omar Dengo" },
    { src: "/assets/landing/brands/image9.png", alt: "Claro" },
    { src: "/assets/landing/brands/image10.png", alt: "Lincoln School" },
    { src: "/assets/landing/brands/image11.png", alt: "Tigo" },
    { src: "/assets/landing/brands/image12.png", alt: "BCR" },
    { src: "/assets/landing/brands/image13.png", alt: "INS" },
    { src: "/assets/landing/brands/image14.png", alt: "Allergan" },
    { src: "/assets/landing/brands/image15.png", alt: "Sykes" },
    { src: "/assets/landing/brands/image16.png", alt: "CG" },
  ];

  return (
    <section>
    <div className="w-full bg-white py-24" role="region" aria-labelledby="carousel-heading">
      <div className="mx-auto px-4">
        <h2 id="carousel-heading" className="sr-only">
          Carrusel de marcas asociadas con HiPower
        </h2>
        <div className="w-full">
          <Slider {...settings} role="list">
            {[...brands, ...brands].map((brand, index) => (
              <div 
                key={index} 
                className="px-6" 
                role="listitem" 
                aria-label={`Marca: ${brand.alt}`}
              >
                <div className="flex items-center justify-center h-28">
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="max-h-18 max-w-18 object-contain mx-auto"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            className="relative px-3 py-3 text-lg font-medium text-white overflow-hidden bg-[#037F3F]
             transition-all duration-500 hover:text-white group rounded-tl-xl rounded-br-xl"
            aria-label="Recibir asesoría sobre soluciones de energía solar"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            <span className="relative z-10 font-roboto font-bold text-2xl">
              Recibir Asesoría
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default BrandCarousel;
