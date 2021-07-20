import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaLinkedin,
  FaTelegram,
  FaTumblr,
  FaArrowAltCircleUp,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import styles from "./Footer.module.css";
import Scroll from "./Scroll";

const FooterCopyRight = () => {
  return (
    <>
      <footer
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "0px 150px",
        }}
      >
        <div>
          <p>© 2021 IRCTC || All Right Reserved</p>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              cursor: "pointer",
              padding: "10px",
            }}
          >
            <IconContext.Provider
              value={{
                color: "#007bff",
                size: "40px",
              }}
            >
              <div>
                <FaFacebookF />
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "red", size: "40px" }}>
              <div>
                <FaYoutube />
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#4c95e2", size: "40px" }}>
              <div>
                <FaLinkedin />
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#427dbb", size: "40px" }}>
              <div>
                <FaTelegram />
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#fd7e14", size: "40px" }}>
              <div>
                <FaInstagram />
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#dc3545", size: "40px" }}>
              <div>
                <FaPinterest />
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#427dbb", size: "40px" }}>
              <div>
                <FaTumblr />
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#17a2b8", size: "40px" }}>
              <div>
                <FaTwitter />
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              cursor: "pointer",
              padding: "10px",
            }}
            className={styles.bottom}
          >
            <a href="https://www.incredibleindia.org/content/incredibleindia/en.html">
              <img
                src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/inc-india-logo.svg"
                alt="india"
                height="35px"
              />
            </a>
            <a href="https://www.irctcbuddhisttrain.com/index">
              <img
                src="https://www.luxetrains.com/images/bctt-logo.png"
                alt="buddhist"
                height="35px"
              />
            </a>
            <a href="https://www.the-maharajas.com/">
              <img
                src="https://www.the-maharajas.com/assets/img/logo.png"
                alt="maharaja"
                height="50px"
              />
            </a>
            <a href="https://www.goldenchariot.org/">
              <img
                src="https://www.goldenchariot.org/assets/img/logo.png"
                alt="golden"
                height="50px"
              />
            </a>
          </div>
        </div>
      </footer>
      <div>
        <Scroll showBelow={280} />
      </div>
    </>
  );
};

export default FooterCopyRight;
