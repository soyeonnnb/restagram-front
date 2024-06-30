import { useEffect, useState } from "react";
import * as S from "./OtherChatBubble.styles";
import { ChatMessageInterface } from "../../../../interfaces/ChatInterfaces";
import { UserInfoInterface } from "../../../../interfaces/UserInterfaces";
import Text from "../../../Common/Text";
import colors from "../../../Common/colors";

interface OtherChatBubbleProps {
  chat: ChatMessageInterface;
  chatter: UserInfoInterface;
}

function OtherChatBubble({ chat, chatter }: OtherChatBubbleProps) {
  const chatDate = `${chat.time.getFullYear()}.${
    chat.time.getMonth() + 1
  }.${chat.time.getDate()}`;
  const chatTime = `${chat.time.getHours() > 12 ? "오후" : "오전"} ${
    chat.time.getHours() > 12 ? chat.time.getHours() - 12 : chat.time.getHours()
  }시 ${
    chat.time.getMinutes() < 10
      ? "0" + chat.time.getMinutes()
      : chat.time.getMinutes()
  }분`;

  return (
    <S.Layout>
      <S.Image
        src={
          chatter.profileImage
            ? chatter.profileImage
            : process.env.REACT_APP_DUMMY_IMAGE
        }
      />
      <S.MessageBox>
        <Text text={chat.message} size="0.9rem" />
      </S.MessageBox>
      <S.TimeBox>
        <Text text={chatDate} size="0.7rem" color={colors.white._800} />
        <Text text={chatTime} size="0.8rem" color={colors.white._900} />
      </S.TimeBox>
    </S.Layout>
  );
}
export default OtherChatBubble;
