import { useState, useEffect } from 'react';

import { fetchMoviesBySearchQuery } from 'service/api/movies';

import MoviesSearchForm from 'components/MoviesSearchForm/MoviesSearchForm';

import Loader from 'components/Loader/Loader';

import { Ul, Li, LinkStyle, Img, P } from 'components/Card/Card.styled';

const MoviesSearchPage = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchMoviesBySearch = async () => {
      setState(prevState => {
        return { ...prevState, loading: true, error: null };
      });
      try {
        const result = await fetchMoviesBySearchQuery(search);

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
      } finally {
        setState(prevState => ({
          ...prevState,
          loading: false,
        }));
      }
    };
    if (search) {
      fetchMoviesBySearch();
    }
  }, [search]);

  const onSubmit = ({ search }) => {
    setSearch(search);
    console.log('searchPage', search);
  };

  const { items, loading, error } = state;
  const elements = items.map(({ id, title, poster_path }) => {
    const poster = `https://image.tmdb.org/t/p/w342/${poster_path}`;
    return (
      <Li key={id}>
        <LinkStyle to={`/movies/query=${search}`}>
          <Img src={poster_path ? poster : null} alt={title} />
          <P>{title}</P>
        </LinkStyle>
      </Li>
    );
  });
  return (
    <div>
      <MoviesSearchForm onSubmit={onSubmit} />
      <Ul>{elements}</Ul>
      {loading && <Loader />}
      {error && <p>...Movies not found</p>}
    </div>
  );
};

export default MoviesSearchPage;
