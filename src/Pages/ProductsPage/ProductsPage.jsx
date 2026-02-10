import React from "react";
import Hero from "../../Components/Products/Hero";
import CategoriesSection from "../../Components/Products/CategoriesSection";

const ProductsPage = () => {
  return (
    <div className="bg-white text-black">
      <Hero />
      <CategoriesSection />
    </div>
  );
};

export default ProductsPage;
