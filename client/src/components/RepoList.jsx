import React from 'react';

const RepoList = ({ repos }) => (
  <div>
    {console.log(repos)}
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    {
      repos.map((repo, i) =>
        <a key={i} href={repo.html_url}>{repo.name}</a>
      )
    }
  </div>
)

export default RepoList;