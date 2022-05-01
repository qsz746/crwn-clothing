import styles from './category-item.module.css';
import React from 'react';
import { Fragment } from 'react';

const CategoryItem = ({category}) =>{
    const {imageUrl, title} = category;
    return (
        <Fragment>
            <div className={styles.categoryContainer}>
                <div style={{backgroundImage: `url(${imageUrl})`}} className={styles.backgroundImage}>
                <div className={styles.categoryBodyContainer}>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </div>
                </div>
            </div>
            ))
        </Fragment>
      );
}
export default CategoryItem;