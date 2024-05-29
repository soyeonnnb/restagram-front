import * as S from "./Input.styles";

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  setValue: any;
  disable?: boolean;
}

const Input = ({ placeholder, type, name, setValue, disable }: InputProps) => {
  const handleInputChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <S.Input
      placeholder={placeholder}
      type={type ? type : "text"}
      onChange={handleInputChange}
      disabled={disable}
    />
  );
};

export default Input;
