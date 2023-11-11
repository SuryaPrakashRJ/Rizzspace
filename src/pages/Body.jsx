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
        <title>Rizzspace - Creative Innovation and Web Development</title>

        {/* Meta Description (for SEO) */}
        <meta
          name="description"
          content="Welcome to Rizzspace - your destination for web development and creative innovation. Explore our services, join our community, and discover how Rizzspace.com is leading in web development and fostering creativity."
        />

        {/* Canonical Link (if necessary) */}
        <link rel="canonical" href="https://rizzspace.com/" />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta
          property="og:title"
          content="Rizzspace - Web Development and Creative Innovation"
        />
        <meta
          property="og:description"
          content="Welcome to Rizzspace - your destination for web development and creative innovation. Explore our services, join our community, and discover how Rizzspace.com is leading in web development and fostering creativity."
        />
        <meta property="og:url" content="https://rizzspace.com/" />

        {/* Twitter Card Meta Tags (for Twitter sharing) */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Rizzspace - Web Development and Creative Innovation"
        />
        <meta
          name="twitter:description"
          content="Welcome to Rizzspace - your destination for web development and creative innovation. Explore our services, join our community, and discover how Rizzspace.com is leading in web development and fostering creativity."
        />

        {/* Additional Keywords in Meta Tags */}
        <meta
          name="keywords"
          content="Rizzspace, Rizzspace.com, Rizzspace Web Development, Creative Innovation, Web Development Services, rizzspace.com"
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
