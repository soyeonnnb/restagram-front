import * as S from "./Description.styles";

interface DescriptionProps {
  description: string;
  time: Date;
}

function Description({ description, time }: DescriptionProps) {
  const time_text = `${time.getFullYear()}년 ${
    time.getMonth() + 1
  }월 ${time.getDate()}일 ${time.getHours()}시`;

  return (
    <S.Layout>
      <S.Text>{description}</S.Text>
      <S.TimeText>{time_text}</S.TimeText>
    </S.Layout>
  );
}
export default Description;
