import { ChatRoomInterface } from "../../../interfaces/ChatInterfaces";
import Text from "../../Common/Text";
import colors from "../../Common/colors";
import * as S from "./Room.styles";
import { ReactComponent as StoreIcon } from "../../../assets/icons/home.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
interface RoomProps {
  room: ChatRoomInterface;
}

function Room({ room }: RoomProps) {
  const [time, setTime] = useState<string>("");
  const navigate = useNavigate();

  const handleTime = () => {
    const now = new Date();
    const same =
      now.getFullYear() === room.lastMessage.time.getFullYear() &&
      now.getMonth() === room.lastMessage.time.getMonth() &&
      now.getDate() === room.lastMessage.time.getDate();
    let str = "";
    if (!same) {
      str = `${room.lastMessage.time.getHours()}:`;
      if (room.lastMessage.time.getMinutes() > 0)
        str += `${room.lastMessage.time.getMinutes()}`;
    } else {
      str = `${room.lastMessage.time.getFullYear()}. ${
        room.lastMessage.time.getMonth() + 1
      }. ${room.lastMessage.time.getDate()}`;
    }
    setTime(str);
  };

  useEffect(() => {
    handleTime();
  }, [room]);

  return (
    <S.Layout onClick={() => navigate(`/dm/${room.receiver.id}`)}>
      <S.LeftSection>
        <S.Image
          src={
            room.receiver.profileImage
              ? room.receiver.profileImage
              : process.env.REACT_APP_DUMMY_IMAGE
          }
        />
        <S.Main>
          <S.Nickname>
            {room.receiver.type === "STORE" && (
              <StoreIcon
                className="icon"
                width={15}
                height={15}
                fill={colors.purple._600}
              />
            )}
            <Text text={room.receiver.nickname} size="1.1rem" />
          </S.Nickname>
          <S.Message>
            <S.Span>{room.lastMessage.message}</S.Span>
          </S.Message>
        </S.Main>
      </S.LeftSection>
      <S.RightSection>
        <Text text={time} size="0.8rem" color={colors.white._800} />
      </S.RightSection>
    </S.Layout>
  );
}
export default Room;
