import React from "react";
import Hero from "../../Components/Home/Hero";
import ProductsSection from "../../Components/Home/ProductsSection";
import About from "../../Components/Home/AboutSection";
import UseCases from "../../Components/Home/UseCases";
import BuildForProfessionalsSection from "../../Components/Home/BuiltForProfessionals";
import ProductsTransparencySection from "../../Components/Home/ProductTransparency";
import WhyChooseUsSection from "../../Components/Home/WhyChooseUs";
import CTASection from "../../Components/Home/CTASection";

function HomePage() {
  return (
    <div>
      <Hero />
      <ProductsSection />
      <About />
      <UseCases />
      <ProductsTransparencySection />
      <WhyChooseUsSection />
      <BuildForProfessionalsSection />
      <CTASection />
    </div>
  );
}

export default HomePage;
