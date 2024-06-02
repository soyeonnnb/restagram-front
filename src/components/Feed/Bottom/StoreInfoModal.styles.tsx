import styled from "styled-components";
import colors from "../../Common/colors";

export const Layout = styled.div`
  width: 350px;
  height: auto;
  background-color: ${colors.blue._900}99;
  position: absolute;
  bottom: 60px;
  left: 50px;
  border-radius: 20px;
  display: flex;
  padding: 10px 10px;
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  & > * {
    color: white;
    font-weight: 200;
  }
`;
export const Row = styled.li`
  margin: 5px 0;
  display: flex;
  align-items: center;
`;

export const BoldText = styled.span`
  margin-right: 10px;
  white-space: nowrap;
  font-weight: 400;
  font-size: 0.9rem;
`;
export const Text = styled.span`
  font-size: 0.8rem;
`;
export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Button = styled.div`
  background-color: ${colors.blue._50};
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${colors.blue._200};
  }
`;
export const ButtonText = styled.span`
  color: ${colors.blue._900};
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;
