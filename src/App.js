import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Todos from "./components/Todos";

const todoArr = [
  { id: 1, title: "Throw the garbage" },
  { id: 2, title: "Buy a new keyboard" },
  { id: 3, title: "Learn React" },
];

function App() {
  console.log("App FUNCTION");
  const [todos, setTodos] = useState(todoArr);

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const [showTodos, setShowTodos] = useState(true);

  return (
    <div className="App">
      <button>Add Todo</button>
      {/* <button onClick={() => onRemove(2)}>Remove Todo id 2</button> */}
      <button onClick={() => setShowTodos(false)}>Hide Todos</button>
      <div>Todos Count: {todos.length}</div>
      <header className="App-header">
        {showTodos && todos.length > 0 ? (
          <Todos todos={todos} onRemove={onRemove} />
        ) : (
          <div>No Todos!</div>
        )}
      </header>
    </div>
  );
}

export default App;
