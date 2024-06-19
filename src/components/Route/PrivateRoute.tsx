import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
// import useGetIsLogin from "../../hooks/useGetIsLogin";
import * as S from "./PrivateRoute.styles";
import Header from "../Common/Header";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../recoil/UserRecoil";
import CustomerBottom from "../Common/Bottom/CustomerBottom";
import StoreBottom from "../Common/Bottom/StoreBottom";

function PrivateRoutes() {
  const location = useLocation();
  const { pathname, search } = location;
  const from = pathname + search;
  const userInfo = useRecoilValue(userInfoState);
  const [type, setType] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState<boolean | null>(null);

  useEffect(() => {
    const loggedIn = userInfo != null;
    if (loggedIn) {
      setType(userInfo.type);
    }
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
      <S.Main>
        <Outlet />
      </S.Main>
      <S.BottomBox>
        {type === "CUSTOMER" && <CustomerBottom />}
        {type === "STORE" && <StoreBottom />}
      </S.BottomBox>
    </S.Layout>
  ) : (
    <Navigate to="/login" replace state={{ from }} />
  );
}

export default PrivateRoutes;
