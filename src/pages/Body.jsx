import Accordion from "../component/Accordion/Accordion";
import HeroSection from "../component/HeroSection/HeroSection";
import ContactUsForm from "../component/ContactUsForm/ContactUsForm";
import WhatWeOffer from "../component/WhatWeOffer/WhatWeOffer";
import Moral from "../component/Moral/Moral";
import Project from "../component/Project/Project";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga";
ReactGA.initialize("G-BDCE4Y091N");

const Body = () => {

  let location = useLocation();
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);

  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>Rizzspace - Your Hub for Creativity and Innovation</title>

        {/* Meta Description (for SEO) */}
        <meta
          name="description"
          content="Welcome to Rizzspace, where creativity meets innovation. Explore our diverse range of services, inspiring blog articles, and join our community dedicated to unlocking the full potential of your creative endeavors."
        />

        {/* Canonical Link (if necessary) */}
        <link rel="canonical" href="https://rizzspace.com/" />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta
          property="og:title"
          content="Rizzspace - Your Hub for Creativity and Innovation"
        />
        <meta
          property="og:description"
          content="Welcome to Rizzspace, where creativity meets innovation. Explore our diverse range of services, inspiring blog articles, and join our community dedicated to unlocking the full potential of your creative endeavors."
        />
        <meta property="og:url" content="https://rizzspace.com/" />

        {/* Twitter Card Meta Tags (for Twitter sharing) */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Rizzspace - Your Hub for Creativity and Innovation"
        />
        <meta
          name="twitter:description"
          content="Welcome to Rizzspace, where creativity meets innovation. Explore our diverse range of services, inspiring blog articles, and join our community dedicated to unlocking the full potential of your creative endeavors."
        />
      </Helmet>
      <HeroSection />
      <WhatWeOffer />
      <Moral />
      <Project />
      <Accordion />
      <ContactUsForm />
    </>
  );
};

export default Body;
