import DaumPostCode from "react-daum-postcode";
import * as S from "./DaumPost.styles";
import { ReactComponent as XIcon } from "../../assets/icons/circle-x.svg";
import colors from "../Common/colors";

interface DaumPostProps {
  handleShowPost: any;
  setBcode: any;
  setAddress: any;
}

function DaumPost({ handleShowPost, setBcode, setAddress }: DaumPostProps) {
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    const { addressType, bname, buildingName, bcode } = data;
    if (addressType === "R") {
      if (bname !== "") {
        extraAddress += bname;
      }
      if (buildingName !== "") {
        extraAddress += `${extraAddress !== "" && ", "}${buildingName}`;
      }
      fullAddress += `${extraAddress !== "" ? ` (${extraAddress})` : ""}`;
    }
    let newBcode = Math.floor(Number(bcode) / 100) * 100;
    setBcode(newBcode);
    setAddress(fullAddress);
    handleShowPost();
  };
  return (
    <S.Layout>
      <S.Box>
        <DaumPostCode onComplete={handleComplete} />
        <S.IconBox onClick={() => handleShowPost()}>
          <XIcon width={40} height={40} fill={colors.white._50} />
        </S.IconBox>
      </S.Box>
    </S.Layout>
  );
}

export default DaumPost;
