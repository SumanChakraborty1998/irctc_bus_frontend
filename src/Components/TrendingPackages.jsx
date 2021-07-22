import style from "./Components.module.css";

const TrendingPackages = () => {
    return(
        <div className={style.TrendingPackages}>
            <div className={style.packageOne}><img src="https://www.bus.irctc.co.in/assets/img/East_363x235.jpg"/></div>
            <div className={style.packageTwo}> <img src="https://www.bus.irctc.co.in/assets/img/West_363x235.jpg"/></div>
            <div className={style.packageThree}><img src="https://www.bus.irctc.co.in/assets/img/North_363x235.jpg"/></div>
        </div>
    )
}

export default TrendingPackages
