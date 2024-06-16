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

interface ProfileProps {
  userInfo: FeedCustomerInfoInterface | FeedStoreInfoInterface;
  setUserInfo: Dispatch<
    SetStateAction<FeedStoreInfoInterface | FeedCustomerInfoInterface | null>
  >;
}

function Profile({ userInfo, setUserInfo }: ProfileProps) {
  const user = useRecoilValue(userInfoState);

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

  useEffect(() => {
    console.log(userInfo);
  }, []);

  return (
    <S.Layout>
      <S.Box>
        <S.BoxComponent />
        <S.ProfileImage src={userInfo.profileImage} />
        <S.BoxComponent>
          {user && user.id !== userInfo.id && (
            <>
              {userInfo.follow && (
                <S.Button onClick={() => handleFollow(false)}>
                  <Text text="팔로우 취소" size="0.9rem" pointer={true} />
                </S.Button>
              )}
              {!userInfo.follow && (
                <S.Button onClick={() => handleFollow(true)}>
                  <Text text="팔로우" size="0.9rem" pointer={true} />
                </S.Button>
              )}
              <S.Button>
                <Text text="DM" size="0.9rem" pointer={true} />
              </S.Button>
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
