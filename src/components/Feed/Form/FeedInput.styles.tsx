import styled from "styled-components";
import colors from "../../Common/colors";

export const Layout = styled.div`
  padding: 30px 30px;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  transition: height 0.3s ease;
`;
export const TextArea = styled.textarea`
  resize: vertical;
  width: 100%;
  min-height: 50px;
  max-height: 250px;
  outline: none;
  border: 2px solid ${colors.purple._200};
  border-radius: 10px;
  padding: 10px 15px;
  box-sizing: border-box;
  margin-top: 10px;
`;

export const HashtagBox = styled.div`
  width: 100%;
  border: 2px solid ${colors.purple._200};
  border-radius: 10px;
  padding: 10px 15px;
  box-sizing: border-box;
  margin-top: 10px;
`;
export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
`;
export const HashtagUl = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
export const HashtagLi = styled.li`
  background-color: ${colors.purple._400};
  padding: 5px 8px;
  margin-right: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;
export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
