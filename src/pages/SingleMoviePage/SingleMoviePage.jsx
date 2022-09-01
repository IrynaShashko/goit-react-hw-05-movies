import { useState, useEffect } from 'react';

import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

import { fetchSingleMovie } from 'service/api/movies';

import { FiChevronsLeft } from 'react-icons/fi';

import {
  Container,
  CardContainer,
  InfoContainer,
  H2,
  H3,
  P,
  Img,
  Button,
  Ul,
  Li,
  Div,
  NavLinkStyle,
} from './SingleMoviePage.styled';

const SingleMoviePage = () => {
  const [state, setState] = useState({
    item: {},
    loading: false,
    error: null,
  });

  const { id } = useParams();
  const location = useLocation();
  const from = location.state?.from || '/';
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSingleMovieById = async () => {
      setState(prevState => {
        return { ...prevState, loading: true, error: null };
      });
      try {
        const result = await fetchSingleMovie(id);
        setState(prevState => {
          return {
            ...prevState,
            loading: false,
            item: { ...result },
          };
        });
      } catch (error) {
        setState(prevState => {
          return {
            ...prevState,
            loading: false,
            error,
          };
        });
      }
    };
    fetchSingleMovieById();
  }, [id]);

  const goBack = () => navigate(from);

  const { poster_path, title, genres, release_date, vote_average, overview } =
    state.item;
  const image = `https://image.tmdb.org/t/p/w342/${poster_path}`;
  const release = release_date !== undefined ? release_date.slice(0, 4) : '';
  const genresMovie =
    genres !== undefined
      ? genres.map(item => {
          return `${item.name} `;
        })
      : null;
  const vote = (vote_average * 100) / 10;

  return (
    <Container>
      <Button onClick={goBack}>
        <FiChevronsLeft size={20} />
        Go back
      </Button>
      {state.loading && <Loader />}
      {state.error && <NotFoundPage />}
      <CardContainer key={id}>
        {genres && <Img src={image} alt={title} />}
        <InfoContainer>
          {release && (
            <H2>
              {title} ({release})
            </H2>
          )}
          {vote && <P>User score: {vote.toFixed()} %</P>}
          {overview && <H3>Overview</H3>}
          {overview && <P>{overview}</P>}
          {genres && <H3>Genres</H3>}
          {genresMovie !== null && <P>{genresMovie}</P>}
        </InfoContainer>
      </CardContainer>
      <Div>
        {genres && <P>Additional information:</P>}
        <Ul>
          <Li>
            {genres && (
              <NavLinkStyle state={{ from }} to={`/movies/${id}/cast`}>
                Cast
              </NavLinkStyle>
            )}
          </Li>
          <Li>
            {genres && (
              <NavLinkStyle state={{ from }} to={`/movies/${id}/reviews`}>
                Reviews
              </NavLinkStyle>
            )}
          </Li>
        </Ul>
      </Div>
      <Outlet />
    </Container>
  );
};

export default SingleMoviePage;
