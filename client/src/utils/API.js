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

  // createSurvey: function () {
  //   return axios.post("/api/survey");
  // },

  createSurvey: function (credentials) {

    // testing
    credentials = {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmU4ZWQzZmZkY2ZhNTBjODRlODE2M2YiLCJ1c2VybmFtZSI6ImJlc3R1c2VyIiwiaWF0IjoxNjA5MTAwNjI2fQ.4jb_Lgz1Tg0zWx2mQZxy45PDWpYaeopWvt40XXEulHI",
      title: 'test title',
      question: 'test question',
      choice: 'test choices'
    }

    console.log(credentials);

    return axios.request({
      method: "POST",
      url: "/api/survey",
      headers: {
        Authorization: `Bearer ${credentials.token}`
      },
      data: {
        surveyData: {
          _id: 1234,
          title: credentials.title,
          question: credentials.question,
          choice: credentials.choice
        }
      }
    });
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