import { Container, Ul, Li, NavLinkStyle } from './Menu.styled';

const Menu = () => {
  return (
    <Container>
      <Ul>
        <Li>
          <NavLinkStyle to="/">Home</NavLinkStyle>
        </Li>
        <Li>
          <NavLinkStyle to="/movies">Movies</NavLinkStyle>
        </Li>
      </Ul>
    </Container>
  );
};

export default Menu;
