import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../recoil/UserRecoil";
import customAxios from "../../utils/customAxios";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Logout() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const navigate = useNavigate();
  const url = process.env.REACT_APP_LOCAL_SERVER_ADDRESS + "/user/logout";
  const handleLogout = () => {
    axios.post(url, {}, { withCredentials: true }).then(() => {
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
