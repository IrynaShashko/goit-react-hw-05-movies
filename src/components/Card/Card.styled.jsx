import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const Ul = styled.ul`
  list-style: none;
  display: grid;
  padding: 20px;
  padding-left: 30px;
  margin: 0;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(8, 1fr);
  }
`;

export const Li = styled.li`
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  margin-bottom: 10px;
  text-align: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

export const LinkStyle = styled(Link)`
  color: black;
  margin: 0;
  text-decoration: none;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
    color: #065faf;
  }
`;

export const Img = styled.img`
  height: auto;
  width: 100%;
  margin: 0;
  border-radius: 4px;
  cursor: pointer;
`;

export const P = styled.p`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  margin: 0;
`;
