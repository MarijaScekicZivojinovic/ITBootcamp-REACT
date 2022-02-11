import React, { useState, useEffect } from 'react';

const Select = () => {
    const [state, setState] = useState("posts");

    const [items, setItems] = useState([]);

    const handleChange = (e) => {
        setState(e.target.value);
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${state}`)
            .then((response) => response.json())
            .then((json) =>
                // document.body.innerHTML = JSON.stringify(json) //za ispis na stranicu
                setItems(json)
            );
    }, [state]);
    // ubacujemo [state] da radimo API poziv kad se state zameni samo


    return <>
        {/* <> je kao <React.Fragment> ; potreban nam je wrapper u kom cemo drzati tagove, jer ako bismo ubacili vise tagova gresku ce nam izbaciti*/}
        <form>
            <select value={state} onChange={handleChange}>
                <option value="posts">Posts</option>
                <option value="comments">Comments</option>
                <option value="albums">Albums</option>
            </select>
        </form>
        <ul>
            {items.map((item, index) => {
                return <li key="index">{item.id} {JSON.stringify(item)}</li>
            })}
        </ul>
    </>
};

export default Select;