import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const endPointMap = {
  popular: "/movie/popular",
  "now-playing": "/movie/now_playing",
  "top-rated": "/movie/top_rated",
  upcoming: "/movie/upcoming",
};

export const useMovieListQuery = (type = "popular") => {
  const endPoint = endPointMap[type] || endPointMap["popular"];

  return useQuery({
    queryKey: ["movies", type],
    queryFn: async () => {
      const response = await api.get(endPoint);
      return response.data;
    },
  });
};
