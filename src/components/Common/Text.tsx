import * as S from "./Text.styles";
interface TextProps {
  text: string;
  weight?: number;
  color?: string;
  size?: string;
  pointer?: boolean;
  marginR?: number;
  marginL?: number;
}

function Text({
  text,
  weight,
  color,
  size,
  pointer,
  marginR,
  marginL,
}: TextProps) {
  return (
    <S.Span
      weight={weight}
      color={color}
      size={size}
      pointer={pointer?.toString()}
      marginR={marginR}
      marginL={marginL}
    >
      {text}
    </S.Span>
  );
}
export default Text;
