import React from 'react';
import CustomButton from '../CustomButton/CustomButton.components';

import './CartDropdown.style.scss';

const CartDropdown = (props) => {
  return (
    <div className="cart-dropdown" >
      <div className="cart-items">
        
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default (CartDropdown);
