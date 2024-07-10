import styled from "styled-components";
import colors from "../../Common/colors";

export const Layout = styled.div`
  background-color: ${colors.blue._50};
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.div`
  height: 35px;
  width: 80%;
  display: flex;
  border: 2px solid ${colors.blue._100};
  background-color: white;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    border: 2px solid ${colors.blue._400};
  }
`;
