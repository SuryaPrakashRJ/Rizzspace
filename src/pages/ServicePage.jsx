import WhatWeOffer from "../component/WhatWeOffer/WhatWeOffer";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga";
ReactGA.initialize("G-BDCE4Y091N");

const ServicePage = () => {

  let location = useLocation();
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);

  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>Rizzspace Services - Unlocking Creativity and Innovation</title>

        {/* Meta Description (for SEO) */}
        <meta
          name="description"
          content="Discover the diverse range of services offered by Rizzspace. From creative workshops to innovative solutions, explore how Rizzspace can help unlock your creativity and drive innovation."
        />

        {/* Canonical Link (if necessary) */}
        <link rel="canonical" href="https://rizzspace.com/services" />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta
          property="og:title"
          content="Rizzspace Services - Unlocking Creativity and Innovation"
        />
        <meta
          property="og:description"
          content="Discover the diverse range of services offered by Rizzspace. From creative workshops to innovative solutions, explore how Rizzspace can help unlock your creativity and drive innovation."
        />
        <meta property="og:url" content="https://rizzspace.com/services" />

        {/* Twitter Card Meta Tags (for Twitter sharing) */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Rizzspace Services - Unlocking Creativity and Innovation"
        />
        <meta
          name="twitter:description"
          content="Discover the diverse range of services offered by Rizzspace. From creative workshops to innovative solutions, explore how Rizzspace can help unlock your creativity and drive innovation."
        />
      </Helmet>
      <WhatWeOffer />
    </>
  );
};

export default ServicePage;
