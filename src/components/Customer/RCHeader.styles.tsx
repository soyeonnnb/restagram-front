import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  max-width: 468px;
  height: 60px;
  background-color: beige;
  position: fixed;
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.span``;
