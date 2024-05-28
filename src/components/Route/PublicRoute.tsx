import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { Outlet } from "react-router-dom";
import * as S from "./PublicRoute.styles";

function PublicRoute() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  // const isLogined = getIsLogin();
  return isLogin ? (
    <Navigate to="/" replace />
  ) : (
    <S.Layout>
      <Outlet />
    </S.Layout>
  );
}

export default PublicRoute;
