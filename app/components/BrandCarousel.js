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
    { src: "/assets/brands/image3.png", alt: "TEC Costa Rica" },
    { src: "/assets/brands/image4.png", alt: "Banco Popular" },
    { src: "/assets/brands/image5.png", alt: "Establishment Labs" },
    { src: "/assets/brands/image6.png", alt: "Segundo Social" },
    { src: "/assets/brands/image7.png", alt: "Guanacaste Aeropuerto" },
    { src: "/assets/brands/image8.png", alt: "Fundación Omar Dengo" },
    { src: "/assets/brands/image9.png", alt: "Claro" },
    { src: "/assets/brands/image10.png", alt: "Lincoln School" },
    { src: "/assets/brands/image11.png", alt: "Tigo" },
    { src: "/assets/brands/image12.png", alt: "BCR" },
    { src: "/assets/brands/image13.png", alt: "INS" },
    { src: "/assets/brands/image14.png", alt: "Allergan" },
    { src: "/assets/brands/image15.png", alt: "Sykes" },
    { src: "/assets/brands/image16.png", alt: "CG" },
  ];

  return (
    <div className="w-full bg-white pt-20">
      <div className="mx-auto px-4">
        <div className="w-full">
          <Slider {...settings}>
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="px-6">
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
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#037F3F] to-[#002D6A] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-10 font-roboto font-bold text-2xl"> Recibir Asesoría</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
