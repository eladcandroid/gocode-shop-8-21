function Todo({ id, children }) {
  return (
    <div className="Todo">
      <h1>
        MY TDDO ID: {id} {children}
      </h1>
    </div>
  );
}

export default Todo;
