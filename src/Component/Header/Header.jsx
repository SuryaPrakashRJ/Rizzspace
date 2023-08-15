import "./Header.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { logo } from "../../assets/img";
import { HashLink as Link } from 'react-router-hash-link'


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
          </div>
          <div>
            <ul
              className={
                isMobile
                  ? "Nav-ul-Active flex flex-col items-center justify-center font-['Inter']"
                  : "Nav-ul mt-3  flex items-center space-x-6 font-['Inter'] "
              }
            >
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
                <Link
                  to="/#services"
                  className="Nav-a"
                  onClick={() => autoClose()}
                  smooth>
                  Service
                </Link>
              </li>
              <li className="Nav-li" id="4">
                <Link
                  to="#"
                  className="Nav-a"
                  onClick={() => autoClose()}
                  smooth>
                  Community
                </Link>
              </li>
              <li className="Nav-li" id="5">
                <Link
                  to="#"
                  className="Nav-a"
                  onClick={() => autoClose()}
                  smooth>
                  Career
                </Link>
              </li>
              <li className="Nav-li" id="6">
                <Link
                  to="#"
                  className="Nav-a"
                  onClick={() => autoClose()}
                  smooth>
                  Works
                </Link>
              </li>
            </ul>
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
