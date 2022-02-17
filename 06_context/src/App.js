// import logo from './logo.svg';
import './App.css';
import ThemeToggle from "./components/ThemeToggle";
import SongList from './components/SongList';
import ThemeContextProvider from './context/ThemeContext';
import SongContextProvider from './context/SongContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ThemeToggle />
        <SongContextProvider>
          <SongList />
        </SongContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
