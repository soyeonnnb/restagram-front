import * as S from "./CustomerLogin.styles";
import { ReactComponent as KakaoLogo } from "../../assets/icons/kakao-logo.svg";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

function Login() {
  const navigate = useNavigate();

  const navigateTo = (url: string) => {
    window.location.href = url;
  };

  return (
    <S.Layout>
      <S.LogoImage src={Logo} alt="로고 이미지" />
      <S.SocialLoginButton
        onClick={() =>
          navigateTo(
            `${process.env.REACT_APP_LOCAL_SERVER_ADDRESS}/oauth2/authorization/kakao`
          )
        }
      >
        <KakaoLogo width={20} height={20} fill="#000000" />
        <S.SocialLoginButtonTextBox>
          <S.SocialLoginButtonText>카카오로 로그인하기</S.SocialLoginButtonText>
        </S.SocialLoginButtonTextBox>
      </S.SocialLoginButton>
      <S.Text onClick={() => navigate("/store/login")}>
        가게 회원이신가요 ?
      </S.Text>
    </S.Layout>
  );
}

export default Login;
