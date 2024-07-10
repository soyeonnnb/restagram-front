import { useRecoilValue } from "recoil";
import customAxios from "../../utils/customAxios";
import * as S from "./UpdateStoreInfo.styles";
import { userInfoState } from "../../recoil/UserRecoil";
import { useEffect, useState } from "react";
import Text from "../../components/Common/Text";
import UpdateUserProfileNickname from "../../components/User/UpdateUserProfileNickname";

function UpdateStoreInfo() {
  const userInfo = useRecoilValue(userInfoState);

  const [init, setInit] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");

  const fetchData = () => {
    setInit(true);
    // customAxios
    //   .get("/customer")
    //   .then((res) => res.data.data)
    //   .then(({ description }: { description: string }) => {
    //     setDescription(description);
    //   });
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
      {/* {userInfo && (
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
      )} */}
    </S.Layout>
  );
}

export default UpdateStoreInfo;
