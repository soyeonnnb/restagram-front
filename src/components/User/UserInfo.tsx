import { UserInfoInterface } from "../../interfaces/UserInterfaces";
import * as S from "./UserInfo.styles";
import { ReactComponent as StoreIcon } from "../../assets/icons/shield-done.svg";
import colors from "../Common/colors";
import { useNavigate } from "react-router-dom";

interface UserInfoProps {
  user: UserInfoInterface;
}

function UserInfo({ user }: UserInfoProps) {
  const navigate = useNavigate();

  const DUMMY_USER_IMAGE = process.env.REACT_APP_DUMMY_IMAGE;

  return (
    <S.Layout>
      <S.Box>
        <S.ProfileImage
          src={user.profileImage ? user.profileImage : DUMMY_USER_IMAGE}
        />
        {user.type === "STORE" && (
          <S.IconBox>
            <StoreIcon width={18} height={18} fill={colors.purple._400} />
          </S.IconBox>
        )}
        <S.Text onClick={() => navigate(`/feed?id=${user.id}`)}>
          {user.nickname}
        </S.Text>
      </S.Box>
    </S.Layout>
  );
}

export default UserInfo;
