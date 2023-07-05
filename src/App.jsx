import { useState } from 'react'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';


import './App.css'


function App() {
  const [todos, setTodos] = useState([
    {
      id : 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id : 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id : 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]); 

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [order, setOrder] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },
   ];
   setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]; //copia todos os todos
    const filteredTodos = newTodos.filter((todo) =>
     todo.id !== id ? todo : null
     ); //filtra todos os todos que não tem o id que foi passado 
      setTodos(filteredTodos); //seta os todos filtrados
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]; //copia todos os todos
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    ); //filtra todos os todos que não tem o id que foi passado
    setTodos(newTodos); //seta os todos filtrados
  };

  

  return (
     <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setOrder={setOrder} />
      <div className="todo-list">
         {todos
          .filter((todo) => 
            filter === "All" 
              ? true 
              : filter === "completos" 
              ? todo.isCompleted 
              : !todo.isCompleted)
          .filter((todo) => 
            todo.text.toLowerCase().includes(search.toLowerCase())
         )
         .sort((a, b) => 
            order === "Asc" 
              ? a.text.localeCompare(b.text) 
              : b.text.localeCompare(a.text)
         )
         .map((todo) => (
          <Todo 
          Key={todo.id} 
          todo={todo} 
          removeTodo={removeTodo} 
          completeTodo={completeTodo}
          />
         ))}
      </div>
      <TodoForm addTodo={addTodo} />
     </div>
  );
}

export default App
