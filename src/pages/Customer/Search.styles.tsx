import styled from "styled-components";
import colors from "../../components/Common/colors";

export const Layout = styled.div`
  width: 100%;
`;
export const SelectBox = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 30px;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  background-color: ${colors.purple._50};
`;

export const SelectButton = styled.div`
  width: 50px;
  height: 30px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  &:hover {
    background-color: ${colors.purple._900}22;
    cursor: pointer;
  }
`;

export const ResultBox = styled.div`
  padding-top: 130px;
`;
export const Observer = styled.div`
  width: 100%;
  height: 20px;
`;

export const Input = styled.input`
  width: 420px;
  padding: 10px 50px 10px 18px;
  outline: none;
  border-radius: 100px;
  border: 2px solid ${colors.purple._100};
  box-sizing: border-box;
`;
export const SearchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const SearchButton = styled.div`
  position: absolute;
  right: 40px;

  &:hover {
    cursor: pointer;
    & > * {
      fill: ${colors.purple._100};
    }
  }
`;

export const Header = styled.div<{ width: number }>`
  position: fixed;
  width: ${({ width }) => width}px;
  background-color: white;
  z-index: 99;
`;
