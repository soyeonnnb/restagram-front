import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 30px;
  padding: 0 30px;
  box-sizing: border-box;
  align-items: center;
  justify-content: start;
  margin-bottom: 10px;
  position: relative;
`;

export const ButtonBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
export const Button = styled.div`
  margin-right: 15px;
`;
