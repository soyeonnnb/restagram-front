import styled from "styled-components";
import colors from "../../Common/colors";

export const Layout = styled.div<{
  selected: boolean;
  available: boolean;
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-radius: 5px;
  border: 2px solid ${colors.black._100};
  background-color: ${({ available, selected }) =>
    !available ? colors.white._500 : selected ? colors.blue._500 : "white"};
  &:hover {
    background-color: ${({ available }) =>
      available ? colors.blue._50 : colors.white._500};
    cursor: pointer;
  }
  & > span {
    color: ${({ selected }) => (selected ? "white" : "black")};
  }
`;
