import * as S from "./Input.styles";

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  value?: number | string;
  setValue: any;
  disable?: boolean;
  verifyText?: string;
  verifyTextColor?: string;
  min?: string;
  max?: string;
}

const Input = ({
  placeholder,
  type,
  name,
  setValue,
  disable,
  value,
  verifyText,
  verifyTextColor,
  min,
  max,
}: InputProps) => {
  return (
    <S.Box>
      <S.Input
        placeholder={placeholder}
        type={type ? type : "text"}
        onChange={(event: any) => setValue(event.target.value)}
        disabled={disable}
        value={value}
        min={min}
        max={max}
      />
      {verifyText && (
        <S.VerifyText color={verifyTextColor}>{verifyText}</S.VerifyText>
      )}
    </S.Box>
  );
};

export default Input;
