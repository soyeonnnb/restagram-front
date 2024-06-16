import { useEffect, useState } from "react";
import RCHeader from "../../components/Customer/RCHeader";
import customAxios from "../../utils/customAxios";
import * as S from "./MyReservation.styles";
import { CustomerReservationInterface } from "../../interfaces/ReservationInterfaces";
import { useInView } from "react-intersection-observer";
import CustomerBottom from "../../components/Common/Bottom/CustomerBottom";
import { PaginationResponse } from "../../interfaces/CommonInterfaces";
import ReservationComponent from "../../components/Reservation/Customer/ReservationComponent";

function MyReservation() {
  const [reservationList, setReservationList] = useState<
    CustomerReservationInterface[]
  >([]);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [cursorId, setCursorId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDeleteReservation = (id: number, memo: string) => {
    const body = {
      reservationId: id,
      memo,
      state: "CUSTOMER",
    };

    customAxios
      .patch("/reservation", body)
      .then(() => {
        setReservationList((preList) =>
          preList.map((reservation) =>
            reservation.reservation.id === id
              ? {
                  ...reservation,
                  reservation: {
                    ...reservation.reservation,
                    state: "USER_CANCELED",
                    cancelMessage: memo,
                  },
                }
              : reservation
          )
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const fetchData = () => {
    setIsLoading(true);
    customAxios
      .get(`/reservation/customer?cursor-id=${cursorId ? cursorId : ""}`)
      .then((res) => res.data.data)
      .then((data: PaginationResponse<CustomerReservationInterface>) => {
        setCursorId(data.cursorId);
        setHasNext(data.hasNext);
        const updateList = [...reservationList, ...data.list];
        setReservationList(updateList);
      })
      .then(() => setIsLoading(false));
  };

  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    if (!isLoading && hasNext) {
      fetchData();
    }
  }, [inView]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <RCHeader type="reservation" />
      <S.Layout>
        <S.Ul>
          {reservationList.map((re, idx) => (
            <ReservationComponent
              reservation={re}
              key={idx}
              handleDeleteReservation={handleDeleteReservation}
            />
          ))}
        </S.Ul>
        <S.Observer ref={ref} />
      </S.Layout>
    </>
  );
}

export default MyReservation;
