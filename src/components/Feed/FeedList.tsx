import { useInView } from "react-intersection-observer";
import { FeedInterface } from "../../interfaces/FeedInterfaces";
import Feed from "./Feed";
import * as S from "./FeedList.styles";
import { useEffect } from "react";
import customAxios from "../../utils/customAxios";

interface FeedListProps {
  feedList: FeedInterface[];
  setFeedList: (list: FeedInterface[]) => void;
}

function FeedList({ feedList, setFeedList }: FeedListProps) {
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

  return (
    <S.FeedUl>
      {feedList.length > 0 &&
        feedList.map((feed, idx) => (
          <Feed feed={feed} key={idx} handleIsLike={handleIsLike} />
        ))}
    </S.FeedUl>
  );
}
export default FeedList;
