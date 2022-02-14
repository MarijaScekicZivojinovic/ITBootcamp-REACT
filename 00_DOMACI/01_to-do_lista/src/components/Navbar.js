import React from 'react';

function Navbar({ todos }) {
    return (
        <div>
            <nav>The number of pending to-dos is: {todos.length}</nav>
        </div>
    )
}

export default Navbar;