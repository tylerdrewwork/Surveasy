import axios from "axios";

const API = {

  // USER Routes
  getUser: function () {
    return axios.get("/api/user");
  },

  createUser: function (credentials) {
    return axios.request({
      method: "POST",
      url: "/api/user/",
      data: {
        username: credentials.Username,
        password: credentials.Password,
        email: credentials.Email
      }
    });
  },

  getUserId: function (id) {
    return axios.get("/api/user/" + id);
  },

  removeUser: function (id) {
    return axios.delete("/api/user/" + id);
  },

  getUsername: function (username) {
    return axios.get("/api/user/" + username);
  },

  // AUTHORIZATION Routes
  getAuthorization: function (credentials) {
    return axios.request({
      method: "POST",
      url: "/api/auth/",
      data: {
        username: credentials.username,
        password: credentials.password
      }
    });
  },

  // SURVEY Routes
  getSurvey: function () {
    return axios.get("/api/survey");
  },

  createSurvey: function () {
    return axios.post("/api/survey");
  },

  getSurveyId: function (id) {
    return axios.get("/api/survey/" + id);
  },

  updateSurvey: function (id) {
    return axios.put("/api/survey/" + id);
  },

  deleteSurvey: function (id) {
    return axios.delete("/api/survey/" + id);
  },
};

export default API;