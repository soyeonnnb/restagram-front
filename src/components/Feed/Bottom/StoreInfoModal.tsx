import { useNavigate } from "react-router-dom";
import { StoreInfoInterface } from "../../../interfaces/UserInterfaces";
import * as S from "./StoreInfoModal.styles";

interface StoreInfoModalProps {
  storeInfo: StoreInfoInterface;
}

function StoreInfoModal({ storeInfo }: StoreInfoModalProps) {
  const navigate = useNavigate();

  return (
    <S.Layout>
      <S.List>
        <S.Row>
          <S.BoldText>가게명</S.BoldText>
          <S.Text>{storeInfo.storeName}</S.Text>
        </S.Row>
        <S.Row>
          <S.BoldText>주소</S.BoldText>
          <S.Text>
            {storeInfo.address} {storeInfo.detailAddress}
          </S.Text>
        </S.Row>
        <S.Row>
          <S.BoldText>전화번호</S.BoldText>
          <S.Text>{storeInfo.storePhone}</S.Text>
        </S.Row>
        <S.Box>
          <S.Button onClick={() => navigate(`/feed/${storeInfo.id}`)}>
            <S.ButtonText>가게 피드</S.ButtonText>
          </S.Button>
        </S.Box>
      </S.List>
    </S.Layout>
  );
}
export default StoreInfoModal;
