import { useEffect, useRef, useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import ThemeContext from "./ThemeContext";

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
    // console.log("AFTER FIRST RENDER", inputRef, buttonShukiRef);
    inputRef.current.focus();
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setTodos(json));
    // console.log("here");
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

  const inputRef = useRef(null);
  const buttonShukiRef = useRef(null);

  const [color, setColor] = useState("white");

  return (
    <div className="App">
      <ThemeContext.Provider value={color}>
        color:{" "}
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        input: <input ref={inputRef} type="text" onChange={onChange} />
        <button ref={buttonShukiRef} onClick={addTodo}>
          Add Todo
        </button>
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
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
