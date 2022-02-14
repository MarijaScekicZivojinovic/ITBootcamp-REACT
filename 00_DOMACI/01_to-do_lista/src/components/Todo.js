// type rfce and press Enter

import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// this component returns a list with all of the to-do tasks that we entered

function Todo({ todo, index, removeTodo }) {

    return (
        <>
            <li key={todo.index = uuidv4()} style={{ listStyleType: "none" }}>{todo.text}
                {/* <button className='todoButton' onClick={() => completeTodo(index)}>Cross-out</button> */}
                {/* in li: , textDecoration: todo.isCompleted ? "line-through" : ""  */}
                <button className='todoButton' onClick={() => removeTodo(index)}>Delete</button>
            </li>
        </>
    )
};

export default Todo;