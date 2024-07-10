import { useEffect, useState } from "react";
import Text from "../../components/Common/Text";
import * as S from "./UpdateNickname.styles";
import customAxios from "../../utils/customAxios";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../recoil/UserRecoil";
import { UserInfoInterface } from "../../interfaces/UserInterfaces";
import { useNavigate } from "react-router-dom";

function UpdateNickname() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [nickname, setNickname] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) return;
    setNickname(userInfo.nickname);
  }, [userInfo]);

  const handleKeydown = (event: any) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (!userInfo) return;
    else if (nickname.length === 0) return;
    else if (nickname === userInfo.nickname) {
      alert("현재 닉네임과 동일합니다.");
      return;
    }
    const body = { nickname };

    customAxios
      .patch("/user/nickname", body)
      .then(() => {
        const update: UserInfoInterface = {
          ...userInfo,
          nickname,
        };
        setUserInfo(update);
        alert("닉네임 변경 완료");
      })
      .then(() => navigate(-1))
      .catch((e) => {
        alert(e.response.data.message);
      });
  };

  return (
    <S.Layout>
      <Text text="닉네임 변경" size="1.2rem" weight={500} />
      <S.Input
        type="text"
        onChange={(e) => setNickname(e.target.value)}
        value={nickname}
        onKeyDown={(e) => handleKeydown(e)}
      />
      <S.Button onClick={() => handleSubmit()}>
        <Text text="변경" color="white" pointer />
      </S.Button>
    </S.Layout>
  );
}

export default UpdateNickname;
