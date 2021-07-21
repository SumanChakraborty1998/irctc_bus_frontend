import React from "react";
import styles from "./Footer.module.css";
import FooterCopyRight from "./FooterCopyRight";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer_box}>
          <div className={styles.footer_list}>
            <div>Services</div>
            <hr></hr>
            <div className={styles.footer_list}>
              <ul>
                <li>E-catering</li>
                <li>E-Ticketing</li>
                <li>Flights</li>
                <li>Hotels</li>
                <li>Lounge</li>
                <li>Retiring Room</li>
                <li>Tourism</li>
              </ul>
            </div>
          </div>
          <div className={styles.footer_list}>
            <div>IRCTC Popular Hotels</div>
            <hr></hr>
            <div style={{ display: "flex" }}>
              <div
                className={styles.footer_list}
                style={{ marginRight: 200, marginLeft: -100 }}
              >
                <ul>
                  <li>New Delhi</li>
                  <li>Mumbai</li>
                  <li>Chennai</li>
                  <li>Kolkata</li>
                  <li>Banglore</li>
                  <li>Amritsar</li>
                  <li>Agra</li>
                  <li>Goa</li>
                </ul>
              </div>
              <div className={styles.footer_list}>
                <ul>
                  <li>Hyderabad</li>
                  <li>Jaipur</li>
                  <li>Tirupati</li>
                  <li>Udaipur</li>
                  <li>Haridwar</li>
                  <li>Katra</li>
                  <li>Shirdi</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footer_list}>
            <div>About Us</div>
            <hr></hr>
            <div className={styles.footer_list}>
              <ul>
                <li>About Us</li>
                <li>Media Corner</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FooterCopyRight />
    </>
  );
};

export default Footer;
