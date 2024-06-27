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
  value?: string | number;
  min?: string;
  max?: string;
}

const LabelInput = ({
  placeholder,
  label,
  type,
  name,
  setValue,
  verifyText,
  verifyTextColor,
  value,
  min,
  max,
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
        value={value}
        min={min}
        max={max}
      />
    </S.Box>
  );
};

export default LabelInput;
