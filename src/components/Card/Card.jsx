import { useState, useEffect } from 'react';

import { fetchPopularMovies } from 'service/api/movies';

import { Ul, Li, LinkStyle } from '../Card/Card.styled';

import { FiHeart } from 'react-icons/fi';

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
  const elements = items.map(({ id, title }) => (
    <Li>
      <FiHeart />
      <LinkStyle to={`/${id}`}>{title}</LinkStyle>
    </Li>
  ));
  return (
    <div>
      <Ul>{elements}</Ul>
      {loading && <p>...loading</p>}
      {error && <p>...Movies not found</p>}
    </div>
  );
};

export default Card;
