import './App.css';
import Faq from './components/Faq';
import Header from './components/Header';
import Offer from './components/Offer';
import Overview from './components/Overview';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Login from './components/Login';
import { Main } from './components/Main';
import Men from "./components/pages/Men";
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

    </div>
  );
}




export default App;
