import React, { useState } from "react";
import Cards from "react-credit-cards";
import styles from "./PaymentPage.module.css";
import "react-credit-cards/es/styles-compiled.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";

function PaymentPage() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    setModalIsOpen(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.App}>
          <div className={styles.card}>
            <Cards
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focus}
            />
          </div>

          <div className={styles.form}>
            <form action="">
              <h1>Payment Details</h1>
              <label style={{ fontSize: "small", fontWeight: "bold" }}>
                CARDHOLDER NAME
                <input
                  type="text"
                  name="name"
                  placeholder="Cardholder Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
              </label>
              <label style={{ fontSize: "small", fontWeight: "bold" }}>
                CARD NUMBER
                <input
                  type="tel"
                  name="number"
                  placeholder="Card  Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
              </label>
              <label style={{ fontSize: "small", fontWeight: "bold" }}>
                EXPIRY
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
              </label>
              <label style={{ fontSize: "small", fontWeight: "bold" }}>
                CVV
                <input
                  type="tel"
                  name="cvc"
                  placeholder="CVC"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
              </label>
              <label style={{ fontSize: "small", fontWeight: "bold" }}>
                Payment Amount
                <input type="number" placeholder="$" />
              </label>
              <button onClick={handleAdd}>PAY</button>
            </form>
          </div>
          <div style={{ padding: "100px" }}>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
            >
              <h3>Booking Id: 23894512784</h3>
              <h1
                style={{
                  color: "green",
                  fontweight: "bold",
                  marginLeft: "40%",
                  marginTop: "190px",
                }}
              >
                <img
                  src="https://www.mavroxpay.com/img/done.png"
                  alt=""
                  style={{ height: "50px" }}
                />
                Payment Successful
              </h1>
              <h1
                style={{
                  color: "green",
                  fontweight: "bold",
                  marginLeft: "20%",
                }}
              >
                Congratulations your booking is successfully completed.
              </h1>

              <div
                className={styles.editModalButtons}
                style={{ marginTop: "-20px" }}
              >
                <br />
                <Link to="/">
                  <div className={styles.form}>
                    <button>Back to HomePage</button>
                  </div>
                </Link>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentPage;
