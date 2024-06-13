export type StoreReservationInterface = {
  customerId: number;
  customerNickname: string;
  reservation: ReservationInfoInterface;
};

export type ReservationInfoInterface = {
  id: number;
  datetime: Date;
  headCount: number; // 인원수
  name: string; // 예약자명
  phone: string; // 예약자 핸드폰
  memo: string; // 메세지
  state: "ACTIVE" | "USER_CANCELED" | "STORE_CANCELED";
  cancelMessage: string;
};

export type GroupedStoreReservation = {
  [year: number]: {
    [month: number]: {
      [date: number]: StoreReservationInterface[];
    };
  };
};

export type ReservationFormInterface = {
  id: number;
  date: string; // 2024-06-13
  time: string; // 00:00:00
  quantity: number;
  remainQuantity: number;
  tablePerson: number; // 테이블 당 인원수
  maxReservationPerson: number; // 최대 예약 인원수
  state: "ACTIVE" | "DISABLE";
};

export type GroupedReservationForm = {
  [year: number]: {
    [month: number]: {
      [date: number]: ReservationFormInterface[];
    };
  };
};
