import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import ProductsSection from '../Components/ProductsSection'
import About from '../Components/AboutSection'
import UseCases from '../Components/UseCases'
import BuildForProfessionalsSection from '../Components/BuiltForProfessionals'
import ProductsTransparencySection from '../Components/ProductTransparency'
import WhyChooseUsSection from '../Components/WhyChooseUs.jsx'
import CTASection from '../Components/CTASection'

function HomePage() {
  return (
    <div>


        <Navbar/>
        <Hero/>
        <ProductsSection/>
        <About/>
        <UseCases/>
        <ProductsTransparencySection/>
        <WhyChooseUsSection/>
        <BuildForProfessionalsSection/>
        <CTASection/>
        
        
      
    </div>
  )
}

export default HomePage