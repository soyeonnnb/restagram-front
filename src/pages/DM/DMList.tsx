import * as S from "./DMList.styles";
import React, { useEffect, useState } from "react";
import * as StompJs from "@stomp/stompjs";
import { userInfoState } from "../../recoil/UserRecoil";
import { useRecoilValue } from "recoil";

import { ChatRoomInterface } from "../../interfaces/ChatInterfaces";
import customAxios from "../../utils/customAxios";
import Text from "../../components/Common/Text";
import Room from "../../components/DM/List/Room";

const DMList = () => {
  const [roomList, setRoomList] = useState<ChatRoomInterface[]>([]);

  const fetchData = () => {
    customAxios
      .get("/chat/room")
      .then((res) => res.data.data)
      .then((data: ChatRoomInterface[]) => {
        const updatedData: ChatRoomInterface[] = data.map((room) => ({
          ...room,
          lastMessage: {
            ...room.lastMessage,
            time: new Date(room.lastMessage.time),
          },
        }));
        setRoomList(updatedData);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.Layout>
      <S.Header>
        <Text text="채팅방 목록" weight={500} size="1.2rem" />
      </S.Header>
      <S.Ul>
        {roomList.map((room, idx) => (
          <Room room={room} key={idx} />
        ))}
      </S.Ul>
    </S.Layout>
  );
};

export default DMList;
