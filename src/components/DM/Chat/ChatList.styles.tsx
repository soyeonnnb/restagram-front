import styled from "styled-components";
import colors from "../../Common/colors";

export const Layout = styled.ul`
  background-color: ${colors.purple._50};
  overflow: scroll;
  padding: 60px 20px 80px 20px;
  & > li:not(:last-child) {
    margin-bottom: 20px;
  }
`;
