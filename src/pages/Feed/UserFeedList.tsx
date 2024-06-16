import { useParams } from "react-router-dom";
import { FeedInterface } from "../../interfaces/FeedInterfaces";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import FeedListComponent from "../../components/Feed/FeedList";

import * as S from "./UserFeedList.styles";
import customAxios from "../../utils/customAxios";
import { PaginationResponse } from "../../interfaces/CommonInterfaces";

function UserFeedList() {
  const userId = useParams().userId;
  const initId = Number(new URLSearchParams(window.location.search).get("id"));
  const [feedList, setFeedList] = useState<FeedInterface[]>([]);
  const [cursorId, setCursorId] = useState<number>(initId + 1);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [ref, inView] = useInView();

  const fetchNextData = () => {
    setIsLoading(true);
    customAxios(`/feed/${userId}?cursor-id=${cursorId}`)
      .then((res) => res.data.data)
      .then((data: PaginationResponse<FeedInterface>) => {
        setCursorId(data.cursorId);
        setHasNext(data.hasNext);
        const transformData = data.list.map((feed: FeedInterface) => {
          return {
            ...feed,
            time: feed.time instanceof Date ? feed.time : new Date(feed.time),
          };
        });
        const updateList: FeedInterface[] = [...feedList, ...transformData];
        setFeedList(updateList);
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (inView && !isLoading && hasNext) {
      fetchNextData();
    }
  }, [inView]);

  return (
    <S.Layout>
      <FeedListComponent feedList={feedList} setFeedList={setFeedList} />
      <S.Observer ref={ref} />
    </S.Layout>
  );
}
export default UserFeedList;
