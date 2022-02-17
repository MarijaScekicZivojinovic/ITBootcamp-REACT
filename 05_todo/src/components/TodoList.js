// type rfce and press Enter
import React from 'react';
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, handleDelete }) => {
    return (
        <ul>
            {todos.length
                ? todos.map((todo) => {
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        handleDelete={handleDelete}
                    />
                })
                : "You have completed your tasks. Congrats!"}
        </ul>
    );
};

export default TodoList