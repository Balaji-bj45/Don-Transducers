import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<HomePage/>} />
       <Route path="/about" element={<AboutPage/>} />
       <Route path="/products" element={<ProductsPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
