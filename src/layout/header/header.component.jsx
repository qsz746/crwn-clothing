import { NavLink, Link} from 'react-router-dom';
import React from 'react';
import { Fragment } from 'react';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import styles from './header.module.css';

const Header=() =>{
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
                    </nav>
                </div>
            </div>
        </Fragment>
    )
  }

  export default Header;