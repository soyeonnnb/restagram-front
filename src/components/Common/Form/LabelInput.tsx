import * as S from "./LabelInput.styles";
import Input from "./Input";

interface LabelInputProps {
  placeholder: string;
  label: string;
  type: string;
  name: string;
  setValue: any;
}

const LabelInput = ({
  placeholder,
  label,
  type,
  name,
  setValue,
}: LabelInputProps) => {
  return (
    <S.Box>
      <S.Label>{label}</S.Label>
      <Input
        placeholder={placeholder}
        type={type}
        name={name}
        setValue={setValue}
      />
    </S.Box>
  );
};

export default LabelInput;
