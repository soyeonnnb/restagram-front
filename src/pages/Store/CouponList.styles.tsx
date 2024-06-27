import styled from "styled-components";
import colors from "../../components/Common/colors";
export const Layout = styled.div`
  position: relative;
`;
export const Main = styled.div`
  width: 100%;
  height: 100%;
`;
export const Ul = styled.ul``;
export const Observer = styled.div`
  width: 100%;
  height: 1px;
`;
export const Box = styled.li`
  margin-bottom: 10px;
  background-color: ${colors.purple._50};
  padding: 20px 20px;
  box-sizing: border-box;
`;
export const BoxRow = styled.div`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const TextBox = styled.div`
  display: flex;
`;
export const Bottom = styled.div<{ screenWidth: number }>``;
export const Button = styled.div`
  background-color: white;
  border: 2px solid ${colors.purple._300};
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const BoxBottom = styled.div`
  display: flex;
  justify-content: center;
`;
export const AddBox = styled.div`
  width: 100%;
  height: 50px;
  padding-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AddButton = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${colors.blue._500};
  &:hover {
    cursor: pointer;
  }
`;
