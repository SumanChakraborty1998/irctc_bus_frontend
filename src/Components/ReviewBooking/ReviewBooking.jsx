import React from "react";
import styles from "./Review.module.css";
import BookingDetails from "./BookingDetails";
import FareDetails from "./FareDetails";


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
};

export default ReviewBooking;
