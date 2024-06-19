import { useState } from "react";
import Text from "../../components/Common/Text";
import * as S from "./ReservationForm.styles";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale/ko";

import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as CancelButton } from "../../assets/icons/circle-x.svg";
import { ReactComponent as EditButton } from "../../assets/icons/create.svg";
import colors from "../../components/Common/colors";
import ExceptDate from "../../components/Reservation/Store/Form/ExceptDate";
import WeeklyFormRow from "../../components/Reservation/Store/Form/WeeklyFormRow";
import customAxios from "../../utils/customAxios";
import { useNavigate } from "react-router-dom";

function ReservationForm() {
  const navigate = useNavigate();

  const today = new Date();
  const [dateRange, setDateRange] = useState<[Date, Date]>([
    new Date(),
    new Date(today.setDate(today.getDate() + 10)),
  ]);

  const [startDate, endDate] = dateRange;
  const [exceptDateList, setExceptDateList] = useState<Date[]>([]);
  const [tablePerson, setTablePerson] = useState<number>(0);
  const [maxReservationPerson, setMaxReservationPerson] = useState<number>(0);
  const [reservationFormList, setReservationFormList] = useState<{
    [week: string]: { time: string; table: number }[];
  }>({
    MONDAY: [],
    TUESDAY: [],
    WEDNESDAY: [],
    THURSDAY: [],
    FRIDAY: [],
    SATURDAY: [],
    SUNDAY: [],
  });

  const [calenderOpen, setCalenderOpen] = useState<boolean>(false);
  const [formHour, setFormHour] = useState<number>(0);
  const [formMinute, setFormMinute] = useState<number>(0);
  const [formTable, setFormTable] = useState<number>(1);
  const [weekSelect, setWeekSelect] = useState<
    { view: string; name: string; selected: boolean }[]
  >([
    { view: "월", name: "MONDAY", selected: false },
    { view: "화", name: "TUESDAY", selected: false },
    { view: "수", name: "WEDNESDAY", selected: false },
    { view: "목", name: "THURSDAY", selected: false },
    { view: "금", name: "FRIDAY", selected: false },
    { view: "토", name: "SATURDAY", selected: false },
    { view: "일", name: "SUNDAY", selected: false },
  ]);

  const handleCloseButton = (toggle: boolean) => {
    setCalenderOpen(toggle);
  };

  const handleExceptDateDelete = (idx: number) => {
    setExceptDateList((exceptDateList) =>
      exceptDateList.filter((_, i) => i !== idx)
    );
  };

  const handleExceptDateSort = (update: Date[]) => {
    update.sort((a: Date, b: Date) => a.valueOf() - b.valueOf());
    setExceptDateList(update);
  };

  const handleNumberInput = (event: any, idx: number, max: number) => {
    const inputValue = event.target.value;
    // 숫자만 허용
    if (/^\d*$/.test(inputValue)) {
      if (Number(inputValue) > max) {
        alert(`최대 ${max}까지 가능합니다.`);
        return;
      }
      if (idx === 1) {
        setTablePerson(Number(inputValue));
      } else if (idx === 2) {
        setMaxReservationPerson(Number(inputValue));
      } else if (idx === 3) {
        setFormHour(Number(inputValue));
      } else if (idx === 4) {
        setFormMinute(Number(inputValue));
      } else if (idx === 5) {
        setFormTable(Number(inputValue));
      }
    }
  };

  const handleFormWeek = (idx: number, select: boolean) => {
    setWeekSelect(
      (prevWeekSelect: { view: string; name: string; selected: boolean }[]) =>
        prevWeekSelect.map(
          (
            week: { view: string; name: string; selected: boolean },
            index: number
          ) => (index === idx ? { ...week, selected: select } : week)
        )
    );
  };

  const handleFormDateDelete = (week: string, idx: number) => {
    setReservationFormList((prevList) => ({
      ...prevList,
      [week]: prevList[week].filter((_, index) => index !== idx),
    }));
  };

  const handleResetForm = () => {
    setFormHour(0);
    setFormMinute(0);
    setFormTable(1);
    setWeekSelect(
      (prevWeekSelect: { view: string; name: string; selected: boolean }[]) =>
        prevWeekSelect.map(
          (
            week: { view: string; name: string; selected: boolean },
            index: number
          ) => ({ ...week, selected: false })
        )
    );
  };

  const handleFormUpdate = () => {
    if (formMinute % 5 !== 0) {
      alert("예약은 5분 단위로 입력 가능합니다.");
      return;
    }
    const newTime = `${formHour < 10 ? "0" + formHour : formHour}:${
      formMinute < 10 ? "0" + formMinute : formMinute
    }:00`;
    weekSelect.forEach((week) => {
      if (week.selected) {
        setReservationFormList((prevList) => {
          const currentReservations = prevList[week.name] || [];

          // 이미 있는지 확인
          if (
            currentReservations.some(
              (reservation) => reservation.time === newTime
            )
          ) {
            return prevList;
          }

          const updatedReservations = [
            ...currentReservations,
            { time: newTime, table: formTable },
          ].sort((a, b) => a.time.localeCompare(b.time));

          return {
            ...prevList,
            [week.name]: updatedReservations,
          };
        });
      }
    });
    handleResetForm();
  };

  const toLocalISOString = (date: Date): string => {
    const tzOffset = date.getTimezoneOffset() * 60000; // 밀리초 단위로 변환
    const localTime = new Date(date.getTime() - tzOffset); // 밀리초 단위로 계산
    const localISOTime = localTime.toISOString().split("T")[0];
    return localISOTime;
  };

  const handleFormAddSubmit = () => {
    const body = {
      startAt: toLocalISOString(startDate),
      finishAt: toLocalISOString(endDate),
      exceptDateList: exceptDateList.map((date) => toLocalISOString(date)),
      tablePerson: tablePerson,
      maxReservationPerson: maxReservationPerson,
      weekListMap: reservationFormList,
    };

    customAxios.post("/reservation/form", body).then(() => {
      alert("예약 폼 생성 완료");
      navigate("/store/reservation");
    });
  };

  return (
    <S.Layout>
      <Text text="예약 추가" size="1.3rem" weight={600} />
      <Text
        text="이전에 추가된 날짜는 시간이 겹칠 시 테이블 수만 추가됩니다."
        size="0.8rem"
        color={colors.red._500}
      />
      <S.Box>
        <Text text="등록 기간" />
        <S.DateBox>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update: [Date, Date]) => {
              setDateRange(update);
            }}
            minDate={new Date()}
            dateFormat="yyyy년 MM월 dd일"
            locale={ko}
            className="startEnd"
            open={calenderOpen}
            onCalendarClose={() => handleCloseButton(false)}
          />
          <S.ClearButton
            show={!calenderOpen}
            className="clearButton"
            onClick={() => handleCloseButton(true)}
          >
            <EditButton width={20} height={20} fill={colors.blue._800} />
          </S.ClearButton>
          <S.ClearButton
            show={calenderOpen}
            className="clearButton"
            onClick={() => handleCloseButton(false)}
          >
            <CancelButton width={20} height={20} fill={colors.blue._800} />
          </S.ClearButton>
        </S.DateBox>
      </S.Box>
      <S.Box>
        <Text text="제외 날짜 추가" />
        <S.DateBox>
          <S.Center>
            <DatePicker
              selectsMultiple={true}
              selectedDates={exceptDateList}
              onChange={(update: Date[]) => handleExceptDateSort(update)}
              locale={ko}
              inline
              minDate={startDate}
              maxDate={endDate}
              clearButtonClassName="clearButton"
              className="exceptCalendar"
            />
          </S.Center>
        </S.DateBox>
        <S.ExceptUl>
          {exceptDateList.map((date: Date, idx: number) => (
            <ExceptDate
              date={date}
              idx={idx}
              onDelete={handleExceptDateDelete}
              key={idx}
            />
          ))}
        </S.ExceptUl>
      </S.Box>
      <S.Ul>
        <S.Li>
          <Text text="테이블 당" size="0.9rem" marginr={10} />
          <S.Input
            type="text"
            min="0"
            max="2000"
            onChange={(event) => handleNumberInput(event, 1, 1000)}
            value={tablePerson}
          />
          <Text text="인" size="0.9rem" />
        </S.Li>
        <S.Li>
          <Text text="1회 최대 예약 인원수" size="0.9rem" marginr={10} />
          <S.Input
            type="text"
            min="0"
            max="2000"
            onChange={(event) => handleNumberInput(event, 2, 1000)}
            value={maxReservationPerson}
          />
          <Text text="인" size="0.9rem" />
        </S.Li>
      </S.Ul>
      <S.Box>
        <Text text="예약 폼" />
        <S.Form>
          <S.FormBox>
            <S.FormBoxUl>
              {weekSelect.map((week, idx) => (
                <S.FormWeek
                  key={idx}
                  selected={week.selected}
                  onClick={() => handleFormWeek(idx, !week.selected)}
                >
                  {week.view}
                </S.FormWeek>
              ))}
            </S.FormBoxUl>
          </S.FormBox>
          <S.FormBox>
            <S.FormInput
              type="text"
              min="0"
              max="23"
              onChange={(event) => handleNumberInput(event, 3, 23)}
              value={formHour}
            />
            <Text text=":" />
            <S.FormInput
              type="text"
              min="0"
              max="59"
              onChange={(event) => handleNumberInput(event, 4, 59)}
              value={formMinute}
            />
            <S.FormInput
              type="text"
              min="1"
              max="1000"
              onChange={(event) => handleNumberInput(event, 5, 1000)}
              value={formTable}
            />
            <Text text="테이블 추가" size="0.9rem" />
          </S.FormBox>
          <S.FormBox>
            <S.FormButton onClick={() => handleFormUpdate()} width={130}>
              <Text text="추가" color="white" pointer size="0.9rem" />
            </S.FormButton>
          </S.FormBox>
        </S.Form>
      </S.Box>
      <S.Box>
        <Text text="예약 폼 생성 현황" />
        <S.ReservationFormUl>
          {Object.keys(reservationFormList).map((week: string, idx: number) => (
            <WeeklyFormRow
              weekView={weekSelect[idx].view}
              week={weekSelect[idx].name}
              list={reservationFormList[week]}
              onDelete={handleFormDateDelete}
            />
          ))}
        </S.ReservationFormUl>
      </S.Box>
      <S.Box>
        <S.FormButtonBox>
          <S.FormButton width={150} onClick={() => handleFormAddSubmit()}>
            <Text text="예약 생성하기" color="white" size="0.9rem" pointer />
          </S.FormButton>
        </S.FormButtonBox>
      </S.Box>
    </S.Layout>
  );
}

export default ReservationForm;
