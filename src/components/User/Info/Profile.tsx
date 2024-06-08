import { useRecoilValue } from "recoil";
import * as S from "./Profile.styles";
import { userInfoState } from "../../../recoil/UserRecoil";
import {
  FeedCustomerInfoInterface,
  FeedStoreInfoInterface,
} from "../../../interfaces/UserInterfaces";
import Text from "../../Common/Text";

interface ProfileProps {
  userInfo: FeedCustomerInfoInterface | FeedStoreInfoInterface;
}

function Profile({ userInfo }: ProfileProps) {
  const user = useRecoilValue(userInfoState);

  return (
    <S.Layout>
      <S.Box>
        <S.BoxComponent />
        <S.ProfileImage src={userInfo.profileImage} />
        <S.BoxComponent>
          {user && user.id !== userInfo.id && (
            <>
              <S.Button>
                <Text text="팔로우" size="0.9rem" pointer={true} />
              </S.Button>
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
