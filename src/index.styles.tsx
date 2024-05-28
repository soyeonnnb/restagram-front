import styled from "styled-components";

export const Layout = styled.div`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: aliceblue;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  background-color: white;
  width: 100%;
  max-width: 468px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
