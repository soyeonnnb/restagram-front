import styled from "styled-components";
import colors from "../../Common/colors";

export const Layout = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.purple._50};
  height: 100%;
  padding: 10px 0;
`;
export const Ul = styled.ul`
  height: 500px;
  overflow: scroll;
`;
export const Info = styled.div`
  padding: 10px 30px;
  &:hover {
    background-color: ${colors.blue._50};
  }
`;
export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
export const InfoMain = styled.div``;
export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-right: 10px;
`;
export const InfoBox = styled.div`
  display: flex;
  align-items: end;
`;
export const InfoUl = styled.ul`
  padding-left: 50px;
`;
export const InfoLi = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ButtonBox = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;
export const Button = styled.div`
  width: 100px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-radius: 5px;
  border: 2px solid ${colors.purple._100};
  &:hover {
    cursor: pointer;
    background-color: ${colors.purple._100};
  }
`;
export const Observer = styled.div`
  width: 100%;
  height: 1px;
`;
