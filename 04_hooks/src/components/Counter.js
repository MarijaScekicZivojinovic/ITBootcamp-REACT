import React, { useState } from 'react';
// hook je useState, a pozivamo ga u desetoj liniji 

const initialFunction = () => {
    console.log('run function');
    return 4;
}

const Counter = () => {
    const [counter, setCounter] = useState(4);
    // const [counter, setCounter] = useState(initialFunction());
    // const [counter, setCounter] = useState( () => {
    //     console.log('run function');
    //     return 4;
    // }); // [state, setState] ; saljemo mu inicijalnu vrednost, ovde je u pocetku bilo 4, tj useState(4)

    const handleDecrement = () => {
        setCounter((previousState) => previousState - 1);
    }
    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )
};

export default Counter;