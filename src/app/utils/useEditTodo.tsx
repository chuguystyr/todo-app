import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editTodo } from "../server/serverActions";
import { Todo } from "../types/Todo";

export const useEditTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["editTodo"],
    mutationFn: (todo: Todo) => editTodo(todo),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });
};
