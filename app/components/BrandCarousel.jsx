import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const BrandCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const brands = [
    { src: "/assets/landing/brands/image 3.avif", alt: "TEC Costa Rica" },
    { src: "/assets/landing/brands/image 4.avif", alt: "Banco Popular" },
    { src: "/assets/landing/brands/image 5.avif", alt: "Establishment Labs" },
    { src: "/assets/landing/brands/image 6.avif", alt: "Segundo Social" },
    { src: "/assets/landing/brands/image 7.avif", alt: "Guanacaste Aeropuerto" },
    { src: "/assets/landing/brands/image 8.avif", alt: "Fundación Omar Dengo" },
    { src: "/assets/landing/brands/image 9.avif", alt: "Claro" },
    { src: "/assets/landing/brands/image 10.avif", alt: "Lincoln School" },
    { src: "/assets/landing/brands/image 11.avif", alt: "Tigo" },
    { src: "/assets/landing/brands/image 12.avif", alt: "BCR" },
    { src: "/assets/landing/brands/image 13.avif", alt: "INS" },
    { src: "/assets/landing/brands/image 14.avif", alt: "Allergan" },
    { src: "/assets/landing/brands/image 15.avif", alt: "Sykes" },
    { src: "/assets/landing/brands/image 16.avif", alt: "CG" },
    { src: "/assets/landing/brands/image 17.avif", alt: "Equipos del Prado" },
    { src: "/assets/landing/brands/image 18.avif", alt: "M experss" },
    { src: "/assets/landing/brands/image 19.avif", alt: "Banco Promerica" },
  ];

  const visibleBrands = [...brands, ...brands.slice(0, 8)];

  return (
    <section aria-labelledby="brands-section-title">
      <div className="w-full bg-white px-6 md:px-8 py-8 md:py-14" role="region" aria-labelledby="carousel-heading">
        <div className="mx-auto">
          <h2 id="carousel-heading" className="text-3xl lg:text-[2.7rem] leading-10 font-semibold text-black px-8 pb-10 text-center w-full">
            Marcas que impulsan su crecimiento con{" "}
            <span className="text-[#339C59] font-bold">
              Hi Power
            </span>
          </h2>
          <div className="w-full">
            <Slider {...settings} role="list" aria-live="polite">
              {visibleBrands.map((brand, index) => (
                <div
                  key={index}
                  className="px-2"
                  role="listitem"
                  aria-label={`Marca: ${brand.alt}`}
                >
                  <div className="flex items-center justify-center h-56 w-full rounded-tl-3xl rounded-br-3xl border-2 border-[#656565]">
                    <Image
                      src={brand.src}
                      alt={`Logo de ${brand.alt} - Cliente de Hi Power`}
                      width={200}
                      height={160}
                      className="object-contain mx-auto px-7"
                      loading="lazy"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZTJlOGYwIi8+PC9zdmc+"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
