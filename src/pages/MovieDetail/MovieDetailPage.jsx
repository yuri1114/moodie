import React from "react";
import style from "./MovieDetailPage.module.scss";
import { useMovieDetailQuery } from "../../hooks/useMovieDetailQuery";
import { useParams } from "react-router-dom";
import { useMovieReviewQuery } from "../../hooks/useMovieReviewQuery";
import MovieReview from "./components/MovieReview/MovieReview";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetailQuery(id);
  console.log(data, "ff?");
  const { data: reviews } = useMovieReviewQuery(id);

  if (isLoading) return <p>Loading . . . </p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <div className={style.poster}>
        {data.backdrop_path ? (
          <img
            src={`https://media.themoviedb.org/t/p/w1280${data.backdrop_path}`}
            alt="Movie Poster"
          />
        ) : (
          <div className={style.noImg}>NO IMG</div>
        )}
      </div>

      <div className={style.infoArea}>
        <div className={style.top}>
          <p className={style.title}>{data.title}</p>
          <div className={style.genre}>
            장르:
            {data.genres.map((genre) => (
              <p key={genre.id} className={style.badge}>
                {genre.name}
              </p>
            ))}
          </div>
          <p>{data.adult ? "청소년관란불가" : "전체관람"}</p>
        </div>

        <div className={style.bottom}>
          <p className={style.story}>{data.overview}</p>
        </div>

        {/* 컴포넌트 */}
        <div className={style.reviewArea}>
          <MovieReview review={reviews} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
