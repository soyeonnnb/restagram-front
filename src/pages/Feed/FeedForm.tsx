import { useRecoilValue } from "recoil";
import Text from "../../components/Common/Text";
import * as S from "./FeedForm.styles";
import { userInfoState } from "../../recoil/UserRecoil";
import { useEffect, useState } from "react";
import SelectUser from "../../components/Feed/Form/SelectUser";
import SelectImage from "../../components/Feed/Form/SelectImage";
import FeedInput from "../../components/Feed/Form/FeedInput";
import { StoreInfoInterface } from "../../interfaces/UserInterfaces";
import SelectStoreCard from "../../components/Feed/Form/SelectStoreCard";
import axios from "axios";

function FeedForm() {
  const userInfo = useRecoilValue(userInfoState);
  const [store, setStore] = useState<StoreInfoInterface | null>(null);
  const [open, setOpen] = useState<number>(0);
  const [fileList, setFileList] = useState<File[]>([]);
  const [content, setContent] = useState<string>("");
  const [hashtagList, setHashtagList] = useState<string[]>([]);

  useEffect(() => {
    if (!userInfo) return;
    setOpen(userInfo.type === "CUSTOMER" ? 1 : 2);
  }, [userInfo]);

  const handleSubmit = () => {
    if (store === null) {
      alert("가게를 선택해주세요");
      return;
    }
    if (fileList.length === 0) {
      alert("이미지는 필수입니다");
      return;
    }
    if (content.length === 0) {
      alert("내용을 작성해주세요");
      return;
    }
    const body = {
      storeId: store.id,
      content,
      hashtag: hashtagList.join(","),
    };
    const formData = new FormData();

    formData.append(
      "req",
      new Blob([JSON.stringify(body)], { type: "application/json" })
    );

    fileList.forEach((file) => {
      formData.append("images", file);
    });

    axios.post(
      `${process.env.REACT_APP_LOCAL_SERVER_ADDRESS}/api/v1/feed`,
      formData,
      {
        // headers: { "Content-Type": "multipart/form-data", charset: "utf-8" },
        withCredentials: true,
      }
    );
  };

  return (
    <S.Layout>
      {userInfo?.type === "CUSTOMER" && (
        <S.Section>
          <S.Title
            onClick={() => setOpen(open === 1 ? 0 : 1)}
            set={store !== null}
          >
            <Text text="가게 선택" color="white" weight={400} pointer />
          </S.Title>
          {store && (
            <S.Middle>
              <SelectStoreCard store={store} view={true} />
            </S.Middle>
          )}
          {open === 1 && <SelectUser setStore={setStore} setOpen={setOpen} />}
        </S.Section>
      )}
      <S.Section>
        <S.Title
          onClick={() => setOpen(open === 2 ? 0 : 2)}
          set={fileList.length > 0}
        >
          <Text text="이미지 선택" color="white" weight={400} pointer />
        </S.Title>
        {open === 2 && (
          <SelectImage
            fileList={fileList}
            setFileList={setFileList}
            setOpen={setOpen}
            open={open}
          />
        )}
        {fileList.length > 0 && (
          <S.ImageList>
            {fileList.map((file: File, idx: number) => (
              <S.ImageBox key={idx}>
                <S.Image
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  onLoad={() => URL.revokeObjectURL(URL.createObjectURL(file))} // 메모리 누수를 방지하기 위해 로드 후 URL 해제
                />
              </S.ImageBox>
            ))}
          </S.ImageList>
        )}
      </S.Section>
      <S.Section>
        <S.Title
          onClick={() => setOpen(open === 3 ? 0 : 3)}
          set={content.length > 0}
        >
          <Text text="피드 작성" color="white" weight={400} pointer />
        </S.Title>
        {open === 3 && (
          <FeedInput
            content={content}
            setContent={setContent}
            hashtagList={hashtagList}
            setHashtagList={setHashtagList}
          />
        )}
      </S.Section>
      {store !== null && fileList.length > 0 && content.length > 0 && (
        <S.Section>
          <S.ButtonBox>
            <S.Button onClick={() => handleSubmit()}>
              <Text text="업로드" pointer weight={500} />
            </S.Button>
          </S.ButtonBox>
        </S.Section>
      )}
    </S.Layout>
  );
}

export default FeedForm;
