import React from 'react';

const GameListWithoutReducer = ({ state, setState }) => {
    const handleAddNewGame = () => {
        const myNewGame = {
            type: 'ADD_GAME',
            payload: {
                title: 'Binding of Isaac',
                id: 2
            }
        };
        setState((prevState) => [...prevState, myNewGame])
    };
    return (<div style={{ color: 'red' }}>
        Game List:
        {state.map(game => <p key={game.id}>{game.title}</p>)}

        <button onClick={handleAddNewGame}>Add new game</button>
    </div>);
}

export default GameListWithoutReducer;