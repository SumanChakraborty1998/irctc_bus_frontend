import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Review.module.css";
import { FaBusAlt } from "react-icons/fa";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 400,
    },
  },
}));

const currencies = [
  {
    value: "select",
    label: "Select State",
  },
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
const BookingDetails = () => {
  const classes = useStyles();

  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <>
      <div className={styles.left_con}>
        <div className={styles.heading}>
          <p>Review Your Booking</p>
        </div>
        <div className={`${styles.heading} ${styles.heading2}`}>
          <div className={styles.bus_info}>
            <div>
              <FaBusAlt color="#397ac6" size="40px" />
            </div>
            <div>
              <label>Dhanunjaya Travels</label>
              <p>2+1 AC Sleeper</p>
            </div>
          </div>
          <div className={styles.seat_info}>
            <p>1 Seat Selected</p>
            <label>
              Seat No:
              <span>L1</span>
            </label>
          </div>
          <div className={styles.boarding_info}>
            <p>Hyderabad</p>
            <strong>1:30PM</strong>
            <br />
            <span>Fri,30/07/2021</span>
            <br />
            <label>Boarding Point & Time</label>
            <div className={styles.time_info}>CBS : 01:30 PM</div>
          </div>
          <div className={styles.duration_info}>
            <span>15h 30m</span>
          </div>
          <div className={styles.dropping_info}>
            <p>Mumbai</p>
            <strong>05:00 AM</strong>
            <br />
            <span>Sat, 31/07/2021</span>
            <br />
            <label>Dropping Point &amp; Time</label>
            <div className={styles.time_info}>Mumbai : 05:00 AM</div>
          </div>
        </div>
        <div>
          <div className={styles.heading}>Enter Traveller Details</div>
        </div>
        <div className={`${styles.form_con} ${styles.heading}`}>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <p>Contact Details</p>
            </div>
            <div className={styles.input_box}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Email"
                size="small"
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Mobile"
                size="small"
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Address"
                size="small"
              />

              <TextField
                id="outlined-select-currency-native"
                select
                value={currency}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
                size="small"
              >
                {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>

              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Pincode"
                size="small"
              />
              <div className={styles.info}>
                Your booking details will be sent to this email address and
                mobile number.
              </div>
            </div>
            <TextField
              id="outlined-select-currency-native"
              select
              value={currency}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              size="small"
              label="GST(optional)"
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </form>
          <form className={styles.form2_con}>
            <div>
              <p>Passenger 1 | Seat No. L1</p>
            </div>
            <div>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Traveller Name"
                size="small"
              />
              <TextField
                id="outlined-select-currency-native"
                select
                value={currency}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
                size="small"
              >
                {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>

              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Age"
                size="small"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingDetails;
