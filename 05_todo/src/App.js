// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';
import { TODOS_KEY } from './settings'

function App() {
  //vlasnik State-a je onaj koji treba da manipulise tim state-om, zato OVDE MORA DA IDE ID

  const [todos, setTodos] = useState([]);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const addTodo = (title) => {
    setTodos((prevState) => {
      return [...prevState, { id: uuidv4(), title }]
      // ovako radimo ako smo gore imali objekat: const [todos, setTodos] = useState([]);
      // ovo je isto sto i:
      // return [...prevState, {id: uuidv4(), title: title}]
    });
  }

  // useEffect(() => {
  //   //uvek, i tokom prvog renderovanja i tokom svakog update-a
  // });

  // useEffect(() => {
  //   //samo tokom prvog renderovanja
  // }, []);

  // useEffect(() => {
  //   //kadgod se moj todos promeni
  // }, [todos]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem(TODOS_KEY));
    setTodos(todos ? todos : []);
  }, []); //ovo mozemo da prebacimo u const [todos, setTodos]

  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos.length]);

  return (
    <div className="App">
      <Navbar todos={todos} />
      <TodoList todos={todos} handleDelete={handleDelete} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
