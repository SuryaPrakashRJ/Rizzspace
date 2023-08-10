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
          <div className="Nav-logo-div flex items-center justify-center">
            <Link to="/">
              <div className="flex gap-4">
                <img src={logo} className="h-[6vh] flex items-center justify-center" />
                <div className="w-52 text-white text-[32px] font-bold tracking-wide">
                  Rizzspace
                </div>
              </div>
            </Link>
          </div>

          <ul className={isMobile ? "Nav-ul-Active" : "Nav-ul"}>
            <li className="Nav-li" id="1">
              <Link to="/about" className="Nav-a" onClick={() => autoClose()}>
                About
              </Link>
            </li>
            <li className="Nav-li" id="2">
              <Link to="/blog" className="Nav-a" onClick={() => autoClose()}>
                Blog
              </Link>
            </li>
            <li className="Nav-li" id="3">
              <Link to="/service" className="Nav-a" onClick={() => autoClose()}>
                Service
              </Link>
            </li>
            <div className={isMobile ? "a" : "hidden"}>
              <Link to="/contact">
                <button className="btn learn-more">
                  <span className="btnn circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="btnn btn-text">Contact us</span>
                </button>
              </Link>
            </div>
          </ul>

          <div className={isMobile ? "hidden" : "block"}>
            <Link to="/contact">
              <button className="w-[196px] h-14 bg-white rounded">
                <p className="text-orange-500 text-[22px] font-medium tracking-wide">Contact Us</p>
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
