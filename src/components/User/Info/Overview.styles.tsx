import styled from "styled-components";

export const Ul = styled.ul`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
export const OverviewBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  margin: 0 10px;
  & > span:not(:last-child) {
    margin-bottom: 10px;
  }
`;
