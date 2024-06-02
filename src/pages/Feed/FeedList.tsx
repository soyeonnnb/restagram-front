import { useEffect, useState } from "react";
import * as S from "./FeedList.styles";
import { FeedInterface } from "../../interfaces/FeedInterfaces";
import customAxios from "../../utils/customAxios";
import Feed from "../../components/Feed/Feed";

function FeedList() {
  const [feedList, setFeedList] = useState<FeedInterface[]>([]);

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

  const getData = () => {
    customAxios.get("/feed").then((res) => {
      const transformedData = res.data.data.map((feed: FeedInterface) => {
        return {
          ...feed,
          time: feed.time instanceof Date ? feed.time : new Date(feed.time),
        };
      });
      setFeedList(transformedData);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.Layout>
      {feedList.length > 0 &&
        feedList.map((feed, idx) => (
          <Feed feed={feed} key={idx} handleIsLike={handleIsLike} />
        ))}
    </S.Layout>
  );
}

export default FeedList;
