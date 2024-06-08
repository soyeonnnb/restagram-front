import * as S from "./UserInfoBox.styles";
import {
  FeedCustomerInfoInterface,
  FeedStoreInfoInterface,
} from "../../../interfaces/UserInterfaces";
import Text from "../../Common/Text";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../recoil/UserRecoil";
import Profile from "./Profile";
import userEvent from "@testing-library/user-event";
import CustomerInfoBox from "./CustomerInfoBox";
import StoreInfoBox from "./StoreInfoBox";

interface UserInfoBoxProps {
  userInfo: FeedCustomerInfoInterface | FeedStoreInfoInterface;
}

function UserInfoBox({ userInfo }: UserInfoBoxProps) {
  const user = useRecoilValue(userInfoState);

  return (
    <S.Layout>
      <Profile userInfo={userInfo} />
      {userInfo?.type === "CUSTOMER" && <CustomerInfoBox userInfo={userInfo} />}
      {userInfo?.type === "STORE" && <StoreInfoBox userInfo={userInfo} />}
      {userInfo?.id === user?.id && (
        <S.Button>
          <Text text="추가" pointer={true} />
        </S.Button>
      )}
    </S.Layout>
  );
}
export default UserInfoBox;