const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  user: { type: String, unique: false },
  name: { type: String, unique: true },
  url: { type: String, unique: true },
  stargazers_count: { type: String },
  versionKey: false
});

let Repo = mongoose.model('Repo', repoSchema);

const save = function(user, { name, url, stargazers_count }) {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  const profile = new Repo({ user, name, url, stargazers_count });
  profile.save();
}


module.exports.save = save;