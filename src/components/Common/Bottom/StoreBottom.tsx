import { useNavigate } from "react-router-dom";
import * as S from "./Bottom.styles";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../recoil/UserRecoil";
// import { Component, useEffect, useState } from "react";

import { ReactComponent as HomeIcon } from "../../../assets/icons/home.svg";
import { ReactComponent as ReservationIcon } from "../../../assets/icons/order.svg";
// import { ReactComponent as ChatIcon } from "../../../assets/icons/chat-bubble.svg";
import { ReactComponent as CouponIcon } from "../../../assets/icons/coupon.svg";
import colors from "../colors";

function StoreBottom() {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoState);

  const handleNavigate = (url: string) => {
    navigate(url);
  };

  return (
    <S.Layout>
      <NavBox
        Icon={HomeIcon}
        url={`/feed/${userInfo?.id}`}
        handleNavigate={handleNavigate}
      />
      {/* <NavBox Icon={ChatIcon} url="/dm" handleNavigate={handleNavigate} /> */}
      <NavBox
        Icon={ReservationIcon}
        url="/store/reservation"
        handleNavigate={handleNavigate}
      />
      <NavBox
        Icon={CouponIcon}
        url="/store/coupon"
        handleNavigate={handleNavigate}
      />
    </S.Layout>
  );
}

export default StoreBottom;

interface NavBoxProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  url: string;
  handleNavigate: (url: string) => void;
}

const NavBox = ({ Icon, url, handleNavigate }: NavBoxProps) => {
  return (
    <S.Box onClick={() => handleNavigate(url)}>
      <Icon className="icon" width={24} height={24} fill={colors.blue._900} />
    </S.Box>
  );
};
