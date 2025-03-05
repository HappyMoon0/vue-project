import { defineStore } from "pinia";
import { useCookies } from "vue3-cookies";

export const AuthStore = defineStore("auth", {

    state: () => {
        return { 
           id : '',
           accessToken : '',
           refreshToken : '',
           needLogin: false,
        };
    },
    actions: {
        async login(params) { // 로그인 및 토큰 처리
          try {
            const rs = await axios.post('/api/auth/login', params);
            const { cookies } = useCookies();
            if (rs.data.ok) {
              const access = rs.data.result.accessToken;
              const refresh = rs.data.result.refreshToken;
              cookies.set('accessToken', access, import.meta.env.VITE_ACCESS_TIME);
              cookies.set('refreshToken', refresh, import.meta.env.VITE_REFRESH_TIME);
              this.needLogin = false;
            }
            return rs.data.msg;
          } catch (err) {
            console.error(err);
            throw err;
          }
        },
        
        async verifyToken() { // 라우터 이동 시 토큰 검증
          try {
            const rs = await axios.post('/api/auth/accessTokenCheck');
            if (rs.data.ok) {
              return true;
            } else {
              console.error(rs.data.msg);
              alert(rs.data.result);
              this.needLogin = true;
              return false;
            }
          } catch (err) {
            console.error(err);
            throw err;
          }
        },
        
        async refreshToken() { // 토큰 재발급
          try {
            const rs = await axios.post('/api/auth/refreshToken');
            const { cookies } = useCookies();
            if (rs.data.ok) {
              const access = rs.data.result.accessToken;
              const refresh = rs.data.result.refreshToken;
              cookies.set('accessToken', access, import.meta.env.VITE_ACCESS_TIME);
              cookies.set('refreshToken', refresh, import.meta.env.VITE_REFRESH_TIME);
              this.needLogin = false;
              return true;
            } else {
              console.error(rs.data.msg);
              this.needLogin = true;
              return false;
            }
          } catch (err) {
            console.error(err);
            throw err;
          }
        },
    },
});