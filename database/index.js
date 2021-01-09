const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  user: { type: String, unique: false },
  id: { type: Number, unique: true },
  name: { type: String, unique: true },
  url: { type: String, unique: true },
  stargazers_count: { type: Number },
  versionKey: false
});

let Repo = mongoose.model('Repo', repoSchema);

const save = function(user, { id, name, url, stargazers_count }) {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  const profile = new Repo({ user, id, name, url, stargazers_count });
  profile.save();
}

const getRepos = function(callback) {
  Repo.find().sort({'stargazers_count': 'asc'}).exec((err, repos) => {
    if (err) {
      callback('Error retrieving from db: ', err);
      return;
    }
    callback(null, repos);
  })
}


module.exports = {
  save,
  getRepos
};