import React from 'react';

const Article = ({ name, description, image }) => (
  <article>
    <h2>{name}</h2>
    <p>{description}</p>
    <img className="img" src={image} width={100} height={100} alt="блюдо" />
  </article>
);

export default Article;
