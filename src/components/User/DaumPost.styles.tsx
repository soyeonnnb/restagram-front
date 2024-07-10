import styled from "styled-components";

export const Layout = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.38);
`;

export const Box = styled.div`
  width: 50%;
  height: 50%;
  position: relative;
`;

export const IconBox = styled.div`
  position: absolute;
  top: 0;
  right: -50px;
  &:hover {
    cursor: pointer;
  }
`;
