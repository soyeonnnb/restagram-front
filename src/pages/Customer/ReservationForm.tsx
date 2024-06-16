import { Outlet, useNavigate, useParams } from "react-router-dom";
import * as S from "./ReservationForm.styles";
import { useEffect, useState } from "react";
import {
  GroupedReservationForm,
  ReservationFormInterface,
} from "../../interfaces/ReservationInterfaces";
import customAxios from "../../utils/customAxios";
import { StoreInfoInterface } from "../../interfaces/UserInterfaces";
import StoreInfoCard from "../../components/Reservation/Customer/StoreInfoCard";
import Text from "../../components/Common/Text";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale/ko";
import FormList from "../../components/Reservation/Customer/FormList";
import { InputLabel } from "../Login/StoreSignup.styles";
import LabelInput from "../../components/Common/Form/LabelInput";
import { ReactComponent as Icon } from "../../assets/icons/profile.svg";
import colors from "../../components/Common/colors";

function ReservationForm() {
  const navigate = useNavigate();
  const storeId = useParams().storeId;
  const now = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(now);
  const [storeInfo, setStoreInfo] = useState<StoreInfoInterface>();
  const [formList, setFormList] = useState<GroupedReservationForm>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedForm, setSelectedForm] = useState<number | null>(null);
  const [person, setPerson] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [phone, setphone] = useState<string>("");
  const [memo, setMemo] = useState<string>("");

  const fetchData = (dataYear: number, dataMonth: number) => {
    setIsLoading(true);
    customAxios
      .get(
        `/reservation/form/${storeId}?year=${dataYear}&month=${dataMonth + 1}`
      )
      .then((res) => res.data.data)
      .then((data: ReservationFormInterface[]) =>
        setFormList((prevList) => {
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
      .then(() => {
        setIsLoading(false);
      });
  };

  const fetchStoreInfo = () => {
    customAxios
      .get(`/customer/store/${storeId}`)
      .then((res) => res.data.data)
      .then((data: StoreInfoInterface) => {
        setStoreInfo(data);
      });
  };

  useEffect(() => {
    setSelectedForm(null);
    if (isLoading) return;
    if (
      !formList[selectedDate.getFullYear()] ||
      !formList[selectedDate.getFullYear()][selectedDate.getMonth()]
    ) {
      fetchData(selectedDate.getFullYear(), selectedDate.getMonth());
    }
  }, [selectedDate]);

  useEffect(() => {
    fetchStoreInfo();
  }, []);

  const handleSetPerson = (event: any) => {
    const inputValue = event.target.value;
    if (!storeInfo) return;
    if (/^[0-9]*$/.test(inputValue)) {
      if (Number(inputValue) > storeInfo.maxReservationPerson) {
        alert(`최대 ${storeInfo.maxReservationPerson}까지 가능합니다.`);
        return;
      } else {
        setPerson(inputValue);
      }
    }
  };

  const handlePhone = (event: any) => {
    const inputValue = event.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      setphone(inputValue);
    }
  };

  const handleSubmit = () => {
    if (!person || !selectedForm || !name || !phone || !memo) return;
    const body = {
      headCount: person,
      reservationFormId: selectedForm,
      name,
      phone,
      memo,
    };
    customAxios.post("/reservation", body).then(() => navigate("/reservation"));
  };

  function handleKeyDown(event: any) {
    // 숫자 키와 백스페이스, Delete, Tab, 화살표 키 등만 허용
    if (
      !(
        (event.key >= "0" && event.key <= "9") ||
        ["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight"].includes(
          event.key
        )
      )
    ) {
      event.preventDefault();
    }
  }

  return (
    <S.Layout>
      {storeInfo && (
        <>
          <Text text="예약하기" size="1.2rem" />
          {storeInfo && <StoreInfoCard storeInfo={storeInfo} />}
          <FormBox title="인원을 선택해주세요">
            <S.FormBoxRow>
              <Text
                size="0.8rem"
                color={colors.black._100}
                text={`최대 ${storeInfo?.maxReservationPerson}명까지 선택 가능합니다.`}
                marginr={10}
              />
              <S.Input
                type="number"
                min="0"
                max={storeInfo?.maxReservationPerson}
                onChange={(event: any) => handleSetPerson(event)}
                value={person}
                onKeyDown={handleKeyDown}
              />
            </S.FormBoxRow>
          </FormBox>
          <S.Divider />
          <FormBox title="날짜 및 시간을 선택해주세요">
            <>
              <S.DateBox>
                <DatePicker
                  selected={selectedDate}
                  onChange={(update: Date) => setSelectedDate(update)}
                  inline
                  locale={ko}
                  minDate={now}
                  onMonthChange={(update: Date) => {
                    const newDate = new Date(
                      update.getFullYear(),
                      update.getMonth()
                    );
                    if (newDate < now) {
                      setSelectedDate(now);
                    } else {
                      setSelectedDate(newDate);
                    }
                  }}
                />
              </S.DateBox>
              {formList[selectedDate.getFullYear()] &&
                formList[selectedDate.getFullYear()][selectedDate.getMonth()] &&
                formList[selectedDate.getFullYear()][selectedDate.getMonth()][
                  selectedDate.getDate()
                ] && (
                  <FormList
                    list={
                      formList[selectedDate.getFullYear()][
                        selectedDate.getMonth()
                      ][selectedDate.getDate()]
                    }
                    selectedForm={selectedForm}
                    setSelectedForm={setSelectedForm}
                    person={person}
                    tablePerson={storeInfo.tablePerson}
                  />
                )}
            </>
          </FormBox>
          <S.Divider />
          <FormBox title="예약자 정보">
            <S.FormInputUl>
              <S.FormInputLi>
                <Text text="예약자" size="0.9rem" />
                <S.Input
                  full="true"
                  placeholder="이름"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </S.FormInputLi>
              <S.FormInputLi>
                <Text text="연락처" size="0.9rem" />
                <S.Input
                  full="true"
                  placeholder="010-1234-5678"
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(event) => handlePhone(event)}
                />
              </S.FormInputLi>
              <S.FormInputLi>
                <Text text="요청사항" size="0.9rem" />
                <S.Input
                  full="true"
                  placeholder=""
                  type="text"
                  name="memo"
                  value={memo}
                  onChange={(event) => setMemo(event.target.value)}
                />
              </S.FormInputLi>
            </S.FormInputUl>
          </FormBox>
          <S.ButtonBox>
            <S.Button onClick={() => navigate(-1)} color={colors.white._500}>
              <Text text="취소" size="0.9rem" />
            </S.Button>
            <S.Button color={colors.blue._500} onClick={() => handleSubmit()}>
              <Text text="예약" size="0.9rem" color="white" />
            </S.Button>
          </S.ButtonBox>
        </>
      )}
    </S.Layout>
  );
}

export default ReservationForm;

interface FormBoxProps {
  title: string;
  children: JSX.Element;
}

function FormBox({ title, children }: FormBoxProps) {
  return (
    <S.FormBox>
      <S.FormTitle>
        <Icon width={15} height={15} fill="black" />
        <Text text={title} />
      </S.FormTitle>
      <>{children}</>
    </S.FormBox>
  );
}
