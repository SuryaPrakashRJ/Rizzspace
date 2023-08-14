import "./Header.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { logo } from "../../assets/img";

let Header = () => {
  let [isMobile, setisMobile] = useState(false);
  let [autoClosecomponent, setautoClosecomponent] = useState(false);
  let [isMinWidthReached, setIsMinWidthReached] = useState(
    window.innerWidth >= 964
  );
  let [colorChange, setcolorChange] = useState(false);

  function showSwitch() {
    setautoClosecomponent(!autoClosecomponent);
    setisMobile(!isMobile);
  }

  function autoClose() {
    setautoClosecomponent(false);
    setisMobile(false);
  }

  useEffect(() => {
    const handleResize = () => {
      const minWidthReached = window.innerWidth >= 964;
      setIsMinWidthReached(minWidthReached);
      setisMobile(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMinWidthReached]);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setcolorChange(true);
    } else {
      setcolorChange(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <header className={colorChange ? "stickyy active" : "stickyy"}>
        <div className="Nav-bar">
          <div className="flex justify-center items-center ml-2 mt-3 md:ml-6">
            <Link to="/">
              <div className="flex gap-3 items-center">
                <img
                  src={logo}
                  className="h-[6vh] flex items-center justify-center"
                />
                <div className="w-40 text-white text-[18px] md:text-[26px] font-bold tracking-wide logo-text ">
                  Rizzspace
                </div>
              </div>
            </Link>
            <ul
              className={
                isMobile
                  ? "Nav-ul-Active"
                  : "Nav-ul ml-3 mt-3 space-x-6 flex items-center justify-center font-['Alegreya_Sans']"
              }
            >
              <Link to="/about" className="Nav-a" onClick={() => autoClose()}>
                About
              </Link>

              <Link to="/blog" className="Nav-a" onClick={() => autoClose()}>
                Blog
              </Link>

              <a href="#services" className="Nav-a">
                Service
              </a>

              <div className={isMobile ? "block" : "hidden"}>
                <Link to="/contact">
                  <button className="w-[176px] h-12 bg-white rounded">
                    <p className="text-orange-500 text-[22px] font-medium tracking-wide font-['poppins']">
                      Contact Us
                    </p>
                  </button>
                </Link>
              </div>
            </ul>
          </div>

          <div className="hidden lg:block mt-3">
            <Link to="/contact">
              <button className="w-[176px] h-12 bg-white rounded">
                <p className="text-orange-500 text-[18px] font-medium tracking-wide font-['poppins']">
                  Contact Us
                </p>
              </button>
            </Link>
          </div>

          <button className="Nav-bar-icon" onClick={() => showSwitch()}>
            {isMobile ? (
              <AiOutlineClose className="Nav-Icon-Bar" />
            ) : (
              <AiOutlineMenu className="Nav-Icon-Cross" />
            )}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
