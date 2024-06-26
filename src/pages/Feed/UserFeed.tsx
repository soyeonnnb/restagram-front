import * as S from "./UserFeed.styles";
import { useEffect, useState } from "react";
import customAxios from "../../utils/customAxios";
import { useParams } from "react-router-dom";
import {
  FeedCustomerInfoInterface,
  FeedStoreInfoInterface,
} from "../../interfaces/UserInterfaces";
import {
  FeedImageCursorInterface,
  UserFeedImageInterface,
} from "../../interfaces/FeedInterfaces";
import FeedSquareList from "../../components/Feed/FeedSquare/FeedSquareList";
import { useInView } from "react-intersection-observer";
import UserInfoBox from "../../components/User/Info/UserInfoBox";

function UserFeed() {
  const { userId } = useParams<{ userId: string }>();
  const [userInfo, setUserInfo] = useState<
    FeedStoreInfoInterface | FeedCustomerInfoInterface | null
  >(null);
  const [feedList, setFeedList] = useState<UserFeedImageInterface[]>([]);
  const [cursorId, setCursorId] = useState<number | null>(null);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = () => {
    customAxios
      .get(`/user/${userId}`)
      .then((res) => res.data.data)
      .then((data: FeedStoreInfoInterface | FeedCustomerInfoInterface) => {
        setUserInfo(data);
      });
  };

  const fetchImageData = () => {
    setIsLoading(true);
    customAxios
      .get(`/feed/image/${userId}?cursor-id=${cursorId ? cursorId : ""}`)
      .then((res) => res.data.data)
      .then((data: FeedImageCursorInterface) => {
        setCursorId(data.cursorId);
        setHasNext(data.hasNext);
        setFeedList([...feedList, ...data.list]);
      })
      .then(() => setIsLoading(false));
  };

  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView && !isLoading && hasNext) {
      fetchImageData();
    }
  }, [inView]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
    setFeedList([]);
    setCursorId(null);
    setHasNext(true);
    setIsLoading(false);
  }, [userId]);

  return (
    <S.Layout>
      {userInfo && (
        <UserInfoBox userInfo={userInfo} setUserInfo={setUserInfo} />
      )}
      {feedList.length > 0 && <FeedSquareList feedList={feedList} />}
      <S.Observer ref={ref} />
    </S.Layout>
  );
}

export default UserFeed;
