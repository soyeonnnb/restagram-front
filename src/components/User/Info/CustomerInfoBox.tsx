import { FeedCustomerInfoInterface } from "../../../interfaces/UserInterfaces";
import * as O from "./Overview.styles";
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
