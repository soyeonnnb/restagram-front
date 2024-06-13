import styled from "styled-components";
import colors from "../../components/Common/colors";

export const Layout = styled.div``;
export const Header = styled.div<{ width: number }>`
  display: flex;
  position: fixed;
  padding: 20px 30px;
  width: ${({ width }) => width}px;
  z-index: 20;
  background-color: white;
  box-sizing: border-box;
`;
export const HeaderBox = styled.div`
  margin-right: 20px;
`;
export const Main = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;
export const ReservationUl = styled.ul``;
