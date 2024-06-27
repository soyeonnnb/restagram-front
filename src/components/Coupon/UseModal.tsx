import * as S from "./UseModal.styles";
import { ReactComponent as XIcon } from "../../assets/icons/circle-x.svg";
import Text from "../Common/Text";
import colors from "../Common/colors";
import { IssueCouponInterface } from "../../interfaces/CouponInterfaces";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import customAxios from "../../utils/customAxios";
import { useNavigate } from "react-router-dom";

interface UseModalProps {
  useCoupon: IssueCouponInterface | undefined;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  updateList: (id: number) => void;
}

function UseModal({ useCoupon, setShowModal, updateList }: UseModalProps) {
  const [isUse, setIsUse] = useState<boolean>(false);

  const handleUse = () => {
    if (!useCoupon) return;
    customAxios
      .post(`/coupon/issue/${useCoupon.id}`)
      .then(() => {
        setIsUse(true);
        updateList(useCoupon.id);
      })
      .catch((e) => {
        if (e.response.status === 400) {
          alert(e.response.data.message);
          setShowModal(false);
        }
      });
  };

  return (
    <S.Layout>
      <S.Box>
        <S.Header>
          <S.CloseBox></S.CloseBox>
          <Text text="쿠폰 사용" weight={500} />
          <S.CloseBox onClick={() => setShowModal(false)}>
            <XIcon width={20} height={20} fill={colors.black._200} />
          </S.CloseBox>
        </S.Header>
        <S.Main>
          {useCoupon && (
            <S.StoreInfoBox>
              <S.StoreInfoBoxRow>
                <Text text="가게명" weight={500} size="0.9rem" marginr={10} />
                <Text text={useCoupon.store.storeName} />
              </S.StoreInfoBoxRow>
              <S.StoreInfoBoxRow>
                <Text
                  text="가게 위치"
                  weight={500}
                  size="0.9rem"
                  marginr={10}
                />
                <Text
                  text={`${useCoupon.store.address} ${useCoupon.store.detailAddress}`}
                />
              </S.StoreInfoBoxRow>
              <S.StoreInfoBoxRow>
                <Text text="전화번호" weight={500} size="0.9rem" marginr={10} />
                <Text text={useCoupon.store.storePhone} />
              </S.StoreInfoBoxRow>
              <S.StoreInfoBoxRow>
                <Text
                  text={useCoupon.payMoney.toString()}
                  color={colors.blue._500}
                  weight={500}
                  size="1.1rem"
                />
                <Text text="원 이상 구매 시" marginr={10} />
                <Text
                  text={useCoupon.discountMoney.toString()}
                  color={colors.blue._500}
                  weight={500}
                  size="1.1rem"
                />
                <Text text="원 할인 쿠폰" />
              </S.StoreInfoBoxRow>
            </S.StoreInfoBox>
          )}
        </S.Main>
        {!isUse && (
          <S.Bottom onClick={() => handleUse()}>
            <Text
              text="쿠폰을 사용하시겠습니까?"
              size="0.8rem"
              color={colors.red._400}
            />
            <S.Button color={colors.blue._400} pointer="true">
              <Text text="사용하기" pointer color="white" />
            </S.Button>
          </S.Bottom>
        )}
        {isUse && (
          <S.Bottom>
            <S.Button color={colors.white._400}>
              <Text text="사용완료" />
            </S.Button>
          </S.Bottom>
        )}
      </S.Box>
    </S.Layout>
  );
}
export default UseModal;
