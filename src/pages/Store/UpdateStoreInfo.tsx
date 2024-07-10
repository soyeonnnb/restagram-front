import customAxios from "../../utils/customAxios";
import * as S from "./UpdateStoreInfo.styles";
import { useEffect, useState } from "react";
import Text from "../../components/Common/Text";
import UpdateUserProfileNickname from "../../components/User/UpdateUserProfileNickname";
import SearchLatLngByAddress from "../../components/User/SearchLatLngByAddress";
import { useNavigate } from "react-router-dom";
import LabelButtonInput from "../../components/Common/Form/LabelButtonInput";
import LabelInput from "../../components/Common/Form/LabelInput";
import DaumPost from "../../components/User/DaumPost";
import { tab } from "@testing-library/user-event/dist/tab";

function UpdateStoreInfo() {
  const navigate = useNavigate();

  const [storeName, setStoreName] = useState<string>("");
  const [storePhone, setStorePhone] = useState<string>("");
  const [bcode, setBcode] = useState<number>(0);
  const [address, setAddress] = useState<string>("");
  const [detailAddress, setDetailAddress] = useState<string>("");
  const [tablePerson, setTablePerson] = useState<number>(0);
  const [maxReservationPerson, setMaxReservationPerson] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  const [checkStoreNameText, setCheckStoreNameText] = useState<string>("");
  const [checkStorePhoneText, setCheckStorePhoneText] = useState<string>("");
  const [checkAddressText, setCheckAddressText] = useState<string>("");
  const [checkDetailAddressText, setCheckDetailAddressText] =
    useState<string>("");
  const [checkTablePersonText, setCheckTablePersonText] = useState<string>("");
  const [checkMaxReservationPersonText, setCheckMaxReservationPersonText] =
    useState<string>("");

  const [showPost, setShowPost] = useState<boolean>(false);

  const handleShowPost = () => {
    setShowPost(!showPost);
  };

  const handleSubmit = async () => {
    let flag: boolean = false;
    if (storeName === "") {
      setCheckStoreNameText("가게명은 필수입니다.");
      flag = true;
    } else {
      setCheckStoreNameText("");
    }
    if (storePhone === "") {
      setCheckStorePhoneText("가게번호는 필수입니다.");
      flag = true;
    } else {
      setCheckStorePhoneText("");
    }
    if (address === "") {
      setCheckAddressText("주소입력은 필수입니다.");
      flag = true;
    } else {
      setCheckAddressText("");
    }

    if (detailAddress === "") {
      setCheckDetailAddressText("상세 주소입력은 필수입니다.");
      flag = true;
    } else {
      setCheckDetailAddressText("");
    }

    if (tablePerson < 1) {
      setCheckTablePersonText("테이블 당 인원수는 1 이상이여야 합니다.");
      flag = true;
    } else {
      setCheckTablePersonText("");
    }

    if (maxReservationPerson < 0 || maxReservationPerson > 20) {
      setCheckMaxReservationPersonText(
        "최대 예약 인원수는 0 이상 20 이하여야 합니다."
      );
      flag = true;
    } else {
      setCheckMaxReservationPersonText("");
    }

    if (flag) return;

    const { latitude, longitude } = await SearchLatLngByAddress(address);

    const data = {
      storeName,
      storePhone,
      bcode,
      address,
      detailAddress,
      latitude,
      longitude,
      tablePerson,
      maxReservationPerson,
      description,
    };

    customAxios.patch(`/store`, data).then(() => {
      alert("회원정보 변경 완료");
    });
  };

  const fetchData = () => {
    customAxios
      .get("/store/update-info")
      .then((res) => res.data.data)
      .then((data) => {
        setStoreName(data.storeName);
        setStorePhone(data.storePhone);
        setBcode(data.bcode);
        setAddress(data.address);
        setDetailAddress(data.detailAddress);
        setTablePerson(data.tablePerson);
        setMaxReservationPerson(data.maxReservationPerson);
        setDescription(data.description);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <S.Layout>
        <Text text="내 정보 수정" size="1.2rem" weight={500} />
        <UpdateUserProfileNickname />
        <S.Main>
          <S.InputBox>
            <S.Box>
              <Text text="한줄 소개" size="0.9rem" />
              <S.Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </S.Box>
            <LabelInput
              placeholder=""
              label="가게명"
              type="text"
              name="storeName"
              setValue={setStoreName}
              verifyText={checkStoreNameText}
              value={storeName}
            />
            <LabelInput
              placeholder="01012345678"
              label="가게 전화번호"
              type="text"
              name="storePhone"
              setValue={setStorePhone}
              verifyText={checkStorePhoneText}
              value={storePhone}
            />
            <LabelButtonInput
              placeholder=""
              label="주소"
              type="text"
              name="address"
              value={address}
              setValue={setAddress}
              disable={true}
              buttonText="주소찾기"
              buttonFunction={handleShowPost}
              verifyText={checkAddressText}
            />
            <LabelInput
              placeholder=""
              label="상세주소"
              type="text"
              name="detailAddress"
              setValue={setDetailAddress}
              verifyText={checkDetailAddressText}
              value={detailAddress}
            />
            <LabelInput
              placeholder=""
              label="테이블 당 인원수"
              type="number"
              name="tablePerson"
              setValue={setTablePerson}
              verifyText={checkTablePersonText}
              value={tablePerson}
            />
            <LabelInput
              placeholder=""
              label="최대 예약 인원수"
              type="number"
              name="maxReservationPerson"
              setValue={setMaxReservationPerson}
              verifyText={checkMaxReservationPersonText}
              value={maxReservationPerson}
            />
            <S.Button onClick={() => handleSubmit()}>
              <Text text="수정" pointer color="white" />
            </S.Button>
          </S.InputBox>
        </S.Main>
      </S.Layout>
      {showPost && (
        <DaumPost
          handleShowPost={handleShowPost}
          setBcode={setBcode}
          setAddress={setAddress}
        />
      )}
    </>
  );
}

export default UpdateStoreInfo;
