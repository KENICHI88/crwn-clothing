import React, { Component } from 'react';
import './Shop.style.scss';

import {ShopData} from './ShopData';

import PreViewCollection from '../../components/PreviewCollection/PreViewCollection.component';

class Shop extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      collections: ShopData
    }
  }
  
  
  render() {
    const {collections} = this.state;
    return (
      <div className="shop-page">
        {collections.map(collection => <PreViewCollection key={collection.id} title={collection.title} items={collection.items} />)}
      </div>
    );
  }
}

export default Shop;
