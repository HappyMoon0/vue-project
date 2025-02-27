export const MainStore = {
    state: () => ({ counter: 10 }),
    mutations: {
      setCounter(state, value) {
        state.counter = value;
      }
    },
    getters: {
        time2(state) {
          return state.counter * 2;
        }
    },
    actions: {
      test() {
        console.log(4);
      }
    }  
  };