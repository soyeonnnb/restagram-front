import { useEffect } from "react";
import { ReservationFormInterface } from "../../../../interfaces/ReservationInterfaces";
import Text from "../../../Common/Text";
import * as S from "./ReservationFormUl.styles";
import colors from "../../../Common/colors";

interface ReservationFormUl {
  list: ReservationFormInterface[];
}

function ReservationFormUl({ list }: ReservationFormUl) {
  return (
    <S.Ul>
      {list.map((form: ReservationFormInterface, idx: number) => (
        <S.Row key={idx}>
          <S.HeaderBox>
            <S.StateBox state={form.state}>
              <Text size="0.8rem" text={`${form.state}`} color="white" />
            </S.StateBox>
            <Text
              size="1.1rem"
              text={`${form.time.split(":")[0]}시 ${form.time.split(":")[1]}분`}
            />
          </S.HeaderBox>
          <S.InfoBox>
            <Text
              size="0.9rem"
              text={`남은 수량/총 수량  ${form.remainQuantity}/${form.quantity}`}
            />
          </S.InfoBox>
        </S.Row>
      ))}
    </S.Ul>
  );
}

export default ReservationFormUl;
