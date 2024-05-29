import Input from "../../components/Common/Form/Input";
import LabelInput from "../../components/Common/Form/LabelInput";
import LabelButtonInput from "../../components/Common/Form/LabelButtonInput";
import * as S from "./StoreSignup.styles";
import LogoImage from "../../assets/images/logo.png";

import { ReactComponent as BackIcon } from "../../assets/icons/chevron-back-sharp.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StoreSignup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [storeName, setStoreName] = useState<string>("");
  const [storePhone, setStorePhone] = useState<string>("");
  const [bcode, setBcode] = useState<number>(0);
  const [address, setAddress] = useState<string>("");
  const [detailAddress, setDetailAddress] = useState<string>("");
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  const [checkEmail, setCheckEmail] = useState<boolean | null>(null);
  const [checkNickname, setCheckNickname] = useState<boolean | null>(null);
  const [checkPassword, setCheckPassword] = useState<boolean | null>(null);

  const handleDuplicateEmail = () => {};

  const handleDuplicateNickname = () => {};

  const handleCheckPassword = () => {};

  return (
    <S.Layout>
      <S.Header>
        <S.HeaderTop>
          <S.IconBox onClick={() => navigate("/store/login")}>
            <BackIcon width={20} height={20} fill="#000000" />
          </S.IconBox>
          <S.Image src={LogoImage} alt="로고 이미지" />
          <BackIcon width={20} height={20} fill="none" />
        </S.HeaderTop>
        <S.HeaderText>회원가입</S.HeaderText>
      </S.Header>
      <S.Main>
        <S.InputBox>
          <LabelButtonInput
            placeholder="example@restagram.com"
            label="이메일"
            type="email"
            name="email"
            setValue={setEmail}
            buttonText="중복확인"
            buttonFunction={handleDuplicateEmail}
            check={checkEmail}
          />
          <LabelInput
            placeholder=""
            label="비밀번호"
            type="password"
            name="password"
            setValue={setPassword}
          />
          <LabelInput
            placeholder=""
            label="비밀번호 확인"
            type="password"
            name="PasswordCheck"
            setValue={setPasswordCheck}
          />
          <LabelButtonInput
            placeholder=""
            label="닉네임"
            type="text"
            name="nickname"
            setValue={setNickname}
            buttonText="중복확인"
            buttonFunction={handleDuplicateNickname}
            check={checkNickname}
          />
          <LabelInput
            placeholder=""
            label="이름"
            type="text"
            name="name"
            setValue={setName}
          />
          <LabelInput
            placeholder=""
            label="가게명"
            type="text"
            name="storeName"
            setValue={setStoreName}
          />
          <LabelInput
            placeholder="01012345678"
            label="가게 전화번호"
            type="text"
            name="storePhone"
            setValue={setStorePhone}
          />
          <LabelButtonInput
            placeholder=""
            label="주소"
            type="text"
            name="address"
            setValue={setPassword}
            disable={true}
            buttonText="주소찾기"
            buttonFunction={handleDuplicateNickname}
          />
          <LabelInput
            placeholder=""
            label="상세주소"
            type="password"
            name="password"
            setValue={setPassword}
          />
          <S.Button>
            <S.ButtonText>회원가입</S.ButtonText>
          </S.Button>
        </S.InputBox>
      </S.Main>
    </S.Layout>
  );
}
export default StoreSignup;
