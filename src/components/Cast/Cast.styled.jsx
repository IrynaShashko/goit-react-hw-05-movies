import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const Ul = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  background-color: #e9def0;
  padding-top: 30px;
  margin: 0;
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
