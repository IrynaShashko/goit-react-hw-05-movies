import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { fetchMovieCasts } from 'service/api/movies';

import Loader from 'components/Loader/Loader';

import { Div, Ul, Li, Img, P } from '../Cast/Cast.styled';

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

  const elements = item?.map(({ id, name, profile_path }) => {
    const poster = profile_path
      ? `https://image.tmdb.org/t/p/w342/${profile_path}`
      : 'https://stringfixer.com/files/951711496.jpg';
    return (
      <Li key={id}>
        <Img src={poster} alt={name} />
        <P>{name}</P>
      </Li>
    );
  });

  return (
    <Div>
      {item.length !== 0 && <Ul>{elements}</Ul>}
      {loading && <Loader />}
      {error && <P>...Movies not found</P>}
    </Div>
  );
};

export default Cast;
