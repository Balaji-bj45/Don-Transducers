import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<HomePage/>} />
       <Route path="/about" element={<AboutPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
