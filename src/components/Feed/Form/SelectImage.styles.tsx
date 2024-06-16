import styled from "styled-components";
import colors from "../../Common/colors";

export const Layout = styled.div``;

export const InputBox = styled.div`
  height: 50px;
  margin: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  display: none;
`;
export const InputLabel = styled.label`
  width: 200px;
  height: 100%;
  border-radius: 10px;
  background-color: ${colors.purple._100};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
`;
