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
import Text from "../../components/Common/Text";
import { ReactComponent as ArrowIcon } from "../../assets/icons/chevron-down.svg";
import colors from "../../components/Common/colors";

const DMChat = () => {
  const userInfo = useRecoilValue(userInfoState);
  const navigate = useNavigate();
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  const [init, setInit] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const chatterId = Number(useParams().userId);
  const [chatter, setChatter] = useState<UserInfoInterface>();
  const [client, changeClient] = useState<StompJs.Client | null>(null);
  const [roomId, setRoomId] = useState<number>();
  const [chatList, setChatList] = useState<ChatMessageInterface[]>([]);
  const [message, setMessage] = useState<string>("");

  const connect = () => {
    if (!userInfo) return;
    try {
      const clientdata = new StompJs.Client({
        brokerURL: "ws://localhost:8080/ws",
        debug: function (str) {
          console.log("debug: ", str);
        },
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      });
      clientdata.onConnect = function () {
        clientdata.subscribe("/sub/room/" + roomId, callback);
      };
      clientdata.activate();
      changeClient(clientdata);
    } catch (err) {
      console.log(err);
    }
  };

  const disConnect = () => {
    if (client === null) {
      return;
    }
    client.deactivate();
  };

  const callback = function (message: StompJs.Message) {
    if (message.body) {
      const parseData = JSON.parse(message.body) as ChatMessageInterface;
      const newMessage = { ...parseData, time: new Date(parseData.time) };
      setChatList((prevChatList) => [...prevChatList, newMessage]);
    }
  };

  const fetchChatList = (rId: number) => {
    customAxios
      .post(`/chat/${rId}`)
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
    if (!roomId) return;
    connect();
    return () => disConnect();
  }, [roomId]);

  useEffect(() => {
    if (!chatterId || !userInfo) return;
    fetchRoom();
  }, [userInfo, chatterId]);

  useEffect(() => {
    if (chatList.length === 0) return;
    scrollEnd();
    // if (init || chatList[chatList.length - 1].authorId === userInfo?.id) {
    //   scrollEnd();
    // } else {
    //   setShowModal(true);
    // }
  }, [chatList]);

  const scrollEnd = () => {
    setInit(false);
    setShowModal(false);
    messageEndRef.current?.scrollIntoView();
  };

  useEffect(() => {
    if (!showModal) return;
    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  }, [showModal]);

  return (
    <S.Layout>
      {chatter && <ChatHeader user={chatter} />}
      {chatter && (
        <>
          <ChatList chatList={chatList} chatter={chatter} />
          <S.Observer ref={messageEndRef} />
        </>
      )}
      {showModal && (
        <S.Modal onClick={() => scrollEnd()}>
          <S.ModalBox>
            <ArrowIcon width={15} height={15} />
            <Text text="새 메세지 보기" marginr={10} marginl={10} pointer />
            <ArrowIcon width={15} height={15} fill={colors.black._400} />
          </S.ModalBox>
        </S.Modal>
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
