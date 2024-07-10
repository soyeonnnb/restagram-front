import { useNavigate } from "react-router-dom";
import * as S from "./UpdatePassword.styles";
import Text from "../../components/Common/Text";
import { useState } from "react";
import customAxios from "../../utils/customAxios";

function UpdatePassword() {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");

  const [oldPasswordCheck, setOldPasswordCheck] = useState<string>("");
  const [newPasswordCheck, setNewPasswordCheck] = useState<string>("");
  const [checkPasswordCheck, setCheckPasswordCheck] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    setOldPasswordCheck("");
    setNewPasswordCheck("");
    setCheckPasswordCheck("");

    const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

    let flag = false;
    if (!reg.test(oldPassword)) {
      setOldPasswordCheck(
        "비밀번호는 영어 소문자, 대문자, 특수기호를 포함하여 8~15자를 입력해주세요."
      );
      flag = true;
    }

    if (!reg.test(newPassword)) {
      setNewPasswordCheck(
        "비밀번호는 영어 소문자, 대문자, 특수기호를 포함하여 8~15자를 입력해주세요."
      );
      flag = true;
    }

    if (newPassword !== checkPassword) {
      setCheckPasswordCheck("비밀번호가 일치하지 않습니다.");
      flag = true;
    }

    if (flag) return;

    const body = {
      oldPassword,
      newPassword,
    };

    customAxios
      .patch("/store/password", body)
      .then(() => alert("비밀번호가 변경되었습니다."))
      .then(() => navigate("/setting"))
      .catch((e) => {
        const { code } = e.response.data;
        console.log(code);
      });
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <S.Layout>
      <Text text="비밀번호 변경" size="1.2rem" weight={500} />
      <S.Section>
        <S.Box>
          <S.Label htmlFor="oldPassword">이전 비밀번호</S.Label>
          <S.Input
            type="password"
            onChange={(e) => setOldPassword(e.target.value)}
            value={oldPassword}
            id="oldPassword"
            name="oldPassword"
          />
          {oldPasswordCheck && (
            <Text text={oldPasswordCheck} color="red" size="0.8rem" />
          )}
        </S.Box>
        <S.Box>
          <S.Label htmlFor="newPassword">새로운 비밀번호</S.Label>
          <S.Input
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
            id="newPassword"
            name="newPassword"
          />
          {newPasswordCheck && (
            <Text text={newPasswordCheck} color="red" size="0.8rem" />
          )}
        </S.Box>
        <S.Box>
          <S.Label htmlFor="checkPassword">비밀번호 확인</S.Label>
          <S.Input
            type="password"
            onChange={(e) => setCheckPassword(e.target.value)}
            value={checkPassword}
            id="checkPassword"
            name="checkPassword"
            onKeyDown={(e) => handleKeyDown(e)}
          />
          {checkPasswordCheck && (
            <Text text={checkPasswordCheck} color="red" size="0.8rem" />
          )}
        </S.Box>
        <S.Button onClick={() => handleSubmit()}>
          <Text text="변경" color="white" pointer />
        </S.Button>
      </S.Section>
    </S.Layout>
  );
}
export default UpdatePassword;
