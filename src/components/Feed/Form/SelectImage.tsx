import { Dispatch, SetStateAction, useEffect } from "react";
import * as S from "./SelectImage.styles";
import { ReactComponent as ImageIcon } from "../../../assets/icons/image.svg";
import Text from "../../Common/Text";

type SelectImageProps = {
  fileList: File[];
  setFileList: Dispatch<SetStateAction<File[]>>;
  setOpen: Dispatch<SetStateAction<number>>;
  open: number;
};

function SelectImage({
  fileList,
  setFileList,
  setOpen,
  open,
}: SelectImageProps) {
  const handleChangeFile = (event: any) => {
    const inputs: File[] = Array.from(event.target.files || []);
    if (inputs.length > 10) {
      alert("이미지는 최대 10개까지 선택 가능합니다.");
      return;
    }
    const allFilesAreValid = inputs.every(
      (file) => file.type === "image/png" || file.type === "image/jpeg"
    );

    if (!allFilesAreValid) {
      alert("이미지 파일만 등록 가능합니다.");
      return;
    }
    setFileList(inputs);
    setOpen(3);
  };
  useEffect(() => {
    // 컴포넌트가 언마운트될 때 모든 URL을 해제합니다.
    return () => {
      fileList.forEach((file) =>
        URL.revokeObjectURL(URL.createObjectURL(file))
      );
    };
  }, [fileList]);
  return (
    <S.Layout>
      <S.InputBox>
        <S.Input
          type="file"
          multiple
          id="file"
          name="file"
          onChange={handleChangeFile}
          accept="image/png,image/jpeg"
        />
        <S.InputLabel htmlFor="file">
          <ImageIcon width={25} height={25} fill="white" />
          <Text text="이미지 선택" color="white" marginl={15} />
        </S.InputLabel>
      </S.InputBox>
    </S.Layout>
  );
}
export default SelectImage;
