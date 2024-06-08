import * as S from "./Text.styles";
interface TextProps {
  text: string;
  weight?: number;
  color?: string;
  size?: string;
  pointer?: boolean;
}

function Text({ text, weight, color, size, pointer }: TextProps) {
  return (
    <S.Span
      weight={weight}
      color={color}
      size={size}
      pointer={pointer?.toString()}
    >
      {text}
    </S.Span>
  );
}
export default Text;
