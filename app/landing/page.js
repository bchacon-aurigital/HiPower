"use client";
import Hero from "../components/landing/hero";
import Form from "../components/landing/Form";
import WhyChooseUs from "../components/landing/WhyChooseUs";
import Testimonials from "../components/landing/Testimonials";
import BrandCarousel from "../components/landing/BrandCarousel";
import Footer from "../components/landing/footer";

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
