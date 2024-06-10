import styled from "styled-components";
import colors from "../../../Common/colors";

export const Layout = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: ${colors.beige._50};
  padding: 10px 10px;
  border-radius: 3px;
  align-items: center;
  & > .xButton {
    fill: ${colors.blue._800};
    &:hover {
      fill: ${colors.blue._400};
      cursor: pointer;
    }
  }
`;
