import axios, { AxiosInstance } from "axios";
import { useNavigate } from "react-router-dom";

const customAxios: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_LOCAL_SERVER_ADDRESS}`, // 기본 서버 주소 입력
  withCredentials: true,
});

const handle401Error = () => {
  // 401 에러 처리
  alert("로그인이 필요합니다.");
  // 로그인 페이지로 이동
  window.location.href = "/login"; // 또는 useHistory 훅을 사용하여 이동
};

customAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status) {
      switch (error.response.status) {
        // status code가 401인 경우 `logout`을 커밋하고 `/login` 페이지로 리다이렉트
        case 401:
          handle401Error();
          return;
        // 이행되지 않는 Promise를 반환하여 Promise Chaining 끊어주기
        // return new Promise(() => {});
        // default:
        //   return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default customAxios;
