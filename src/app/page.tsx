"use client";
import { useTodos } from "./utils/useTodos";
import Todo from "./ui/TodoItem";
import NewTodoForm from "./ui/NewTodoForm";
const Home: React.FC<{}> = () => {
  const { isPending, error, data, isFetching } = useTodos();
  return (
    <main className="container">
      <h1>Todos keeper</h1>
      <NewTodoForm />
      {isPending || isFetching ? (
        <p>Loading...</p>
      ) : (
        data && data.map((todo) => <Todo key={todo._id} {...todo} />)
      )}
      {error && <p>{error.message}</p>}
    </main>
  );
};

export default Home;
