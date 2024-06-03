import styled from "styled-components";
import colors from "../Common/colors";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: white;
  min-height: 100vh;
  position: relative;
`;

export const Main = styled.div`
  margin-top: 60px;
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
  /* background-color: ${colors.purple._100}; */
`;

export const BottomBox = styled.div``;
