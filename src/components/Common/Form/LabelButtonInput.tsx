import * as S from "./LabelButtonInput.styles";
import Input from "./Input";
import colors from "../colors";
import { ReactComponent as CheckIcon } from "../../../assets/icons/CircleCheckIcon.svg";
import { ReactComponent as XIcon } from "../../../assets/icons/CircleXIcon.svg";

interface LabelButtonInputProps {
  placeholder: string;
  label: string;
  type: string;
  name: string;
  setValue: any;
  disable?: boolean;
  buttonText: string;
  buttonFunction: any;
  check?: boolean | null;
}

const LabelButtonInput = ({
  placeholder,
  label,
  type,
  name,
  setValue,
  disable,
  buttonText,
  buttonFunction,
  check,
}: LabelButtonInputProps) => {
  return (
    <S.Layout>
      <S.Label>{label}</S.Label>
      <S.Box>
        <Input
          placeholder={placeholder}
          type={type}
          name={name}
          setValue={setValue}
          disable={disable}
        />
        <S.LeftBox>
          {check === true && (
            <CheckIcon width={23} height={23} fill={colors.green._300} />
          )}
          {check === false && (
            <XIcon width={23} height={23} fill={colors.red._300} />
          )}
          <S.Button onClick={() => buttonFunction()}>
            <S.ButtonText>{buttonText}</S.ButtonText>
          </S.Button>
        </S.LeftBox>
      </S.Box>
    </S.Layout>
  );
};

export default LabelButtonInput;
