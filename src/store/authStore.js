import { defineStore } from "pinia";


export const AuthStore = defineStore("auth", {

    state: () => {
        return { 
           id : '',
           accessToken : '',
           refreshToken : '',
        };
    },
    actions: {
    },
    getters : {     
    }
});