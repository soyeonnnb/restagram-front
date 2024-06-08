import { UserFeedImageInterface } from "../../../interfaces/FeedInterfaces";
import * as S from "./FeedSquareList.styles";
import Logo from "../../../assets/images/logo.png";

interface FeedSquareListProps {
  feedList: UserFeedImageInterface[];
}

function FeedSquareList({ feedList }: FeedSquareListProps) {
  return (
    <S.Layout>
      {feedList.map((feed, idx) => {
        return (
          <S.Square key={idx}>
            <S.Image src={feed.imageUrl} />
          </S.Square>
        );
      })}
    </S.Layout>
  );
}
export default FeedSquareList;
