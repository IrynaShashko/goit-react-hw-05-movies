import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const Div = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const Ul = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  padding-top: 30px;
  margin: 0;
`;

export const Li = styled.li`
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  margin-bottom: 10px;
  text-align: center;
`;

export const LinkStyle = styled(Link)`
  color: black;
  margin: 0;
  text-decoration: none;
  margin-right: 20px;
  &:hover {
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
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;
export const Pcharacter = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  padding: 0;
  margin: 0;
`;
