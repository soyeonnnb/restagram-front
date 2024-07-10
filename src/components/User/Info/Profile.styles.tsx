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
export const CircleButton = styled.div<{ color: string }>`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid ${({ color }) => color};
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
`;
