import axios from "axios";

const API = {

  // USER Routes
  getUser: function (credentials) {
    return axios.request({
      method: "GET",
      url: "/api/user",
      headers: {
        Authorization: `Bearer ${credentials.token}`
      }
    });
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

  removeUser: function (credentials) {
    return axios.request({
      method: "DELETE",
      url: "/api/user/",
      headers: {
        Authorization: `Bearer ${credentials.token}`
      }
    });
  },

  // REMOVE CONCEPT IF TOKEN RETRIEVES ALL INFO NEEDED
  // getUsername: function (username) {
  //   return axios.get("/api/user/" + username);
  // },

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
  getSurvey: function (credentials) {
    return axios.request({
      method: "GET",
      url: "/api/survey",
      headers: {
        Authorization: `Bearer ${credentials.token}`
      }
    });
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