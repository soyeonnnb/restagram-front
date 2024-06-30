import * as S from "./MyChatBubble.styles";
import { ChatMessageInterface } from "../../../../interfaces/ChatInterfaces";
import Text from "../../../Common/Text";
import colors from "../../../Common/colors";

interface MyChatBubbleProps {
  chat: ChatMessageInterface;
}

function MyChatBubble({ chat }: MyChatBubbleProps) {
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
      <S.TimeBox>
        <Text text={chatDate} size="0.7rem" color={colors.white._800} />
        <Text text={chatTime} size="0.8rem" color={colors.white._900} />
      </S.TimeBox>
      <S.MessageBox>
        <Text text={chat.message} size="0.9rem" />
      </S.MessageBox>
    </S.Layout>
  );
}
export default MyChatBubble;
