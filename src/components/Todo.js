import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../AppContext";
import "./Todo.css";
function Todo({ id, children, onRemove }) {
  const { color } = useContext(AppContext);
  return (
    <div className="Todo" style={{ color }}>
      <button onClick={() => onRemove(id)}>X</button>
      <Link to={`/todos/${id}`}>
        {" "}
        MY TDDO ID: {id} {children}
      </Link>
    </div>
  );
}

export default Todo;
