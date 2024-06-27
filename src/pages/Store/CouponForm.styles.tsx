import styled from "styled-components";
export const Layout = styled.div`
  padding: 10px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Box = styled.div``;
export const Main = styled.div``;
export const InputBox = styled.div``;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
export const Button = styled.div<{ color: string }>`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  border-radius: 5px;

  background-color: ${({ color }) => color};
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 2px 2px ${({ color }) => color}55;
  }
`;
