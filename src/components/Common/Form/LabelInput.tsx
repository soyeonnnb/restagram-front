import * as S from "./LabelInput.styles";
import Input from "./Input";

interface LabelInputProps {
  placeholder: string;
  label: string;
  type: string;
  name: string;
  setValue: any;
  verifyText?: string;
  verifyTextColor?: string;
}

const LabelInput = ({
  placeholder,
  label,
  type,
  name,
  setValue,
  verifyText,
  verifyTextColor,
}: LabelInputProps) => {
  return (
    <S.Box>
      <S.Label>{label}</S.Label>
      <Input
        placeholder={placeholder}
        type={type}
        name={name}
        setValue={setValue}
        verifyText={verifyText}
        verifyTextColor={verifyTextColor}
      />
    </S.Box>
  );
};

export default LabelInput;
