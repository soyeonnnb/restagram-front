import Input from "../../components/Common/Form/Input";
import LabelInput from "../../components/Common/Form/LabelInput";
import LabelButtonInput from "../../components/Common/Form/LabelButtonInput";
import * as S from "./StoreSignup.styles";
import LogoImage from "../../assets/images/logo.png";

import { ReactComponent as BackIcon } from "../../assets/icons/chevron-back.svg";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import customAxios from "../../utils/customAxios";
import { useRecoilTransaction_UNSTABLE } from "recoil";
import DaumPost from "../../components/User/DaumPost";
import SearchLatLngByAddress from "../../components/User/SearchLatLngByAddress";

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

  const [checkEmail, setCheckEmail] = useState<boolean | null>(true);
  const [checkNickname, setCheckNickname] = useState<boolean | null>(null);
  const [checkPassword, setCheckPassword] = useState<boolean | null>(null);

  const [checkEmailText, setCheckEmailText] = useState<string>("");
  const [checkPasswordText, setCheckPasswordText] = useState<string>("");
  const [checkNicknameText, setCheckNicknameText] = useState<string>("");
  const [checkNameText, setCheckNameText] = useState<string>("");
  const [checkPhoneText, setCheckPhoneText] = useState<string>("");
  const [checkStoreNameText, setCheckStoreNameText] = useState<string>("");
  const [checkStorePhoneText, setCheckStorePhoneText] = useState<string>("");
  const [checkAddressText, setCheckAddressText] = useState<string>("");
  const [checkDetailAddressText, setCheckDetailAddressText] =
    useState<string>("");

  const [showPost, setShowPost] = useState<boolean>(false);

  const handleDuplicateEmail = () => {
    let reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!reg.test(email)) {
      setCheckEmailText("이메일 형식이 아닙니다.");
      return;
    }
    setCheckEmailText("");
    customAxios.get(`/store/duplicate/email?query=${email}`).then((res) => {
      setCheckEmail(!res.data.data.check);
    });
  };

  const handleDuplicateNickname = () => {
    customAxios
      .get(`/user/duplicate/nickname?query=${nickname}`)
      .then((res) => {
        setCheckNickname(!res.data.data.check);
      });
  };

  const handleCheckPassword = () => {
    const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    let flag = false;
    if (passwordCheck === "") {
      setCheckPassword(null);
      flag = true;
    }
    if (password !== "" && !reg.test(password)) {
      setCheckPasswordText("비밀번호 형식이 틀렸습니다.");
      flag = true;
    }
    if (flag) return;
    setCheckPasswordText("");
    if (password === passwordCheck) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  };

  const handleShowPost = () => {
    setShowPost(!showPost);
  };

  const handleSignup = async () => {
    let flag: boolean = false;
    if (email === "") {
      setCheckEmailText("이메일은 필수입니다.");
      flag = true;
    } else if (!checkEmail) {
      setCheckEmailText("이메일 중복확인 해주세요.");
      flag = true;
    } else {
      setCheckEmailText("");
    }
    if (password === "") {
      setCheckPasswordText("비밀번호는 필수입니다.");
      flag = true;
    } else if (!checkPassword) {
      setCheckPasswordText("비밀번호가 일치하지 않습니다.");
      flag = true;
    } else {
      setCheckPasswordText("");
    }
    if (nickname === "") {
      setCheckNicknameText("닉네임은 필수입니다.");
      flag = true;
    } else if (!checkNickname) {
      setCheckNicknameText("닉네임 중복확인 해주세요.");
      flag = true;
    } else {
      setCheckNicknameText("");
    }
    if (name === "") {
      setCheckNameText("이름은 필수입니다.");
      flag = true;
    } else {
      setCheckNameText("");
    }
    if (phone === "") {
      setCheckPhoneText("전화번호는 필수입니다.");
      flag = true;
    } else {
      setCheckPhoneText("");
    }
    if (storeName === "") {
      setCheckStoreNameText("가게명은 필수입니다.");
      flag = true;
    } else {
      setCheckStoreNameText("");
    }
    if (storePhone === "") {
      setCheckStorePhoneText("가게번호는 필수입니다.");
      flag = true;
    } else {
      setCheckStorePhoneText("");
    }
    if (address === "") {
      setCheckAddressText("주소입력은 필수입니다.");
      flag = true;
    } else {
      setCheckAddressText("");
    }

    if (detailAddress === "") {
      setCheckDetailAddressText("상세 주소입력은 필수입니다.");
      flag = true;
    } else {
      setCheckDetailAddressText("");
    }

    if (flag) return;

    const { latitude, longitude } = await SearchLatLngByAddress(address);

    const data = {
      email,
      password,
      nickname,
      name,
      phone,
      storeName,
      storePhone,
      bcode,
      address,
      detailAddress,
      latitude,
      longitude,
    };

    customAxios.post(`/store/join`, data).then(() => {
      alert("회원가입 완료");
      navigate("/login");
    });
  };

  useEffect(() => {
    handleCheckPassword();
  }, [password, passwordCheck]);

  useEffect(() => {
    setCheckEmail(null);
  }, [email]);

  useEffect(() => {
    setCheckNickname(null);
  }, [nickname]);

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
            verifyText={checkEmailText}
          />
          <LabelInput
            placeholder="영문, 숫자, 특수기호 조합 8~15자 입력"
            label="비밀번호"
            type="password"
            name="password"
            setValue={setPassword}
            verifyText={checkPasswordText}
          />
          <LabelButtonInput
            placeholder=""
            label="비밀번호 확인"
            type="password"
            name="PasswordCheck"
            setValue={setPasswordCheck}
            check={checkPassword}
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
            verifyText={checkNicknameText}
          />
          <LabelInput
            placeholder=""
            label="이름"
            type="text"
            name="name"
            setValue={setName}
            verifyText={checkNameText}
          />
          <LabelInput
            placeholder="01012345678"
            label="전화번호"
            type="text"
            name="phone"
            setValue={setPhone}
            verifyText={checkPhoneText}
          />
          <LabelInput
            placeholder=""
            label="가게명"
            type="text"
            name="storeName"
            setValue={setStoreName}
            verifyText={checkStoreNameText}
          />
          <LabelInput
            placeholder="01012345678"
            label="가게 전화번호"
            type="text"
            name="storePhone"
            setValue={setStorePhone}
            verifyText={checkStorePhoneText}
          />
          <LabelButtonInput
            placeholder=""
            label="주소"
            type="text"
            name="address"
            value={address}
            setValue={setAddress}
            disable={true}
            buttonText="주소찾기"
            buttonFunction={handleShowPost}
            verifyText={checkAddressText}
          />
          <LabelInput
            placeholder=""
            label="상세주소"
            type="text"
            name="detailAddress"
            setValue={setDetailAddress}
            verifyText={checkDetailAddressText}
          />
          <S.Button onClick={() => handleSignup()}>
            <S.ButtonText>회원가입</S.ButtonText>
          </S.Button>
        </S.InputBox>
      </S.Main>
      {showPost && (
        <DaumPost
          handleShowPost={handleShowPost}
          setBcode={setBcode}
          setAddress={setAddress}
        />
      )}
    </S.Layout>
  );
}
export default StoreSignup;
