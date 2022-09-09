import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMoviesBySearchQuery } from 'service/api/movies';
import MoviesSearchForm from 'components/MoviesSearchForm/MoviesSearchForm';
import PaginatedItems from '../Pagination/Pagination';
import Loader from 'components/Loader/Loader';
import { Ul, Li, LinkStyle, Img, P } from 'components/Card/Card.styled';

const MoviesSearchPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';
  const pageParam = Number(searchParams.get('page') ?? 1);
  const location = useLocation();

  useEffect(() => {
    const fetchMoviesBySearch = async () => {
      setLoading(true);
      try {
        const result = await fetchMoviesBySearchQuery(search, pageParam);
        setSearchMovies({ ...result });
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      fetchMoviesBySearch();
    }
  }, [search, pageParam]);

  const onSubmit = ({ search }) => {
    setSearchParams({ query: search, page: 1 });
  };

  const elements = searchMovies?.results?.map(({ id, title, poster_path }) => {
    const poster = `https://image.tmdb.org/t/p/w342/${poster_path}`;
    return (
      <Li key={id}>
        <LinkStyle
          state={{ from: location }}
          to={`/movies/${id}?query=${search}&page=${pageParam}`}
        >
          <Img
            src={
              poster_path
                ? poster
                : 'https://stringfixer.com/files/951711496.jpg'
            }
            alt={title}
          />
          <P>{title}</P>
        </LinkStyle>
      </Li>
    );
  });
  return (
    <div>
      <MoviesSearchForm onSubmit={onSubmit} />
      <Ul>{elements}</Ul>
      {searchMovies.total_pages && (
        <PaginatedItems
          setPage={page => setSearchParams({ query: search, ...page })}
          totalPages={searchMovies.total_pages}
          currentPage={pageParam - 1}
        />
      )}
      {loading && <Loader />}
    </div>
  );
};

export default MoviesSearchPage;

MoviesSearchPage.propTypes = {
  onSubmit: PropTypes.func,
};
