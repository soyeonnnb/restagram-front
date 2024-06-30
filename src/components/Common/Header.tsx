import { useNavigate } from "react-router-dom";
import * as S from "./Header.styles";
import { ReactComponent as SettingIcon } from "../../assets/icons/settings.svg";
import colors from "./colors";
import LogoImage from "../../assets/images/logo.png";
import NotificationSse from "./Header/NotificationSse";
import DmSse from "./Header/DmSse";

function Header() {
  const navigate = useNavigate();

  const ICON_SIZE = 24;
  const ICON_COLOR = colors.blue._800;

  return (
    <S.Layout>
      <S.LeftBox>
        <S.Image src={LogoImage} />
      </S.LeftBox>
      <S.RightBox>
        {/* <NotificationSse /> */}
        <DmSse />
        <S.Box onClick={() => navigate("/setting")}>
          <SettingIcon
            className="icon"
            width={ICON_SIZE}
            height={ICON_SIZE}
            fill={ICON_COLOR}
          />
        </S.Box>
      </S.RightBox>
    </S.Layout>
  );
}

export default Header;
