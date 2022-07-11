import React, {useState,useEffect} from 'react';
import './App.css';

//importing Components
import Form from './components/form'
import ToDoList from './components/ToDoList';

function App() {

  //states
  const [inputText,setInputText] =useState("");
  const [todos,setTodos] =useState([]);
  const [status,setStatus] =useState('all');
  const [filteredTodos,setFilteredTodos] =useState([]);

  //Save to local storage
  // const saveLocalTodos = () => {
  //   if(localStorage.getItem('todos')===null)
  //     localStorage.setItem('todos',JSON.stringify([]));
  //   else
  //     localStorage.setItem("todos",JSON.stringify(todos));
  // }

  // const getLocalTodos= ()=>{
  //   if(localStorage.getItem('todos')===null)
  //     localStorage.setItem('todos',JSON.stringify([]));
  //   else
  //     localStorage.setItem("todos",JSON.stringify(todos));
  // }


  // useEffect(()=>{
  //   getLocalTodos();
  // },[])

  useEffect(()=>{
    filterHandler();
    //saveLocalTodos();
  },[todos,status])

  //functions
  const filterHandler=()=>{
    switch(status){
      case'completed':
      setFilteredTodos(todos.filter(todo=>todo.completed===true));
      break;
      case'uncompleted':
      setFilteredTodos(todos.filter(todo=>todo.completed===false));
      break;
      default:
      setFilteredTodos(todos);
      break;
    };
    
  

  return (
    <div className="App">
    <header>
        <h1>ToDo List</h1>
    </header>
    <Form
    inputText={inputText} 
    todos={todos} 
    setTodos={setTodos} 
    setInputText={setInputText}
    setStatus={setStatus}
    />
    <ToDoList 
    setTodos={setTodos} 
    filteredTodos={filteredTodos}
    todos={todos}/>
    </div>
  );
}
}
export default App
