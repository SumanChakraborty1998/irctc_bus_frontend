import style from "../CSS/Components.module.css";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../../Redux/DataList/action";


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Header = () => {
  const classes = useStyles();

  const [departFrom, setDepartFrom] = useState("");
  const [goingTo, setGoingTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(departFrom, goingTo, departureDate);
    dispatch(getData(departFrom, goingTo, departureDate));
  };

  return (
    <header>
      <div className={style.banner}>
        <div className={style.headerCol_1}>
          <img src="https://www.bus.irctc.co.in/assets/img/Bus1.png" />
        </div>
        <div className={style.headerCol_2}>
          <img src="https://www.bus.irctc.co.in/assets/img/Bus2.png" />
        </div>
      </div>
      <div className={style.searchBusHeader}>
        <ul className={style.iconsWrap}>
          <li>
            <a href="#" target="_blank">
              <div className={`${style.icons} ${style.flights}`}></div>
              <br />
              <span>Flights</span>
            </a>
          </li>

          <li>
            <a href="#" target="_blank">
              <div className={`${style.icons} ${style.irctcHotels}`}></div>
              <br />
              <span>Hotels</span>
            </a>
          </li>

          <li>
            <a href="#" target="_blank">
              <div className={`${style.icons} ${style.busTickets}`}></div>
              <br />
              <span>Bus Tickets</span>
            </a>
          </li>

          <li>
            <a href="#" target="_blank">
              <div className={`${style.icons} ${style.retiringRoom}`}></div>
              <br />
              <span>Retiring room</span>
            </a>
          </li>

          <li>
            <a href="#" target="_blank">
              <div className={`${style.icons} ${style.lounge}`}></div>
              <br />
              <span>Lounge</span>
            </a>
          </li>

          <li>
            <a href="#" target="_blank">
              <div className={`${style.icons} ${style.tourPackages}`}></div>{" "}
              <br />
              <span>Tour Packages</span>
            </a>
          </li>

          <li>
            <a href="#" target="_blank">
              <div className={`${style.icons} ${style.touristTrains}`}></div>
              <br />
              <span>Tourist train</span>
            </a>
          </li>

          <li>
            <a href="#" target="_blank">
              <div className={`${style.icons} ${style.buddhistTrain}`}></div>
              <br />
              <span>Buddhist trian</span>
            </a>
          </li>

          <li>
            <a href="#" target="_blank">
              <div className={`${style.icons} ${style.maharajas}`}></div>
              <br />
              <span>Maharajas</span>
            </a>
          </li>

          <li>
            <a href="#" target="_blank">
              <div className={`${style.icons} ${style.goldenChariot}`}></div>
              <br />
              <span>Golden Chariot</span>
            </a>
          </li>

          <li>
            <a href="#" target="_blank">
              <div className={`${style.icons} ${style.cruise}`}></div>
              <br />
              <span>Cruise</span>
            </a>
          </li>
        </ul>

        <div className={style.headerTitle_1}>
          <DirectionsBusIcon />
          <h2>Book Bus Ticket</h2>
        </div>

        <div className={style.headerBusSearchContainer}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Depart From</label> <br />
              <input
                type="text"
                value={departFrom}
                placeholder="Depart From"
                onChange={(e) => setDepartFrom(e.target.value)}
              />
            </div>
            <div>
              <label>Going to</label> <br />
              <input
                type="text"
                value={goingTo}
                placeholder="Going to"
                onChange={(e) => setGoingTo(e.target.value)}
              />
            </div>
            <div>
              <label>Departure Date</label> <br />
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>
            <div className={style.headerSearchBtnContainer}>
              <button type="submit" className={style.busSearchBtn}>
                Search Bus <SearchIcon />{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
