import { useNavigate } from "react-router-dom";
import * as S from "./Setting.styles";

function Setting() {
  const navigate = useNavigate();

  return (
    <S.Layout>
      Setting
      <S.UserInfo></S.UserInfo>
      <S.List>
        <S.Row>내 정보 수정</S.Row>
        <S.Row>비밀번호 수정</S.Row>
        <S.Row onClick={() => navigate("/logout")}>로그아웃</S.Row>
      </S.List>
    </S.Layout>
  );
}

export default Setting;
