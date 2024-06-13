import styled from "styled-components";
import colors from "../../../Common/colors";

export const Ul = styled.ul``;
export const Row = styled.li`
  border-radius: 10px;
  margin-bottom: 10px;
  border: 2px solid ${colors.blue._100};
`;
export const HeaderBox = styled.div`
  margin-bottom: 10px;
  background-color: ${colors.blue._50};
  padding: 15px 15px;
  border-radius: 10px 10px 0 0;
  display: flex;
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  & > span {
    margin-bottom: 10px;
  }
`;

export const StateBox = styled.div<{ state: string }>`
  background-color: ${({ state }) =>
    state === "ACTIVE" ? colors.blue._500 : colors.red._300};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 20px;
  border-radius: 2px;
  margin-right: 10px;
`;
