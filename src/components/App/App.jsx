import { Routes, Route } from 'react-router-dom';

import Menu from 'components/Menu/Menu';

import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import SingleMoviePage from 'pages/SingleMoviePage/SingleMoviePage';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<SingleMoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
