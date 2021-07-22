import Header from "../Components/HEADER/Header"
import Navbar from "../Components/NAVBAR/Navbar"
import TrendingPackages from "../Components/TRNDING/TrendingPackages"
import Faq from "../Components/FAQ/Faq"
import Footer from "../Components/Footer/Footer"

const Home = () =>{
    return(
        <div>
            <Navbar/>
            <Header/>
            <TrendingPackages/>
            {/* <Footer/> */}
            <Faq/>
            <Footer/>
        </div>
    )
}

export default Home;