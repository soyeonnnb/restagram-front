import RCHeader from "../../components/Customer/RCHeader";
import customAxios from "../../utils/customAxios";
import * as S from "./MyReservation.styles";

function MyReservation() {
  const handleReservation = () => {
    const body = {
      headCount: 4,
      reservationFormId: 23,
      name: "소연",
      phone: "01098765432",
      memo: "조으네요",
    };

    customAxios
      .post("/reservation", body)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleDeleteReservation = () => {
    const body = {
      reservationId: 49,
      memo: "그냥 취소할래요",
      state: "CUSTOMER",
    };

    customAxios
      .patch("/reservation", body)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <RCHeader type="reservation" />
      <S.Layout>
        MyReservation
        <S.Button onClick={() => handleReservation()}>
          예약 테스트 버튼
        </S.Button>
        <S.Button onClick={() => handleDeleteReservation()}>
          예약 삭제 테스트 버튼
        </S.Button>
      </S.Layout>
    </>
  );
}

export default MyReservation;
