import Todo from "./Todo";

function Todos({ todos, onRemove }) {
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
