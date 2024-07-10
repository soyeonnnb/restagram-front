import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import Text from "../../components/Common/Text";
import * as S from "./UpdateCustomerInfo.styles";
import { userInfoState } from "../../recoil/UserRecoil";
import { ReactComponent as ArrowIcon } from "../../assets/icons/chevron-forward.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/create.svg";
import colors from "../../components/Common/colors";
import customAxios from "../../utils/customAxios";
import axios from "axios";
import { ProfileImage } from "../../components/User/UserInfo.styles";
import { UserInfoInterface } from "../../interfaces/UserInterfaces";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function UpdateCustomerInfo() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const navigate = useNavigate();
  const [init, setInit] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");

  const handleChangeFile = (event: any) => {
    if (!userInfo) return;
    const file: File = event.target.files[0];

    if (file.type !== "image/png" && file.type !== "image/jpeg") {
      alert("이미지 파일만 가능합니다.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("10MB 이하의 파일만 업로드할 수 있습니다.");
      return;
    }

    const formData = new FormData();

    formData.append("image", file);

    axios
      .patch(
        `${process.env.REACT_APP_LOCAL_SERVER_ADDRESS}/api/v1/user/image`,
        formData,
        {
          withCredentials: true,
        }
      )
      .then((res) => res.data.data)
      .then(({ imageUrl }) => {
        const updateUserInfo: UserInfoInterface = {
          ...userInfo,
          profileImage: imageUrl,
        };
        setUserInfo(updateUserInfo);
      });
  };

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
      {userInfo && (
        <>
          <S.BasicInfoBox>
            <S.ImageInputBox>
              <S.ImageInput
                type="file"
                id="image"
                name="image"
                onChange={handleChangeFile}
                accept="image/png,image/jpeg"
              />
              <S.ImageBox htmlFor="image">
                <S.Image src={userInfo.profileImage} />
                <S.ImageIcon>
                  <EditIcon width={20} height={20} fill={colors.blue._400} />
                </S.ImageIcon>
              </S.ImageBox>
            </S.ImageInputBox>
            <S.NicknameBox onClick={() => navigate("/update/nickname")}>
              <Text text={userInfo.nickname} pointer />
              <ArrowIcon width={20} height={20} fill={colors.blue._400} />
            </S.NicknameBox>
          </S.BasicInfoBox>
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
