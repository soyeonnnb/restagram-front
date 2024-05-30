import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../recoil/UserRecoil";
import { useNavigate } from "react-router-dom";
import customAxios from "../../utils/customAxios";

function SocialLoginSuccess() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const navigation = useNavigate();

  const handleSocialLogin = () => {
    customAxios
      .get(`/customer/info`)
      .then((res) => {
        // 응답을 처리하는 로직을 여기에 작성
        setUserInfo(res.data.data);
        navigation("/");
      })
      .catch((error) => {
        console.error("There was a problem with the Axios request:", error);
      });
  };

  useEffect(() => {
    handleSocialLogin();
  }, []);
  return <></>;
}
export default SocialLoginSuccess;
