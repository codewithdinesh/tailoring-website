import './App.css';
import Faq from './components/pages/Faq';
import Header from './components/components/Header';
import Offer from './components/components/Offer';
import Cart from './components/pages/Cart';
import Overview from './components/components/Overview';
import Footer from './components/components/Footer';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import { Main } from './components/pages/Main';

import Profile from "./components/pages/Profile";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Product from './components/pages/Product';
function App() {
  return (

    <div className="App">

      <Router>

        <Header />


        <Routes>
          <Route exact path="/" element={<Main />} />

          <Route path="/faq" element={<Faq />} />


          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product" element={<Product />} />


        </Routes>

        <Footer />
        {/* <Cart /> */}
      </Router>


    </div>
  );
}




export default App;
