import { Button, TextField } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import ThemeContext from "./ThemeContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";

function App() {
  const [color, setColor] = useState("white");

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
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
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
