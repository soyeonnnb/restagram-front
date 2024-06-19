import * as S from "./UserInfoBox.styles";
import {
  FeedCustomerInfoInterface,
  FeedStoreInfoInterface,
} from "../../../interfaces/UserInterfaces";
import Text from "../../Common/Text";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../recoil/UserRecoil";
import Profile from "./Profile";
import CustomerInfoBox from "./CustomerInfoBox";
import StoreInfoBox from "./StoreInfoBox";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

interface UserInfoBoxProps {
  userInfo: FeedCustomerInfoInterface | FeedStoreInfoInterface;
  setUserInfo: Dispatch<
    SetStateAction<FeedStoreInfoInterface | FeedCustomerInfoInterface | null>
  >;
}

function UserInfoBox({ userInfo, setUserInfo }: UserInfoBoxProps) {
  const user = useRecoilValue(userInfoState);
  const navigate = useNavigate();

  return (
    <S.Layout>
      <Profile userInfo={userInfo} setUserInfo={setUserInfo} />
      {userInfo?.type === "CUSTOMER" && <CustomerInfoBox userInfo={userInfo} />}
      {userInfo?.type === "STORE" && <StoreInfoBox userInfo={userInfo} />}
      {userInfo?.id === user?.id && (
        <S.Button onClick={() => navigate("/feed/newFeed")}>
          <Text text="추가" pointer={true} />
        </S.Button>
      )}
    </S.Layout>
  );
}
export default UserInfoBox;
