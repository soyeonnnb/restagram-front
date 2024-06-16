import { useEffect, useRef, useState } from "react";
import * as S from "./FeedList.styles";
import {
  FeedInterface,
  FeedListInterface,
} from "../../interfaces/FeedInterfaces";
import customAxios from "../../utils/customAxios";
import Feed from "../../components/Feed/Feed";
import FeedListComponent from "../../components/Feed/FeedList";

import { useInView } from "react-intersection-observer";
import { set } from "date-fns";

function FeedList() {
  const [feedList, setFeedList] = useState<FeedInterface[]>([]);
  const [cursorId, setCursorId] = useState<number | null>(null);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleIsLike = (id: number, isLike: boolean) => {
    if (feedList.some((feed) => feed.id === id)) {
      const updatedFeedList = feedList.map((feed) => {
        if (feed.id === id) {
          return {
            ...feed,
            isLike: isLike, // 토글하기
          };
        }
        return feed;
      });

      setFeedList(updatedFeedList); // 상태 업데이트
    }
  };

  const handleIsLike = (id: number, isLike: boolean) => {
    if (isLike) {
      customAxios.delete(`/feed/like/${id}`).then(() => {
        toggleIsLike(id, !isLike);
      });
    } else {
      customAxios.post(`/feed/like/${id}`).then(() => {
        toggleIsLike(id, !isLike);
      });
    }
  };

  const fetchData = () => {
    setIsLoading(true);
    customAxios
      .get(`/feed/cursor?cursorId=${cursorId ? cursorId : ""}`)
      .then((res) => res.data.data)
      .then((data: FeedListInterface) => {
        setCursorId(data.cursorId);
        setHasNext(data.hasNext);
        const transformData = data.list.map((feed: FeedInterface) => {
          return {
            ...feed,
            time: feed.time instanceof Date ? feed.time : new Date(feed.time),
          };
        });
        setFeedList([...feedList, ...transformData]);
      })
      .then(() => setIsLoading(false));
  };

  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView && !isLoading && hasNext) {
      fetchData();
    }
  }, [inView]);

  return (
    <S.Layout>
      <FeedListComponent feedList={feedList} setFeedList={setFeedList} />
      <S.Observer ref={ref} />
    </S.Layout>
  );
}

export default FeedList;
