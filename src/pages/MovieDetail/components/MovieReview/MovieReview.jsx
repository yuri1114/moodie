import React, { useState } from "react";
import styles from "./MovieReview.module.scss";

const MovieReview = ({ review }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleReview = showAll ? review.results : review?.results.slice(0, 3);

  if (!review || !review.results?.length) return <p>리뷰가 없어요</p>;

  return (
    <div>
      <p className={styles.title}>리뷰</p>

      {visibleReview.map((item) => (
        <div className={styles.reviewCard}>
          <div key={item.id}>
            <h4>{item.author}</h4>
            <p className={styles.contents}>{item.content}</p>
          </div>
        </div>
      ))}

      <div className={styles.btnArea}>
        {review.results.length > 3 && (
          <button
            className={styles.moreBtn}
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "접기" : "더보기"}
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieReview;
