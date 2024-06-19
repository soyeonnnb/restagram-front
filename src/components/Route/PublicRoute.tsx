import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import * as S from "./PublicRoute.styles";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../recoil/UserRecoil";

function PublicRoute() {
  const userInfo = useRecoilValue(userInfoState);
  const [isLogin, setIsLogin] = useState<boolean | null>(null);

  useEffect(() => {
    const loggedIn = userInfo !== null;
    if (isLogin !== loggedIn) {
      setIsLogin(loggedIn);
    }
  }, [userInfo, isLogin]);

  if (isLogin === null) {
    return null;
  }

  return isLogin ? (
    <Navigate to="/" replace />
  ) : (
    <S.Layout>
      <Outlet />
    </S.Layout>
  );
}

export default PublicRoute;
