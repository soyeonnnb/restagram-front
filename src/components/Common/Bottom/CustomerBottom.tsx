import { useNavigate } from "react-router-dom";
import * as S from "./Bottom.styles";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfoState } from "../../../recoil/UserRecoil";
import { Component, useEffect, useState } from "react";

import { ReactComponent as FeedIcon } from "../../../assets/icons/grid.svg";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import { ReactComponent as RCIcon } from "../../../assets/icons/calendar.svg";
import { ReactComponent as MeIcon } from "../../../assets/icons/profile.svg";
import colors from "../colors";

function CustomerBottom() {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoState);

  const handleNavigate = (url: string) => {
    navigate(url);
  };

  return (
    <S.Layout>
      <NavBox Icon={FeedIcon} url="" handleNavigate={handleNavigate} />
      <NavBox Icon={SearchIcon} url="/search" handleNavigate={handleNavigate} />
      <NavBox
        Icon={RCIcon}
        url="/reservation"
        handleNavigate={handleNavigate}
      />
      <NavBox
        Icon={MeIcon}
        url={`/feed?id=${userInfo?.id}`}
        handleNavigate={handleNavigate}
      />
    </S.Layout>
  );
}

export default CustomerBottom;

interface NavBox {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  url: string;
  handleNavigate: (url: string) => void;
}

const NavBox = ({ Icon, url, handleNavigate }: NavBox) => {
  return (
    <S.Box onClick={() => handleNavigate(url)}>
      <Icon className="icon" width={24} height={24} fill={colors.blue._900} />
    </S.Box>
  );
};
