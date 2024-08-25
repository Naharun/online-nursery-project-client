import AllProducts from "../../allProduct/AllProducts";
import AboutUs from "../About.Us";
import Banner from "../Banner";
import ContactUs from "../ContactUs";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <Banner />
      <AllProducts />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default Home;
