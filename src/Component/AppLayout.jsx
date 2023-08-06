import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const App = () => {
  let location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  }, [location]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
