import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    dec(state) {
      state.count -= 1;
    },
    reset(state) {
      state.count = 0;
    },
  },
});

export default store;
