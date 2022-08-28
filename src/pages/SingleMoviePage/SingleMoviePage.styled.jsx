import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InfoContainer = styled.div`
  padding: 0;
`;
export const Img = styled.img`
  height: 300px;
  margin-right: 20px;
  margin-left: 20px;
  border-radius: 10px;
`;

export const H2 = styled.h2`
  font-size: 40px;
  margin: 0;
`;

export const H3 = styled.h3`
  font-size: 20px;
  margin: 0;
`;

export const P = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const Button = styled.button`
  margin-bottom: 20px;
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
  cursor: pointer;
  border: none;
  font-weight: bold;
  font-size: 16px;
  border-radius: 50px;
  padding: 10px 20px;
  margin-top: 20px;
  margin-left: 20px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    2px 2px 2px 2px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &: hover {
    transform: scale(1.02);
  }
`;

export const Div = styled.div`
  margin-top: 20px;
  padding: 20px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2),
    2px 2px 2px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-bottom: 0;
  padding: 0;
`;

export const Li = styled.li`
  margin: 0;
  padding: 0;
`;

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: black;
  font-weight: bold;
  &.active {
    color: red;
  }
`;
