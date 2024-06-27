import { useEffect, useRef, useState } from "react";
import Text from "../../components/Common/Text";
import ToggleHeader from "../../components/Coupon/ToggleHeader";
import * as S from "./CouponList.styles";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../recoil/UserRecoil";
import { StoreCouponInterface } from "../../interfaces/CouponInterfaces";
import customAxios from "../../utils/customAxios";
import { useInView } from "react-intersection-observer";
import { PaginationResponse } from "../../interfaces/CommonInterfaces";
import { ReactComponent as PlusButton } from "../../assets/icons/plus-square.svg";
import colors from "../../components/Common/colors";
import { useNavigate } from "react-router-dom";

function CouponList() {
  const user = useRecoilValue(userInfoState);
  const navigate = useNavigate();
  const [couponList, setCouponList] = useState<StoreCouponInterface[]>([]);
  const [finishCouponList, setFinishCouponList] = useState<
    StoreCouponInterface[]
  >([]);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [cursorId, setCursorId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [type, setType] = useState<"PROCEED" | "FINISHED">("PROCEED");

  const handleDisableCoupon = (id: number) => {
    customAxios.post(`/coupon/stop/${id}`).then(() => {
      alert("쿠폰 발급을 종료하였습니다.");
      setCouponList((prevCouponList) => {
        const couponToMove = prevCouponList.find((coupon) => coupon.id === id);
        if (couponToMove) {
          // finishCouponList의 맨 앞에 쿠폰을 추가합니다.
          setFinishCouponList((prevFinishCouponList) => [
            { ...couponToMove },
            ...prevFinishCouponList,
          ]);

          // couponList에서 해당 쿠폰을 제거합니다.
          return prevCouponList.filter((coupon) => coupon.id !== id);
        }
        return prevCouponList;
      });
    });
  };

  const fetchData = () => {
    customAxios
      .get("/coupon")
      .then((res) => res.data.data)
      .then((data: StoreCouponInterface[]) => {
        const updatedData: StoreCouponInterface[] = data.map((coupon) => ({
          ...coupon,
          startAt: new Date(coupon.startAt),
          finishAt: new Date(coupon.finishAt),
        }));
        setCouponList(updatedData);
      });
  };

  const fetchFinishData = () => {
    setIsLoading(true);
    customAxios
      .get(`/coupon/finish?cursor-id=${cursorId ? cursorId : ""}`)
      .then((res) => res.data.data)
      .then((data: PaginationResponse<StoreCouponInterface>) => {
        setCursorId(data.cursorId);
        setHasNext(data.hasNext);
        return data.list;
      })
      .then((data: StoreCouponInterface[]) => {
        const updatedData: StoreCouponInterface[] = data.map((coupon) => ({
          ...coupon,
          startAt: new Date(coupon.startAt),
          finishAt: new Date(coupon.finishAt),
        }));
        setFinishCouponList(updatedData);
      })
      .then(() => setIsLoading(false));
  };

  useEffect(() => {
    if (!user) return;
    fetchData();
  }, [user]);

  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView) return;
    if (!isLoading && hasNext) {
      fetchFinishData();
    }
  }, [inView]);

  return (
    <S.Layout>
      <ToggleHeader type={type} setType={setType} />
      <S.AddBox>
        <S.AddButton onClick={() => navigate("/store/coupon/form")}>
          <PlusButton stroke={colors.blue._500} width={20} height={20} />
          <Text text="쿠폰 추가" marginl={10} pointer />
        </S.AddButton>
      </S.AddBox>
      <S.Main>
        <S.Ul>
          {type === "PROCEED" &&
            couponList.map((coupon, idx) => (
              <CouponBox
                coupon={coupon}
                key={idx}
                handleDisableCoupon={handleDisableCoupon}
                type={type}
              />
            ))}
          {type === "FINISHED" && (
            <>
              {finishCouponList.map((coupon, idx) => (
                <CouponBox
                  coupon={coupon}
                  key={idx}
                  handleDisableCoupon={handleDisableCoupon}
                  type={type}
                />
              ))}

              <S.Observer ref={ref} />
            </>
          )}
        </S.Ul>
      </S.Main>
    </S.Layout>
  );
}

export default CouponList;

interface CouponBoxProps {
  coupon: StoreCouponInterface;
  handleDisableCoupon: (id: number) => void;
  type: "PROCEED" | "FINISHED";
}

const CouponBox = ({ coupon, handleDisableCoupon, type }: CouponBoxProps) => {
  const dateToString = (date: Date) => {
    let str = `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일 ${date.getHours()}시`;
    if (date.getMinutes() > 0) str += ` ${date.getMinutes()}분`;
    return str;
  };

  return (
    <S.Box>
      <S.BoxRow>
        <S.TextBox>
          <Text text="발급 기한" marginr={10} size="0.9rem" weight={500} />
          <Text
            text={`${dateToString(coupon.startAt)} ~ ${dateToString(
              coupon.finishAt
            )}`}
            size="0.9rem"
          />
        </S.TextBox>
      </S.BoxRow>
      <S.BoxRow>
        <S.TextBox>
          <Text text="사용 기한" marginr={10} size="0.9rem" weight={500} />
          <Text
            text={`발급 후 ${coupon.expiredMinute}분 사용 가능`}
            size="0.9rem"
          />
        </S.TextBox>
      </S.BoxRow>
      <S.BoxRow>
        <S.TextBox>
          <Text text="설정개수" marginr={10} size="0.9rem" weight={500} />
          <Text text={`${coupon.quantity}개`} size="0.9rem" />
        </S.TextBox>

        <S.TextBox>
          <Text text="발급개수" marginr={10} size="0.9rem" weight={500} />
          <Text
            text={`${coupon.quantity - coupon.remainQuantity}개`}
            size="0.9rem"
          />
        </S.TextBox>
        <S.TextBox>
          <Text text="사용개수" marginr={10} size="0.9rem" weight={500} />
          <Text text={`${coupon.useQuantity}개`} size="0.9rem" />
        </S.TextBox>
      </S.BoxRow>
      {type === "PROCEED" && (
        <S.BoxBottom>
          <S.Button onClick={() => handleDisableCoupon(coupon.id)}>
            <Text text="발급 종료" pointer size="0.9rem" />
          </S.Button>
        </S.BoxBottom>
      )}
    </S.Box>
  );
};
