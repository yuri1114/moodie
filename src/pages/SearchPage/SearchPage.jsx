import React, { useState } from "react";
import styles from "./SearchPage.module.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSearchMovieQuery } from "../../hooks/useSearchMovieQuery";
import SearchCard from "../../common/SearchCard/SearchCard";

const SearchPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [query] = useSearchParams();
  const keyword = query.get("q") || "";

  const { data, isLoading, isError } = useSearchMovieQuery(keyword);

  const search = (event) => {
    if (event.key === "Enter" && input.trim()) {
      navigate(`/search?q=${encodeURIComponent(input.trim())}`);
      setInput("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchArea}>
        <div className={styles.searchBar}>
          <div className={styles.icon}></div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={search}
            placeholder="영화 제목을 검색하세요"
          />
        </div>
      </div>

      <div className={styles.pageLayout}>
        <div className={styles.inner}>
          {isLoading ? (
            <p>로딩 중...</p>
          ) : isError ? (
            <p>에러 발생</p>
          ) : !data?.results || data.results.length === 0 ? (
            <p className={styles.emptyMessage}>검색 결과가 없습니다.</p>
          ) : (
            data.results
              .filter((movie) => movie.poster_path)
              .map((movie) => (
                <div className={styles.listCard}>
                  <SearchCard
                    className={styles.searchCard}
                    key={movie.id}
                    movie={movie}
                    type="search"
                  />
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
