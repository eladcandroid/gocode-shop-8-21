import { Button, TextField } from "@material-ui/core";
import { useContext, useEffect, useRef, useState } from "react";
import Todos from "../components/Todos";
import ThemeContext from "../ThemeContext";

const todoArr = [
  { id: 1, title: "Throw the garbage" },
  { id: 2, title: "Buy a new keyboard" },
  { id: 3, title: "Learn React" },
];

function Home() {
  const [todos, setTodos] = useState(todoArr);

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const [showTodos, setShowTodos] = useState(true);

  let todoTitle = "";
  const inputRef = useRef(null);

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

  const buttonShukiRef = useRef(null);

  const { color, setColor } = useContext(ThemeContext);

  return (
    <>
      <TextField
        label="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <TextField
        ref={inputRef}
        type="text"
        onChange={onChange}
        label="Todo to add"
      />
      <Button variant="contained" ref={buttonShukiRef} onClick={addTodo}>
        Add Todo
      </Button>
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
    </>
  );
}

export default Home;
