import Header from "../Components/HEADER/Header";
import PackagesSlider from "../Components/PackagesSlider/PackagesSlider";
import Faq from "../Components/FAQ/Faq";

const Home = () => {
 

  return (
    <div>
      {/* <Navbar openForm={handleOpen} />
      <LoginModel /> */}
      <Header />
      <PackagesSlider />
      {/* <Footer/> */}
      <Faq />
  
    </div>
  );
};

export default Home;
