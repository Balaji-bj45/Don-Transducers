import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import CategoryPage from "./Pages/ProductsPage/CategoryPage";
import ProductDetailsPage from "./Pages/ProductsPage/ProductDetailsPage";
import TopScroll from "./layout/TapScroll";

function App() {
  return (
    <>
    <TopScroll/>
    <Routes>
      
      <Route element={<MainLayout/>}>
        <Route path="/" element={<HomePage/>} />
       <Route path="/about" element={<AboutPage/>} />
       <Route path="/products" element={<ProductsPage/>} />
       <Route path="/products/:categorySlug" element={<CategoryPage/>} />
       <Route path="/products/:categorySlug/:productSlug" element={<ProductDetailsPage/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
