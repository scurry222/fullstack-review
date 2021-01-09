const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  user: { type: String, unique: false },
  name: { type: String, unique: true },
  url: { type: String, unique: true },
  stargazers_count: { type: String, unique: false },
  versionKey: false
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (user, repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // const existingUser = Repo.findOne({ user }).select({ _id: 1 }).lean().then(doc => !!doc);
  // if (!existingUser) {
  repos.forEach(({ name, url, stargazers_count }) => {
    const profile = new Repo({ user, name, url, stargazers_count });
    // profile.name = name;
    // profile.url = url;
    // profile.stargazers_count = stargazers_count;
    profile.save((err) => {
      if (err) {
        return console.error(err)
      }
    });
  });
  // }
}


module.exports.save = save;