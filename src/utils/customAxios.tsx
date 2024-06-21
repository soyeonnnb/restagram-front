import axios, { AxiosInstance } from "axios";

const customAxios: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_LOCAL_SERVER_ADDRESS}/api/v1`, // 기본 서버 주소 입력
  withCredentials: true, // 이 옵션을 추가하여 쿠키를 서버로 자동으로 보내줍니다.
});

customAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 401:
          try {
            // 재로그인 요청
            await axios.post(
              `${process.env.REACT_APP_LOCAL_SERVER_ADDRESS}/user/reissue`,
              {},
              { withCredentials: true }
            );
            const response = await customAxios(originalRequest);
            return response;
          } catch (error) {
            console.error("Error during reissue:", error);
            // 재로그인 실패 시 로그아웃 후 로그인 페이지로 리다이렉트
            window.location.href = "/logout";
            return Promise.reject(error);
          }
        default:
          return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default customAxios;
