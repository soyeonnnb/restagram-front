import { UserFeedImageInterface } from "../../../interfaces/FeedInterfaces";
import * as S from "./FeedSquareList.styles";
import Logo from "../../../assets/images/logo.png";
import { useNavigate, useParams } from "react-router-dom";

interface FeedSquareListProps {
  feedList: UserFeedImageInterface[];
}

function FeedSquareList({ feedList }: FeedSquareListProps) {
  const navigate = useNavigate();
  const userId = useParams().userId;

  return (
    <S.Layout>
      {feedList.map((feed, idx) => {
        return (
          <S.Square
            key={idx}
            onClick={() => navigate(`/feed/user/${userId}?id=${feed.id}`)}
          >
            <S.Image src={feed.imageUrl} />
          </S.Square>
        );
      })}
    </S.Layout>
  );
}
export default FeedSquareList;
