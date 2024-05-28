import { useLocation } from "react-router";
import { Navigate, Outlet, useSearchParams } from "react-router-dom";
// import useGetIsLogin from "../../hooks/useGetIsLogin";
import * as S from "./PrivateRoute.styles";
import Header from "../Common/Header";
import { useEffect, useState } from "react";

function PrivateRoutes() {
  const location = useLocation();
  const { pathname, search } = location;
  const from = pathname + search;
  const [isLogin, setIsLogin] = useState<boolean>(false);

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
