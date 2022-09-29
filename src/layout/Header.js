import { useEffect } from "react";
import { scroll_ } from "../utilits";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", scroll_);
  }, []);

  return (
    <div className="tonni_tm_header">
      <div className="container bigger">
        <div className="header_in">
          <div className="logo">
            <a href="/">
              <img src="img/logo/logo.png" width="50" height="40" alt="" />
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <span className="ccc" />
          </div>
          <div className="follow">
            <span>Follow Me:</span>
            <ul>
              <li>
                <a href="https://www.youtube.com/embed/exb1Yel-fTM" >
                  <img
                    className="svg"
                    src="img/svg/social/youtube.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://wa.me/86572648" target="_blank" rel="noreferrer">
                  <img
                    className="svg"
                    src="img/svg/social/whatapp.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="mailto:sawmukahbaw191@gmail.com">
                  <img className="svg" src="img/svg/social/mail.svg" alt="" />
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
