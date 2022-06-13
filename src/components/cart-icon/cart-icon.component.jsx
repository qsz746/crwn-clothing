import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import styles from './cart-icon.module.css';
import React from 'react';

const CartIcon = () => {
    return(
        <div className={styles.cartIconContainer}>
            <ShoppingIcon className={styles.shoppingIcon}/>
            <span className={styles.itemCount}>0</span>
        </div>
    )

};

export default CartIcon;