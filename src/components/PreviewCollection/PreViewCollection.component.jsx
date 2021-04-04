import React from 'react';
import './PreViewCollection.scss';

import CollectionItem from '../CollectionItem/CollectionItem.component';

function PreViewCollection({title, items}) {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items.filter((item, ind) => ind < 4).map(item => (
          <CollectionItem key={item.id} {...item}></CollectionItem>))}
      </div>
    </div>
  )
}

export default PreViewCollection
