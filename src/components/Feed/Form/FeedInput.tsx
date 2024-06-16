import { Dispatch, SetStateAction, useState } from "react";
import * as S from "./FeedInput.styles";
import Text from "../../Common/Text";
import { ReactComponent as XIcon } from "../../../assets/icons/circle-x.svg";

type FeedInputProps = {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  hashtagList: string[];
  setHashtagList: Dispatch<SetStateAction<string[]>>;
};

function FeedInput({
  content,
  setContent,
  hashtagList,
  setHashtagList,
}: FeedInputProps) {
  const [hash, setHash] = useState<string>("");

  const handleHashtag = (event: any) => {
    if (event.key === "Enter") {
      const input = hash.trim();
      if (hashtagList.length < 10) {
        if (!hashtagList.includes(input)) {
          const update = [...hashtagList, input];
          setHashtagList(update);
        }
        setHash("");
      } else {
        alert("최대 10개까지 등록 가능합니다.");
      }
    }
  };

  const handleRemove = (content: string) => {
    const filteredList = hashtagList.filter((item) => item !== content);
    setHashtagList(filteredList);
  };

  const handleInput = (event: any) => {
    if (event.target.value.length > 20) {
      alert("최대 20자까지 입력 가능합니다.");
      return;
    }
    setHash(event.target.value.trim());
  };

  return (
    <S.Layout>
      <S.Section>
        <Text text="내용" size="1.1rem" weight={500} />
        <S.TextArea
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </S.Section>
      <S.Section>
        <Text text="해시태그" size="1.1rem" weight={500} />
        <S.HashtagBox>
          <S.HashtagUl>
            {hashtagList.map((h, idx) => (
              <Hashtag content={h} handleRemove={handleRemove} key={idx} />
            ))}
          </S.HashtagUl>
          <S.Input
            placeholder="#해시 태그를 입력해보세요(공백 제외)"
            onKeyDown={handleHashtag}
            onChange={handleInput}
            value={hash}
          />
        </S.HashtagBox>
      </S.Section>
    </S.Layout>
  );
}

export default FeedInput;
function Hashtag({
  content,
  handleRemove,
}: {
  content: string;
  handleRemove: (content: string) => void;
}) {
  return (
    <S.HashtagLi>
      <Text text={content} color="white" marginr={5} size="0.8rem" />
      <S.IconBox onClick={() => handleRemove(content)}>
        <XIcon width={15} height={15} fill="white" />
      </S.IconBox>
    </S.HashtagLi>
  );
}
