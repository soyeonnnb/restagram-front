import { useNavigate } from "react-router-dom";
import { ReactComponent as NotificationIcon } from "../../../assets/icons/notifications.svg";
import * as S from "../Header.styles";
import colors from "../colors";

function NotificationSse() {
  const navigate = useNavigate();

  const ICON_SIZE = 24;
  const ICON_COLOR = colors.blue._800;

  const eventSource = new EventSource(
    `${process.env.REACT_APP_LOCAL_SERVER_ADDRESS}/notification/subscribe`,
    { withCredentials: true }
  );

  eventSource.onopen = () => {
    // 연결 시 할 일
  };

  eventSource.onmessage = async (e) => {
    const res = await e.data;
    const parsedData = JSON.parse(res);

    // 받아오는 data로 할 일
  };

  eventSource.onerror = (e: any) => {
    // 종료 또는 에러 발생 시 할 일
    eventSource.close();

    if (e.error) {
      // 에러 발생 시 할 일
    }

    if (e.target.readyState === EventSource.CLOSED) {
      // 종료 시 할 일
    }
  };

  return (
    <S.Box onClick={() => navigate("/notification")}>
      <NotificationIcon
        className="icon"
        width={ICON_SIZE}
        height={ICON_SIZE}
        fill={ICON_COLOR}
      />
    </S.Box>
  );
}
export default NotificationSse;
