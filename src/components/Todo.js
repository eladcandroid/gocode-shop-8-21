import "./Todo.css";
function Todo({ id, children, onRemove }) {
  return (
    <div className="Todo">
      <button onClick={() => onRemove(id)}>X</button> MY TDDO ID: {id}{" "}
      {children}
    </div>
  );
}

export default Todo;
