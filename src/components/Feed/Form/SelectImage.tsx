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
    const files: File[] = Array.from(event.target.files || []);

    // 최대 10개 파일 체크
    if (files.length > 10) {
      alert("이미지는 최대 10개까지 선택 가능합니다.");
      return;
    }

    // 유효한 이미지 파일인지 확인하는 함수
    const isValidImageFile = (file: File): boolean =>
      file.type === "image/png" || file.type === "image/jpeg";

    // 10MB 이하인 파일만 선택
    const validFiles: File[] = files.filter((file: File) => {
      const isUnder10MB: boolean = file.size <= 10 * 1024 * 1024; // 10MB 이하인지 확인
      const isValidType: boolean = isValidImageFile(file); // 이미지 파일인지 확인

      if (!isUnder10MB) {
        alert(`10MB 이하의 파일만 업로드할 수 있습니다.`);
      }

      return isUnder10MB && isValidType;
    });

    // 유효한 파일들로 리스트 업데이트
    setFileList(validFiles);
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
