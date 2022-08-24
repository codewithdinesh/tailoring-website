import React from "react";
import "./App.css";
import Faq from "./components/pages/Faq";
import Header from "./components/components/Header";
import Offer from "./components/components/Offer";
import Cart from "./components/pages/Cart";
import Overview from "./components/components/Overview";
import Footer from "./components/components/Footer";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import { Main } from "./components/pages/Main";
import Editprofile from "./components/pages/Editprofile";
import Profile from "./components/pages/Profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Product from "./components/pages/Product";
import PageNotFOund from "./components/pages/PageNotFOund";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/faq" element={<Faq img="true" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/:productID" element={<Product />} />
          <Route path="/profile/edit" element={<Editprofile />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<PageNotFOund />} />
    

        </Routes>

        {/* <Cart /> */}
      </Router>
    </div>
  );
}

export default App;
