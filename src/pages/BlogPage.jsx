import Blog from "../component/Blog/Blog";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga";
ReactGA.initialize("G-BDCE4Y091N");

const BlogPage = () => {

  let location = useLocation();
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);

  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>Rizzspace Blog - Latest Articles and Insights</title>

        {/* Meta Description (for SEO) */}
        <meta
          name="description"
          content="Explore the latest articles and insights on the Rizzspace blog. Stay informed about industry trends, creative tips, and inspiring stories from our community."
        />

        {/* Canonical Link (if necessary) */}
        <link rel="canonical" href="https://rizzspace.com/blog" />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta
          property="og:title"
          content="Rizzspace Blog - Latest Articles and Insights"
        />
        <meta
          property="og:description"
          content="Explore the latest articles and insights on the Rizzspace blog. Stay informed about industry trends, creative tips, and inspiring stories from our community."
        />
        <meta property="og:url" content="https://rizzspace.com/blog" />

        {/* Twitter Card Meta Tags (for Twitter sharing) */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Rizzspace Blog - Latest Articles and Insights"
        />
        <meta
          name="twitter:description"
          content="Explore the latest articles and insights on the Rizzspace blog. Stay informed about industry trends, creative tips, and inspiring stories from our community."
        />
      </Helmet>
      <Blog />
    </>
  );
};

export default BlogPage;
