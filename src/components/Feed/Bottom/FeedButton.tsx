import * as S from "./FeedButton.styles";
import { ReactComponent as HeartIcon } from "../../../assets/icons/heart.svg";
import { ReactComponent as HeartOutlineIcon } from "../../../assets/icons/heart-outline.svg";
import { ReactComponent as InfoIcon } from "../../../assets/icons/information-circle.svg";
import { StoreInfoInterface } from "../../../interfaces/UserInterfaces";
import StoreInfoModal from "./StoreInfoModal";
import colors from "../../Common/colors";
import { useState } from "react";

interface FeedButtonProps {
  id: number;
  isLike: boolean;
  handleIsLike: (id: number, isLike: boolean) => void;
  storeInfo: StoreInfoInterface;
}

function FeedButton({ id, isLike, handleIsLike, storeInfo }: FeedButtonProps) {
  const ICON_SIZE = 25;
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <S.Layout>
      <S.ButtonBox>
        <S.Button onClick={() => handleIsLike(id, isLike)}>
          {isLike ? (
            <HeartIcon
              width={ICON_SIZE}
              height={ICON_SIZE}
              fill={`${colors.red._300}`}
            />
          ) : (
            <HeartOutlineIcon
              width={ICON_SIZE}
              height={ICON_SIZE}
              fill={`${colors.red._300}`}
            />
          )}
        </S.Button>
        <S.Button onClick={() => handleShowModal()}>
          <InfoIcon
            width={ICON_SIZE}
            height={ICON_SIZE}
            fill={`${colors.blue._800}`}
          />
        </S.Button>
      </S.ButtonBox>
      {showModal && <StoreInfoModal storeInfo={storeInfo} />}
    </S.Layout>
  );
}
export default FeedButton;
