import * as S from "./LabelButtonInput.styles";
import Input from "./Input";
import colors from "../colors";
import { ReactComponent as CheckIcon } from "../../../assets/icons/circle-check.svg";
import { ReactComponent as XIcon } from "../../../assets/icons/circle-x.svg";

interface LabelButtonInputProps {
  placeholder: string;
  label: string;
  type: string;
  name: string;
  value?: any;
  setValue: any;
  disable?: boolean;
  buttonText?: string;
  buttonFunction?: any;
  check?: boolean | null;
  verifyText?: string;
  verifyTextColor?: string;
}

const LabelButtonInput = ({
  placeholder,
  label,
  type,
  name,
  value,
  setValue,
  disable,
  buttonText,
  buttonFunction,
  check,
  verifyText,
  verifyTextColor,
}: LabelButtonInputProps) => {
  return (
    <S.Layout>
      <S.Label>{label}</S.Label>
      <S.Box>
        <Input
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          setValue={setValue}
          disable={disable}
          verifyText={verifyText}
          verifyTextColor={verifyTextColor}
        />
        <S.LeftBox>
          {check === true && (
            <CheckIcon width={23} height={23} fill={colors.green._300} />
          )}
          {check === false && (
            <XIcon width={23} height={23} fill={colors.red._300} />
          )}
          {buttonText && (
            <S.Button onClick={() => buttonFunction()}>
              <S.ButtonText>{buttonText}</S.ButtonText>
            </S.Button>
          )}
        </S.LeftBox>
      </S.Box>
    </S.Layout>
  );
};

export default LabelButtonInput;
