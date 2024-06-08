import { FeedCustomerInfoInterface } from "../../../interfaces/UserInterfaces";
import UserInfoBox from "./UserInfoBox";
import * as O from "./Overview.styles";
import Text from "../../Common/Text";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../recoil/UserRecoil";
import Overview from "./Overview";

interface CustomerInfoBoxProps {
  userInfo: FeedCustomerInfoInterface;
}
function CustomerInfoBox({ userInfo }: CustomerInfoBoxProps) {
  return (
    <O.Ul>
      <Overview number={userInfo.feedNum} description="피드수" />
      <Overview number={userInfo.followingNum} description="팔로잉" />
      <Overview number={userInfo.followerNum} description="팔로워" />
    </O.Ul>
  );
}

export default CustomerInfoBox;
