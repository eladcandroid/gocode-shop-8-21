import Todo from "./Todo";

function Todos({ todos }) {
  return (
    <div className="Todos">
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id}>
          {todo.title}
        </Todo>
      ))}
    </div>
  );
}

export default Todos;
