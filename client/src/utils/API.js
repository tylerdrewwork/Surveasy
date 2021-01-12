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
  getUserSurveys: function (token) {
    return axios.request({
      method: "GET",
      url: "/api/survey",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },

  getUserSurveyById: function (surveyId, token) {
    return axios.request({
      method: "GET",
      url: `/api/survey/?id=${surveyId}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },

  createSurvey: function (surveyData, token) {
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

  updateSurvey: function (surveyData, token) {
    return axios.request({
      method: "PUT",
      url: "/api/survey",
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        title: surveyData.title,
        active: surveyData.active,
        public: surveyData.public
      }
    });
  },

  deleteSurvey: function (surveyId, token) {
    return axios.request({
      method: "DELETE",
      url: `/api/survey/?id=${surveyId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  },

  // Take Survey Routes
  takeSurvey: function (surveyId) {
    return axios.request({
      method: 'GET',
      url: `/api/taking_survey/?surveyId=${surveyId}`
    });
  },

  updateSurveyVote: function (surveyId, questionId, choiceId) {
    return axios.request({
      method: 'PUT',
      url: `/api/taking_survey/?surveyId=${surveyId}`,
      data: {
        questionId: questionId,
        choiceId: choiceId
      }
    })
  }
};

export default API;