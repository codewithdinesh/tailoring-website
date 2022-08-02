import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Offer from './components/Offer';
import Overview from './components/Overview';

function App() {
  return (
    <div className="App">
      <Header />
      <Offer title={"Buy 4 or more tailored items get 20% off"} btn={"Grab it!"} />
      <Offer title={"Buy 2 e tailored items get 10% off"} btn={"Grab it!"} />
      <Overview />
    </div>
  );
}

export default App;
