import * as S from "./DMChat.styles";
import React, { useEffect, useState } from "react";
import * as StompJs from "@stomp/stompjs";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../recoil/UserRecoil";

const DMChat = () => {
  const userInfo = useRecoilValue(userInfoState);

  const [client, changeClient] = useState<StompJs.Client | null>(null);
  const connect = () => {
    if (!userInfo) return;
    // 소켓 연결
    try {
      const clientdata = new StompJs.Client({
        brokerURL: "ws://localhost:8080/ws",
        debug: function (str) {
          console.log("debug: ", str);
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
      console.log(message.body);
    }
  };

  useEffect(() => {
    if (!userInfo) return;
    // 최초 렌더링 시 , 웹소켓에 연결
    // 우리는 사용자가 방에 입장하자마자 연결 시켜주어야 하기 때문에,,
    connect();
    return () => disConnect();
  }, [userInfo]);

  return <>DMChat</>;
};

export default DMChat;
