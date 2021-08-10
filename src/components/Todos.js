import { useEffect } from "react";
import Todo from "./Todo";

function Todos({ todos, onRemove }) {
  useEffect(() => {
    console.log("BORN!");

    return () => {
      console.log("DIED!");
    };
  }, []);
  return (
    <div className="Todos">
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} onRemove={onRemove}>
          {todo.title}
        </Todo>
      ))}
    </div>
  );
}

export default Todos;
