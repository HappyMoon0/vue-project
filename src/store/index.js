import { createStore } from "vuex";
import { MainStore } from "@/store/mainStore";
import { UserStore } from "@/store/userStore";

export default createStore({
    modules: { 
        MainStore,
        UserStore
     }
  });
   