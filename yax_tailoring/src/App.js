import React, { useEffect } from "react";
import "./App.css";
import Faq from "./components/pages/Faq";
import Header from "./components/components/Header";
import Offer from "./components/components/Offer";
import Overview from "./components/components/Overview";
import Footer from "./components/components/Footer";
import Cart from "./components/pages/Cart";
import Contact from "./components/pages/Contact";
import Signup from "./components/pages/Signup";
import { Main } from "./components/pages/Main";
import Editprofile from "./components/pages/Editprofile";
import Profile from "./components/pages/Profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Product from "./components/pages/Product";
import PageNotFOund from "./components/pages/PageNotFOund";
import AuthWrapper from "./components/Screens/AuthWrapper";  // this is for wraping component into Auth
import Auth from "./components/Auth";
import Login from "./components/pages/Login";
import LogOut from "./components/pages/LogOut";
import ScrollToTop from "./components/components/ScrollToTop"


function App() {

  return (
    <div className="App">
      <Router>

        {/* For scroll to top when route changed */}
        <ScrollToTop />

        {/* Header */}
        <Header />

        <Routes>

          <Route exact path="/" element={<Main />} />
          <Route path="/faq" element={<Faq img="true" />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={

            <AuthWrapper>
              <Login />
            </AuthWrapper>

          } />

          <Route path="/Profile" element={<Profile />} />

          <Route path="/signup" element={
            <AuthWrapper>
              <Signup />
            </AuthWrapper>
          } />

          <Route path="/product/:productID" element={<Product />} />
          <Route path="/profile/edit" element={<Editprofile />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="*" element={<PageNotFOund />} />

        </Routes>

        {/* <Cart /> */}
      </Router>
    </div>
  );
}

export default App;
