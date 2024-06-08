import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../recoil/UserRecoil";

function StoreRoute() {
  const user = useRecoilValue(userInfoState);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.type !== "STORE") {
        alert("가게 회원만 접근 가능합니다.");
        navigate(`/`);
      }
    }
  }, [user]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default StoreRoute;
