import { useRecoilValue } from "recoil";
import * as S from "./Profile.styles";
import { userInfoState } from "../../../recoil/UserRecoil";
import {
  FeedCustomerInfoInterface,
  FeedStoreInfoInterface,
} from "../../../interfaces/UserInterfaces";
import Text from "../../Common/Text";
import { Dispatch, SetStateAction, useEffect } from "react";
import customAxios from "../../../utils/customAxios";
import { useNavigate } from "react-router-dom";

import { ReactComponent as DoFollowIcon } from "../../../assets/icons/person-add.svg";
import { ReactComponent as CancelFollowIcon } from "../../../assets/icons/person-remove.svg";
import { ReactComponent as DMIcon } from "../../../assets/icons/paper-plane.svg";

import colors from "../../Common/colors";

interface ProfileProps {
  userInfo: FeedCustomerInfoInterface | FeedStoreInfoInterface;
  setUserInfo: Dispatch<
    SetStateAction<FeedStoreInfoInterface | FeedCustomerInfoInterface | null>
  >;
}

function Profile({ userInfo, setUserInfo }: ProfileProps) {
  const user = useRecoilValue(userInfoState);
  const navigate = useNavigate();

  const handleFollow = (follow: boolean) => {
    if (follow) {
      customAxios.post(`/follow/${userInfo.id}`).then(() => {
        const info = { ...userInfo, follow: true };
        setUserInfo(info);
      });
    } else {
      customAxios.delete(`/follow/${userInfo.id}`).then(() => {
        const info = { ...userInfo, follow: false };
        setUserInfo(info);
      });
    }
  };

  return (
    <S.Layout>
      <S.Box>
        <S.BoxComponent />
        <S.ProfileImage src={userInfo.profileImage} />
        <S.BoxComponent>
          {user && user.id !== userInfo.id && (
            <>
              {userInfo.follow && (
                <S.CircleButton
                  onClick={() => handleFollow(false)}
                  color={colors.red._200}
                >
                  <CancelFollowIcon
                    width={15}
                    height={15}
                    fill={colors.red._300}
                  />
                </S.CircleButton>
              )}
              {!userInfo.follow && (
                <S.CircleButton
                  onClick={() => handleFollow(true)}
                  color={colors.blue._400}
                >
                  <DoFollowIcon
                    width={15}
                    height={15}
                    fill={colors.blue._600}
                  />
                </S.CircleButton>
              )}
              <S.CircleButton
                onClick={() => navigate(`/dm/${userInfo.id}`)}
                color={colors.blue._400}
              >
                <DMIcon width={15} height={15} fill={colors.blue._600} />
              </S.CircleButton>
            </>
          )}
        </S.BoxComponent>
      </S.Box>
      <S.TextBox>
        <Text text={userInfo.nickname} weight={500} />
      </S.TextBox>
      <S.TextBox>
        <Text text={userInfo.description} size="0.8rem" weight={400} />
      </S.TextBox>
    </S.Layout>
  );
}
export default Profile;
