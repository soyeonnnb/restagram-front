import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userInfoState } from "../../recoil/UserRecoil";
import customAxios from "../../utils/customAxios";
import { useNavigate } from "react-router-dom";

function Logout() {
  const setUserInfo = useSetRecoilState(userInfoState);
  const navigate = useNavigate();
  const handleLogout = () => {
    customAxios.post("/user/logout").then(() => {
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
