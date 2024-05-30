import styled from "styled-components";
import colors from "./colors";

export const Layout = styled.div`
  position: fixed;
  background-color: white;
  width: 100%;
  max-width: 468px;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const LeftBox = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
`;
export const RightBox = styled.div`
  width: 45%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const Image = styled.img`
  height: 50px;
`;

export const Box = styled.div`
  margin-left: 13px;
  &:hover {
    cursor: pointer;
    .icon {
      fill: ${colors.blue._200};
    }
  }
`;
