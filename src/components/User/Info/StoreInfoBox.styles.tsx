import styled from "styled-components";
import colors from "../../Common/colors";

export const Layout = styled.div`
  padding: 0 30px;
  margin-top: 20px;
`;
export const HeaderBox = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  & > .icon {
    margin-right: 10px;
  }
`;
export const BottomBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const Button = styled.div`
  width: 120px;
  margin: 0 20px;
  background-color: ${colors.purple._100};
  border: 2px solid ${colors.purple._50};
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${colors.purple._200};
    border-color: ${colors.purple._100};
  }
`;
