import { ReactComponent as CouponIcon } from "../../assets/icons/coupon.svg";
import { CustomerCouponInterface } from "../../interfaces/CouponInterfaces";
import Text from "../Common/Text";
import colors from "../Common/colors";
import * as S from "./CouponModalBox.styles";

interface CouponModalBoxProps {
  coupon: CustomerCouponInterface;
  handleCouponIssue: (id: number) => void;
}

function CouponModalBox({ coupon, handleCouponIssue }: CouponModalBoxProps) {
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
    <S.Box>
      <S.LeftSection>
        <CouponIcon width={20} height={20} fill={colors.blue._700} />
      </S.LeftSection>
      <S.MiddleSection>
        <S.BoxRow>
          <Text text={`${coupon.discountMoney}원 할인 쿠폰`} weight={500} />
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
          available={(!coupon.isIssued && coupon.remainQuantity > 0).toString()}
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
  );
}
export default CouponModalBox;
