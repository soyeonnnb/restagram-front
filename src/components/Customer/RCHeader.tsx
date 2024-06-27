import { useNavigate } from "react-router-dom";
import * as S from "./RCHeader.styles";
import Text from "../Common/Text";

interface RCHeaderProps {
  type: "reservation" | "coupon";
}

function RCHeader({ type }: RCHeaderProps) {
  const navigate = useNavigate();
  return (
    <S.Layout>
      <S.Box onClick={() => navigate("/reservation")}>
        <S.Circle visible={(type === "reservation").toString()} />
        <Text text="예약 현황" zindex={3} pointer />
      </S.Box>
      <S.Box onClick={() => navigate("/coupon")}>
        <S.Circle visible={(type === "coupon").toString()} />
        <Text text="쿠폰 목록" zindex={3} pointer />
      </S.Box>
    </S.Layout>
  );
}

export default RCHeader;
