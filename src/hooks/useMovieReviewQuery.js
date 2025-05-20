import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export const useMovieReviewQuery = (id) => {
  return useQuery({
    queryKey: ["reviews", id],
    queryFn: async () => {
      const res = await api.get(`/movie/${id}/reviews`);
      console.log("리뷰 응답:", res.data);
      return res.data;
    },
  });
};
