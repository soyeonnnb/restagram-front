export interface UserInfoInterface {
  id: number;
  email: string;
  nickname: string;
  profileImage: string;
  type: "CUSTOMER" | "STORE";
}
