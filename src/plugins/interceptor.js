import axiosInstance from "@/plugins/axios";

const setup = (store) => {
    axiosInstance.interceptors.request.use(
      async (config) => {

        console.log('store', store);
        console.log('axios.js request : ' , config);
        if (import.meta.env.VITE_IS_LOGIN === 'Y') {
          const { cookies } = useCookies();
          config.headers['x-access-token'] = cookies.get('accessToken');
          config.headers['x-refresh-token'] = cookies.get('refreshToken');
          return config;
        } else {
          return config;
        }
      }, 
      (error) => {
        console.error('axios.js request error : ', error);
        return Promise.reject(error);
      }
    );
  
    axiosInstance.interceptors.response.use(
      (res) => {
        console.log('axios.js response : ' , res);
        return res;
      },
      async (error) => {
        console.error('axios.js response error : ', error);
        if (import.meta.env.VITE_IS_LOGIN === 'Y') {
          const { cookies } = useCookies();
          const errorRes = error.response;
          const errorAPI = error.response.config; 
  
          if (cookies.get('refreshToken') === null) {
            store.needLogin = true;  
            return Promise.reject(error);
          } else {
            if (errorRes.status === 419) {  
              try {
                await authStore.refreshToken();  
                return instance(errorAPI);
              } catch (err) {
                console.error('err');
                return Promise.reject(err);
              }
            }
            if (errorRes.status === 401) { 
              console.warn('Invalid token', error);
              store.needLogin = true;  
              alert('Please log in again.');
              return Promise.reject(error);
            }
          }
        }
        return Promise.reject(error);
      }
    );
  };
  
  export default setup;