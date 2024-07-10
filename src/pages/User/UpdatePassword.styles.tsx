import styled from "styled-components";
import colors from "../../components/Common/colors";

export const Layout = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  outline: none;
  border: 2px solid ${colors.blue._400};
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 5px;
  &:focus {
    border-color: ${colors.blue._600};
  }
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
export const Box = styled.div`
  margin: 10px 0;
`;
export const Label = styled.label``;
export const Section = styled.div`
  margin-top: 10px;
`;
