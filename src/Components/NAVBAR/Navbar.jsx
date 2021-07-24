import { useState } from "react";
import style from "../CSS/Components.module.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import { useHistory } from "react-router-dom";

const Navbar = ({openForm}) => {
    const [openNavLinks, setOpenNavLinks] = useState(false);
    const history =useHistory()
    const handleHome =()=>
    {
        history.push("/")
    }

    //To open and close navlinks (sidebar);
    const toggleNaLinks = () => {
        openNavLinks ? setOpenNavLinks(false) : setOpenNavLinks(true);
    };

    return (
        <nav style={{ zIndex: "1000" }}>
            <div className={style.logo} onClick={handleHome}>
                <img src="https://www.bus.irctc.co.in/assets/img/tourism-logo.png" />
            </div>
            <ul className={style.navElements}>
                <li>
                    Contact us
                    <ul className={style.contactDropdown}>
                        <li>1800110139</li>
                        <li>1buscare@irctc.com</li>
                    </ul>
                </li>

                <li onClick={openForm}>Login</li>

                <li>
                    <button
                        onClick={toggleNaLinks}
                        className={style.openNavBtn}
                    >
                        <FormatAlignLeftIcon />
                    </button>

                    {/* Using ternary operater to toggle className on state change*/}
                    <ul
                        className={`${style.navlinks} ${
                            openNavLinks ? style.openNav : ""
                        }`}
                    >
                        <li>
                            <button
                                onClick={toggleNaLinks}
                                className={style.closeNavBtn}
                            >
                                {" "}
                                <ArrowForwardIcon />{" "}
                            </button>
                        </li>
                        <li>E-Catering</li>
                        <li>E-Ticketing</li>
                        <li>Flights</li>
                        <li>Hotels</li>
                        <li>Lounge</li>
                        <li>Retiring Room</li>
                        <li>Tourism</li>
                        <br />
                        <hr />
                    </ul>
                </li>

                <li>
                    <img src="https://www.bus.irctc.co.in/assets/img/irctc-logo.png" />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
