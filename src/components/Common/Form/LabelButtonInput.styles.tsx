import styled from "styled-components";
import colors from "../colors";

export const Layout = styled.div`
  margin: 14px 0;
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  position: relative;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 10px;
`;

export const LeftBox = styled.div`
  position: absolute;
  top: 19px;
  right: 10px;
  display: flex;
  align-items: center;
`;

export const Button = styled.div`
  width: 60px;
  background-color: ${colors.purple._300};
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-left: 7px;
  &:hover {
    cursor: pointer;
    background-color: ${colors.purple._500};
  }
`;
export const ButtonText = styled.span`
  font-size: 0.8em;
  vertical-align: middle;
  color: ${colors.white._50};
`;
