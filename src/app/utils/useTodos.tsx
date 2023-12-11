import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../server/serverActions";

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchTodos(),
  });
};
