import styled from "styled-components";
import colors from "../colors";
export const Input = styled.input`
  width: 420px;
  padding: 10px 50px 10px 18px;
  outline: none;
  border-radius: 100px;
  border: 2px solid ${colors.purple._100};
  box-sizing: border-box;
`;
export const SearchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SearchButton = styled.div`
  position: absolute;
  right: 40px;

  &:hover {
    cursor: pointer;
    & > * {
      fill: ${colors.purple._100};
    }
  }
`;
