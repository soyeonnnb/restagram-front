import styled from "styled-components";
import colors from "../Common/colors";

export const Layout = styled.div`
  background-color: ${colors.white._50};
  padding: 10px 30px;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  & > .icon:hover {
    cursor: pointer;
    fill: ${colors.blue._500};
  }
`;
export const Box = styled.div``;
