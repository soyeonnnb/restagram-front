import styled from "styled-components";
import colors from "../../components/Common/colors";

export const Layout = styled.div`
  padding: 20px 30px;
`;
export const BasicInfoBox = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
`;

export const ImageBox = styled.label`
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;

export const ImageIcon = styled.div`
  background-color: white;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  position: absolute;
  right: -5px;
  bottom: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${colors.blue._200};
`;

export const NicknameBox = styled.div`
  width: 100%;
  height: 50px;
  margin-left: 10px;
  border-radius: 10px;
  border: 2px solid ${colors.blue._400};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 20px;
  box-sizing: border-box;
  &:hover {
    border-color: ${colors.blue._700};
    cursor: pointer;
  }
`;
export const ImageInputBox = styled.div`
  height: 50px;
  margin: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageInput = styled.input`
  display: none;
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
