import styled from "styled-components";
import colors from "../../components/Common/colors";

export const Layout = styled.div`
  padding: 20px 30px;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Textarea = styled.textarea`
  resize: vertical;
  outline: none;
  border: 2px solid ${colors.blue._400};
  border-radius: 10px;
  min-height: 50px;
  max-height: 300px;
  padding: 10px;
  box-sizing: border-box;
  margin: 5px 0;
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
