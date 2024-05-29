import * as S from "./Input.styles";

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  setValue: any;
  disable?: boolean;
  verifyText?: string;
}

const Input = ({
  placeholder,
  type,
  name,
  setValue,
  disable,
  verifyText,
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
      />
      {verifyText !== "" && <S.VerifyText>{verifyText}</S.VerifyText>}
    </S.Box>
  );
};

export default Input;
