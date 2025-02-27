import axios from "axios";

export const UserStore = {
    state: () => ({
        id: "kim20",
        name: "kim",
        age: 20,
        morePost: {},
    }),
    mutations: {
        changeName(state) {
            state.name = "Park";
        },
        // 나이 변경 함수
        changeAge(state) {
            state.age++;
        },
        setMorePost(state, data) {
            state.morePost = data;

            state.name = data.name;
            state.age = data.likes;
        },
    },
    getters: {
        
    },
    actions: {
        getData(context) {
            axios.get(`https://codingapple1.github.io/vue/more0.json`).then((res) => {
              console.log(res.data);
              context.commit("setMorePost", res.data);
            });
          },
    } 
  };