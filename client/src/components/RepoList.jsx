import React from 'react';

const RepoList = ({ repos }) => (
  <div>
    <div className="repo-list">
    {
      repos.map((repo, i) =>
        <div key={i} className="repo">
          <a href={repo.html_url}>{repo.name}</a>
          <div>stars: {repo.stargazers_count}</div>
        </div>
      )
    }
    </div>
  </div>
)

export default RepoList;