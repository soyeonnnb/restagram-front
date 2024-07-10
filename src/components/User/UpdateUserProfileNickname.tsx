import { useRecoilState } from "recoil";
import * as S from "./UpdateUserProfileNickname.styles";
import { userInfoState } from "../../recoil/UserRecoil";
import axios from "axios";
import { UserInfoInterface } from "../../interfaces/UserInterfaces";
import customAxios from "../../utils/customAxios";
import Text from "../Common/Text";
import { ReactComponent as ArrowIcon } from "../../assets/icons/chevron-forward.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/create.svg";
import { useNavigate } from "react-router-dom";
import colors from "../Common/colors";

function UpdateUserProfileNickname() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const navigate = useNavigate();

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

    customAxios
      .patch("/user/image", formData)
      .then((res) => res.data.data)
      .then(({ imageUrl }) => {
        const updateUserInfo: UserInfoInterface = {
          ...userInfo,
          profileImage: imageUrl,
        };
        setUserInfo(updateUserInfo);
      });
  };

  return (
    <S.BasicInfoBox>
      {userInfo && (
        <>
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
        </>
      )}
    </S.BasicInfoBox>
  );
}

export default UpdateUserProfileNickname;
