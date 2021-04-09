import React from 'react';
import './Head.style.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/images/crown.svg';
import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';

import { auth } from '../../firebase/firebase.utils';

import {connect} from 'react-redux';

const Header = ({currentUser, hidden}) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">Shop</Link>
        <Link className="option" to="/contact">Contact</Link>
        {
        currentUser ? <div className="option" onClick={() => auth.signOut()}>
          Sign out
        </div>: <Link className="option" to="/signin">Sign in</Link>
      }
        <CartIcon />
      </div>
      { hidden ? null : <CartDropdown />}
    </div>
  )
  
}

const mapStateToProps = ({user : {currentUser}, cart : {hidden}}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps, null)(Header);
