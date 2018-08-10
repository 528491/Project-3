import axios from "axios";

const API = {

    // getTests: function(params){
    //     return axios.get("/api/tests");
    // }

    // getUsers: function(id) {
    //   return axios.get("/api/users", {params});
    // },
  /*
  getArticles: function(params) {
    return axios.get("/api/nyt", { params: filterParams(params) });
  },
  // Gets all saved articles
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  // Deletes the saved article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
  */

  // getDayEvents: function(id) {
  //   return axios.get("/api/events" + id);
  // }

  saveEvent: function(eventData, year, month, day) {
    return axios.post(`/api/events/${year}/${month}/${day}`, eventData)
  }

  
};

export default API;
