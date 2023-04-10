import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* @media screen and (max-width: 500px) {
    margin: 30px auto;
    width: 90%;
    height: 90%;
  }
  @media screen and (max-width: 470px) {
    padding: 30px 24px;
  } */
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const InfoContainer = styled.div`
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }
`;
export const Img = styled.img`
  /* height: 300px; */
  width: 200px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 10px;
  @media screen and (min-width: 375px) {
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    height: 400px;
  }
`;

export const H2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  margin: 0;
  margin-bottom: 10px;
  @media screen and (min-width: 467px) {
    font-size: 30px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const H3 = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  margin: 0;
  margin-bottom: 10px;
  @media screen and (min-width: 467px) {
    font-size: 30px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const P = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  margin: 0;
  margin-bottom: 10px;
  @media screen and (min-width: 467px) {
    font-size: 30px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  margin-bottom: 20px;
  background-image: linear-gradient(
    to right,
    #065faf,
    #246bb0,
    #3a76b0,
    #4e81b0,
    #628baf
  );
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 150px;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
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
  padding: 20px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2),
    2px 2px 2px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-bottom: 0;
  padding: 0;
`;

export const Li = styled.li`
  margin: 0;
  margin-right: 20px;
  padding: 0;
`;

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  color: black;
  &.active {
    color: #065faf;
  }
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const Stats = styled.div`
  margin-left: 10px;
  font-weight: 500;
  margin-bottom: 2px;
`;
