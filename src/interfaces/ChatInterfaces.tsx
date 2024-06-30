import { UserInfoInterface } from "./UserInterfaces";

export interface ChatRoomInterface {
  id: number;
  lastMessage: ChatMessageInterface;
  receiver: UserInfoInterface;
  createdAt: Date;
}

export interface ChatMessageInterface {
  id: number;
  type: "IMAGE" | "TALK"; // IMAGE, TALK
  message: string;
  authorId: number;
  time: Date;
}
