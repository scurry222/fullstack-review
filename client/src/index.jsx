import React from 'react';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';
import axios from 'axios'
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    }
    this.search = this.search.bind(this);
    this.getRepos = this.getRepos.bind(this);
  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos() {
    axios.get('/repos')
      .then(({data: repos}) =>
        this.setState({ repos })
      )
      .catch((err) => console.log('Error getting from db: ', err));
  }


  search (term) {
    console.log(`${term} was searched`);
    ajax({
      url: '/repos',
      method: 'POST',
      data: { name: term },
      success: this.getRepos,
      error: (error) => console.log('There was an error posting this user: ', error)
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));