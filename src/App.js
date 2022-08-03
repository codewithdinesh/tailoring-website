import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Offer from './components/Offer';
import Overview from './components/Overview';
import Footer from './components/Footer';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <Header className="container-max" />
      <Offer title={"Buy 4 or more tailored items get 20% off"} btn={"Grab it!"} />
      <Offer title={"Buy 2 e tailored items get 10% off"} btn={"Grab it!"} />
      <Overview />
      <Main />

      <Footer />

    </div>
  );
}

export default App;
