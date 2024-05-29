import styled from "styled-components";
import colors from "../../components/Common/colors";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 70%;
  margin-bottom: 30px;
`;

export const Text = styled.span`
  margin-top: 10px;
  font-size: 0.8em;
  color: ${colors.black._300};
  &:hover {
    cursor: pointer;
    color: ${colors.black._900};
  }
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 180px;
  margin-bottom: 12px;
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
