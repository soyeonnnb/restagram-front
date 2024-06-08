import { useEffect } from "react";
import {
  GroupedStoreReservation,
  StoreReservationInterface,
} from "../../../interfaces/ReservationInterfaces";
import * as S from "./ReservationUl.styles";
import Text from "../../Common/Text";
import ReservationRow from "./ReservationRow";

interface ReservationUlProps {
  year: number;
  month: number;
  list: {
    [date: number]: StoreReservationInterface[];
  };
  cancelFilter: boolean;
  updateReservationStatus: (
    year: number,
    month: number,
    date: number,
    id: number,
    cancelMessage: string,
    newStatus: "ACTIVE" | "USER_CANCELED" | "STORE_CANCELED"
  ) => void;
}

function ReservationUl({
  year,
  month,
  list,
  cancelFilter,
  updateReservationStatus,
}: ReservationUlProps) {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  useEffect(() => {}, [list]);

  return (
    <S.Layout>
      {Object.keys(list).map((date) => (
        <S.Box key={date}>
          <S.TextBox>
            <Text
              text={`${year}년 ${month}월 ${date}일 ${
                days[new Date(year, month - 1, Number(date)).getDay()]
              }요일`}
              weight={600}
            />
          </S.TextBox>
          <S.Ul>
            {list[Number(date)].map(
              (reservation: StoreReservationInterface, idx: number) => (
                <S.RowBox key={idx}>
                  {!cancelFilter &&
                  reservation.reservation.state !== "ACTIVE" ? (
                    <></>
                  ) : (
                    <ReservationRow
                      re={reservation}
                      updateReservationStatue={updateReservationStatus}
                    />
                  )}
                </S.RowBox>
              )
            )}
          </S.Ul>
        </S.Box>
      ))}
    </S.Layout>
  );
}

export default ReservationUl;
