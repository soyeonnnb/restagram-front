import { Outlet, useNavigate } from "react-router-dom";
import CustomerBottom from "../Common/Bottom/CustomerBottom";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../recoil/UserRecoil";
import { useEffect } from "react";

function CustomerRoute() {
  const user = useRecoilValue(userInfoState);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.type !== "CUSTOMER") {
        alert("일반 회원만 접근 가능합니다.");
        navigate(`/feed/${user.id}`);
      }
    }
  }, [user]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default CustomerRoute;
