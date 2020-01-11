import AuthService from "@/services/AuthService";

export const namespaced = true;

export const state = {
  user: null,
  token: window.localStorage.getItem("token"),
  loading: false,
  error: null
};

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  CLEAR_USER() {
    window.localStorage.clear();
    location.reload();
  },
  SET_TOKEN(state, token) {
    state.token = token;
    window.localStorage.setItem("token", token);
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_MESSAGE(state, message) {
    state.message = message;
  },
  SET_ERROR(state, error) {
    state.error = error;
  }
};

export const actions = {
  login({ commit }, payload) {
    commit("SET_LOADING", true);
    return AuthService.login(payload)
      .then(response => {
        commit("SET_TOKEN", response.data.token);
        commit("SET_LOADING", false);
      })
      .catch(error => {
        commit("SET_LOADING", false);
        commit("SET_ERROR", error.data.message);
      });
  },
  logout({ commit }) {
    return AuthService.logout()
      .then(() => {
        commit("CLEAR_USER");
      })
      .catch(() => {
        commit("CLEAR_USER");
      });
  }
};

export const getters = {
  authUser: state => {
    return state.user;
  },
  error: state => {
    return state.error;
  },
  loading: state => {
    return state.loading;
  },
  loggedIn: state => {
    return !!state.user;
  }
};
