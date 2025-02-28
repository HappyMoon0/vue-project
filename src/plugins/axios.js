import axios from 'axios';

const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_BASE_URL,
  timeout : 10000,
  headers: {
    "Content-Type":"application/json"
  }
})

axiosInstance.interceptors.request.use(
  (config) => {
    console.log('axios.js request : ' , config);
    return config
  }, 
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (res) => {
    console.log('axios.js response : ' , res);
    return res
  },
  (error) => {
    return Promise.reject(error);
  }
) 

export default axiosInstance;


const qfront = {
  get(url, params = {}) {
    return instance.get(url, { params })
      .then(response => response.data)
      .catch(error => {
        console.error('GET 요청 실패:', error);
        throw error;
      });
  },

  // POST 요청을 처리하는 qfront.post 메서드
  post(url, data = {}) {
    return instance.post(url, data)
      .then(response => response.data)
      .catch(error => {
        console.error('POST 요청 실패:', error);
        throw error;
      });
  },

  // DELETE 요청을 처리하는 qfront.delete 메서드
  delete(url, data = {}) {
    return instance.delete(url, { data })
      .then(response => response.data)
      .catch(error => {
        console.error('DELETE 요청 실패:', error);
        throw error;
      });
  },

  // PUT 요청을 처리하는 qfront.put 메서드 (추가할 수 있음)
  put(url, data = {}) {
    return instance.put(url, data)
      .then(response => response.data)
      .catch(error => {
        console.error('PUT 요청 실패:', error);
        throw error;
      });
  }
};

//export default qfront;