import styled from "styled-components";
import colors from "../Common/colors";

export const Layout = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
  /* background-color: white; */
  position: relative;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  & > span:not(:last-child) {
    margin-right: 5px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 50px 8px 18px;
  outline: none;
  border-radius: 100px;
  border: 2px solid ${colors.purple._100};
  font-size: 1.1rem;
`;
export const SearchButton = styled.div`
  position: absolute;
  right: 15px;

  &:hover {
    cursor: pointer;
    & > * {
      fill: ${colors.purple._100};
    }
  }
`;
export const Button = styled.div`
  display: flex;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;
