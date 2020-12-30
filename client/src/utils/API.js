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
  getUserSurveys: function (credentials) {
    return axios.request({
      method: "GET",
      url: "/api/survey",
      headers: {
        Authorization: `Bearer ${credentials.token}`
      }
    });
  },

  getSurveyById: function (credentials, surveyId) {
    return axios.request({
      method: "GET",
      url: `/api/survey/?id=${surveyId}`,
      headers: {
        Authorization: `Bearer ${credentials.token}`
      }
    });
  },

  // createSurvey: function () {
  //   return axios.post("/api/survey");
  // },

  createSurvey: function (surveyData, token) {

    // TESTING AND DATA MODEL REFERENCE
    // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmU4ZWQzZmZkY2ZhNTBjODRlODE2M2YiLCJ1c2VybmFtZSI6ImJlc3R1c2VyIiwiaWF0IjoxNjA5MTAwNjI2fQ.4jb_Lgz1Tg0zWx2mQZxy45PDWpYaeopWvt40XXEulHI";
    // surveyData = {
    //   title: 'quiz title',
    //   active: true,
    //   public: false,
    //   questions: [{
    //     question: "Question 1",
    //     choices: [{
    //       choice: "Test Choice"
    //     }]
    //   }, {
    //     question: "Question 2",
    //     choices: [{
    //       choice: "Test Choice"
    //     }]
    //   }]
    // }

    return axios.request({
      method: "POST",
      url: "/api/survey",
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        surveyData: surveyData
      }
    });
  },

  // updateSurvey: function (id) {
  //   return axios.put("/api/survey/" + id);
  // },

  deleteSurvey: function (surveyId, token) {
    return axios.request({
      method: "DELETE",
      url: `/api/survey/?id=${surveyId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  },
};

export default API;