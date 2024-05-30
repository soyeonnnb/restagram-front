import { useNavigate } from "react-router-dom";
import * as S from "./RCHeader.styles";

interface RCHeaderProps {
  type: "reservation" | "coupon";
}

function RCHeader({ type }: RCHeaderProps) {
  const navigate = useNavigate();
  return (
    <S.Layout>
      <S.Box onClick={() => navigate("/reservation")}>
        <S.Text>예약현황</S.Text>
      </S.Box>
      <S.Box onClick={() => navigate("/coupon")}>
        <S.Text>쿠폰</S.Text>
      </S.Box>
    </S.Layout>
  );
}

export default RCHeader;
