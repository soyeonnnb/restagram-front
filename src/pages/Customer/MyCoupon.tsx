import { useEffect, useState } from "react";
import RCHeader from "../../components/Customer/RCHeader";
import * as S from "./MyCoupon.styles";
import customAxios from "../../utils/customAxios";
import { IssueCouponInterface } from "../../interfaces/CouponInterfaces";
import CouponBox from "../../components/Coupon/CouponBox";
import UseModal from "../../components/Coupon/UseModal";

function MyCoupon() {
  const [couponList, setCouponList] = useState<IssueCouponInterface[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [useCoupon, setUseCoupon] = useState<IssueCouponInterface>();

  const fetchData = () => {
    customAxios
      .get("/coupon/issue")
      .then((res) => res.data.data)
      .then((data) => setCouponList(data));
  };

  const updateList = (id: number) => {
    setCouponList((prevList) => prevList.filter((coupon) => coupon.id !== id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <RCHeader type="coupon" />
      <S.Layout>
        <S.Ul>
          {couponList.map((coupon, idx) => (
            <CouponBox
              coupon={coupon}
              key={idx}
              setUseCoupon={setUseCoupon}
              setShowModal={setShowModal}
            />
          ))}
        </S.Ul>
      </S.Layout>
      {showModal && (
        <UseModal
          useCoupon={useCoupon}
          setShowModal={setShowModal}
          updateList={updateList}
        />
      )}
    </>
  );
}

export default MyCoupon;
