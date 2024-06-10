import styled from "styled-components";
import colors from "../../../Common/colors";

export const Layout = styled.div`
  background-color: ${colors.beige._100};
  margin-bottom: 10px;
  padding: 10px;
`;
export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  margin-top: 10px;
`;
export const Form = styled.li`
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
  border-radius: 3px;
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    & > * {
      fill: ${colors.blue._400};
    }
  }
`;
