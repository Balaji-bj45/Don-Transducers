import React from "react";
import { useReducedMotion } from "framer-motion";
import Hero from "../../Components/About/Hero";
import StorySection from "../../Components/About/StorySection";
import ClientTypesSection from "../../Components/About/ClientTypesSection";
import BusinessAndPhilosophySection from "../../Components/About/BusinessAndPhilosophySection";
import CtaSection from "../../Components/About/CtaSection";

const AboutPage = () => {
  const prefersReducedMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  const container = {
    hidden: {},
    show: {
      transition: prefersReducedMotion ? {} : { staggerChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.8, ease },
    },
  };

  const sectionFade = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.8, ease },
    },
  };

  return (
    <div className="bg-black text-white selection:bg-blue-600 selection:text-white overflow-hidden">
      <Hero container={container} fadeUp={fadeUp} />
      <StorySection sectionFade={sectionFade} />
      <ClientTypesSection container={container} fadeUp={fadeUp} sectionFade={sectionFade} />
      <BusinessAndPhilosophySection sectionFade={sectionFade} />
      <CtaSection sectionFade={sectionFade} />
    </div>
  );
};

export default AboutPage;
