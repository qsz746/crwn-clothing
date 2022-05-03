import React, { Fragment } from 'react';
import styles from './product-card.module.css';
import Button from '../button/button.component';

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    return(
        <Fragment>
            <div className={styles.productCardContainer}>
                <img className={styles.productCardImg} src={imageUrl} alt={`${name}`}/>
                <div className={styles.footer}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.price}>{price}</span>
                </div>
                <Button buttonType="inverted">Add to Cart</Button>
            </div>
        </Fragment>
    )
}

export default ProductCard;