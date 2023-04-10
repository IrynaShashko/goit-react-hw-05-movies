import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const Ul = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
  margin: 0;
  @media screen and (min-width: 375px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(8, 1fr);
  }
`;

export const Li = styled.li`
  margin-right: 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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
    color: #806d8c;
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
  font-size: 12px;
  margin: 0;
  font-weight: bold;
`;
