var axios = require('axios');

module.exports = {
  fetchPopularRepos: function (language){
    var encondedURI = window.encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:"
                                       + language + "&sort=stars&order=desc&type=Repositories");

   return axios.get(encondedURI)
      .then(function(response){
        return response.data.items;
      })
  }
}
