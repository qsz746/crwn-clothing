import styles from './cart-dropdown.module.css';
import Button from '../button/button.component';
import React from 'react';

const CartDropdown = () => {
    return(
        <div className={styles.cartDropdownContainer}>
            <div className={styles.cartItems}>
            </div>
            <Button>CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;