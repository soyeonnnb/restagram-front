import { useNavigate } from "react-router-dom";
import * as S from "./StoreLogin.styles";
import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import Input from "../../components/Common/Form/Input";
import { toast } from "react-toastify";
import customAxios from "../../utils/customAxios";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../recoil/UserRecoil";

function StoreLogin() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [verifyEmail, setVerifyEmail] = useState<string>("");
  const [verifyPassword, setVerifyPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleLogin = () => {
    let flag: boolean = false;
    if (email === "") {
      setVerifyEmail("이메일은 필수 영역입니다.");
      flag = true;
    } else {
      setVerifyEmail("");
    }
    if (password === "") {
      setVerifyPassword("비밀번호는 필수 영역입니다.");
      flag = true;
    } else {
      setVerifyPassword("");
    }
    if (flag) {
      return;
    }

    const body = {
      email,
      password,
      type: "STORE",
    };
    console.log(body);

    customAxios
      .post("/user/login", body)
      .then((res) => {
        setUserInfo(res.data.data);
        navigate("/");
      })
      .catch((e) => {
        setVerifyEmail("이메일 또는 비밀번호가 잘못되었습니다.");
        setVerifyPassword("이메일 또는 비밀번호가 잘못되었습니다.");
      });
  };

  return (
    <S.Layout>
      <S.LogoImage src={Logo} alt="로고 이미지" />
      <S.InputBox>
        <Input
          placeholder="이메일을 입력해주세요"
          type="email"
          name="email"
          setValue={setEmail}
          verifyText={verifyEmail}
        />
        <Input
          placeholder="비밀번호를 입력해주세요"
          type="password"
          name="password"
          setValue={setPassword}
          verifyText={verifyPassword}
        />
        <S.Button onClick={() => handleLogin()}>
          <S.ButtonText>로그인</S.ButtonText>
        </S.Button>
      </S.InputBox>
      <S.Text onClick={() => navigate("/store/sign-up")}>회원가입하기</S.Text>
      <S.Text onClick={() => navigate("/login")}>일반 회원이신가요 ?</S.Text>
    </S.Layout>
  );
}

export default StoreLogin;
