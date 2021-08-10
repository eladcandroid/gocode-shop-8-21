import { useContext } from "react";
import ThemeContext from "../ThemeContext";
import "./Todo.css";
function Todo({ id, children, onRemove }) {
  const color = useContext(ThemeContext);
  return (
    <div className="Todo" style={{ color }}>
      <button onClick={() => onRemove(id)}>X</button> MY TDDO ID: {id}{" "}
      {children}
    </div>
  );
}

export default Todo;
