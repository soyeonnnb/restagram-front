import * as S from "./SelectDate.styles";
import { ReactComponent as PrevArrowIcon } from "../../assets/icons/chevron-back.svg";
import { ReactComponent as NextArrowIcon } from "../../assets/icons/chevron-forward.svg";
import colors from "../Common/colors";
import Text from "../Common/Text";

interface SelectDateProps {
  year: number;
  handleDate: (idx: number) => void;
  month: number;
  width: number;
  height: number;
}

function SelectDate({
  year,
  month,
  handleDate,
  width,
  height,
}: SelectDateProps) {
  return (
    <S.Layout width={width} height={height}>
      <PrevArrowIcon
        className="icon"
        width={20}
        height={20}
        fill={colors.black._800}
        onClick={() => handleDate(-1)}
      />
      <S.Box>
        <Text text={`${year}. ${month < 10 ? `0${month}` : month}`} />
      </S.Box>
      <NextArrowIcon
        className="icon"
        width={20}
        height={20}
        fill={colors.black._800}
        onClick={() => handleDate(1)}
      />
    </S.Layout>
  );
}

export default SelectDate;
