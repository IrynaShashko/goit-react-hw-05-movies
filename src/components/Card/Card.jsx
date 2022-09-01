import { useState, useEffect } from 'react';

import { fetchPopularMovies } from 'service/api/movies';

import Loader from 'components/Loader/Loader';

import { Ul, Li, LinkStyle, Img, P } from '../Card/Card.styled';

const Card = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchMovies = async () => {
      setState(prevState => {
        return { ...prevState, loading: true, error: null };
      });
      try {
        const result = await fetchPopularMovies();
        setState(prevState => {
          return {
            ...prevState,
            loading: false,
            items: [...result],
          };
        });
      } catch (error) {
        setState(prevState => {
          return {
            ...prevState,
            error,
          };
        });
      }
    };
    fetchMovies();
  }, []);

  const { items, loading, error } = state;
  const elements = items.map(({ id, title, poster_path }) => {
    const poster = `https://image.tmdb.org/t/p/w342/${poster_path}`;
    return (
      <Li key={id}>
        <LinkStyle state={{ from: '/' }} to={`/movies/${id}`}>
          <Img src={poster_path ? poster : null} alt={title} />
          <P>{title}</P>
        </LinkStyle>
      </Li>
    );
  });
  return (
    <div>
      <Ul>{elements}</Ul>
      {loading && <Loader />}
      {error && <p>...Movies not found</p>}
    </div>
  );
};

export default Card;
