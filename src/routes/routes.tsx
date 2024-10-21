import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import Home from "../pages/home/home/Home";
import FloweringPlantsGallery from "../pages/plants/FloweringPlantsGallery";
import FloweringPlantsDetails from "../pages/plants/FloweringPlantsDetails";
import FlowersBySeasonGallery from "../pages/plants/FlowersBySeasonGallery";
import FlowersBySeasonDetails from "../pages/plants/FlowersBySeasonDetails";
import GiftPlantsGallery from "../pages/plants/GiftPlantsGallery";
import GiftPlantsDetails from "../pages/plants/GiftPlantsDetails";
import SeedsBulbsGallery from "../pages/plants/SeedsBulbsGallery";
import SeedsBulbsDetails from "../pages/plants/SeedsBulbsDetails";
import PotsPlantersGallery from "../pages/plants/PotsPlantersGallery";
import PotsPlantersDetails from "../pages/plants/PotsPlantersDetails";
import GardenDecorGallery from "../pages/plants/GardenDecorGallery";
import GardenDecorDetails from "../pages/plants/GardenDecorDetails";
import AboutUs from "../pages/home/AboutUs";
import ContactUs from "../pages/home/ContactUs";
import AllProducts from "../pages/allProduct/AllProducts";
import InStock from "../pages/availability/InStock";
import OutOfStock from "../pages/availability/OutOfStock";
import PriceRange from "../pages/price/PriceRange";
import CartPage from "../pages/shopping/CartPage";
import CheckoutPage from "../pages/shopping/CheckoutPage";
import ProductList from "../pages/list/ProductList";
import CreatePlantForm from "../pages/list/CreatePlantForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },

      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },

      {
        path: "/flowering-plants",
        element: <FloweringPlantsGallery />,
      },
      {
        path: "/flower/:flowerName",
        element: <FloweringPlantsDetails />,
      },
      {
        path: "/flowers-by-season",
        element: <FlowersBySeasonGallery />,
      },
      {
        path: "/season/:seasonName",
        element: <FlowersBySeasonDetails />,
      },
      {
        path: "/gift-plants",
        element: <GiftPlantsGallery />,
      },
      {
        path: "/gift/:giftName",
        element: <GiftPlantsDetails />,
      },
      {
        path: "/seeds-bulbs",
        element: <SeedsBulbsGallery />,
      },
      {
        path: "/seeds-bulbs/:seedName",
        element: <SeedsBulbsDetails />,
      },
      {
        path: "/pots-planters",
        element: <PotsPlantersGallery />,
      },
      {
        path: "/pots-planters/:potName",
        element: <PotsPlantersDetails />,
      },
      {
        path: "/garden-decor/",
        element: <GardenDecorGallery />,
      },
      {
        path: "/garden-decor/:decorName",
        element: <GardenDecorDetails />,
      },
      {
        path: "/in-stock",
        element: <InStock />,
      },
      {
        path: "/out-of-stock",
        element: <OutOfStock />,
      },
      {
        path: "/price-range",
        element: <PriceRange />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/list",
        element: <ProductList />,
      },
      {
        path: "/create-plant",
        element: (
          <CreatePlantForm
            onClose={function (): void {
              throw new Error("Function not implemented.");
            }}
            onSuccess={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        ),
      },
    ],
  },
]);

export default router;
