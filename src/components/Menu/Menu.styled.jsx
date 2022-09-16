import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  top: 0px;
  left: 0px;
  position: sticky;
  z-index: 1100;
  background-image: linear-gradient(
    to right,
    #065faf,
    #246bb0,
    #3a76b0,
    #4e81b0,
    #628baf
  );
  box-shadow: 0px 3px 3px 3px rgba(0, 0, 0, 0.2),
    0px 2px 4px 2px rgba(0, 0, 0, 0.7), 0px 2px 1px -1px rgba(0, 0, 0, 0.1);
`;

export const Ul = styled.ul`
  display: flex;
  flex-directions: row;
  font-size: 24px;
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: auto;
  padding: 20px;
`;

export const Li = styled.li`
  padding: 10px;
`;

export const NavLinkStyle = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  color: black;
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  cursor: pointer;
  &.active {
    color: #fff;
  }
`;
