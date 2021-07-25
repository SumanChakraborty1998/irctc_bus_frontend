import { useState } from "react";
import { useSelector } from "react-redux";
import { Oops } from "../oops/Oops";
import SearchItem from "./SearchItem";
import style from "./SearchList.module.css";

const SearchResultList = () => {
    const busdata = useSelector((state) => state.dataList.data);
    console.log(busdata);
    if (busdata?.length === 0) {
        return <Oops />;
    }
    return (
        <div className={style.searchResultContainer}>
            <div className={style.searchFilter}>
                <h3>Filter</h3>
                <div>
                    <p>Departure Time</p>
                    <div className={style.filterBtns}>
                        <div>Before 6 am</div>
                        <div>6 am to 12 pm</div>
                        <div>12pm to 6 pm</div>
                        <div>After 6 pm</div>
                    </div>
                </div>
                <div>
                    <p>Arrival Time</p>
                    <div className={style.filterBtns}>
                        <div>Before 6 am</div>
                        <div>6 am to 12 pm</div>
                        <div>12pm to 6 pm</div>
                        <div>After 6 pm</div>
                    </div>
                </div>
                <div>
                    <p>Bus Type</p>
                    <div className={style.filterBtns}>
                        <div>Seater</div>
                        <div>Sleeper</div>
                        <div>AC</div>
                        <div>Non-AC</div>
                    </div>
                </div>
            </div>

            <div className={style.searchResultList}>
                <div className={style.listHeadContainer}>
                    <h3>We have got {busdata.length} results</h3>
                    <ul className={style.listHead}>
                        <li className={style.operator}>Operator</li>
                        <li>Departure</li>
                        <li>Total Duration</li>
                        <li>Arrival</li>
                        <li>Price</li>
                        <li>Select Seats</li>
                    </ul>
                </div>
                {busdata?.map((item) => {
                    return <SearchItem key={item._id} item={item} />;
                })}
            </div>
        </div>
    );
};

export default SearchResultList;
