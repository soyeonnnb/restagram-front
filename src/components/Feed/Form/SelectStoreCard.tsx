import { useState } from "react";
import { StoreInfoInterface } from "../../../interfaces/UserInterfaces";
import Text from "../../Common/Text";
import * as S from "./SelectStoreCard.styles";

interface StoreInfoProps {
  store: StoreInfoInterface;
  handleSelect?: (store: StoreInfoInterface) => void;
  view: boolean;
}

function SelectStoreCard({ store, handleSelect, view }: StoreInfoProps) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <S.Info>
      <S.InfoHeader onClick={() => setShow(!show)}>
        <S.ProfileImage src={store.profileImage} />
        <S.InfoBox>
          <Text text={store.storeName} marginr={5} weight={500} pointer />
          <Text text={store.nickname} size="0.8rem" pointer />
        </S.InfoBox>
      </S.InfoHeader>
      {(view || show) && (
        <S.InfoMain>
          <S.InfoUl>
            <S.InfoLi>
              <Text text="주소" size="0.9rem" weight={500} marginr={5} />
              <Text text={`${store.address} ${store.detailAddress}`} />
            </S.InfoLi>
            <S.InfoLi>
              <Text text="전화번호" size="0.9rem" weight={500} marginr={5} />
              <Text text={`${store.storePhone}`} />
            </S.InfoLi>
          </S.InfoUl>
          {handleSelect && (
            <S.ButtonBox>
              <S.Button onClick={() => handleSelect(store)}>
                <Text text="가게 선택" pointer />
              </S.Button>
            </S.ButtonBox>
          )}
        </S.InfoMain>
      )}
    </S.Info>
  );
}

export default SelectStoreCard;
