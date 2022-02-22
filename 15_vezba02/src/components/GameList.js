import React, { useReducer } from 'react';
import { GamesReducer } from '../reducer/GamesReducer'

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

const GameList = () => {
    // ovo dole je isto kao const[state,setState] = useState(initialState)
    const [state, dispatch] = useReducer(GamesReducer, initialState);
    //const [state, dispatch] = useReducer(GamesReducer, [])

    const handleAddNewGame = () => {
        // u dispatch su type i payload obavezni
        dispatch({
            type: 'ADD_GAME',
            payload: {
                title: 'Binding of Isaac',
                id: 2
            }
        })
    };
    const handleUpdateGameName = () => {
        dispatch({
            type: 'UPDATE_GAME',
            payload: {
                title: 'RDR',
                id: 1
            }
        })
    }

    return (
        <div>
            Game List
            {state.map(game => <p key={game.id}>{game.title}</p>)}

            <button onClick={handleAddNewGame}>Add new game</button>
            <button onClick={handleUpdateGameName}>Update game</button>
        </div>);
}

export default GameList;