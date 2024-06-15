import styled from "styled-components";
import colors from "../Common/colors";

export const Layout = styled.div`
  width: 100%;
  left: 0;
  height: 400px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
`;
export const Main = styled.div`
  width: 440px;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  border: 2px solid ${colors.purple._100};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 15px;
  box-sizing: border-box;
`;
export const Middle = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const MiddleHeader = styled.div`
  display: flex;
`;

export const Box = styled.div`
  width: 100%;
`;
export const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Button = styled.div<{ color: string }>`
  width: 100px;
  height: 30px;
  background-color: ${({ color }) => color};
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 5px;
  margin: 0 10px;
  &:hover {
    box-shadow: 0 0 2px 2px ${({ color }) => color}99;
    cursor: pointer;
  }
`;
export const Row = styled.div`
  display: flex;
  align-items: end;
  width: 100%;
  & span {
    white-space: nowrap;
  }
`;
export const SelectBoxLayout = styled.div<{ selected: boolean }>`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ selected }) => (selected ? colors.blue._50 : "white")};
  box-sizing: border-box;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;
export const Scroll = styled.div`
  height: 100%;
  overflow-y: scroll;
`;
export const ScrollBox = styled.div`
  display: flex;
  border-radius: 20px;
  height: 250px;
  overflow: hidden;
  border: 2px solid ${colors.blue._200};
`;
