import logo from '../images/logo.png';
import cart from '../images/cart.png';
import menuBtn from '../images/menu-btn.png';
import { useState } from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    let [toggle, settoggle] = useState(false);

    const toggleMenu=()=>{
        settoggle(toggle=!toggle);
    }
    
    return ( 
        <div className="navbar">
            <div className="logo-div">
                <Link to="/"><img src={logo} alt="Main-page"/></Link>
            </div>
            <div className={toggle?'nav-items show':'nav-items'}>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/menu">MENU</Link></li>
                <li><Link to="#">CONTACT</Link></li>
                <li><Link to="/cart"><img src={cart} alt=""/></Link></li>
            </div>
            <img src={menuBtn} className="menuBtn" alt="Menu" onClick={toggleMenu}/>
        </div>
     );
}
 
export default Navbar;