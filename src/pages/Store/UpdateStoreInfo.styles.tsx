import styled from "styled-components";
import colors from "../../components/Common/colors";

export const Layout = styled.div`
  padding: 20px 30px;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Textarea = styled.textarea`
  resize: vertical;
  outline: none;
  border: 2px solid ${colors.purple._100};
  border-radius: 10px;
  min-height: 50px;
  max-height: 300px;
  padding: 10px;
  box-sizing: border-box;
  margin: 5px 0;
  &:focus {
    border-color: ${colors.purple._600};
  }
`;
export const Button = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${colors.purple._400};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const Header = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const HeaderTop = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
export const IconBox = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
export const Image = styled.img`
  width: 200px;
  margin-bottom: 10px;
`;

export const HeaderText = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelInputBox = styled.div`
  margin: 14px 0;
`;
export const InputLabel = styled.span`
  display: block;
  margin-bottom: 10px;
`;
