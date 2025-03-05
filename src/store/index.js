import { createStore } from "vuex";
import { AuthStore } from "@/store/authStore"; 

export default createStore({
    modules: { 
        AuthStore
     }
  });
   