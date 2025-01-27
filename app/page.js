"use client";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/hero"), { 
  ssr: false, 
});
const Form = dynamic(() => import("./components/Form"), { 
  ssr: false, 
});
const WhyChooseUs = dynamic(() => import("./components/WhyChooseUs"), { 
  ssr: false, 
});
const Testimonials = dynamic(() => import("./components/Testimonials"), { 
  ssr: false, 
});
const BrandCarousel = dynamic(() => import("./components/BrandCarousel"), { 
  ssr: false, 
});
const Footer = dynamic(() => import("./components/footer"), { 
  ssr: false, 
});

export default function Home() {
  return (
    <>
      <div className="overflow-hidden bg-white">
        <Hero />
        <Form />
        <WhyChooseUs />
        <Testimonials />
        <BrandCarousel />
        <Footer />
      </div>
    </>
  );
}
