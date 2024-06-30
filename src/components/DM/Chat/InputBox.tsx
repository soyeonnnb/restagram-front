import { Dispatch, SetStateAction } from "react";
import Text from "../../Common/Text";
import * as S from "./InputBox.styles";

interface InputBoxProps {
  setMessage: Dispatch<SetStateAction<string>>;
  handleChat: () => void;
  message: string;
}

function InputBox({ setMessage, handleChat, message }: InputBoxProps) {
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleChat();
    }
  };

  return (
    <S.Layout>
      <S.Input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <S.Button onClick={() => handleChat()}>
        <Text text="전송" size="0.9rem" pointer />
      </S.Button>
    </S.Layout>
  );
}
export default InputBox;
