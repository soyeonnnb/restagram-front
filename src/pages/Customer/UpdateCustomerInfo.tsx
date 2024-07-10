import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import Text from "../../components/Common/Text";
import * as S from "./UpdateCustomerInfo.styles";
import { userInfoState } from "../../recoil/UserRecoil";
import colors from "../../components/Common/colors";
import customAxios from "../../utils/customAxios";
import axios from "axios";
import { ProfileImage } from "../../components/User/UserInfo.styles";
import { UserInfoInterface } from "../../interfaces/UserInterfaces";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UpdateUserProfileNickname from "../../components/User/UpdateUserProfileNickname";

function UpdateCustomerInfo() {
  const userInfo = useRecoilValue(userInfoState);

  const [init, setInit] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");

  const fetchData = () => {
    setInit(true);
    customAxios
      .get("/customer")
      .then((res) => res.data.data)
      .then(({ description }: { description: string }) => {
        setDescription(description);
      });
  };

  useEffect(() => {
    if (!userInfo || init) return;
    fetchData();
  }, [userInfo]);

  const handleSubmit = () => {
    const body = { description };
    customAxios.patch("/customer", body).then(() => alert("수정 완료"));
  };

  return (
    <S.Layout>
      <Text text="내 정보 수정" size="1.2rem" weight={500} />
      <UpdateUserProfileNickname />
      {userInfo && (
        <>
          <S.Box>
            <Text text="한줄 소개" size="0.9rem" />
            <S.Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <S.Button onClick={() => handleSubmit()}>
              <Text text="수정" pointer color="white" />
            </S.Button>
          </S.Box>
        </>
      )}
    </S.Layout>
  );
}

export default UpdateCustomerInfo;
