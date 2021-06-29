import logo from '../images/logo.png';
import cart from '../images/cart.png';
import menuBtn from '../images/menu.svg';
import cancelbtn from '../images/x-circle.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  let [toggle, settoggle] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleMenu = () => {
    settoggle((toggle = !toggle));
  };
  const toggleCart = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <div className='navbar'>
      <div className='logo-div'>
        <a>
          <img src={logo} alt='Main-page' />
        </a>
      </div>
      <div className={toggle ? 'nav-items show' : 'nav-items'}>
        <li>
          <a>
            <Link to='/Home'>ABOUT</Link>
          </a>
        </li>
        <li>
          <a>
            <Link to='/Menu'>MENU</Link>
          </a>
        </li>
        <li>
          <a>
            <Link to='/Contact'>CONTACT</Link>
          </a>
        </li>
        <li onClick={toggleCart}>
          <img src={cart} alt='' /> <span>{totalQuantity}</span>
        </li>
      </div>
      <img
        src={toggle ? cancelbtn : menuBtn}
        className='menuBtn'
        alt='Menu'
        onClick={toggleMenu}
      />
    </div>
  );
};

export default Navbar;
