import { StoreInfoInterface } from "./UserInterfaces";

export interface StoreCouponInterface {
  id: number;
  startAt: Date;
  finishAt: Date;
  quantity: number;
  remainQuantity: number;
  useQuantity: number;
  discountMoney: number;
  payMoney: number;
  expiredMinute: number;
  disable: boolean;
}

export interface CustomerCouponInterface {
  id: number;
  startAt: Date;
  finishAt: Date;
  quantity: number;
  remainQuantity: number;
  discountMoney: number;
  payMoney: number;
  expiredMinute: number;
  isIssued: boolean;
}
export interface IssueCouponInterface {
  id: number;
  isUsed: boolean;
  usedAt: Date;
  qrImage: string;
  expiredAt: Date;
  discountMoney: number;
  payMoney: number;
  store: StoreInfoInterface;
}
