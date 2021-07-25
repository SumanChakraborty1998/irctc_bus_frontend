import React from "react";
import styles from "./Review.module.css";
import BookingDetails from "./BookingDetails";
import FareDetails from "./FareDetails";
import Navbar from "../NAVBAR/Navbar";
import Footer from "../FOOTER/Footer";

const ReviewBooking = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <BookingDetails />
        <FareDetails />
      </div>
      <Footer />
    </>
  );
};

export default ReviewBooking;
