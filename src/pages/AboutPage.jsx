import About from "../component/About/About";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga";
ReactGA.initialize("G-BDCE4Y091N");

const AboutPage = () => {

  let location = useLocation();
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);

  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>About Rizzspace - Your Space for Creativity</title>

        {/* Meta Description (for SEO) */}
        <meta
          name="description"
          content="Explore the creativity and innovation at Rizzspace. Learn about our vision, mission, and the dedicated team behind Rizzspace, committed to providing a unique space for your creative endeavors."
        />

        {/* Canonical Link (if necessary) */}
        <link rel="canonical" href="https://rizzspace.com/about" />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta
          property="og:title"
          content="About Rizzspace - Your Space for Creativity"
        />
        <meta
          property="og:description"
          content="Explore the creativity and innovation at Rizzspace. Learn about our vision, mission, and the dedicated team behind Rizzspace, committed to providing a unique space for your creative endeavors."
        />
        <meta property="og:url" content="https://rizzspace.com/about" />

        {/* Twitter Card Meta Tags (for Twitter sharing) */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="About Rizzspace - Your Space for Creativity"
        />
        <meta
          name="twitter:description"
          content="Explore the creativity and innovation at Rizzspace. Learn about our vision, mission, and the dedicated team behind Rizzspace, committed to providing a unique space for your creative endeavors."
        />
      </Helmet>
      <About />
    </>
  );
};

export default AboutPage;
