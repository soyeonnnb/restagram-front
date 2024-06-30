import * as S from "./DMChat.styles";
import React, { useEffect, useRef, useState } from "react";
import * as StompJs from "@stomp/stompjs";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../recoil/UserRecoil";
import { UserInfoInterface } from "../../interfaces/UserInterfaces";
import { useNavigate, useParams } from "react-router-dom";
import customAxios from "../../utils/customAxios";
import {
  ChatMessageInterface,
  ChatRoomInterface,
} from "../../interfaces/ChatInterfaces";
import InputBox from "../../components/DM/Chat/InputBox";
import ChatHeader from "../../components/DM/Chat/ChatHeader";
import ChatList from "../../components/DM/Chat/ChatList";

const DMChat = () => {
  const userInfo = useRecoilValue(userInfoState);
  const navigate = useNavigate();
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const [init, setInit] = useState<boolean>(true);

  const chatterId = Number(useParams().userId);
  const [chatter, setChatter] = useState<UserInfoInterface>();

  const [client, changeClient] = useState<StompJs.Client | null>(null);
  const [roomId, setRoomId] = useState<number>();
  const [chatList, setChatList] = useState<ChatMessageInterface[]>([]);
  const [message, setMessage] = useState<string>("");

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
        clientdata.subscribe("/sub/room/" + roomId, callback);
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
      const parseData = JSON.parse(message.body) as ChatMessageInterface;
      const newMessage = { ...parseData, time: new Date(parseData.time) };
      setChatList((prevChatList) => [...prevChatList, newMessage]);
      if (parseData.authorId === userInfo?.id) {
        scrollEnd();
      }
    }
  };

  const fetchChatList = (rId: number) => {
    customAxios
      .get(`/chat/${rId}`)
      .then((res) => res.data.data)
      .then((data: ChatMessageInterface[]) => {
        const updatedData: ChatMessageInterface[] = data.map((chat) => ({
          ...chat,
          time: new Date(chat.time),
        }));
        setChatList(updatedData);
      });
  };

  const fetchRoom = () => {
    customAxios
      .post(`/chat/room?receiver-id=${chatterId}`)
      .then((res) => res.data.data)
      .then((data: ChatRoomInterface) => {
        setRoomId(data.id);
        setChatter(data.receiver);
        return data.id;
      })
      .then((rId: number) => {
        fetchChatList(rId);
      })
      .catch((e) => {
        if (e.response.data.code === "USER-002") {
          alert("유효하지 않은 사용자입니다.");
          navigate("/dm");
        }
      });
  };

  const handleChat = () => {
    if (message.length === 0 || !client || !userInfo || !roomId) return;
    // 메세지 보내기
    const body = {
      userId: userInfo.id,
      roomId,
      type: "TEXT",
      message,
    };
    client.publish({
      destination: `/pub/chat`,
      body: JSON.stringify(body),
    });
    setMessage("");
  };

  useEffect(() => {
    // 방이 있어야 연결
    if (!roomId) return;
    // 최초 렌더링 시 , 웹소켓에 연결
    // 우리는 사용자가 방에 입장하자마자 연결 시켜주어야 하기 때문에,,
    connect();
    return () => disConnect();
  }, [roomId]);

  useEffect(() => {
    // 먼저 room 가져옴
    if (!chatterId || !userInfo) return;
    fetchRoom();
  }, [userInfo, chatterId]);

  useEffect(() => {
    if (
      init ||
      (chatList.length > 0 &&
        chatList[chatList.length - 1].authorId === userInfo?.id)
    ) {
      setInit(false);
      scrollEnd();
    }
  }, [chatList]);

  const scrollEnd = () => {
    messageEndRef.current?.scrollIntoView();
  };

  return (
    <S.Layout>
      {chatter && <ChatHeader user={chatter} />}
      {chatter && (
        <>
          <ChatList chatList={chatList} chatter={chatter} />
          <S.Observer ref={messageEndRef} />
        </>
      )}
      <InputBox
        setMessage={setMessage}
        handleChat={handleChat}
        message={message}
      />
    </S.Layout>
  );
};

export default DMChat;
