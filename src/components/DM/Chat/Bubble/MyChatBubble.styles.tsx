import styled from "styled-components";

export const Layout = styled.li`
  width: 100%;
  display: flex;
  justify-content: end;
`;
export const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  margin-right: 5px;
  & > span:first-child {
    margin-bottom: 3px;
  }
`;
export const MessageBox = styled.div`
  background-color: white;
  max-width: 280px;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 1px 1px 1px #9d9d9d3e;
`;
