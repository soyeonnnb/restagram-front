import { useNavigate } from "react-router-dom";
import * as S from "./StoreLogin.styles";
import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import Input from "../../components/Common/Form/Input";

function StoreLogin() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const navigateTo = (url: string) => {
    navigate(url);
  };

  return (
    <S.Layout>
      <S.LogoImage src={Logo} alt="로고 이미지" />
      <S.InputBox>
        <Input
          placeholder="아이디를 입력해주세요"
          type="text"
          name="id"
          setValue={setId}
        />
        <Input
          placeholder="비밀번호를 입력해주세요"
          type="password"
          name="password"
          setValue={setPassword}
        />
        <S.Button>
          <S.ButtonText>로그인</S.ButtonText>
        </S.Button>
      </S.InputBox>
      <S.Text onClick={() => navigateTo("/store/sign-up")}>회원가입하기</S.Text>
      <S.Text onClick={() => navigateTo("/login")}>일반 회원이신가요 ?</S.Text>
    </S.Layout>
  );
}

export default StoreLogin;
