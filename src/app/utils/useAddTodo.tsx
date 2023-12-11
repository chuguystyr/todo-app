import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../server/serverActions";

export const useAddTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addTodo"],
    mutationFn: (text: string) => addTodo(text),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });
};
