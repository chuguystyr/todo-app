import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import { Todo } from "../types/Todo";
import { useDeleteTodo } from "../utils/useDeleteTodo";
import { useEditTodo } from "../utils/useEditTodo";
import { useState } from "react";

const Todo: React.FC<Todo> = ({ _id, text, isCompleted }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [isCompletedState, setIsCompletedState] = useState(isCompleted);
  const [textState, setTextState] = useState(text);
  const { mutate: deleteTodo } = useDeleteTodo();
  const { mutate: editTodo } = useEditTodo();
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCompletedState(e.currentTarget.checked);
    editTodo({ _id, text, isCompleted: e.currentTarget.checked });
  };
  const handleEdit = () => {
    editTodo({
      _id,
      text: textState,
      isCompleted: isCompletedState,
    });
    setIsEditable(false);
  };
  return (
    <div className="todo">
      <input
        type="checkbox"
        disabled={!textState}
        checked={isCompletedState}
        onChange={handleCheck}
      />
      {isEditable ? (
        <>
          <input
            type="text"
            defaultValue={textState}
            onInput={(e) => setTextState(e.currentTarget.value)}
          />
          <button
            type="button"
            className="submit"
            disabled={!textState}
            onClick={handleEdit}
          >
            Save
          </button>
        </>
      ) : (
        <p>{textState}</p>
      )}
      {!isEditable && (
        <button
          type="button"
          onClick={() => setIsEditable((prevState) => !prevState)}
        >
          <MdOutlineEdit className="icon" />
        </button>
      )}
      <button type="button" onClick={() => deleteTodo(_id)}>
        <MdDeleteOutline className="icon" />
      </button>
    </div>
  );
};
export default Todo;
