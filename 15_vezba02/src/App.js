import { useState } from 'react';
import './App.css';
import GameList from './components/GameList';
import GameListWithoutReducer from './components/GameListWithoutReducer';
import MyProjectsList from './components/MyProjectsList';
import ProjectProvider from './context/ProjectProvider';
//reducer je bukvalno useState i pravimo ga kada imamo kompleksniji state kojim treba da manipulisemo 


const initialState = [
  {
    title: 'Overwatch',
    id: 0,
  },
  {
    title: 'CoD',
    id: 1,
  },
];

function App() {
  const [state, setState] = useState(initialState);

  //ovde moze handleAddGame i prosledimo ga posle u GameListWithoutReducer
  // const handleAddGame = (game) => {
  //   setState((prevState) => [prevState, game])
  // };

  return (
    <div className="App">
      <ProjectProvider>
        {/* ovde koristimo reducer: */}
        <GameList />
        <br />
        {/* ovde ne: */}
        <br />
        <GameListWithoutReducer state={state} setState={setState} />
        <MyProjectsList />
      </ProjectProvider>
    </div>
  );
}

export default App;
