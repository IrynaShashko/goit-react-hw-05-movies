import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import PaginatedItems from '../Pagination/Pagination';

import { fetchPopularMovies } from 'service/api/movies';

import Loader from 'components/Loader/Loader';

import { Ul, Li, LinkStyle, Img, P } from '../Card/Card.styled';

const Card = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = Number(searchParams.get('page') ?? 1);
  console.log('pageParam', pageParam);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const result = await fetchPopularMovies(pageParam);
        console.log('result', result);
        setLoading(false);
        setTrendingMovies({ ...result });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, [pageParam]);

  console.log('trendingMovies', trendingMovies);
  const elements = trendingMovies?.results?.map(
    ({ id, title, poster_path }) => {
      const poster = `https://image.tmdb.org/t/p/w342/${poster_path}`;
      return (
        <Li key={id}>
          <LinkStyle state={{ from: '/' }} to={`/movies/${id}`}>
            <Img src={poster_path ? poster : null} alt={title} />
            <P>{title}</P>
          </LinkStyle>
        </Li>
      );
    }
  );
  console.log('items.total_pages', trendingMovies.total_pages);
  return (
    <div>
      <Ul>{elements}</Ul>
      {trendingMovies?.total_pages && (
        <PaginatedItems
          setPage={setSearchParams}
          totalPages={trendingMovies.total_pages}
          currentPage={pageParam - 1}
        />
      )}
      {loading && <Loader />}
    </div>
  );
};

export default Card;
