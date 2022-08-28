import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    to left,
    #aeeee6,
    #a1ece5,
    #92eae4,
    #83e8e3,
    #71e6e3,
    #65e1de,
    #58dcd8,
    #49d7d3,
    #41cec7,
    #3ac6bb,
    #33bdb0,
    #2db5a4
  );
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 2px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
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
  font-weight: bold;
  cursor: pointer;
  &.active {
    color: red;
  }
`;
