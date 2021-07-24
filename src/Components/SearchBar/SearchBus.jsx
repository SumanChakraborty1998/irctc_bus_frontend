import { useState } from "react";
import style from "./SearchBar.module.css"
import SearchIcon from '@material-ui/icons/Search';
import SearchResultList from "../SearchResultList/SearchResultList";
import { loadData, saveData } from "../../utils/localStorage";
import { useDispatch } from "react-redux";
import { getData } from "../../Redux/DataList/action";
import { useHistory } from "react-router-dom";


const SearchBus = () => {

  const depart = loadData("depart")
  const go=loadData("going")
    const [departFrom, setDepartFrom] = useState(depart)
    const [goingTo, setGoingTo] = useState(go)
    const [date, setDate] = useState("")
   const dispatch = useDispatch()
   const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        saveData("depart",departFrom)
        saveData("going",goingTo)
        console.log(departFrom,goingTo,date)
        dispatch(getData(departFrom,goingTo,date))
        history.push("/buses")
    }


    return(
        <div>
        <div className={style.searchBusContainer}>
        <form onSubmit={handleSubmit}>
            <div>
              <label>Depart From</label> <br/>
              <input type="text" value={departFrom} placeholder="Depart From" name="departFrom" onChange={(e)=>{setDepartFrom(e.target.value)}}/>
            </div>
            <div>
              <label>Going to</label> <br/>
              <input type="text" value={goingTo} placeholder="Going To" name="goingTo" onChange={(e)=>{setGoingTo(e.target.value)}}/>
            </div>
            <div>
              <label>Departure Date</label> <br/>
              <input type="date" value={date}  placeholder="Departure date" name="departureDate" onChange={(e)=>{setDate(e.target.value)}}/>
            </div>
            <div className={style.headerSearchBtnContainer}>
              <button type="submit" className={style.busSearchBtn}>Modify <SearchIcon/> </button>
            </div>
        </form>
    </div>
    <SearchResultList/>
    </div>

    )
}

export default SearchBus;