import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  addressListState,
  searchAddressState,
} from "../../recoil/AddressRecoil";
import * as S from "./AddressSearchBox.styles";
import Text from "../Common/Text";
import colors from "../Common/colors";
import {
  AddressInterface,
  GroupedAddress,
  SearchAddressInterface,
} from "../../interfaces/AddressInterfaces";
import { AddressInfo } from "net";

type AddressSearchBoxProps = {
  setShow: Dispatch<SetStateAction<boolean>>;
  handleInit: () => void;
};

function AddressSearchBox({ setShow, handleInit }: AddressSearchBoxProps) {
  const addressList = useRecoilValue<GroupedAddress | null>(addressListState);
  const [searchAddress, setSearchAddress] =
    useRecoilState<SearchAddressInterface>(searchAddressState);

  const all = {
    id: 0,
    name: "전체",
  };
  const [selected, setSelected] = useState<SearchAddressInterface>({
    ...searchAddress,
  });

  const handleAddressUpdate = () => {
    setSearchAddress(selected);
    handleInit();
    setShow(false);
  };

  const handleSido = (id: number, name: string) => {
    if (!addressList) return;
    const updated: SearchAddressInterface = {
      sido: {
        id,
        name,
      },
      sigg: all,
      emd: all,
    };
    setSelected(updated);
  };
  const handleSigg = (id: number, name: string) => {
    const updated: SearchAddressInterface = {
      ...selected,
      sigg: {
        id,
        name,
      },
      emd: all,
    };
    setSelected(updated);
  };
  const handleEmd = (id: number, name: string) => {
    const updated: SearchAddressInterface = {
      ...selected,
      emd: {
        id,
        name,
      },
    };
    setSelected(updated);
  };

  return (
    <S.Layout>
      <S.Main>
        <Text text="지역 설정" weight={600} />
        {addressList && (
          <S.Middle>
            <S.MiddleHeader>
              <S.Row>
                <Text text="시도" size="0.8rem" marginr={4} />
                <Text
                  text={`${
                    selected.sido.id === 0 ? "전체" : selected.sido.name
                  }`}
                  weight={500}
                />
              </S.Row>
              <S.Row>
                <Text text="시군구" size="0.8rem" marginr={4} />
                <Text
                  text={`${
                    selected.sigg.id === 0 ? "전체" : selected.sigg.name
                  }`}
                  weight={500}
                />
              </S.Row>
              <S.Row>
                <Text text="읍면동" size="0.8rem" marginr={4} />
                <Text
                  text={`${selected.emd.id === 0 ? "전체" : selected.emd.name}`}
                  weight={500}
                />
              </S.Row>
            </S.MiddleHeader>
            <S.ScrollBox>
              <S.Box>
                <S.Scroll>
                  <SelectBox
                    callback={handleSido}
                    id={0}
                    name="전체"
                    selectedId={selected.sido.id}
                  />
                  {Object.keys(addressList).map((key: string) => (
                    <SelectBox
                      key={key}
                      id={addressList[Number(key)].sido.id}
                      name={addressList[Number(key)].sido.name}
                      callback={handleSido}
                      selectedId={selected.sido.id}
                    />
                  ))}
                </S.Scroll>
              </S.Box>
              <S.Box>
                {selected.sido.id !== 0 && (
                  <S.Scroll>
                    <SelectBox
                      callback={handleSigg}
                      id={0}
                      name="전체"
                      selectedId={selected.sigg.id}
                    />
                    {Object.keys(addressList[selected.sido.id].siggList).map(
                      (key: string) => (
                        <SelectBox
                          key={key}
                          id={
                            addressList[selected.sido.id].siggList[Number(key)]
                              .sigg.id
                          }
                          name={
                            addressList[selected.sido.id].siggList[Number(key)]
                              .sigg.name
                          }
                          callback={handleSigg}
                          selectedId={selected.sigg.id}
                        />
                      )
                    )}
                  </S.Scroll>
                )}
              </S.Box>
              <S.Box>
                {selected.sigg.id !== 0 && (
                  <S.Scroll>
                    <SelectBox
                      callback={handleEmd}
                      id={0}
                      name="전체"
                      selectedId={selected.emd.id}
                    />
                    {Object.keys(
                      addressList[selected.sido.id].siggList[selected.sigg.id]
                        .emdList
                    ).map((key: string) => (
                      <SelectBox
                        key={key}
                        id={
                          addressList[selected.sido.id].siggList[
                            selected.sigg.id
                          ].emdList[Number(key)].id
                        }
                        name={
                          addressList[selected.sido.id].siggList[
                            selected.sigg.id
                          ].emdList[Number(key)].name
                        }
                        callback={handleEmd}
                        selectedId={selected.emd.id}
                      />
                    ))}
                  </S.Scroll>
                )}
              </S.Box>
            </S.ScrollBox>
          </S.Middle>
        )}
        <S.Bottom>
          <S.Button color={colors.black._50} onClick={() => setShow(false)}>
            <Text text="닫기" pointer />
          </S.Button>
          <S.Button
            color={colors.blue._300}
            onClick={() => handleAddressUpdate()}
          >
            <Text text="확인" pointer color="white" />
          </S.Button>
        </S.Bottom>
      </S.Main>
    </S.Layout>
  );
}
export default AddressSearchBox;

type SelectBoxProps = {
  callback: (id: number, name: string) => void;
  id: number;
  name: string;
  selectedId: number;
};

const SelectBox = ({ callback, id, name, selectedId }: SelectBoxProps) => {
  return (
    <S.SelectBoxLayout
      onClick={() => callback(id, name)}
      selected={id === selectedId}
    >
      <Text text={name} pointer />
    </S.SelectBoxLayout>
  );
};
