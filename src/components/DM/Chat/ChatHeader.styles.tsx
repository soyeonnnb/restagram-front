import styled from "styled-components";
import colors from "../../Common/colors";

export const Layout = styled.div`
  background-color: white;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  top: 60px;
  width: 100%;
  max-width: 468px;
  padding: 0 30px;
  height: 40px;
  z-index: 10;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
`;
export const Button = styled.div`
  &:hover {
    cursor: pointer;
    & > * {
      fill: ${colors.black._400};
    }
  }
`;
