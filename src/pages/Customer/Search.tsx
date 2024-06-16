import { useEffect, useRef, useState } from "react";
import FeedListComponent from "../../components/Feed/FeedList";
import * as S from "./Search.styles";
import {
  FeedInterface,
  FeedListInterface,
} from "../../interfaces/FeedInterfaces";
import { useInView } from "react-intersection-observer";
import {
  UserInfoCursorInterface,
  UserInfoInterface,
} from "../../interfaces/UserInterfaces";
import Text from "../../components/Common/Text";
import UserInfoList from "../../components/User/Info/UserInfoList";
import customAxios from "../../utils/customAxios";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchAddressState } from "../../recoil/AddressRecoil";
import AddressSearch from "../../components/Search/AddressSearch";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import SearchBox from "../../components/Common/Form/SearchBox";

function Search() {
  const [type, setType] = useState<"ACCOUNT" | "HASHTAG">("ACCOUNT");
  const [feedList, setFeedList] = useState<FeedInterface[]>([]);
  const [feedCursorId, setFeedCursorId] = useState<number | null>(null);
  const [feedHasNext, setFeedHasNext] = useState<boolean>(true);
  const [feedIsLoading, setFeedIsLoading] = useState<boolean>(false);
  const [accountList, setAccountList] = useState<UserInfoInterface[]>([]);
  const [accountCursorId, setAccountCursorId] = useState<number | null>(null);
  const [accountHasNext, setAccountHasNext] = useState<boolean>(true);
  const [accountIsLoading, setAccountIsLoading] = useState<boolean>(false);
  const searchAddress = useRecoilValue(searchAddressState);
  const [query, setQuery] = useState<string>("");

  const fetchAccountData = () => {
    setAccountIsLoading(true);
    customAxios
      .get(
        `/user?cursor-id=${
          accountCursorId ? accountCursorId : ""
        }&query=${query}`
      )
      .then((res) => res.data.data)
      .then((data: UserInfoCursorInterface) => {
        setAccountCursorId(data.cursorId);
        setAccountHasNext(data.hasNext);
        const updateList: UserInfoInterface[] = [...accountList, ...data.list];
        setAccountList(updateList);
      })
      .then(() => setAccountIsLoading(false));
  };

  const fetchFeedData = () => {
    setFeedIsLoading(true);
    let range = 0;
    let addressId = 0;
    if (searchAddress.sido.id === 0) {
    } else if (searchAddress.sigg.id === 0) {
      range = 1;
      addressId = searchAddress.sido.id;
    } else if (searchAddress.emd.id === 0) {
      range = 2;
      addressId = searchAddress.sigg.id;
    } else {
      range = 3;
      addressId = searchAddress.emd.id;
    }

    customAxios
      .get(
        `/feed/search?address-id=${addressId}&address-range=${range}&query=${query}&cursor-id=${
          feedCursorId ? feedCursorId : ""
        }`
      )
      .then((res) => res.data.data)
      .then((data: FeedListInterface) => {
        setFeedCursorId(data.cursorId);
        setFeedHasNext(data.hasNext);
        const transformData = data.list.map((feed: FeedInterface) => {
          return {
            ...feed,
            time: feed.time instanceof Date ? feed.time : new Date(feed.time),
          };
        });
        setFeedList([...feedList, ...transformData]);
      })
      .then(() => setFeedIsLoading(false));
  };

  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    handleSearch();
  }, [inView]);

  const handleSearch = () => {
    if (type === "ACCOUNT") {
      if (!accountIsLoading && accountHasNext) {
        fetchAccountData();
      }
    } else if (type === "HASHTAG") {
      if (!feedIsLoading && feedHasNext) {
        fetchFeedData();
      }
      fetchFeedData();
    }
  };

  const handleAddressInit = () => {
    setFeedList([]);
    setFeedCursorId(null);
    setFeedHasNext(true);
    setFeedIsLoading(false);
    setAccountList([]);
    setAccountCursorId(null);
    setAccountHasNext(true);
    setAccountIsLoading(false);
    handleSearch();
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleAddressInit();
    }
  };

  const widthRef = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState<number>(468);
  useEffect(() => {
    if (widthRef.current != null) {
      setScreenWidth(widthRef.current.offsetWidth);
    }
  }, [widthRef.current?.offsetWidth]);

  return (
    <S.Layout ref={widthRef}>
      <S.Header width={screenWidth}>
        <AddressSearch handleInit={handleAddressInit} />
        <SearchBox
          handleKeyDown={handleKeyDown}
          setQuery={setQuery}
          query={query}
          handleSearch={handleSearch}
          placeholder="닉네임 혹은 해시태그로 검색"
        />
        <S.SelectBox>
          <S.SelectButton onClick={() => setType("ACCOUNT")}>
            <Text text="계정" pointer />
          </S.SelectButton>
          <S.SelectButton onClick={() => setType("HASHTAG")}>
            <Text text="피드" pointer />
          </S.SelectButton>
        </S.SelectBox>
      </S.Header>
      <S.ResultBox>
        {type === "ACCOUNT" && <UserInfoList list={accountList} />}
        {type === "HASHTAG" && (
          <FeedListComponent feedList={feedList} setFeedList={setFeedList} />
        )}
        <S.Observer ref={ref} />
      </S.ResultBox>
    </S.Layout>
  );
}

export default Search;
