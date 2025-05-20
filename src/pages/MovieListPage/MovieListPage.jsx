import styles from "./MovieListPage.module.scss";
import { useParams } from "react-router-dom";
import { useMovieListQuery } from "../../hooks/useMovieListQuery";
import MovieCard from "../../common/MovieCard/MovieCard";

const MovieListPage = () => {
  const { type } = useParams();
  const { data, isLoading, IsError } = useMovieListQuery(type);

  if (isLoading) return <p>로딩 중...</p>;
  if (IsError) return <p>오류 발생</p>;

  return (
    <div className={styles.pageLayout}>
      <p c1lassName={styles.title}></p>

      <div className={styles.list}>
        {data.results.map((movie) => (
          <div className={styles.listCard}>
            <MovieCard movie={movie} type={type} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieListPage;
