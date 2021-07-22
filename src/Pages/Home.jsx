import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Navbar from "../Components/Navbar"
import TrendingPackages from "../Components/TrendingPackages"

const Home = () =>{
    return(
        <div>
            <Navbar/>
            <Header/>
            <TrendingPackages/>
            {/* <Footer/> */}
        </div>
    )
}

export default Home;