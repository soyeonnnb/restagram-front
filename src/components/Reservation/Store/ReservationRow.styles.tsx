import styled from "styled-components";
import colors from "../../Common/colors";

export const Layout = styled.li<{ canceled: boolean }>`
  background-color: ${(props) =>
    props.canceled ? colors.white._700 : colors.purple._50};
  width: 100%;
  padding: 20px 30px;
  box-sizing: border-box;
  margin-bottom: 5px;
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const Box = styled.div<{ fullwidth?: string }>`
  display: flex;
  flex: ${(props) => (props.fullwidth === "true" ? "1 1 100%" : "1 1 50%")};
  align-items: center;
  & > span {
    margin-right: 10px;
  }
`;
export const Badge = styled.div<{ color: string }>`
  display: flex;
  padding: 2px 4px;
  background-color: ${(props) => props.color};
  border-radius: 2px;
  margin-right: 5px;
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;
export const Modal = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;
export const ModalButton = styled.div`
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
    color: ${colors.purple._500};
  }
`;
