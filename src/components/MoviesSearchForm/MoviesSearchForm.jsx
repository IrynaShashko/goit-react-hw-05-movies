import { useState } from 'react';

const MoviesSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ search: '' });
    console.log(state.search);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        value={state.search}
        onChange={handleChange}
        placeholder="Type search query..."
        required
      />
      <button>Search</button>
    </form>
  );
};

export default MoviesSearchForm;
