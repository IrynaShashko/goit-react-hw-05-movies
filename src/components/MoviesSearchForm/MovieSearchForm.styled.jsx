import styled from '@emotion/styled';

export const Div = styled.div`
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 200px;
  height: 29px;
  padding: 10px 20px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border: 1px solid #ccc;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const Button = styled.button`
  width: 50px;
  padding: 13px 15px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border: 1px solid #ccc;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  background-image: linear-gradient(
    to right,
    #065faf,
    #1164b0,
    #1b69b1,
    #246eb2,
    #2d73b2,
    #3577b2,
    #3c7ab2,
    #437eb2,
    #4b81b1,
    #5385b1,
    #5b88b0,
    #628baf
  );
`;
