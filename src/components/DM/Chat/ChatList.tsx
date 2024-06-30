import { useEffect, useState } from "react";
import * as S from "./ChatList.styles";
import { ChatMessageInterface } from "../../../interfaces/ChatInterfaces";
import { userInfoState } from "../../../recoil/UserRecoil";
import { useRecoilValue } from "recoil";
import MyChatBubble from "./Bubble/MyChatBubble";
import OtherChatBubble from "./Bubble/OtherChatBubble";
import { UserInfoInterface } from "../../../interfaces/UserInterfaces";

interface ChatListProps {
  chatList: ChatMessageInterface[];
  chatter: UserInfoInterface;
}

function ChatList({ chatList, chatter }: ChatListProps) {
  const userInfo = useRecoilValue(userInfoState);

  return (
    <S.Layout>
      {userInfo &&
        chatList.map((chat, idx) => (
          <>
            {userInfo.id === chat.authorId && <MyChatBubble chat={chat} />}
            {userInfo.id !== chat.authorId && (
              <OtherChatBubble chat={chat} chatter={chatter} />
            )}
          </>
        ))}
    </S.Layout>
  );
}
export default ChatList;
