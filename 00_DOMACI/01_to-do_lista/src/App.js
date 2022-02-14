import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.js';
import Todo from './components/Todo.js';
import TodoForm from './components/TodoForm';

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {


  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localStorageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (localStorageTodos) {
      setTodos(localStorageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  const addTodo = text => {
    const newTodos = [...todos, { text }]; //spread operator copies the list for us so that we are able to just add on the new to-do item
    setTodos(newTodos);
  }

  // const completeTodo = index => {
  //   const newTodos = [...todos];
  //   newTodos[index].isCompleted = true;
  //   setTodos(newTodos);
  // }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    // setTodos(todos.filter(todo => todo.index !== index));
  }

  return (
    <div className="todoApp">
      <h1>To-do List</h1>
      <Navbar todos={todos} />
      <div>
        <div>
          <h1>What are our tasks?</h1>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              // completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </ul>
        <TodoForm addTodo={addTodo} />
      </div>

    </div>
  );
}

export default App;
