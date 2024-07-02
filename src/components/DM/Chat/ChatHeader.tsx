import { useEffect, useState } from "react";
import * as S from "./ChatHeader.styles";
import { UserInfoInterface } from "../../../interfaces/UserInterfaces";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/chevron-back.svg";
import { ReactComponent as StoreIcon } from "../../../assets/icons/home.svg";
import Text from "../../Common/Text";
import colors from "../../Common/colors";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfoState } from "../../../recoil/UserRecoil";

interface ChatHeaderProps {
  user: UserInfoInterface;
}

function ChatHeader({ user }: ChatHeaderProps) {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoState);

  const handleNavigateFeed = () => {
    if (!userInfo) return;
    else if (userInfo.id === user.id) return;
    navigate(`/feed/${user.id}`);
  };
  return (
    <S.Layout>
      <S.Button onClick={() => navigate("/dm")}>
        <ArrowIcon width={20} height={20} fill="black" />
      </S.Button>
      <S.Title onClick={() => handleNavigateFeed()}>
        {user.type === "STORE" && (
          <StoreIcon
            className="icon"
            width={15}
            height={15}
            fill={colors.purple._600}
          />
        )}
        <Text text={user.nickname} marginl={10} size="1.1rem" pointer />
      </S.Title>
      <ArrowIcon width={20} height={20} />
    </S.Layout>
  );
}
export default ChatHeader;
