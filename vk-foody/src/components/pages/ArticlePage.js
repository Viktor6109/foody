import React, { Component } from 'react';
import * as api from '../api-mock/api';

export default class ArticlePage extends Component {
  state = {
    id: null,
    name: null,
    image: null,
    description: null,
    ingredients: null,
    price: null,
  };

  componentDidMount() {
    api
      .fetchArticleById(this.props.match.params.id)
      .then(article => this.setState({ ...article }));
  }

  render() {
    const { id, name, image, description, ingredients, price } = this.state;
    return (
      <article>
        <h1>Информация</h1>
        <h3>{name}</h3>
        <img className="img" src={image} width={150} height={150} alt="блюдо" />
        <p>{description}</p>
        <span>
          <b>Ингредиенты: {ingredients}</b>
        </span>
        <br />
        <span>
          <b>Цена: {price}</b>
        </span>
      </article>
    );
  }
}
