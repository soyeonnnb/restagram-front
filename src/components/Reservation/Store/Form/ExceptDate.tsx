import { useEffect } from "react";
import * as S from "./ExceptDate.styles";
import Text from "../../../Common/Text";
import { ReactComponent as CancelButton } from "../../../../assets/icons/circle-x.svg";
import colors from "../../../Common/colors";

interface ExceptDateProps {
  date: Date;
  idx: number;
  onDelete: (idx: number) => void;
}

function ExceptDate({ date, idx, onDelete }: ExceptDateProps) {
  return (
    <S.Layout>
      <Text
        text={`${date.getFullYear() % 2000}. ${
          date.getMonth() + 1
        }. ${date.getDate()}`}
        size="0.9rem"
      />
      <CancelButton
        width={15}
        height={15}
        className="xButton"
        onClick={() => onDelete(idx)}
      />
    </S.Layout>
  );
}
export default ExceptDate;
