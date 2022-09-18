import { useState, useEffect } from 'react';

import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

import { fetchSingleMovie } from 'service/api/movies';
import { IconContext } from 'react-icons';
import { AiFillStar } from 'react-icons/ai';

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
  Stars,
  Stats,
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
  const starArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const totalPositiveStars = Math.floor(vote_average ? vote_average : 1 / 10);

  return (
    <Container>
      <Button onClick={goBack}>
        <FiChevronsLeft size={20} />
        Go back
      </Button>
      {state.loading && <Loader />}
      {state.error && <NotFoundPage />}
      <CardContainer key={id} state={location}>
        {genres && <Img src={image} alt={title} />}
        <InfoContainer>
          {release && (
            <H2>
              {title} ({release})
            </H2>
          )}
          {vote_average && (
            <div>
              <P>User score:</P>
              <Stars>
                {starArr.map((el, index) => (
                  <IconContext.Provider
                    key={index}
                    value={{
                      color: `${
                        index >= totalPositiveStars ? '#ccc' : 'orange'
                      }`,
                    }}
                  >
                    <AiFillStar />
                  </IconContext.Provider>
                ))}
                <Stats>
                  {totalPositiveStars} / {starArr.length}
                </Stats>
              </Stars>
            </div>
          )}
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
