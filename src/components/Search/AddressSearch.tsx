import { useRecoilState } from "recoil";
import * as S from "./AddressSearch.styles";
import {
  addressListState,
  searchAddressState,
} from "../../recoil/AddressRecoil";
import customAxios from "../../utils/customAxios";
import {
  AddressListInterface,
  GroupedAddress,
} from "../../interfaces/AddressInterfaces";
import { useEffect, useState } from "react";
import Text from "../Common/Text";
import Modal from "../Common/Modal";
import AddressSearchBox from "./AddressSearchBox";
import colors from "../Common/colors";

function AddressSearch({ handleInit }: { handleInit: () => void }) {
  const [addressList, setAddressList] = useRecoilState(addressListState);
  const [searchAddress, setSearchAddress] = useRecoilState(searchAddressState);
  const [showModal, setShowModal] = useState<boolean>(false);

  const fetchAddressData = () => {
    customAxios
      .get("/address")
      .then((res) => res.data.data)
      .then(
        (
          data: { id: number; name: string; list: AddressListInterface[] }[]
        ) => {
          const groupedAddress: GroupedAddress = {};
          data.forEach((sido) => {
            groupedAddress[sido.id] = {
              sido: { id: sido.id, name: sido.name },
              siggList: {},
            };

            sido.list.forEach((sigg) => {
              groupedAddress[sido.id].siggList[sigg.id] = {
                sigg: { id: sigg.id, name: sigg.name },
                emdList: sigg.list.map((emd) => ({
                  id: emd.id,
                  name: emd.name,
                })),
              };
            });
          });
          return groupedAddress;
        }
      )
      .then((data) => setAddressList(data));
  };

  useEffect(() => {
    if (addressList === null) {
      fetchAddressData();
    }
  }, []);

  return (
    <>
      {addressList && (
        <S.Layout>
          <S.Box>
            <Text text={searchAddress.sido.name} />
            {searchAddress.sigg.id !== 0 && (
              <Text text={`${searchAddress.sigg.name}`} />
            )}
            {searchAddress.emd.id !== 0 && (
              <Text text={`${searchAddress.emd.name}`} />
            )}
            <S.Button onClick={() => setShowModal(!showModal)}>
              <Text
                text="지역설정"
                size="0.8rem"
                color={colors.black._300}
                pointer
              />
            </S.Button>
          </S.Box>
          {showModal && (
            <AddressSearchBox setShow={setShowModal} handleInit={handleInit} />
          )}
        </S.Layout>
      )}
    </>
  );
}
export default AddressSearch;
