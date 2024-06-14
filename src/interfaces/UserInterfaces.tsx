export interface UserInfoInterface {
  id: number;
  email: string;
  nickname: string;
  profileImage: string;
  type: "CUSTOMER" | "STORE";
}

export interface StoreInfoInterface {
  id: number;
  profileImage: string;
  nickname: string;
  storeName: string;
  address: string;
  detailAddress: string;
  storePhone: string;
  maxReservationPerson: number;
  tablePerson: number;
}

export interface FeedUserInfoInterface {
  id: number;
  type: "CUSTOMER" | "STORE";
  nickname: string;
  description: string;
  profileImage: string;
  feedNum: number;
  followingNum: number;
  isFollow: boolean;
}

export interface FeedStoreInfoInterface extends FeedUserInfoInterface {
  type: "STORE";
  address: string;
  detailAddress: string;
  storeName: string;
  storePhone: string;
  reviewNum: number;
  couponNum: number;
}

export interface FeedCustomerInfoInterface extends FeedUserInfoInterface {
  type: "CUSTOMER";
  followerNum: number;
}
