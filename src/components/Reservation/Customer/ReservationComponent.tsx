import { useState } from "react";
import { CustomerReservationInterface } from "../../../interfaces/ReservationInterfaces";
import Text from "../../Common/Text";
import * as S from "./ReservationComponent.styles";
import colors from "../../Common/colors";
import { useNavigate } from "react-router-dom";

interface ReservationComponentProps {
  reservation: CustomerReservationInterface;
  handleDeleteReservation: (id: number, memo: string) => void;
}

function ReservationComponent({
  reservation,
  handleDeleteReservation,
}: ReservationComponentProps) {
  const navigate = useNavigate();
  const date = new Date(reservation.reservation.datetime);
  const nowDate = new Date();
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const [cancelMessage, setCancelMessage] = useState<string>("");

  const handleCancel = () => {
    if (cancelMessage.length < 5) {
      alert("취소 메세지는 최소 5자 이상 작성해야 합니다.");
      return;
    }
    handleDeleteReservation(reservation.reservation.id, cancelMessage);
  };

  const [showDetail, setShowDetail] = useState<boolean>(false);
  return (
    <S.Layout
      color={
        reservation.reservation.state === "ACTIVE"
          ? colors.blue._400
          : colors.black._200
      }
    >
      <S.Header
        color={
          reservation.reservation.state === "ACTIVE"
            ? colors.blue._400
            : colors.black._200
        }
      >
        <S.Div>
          <Text
            text={`${date.getFullYear()}. ${
              date.getMonth() + 1
            }. ${date.getDate()} (${days[date.getDay()]}요일)`}
            color="white"
            weight={500}
            marginr={10}
          />
          <Text
            text={`${
              date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
            }시 ${
              date.getMinutes() < 10
                ? "0" + date.getMinutes()
                : date.getMinutes()
            }분`}
            color="white"
          />
        </S.Div>
        <S.Div onClick={() => navigate(`/feed/${reservation.store.id}`)}>
          <Text text="가게로 가기" size="0.9rem" pointer color="white" />
        </S.Div>
      </S.Header>
      <S.Main>
        <S.Div onClick={() => setShowDetail(!showDetail)}>
          <S.Row>
            <InfoBox
              title="가게"
              content={reservation.store.storeName}
              pointer
            />
            <InfoBox
              title="전화번호"
              content={reservation.store.storePhone}
              pointer
            />
          </S.Row>
          <S.Row>
            <InfoBox
              title="위치"
              content={`${reservation.store.address} ${reservation.store.detailAddress}`}
              pointer
            />
          </S.Row>
          <S.Row>
            <InfoBox
              title="인원수"
              content={`${reservation.reservation.headCount}인`}
            />
          </S.Row>
        </S.Div>
        {showDetail && (
          <>
            <S.Divider
              color={
                reservation.reservation.state === "ACTIVE"
                  ? colors.blue._100
                  : colors.black._50
              }
            />
            <S.Row>
              <InfoBox
                title="예약자 명"
                content={`${reservation.reservation.name}`}
              />
            </S.Row>
            <S.Row>
              <InfoBox
                title="연락처"
                content={`${reservation.reservation.phone}`}
              />
            </S.Row>
            <S.Row>
              <InfoBox
                title="요청사항"
                content={`${reservation.reservation.memo}`}
              />
            </S.Row>
            {reservation.reservation.state === "ACTIVE" && date > nowDate && (
              <S.Row>
                <S.Input
                  type="text"
                  placeholder="취소 메세지 작성"
                  onChange={(event) => setCancelMessage(event.target.value)}
                  value={cancelMessage}
                />
                <S.Button onClick={() => handleCancel()}>
                  <Text text="취소하기" size="0.8rem" pointer />
                </S.Button>
              </S.Row>
            )}
            {reservation.reservation.state !== "ACTIVE" && (
              <S.Row>
                <InfoBox
                  title="취소 메세지"
                  content={`${
                    reservation.reservation.state === "STORE_CANCELED"
                      ? "[가게]"
                      : ""
                  } ${reservation.reservation.cancelMessage}`}
                />
              </S.Row>
            )}
          </>
        )}
      </S.Main>
    </S.Layout>
  );
}
export default ReservationComponent;

const InfoBox = ({
  title,
  content,
  pointer,
}: {
  title: string;
  content: string | number;
  pointer?: boolean;
}) => {
  return (
    <S.Box>
      <Text
        text={title}
        size="0.9rem"
        weight={500}
        marginr={10}
        pointer={pointer}
      />
      <Text text={content.toString()} size="0.9rem" pointer={pointer} />
    </S.Box>
  );
};
