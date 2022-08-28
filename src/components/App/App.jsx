import { Routes, Route } from 'react-router-dom';

import Menu from 'components/Menu/Menu';

import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesSearchPage/MoviesSearchPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import SingleMoviePage from 'pages/SingleMoviePage/SingleMoviePage';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

import { Container } from 'components/App/App.styled';

export const App = () => {
  return (
    <Container>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<SingleMoviePage />}>
          <Route path="/movies/:id/cast" element={<Cast />} />
          <Route path="/movies/:id/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
};
