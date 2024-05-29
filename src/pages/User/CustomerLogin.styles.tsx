import styled from "styled-components";
import colors from "../../components/Common/colors";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LogoImage = styled.img`
  width: 70%;
  margin-bottom: 30px;
`;

export const Text = styled.span`
  font-size: 0.8em;
  color: ${colors.black._300};
  &:hover {
    cursor: pointer;
    color: ${colors.black._900};
  }
`;

export const SocialLoginButton = styled.div`
  height: 50px;
  width: 240px;
  border-radius: 5px;
  background-color: #fee500;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const SocialLoginButtonTextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SocialLoginButtonText = styled.span`
  font-weight: 600;
  color: rgba(0, 0, 0, 0.85);
`;
