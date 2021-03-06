import React from 'react'
import './CollectionItem.style.scss';
import {connect} from 'react-redux';
import { addItem} from '../../redux/cart/cart.actions';

import CustomButton from '../CustomButton/CustomButton.components';

function CollectionItem({ item, addItem}) {
  const {id, name, price, imageUrl} = item;
  const handleAddItem = () => {
    console.log('trigger');
    addItem(item);
  }
  
  return (
    <div className="collection-item">
      <div className="image"
        style={{backgroundImage : `url(${imageUrl})`}}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={handleAddItem}> Add to cart</CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem : (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
