import styled from "styled-components";
import colors from "../../components/Common/colors";

export const Layout = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const DateBox = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  position: relative;
  align-items: center;
  & > .react-datepicker-wrapper {
    width: 100%;
  }
  & .startEnd {
    width: 100%;
    outline: none;
    border: none;
    background-color: transparent;
  }
  & .clearButton {
  }
  & .react-datepicker__day--in-range {
    background-color: ${colors.purple._100};
  }
  & .react-datepicker__day--keyboard-selected {
    background-color: ${colors.purple._50};
  }
`;
export const Center = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

export const ClearButton = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: absolute;
  left: 60%;
  z-index: 20;
  &:hover {
    cursor: pointer;
  }
  & > *:hover {
    fill: ${colors.blue._200};
  }
`;
export const Box = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  margin: 0 10px;
  width: 40px;
  height: 20px;
  border: 2px solid rgba(0, 0, 0, 0);
  background-color: ${colors.purple._50};
  border-radius: 2px;
  text-align: center;
  &:focus {
    background-color: ${colors.purple._50};
    outline: none;
    border: 2px solid ${colors.purple._200};
  }
`;
export const ExceptUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
`;

export const Ul = styled.ul`
  margin-top: 15px;
`;
export const Li = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Form = styled.div`
  background-color: ${colors.beige._100};
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  margin: 10px 0;
`;
export const FormBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const FormBoxUl = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;
export const FormWeek = styled.li<{ selected: boolean }>`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ selected }) =>
    selected ? colors.blue._800 : "white"};
  color: ${({ selected }) => (selected ? "white" : "black")};
  &:hover {
    cursor: pointer;
  }
`;
export const FormInput = styled.input`
  width: 30px;
  height: 20px;
  outline: none;
  margin: 10px;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 2px;
  text-align: center;
  &:focus {
    background-color: ${colors.purple._50};
    outline: none;
    border: 2px solid ${colors.purple._200};
  }
`;
export const FormButton = styled.div<{ width: number }>`
  width: ${({ width }) => width}px;
  height: 30px;
  border-radius: 5px;
  background-color: ${colors.blue._800};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 2px 2px ${colors.blue._200};
  }
`;
export const ReservationFormUl = styled.ul`
  margin-top: 10px;
`;
export const FormButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
