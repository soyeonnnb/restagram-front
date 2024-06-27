import { Dispatch, SetStateAction } from "react";
import Text from "../Common/Text";
import * as S from "./ToggleHeader.styles";

interface ToggleHeaderProps {
  type: "PROCEED" | "FINISHED";
  setType: Dispatch<SetStateAction<"PROCEED" | "FINISHED">>;
}

function ToggleHeader({ type, setType }: ToggleHeaderProps) {
  return (
    <S.Layout>
      <S.Box onClick={() => setType("PROCEED")}>
        <S.Circle visible={(type === "PROCEED").toString()} />
        <Text text="쿠폰 목록" zindex={3} pointer />
      </S.Box>
      <S.Box onClick={() => setType("FINISHED")}>
        <S.Circle visible={(type === "FINISHED").toString()} />
        <Text text="종료 쿠폰" zindex={3} pointer />
      </S.Box>
    </S.Layout>
  );
}
export default ToggleHeader;
