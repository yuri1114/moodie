import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export const useSearchMovieQuery = (keyword) => {
  return useQuery({
    queryKey: ["search", keyword],
    queryFn: async () => {
      if (!keyword) return { results: [] };
      const response = await api.get(
        `/search/movie?query=${encodeURIComponent(keyword)}`
      );
      return response.data;
    },
    enabled: !!keyword,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
