import { useState } from 'react';

import {
  Div,
  Form,
  Input,
  Button,
} from '../MoviesSearchForm/MovieSearchForm.styled';

import { BiSearchAlt } from 'react-icons/bi';

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
  };
  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <Input
          name="search"
          value={state.search}
          onChange={handleChange}
          placeholder="Type search query..."
          required
        />
        <Button>
          <BiSearchAlt size={20} />
        </Button>
      </Form>
    </Div>
  );
};

export default MoviesSearchForm;
