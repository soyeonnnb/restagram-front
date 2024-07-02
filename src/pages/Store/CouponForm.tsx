import { useEffect, useState } from "react";
import Text from "../../components/Common/Text";
import * as S from "./CouponForm.styles";
import LabelInput from "../../components/Common/Form/LabelInput";
import LabelButtonInput from "../../components/Common/Form/LabelButtonInput";
import { useNavigate } from "react-router-dom";
import customAxios from "../../utils/customAxios";
import { start } from "repl";
import colors from "../../components/Common/colors";

function CouponForm() {
  const navigate = useNavigate();
  const now = new Date();

  const [startAt, setStartAt] = useState<Date>(now);
  const [finishAt, setFinishAt] = useState<Date>(
    new Date(now.setDate(now.getDate() + 10))
  );
  const [quantity, setQuantity] = useState<number>(100);
  const [discountMoney, setDiscountMoney] = useState<number>(1000);
  const [payMoney, setPayMoney] = useState<number>(1000);
  const [expiredMinute, setExpiredMinute] = useState<number>(30);

  const [checkStartAtText, setCheckStartAtText] = useState<string>("");
  const [checkFinishAtText, setCheckFinishAtText] = useState<string>("");
  const [checkQuantityText, setCheckQuantityText] = useState<string>("");
  const [checkDiscountMoneyText, setCheckDiscountMoneyText] =
    useState<string>("");
  const [checkPayMoneyText, setCheckPayMoneyText] = useState<string>("");
  const [checkExpiredMinuteText, setCheckExpiredMinuteText] =
    useState<string>("");

  const handleSubmit = async () => {
    let flag: boolean = false;
    if (!startAt) {
      setCheckStartAtText("시작일은 필수입니다.");
      flag = true;
    } else {
      setCheckStartAtText("");
    }
    if (!finishAt) {
      setCheckFinishAtText("종료일은 필수입니다.");
      flag = true;
    } else {
      setCheckFinishAtText("");
    }
    if (startAt && finishAt && startAt > finishAt) {
      setCheckFinishAtText("종료일은 시작일 이후여야 합니다.");
      flag = true;
    }

    if (!quantity) {
      setCheckQuantityText("발급 개수은 필수입니다.");
      flag = true;
    } else if (quantity < 0) {
      setCheckQuantityText("발급 개수는 0 이상이여야 합니다.");
      flag = true;
    } else {
      setCheckQuantityText("");
    }

    if (!discountMoney) {
      setCheckDiscountMoneyText("할인 금액은 필수입니다.");
      flag = true;
    } else if (discountMoney < 0) {
      setCheckDiscountMoneyText("할인 금액는 0원 이상이여야 합니다.");
      flag = true;
    } else {
      setCheckDiscountMoneyText("");
    }

    if (!payMoney) {
      setCheckPayMoneyText("최소 주문 금액은 필수입니다.");
      flag = true;
    } else if (payMoney < 0) {
      setCheckPayMoneyText("최소 주문 금액은 0원 이상이여야 합니다.");
      flag = true;
    } else {
      setCheckPayMoneyText("");
    }

    if (!expiredMinute) {
      setCheckExpiredMinuteText("쿠폰 만료 시간은 필수입니다.");
      flag = true;
    } else if (expiredMinute < 0) {
      setCheckExpiredMinuteText("쿠폰 만료 시간은 0분 이상이여야 합니다.");
      flag = true;
    } else {
      setCheckExpiredMinuteText("");
    }

    if (flag) return;

    const data = {
      startAt,
      finishAt,
      quantity,
      discountMoney,
      payMoney,
      expiredMinute,
    };

    customAxios
      .post(`/coupon`, data)
      .then(() => {
        alert("쿠폰등록 완료");
        navigate("/store/coupon");
      })
      .catch((e) => {
        if (e.response.data.code === "ERROR-001") {
          const responseList = e.response.data.data;
          responseList.forEach((res: { field: string; message: string }) => {
            if (res.field === "startAt") {
              setCheckStartAtText(res.message);
            }
            if (res.field === "finishAt") {
              setCheckFinishAtText(res.message);
            }
            if (res.field === "quantity") {
              setCheckQuantityText(res.message);
            }
            if (res.field === "discountMoney") {
              setCheckDiscountMoneyText(res.message);
            }
            if (res.field === "payMoney") {
              setCheckPayMoneyText(res.message);
            }
            if (res.field === "expiredMinute") {
              setCheckExpiredMinuteText(res.message);
            }
          });
        } else {
          alert(e.response.data.message);
        }
      });
  };

  return (
    <S.Layout>
      <Text text="쿠폰 발급" weight={500} size="1.2rem" />
      <S.Main>
        <S.InputBox>
          <LabelInput
            placeholder=""
            label="시작일"
            type="datetime-local"
            name="startAt"
            setValue={setStartAt}
            verifyText={checkStartAtText}
            min={now.toISOString()}
          />

          <LabelInput
            placeholder=""
            label="종료일"
            type="datetime-local"
            name="finishAt"
            setValue={setFinishAt}
            verifyText={checkFinishAtText}
          />

          <LabelInput
            placeholder=""
            label="발급 개수 (개)"
            type="number"
            name="quantity"
            setValue={setQuantity}
            verifyText={checkQuantityText}
          />

          <LabelInput
            placeholder=""
            label="할인 금액 (원)"
            type="number"
            name="discountMoney"
            setValue={setDiscountMoney}
            verifyText={checkDiscountMoneyText}
          />

          <LabelInput
            placeholder=""
            label="최소 주문 금액 (원)"
            type="number"
            name="payMoney"
            setValue={setPayMoney}
            verifyText={checkPayMoneyText}
          />

          <LabelInput
            placeholder=""
            label="쿠폰 만료 시간 (분)"
            type="number"
            name="expiredMinute"
            setValue={setExpiredMinute}
            verifyText={checkExpiredMinuteText}
          />
        </S.InputBox>
        <S.ButtonBox>
          <S.Button onClick={() => navigate(-1)} color={colors.white._500}>
            <Text text="취소" pointer />
          </S.Button>
          <S.Button onClick={() => handleSubmit()} color={colors.blue._400}>
            <Text text="등록" color="white" pointer />
          </S.Button>
        </S.ButtonBox>
      </S.Main>
    </S.Layout>
  );
}
export default CouponForm;
