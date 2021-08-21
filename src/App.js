import { useState } from "react";
import "./App.css";

const TODO_KEY = "todos";

const getLocalStorage = () => {
  const value = localStorage.getItem(TODO_KEY);
  console.log(value);
  return JSON.parse(value);
};

const updateLocalStorage = (todos) => {
  return localStorage.setItem(TODO_KEY, JSON.stringify(todos));
};

function App() {
  const previous_todos = getLocalStorage();
  const [todos, setTodos] = useState(previous_todos ? previous_todos : []);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    // add only if input value is not empty
    if (inputValue) {
      // A new copy of current todos is created
      const new_todos = [...todos, inputValue];
      // update todos state
      setTodos(new_todos);
      // update localStorage with new todos
      updateLocalStorage(new_todos);
      // clears input field
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    // A new copy of current todos is created
    const new_todos = [...todos];
    // remove item at index
    new_todos.splice(index, 1);
    setTodos(new_todos);
    updateLocalStorage(new_todos);
  };

  return (
    <div className='App'>
      <div>
        <input
          className='input-field'
          type='text'
          placeholder='Enter your todo item'
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        ></input>
        <button onClick={handleAdd}>Add</button>

        <ul>
          {todos.map((item, index) => {
            return (
              <div key={item} className='row'>
                <li>{item}</li>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
