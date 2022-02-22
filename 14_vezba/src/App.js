import './App.css';
import MovieList from './components/MovieList';
import MovieListWithoutContext from './components/MovieListWithoutContext';
import MovieProvider from './context/MovieProvider';
import React, { useState } from 'react';
import PricesWithoutContext from './components/PricesWithoutContext';
import Prices from './components/Prices';
import CinemaProvider from './context/CinemaProvider';
import CinemaList from './components/CinemaList'

const initialState = [
  {
    name: 'Harry Potter',
    price: '700',
    id: 0,
  },
  {
    name: 'LOTR',
    price: '900',
    id: 1,
  },
  {
    name: 'Batman',
    price: '500',
    id: 2,
  },
]

function App() {
  const [state, setState] = useState(initialState);
  return (
    <div className="App">
      <h1>WITH CONTEXT</h1>
      <CinemaProvider>
        <CinemaList />
        <MovieProvider>
          <MovieList />
          <Prices />
        </MovieProvider>
      </CinemaProvider>

      <br />
      <br />
      <br />
      <br />

      <h1>WITHOUT CONTEXT, only using props:</h1>
      <MovieListWithoutContext moviescopy={state} />
      <PricesWithoutContext moviescopy={state} />
    </div>
  );
}

export default App;