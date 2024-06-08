import Text from "../../Common/Text";
import * as S from "./Overview.styles";

interface OverviewProps {
  number: number;
  click?: () => void;
  description: string;
}

function Overview({ number, click, description }: OverviewProps) {
  return (
    <S.OverviewBox>
      <Text text={number.toString()} />
      <Text text={description} size="0.8rem" />
    </S.OverviewBox>
  );
}
export default Overview;
