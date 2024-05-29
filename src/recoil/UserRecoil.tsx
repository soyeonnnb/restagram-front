import { atom } from "recoil";
import { UserInfoInterface } from "../interfaces/UserInterfaces";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userInfoState = atom<UserInfoInterface | null>({
  key: "userInfoState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
