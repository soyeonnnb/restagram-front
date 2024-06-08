import styled from "styled-components";
import colors from "../../Common/colors";
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > div:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Box = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const BoxComponent = styled.div`
  width: 30%;
  display: flex;
  justify-content: end;
`;
export const Button = styled.div`
  height: 30px;
  display: flex;
  border: 2px solid ${colors.purple._50};
  background-color: ${colors.purple._100};
  margin-left: 10px;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    border: 2px solid ${colors.purple._100};
    background-color: ${colors.purple._200};
  }
  & > span {
    white-space: nowrap;
  }
`;
export const ButtonText = styled.span`
  white-space: nowrap;
  font-size: 0.9rem;
  margin: 0px 10px;
`;
export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background-color: aliceblue;
  object-fit: contain;
`;

export const Nickname = styled.span`
  font-weight: 600;
`;
export const Description = styled.span`
  font-size: 0.8rem;
`;
export const TextBox = styled.div``;
