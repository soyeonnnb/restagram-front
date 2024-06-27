import { Dispatch, SetStateAction } from "react";
import * as S from "./CouponModal.styles";
import { CustomerCouponInterface } from "../../interfaces/CouponInterfaces";
import Text from "../Common/Text";
import CouponModalBox from "./CouponModalBox";

type CouponModalProps = {
  couponModal: boolean;
  setCouponModal: Dispatch<SetStateAction<boolean>>;
  couponList: CustomerCouponInterface[];
  handleCouponIssue: (id: number) => void;
};

function CouponModal({
  couponModal,
  setCouponModal,
  couponList,
  handleCouponIssue,
}: CouponModalProps) {
  return (
    <S.Layout show={couponModal.toString()}>
      <Text text="쿠폰 리스트" />
      <S.Ul>
        {couponList.map((coupon, idx) => (
          <CouponModalBox
            coupon={coupon}
            key={idx}
            handleCouponIssue={handleCouponIssue}
          />
        ))}
      </S.Ul>
      <S.Button onClick={() => setCouponModal(false)}>
        <Text text="닫기" pointer />
      </S.Button>
    </S.Layout>
  );
}
export default CouponModal;
