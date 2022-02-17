// type rfce and press Enter
import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState("");

    // ako ovde upisemo ovako:
    // const [title, setTitle] = useState({
    //     id: "",
    //     title: ""
    // });
    // onda unutar return menjamo setTitle u:
    // onChange={(e) => 
    //  setTitle((prevState) => {
    //     return {...prevState, title: e.target.value};
    // })

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(title);
        setTitle(''); //resetujemo title ovde
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Add new to-do'
                value={title} //resetujemo value ovde, pogledaj 5 liniju
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="submit"
                value="Add to-do"
            />
        </form>
    )
}

export default TodoForm;