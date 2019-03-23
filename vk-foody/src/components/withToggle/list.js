import React from 'react';
import Article from './article';
import WithToggle from '../enhancers/withToggle';

const TogglableArticle = WithToggle(Article);

const List = ({ items }) => (
  <div>
    {items.map(item => (
      <TogglableArticle key={item.id} {...item} />
    ))}
  </div>
);

export default List;
