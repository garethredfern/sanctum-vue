import * as API from "./API.js";

export default {
  login(payload) {
    return API.apiClient.post("/auth/login", payload);
  },
  logout() {
    return API.apiClient.post("/auth/logout");
  }
};
