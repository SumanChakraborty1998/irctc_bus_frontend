import React from "react";
import styles from "./Review.module.css";
import { useHistory } from "react-router-dom";

const FareDetails = () => {
  const history = useHistory();
  const handlePayment = (e) => {
    history.push("/payment");
  };
  return (
    <>
      <div className={styles.right_con}>
        <div>
          <div className={styles.heading}>
            <p>Fare Details</p>
          </div>
          <div className={styles.heading}>
            <div className={styles.fare_info}>
              <span>Base Fare</span>
              <label>₹ 2550</label>
            </div>
            <div className={styles.fare_info}>
              <span>Tax</span>
              <label>₹ 2550</label>
            </div>
            <div className={styles.fare_info}>
              <span>IRCTC Booking Charges</span>
              <label>₹ 2550</label>
            </div>
            <div className={styles.fare_info}>
              <span>GST(18%)</span>
              <label>₹ 2550</label>
            </div>
            <div className={styles.fare_info}>
              <span>Total Fare</span>
              <label>₹ 2550</label>
            </div>
            <div className={styles.fare_terms}>
              <input id="agree" type="checkbox" />
              <label for="agree">
                I agree to the
                <a href="javascript:void(0)">Terms &amp; Conditions</a>
              </label>
            </div>
            <div className={styles.fare_button}>
              <button onClick={handlePayment}>Continue to Book</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FareDetails;
