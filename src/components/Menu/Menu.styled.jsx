import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    to bottom,
    #f4cde3,
    #edcde9,
    #e5ceee,
    #dacff3,
    #cfd0f6,
    #ccd0f7,
    #c8d0f8,
    #c4d0f9,
    #cacef9,
    #d0ccf9,
    #d6c9f8,
    #ddc7f6
  );
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
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
