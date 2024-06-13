import styled from "styled-components";
import colors from "../../../Common/colors";

export const ToggleButtonBox = styled.div<{ width: number }>`
  width: ${({ width }) => width}px;
  box-sizing: border-box;
  display: flex;
  height: 0px;
  justify-content: end;
  position: relative;
  position: fixed;
  bottom: 50px;
`;
export const ToggleButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: white;
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 3px 3px ${colors.blue._100};
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 3px 3px ${colors.blue._300};
  }
`;
export const ToggleBox = styled.ul<{ show: boolean }>`
  width: 200px;
  height: 100px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 0px 2px 2px ${colors.white._500};
  position: absolute;
  bottom: 30px;
  right: 50px;
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ToggleRow = styled.li`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${colors.white._200};
    cursor: pointer;
  }
`;
