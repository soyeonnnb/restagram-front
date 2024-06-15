import { UserInfoInterface } from "../../../interfaces/UserInterfaces";
import UserInfo from "../UserInfo";
import * as S from "./UserInfoList.styles";

interface UserInfoListProps {
  list: UserInfoInterface[];
}

function UserInfoList({ list }: UserInfoListProps) {
  return (
    <S.Layout>
      {list.map((user, idx) => (
        <UserInfo user={user} key={idx} />
      ))}
    </S.Layout>
  );
}
export default UserInfoList;
