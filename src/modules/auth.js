import AuthServise from "../services/auth";
const state = {
  isLoading: false,
};
const mutations = {
  registerStart(state) {
    state.isLoading = true;
  },
  rgisterSuccsess(state) {
    state.isLoading = false;
  },
  registerFailure(state) {
    state.isLoading = false;
  },
};
const actions = {
  register(context, user) {
    return new Promise((resolve, reject) => {
      context.commit("registerStart");
      AuthServise.register(user)
        .then((response) => {
          context.commit("rgisterSuccsess".response.data.user);
          resolve(response.data.user);
        })
        .catch((error) => {
          context.commit("registerFailure", error.response.data);
          reject(error.response.data);
        });
    });
  },
};
export default {
  mutations,
  state,
  actions,
};
