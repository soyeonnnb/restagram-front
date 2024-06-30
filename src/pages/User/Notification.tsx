import Text from "../../components/Common/Text";
import * as S from "./Notification.styles";

function Notification() {
  return (
    <S.Layout>
      <S.Title>
        <Text text="알림" size="1.2rem" weight={500} />
      </S.Title>
    </S.Layout>
  );
}

export default Notification;
