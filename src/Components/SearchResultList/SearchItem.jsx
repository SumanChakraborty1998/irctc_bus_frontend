import style from "./SearchList.module.css"
import { useState } from "react"
import { Seats } from "../Seats/Seats"
import { loadData } from "../../utils/localStorage"

const SearchItem = ({item}) => {
    const arrivallocation= loadData("going")
    const departurelocation=loadData("depart")
    const date="2020-08-30"
    const details={
        arrivallocation,
        departurelocation,
        date
    }
console.log(item)
        //TO toggle between Boarding/Dropping Points and Cancellation Policy
        const [state,setState] = useState(false)
        const [seeSeat,setSeeSeat]=useState(false)
    return(
        <div className={style.searchResult}>
        <ul className={style.searchItem}>
           <li className={style.operator}>
               {/* {item.Operator} <br/> */}
               {item.type} <br/>
           </li>
           <li>{item.departureTime}</li>
           {/* <li>{item.TotalDuration}</li>
           <li>{item.Arrival}</li> */}
           <li>₹ {item.fare}</li>
           <li><button className={style.selectSeatBtn} onClick={()=>setSeeSeat(!seeSeat)} >Select</button></li>
       </ul>
       {seeSeat&&<Seats price={item.fare}  details={details} />}
       <div className={style.dropDownBtns}>
           <div className={style.facilityIcons}>
               <button>1</button>
               <button>2</button>
               <button>3</button>
               <button>4</button>
           </div>

           <div>
               <button onClick={()=>setState(false)}>Boarding/Dropping Points</button>
               <button onClick={()=>setState(true)}>Cancellation Policy</button>
           </div>

       </div>

       <div className={style.BoardingDroping} style={{display : (!state)? "flex" : "none"}}>
           <table>
               <tr>
                   <th>Boarding Points</th>
               </tr>
               <tr>
                   <td>Address</td>
                   <td>Depart Time</td>
               </tr>
               <tr>
                   <td>Transport Nagar Metro Station Gate No. 2 (Transport Nagar Metro Station Gate No. 2)</td>
                   <td>08:00 PM</td>
               </tr>
           </table>
           <table>
               <tr>
                   <th>Droping Points</th>
               </tr>
               <tr>
                   <td>Address</td>
                   <td>Depart Time</td>
               </tr>
               <tr>
                   <td>Transport Nagar Metro Station Gate No. 2 (Transport Nagar Metro Station Gate No. 2)</td>
                   <td>08:00 PM</td>
               </tr>
           </table>
       </div>

       <div className={style.cancellationPolicy} style={{display : (state)? "flex" : "none"}}>
           <table>
               <tr>
                   <th>Cancellation Detail</th>
               </tr>
               <tr>
                   <td>Cancellation Time</td>
                   <td>Refund Percent</td>
               </tr>
               <tr>
                   <td>B/W 0-24 Hrs of Bus Start Time</td>
                   <td>0</td>
               </tr>
               <tr>
                   <td>Above 24 Hrs of Bus Start Time</td>
                   <td>50</td>
               </tr>
           </table>
       </div>
   </div>
    )
}

export default SearchItem;