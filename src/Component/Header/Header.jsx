import "./Header.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";


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
          <div className="Nav-logo-div">
            <Link to="/">
              <img src="" className="h-[6vh]" />
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

            <div className="a">
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
