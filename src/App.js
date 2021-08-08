import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Todos from "./components/Todos";

function App() {
  console.log("App FUNCTION");
  const todos = [
    { id: 1, title: "Throw the garbage" },
    // { id: 2, title: "Buy a new keyboard" },
    // { id: 3, title: "Learn React" },
  ];

  const [showTodos, setShowTodos] = useState(true);

  return (
    <div className="App">
      <button>Add Todo</button>
      <button onClick={() => setShowTodos(false)}>Hide Todos</button>
      <div>Todos Count: {todos.length}</div>
      <header className="App-header">
        {showTodos && todos.length > 0 ? (
          <Todos todos={todos} />
        ) : (
          <div>No Todos!</div>
        )}
      </header>
    </div>
  );
}

export default App;
