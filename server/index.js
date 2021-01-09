const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const github = require('../helpers/github.js');
const db = require('../database/index.js');


let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  const { name } = req.body;
  github.getReposByUsername(name, (data) => {
    for (const repo of data) {
      db.save(name, repo);
    }
    res.status(200).send();
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.getRepos((err, data) => {
    const repos = [];
    for (let i = 0; i < 25; i++) {
      repos.push(data[i]._doc);
    }
    res.status(200).send(repos);
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

