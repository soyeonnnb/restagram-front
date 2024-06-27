import { IssueCouponInterface } from "../../interfaces/CouponInterfaces";
import * as S from "./CouponBox.styles";
import { ReactComponent as CouponIcon } from "../../assets/icons/coupon.svg";
import Text from "../Common/Text";
import colors from "../Common/colors";
import { Dispatch, SetStateAction } from "react";

interface CouponBoxProps {
  coupon: IssueCouponInterface;
  setUseCoupon: Dispatch<SetStateAction<IssueCouponInterface | undefined>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

function CouponBox({ coupon, setUseCoupon, setShowModal }: CouponBoxProps) {
  const dateToString = (date: Date) => {
    let str = `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일 ${date.getHours()}시`;
    if (date.getMinutes() > 0) str += ` ${date.getMinutes()}분`;
    return str;
  };

  const handleClick = () => {
    setUseCoupon(coupon);
    setShowModal(true);
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
      </S.MiddleSection>
      <S.RightSection onClick={() => handleClick()}>
        <Text text="사용" pointer />
      </S.RightSection>
    </S.Box>
  );
}
export default CouponBox;
