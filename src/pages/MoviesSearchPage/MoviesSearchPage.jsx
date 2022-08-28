// import { useState, useEffect } from 'react';

// import { useSearchParams } from 'react-router-dom';

// import { fetchMoviesBySearchQuery } from 'service/api/movies';

import MoviesSearchForm from 'components/MoviesSearchForm/MoviesSearchForm';

// import Loader from 'components/Loader/Loader';

// import {
//   Ul,
//   Li,
//   LinkStyle,
//   Img,
//   P,
// } from '../MoviesSearchPage/MoviesSearchPage.styled';

const MoviesPage = () => {
  // const [state, setState] = useState({
  //   items: [],
  //   loading: false,
  //   error: null,
  // });

  // const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   const fetchMoviesBySearch = async () => {
  //     setState(prevState => {
  //       return { ...prevState, loading: true, error: null };
  //     });
  //     try {
  //       const result = await fetchMoviesBySearchQuery(searchParams);
  //       setState(prevState => {
  //         return {
  //           ...prevState,
  //           loading: false,
  //           items: [...result],
  //         };
  //       });
  //     } catch (error) {
  //       setState(prevState => {
  //         return {
  //           ...prevState,
  //           error,
  //         };
  //       });
  //     }
  //   };
  //   fetchMoviesBySearch();
  // }, [searchParams]);

  // const { items, loading, error } = state;
  // const elements = items.map(({ id, title, poster_path }) => {
  //   const poster = `https://image.tmdb.org/t/p/w342/${poster_path}`;
  //   return (
  //     <Li key={id}>
  //       <LinkStyle to={`/movies/${id}`}>
  //         <Img src={poster_path ? poster : null} alt={title} />
  //         <P>{title}</P>
  //       </LinkStyle>
  //     </Li>
  //   );
  // });

  const onSubmit = value => {
    console.log('value', value);
    // setSearchParams(value);
    // console.log('searchParams', searchParams);
  };

  return (
    <div>
      <MoviesSearchForm onSubmit={onSubmit} />
      {/* <Ul>{elements}</Ul> */}
      {/* {loading && <Loader />}
      {error && <p>...Movies not found</p>} */}
    </div>
  );
};

export default MoviesPage;
