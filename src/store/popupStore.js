import { defineStore } from "pinia";

export const UserStore = defineStore("user",  {
  state: () => {
    return { 
      popState : false
    };
  },
  actions: {
    
    changeId() {
        this.id = "banana"
    },
    changeName() {
      this.name = "Park";
    },
    // 나이 변경 함수
    changeAge(age) {
      this.age = age;
    },
    setImageUrl(url) {
        this.imageUrl = url;
      }, 
    updateUser({ newId, newName, newAge}) {
        this.getData(newId, newName, newAge);
        
       
    },
    async getData(newId, newName, newAge) {
      try {
        const res = await axios.get(`https://codingapple1.github.io/vue/more0.json`);
        this.imageUrl = res.data.postImage;
        this.isLoggedIn = true;
        this.changeId(newId);
        this.changeName(newName);
        this.changeAge(  Math.floor(Math.random() * (10)));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async logout() {
      try {
        
        this.$reset();
        localStorage.removeItem('user'); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  },
  getters: {
    // imageUrl을 반환하는 getter
    getImageUrl(state) {
      return state.imageUrl;
    },
  },
});