import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export const useMovieDetailQuery = (id) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: async () => {
      const res = await api.get(`/movie/${id}`);
      return res?.data || { results: [] };
    },
    enabled: !!id,
  });
};
