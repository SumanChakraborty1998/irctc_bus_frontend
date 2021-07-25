import React from "react";
import styles from "./Review.module.css";
import BookingDetails from "./BookingDetails";
import FareDetails from "./FareDetails";
<<<<<<< HEAD
import Footer from "../Footer/Footer";

const ReviewBooking = () => {
    return (
        <>
            <div className={styles.container}>
                <BookingDetails />
                <FareDetails />
            </div>
            <Footer />
        </>
    );
=======


const ReviewBooking = () => {
  return (
    <>
      <div className={styles.container}>
        <BookingDetails />
        <FareDetails />
      </div>
      {/* <Footer /> */}
    </>
  );
>>>>>>> 6aef51a5ad9712d8ba3ab291e70425a64945775d
};

export default ReviewBooking;
