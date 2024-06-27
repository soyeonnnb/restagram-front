import styled from "styled-components";
import colors from "../Common/colors";

export const Layout = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  max-width: 468px;
  background-color: white;
  z-index: 20;
`;
export const Box = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;
export const Circle = styled.div<{ visible: string }>`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: ${colors.blue._100};
  z-index: 2;
  right: 55%;
  display: ${({ visible }) => (visible === "true" ? "block" : "none")};
`;
