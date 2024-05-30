import { useNavigate } from "react-router-dom";
import * as S from "./Header.styles";
import { ReactComponent as NotificationIcon } from "../../assets/icons/notifications.svg";
import { ReactComponent as DMIcon } from "../../assets/icons/paper-plane.svg";
import { ReactComponent as SettingIcon } from "../../assets/icons/settings.svg";
import colors from "./colors";
import LogoImage from "../../assets/images/logo.png";

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
        <S.Box onClick={() => navigate("/notification")}>
          <NotificationIcon
            className="icon"
            width={ICON_SIZE}
            height={ICON_SIZE}
            fill={ICON_COLOR}
          />
        </S.Box>
        <S.Box onClick={() => navigate("/dm")}>
          <DMIcon
            className="icon"
            width={ICON_SIZE}
            height={ICON_SIZE}
            fill={ICON_COLOR}
          />
        </S.Box>
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
