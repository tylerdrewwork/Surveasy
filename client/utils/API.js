import axios from "axios";

export default {
  getUsers: function () {
    return axios.get("/api/user");
  },

  createUser: function () {
    return axios.post("/api/user");
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

  //   getSurvey: function () {
  //     return axios.get("/api/survey");
  //   },

  //   getSurveyId: function (id) {
  //     return axios.get("/api/survey/" + id);
  //   },
};
