import styled from "styled-components";
import colors from "../../components/Common/colors";

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
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
  width: 80%;
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

export const Button = styled.div`
  width: 344px;
  height: 50px;
  background-color: ${colors.purple._100};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: ${colors.purple._300};
  }
`;

export const ButtonText = styled.span`
  font-weight: 700;
  color: ${colors.white._50};
`;
