import { useNavigate } from "react-router-dom";
import * as S from "./Toggle.styles";
import Text from "../../../Common/Text";
import colors from "../../../Common/colors";
import { ReactComponent as ListIcon } from "../../../../assets/icons/list.svg";
import { useState } from "react";

interface ToggleProps {
  screenWidth: number;
}

function Toggle({ screenWidth }: ToggleProps) {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const navigate = useNavigate();
  return (
    <S.ToggleButtonBox width={screenWidth}>
      <S.ToggleBox show={toggle}>
        <S.ToggleRow onClick={() => navigate("/store/reservation/form/add")}>
          <Text text="예약 가능 날짜 추가" pointer />
        </S.ToggleRow>
        <S.ToggleRow onClick={() => navigate("/store/reservation/form")}>
          <Text text="예약폼 보기" pointer />
        </S.ToggleRow>
      </S.ToggleBox>
      <S.ToggleButton onClick={() => handleToggle()}>
        <ListIcon width={25} height={25} fill={colors.blue._800} />
      </S.ToggleButton>
    </S.ToggleButtonBox>
  );
}

export default Toggle;
