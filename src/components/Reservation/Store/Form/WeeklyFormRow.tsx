import Text from "../../../Common/Text";
import * as S from "./WeeklyFormRow.styles";
import { ReactComponent as XButton } from "../../../../assets/icons/circle-x.svg";
import colors from "../../../Common/colors";

interface WeeklyFormRowProps {
  weekView: string;
  week: string;
  list: { time: string; table: number }[];
  onDelete: (week: string, idx: number) => void;
}
function WeeklyFormRow({ week, weekView, list, onDelete }: WeeklyFormRowProps) {
  return (
    <S.Layout>
      <Text text={`${weekView}요일`} />
      <S.Ul>
        {list.map((form, ridx: number) => (
          <S.Form key={ridx}>
            <Text text={`${form.time.slice(0, 5)} ${form.table}인`} />
            <S.Button onClick={() => onDelete(week, ridx)}>
              <XButton width={15} height={15} fill={colors.blue._800} />
            </S.Button>
          </S.Form>
        ))}
      </S.Ul>
    </S.Layout>
  );
}
export default WeeklyFormRow;
