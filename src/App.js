import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Todos from "./components/Todos";

const todoArr = [
  { id: 1, title: "Throw the garbage" },
  { id: 2, title: "Buy a new keyboard" },
  { id: 3, title: "Learn React" },
];

function App() {
  const [todos, setTodos] = useState(todoArr);

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const [showTodos, setShowTodos] = useState(true);

  let todoTitle = "";

  // https://jsonplaceholder.typicode.com/todos
  useEffect(() => {
    console.log("AFTER FIRST RENDER");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setTodos(json));
    console.log("here");
  }, []);

  const onChange = (e) => {
    todoTitle = e.target.value;
  };

  const addTodo = () => {
    setTodos([
      {
        id: todos.length + 1,
        title: todoTitle,
        userId: 1,
        completed: false,
      },
      ...todos,
    ]);
  };

  return (
    <div className="App">
      input: <input type="text" onChange={onChange} />
      <button onClick={addTodo}>Add Todo</button>
      <br />
      <br />
      <button onClick={() => setShowTodos(!showTodos)}>
        {showTodos ? "Hide" : "Show"} Todos
      </button>
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
