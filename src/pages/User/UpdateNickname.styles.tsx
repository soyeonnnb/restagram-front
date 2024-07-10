import styled from "styled-components";
import colors from "../../components/Common/colors";

export const Layout = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  outline: none;
  border: 2px solid ${colors.blue._400};
  padding: 0 20px;
  box-sizing: border-box;
  margin: 20px 0 5px 0;
`;
export const Button = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${colors.blue._400};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
