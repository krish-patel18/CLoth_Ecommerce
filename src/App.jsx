import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Ghar"
import Collection from "./Pages/Collections";
import Contact from "./Pages/Contacts";
import About from "./Pages/Abouts";
import Product from "./Pages/Productitems";
import Carts from "./Pages/Cartss";
import Login from "./Pages/LoginPages";
import PlaceOrder from "./Pages/PlaceOrderss";
import Orders from "./Pages/Ordersss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { ToastContainer,} from 'react-toastify';
import ScrollToTop from "./context/ScrollToTop";

function App() {
  return (
    <div className="relative min-h-screen w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* Background css */}
      <div class="fixed inset-0 -z-10 h-screen w-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>


      <ScrollToTop />

      <ToastContainer />

      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
