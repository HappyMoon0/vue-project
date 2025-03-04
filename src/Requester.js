import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost', // 기본 URL 설정
  timeout: 10000, // 타임아웃 설정
  headers: {
    'Content-Type': 'application/json', // 기본 헤더 설정
  },
});

const Requester = {
  request(url, params = {}, callback) {
    // 요청이 진행 중일 때 로딩 상태 관리
    let isLoading = true;

    // Axios 요청 보내기 (GET 방식, 필요시 POST, PUT 등으로 변경)
    axiosInstance
      .get(url, { params }) // GET 요청, POST로 변경 가능
      .then((response) => {
        // 응답 처리
        isLoading = false;
        callback(200, null, response.data); // 성공 시 callback 호출
      })
      .catch((error) => {
        // 오류 처리
        isLoading = false;
        callback(error.response?.status || 500, error, error.response?.data || 'Error'); // 실패 시 callback 호출
      });
  },
};

export default Requester;
