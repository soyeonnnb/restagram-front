import * as S from "./Title.styles";

interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return (
    <S.Layout>
      <S.Title>{title}</S.Title>
    </S.Layout>
  );
}
export default Title;
