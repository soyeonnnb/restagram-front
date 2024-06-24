import { Dispatch, SetStateAction } from "react";
import * as S from "./CouponModal.styles";
import { CustomerCouponInterface } from "../../interfaces/CouponInterfaces";
import Text from "../Common/Text";
import { ReactComponent as CouponIcon } from "../../assets/icons/coupon.svg";
import colors from "../Common/colors";

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
  const dateToString = (date: Date) => {
    let str = `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일 ${date.getHours()}시`;
    if (date.getMinutes() > 0) str += ` ${date.getMinutes()}분`;
    return str;
  };

  const handleClick = (id: number, avail: boolean) => {
    if (!avail) {
      return;
    }
    handleCouponIssue(id);
  };

  return (
    <S.Layout show={couponModal.toString()}>
      <Text text="쿠폰 리스트" />
      <S.Ul>
        {couponList.map((coupon, idx) => (
          <S.Box key={idx}>
            <S.LeftSection>
              <CouponIcon width={20} height={20} fill={colors.blue._700} />
            </S.LeftSection>
            <S.MiddleSection>
              <S.BoxRow>
                <Text
                  text={`${coupon.discountMoney}원 할인 쿠폰`}
                  weight={500}
                />
              </S.BoxRow>
              <S.BoxRow>
                <Text
                  text={`${coupon.payMoney}원 이상 구매시 사용가능`}
                  size="0.8rem"
                  color={colors.black._300}
                />
              </S.BoxRow>
              <S.BoxRow>
                <Text
                  text={`${dateToString(coupon.finishAt)}까지 발급가능`}
                  size="0.7rem"
                  color={colors.black._300}
                />
              </S.BoxRow>
            </S.MiddleSection>
            <S.RightSection>
              <S.IssueButton
                available={(
                  !coupon.isIssued && coupon.remainQuantity > 0
                ).toString()}
                onClick={() =>
                  handleClick(
                    coupon.id,
                    !coupon.isIssued && coupon.remainQuantity > 0
                  )
                }
              >
                <Text
                  text={`${
                    coupon.isIssued
                      ? "완료"
                      : coupon.remainQuantity === 0
                      ? "종료"
                      : "발급"
                  }`}
                  size="0.9rem"
                  pointer
                />
              </S.IssueButton>
            </S.RightSection>
          </S.Box>
        ))}
      </S.Ul>
      <S.Button onClick={() => setCouponModal(false)}>
        <Text text="닫기" pointer />
      </S.Button>
    </S.Layout>
  );
}
export default CouponModal;
