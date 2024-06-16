import styled from "styled-components";
import colors from "../../Common/colors";

export const Layout = styled.div<{ color: string }>`
  background-color: white;
  border-radius: 15px;
  height: 100%;
  overflow: hidden;
  border: 2px solid ${({ color }) => color};
  box-sizing: border-box;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const Header = styled.div<{ color: string }>`
  height: 40px;
  background-color: ${({ color }) => color};
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Div = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const Main = styled.div`
  padding: 10px 30px;
  box-sizing: border-box;
`;
export const Row = styled.div`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Box = styled.div`
  width: 100%;
`;
export const Divider = styled.div<{ color: string }>`
  height: 2px;
  background-color: ${({ color }) => color};
  margin: 10px 0;
`;
export const Button = styled.div`
  width: 80px;
  height: 30px;
  border: 2px solid ${colors.blue._100};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-sizing: border-box;
  &:hover {
    background-color: ${colors.blue._100};
    cursor: pointer;
  }
`;
export const Input = styled.input`
  height: 30px;
  width: 100%;
  margin-right: 10px;
  box-sizing: border-box;
  outline: none;
  border-radius: 5px;
  padding: 0 10px;
  border: 2px solid ${colors.blue._100};
`;
