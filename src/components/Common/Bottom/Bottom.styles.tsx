import styled from "styled-components";
import colors from "../colors";

export const Layout = styled.div`
  position: fixed;
  width: 100%;
  max-width: 468px;
  height: 50px;
  bottom: 0;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Box = styled.div`
  &:hover {
    cursor: pointer;
    .icon {
      fill: ${colors.blue._200};
    }
  }
`;
