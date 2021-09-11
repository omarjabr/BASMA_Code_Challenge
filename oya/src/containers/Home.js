import React from "react";
import AboutSection from "../components/AboutSection/AboutSection";
import HomeSection from "../components/HomeSection/HomeSection";
import PortfolioSection from "../components/PortfolioSection/PortfolioSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";

function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
    </>
  );
}

export default Home;
