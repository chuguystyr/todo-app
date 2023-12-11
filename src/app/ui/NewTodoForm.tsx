import { useAddTodo } from "../utils/useAddTodo";

const NewTodoForm: React.FC<{}> = () => {
  const { mutate } = useAddTodo();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = e.currentTarget.text.value;
    e.currentTarget.reset();
    if (text) mutate(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" placeholder="Enter your todo here" />
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
};

export default NewTodoForm;
