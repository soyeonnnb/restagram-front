import styled from "styled-components";
import colors from "../../components/Common/colors";

export const Layout = styled.div`
  position: relative;
  background-color: aliceblue;
`;

export const Observer = styled.div``;
export const Modal = styled.div`
  position: fixed;
  width: 100%;
  max-width: 468px;
  z-index: 30;
  bottom: 120px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalBox = styled.div`
  width: 200px;
  height: 100%;
  background-color: white;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 1px 1px #68686851;
  transition: all 1s ease-in-out;
  &:hover {
    cursor: pointer;
  }
`;
