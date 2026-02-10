import React from "react";
import { useReducedMotion } from "framer-motion";
import Hero from "../../Components/Events/Hero";
import UpcomingSection from "../../Components/Events/UpcomingSection";
import FeaturedSection from "../../Components/Events/FeaturedSection";
import PastSection from "../../Components/Events/PastSection";
import CtaSection from "../../Components/Events/CtaSection";

const EventsPage = () => {
  const prefersReducedMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  const container = {
    hidden: {},
    show: {
      transition: prefersReducedMotion ? {} : { staggerChildren: 0.08 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.7, ease },
    },
  };

  const sectionFade = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.75, ease },
    },
  };

  return (
    <div className="bg-black text-white">
      <Hero container={container} fadeUp={fadeUp} />
      <UpcomingSection sectionFade={sectionFade} container={container} fadeUp={fadeUp} />
      <FeaturedSection sectionFade={sectionFade} />
      <PastSection sectionFade={sectionFade} container={container} fadeUp={fadeUp} />
      <CtaSection sectionFade={sectionFade} />
    </div>
  );
};

export default EventsPage;
