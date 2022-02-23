import './App.css';
import Navbar from './components/Navbar';
// import API from '../config/api';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Missions from './pages/Missions';
import Rockets from './pages/Rockets';
import Launches from './pages/Launches';
import LaunchDetails from "./components/LauncheDetails";


function App() {
  return (
    <div className="App">

      <Navbar />
      {/* da bi rutovanje moglo da radi, da se koristi unutar nase aplikacije, neophodno je sve da bude wrap-ovano Router-om */}
      <Router>

        <div className='my-links'>
          {/* Navigacioni linkovi START */}
          {/* a href komponenta je Link */}
          <Link to="/">Home</Link>
          {/* ono sto se nalazi u to="" pod navodnicima tu nas vodi click event, to dodaje na nas url */}
          <Link to="/missions">Missions</Link>
          <Link to="/rockets">Rockets</Link>
          <Link to="/launches">Launches</Link>
          {/* Navigacioni linkovi END */}
        </div>
        {/* Nase Route START */}
        {/* Route moraju biti wrap-ovani izmedju Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/launchdetails/:id" element={<LaunchDetails />} />
        </Routes>
        {/* Nase Route END */}
      </Router>
    </div>
  );
}

export default App;
