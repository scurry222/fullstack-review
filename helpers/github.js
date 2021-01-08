const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = ({ name }, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${name}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  console.log(typeof options.url, options.url)
  axios.get(options.url, options.headers)
  .then((res) =>  callback(res))
  .catch((err) => console.log('Error fetching from github: ', err));
}

module.exports.getReposByUsername = getReposByUsername;