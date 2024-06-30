import styled from "styled-components";
import colors from "../../Common/colors";
export const Layout = styled.div`
  background-color: white;
  position: fixed;
  bottom: 50px;
  width: 100%;
  max-width: 468px;
  height: 60px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;
`;
export const Button = styled.div`
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.purple._200};
  margin-left: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 1px 1px #4f4f4f51;

  & > span {
    white-space: nowrap;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 10px 10px;
  background-color: transparent;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid ${colors.purple._200};
`;
