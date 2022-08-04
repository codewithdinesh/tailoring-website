import './App.css';
import Faq from './components/Faq';
import Header from './components/Header';
import Offer from './components/Offer';
import Overview from './components/Overview';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Login from './components/Login';
import { Main } from './components/Main';
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom';
function App() {
  return (

<Route>



    <div className="App">
      <Header className="container-max" />
      <Offer title={"Buy 4 or more tailored items get 20% off"} btn={"Grab it!"} />
      <Offer title={"Buy 2 e tailored items get 10% off"} btn={"Grab it!"} />
      <Overview />
      <Main />
      <Footer />




    {/* <Contact/> */}
    {/* <Faq/> */}
{/* <Login/> */}

    </div>
</Route>
  );
}




export default App;
