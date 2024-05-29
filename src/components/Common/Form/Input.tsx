import * as S from "./Input.styles";

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  value?: any;
  setValue: any;
  disable?: boolean;
  verifyText?: string;
  verifyTextColor?: string;
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
}: InputProps) => {
  const handleInputChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <S.Box>
      <S.Input
        placeholder={placeholder}
        type={type ? type : "text"}
        onChange={handleInputChange}
        disabled={disable}
        value={value}
      />
      {verifyText !== "" && (
        <S.VerifyText color={verifyTextColor}>{verifyText}</S.VerifyText>
      )}
    </S.Box>
  );
};

export default Input;
