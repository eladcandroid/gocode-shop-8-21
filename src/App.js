import { Button, TextField } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AppContext from "./AppContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import TodoDetails from "./views/TodoDetails";

function App() {
  const [color, setColor] = useState("white");

  const todoArr = [];

  const [todos, setTodos] = useState(todoArr);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <AppContext.Provider value={{ color, setColor, todos, setTodos }}>
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <br />
          <br />
          <br />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/todos/:id">
              <TodoDetails />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
