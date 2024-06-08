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

export interface FeedListInterface {
  cursorId: number;
  feeds: FeedInterface[];
  hasNext: boolean;
}

export interface UserFeedImageInterface {
  id: number;
  imageUrl: string;
  imageId: number;
}

export interface FeedImageCursorInterface {
  cursorId: number;
  images: UserFeedImageInterface[];
  hasNext: boolean;
}
