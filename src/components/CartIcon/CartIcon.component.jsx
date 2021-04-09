import React from 'react'
import './CartIcon.style.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/images/shopping-bag.svg';

import {connect} from 'react-redux';
import {setToggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

const CartIcon = (props) => {
  const {setToggleCartHidden} = props;
  return (
    <div className="cart-icon" onClick={() => setToggleCartHidden()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{props.itemCount}</span>
    </div>
  )
}

const mapStateToProps = (state) => ({
  itemCount : selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
  setToggleCartHidden : () => dispatch(setToggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
