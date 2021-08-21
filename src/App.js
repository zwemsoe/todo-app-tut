import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = (e) => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleDelete = (index) => {
    const new_todos = [...todos]; // A new copy of current todos must be created
    new_todos.splice(index, 1);
    setTodos(new_todos);
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
