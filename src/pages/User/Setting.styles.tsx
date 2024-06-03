import styled from "styled-components";
import colors from "../../components/Common/colors";

export const Layout = styled.div``;

export const UserInfo = styled.div``;

export const List = styled.ul``;

export const Row = styled.li`
  padding: 0 35px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: default;
  }
  &.hover:hover {
    cursor: pointer;
    background-color: ${colors.blue._100};
  }
`;

export const RowText = styled.span``;
export const Divider = styled.div`
  height: 1px;
  background-color: ${colors.black._100};
`;
