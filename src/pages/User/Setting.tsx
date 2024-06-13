import { useNavigate } from "react-router-dom";
import * as S from "./Setting.styles";
import Title from "../../components/Common/Title";
import { ReactComponent as InfoIcon } from "../../assets/icons/circle-check.svg";
import { useState } from "react";
import Toggle from "react-toggle";
import "../../assets/styles/react-toggle.css";
import customAxios from "../../utils/customAxios";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../recoil/UserRecoil";

function Setting() {
  const navigate = useNavigate();
  const [agree, setAgree] = useState<boolean>(false);
  const userInfo = useRecoilValue(userInfoState);

  const handleKakaoCalender = () => {
    customAxios
      .patch("/calendar/agree", { agree: !agree })
      .then((res) => {
        setAgree(res.data.data.agree);
      })
      .catch((e) => {
        // 만약 동의하지 않았으면 동의받기

        const code = e.response.data.code;
        if (code === "CALENDER_NOT_AUTHORIZATION") {
          alert("캘린더 동의항목에 동의해주세요");
          // 동의받기
          const url = `http://localhost:8080/oauth2/authorization/kakao`;
          window.location.href = url;
        }
      });
  };

  return (
    <S.Layout>
      <Title title="Setting" />
      <S.UserInfo></S.UserInfo>
      <S.List>
        <S.Row className="hover">
          <S.RowText>내 정보 수정</S.RowText>
        </S.Row>
        <S.Divider />
        <S.Row className="hover">
          <S.RowText>비밀번호 수정</S.RowText>
        </S.Row>
        <S.Divider />
        {userInfo?.type === "CUSTOMER" && (
          <>
            <S.Row>
              <S.RowText>카카오톡 캘린더에 추가</S.RowText>
              <Toggle defaultChecked={agree} onChange={handleKakaoCalender} />
            </S.Row>
            <S.Divider />
          </>
        )}
        <S.Row className="hover" onClick={() => navigate("/logout")}>
          <S.RowText>로그아웃</S.RowText>
        </S.Row>
      </S.List>
    </S.Layout>
  );
}

export default Setting;
