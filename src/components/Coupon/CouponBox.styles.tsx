import styled from "styled-components";
import colors from "../Common/colors";

export const Layout = styled.div<{ show: string }>`
  background-color: white;
  border-radius: 15px;
  border: 2px solid ${colors.blue._300};
  width: 380px;
  padding: 30px;
  position: fixed;
  display: ${({ show }) => (show === "true" ? "flex" : "none")};
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
`;
export const Button = styled.div`
  width: 100%;
  display: flex;
  background-color: ${colors.blue._50};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  &:hover {
    cursor: pointer;
  }
`;
export const Ul = styled.ul`
  width: 100%;
  margin: 20px 0;
  max-height: 500px;
  overflow-y: scroll;
`;
export const Box = styled.li`
  background-color: white;
  display: flex;
  border-radius: 10px;
  border: 2px solid ${colors.blue._500};
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  overflow-y: hidden;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const BoxRow = styled.div`
  width: 100%;
  display: flex;
  &:first-child {
    margin-bottom: 15px;
  }
  &:nth-child(2) {
    justify-content: space-between;
    margin-bottom: 5px;
  }
  &:not(:last-child) {
  }
`;
export const LeftSection = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.blue._100};
`;
export const MiddleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 65%;
  box-sizing: border-box;
  padding: 20px;
`;
export const RightSection = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: ${colors.blue._100};
  }
`;
