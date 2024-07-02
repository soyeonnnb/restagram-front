import styled from "styled-components";
import colors from "../../Common/colors";

export const Layout = styled.li`
  height: 70px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${colors.purple._50};
  }
`;

export const LeftSection = styled.div`
  height: 50px;
  display: flex;
  width: 80%;
`;
export const Main = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  justify-content: space-between;
`;
export const RightSection = styled.div`
  height: 50px;
  width: 20%;
  padding: 3px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  & > span {
    white-space: nowrap;
  }
`;
export const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 13px;
`;
export const Nickname = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  & > .icon {
    margin-right: 5px;
  }
`;
export const Span = styled.span`
  width: 90%;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const Message = styled.div`
  min-width: 0;
  width: 100%;
  z-index: 10;
`;

export const CountBox = styled.div`
  padding: 5px 10px;
  border-radius: 20px;
  background-color: ${colors.red._200};
`;
