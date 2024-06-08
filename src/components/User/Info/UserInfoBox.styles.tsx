import styled from "styled-components";
import colors from "../../Common/colors";

export const Layout = styled.div`
  background-color: ${colors.beige._100};
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.div`
  height: 30px;
  width: 100px;
  display: flex;
  border: 2px solid ${colors.purple._50};
  background-color: ${colors.purple._100};
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    border: 2px solid ${colors.purple._100};
    background-color: ${colors.purple._200};
  }
  & > span {
    white-space: nowrap;
  }
`;
