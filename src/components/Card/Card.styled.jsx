import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const Ul = styled.ul`
  list-style: none;
  font-size: 20px;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  margin-left: 10px;
  color: black;
`;
