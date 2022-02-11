import React, { useState, useEffect } from 'react';
// hook je useState, a pozivamo ga u desetoj liniji 

const Counter1 = () => {
    const [state, setState] = useState({ counter: 4, color: "blue" });
    const { counter, color } = state;

    // const [color, setColor] = useState('blue')
    // const [counter, setCounter] = useState(4)

    const handleDecrement = () => {
        // setCounter((previousState) => previousState - 1);
        setState((prevState) => {
            //spread operator
            return { ...prevState, counter: prevState.counter - 1 }
            //...prevState kopira prethodni objekat, da nam ne nestane boja sa ekrana
        });
    };

    // const changeColor = () => {
    //     setState(previousState => {
    //         return { ...previousState, color: "red" }
    //     });
    // };

    // useEffect(() => {
    //     console.log('Render');
    // });

    //prima dva parametra, drugi je niz, i [] pretstavlja trenutak kad je komponenta mount-ovana odnosno upisana u DOM ; na ovaj nacin pozivamo componentDidMount
    // useEffect(() => {
    //     console.log('Render');
    // }, []);

    //zvace useEffect samo kada budemo menjali color:
    useEffect(() => {
        console.log("Render");
    }, [state.color]);

    useEffect(() => {
        if (state.counter === 0) alert("Stiglo je do 0");
    }, [state.counter]);

    //ComponentWillUnmount:
    useEffect(() => {
        console.log("Hello World")

        //ComponentWillUnmount se poziva sa return unutar useEffect
        return () => {
            console.log("Do some cleanup")
        }
    }, []);

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>{counter}</span>
            <span style={{ marginLeft: 15 }}>{color}</span>
            <button>+</button>
            <button onClick={() => setState(previousState => {
                return { ...previousState, color: "red" }
            })}>Change Colour</button>
        </div>
    )
};

export default Counter1;