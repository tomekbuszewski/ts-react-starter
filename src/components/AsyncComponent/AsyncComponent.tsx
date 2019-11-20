import * as React from "react";
import axios from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const AsyncComponent = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/",
      );
      setTodos(data);
    })();
  }, []);

  if (todos.length > 0) {
    return (
      <React.Fragment>
        <h2>Todos:</h2>
        <ul data-testid="todos">
          {todos.map((todo: Todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  return <div>Loading...</div>;
};
