import Header from "../Components/HEADER/Header"
import Navbar from "../Components/NAVBAR/Navbar"
import LoginModel from "../Components/LoginModel/LoginModel"
import  PackagesSlider from "../Components/PackagesSlider/PackagesSlider"
import Faq from "../Components/FAQ/Faq"
import Footer from "../Components/FOOTER/Footer"
import {useState} from "react"

const Home = () =>{
   
    const [open,setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      
    return(
        <div>
            <Navbar openForm={handleOpen}/>
            <LoginModel handleClose={handleClose} open={open}/>
            <Header/>
            < PackagesSlider/>
            {/* <Footer/> */}
            <Faq/>
            <Footer/>
        </div>
    )
}

export default Home;