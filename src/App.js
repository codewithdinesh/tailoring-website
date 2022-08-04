import './App.css';
import Faq from './components/Faq';
import Header from './components/Header';
import Offer from './components/Offer';
import Cart from './components/Cart';
import Overview from './components/Overview';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import { Main } from './components/Main';
import Men from "./components/pages/Men";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (

    <div className="App">

      <Router>

        <Header />


        <Routes>
          <Route exact path="/" element={<Main />} />

          <Route path="/faq" element={<Faq />} />


          <Route path="/contact" element={<Contact />} />
          <Route path="/men" element={<Men />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />

        {/* <Contact /> */}
        {/* <Faq /> */}
        {/* <Login /> */}

      </Router>
        {/* <Profile/> */}
{/* <Signup/> */}
        {/* <Cart/> */}

    </div>
  );
}




export default App;
