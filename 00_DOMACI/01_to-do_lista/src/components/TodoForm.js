// type rfce and press Enter

import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [todos, setTodos] = useState({
        index: '',
        text: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        if (!todos) return;
        addTodo(todos);
        setTodos({ ...todos, text: '' });
        // }
    };

    // const handleChange = e => {
    //     setTodos({ ...todos, text: e.target.value });
    // };

    return (
        <form onSubmit={handleSubmit} className="todoForm">
            <input
                type="text"
                className='todoInput'
                placeholder='Add a to-do task'
                value={todos.text}
                // onChange={handleChange} 
                onChange={e => setTodos(e.target.value)}
            />
            <button className='todoButton'>Add a task</button>
        </form>
    );
}

export default TodoForm;