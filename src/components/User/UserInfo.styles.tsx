import styled from "styled-components";
import colors from "../Common/colors";

export const Layout = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  box-sizing: border-box;
  align-items: center;
`;

export const Box = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;
export const ProfileImage = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 100px;
  border: 1px solid ${colors.black._100};
  margin-right: 10px;
`;

export const IconBox = styled.div`
  margin-right: 6px;
`;

export const Text = styled.span`
  &:hover {
    cursor: pointer;
  }
`;
