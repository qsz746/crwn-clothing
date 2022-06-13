import { NavLink, Link} from 'react-router-dom';
import React, { useContext } from 'react';
import { Fragment } from 'react';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import styles from './header.module.css';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';

const Header=() =>{

    const {isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleCartDropdown = () => {setIsCartOpen(!isCartOpen)};
    return (
        <Fragment>
            <div className={styles.navigation}>
                <Link className={styles.logoContainer} to='/'>
                   <CrownLogo className={styles.logo} />
                </Link>
                <div className={styles.navLinksContainer}>
                    <nav>
                        <NavLink className={styles.navLink} to='/shop'>SHOP</NavLink>
                        <NavLink className={styles.navLink} to='/contact'>CONTACT</NavLink>
                        <NavLink className={styles.navLink} to='/signin'>SIGN IN</NavLink>
                        <NavLink onClick={toggleCartDropdown} className={styles.navLink} to='/cart'><CartIcon/></NavLink>
                    </nav>
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
        </Fragment>
    )
  }

  export default Header;