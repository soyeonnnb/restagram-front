import { useEffect, useRef, useState } from "react";
import * as S from "./ReservationList.styles";
import Text from "../../components/Common/Text";
import SelectDate from "../../components/Store/SelectDate";
import {
  GroupedStoreReservation,
  StoreReservationInterface,
} from "../../interfaces/ReservationInterfaces";
import customAxios from "../../utils/customAxios";
import ReservationUl from "../../components/Reservation/Store/ReservationUl";
import Toggle from "../../components/Reservation/Store/Form/Toggle";

function ReservationList() {
  const [cancelFilter, setCancelFilter] = useState<boolean>(false);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [totalReservationList, setTotalReservationList] =
    useState<GroupedStoreReservation>({});

  const fetchData = () => {
    customAxios
      .get(`/reservation/store?year=${year}&month=${month}`)
      .then((res) => res.data.data)
      .then((data: StoreReservationInterface[]) =>
        setTotalReservationList((prevList) => {
          const updatedList = { ...prevList };

          if (!updatedList[year]) {
            updatedList[year] = {};
          }

          if (!updatedList[year][month]) {
            updatedList[year][month] = {};
          }

          data.forEach((reservation) => {
            const date = new Date(reservation.reservation.datetime).getDate();

            if (!updatedList[year][month][date]) {
              updatedList[year][month][date] = [];
            }

            updatedList[year][month][date].push(reservation);
          });

          return updatedList;
        })
      );
  };

  const updateReservationStatus = (
    year: number,
    month: number,
    date: number,
    id: number,
    cancelMessage: string,
    newStatus: "ACTIVE" | "USER_CANCELED" | "STORE_CANCELED"
  ) => {
    setTotalReservationList((prevList: GroupedStoreReservation) => {
      const dayReservations = prevList[year]?.[month]?.[date] ?? [];

      const updatedDayReservations = dayReservations.map((reservation) =>
        reservation.reservation.id === id
          ? {
              ...reservation,
              reservation: {
                ...reservation.reservation,
                state: newStatus,
                cancelMessage,
              },
            }
          : reservation
      );

      return {
        ...prevList,
        [year]: {
          ...prevList[year],
          [month]: {
            ...prevList[year]?.[month],
            [date]: updatedDayReservations,
          },
        },
      };
    });
  };

  useEffect(() => {
    if (!totalReservationList[year] || !totalReservationList[year][month]) {
      fetchData();
    }
  }, [year, month]);

  useEffect(() => {
    if (year !== null && month !== null) {
      fetchData();
    }
  }, []);

  const handleDate = (idx: number) => {
    if (idx === -1) {
      let newMonth = month - 1;
      if (newMonth === 0) {
        setMonth(12);
        setYear(year - 1);
      } else {
        setMonth(newMonth);
      }
    } else if (idx === 1) {
      let newMonth = month + 1;
      if (newMonth === 13) {
        setMonth(1);
        setYear(year + 1);
      } else {
        setMonth(newMonth);
      }
    }
  };

  const handleCancel = (isCancel: boolean) => {
    setCancelFilter(isCancel);
  };

  const widthRef = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState<number>(468);
  useEffect(() => {
    if (widthRef.current != null) {
      setScreenWidth(widthRef.current.offsetWidth);
    }
  }, [widthRef.current?.offsetWidth]);

  return (
    <S.Layout ref={widthRef}>
      <S.Header width={screenWidth}>
        <S.HeaderBox onClick={() => handleCancel(false)}>
          <Text text="확정된 예약만" pointer />
        </S.HeaderBox>
        <S.HeaderBox onClick={() => handleCancel(true)}>
          <Text text="전체" pointer />
        </S.HeaderBox>
      </S.Header>
      <S.Main>
        <SelectDate
          year={year}
          month={month}
          handleDate={handleDate}
          width={screenWidth}
          height={115}
        />
        <ReservationUl
          year={year}
          month={month}
          list={totalReservationList[year]?.[month] ?? {}}
          cancelFilter={cancelFilter}
          updateReservationStatus={updateReservationStatus}
        />
      </S.Main>
      <Toggle screenWidth={screenWidth} />
    </S.Layout>
  );
}

export default ReservationList;
