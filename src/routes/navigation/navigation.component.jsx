import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import { Fragment } from 'react';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import styles from './navigation.module.css';

const Navgation=() =>{
    return (
        <Fragment>
            <div className={styles.navigation}>
                <Link className={styles.logoContainer} to='/'>
                   <CrownLogo className={styles.logo} />
                </Link>
                <div className={styles.navLinksContainer}>
                    <Link className={styles.navLink} to='/shop'>SHOP</Link>
                    <Link className={styles.navLink} to='/contact'>CONTACT</Link>
                    <Link className={styles.navLink} to='/signin'>SIGN IN</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
  }

  export default Navgation;