import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../server/serverActions";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteTodo"],
    mutationFn: (todoId: string) => deleteTodo(todoId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });
};
