import Header from "../Components/Header"
import Navbar from "../Components/Navbar"
import TrendingPackages from "../Components/TrendingPackages"
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