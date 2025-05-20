import { Routes, Route } from "react-router-dom";
import "./styles/global.scss";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/Homepage/HomePage";
import MovieListPage from "./pages/MovieListPage/MovieListPage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies">
            <Route path=":type" element={<MovieListPage />} />
            <Route path=":type/:id" element={<MovieDetailPage />} />
          </Route>
          <Route path="search" element={<SearchPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
