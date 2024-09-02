import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export const useCurentUser = () => {
  const data = useQuery(api.users.current);
  const isLoading = data === undefined;

  return { data, isLoading };
};