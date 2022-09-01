import { useLocation } from 'react-router-dom';
import {
  Container,
  H2,
  NavLinkStyle,
} from '../SingleMoviePage/SingleMoviePage.styled';

const NotFoundPage = () => {
  const location = useLocation();
  const from = location.state?.from || '/';

  return (
    <Container>
      <H2>Page not found</H2>
      <NavLinkStyle state={{ from }} to="/">
        Back to home
      </NavLinkStyle>
    </Container>
  );
};

export default NotFoundPage;
