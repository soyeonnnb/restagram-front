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
}
