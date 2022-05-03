import styles from './button.module.css';
import React from 'react';
/*
default 
inverted
google
*/

const BUTTON_TYPE_CLASSES = {
    google: 'googleSignIn',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
    const buttonClassName = `${BUTTON_TYPE_CLASSES[buttonType]}`;
    return(
        <button className={`${styles.buttonContainer} ${styles[buttonClassName]}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;