const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const github = require('../helpers/github.js')


let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  github.getReposByUsername(req.body, ({ data }) => {
    const repos = [];
    data.forEach(({ name, url, stargazers_count }) => {
      repos.push({ name, url, stargazers_count })
    })
    res.status(200).send(repos);
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

