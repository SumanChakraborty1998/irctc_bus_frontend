import Header from "../Components/Header/Header"
import Navbar from "../Components/Navbar/Navbar"
import TrendingPackages from "../Components/Trending/TrendingPackages"
import Faq from "../Components/Faq/Faq"
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