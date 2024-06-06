const state = {
  isLoading: false,
};
const mutations = {
  setLoading(state) {
    state.isLoading = true;
  },
};
const actions = {
  register(context) {
    setTimeout(() => {
      context.commit('setLoading');
    }, 3000);
  },
};
export default {
  mutations,
  state,
  actions,
};
