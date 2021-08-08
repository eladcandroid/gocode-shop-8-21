function Todo({ id, children, onRemove }) {
  return (
    <div className="Todo">
      <h1>
        <button onClick={() => onRemove(id)}>X</button> MY TDDO ID: {id}{" "}
        {children}
      </h1>
    </div>
  );
}

export default Todo;
