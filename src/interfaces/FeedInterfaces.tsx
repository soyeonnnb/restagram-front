import { StoreInfoInterface, UserInfoInterface } from "./UserInterfaces";

export interface FeedInterface {
  id: number;
  content: string;
  user: UserInfoInterface;
  store: StoreInfoInterface;
  images: FeedImageInterface[];
  time: Date;
  isLike: boolean;
}

export interface FeedImageInterface {
  id: number;
  url: string;
  number: number;
}
