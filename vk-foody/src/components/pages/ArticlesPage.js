import React, { Component } from 'react';
import * as api from '../api-mock/api';
import ArticleList from '../ArticlesList/ArticlesList';

export default class ArticlesPage extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    api.fetchAllArticles().then(articles => this.setState({ articles }));
  }

  render() {
    const { articles } = this.state;
    const { match } = this.props;
    return (
      <div>
        <h2>Articles Page</h2>
        <ArticleList articles={articles} match={match} />
      </div>
    );
  }
}
