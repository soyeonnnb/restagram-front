import { FeedStoreInfoInterface } from "../../../interfaces/UserInterfaces";
import Text from "../../Common/Text";
import Overview from "./Overview";
import * as O from "./Overview.styles";
import * as S from "./StoreInfoBox.styles";
import { ReactComponent as StoreIcon } from "../../../assets/icons/home.svg";
import { ReactComponent as LocationIcon } from "../../../assets/icons/earth.svg";
import { ReactComponent as PhoneIcon } from "../../../assets/icons/call.svg";

import colors from "../../Common/colors";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../recoil/UserRecoil";
import { useNavigate } from "react-router-dom";
import CouponModal from "../../Coupon/CouponModal";
import { useEffect, useState } from "react";
import { CustomerCouponInterface } from "../../../interfaces/CouponInterfaces";
import customAxios from "../../../utils/customAxios";

interface StoreInfoBoxProps {
  userInfo: FeedStoreInfoInterface;
}

function StoreInfoBox({ userInfo }: StoreInfoBoxProps) {
  const user = useRecoilValue(userInfoState);
  const navigate = useNavigate();

  const [couponModal, setCouponModal] = useState<boolean>(false);
  const [couponList, setCouponList] = useState<CustomerCouponInterface[]>([]);

  const fetchCouponData = () => {
    customAxios
      .get(`/coupon/${userInfo.id}`)
      .then((res) => res.data.data)
      .then((data: CustomerCouponInterface[]) => {
        const updatedData: CustomerCouponInterface[] = data.map((coupon) => ({
          ...coupon,
          startAt: new Date(coupon.startAt),
          finishAt: new Date(coupon.finishAt),
        }));
        setCouponList(updatedData);
      });
  };
  const handleCouponIssue = (id: number) => {
    customAxios
      .post(`/coupon/${id}`)
      .then(() => {
        setCouponList((prevCouponList) =>
          prevCouponList.map((coupon) =>
            coupon.id === id ? { ...coupon, isIssued: true } : coupon
          )
        );
        alert("쿠폰 발급 완료");
      })
      .catch((e) => alert(e.response.data.message));
  };

  useEffect(() => {
    if (!user) return;
    if (user.type === "CUSTOMER") {
      fetchCouponData();
    }
  }, [user]);

  return (
    <S.Layout>
      <S.HeaderBox>
        <S.HeaderRow>
          <StoreIcon
            className="icon"
            width={15}
            height={15}
            fill={colors.beige._600}
          />
          <Text text={userInfo.storeName} size="0.9rem" />
        </S.HeaderRow>
        <S.HeaderRow>
          <LocationIcon
            className="icon"
            width={15}
            height={15}
            fill={colors.beige._600}
          />
          <Text text={userInfo.address} size="0.9rem" />
        </S.HeaderRow>
        <S.HeaderRow>
          <PhoneIcon
            className="icon"
            width={15}
            height={15}
            fill={colors.beige._600}
          />
          <Text text={userInfo.storePhone} size="0.9rem" />
        </S.HeaderRow>
      </S.HeaderBox>
      <O.Ul>
        <Overview number={userInfo.feedNum} description="피드수" />
        <Overview number={userInfo.reviewNum} description="리뷰수" />
        <Overview number={userInfo.followingNum} description="팔로잉" />
      </O.Ul>
      {user?.type === "CUSTOMER" && user?.id !== userInfo.id && (
        <S.StoreButtonBox>
          <S.BottomBox>
            <S.Button onClick={() => setCouponModal(true)}>
              <Text text="쿠폰발급" pointer={true} size="0.9rem" />
            </S.Button>
            <S.Button onClick={() => navigate(`/reservation/${userInfo?.id}`)}>
              <Text text="예약" pointer={true} size="0.9rem" />
            </S.Button>
          </S.BottomBox>
          <CouponModal
            couponModal={couponModal}
            setCouponModal={setCouponModal}
            couponList={couponList}
            handleCouponIssue={handleCouponIssue}
          />
        </S.StoreButtonBox>
      )}
    </S.Layout>
  );
}

export default StoreInfoBox;
