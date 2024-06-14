import styled from "styled-components";
import colors from "../../components/Common/colors";

export const Layout = styled.div`
  padding: 30px;
`;

export const Divider = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${colors.black._50};
  margin: 10px 0;
`;

export const FormBox = styled.div`
  margin: 20px 0;
`;

export const FormTitle = styled.div`
  margin-bottom: 10px;
  & > *:not(:last-child) {
    margin-right: 5px;
  }
`;

export const FormLabel = styled.div``;
export const FormBoxRow = styled.div``;
export const DateBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 40px;
`;
export const Box = styled.div``;
export const FormInputUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const FormInputLi = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  & > span {
    width: 80px;
  }
`;

export const BoxRow = styled.div``;

export const Button = styled.div<{ color: string }>`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 30px;
  background-color: ${({ color }) => color};
  margin: 0 10px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 3px 3px ${({ color }) => color}44;
  }
`;
export const Input = styled.input<{ full?: string }>`
  width: ${({ full }) => (full === "true" ? "100%" : "50px")};
  outline: none;
  border: 2px solid ${colors.purple._50};
  padding: 5px;
  border-radius: 3px;
  &:focus {
    border-color: ${colors.purple._100};
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
