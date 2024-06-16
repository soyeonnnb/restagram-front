import { Dispatch, SetStateAction, useEffect, useState } from "react";
import SearchBox from "../../Common/Form/SearchBox";
import * as S from "./SelectUser.styles";
import Text from "../../Common/Text";
import { StoreInfoInterface } from "../../../interfaces/UserInterfaces";
import customAxios from "../../../utils/customAxios";
import { PaginationResponse } from "../../../interfaces/CommonInterfaces";
import { useInView } from "react-intersection-observer";
import SelectStoreCard from "./SelectStoreCard";

type SelectUserProps = {
  setStore: Dispatch<SetStateAction<StoreInfoInterface | null>>;
  setOpen: Dispatch<SetStateAction<number>>;
};

function SelectUser({ setStore, setOpen }: SelectUserProps) {
  const [query, setQuery] = useState<string>("");
  const [userList, setUserList] = useState<StoreInfoInterface[]>([]);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [cursorId, setCursorId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    setHasNext(true);
    setCursorId(null);
    setIsLoading(false);
    fetchData(false);
  };

  const fetchData = (copy: boolean) => {
    setIsLoading(true);
    customAxios
      .get(
        `/customer/store?cursor-id=${
          copy && cursorId ? cursorId : ""
        }&query=${query}`
      )
      .then((res) => res.data.data)
      .then((data: PaginationResponse<StoreInfoInterface>) => {
        setHasNext(data.hasNext);
        setCursorId(data.cursorId);
        if (copy) {
          const updated: StoreInfoInterface[] = [...userList, ...data.list];
          setUserList(updated);
        } else {
          setUserList(data.list);
        }
      })
      .then(() => setIsLoading(false));
  };

  const [ref, inView] = useInView();
  const handleSelect = (store: StoreInfoInterface) => {
    setStore(store);
    setOpen(2);
  };

  useEffect(() => {
    if (!inView) return;
    if (!isLoading && hasNext && query) {
      fetchData(true);
    }
  }, [inView]);

  return (
    <S.Layout>
      <S.Header>
        <SearchBox
          handleKeyDown={handleKeyDown}
          setQuery={setQuery}
          query={query}
          handleSearch={handleSearch}
          placeholder="닉네임 혹은 해시태그로 검색"
        />
      </S.Header>
      <S.Ul>
        {userList.map((store: StoreInfoInterface, idx: number) => (
          <SelectStoreCard
            store={store}
            key={idx}
            handleSelect={handleSelect}
            view={false}
          />
        ))}
        <S.Observer ref={ref} />
      </S.Ul>
    </S.Layout>
  );
}
export default SelectUser;
