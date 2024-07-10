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
  const userInfo = useRecoilValue(userInfoState);
  const [roomList, setRoomList] = useState<ChatRoomInterface[]>([]);

  const [client, changeClient] = useState<StompJs.Client | null>(null);

  const connect = () => {
    if (!userInfo) return;
    // 소켓 연결
    try {
      const clientdata = new StompJs.Client({
        brokerURL: "ws://localhost:8080/ws",
        debug: function (str) {
          // console.log("debug: ", str);
        },
        reconnectDelay: 5000, // 자동 재 연결
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      });
      // 구독
      clientdata.onConnect = function () {
        clientdata.subscribe("/sub/chat/" + userInfo.id, callback);
      };
      clientdata.activate(); // 클라이언트 활성화
      changeClient(clientdata); // 클라이언트 갱신
    } catch (err) {
      console.log(err);
    }
  };

  const disConnect = () => {
    // 연결 끊기
    if (client === null) {
      return;
    }
    client.deactivate();
  };

  // 콜백함수 => ChatList 저장하기
  const callback = function (message: StompJs.Message) {
    if (message.body) {
      const parseData = JSON.parse(message.body) as ChatRoomInterface;
      const newRoom = {
        ...parseData,
        lastMessage: {
          ...parseData.lastMessage,
          time: new Date(parseData.lastMessage.time),
        },
      };
      setRoomList((prevRoomList) => {
        const filteredList = prevRoomList.filter(
          (room) => room.id !== newRoom.id
        );
        return [newRoom, ...filteredList];
      });
    }
  };

  useEffect(() => {
    // 방이 있어야 연결
    if (!userInfo) return;
    // 최초 렌더링 시 , 웹소켓에 연결
    // 우리는 사용자가 방에 입장하자마자 연결 시켜주어야 하기 때문에,,
    connect();
    return () => disConnect();
  }, [userInfo]);

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
