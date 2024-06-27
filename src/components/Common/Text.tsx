import * as S from "./Text.styles";
interface TextProps {
  text: string;
  weight?: number;
  color?: string;
  size?: string;
  pointer?: boolean;
  marginr?: number;
  marginl?: number;
  zindex?: number;
}

function Text({
  text,
  weight,
  color,
  size,
  pointer,
  marginr,
  marginl,
  zindex,
}: TextProps) {
  return (
    <S.Span
      weight={weight}
      color={color}
      size={size}
      pointer={pointer?.toString()}
      marginr={marginr}
      marginl={marginl}
      zindex={zindex}
    >
      {text}
    </S.Span>
  );
}
export default Text;
