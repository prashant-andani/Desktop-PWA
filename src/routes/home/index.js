import { h, Component } from 'preact';
import style from './style';
import Star from './../../components/star';
import Fork from './../../components/fork';
import { Link } from 'preact-router/match';

import {
  fetchAllLanguages,
  fetchRepositories,
  fetchDevelopers
} from '@huchenme/github-trending';

export default class Home extends Component {
  state = {
    trendingRepos: []
  };

  // update the current time

  // gets called when this route is navigated to
  componentDidMount() {
    // fetchAllLanguages().then(languages => {
    //   console.log(languages);
    // });

    fetchRepositories({ language: '', since: 'week' }).then(repositories => {
      this.setState({ trendingRepos: repositories });
    });

    // fetchDevelopers({ language: 'javascript' }).then(developers => {
    //   console.log(developers);
    // });
  }

  // gets called just before navigating away from the route
  componentWillUnmount() {}

  render() {
    return (
      <div class={style.home}>
        <div style={{ fontSize: '18px' }}>
          <Link activeClassName={style.active} href="/help">
            Install this Web App as a Desktop App in Mac Os, Linux and Windows
          </Link>
        </div>
        <h2>Trending Repositories</h2>
        {this.state.trendingRepos.map(repo => (
          <a
            style={{ textDecoration: 'none', color: '#000' }}
            href={repo.url}
            target="_blank"
          >
            <div class={style.card}>
              <div>
                <span class={style.author}>{repo.author}</span> /
                <span class={style.name}> {repo.name}</span>
              </div>

              <div class={style.description}>{repo.description}</div>
              <div class={style.bottom}>
                {repo.language && (
                  <span>
                    <span
                      class={style.language}
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    <span class={style.langname}>{repo.language}</span>
                  </span>
                )}

                <span
                  style={{
                    marginLeft: '20px',
                    fontSize: '12px',
                    color: '#586069'
                  }}
                >
                  <Star />
                  {repo.stars}
                </span>
                <span
                  style={{
                    marginLeft: '20px',
                    fontSize: '12px',
                    color: '#586069'
                  }}
                >
                  <Fork />
                  {repo.forks}
                </span>
              </div>
            </div>
          </a>
        ))}
        {this.state.trendingRepos.length < 1 && (
          <div class={style.loader}>Fetching repositories...</div>
        )}
      </div>
    );
  }
}
