import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from 'service/api/movies';

import Loader from 'components/Loader/Loader';

import { Container, Ul, Li, H3, P } from '../Reviews/Reviews.styled';

const Reviews = () => {
  const [state, setState] = useState({
    item: [],
    loading: false,
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchMovieReview = async () => {
      setState(prevState => {
        return { ...prevState, loading: true, error: null };
      });
      try {
        const result = await fetchMovieReviews(id);
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
    fetchMovieReview();
  }, [id]);

  const { item, loading, error } = state;

  const elements =
    item.length !== 0
      ? item.map(({ id, author, content }) => {
          return (
            <Li key={id}>
              <H3>{author}</H3>
              <P>{content}</P>
            </Li>
          );
        })
      : null;

  return (
    <div>
      {item.length !== 0 && <Ul>{elements}</Ul>}
      {item.length === 0 && (
        <Container>
          <H3>We don`t have any reviews for this movie.</H3>
        </Container>
      )}
      {loading && <Loader />}
      {error && <H3>...Movies not found</H3>}
    </div>
  );
};

export default Reviews;
