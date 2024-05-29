import styled from "styled-components";
import colors from "../colors";

export const Input = styled.input`
  width: 300px;
  height: 50px;
  outline: none;
  border: 2px solid ${colors.purple._100};
  padding: 0 20px;
  font-size: 15px;
  border-radius: 10px;
  background-color: white;

  &:focus {
    border-color: ${colors.purple._500};
  }
`;
