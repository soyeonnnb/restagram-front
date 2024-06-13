import { useEffect, useRef, useState } from "react";
import Text from "../../components/Common/Text";
import * as S from "./ReservationFormList.styles";
import { ko } from "date-fns/locale/ko";

import DatePicker from "react-datepicker";
import {
  GroupedReservationForm,
  ReservationFormInterface,
} from "../../interfaces/ReservationInterfaces";
import customAxios from "../../utils/customAxios";
import ReservationFormUl from "../../components/Reservation/Store/Form/ReservationFormUl";
import Toggle from "../../components/Reservation/Store/Form/Toggle";

function ReservationFormList() {
  const [year, setYear] = useState<number | null>(null);
  const [month, setMonth] = useState<number | null>(null);
  const [date, setDate] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [groupedReservationForm, setGroupedReservationForm] =
    useState<GroupedReservationForm>({});

  const fetchData = (dataYear: number, dataMonth: number) => {
    setIsLoading(true);
    customAxios
      .get(`/reservation/form?year=${dataYear}&month=${dataMonth + 1}`)
      .then((res) => res.data.data)
      .then((data: ReservationFormInterface[]) =>
        setGroupedReservationForm((prevList) => {
          const updatedList = { ...prevList };

          if (!updatedList[dataYear]) {
            updatedList[dataYear] = {};
          }

          if (!updatedList[dataYear][dataMonth]) {
            updatedList[dataYear][dataMonth] = {};
          }

          data.forEach((form) => {
            const formDate = new Date(form.date).getDate();

            if (!updatedList[dataYear][dataMonth][formDate]) {
              updatedList[dataYear][dataMonth][formDate] = [];
            }

            updatedList[dataYear][dataMonth][formDate].push(form);
          });

          // 각 날짜의 리스트를 time 필드를 기준으로 정렬
          Object.keys(updatedList[dataYear][dataMonth]).forEach((day) => {
            updatedList[dataYear][dataMonth][Number(day)] = updatedList[
              dataYear
            ][dataMonth][Number(day)].sort((a, b) =>
              a.time.localeCompare(b.time)
            );
          });

          return updatedList;
        })
      )
      .then(() => setIsLoading(false));
  };

  useEffect(() => {
    if (!year || !month || isLoading) return;
    if (!groupedReservationForm[year] || !groupedReservationForm[year][month]) {
      fetchData(year, month);
    }
  }, [year, month]);

  const handleDateUpdate = (update: Date, start?: number) => {
    setYear(update.getFullYear());
    setMonth(update.getMonth());
    setDate(start ? start : update.getDate());
  };

  useEffect(() => {
    const now = new Date();
    setYear(now.getFullYear());
    setMonth(now.getMonth());
    setDate(now.getDate());
    fetchData(now.getFullYear(), now.getMonth());
  }, []);

  const widthRef = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState<number>(468);
  useEffect(() => {
    if (widthRef.current != null) {
      setScreenWidth(widthRef.current.offsetWidth);
    }
  }, [widthRef.current?.offsetWidth]);

  return (
    <>
      <S.Layout ref={widthRef}>
        <Text text="등록된 예약일정 보기" size="1.2rem" weight={500} />
        <S.CalendarBox>
          <DatePicker
            onChange={(update: Date) => handleDateUpdate(update)}
            onMonthChange={(update: Date) => handleDateUpdate(update, 1)}
            dateFormat="yyyy년 MM월 dd일"
            locale={ko}
            className="calendar"
            inline
          />
        </S.CalendarBox>
        {year &&
          month &&
          date &&
          groupedReservationForm[year] &&
          groupedReservationForm[year][month] && (
            <S.DateBox>
              {groupedReservationForm[year][month][date] && (
                <ReservationFormUl
                  list={groupedReservationForm[year][month][date]}
                />
              )}
            </S.DateBox>
          )}
      </S.Layout>
      <Toggle screenWidth={screenWidth} />
    </>
  );
}

export default ReservationFormList;
