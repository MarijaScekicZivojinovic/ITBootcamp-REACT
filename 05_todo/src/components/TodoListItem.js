// type rfce and press Enter

import React from 'react';

const TodoListItem = ({ todo, handleDelete }) => {
    return (
        <li>
            {todo.title}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
    );
};

export default TodoListItem;