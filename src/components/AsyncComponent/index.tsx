import * as React from "react";
import axios from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface State {
  todos: Todo[];
}

class AsyncComponent extends React.Component<{}, State> {
  private todosUrl = "https://jsonplaceholder.typicode.com/todos/";

  public state: State = {
    todos: [],
  };

  public async componentDidMount() {
    const { data } = await axios.get(this.todosUrl);
    this.setState({
      todos: data,
    });
  }

  public render() {
    const isLoaded = this.state.todos.length > 0;

    if (isLoaded) {
      return (
        <React.Fragment>
          <h2>Todos:</h2>
          <ul data-testid="todos">
            {this.state.todos.map((todo: Todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </React.Fragment>
      );
    }

    return <div>Loading...</div>;
  }
}

export default AsyncComponent;
