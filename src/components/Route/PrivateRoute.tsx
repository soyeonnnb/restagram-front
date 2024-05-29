import { useLocation } from "react-router";
import { Navigate, Outlet, useSearchParams } from "react-router-dom";
// import useGetIsLogin from "../../hooks/useGetIsLogin";
import * as S from "./PrivateRoute.styles";
import Header from "../Common/Header";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../recoil/UserRecoil";

function PrivateRoutes() {
  const location = useLocation();
  const { pathname, search } = location;
  const from = pathname + search;
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
    <S.Layout>
      <Header />
      <Outlet />
    </S.Layout>
  ) : (
    <Navigate to="/login" replace state={{ from }} />
  );
}

export default PrivateRoutes;
