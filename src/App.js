import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home/Home"
import Products from "../src/Pages/Products/Products"
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Displayproduct from "../src/Pages/Displayproduct/Displayproduct"
import Cart from './Pages/Cart/Cart';
import Login from "./Pages/Login/Login"
import Signup from './Pages/Signup/Signup';
import Payment from './Components/Payment/Payment';
import MyOrder from './Pages/MyOrder/MyOrder';
import Contactdata from './Pages/Contactdata/Contactdata';
import Reset from './Components/Reset/Reset';
import PasswordReset from './Components/PasswordReset/PasswordReset';

function App() {

  console.log(window.location)
  return (
    <>
   
      <BrowserRouter>
        <Navbar />
        <br />
        <br />
        <Routes >
          <Route basename="/" path="/" element={<Home />} />
          <Route basename="/teskofrontend" path="/teskofrontend/" element={<Home />} />
          <Route basename="/products" path="/products" element={<Products />} />
          <Route basename="/myorders" path="/myorders" element={<MyOrder />} />
          <Route basename="/cart/:id?" path="/cart/:id?" element={<Cart/>} />
          <Route basename="/products/:data" path="/products/:data" element={<Products />} />
          <Route basename="/displayproduct/:id" path="/displayproduct/:id" element={<Displayproduct />} />
          <Route basename="/login" path="/login" element={<Login/>} />
          <Route basename="/signup" path="/signup" element={<Signup/>} />
          <Route basename="/Payment" path="/Payment" element={<Payment/>} />
          <Route basename="/paypal-success" path="/paypal-success" element={<Home />} />
          <Route basename="/paypal-cancel" path="/paypal-cancel" element={<Home />} />
          <Route basename="/contact" path="/contact" element={<Contactdata />} />
          <Route basename="/reset" path="/reset" element={<Reset/>} />
          <Route basename="/api/users/set-new-password/:uidb64/:token" path="/api/users/set-new-password/:uidb64/:token" element={<PasswordReset/>} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
   
  );
}

export default App;
