import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Vite 환경 변수에서 기본 URL 가져오기
});

export default instance;