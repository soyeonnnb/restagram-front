import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import {
  GroupedAddress,
  SearchAddressInterface,
} from "../interfaces/AddressInterfaces";

const { persistAtom } = recoilPersist();

export const addressListState = atom<GroupedAddress | null>({
  key: "addressListState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const searchAddressState = atom<SearchAddressInterface>({
  key: "searchAddressState",
  default: {
    sido: {
      id: 0,
      name: "전체",
    },
    sigg: {
      id: 0,
      name: "전체",
    },
    emd: {
      id: 0,
      name: "전체",
    },
  },
  effects_UNSTABLE: [persistAtom],
});
