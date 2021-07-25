import Header from "../Components/HEADER/Header";
import PackagesSlider from "../Components/PackagesSlider/PackagesSlider";
import Faq from "../Components/FAQ/Faq";
import Footer from "../Components/Footer/Footer";

const Home = () => {
    return (
        <div>
            {/* <Navbar openForm={handleOpen} />
      <LoginModel /> */}
            <Header />
            <PackagesSlider />
            <Faq />
            <Footer />
        </div>
    );
};

export default Home;
