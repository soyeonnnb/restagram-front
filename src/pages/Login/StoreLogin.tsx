import { useNavigate } from "react-router-dom";
import * as S from "./StoreLogin.styles";
import { useState } from "react";
import Logo from "../../assets/images/logo.png";

function StoreLogin() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const navigateToCustomerLogin = () => {
    navigate("/login");
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
      </S.InputBox>
      <S.Text>회원가입하기</S.Text>
      <S.Text onClick={() => navigateToCustomerLogin()}>
        일반 회원이신가요 ?
      </S.Text>
    </S.Layout>
  );
}

export default StoreLogin;

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  setValue: any;
}

const Input = ({ placeholder, type, name, setValue }: InputProps) => {
  const handleInputChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <S.Input
      placeholder={placeholder}
      type={type ? type : "text"}
      onChange={handleInputChange}
    />
  );
};
