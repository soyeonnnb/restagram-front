import styled from "styled-components";
import colors from "../Common/colors";
export const Layout = styled.div`
  position: fixed;
  background-color: #00000046;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Box = styled.div`
  width: 400px;

  border-radius: 10px;
  background-color: white;
  padding: 20px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const CloseBox = styled.div`
  width: 20px;
  height: 20px;
  & > *:hover {
    cursor: pointer;
  }
`;
export const Main = styled.div`
  width: 100%;
`;
export const StoreInfoBox = styled.div``;
export const StoreInfoBoxRow = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Bottom = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Button = styled.div<{ color: string; pointer?: string }>`
  width: 100%;
  height: 50px;
  background-color: ${({ color }) => color};
  margin-top: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: ${({ pointer }) => (pointer ? "pointer" : "default")};
  }
`;
