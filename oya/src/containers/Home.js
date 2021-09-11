import React from "react";
import AboutSection from "../components/AboutSection/AboutSection";
import ContactUsSection from "../components/ContactUsSection/ContactUsSection";
import HomeSection from "../components/HomeSection/HomeSection";
import PortfolioSection from "../components/PortfolioSection/PortfolioSection";
import PricingSection from "../components/PricingSection/PricingSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";

function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <PricingSection />
      <ContactUsSection />
    </>
  );
}

export default Home;
