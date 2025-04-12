"use client";
import dynamic from "next/dynamic";

const Loading = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-[#037F3F] to-[#002D6A] z-50">
    <img
      src="/assets/landing/LogoHiPower.svg"
      alt="Loading..."
      className="w-[50vh]"
    />
  </div>
);

const Hero = dynamic(() => import("../components/landing/hero"), { 
  ssr: false, 
  loading: () => <Loading />, 
});
const Form = dynamic(() => import("../components/landing/Form"), { 
  ssr: false, 
  loading: () => <Loading />,
});
const WhyChooseUs = dynamic(() => import("../components/landing/WhyChooseUs"), { 
  ssr: false, 
  loading: () => <Loading />,
});
const Testimonials = dynamic(() => import("../components/landing/Testimonials"), { 
  ssr: false, 
  loading: () => <Loading />,
});
const BrandCarousel = dynamic(() => import("../components/landing/BrandCarousel"), { 
  ssr: false, 
  loading: () => <Loading />,
});
const Footer = dynamic(() => import("../components/landing/footer"), { 
  ssr: false, 
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      <Hero />
      <Form />
      <WhyChooseUs />
      <Testimonials />
      <BrandCarousel />
      <Footer />
    </div>
  );
}
