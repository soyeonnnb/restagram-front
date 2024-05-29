import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../recoil/UserRecoil";
import customAxios from "../../utils/customAxios";
import { useNavigate } from "react-router-dom";

function Logout() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const navigate = useNavigate();
  const handleLogout = () => {
    customAxios.post("/logout").then(() => {
      setUserInfo(null);
      navigate("/login");
    });
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return <></>;
}
export default Logout;
