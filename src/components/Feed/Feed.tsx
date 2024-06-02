import { FeedInterface } from "../../interfaces/FeedInterfaces";
import UserInfo from "../User/UserInfo";
import * as S from "./Feed.styles";
import { useEffect, useRef, useState } from "react";
import FeedImage from "./FeedImage";
import FeedButton from "./Bottom/FeedButton";
import Description from "./Bottom/Description";
import customAxios from "../../utils/customAxios";

interface FeedProps {
  feed: FeedInterface;
  handleIsLike: (id: number, isLike: boolean) => void;
}

function Feed({ feed, handleIsLike }: FeedProps) {
  const layoutRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (layoutRef.current != null) {
      setWidth(layoutRef.current.offsetWidth);
    }
  }, [layoutRef.current?.offsetWidth]);

  return (
    <S.Layout ref={layoutRef}>
      <UserInfo user={feed.user} />
      <FeedImage images={feed.images} width={width} />
      <FeedButton
        id={feed.id}
        isLike={feed.isLike}
        handleIsLike={handleIsLike}
        storeInfo={feed.store}
      />
      <Description description={feed.content} time={feed.time} />
    </S.Layout>
  );
}

export default Feed;
