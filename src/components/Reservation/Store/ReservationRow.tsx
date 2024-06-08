import { useState } from "react";
import { StoreReservationInterface } from "../../../interfaces/ReservationInterfaces";
import Text from "../../Common/Text";
import colors from "../../Common/colors";
import * as S from "./ReservationRow.styles";
import Input from "../../Common/Form/Input";
import customAxios from "../../../utils/customAxios";

interface ReservationRowProps {
  re: StoreReservationInterface;
  updateReservationStatue: (
    year: number,
    month: number,
    date: number,
    id: number,
    cancelMessage: string,
    newStatus: "ACTIVE" | "USER_CANCELED" | "STORE_CANCELED"
  ) => void;
}

function ReservationRow({ re, updateReservationStatue }: ReservationRowProps) {
  const datetime = new Date(re.reservation.datetime);
  const [modal, setModal] = useState<boolean>(false);
  const [cancelMessage, setCancelMessage] = useState<string>("");

  const handleModal = () => {
    setModal(!modal);
  };

  const handleCancel = () => {
    if (cancelMessage.length < 4) {
      alert("최소 4글자 이상 작성해주세요");
      return;
    }
    const body = {
      reservationId: re.reservation.id,
      memo: cancelMessage,
      state: "STORE",
    };
    customAxios.patch("/reservation", body).then(() => {
      updateReservationStatue(
        datetime.getFullYear(),
        datetime.getMonth() + 1,
        datetime.getDate(),
        re.reservation.id,
        cancelMessage,
        "STORE_CANCELED"
      );
    });
  };
  const isFutureReservation = datetime > new Date();
  return (
    <S.Layout canceled={re.reservation.state !== "ACTIVE"}>
      <S.Row>
        <S.Box>
          <Text
            text="날짜"
            color={colors.black._800}
            size="0.9rem"
            weight={500}
          />
          <Text
            text={`${
              datetime.getMonth() + 1
            }월 ${datetime.getDate()}일 ${datetime.getHours()}시 ${datetime.getMinutes()}분`}
            color={colors.black._500}
            size="0.9rem"
          />
        </S.Box>
        <S.Box>
          <Text
            text="인원 "
            color={colors.black._800}
            size="0.9rem"
            weight={500}
          />
          <Text
            text={`${re.reservation.headCount}명`}
            color={colors.black._500}
            size="0.9rem"
          />
        </S.Box>
      </S.Row>
      <S.Row>
        <S.Box>
          <Text
            text="예약자명"
            color={colors.black._800}
            size="0.9rem"
            weight={500}
          />
          <Text
            text={re.reservation.name}
            color={colors.black._500}
            size="0.9rem"
          />
        </S.Box>
        <S.Box>
          <Text
            text="전화번호 "
            color={colors.black._800}
            size="0.9rem"
            weight={500}
          />
          <Text
            text={re.reservation.phone}
            color={colors.black._500}
            size="0.9rem"
          />
        </S.Box>
      </S.Row>
      <S.Row>
        <S.Box fullwidth="true">
          <Text
            text="요청사항"
            color={colors.black._800}
            size="0.9rem"
            weight={500}
          />
          <Text
            text={re.reservation.memo}
            color={colors.black._500}
            size="0.9rem"
          />
        </S.Box>
      </S.Row>
      {re.reservation.state !== "ACTIVE" && (
        <S.Row>
          <S.Box fullwidth="true">
            <Text
              text="취소 메세지"
              color={colors.black._800}
              size="0.9rem"
              weight={500}
            />
            {re.reservation.state === "STORE_CANCELED" && (
              <S.Badge color={colors.blue._400}>
                <Text text="가게" size="0.7rem" color="white" />
              </S.Badge>
            )}
            {re.reservation.state === "USER_CANCELED" && (
              <S.Badge color={colors.red._300}>
                <Text text="회원" size="0.7rem" color="white" />
              </S.Badge>
            )}
            <Text
              text={re.reservation.cancelMessage}
              color={colors.black._500}
              size="0.9rem"
            />
          </S.Box>
        </S.Row>
      )}
      {re.reservation.state === "ACTIVE" && isFutureReservation && (
        <>
          <S.Row>
            <S.Button onClick={() => handleModal()}>
              <Text text="예약 취소" pointer size="0.9rem" />
            </S.Button>
          </S.Row>
          <S.Modal show={modal}>
            <Input
              placeholder="예약 취소 메세지"
              type="text"
              name="cancelMessage"
              setValue={setCancelMessage}
            />
            <S.ModalButton onClick={() => handleCancel()}>
              <Text text="전송" pointer />
            </S.ModalButton>
          </S.Modal>
        </>
      )}
    </S.Layout>
  );
}

export default ReservationRow;
