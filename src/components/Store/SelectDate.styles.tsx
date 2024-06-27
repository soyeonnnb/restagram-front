import styled from "styled-components";
import colors from "../Common/colors";

export const Layout = styled.div<{ width: number; height: number }>`
  background-color: ${colors.white._50};
  padding: 10px 30px;
  display: flex;
  width: ${({ width }) => width}px;
  box-sizing: border-box;
  justify-content: space-between;
  & > .icon:hover {
    cursor: pointer;
    fill: ${colors.blue._500};
  }
  top: ${({ height }) => height}px;
  position: fixed;
  z-index: 20;
`;
export const Box = styled.div``;
