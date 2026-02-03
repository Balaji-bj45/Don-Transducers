import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import CategoryPage from "./Pages/ProductsPage/CategoryPage";
import ProductDetailsPage from "./Pages/ProductsPage/ProductDetailsPage";
import EventsPage from "./Pages/EventsPage/EventsPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
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
       <Route path="/events" element={<EventsPage/>} />
       <Route path="/contact" element={<ContactPage/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
