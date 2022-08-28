import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { fetchMovieCasts } from 'service/api/movies';

import Loader from 'components/Loader/Loader';

import { Ul, Li, Img, P } from '../Cast/Cast.styled';

const Cast = () => {
  const [state, setState] = useState({
    item: [],
    loading: false,
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      setState(prevState => {
        return { ...prevState, loading: true, error: null };
      });
      try {
        const result = await fetchMovieCasts(id);
        setState(prevState => {
          return {
            ...prevState,
            loading: false,
            item: [...result],
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
    fetchMovieCast();
  }, [id]);

  const { item, loading, error } = state;

  const elements =
    item.length !== 0
      ? item.map(({ id, name, profile_path }) => {
          if (profile_path !== null) {
            const poster = `https://image.tmdb.org/t/p/w342/${profile_path}`;
            return (
              <Li key={id}>
                <Img src={poster} alt={name} />
                <P>{name}</P>
              </Li>
            );
          }
        })
      : null;

  return (
    <div>
      {item.length !== 0 && <Ul>{elements}</Ul>}
      {loading && <Loader />}
      {error && <P>...Movies not found</P>}
    </div>
  );
};

export default Cast;
