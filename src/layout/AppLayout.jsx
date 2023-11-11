import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import ReactGA from "react-ga";
ReactGA.initialize("G-BDCE4Y091N");

const AppLayout = () => {
  
  let location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });

    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
